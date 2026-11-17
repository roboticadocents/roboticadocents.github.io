// check-es:skip
'use strict';

/**
 * _scripts/lib/semantic-html.js
 *
 * Fase 2 del pipeline de compilació:
 * Rep l'HTML estàndard generat per markdown-it, el converteix en un arbre DOM
 * i aplica les transformacions semàntiques de Robòtica²⁰⁰:
 * - Seccions canòniques (<section class="detail-section" data-section-group="...">)
 * - Passos navegables (<section class="learning-step">) i fases (<section class="learning-phase">)
 *   quan un <h2> és "Seqüència didàctica" / "Seqüència guiada"
 * - Navegador de passos (<nav class="learning-wizard">)
 * - Blocs visuals de programació (MakeCode, mBlock 5, LEGO SPIKE App) i panells de codi
 * - Figures amb peu d'imatge (<figure class="sa-illustration">)
 * - Notes pedagògiques (<aside class="markdown-note">) i llistes estructurades
 */

const { escapeHTML } = require('../../_templates/layout/utils');
const { LearningWizard } = require('../../_templates/components/learning-wizard');
const { SectionIcon, SectionHeading, stripHeadingIcon } = require('../../_templates/components/section-icon');
const { PhaseMarker } = require('../../_templates/components/phase-marker');
const { MarkdownNote } = require('../../_templates/components/markdown-note');
const { CodePanel, VisualBlocksPanel } = require('../../_templates/components/code-panel');
const { renderScratchBlocks, renderMakeCodeFallbackSVG } = require('./blocks');
const { DIALECTS, renderTangibleBlocks } = require('./tangible-blocks');
const { renderOrGetMakeCodeSVG } = require('./makecode-cache');
const {
  decodeEntities,
  TextNode,
  RawHtmlNode,
  ElementNode,
  parseHTML,
  serializeNodes
} = require('./html-dom');

const slugify = text => String(text)
  .toLowerCase()
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/^-|-$/g, '');

function safeURL(raw, base, image) {
  const value = String(raw || '').trim();
  if (!value) return '#';
  if (value.startsWith('#')) return value;
  const legacyMatch = !image && value.match(/^(?:\.\.\/)*(activitat|tutorial|robot|situacio|guia)\/index\.html\?id=([a-z0-9-]+)$/i);
  if (legacyMatch) {
    const route = legacyMatch[1].toLowerCase();
    const prefixMap = {
      activitat: /^activitat-/,
      tutorial: /^tutorial-/,
      robot: /^robot-/,
      situacio: /^sa-/,
      guia: /^guia-/
    };
    const slug = legacyMatch[2].replace(prefixMap[route] || /^$/, '');
    return `../../${route}/${slug}/index.html`;
  }
  try {
    const baseObj = new URL(base || 'https://robotica200.local/_content/page/item.md');
    const url = new URL(value, baseObj);
    if (!['http:', 'https:', 'mailto:'].includes(url.protocol)) return '#';
    if (image && url.protocol === 'mailto:') return '#';
    if (!/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(value) && url.origin === baseObj.origin) {
      return value.startsWith('_assets/') ? `../../${value}` : value;
    }
    return url.href;
  } catch (_) {
    return '#';
  }
}

function isExternalURL(resolved, base) {
  try {
    const baseObj = new URL(base || 'https://robotica200.local/_content/page/item.md');
    const destination = new URL(resolved, baseObj);
    return destination.origin !== baseObj.origin;
  } catch (_) {
    return false;
  }
}

function highlight(code, language) {
  const lang = String(language || 'text').toLowerCase();
  if (lang === 'blocks' || lang === 'scratch') {
    return code.split('\n').map(line => {
      const trimmed = line.trim();
      if (!trimmed) return '<span class="program-line program-line-blank">&nbsp;</span>';
      let kind = 'action';
      if (/^(if|si|quan|when)\b/i.test(trimmed)) kind = 'event';
      else if (/^(repeat|repeat until|forever|repet|repeteix|mentre|for)\b/i.test(trimmed)) kind = 'control';
      else if (/^(read|sensor|llegeix|afegeix|append|set|estableix|variable)\b/i.test(trimmed)) kind = 'data';
      else if (/^(say|show|play|sound|mostra|so|llum|light)\b/i.test(trimmed)) kind = 'output';
      return `<span class="program-line"><span class="block-chip block-${kind}">${escapeHTML(line)}</span></span>`;
    }).join('');
  }
  const pattern = /(#[^\n]*|\/\/[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b(?:if|else|elif|for|while|in|def|return|and|or|not|True|False|None|repeat|until|forever|when|set|to|read|append|if|then|otherwise|end|si|altrament|repeteix|fins|llegeix|afegeix|estableix|mostra|atura)\b|\b\d+(?:\.\d+)?\b)/g;
  let result = '';
  let cursor = 0;
  for (const match of code.matchAll(pattern)) {
    result += escapeHTML(code.slice(cursor, match.index));
    const token = match[0];
    let kind = 'keyword';
    if (/^(#|\/\/)/.test(token)) kind = 'comment';
    else if (/^["']/.test(token)) kind = 'string';
    else if (/^\d/.test(token)) kind = 'number';
    result += `<span class="syntax-${kind}">${escapeHTML(token)}</span>`;
    cursor = match.index + token.length;
  }
  return result + escapeHTML(code.slice(cursor));
}

const noteTypes = [
  [/^(situación|punto de partida|contexto):$/i, 'situation', '🧭'],
  [/^(situació|punt de partida|context):$/i, 'situation', '🧭'],
  [/^(materiales|material|materiales y preparación):$/i, 'materials', '🧰'],
  [/^(materials|material|materials i preparació):$/i, 'materials', '🧰'],
  [/^(evidencia|evidencias y evaluación|producto):$/i, 'evidence', '🔎'],
  [/^(evidència|evidencia|producte|evidències i avaluació):$/i, 'evidence', '🔎'],
  [/^(pregunt(?:a|as) docentes?|preguntas? docentes?|pregunta|pregunta guía|reto|reto e intención):$/i, 'question', '❓'],
  [/^(pregunt(?:a|es) docents?|pregunta|pregunta guia|repte|repte i intenció):$/i, 'question', '❓'],
  [/^(apoyo|participación|participación y límites|accesibilidad):$/i, 'support', '♿'],
  [/^(suport|participació|participació i límits|accessibilitat):$/i, 'support', '♿'],
  [/^(ampliación|extensión):$/i, 'extension', '🚀'],
  [/^(ampliació|extensió):$/i, 'extension', '🚀'],
  [/^(vocabulario|palabras clave):$/i, 'vocabulary', '💬'],
  [/^(vocabulari|paraules clau):$/i, 'vocabulary', '💬'],
  [/^(aprendizajes|objetivos):$/i, 'learning', '🎯'],
  [/^(aprenentatges|objectius):$/i, 'learning', '🎯'],
  [/^(límite del modelo|límite|precaución):$/i, 'limit', 'ℹ️'],
  [/^(límit del model|límit|precaució):$/i, 'limit', 'ℹ️'],
  [/^(activación|engage|explore|exploración|construcción|modelado|programación|programa|pruebas?|test|explain|explicación|elaborate|evaluate|evaluación|cierre|reflexión|decisión|iteración|revisión|registro|salida|diseño|ideación|prototipo|depuración|presentación|comunicación|ejercicio|modelo|implementación|validación|preparación|investigación|contraste|intercambio|feedback|lectura|planificación|maqueta|definición|práctica|caso de prueba|demostración|debrief)(?:\b|\s|·)/i, 'phase', '🧩'],
  [/^(activació|engage|explore|exploració|construcció|modelatge|programació|programa|proves?|test|explain|explicació|elaborate|evaluate|avaluació|tancament|reflexió|decisió|iteració|revisió|registre|eixida|disseny|ideació|prototip|depuració|presentació|comunicació|exercici|model|implementació|validació|preparació|investigació|contrast|intercanvi|feedback|lectura|planificació|maqueta|definició|pràctica|cas de prova|sortida|demostració|debrief)(?:\b|\s|·)/i, 'phase', '🧩']
];

const listLabels = [
  [/^(evidencia|producto|resultado esperado)\s*:\s*/i, 'evidence', 'Evidencia'],
  [/^(pregunta docente|pregunta para acompañar|pregunta guía)\s*:\s*/i, 'question', 'Pregunta docente'],
  [/^(criterio(?: de éxito| de diseño)?)\s*:\s*/i, 'criterion', 'Criterio'],
  [/^(depuración|si hay errores|revisión)\s*:\s*/i, 'debug', 'Revisión'],
  [/^(ampliación|extensión|opcional)\s*:\s*/i, 'extension', 'Ampliación'],
  [/^(tiempo|duración)\s*:\s*/i, 'time', 'Tiempo'],
  [/^(evidència|evidencia|producte|resultat esperat)\s*:\s*/i, 'evidence', 'Evidencia'],
  [/^(pregunta docent|pregunta per acompanyar|pregunta guia)\s*:\s*/i, 'question', 'Pregunta docente'],
  [/^(criteri(?: d'èxit| de disseny)?)\s*:\s*/i, 'criterion', 'Criterio'],
  [/^(depuració|si hi ha errors|revisió)\s*:\s*/i, 'debug', 'Revisión'],
  [/^(ampliació|extensió|opcional)\s*:\s*/i, 'extension', 'Ampliación'],
  [/^(temps|duració|durada)\s*:\s*/i, 'time', 'Tiempo']
];

const ES_SECTION_TITLES = {
  'situación, reto e intención': { key: 'intro', title: '🌱 Situación, reto e intención' },
  'situación y intención': { key: 'intro', title: '🌱 Situación, reto e intención' },
  'reto e intención': { key: 'intro', title: '🌱 Situación, reto e intención' },
  'aprendizajes y vocabulario': { key: 'learning', title: '🎯 Aprendizajes y vocabulario' },
  'materiales y preparación': { key: 'materials', title: '🧰 Materiales y preparación' },
  'evidencias y evaluación': { key: 'assessment', title: '🧪 Evidencias y evaluación' },
  'evaluación y evidencias': { key: 'assessment', title: '🧪 Evidencias y evaluación' },
  'participación, accesibilidad y seguridad': { key: 'access', title: '♿ Participación, accesibilidad y seguridad' },
  'referentes y adaptación': { key: 'official', title: '🔗 Referentes y adaptación' },
  'secuencia didáctica': { key: 'sequence', title: '📅 Secuencia didáctica' }
};

function canonicalSection(title) {
  const value = String(title).replace(/^[^\p{L}\p{N}]+/u, '').trim().toLowerCase();
  const exact = ES_SECTION_TITLES[value];
  if (exact) return exact;
  if (/^repte\s+\d+/i.test(value)) return { key: 'sequence', title: '📅 Secuencia didáctica' };
  if (/^(seqüèn|seqüen|itinerari|sessions\b|passos\b|lliçons\b|fases\b|activitats\b|desenvolupament\b|projecte en\b|set (?:reptes|estands)\b|deu reptes\b|guió de treball\b|conducció de les sessions\b|ritme i conducció\b|procés de disseny\b|detall de les sis experiències\b)/.test(value)) return { key: 'sequence', title: '📅 Secuencia didáctica' };
  if (/^reptes(?!\s+oficial)/i.test(value)) return { key: 'sequence', title: '📅 Secuencia didáctica' };
  if (/^com usar\b/i.test(value)) return { key: 'intro', title: '🌱 Situación, reto e intención' };
  if (/^(repte\b|situació|situacio|punt de partida|punt de trobada|sentit i intenció|context\b|propòsit|proposit)/.test(value)) return { key: 'intro', title: '🌱 Situación, reto e intención' };
  if (/^(participació|participacio|participar|accessibilitat|inclusió|inclusio|privacitat|seguretat|salvaguardes|diferenciació|diferenciacio|variacions|benestar|confort sensorial)/.test(value)) return { key: 'access', title: '♿ Participación, accesibilidad y seguridad' };
  if (/^(aprenent|vocabulari|objectius?|resultats d.aprenentatge|què aprendrem|que aprendrem|competències clau|funcions del robot)/.test(value)) return { key: 'learning', title: '🎯 Aprendizajes y vocabulario' };
  const assessmentSignalCA = /evidèn|eviden|avaluació|avaluacio|autoavaluació|rúbrica|criteris? d.èxit|registre de prova|registres de prova|registre de depuració|documentació i retroacció|diari de proves|producte final i evidències|observació|mostra final|prova, depura i reflexiona|preguntes per (?:fer pensar|comprovar)|preguntes del docent/.test(value);
  if (!assessmentSignalCA && /aprenent|objectius?|resultats d.aprenentatge|vocabulari|què aprendrem|que aprendrem|competències clau/.test(value)) return { key: 'learning', title: '🎯 Aprendizajes y vocabulario' };
  if (!/material oficial/.test(value) && /materials?|preparació|preparacio|abans de començar|maquinari|programari|requisits?|muntatge|organització i materials/.test(value)) return { key: 'materials', title: '🧰 Materiales y preparación' };
  if (assessmentSignalCA) return { key: 'assessment', title: '🧪 Evidencias y evaluación' };
  if (/^(fonts? oficials|referent)/.test(value)) return { key: 'official', title: '🔗 Referentes y adaptación' };
  if (/participació|participacio|manera de participar|inclusió|inclusio|accessibilitat|privacitat|seguretat|salvaguardes|límits|limites|adaptacions|ús responsable|variacions|benestar|confort sensorial|diferenciació|diferenciacio|inclusió i variacions/.test(value)) return { key: 'access', title: '♿ Participación, accesibilidad y seguridad' };
  if (/oficial|adaptació|adaptacio|referent|fonts?|recursos|unitat oficial|dotació i fonts/.test(value)) return { key: 'official', title: '🔗 Referentes y adaptación' };
  if (/rols|organitzaci[oó]|disseny accessible|equitat|consentiment|dades responsables/.test(value)) return { key: 'access', title: '♿ Participación, accesibilidad y seguridad' };
  if (/retorn|portafoli|portafolis|quadern|registre|fitxa de recerca|taula de proves|criteris observables|lectura crítica|lectura critica|resultats|mostra final/.test(value)) return { key: 'assessment', title: '🧪 Evidencias y evaluación' };
  if (/sostenibilitat|connexi[oó]|cultural|raonament|continguts|llenguatge|idees clau|vies de programació|programacio|vocabulari/.test(value)) return { key: 'learning', title: '🎯 Aprendizajes y vocabulario' };
  if (/opci[oó]|mapes interactius|activity box|materials|versions|programari|accessoris/.test(value)) return { key: 'materials', title: '🧰 Materiales y preparación' };
  if (/^reto\s+\d+/i.test(value)) return { key: 'sequence', title: '📅 Secuencia didáctica' };
  if (/^(secuencia|secuen|itinerario|sesiones\b|pasos\b|lecciones\b|fases\b|actividades\b|desarrollo\b|proyecto en\b|conjunto de (?:retos|estands)\b|diez retos\b|guion de trabajo\b|conducción de las sesiones\b|ritmo y conducción\b|proceso de diseño\b|detalle de las seis experiencias\b)/.test(value)) return { key: 'sequence', title: '📅 Secuencia didáctica' };
  if (/^retos(?!\s+oficial)/i.test(value)) return { key: 'sequence', title: '📅 Secuencia didáctica' };
  if (/^cómo usar\b/i.test(value)) return { key: 'intro', title: '🌱 Situación, reto e intención' };
  if (/^(reto\b|situación|situacion|punto de partida|punto de encuentro|sentido e intención|contexto\b|propósito|proposito)/.test(value)) return { key: 'intro', title: '🌱 Situación, reto e intención' };
  if (/^(participación|participacion|participar|accesibilidad|inclusión|inclusion|privacidad|seguridad|salvaguardas|diferenciación|diferenciacion|variaciones|bienestar|confort sensorial)/.test(value)) return { key: 'access', title: '♿ Participación, accesibilidad y seguridad' };
  if (/^(aprendiz|vocabulario|objetivos?|resultados de aprendizaje|qué vamos a aprender|qué aprenderemos|competencias clave|funciones del robot)/.test(value)) return { key: 'learning', title: '🎯 Aprendizajes y vocabulario' };
  const assessmentSignal = /eviden|evaluación|evaluacion|autoevaluación|rúbrica|criterios? de éxito|registro de prueba|registros de prueba|registro de depuración|documentación y retroalimentación|diario de pruebas|producto final y evidencias|observación|muestra final|prueba, depura y reflexiona|preguntas para (?:hacer pensar|comprobar)|preguntas del docente/.test(value);
  if (!assessmentSignal && /aprendiz|objetivos?|resultados de aprendizaje|vocabulario|qué vamos a aprender|qué aprenderemos|competencias clave/.test(value)) return { key: 'learning', title: '🎯 Aprendizajes y vocabulario' };
  if (!/material oficial/.test(value) && /materiales?|preparación|preparacion|antes de empezar|hardware|software|requisitos?|montaje|organización y materiales/.test(value)) return { key: 'materials', title: '🧰 Materiales y preparación' };
  if (assessmentSignal) return { key: 'assessment', title: '🧪 Evidencias y evaluación' };
  if (/^(fuentes? oficiales|referente)/.test(value)) return { key: 'official', title: '🔗 Referentes y adaptación' };
  if (/participación|participacion|manera de participar|inclusión|inclusion|accesibilidad|privacidad|seguridad|salvaguardas|límites|limites|adaptaciones|uso responsable|variaciones|bienestar|confort sensorial|diferenciación|diferenciacion|inclusión y variaciones/.test(value)) return { key: 'access', title: '♿ Participación, accesibilidad y seguridad' };
  if (/oficial|adaptación|adaptacion|referente|fuentes?|recursos|unidad oficial|dotación y fuentes/.test(value)) return { key: 'official', title: '🔗 Referentes y adaptación' };
  if (/roles|organizaci[oó]n|diseño accesible|equidad|consentimiento|datos responsables/.test(value)) return { key: 'access', title: '♿ Participación, accesibilidad y seguridad' };
  if (/retorno|portafolio|portafolios|cuaderno|registro|ficha de investigación|tabla de pruebas|criterios observables|lectura crítica|lectura critica|resultados|muestra final/.test(value)) return { key: 'assessment', title: '🧪 Evidencias y evaluación' };
  if (/sostenibilidad|conexi[oó]n|cultural|razonamiento|contenidos|lenguaje|ideas clave|vías de programación|programacion|vocabulario/.test(value)) return { key: 'learning', title: '🎯 Aprendizajes y vocabulario' };
  if (/opci[oó]n|mapas interactivos|activity box|materiales|versiones|software|accesorios/.test(value)) return { key: 'materials', title: '🧰 Materiales y preparación' };
  return { key: 'sequence', title: '📅 Secuencia didáctica' };
}

/**
 * 1. Sanejament i normalització d'enllaços i imatges sobre el DOM
 */
function sanitizeAndRewriteDOM(node, sourceURL) {
  if (!node || !node.children) return;

  const newChildren = [];
  for (const child of node.children) {
    if (child.type === 'element') {
      // Neutralitzar <script> convertint-lo en text escapat dins d'un <p> o text
      if (child.tagName === 'script') {
        const escaped = escapeHTML(`<script>${child.textContent}</script>`);
        if (node.tagName === 'root') {
          newChildren.push(new ElementNode('p', {}, [new TextNode(escaped)]));
        } else {
          newChildren.push(new TextNode(escaped));
        }
        continue;
      }

      // Eliminar atributs d'esdeveniments inline (onclick, onerror...)
      for (const attr of Object.keys(child.attrs)) {
        if (/^on/i.test(attr)) {
          delete child.attrs[attr];
        }
      }

      if (child.tagName === 'a' && child.attrs.href !== undefined) {
        const resolved = safeURL(child.attrs.href, sourceURL, false);
        child.attrs.href = resolved;
        if (isExternalURL(resolved, sourceURL)) {
          child.attrs.target = '_blank';
          child.attrs.rel = 'noopener noreferrer';
        }
      } else if (child.tagName === 'img' && child.attrs.src !== undefined) {
        child.attrs.src = safeURL(child.attrs.src, sourceURL, true);
        if (!child.attrs.width) child.attrs.width = '600';
        if (!child.attrs.height) child.attrs.height = '448';
        if (!child.attrs.loading) child.attrs.loading = 'lazy';
      }

      sanitizeAndRewriteDOM(child, sourceURL);
    }
    newChildren.push(child);
  }
  node.children = newChildren;
}

/**
 * 2. Extracció del resum i destacat per a fitxes de robot (_content/robots/*.md)
 */
function extractRobotOverview(root) {
  const nonEmpty = root.children.filter(
    n => !(n.type === 'text' && !n.raw.trim())
  );
  const h2Idx = nonEmpty.findIndex(n => n.type === 'element' && n.tagName === 'h2');

  let robotLead = '';
  let robotHighlightTitle = '';
  let robotHighlightBody = '';

  if (h2Idx >= 0) {
    const leadNodes = nonEmpty.slice(0, h2Idx).filter(n => n.type === 'element' && n.tagName === 'p');
    robotLead = leadNodes.map(p => p.innerHTML.trim()).join('</p><p>');
    robotHighlightTitle = nonEmpty[h2Idx].innerHTML.trim();
    const afterNodes = nonEmpty.slice(h2Idx + 1).filter(n => n.type === 'element' && n.tagName === 'p');
    robotHighlightBody = afterNodes.map(p => p.innerHTML.trim()).join('</p><p>');
  } else {
    const leadNodes = nonEmpty.filter(n => n.type === 'element' && n.tagName === 'p');
    robotLead = leadNodes.map(p => p.innerHTML.trim()).join('</p><p>');
  }

  return { robotLead, robotHighlightTitle, robotHighlightBody };
}

function transformParagraphHTML(pInnerHtml, { plainEvidence = false } = {}) {
  const labels = [...pInnerHtml.matchAll(/<(strong|em)>([^<]+)<\/\1>/g)];
  const labelled = labels
    .map(match => {
      const labelText = decodeEntities(match[2]).trim();
      return {
        match,
        label: labelText,
        type: noteTypes.find(([pattern]) => pattern.test(labelText))
      };
    })
    .find(item => item.type);

  if (!labelled) return `<p>${pInnerHtml}</p>`;

  const { match, label, type } = labelled;
  const [, kind, icon] = type;
  if (plainEvidence && kind === 'evidence') return `<p>${pInnerHtml}</p>`;
  const title = label.replace(/:$/, '');
  const before = pInnerHtml.slice(0, match.index).trim();
  const after = pInnerHtml.slice(match.index + match[0].length).trim();
  const prefixHTML = before ? `<p>${before}</p>` : '';
  return MarkdownNote({ kind, icon, title, bodyHTML: after, prefixHTML });
}

function isSingleChildElement(node, childTag) {
  if (!node || node.type !== 'element') return null;
  const meaningful = node.children.filter(c => !(c.type === 'text' && !c.raw.trim()));
  if (meaningful.length === 1 && meaningful[0].type === 'element' && meaningful[0].tagName === childTag) {
    return meaningful[0];
  }
  return null;
}

function transformListElement(listEl) {
  const tag = listEl.tagName;
  const liElements = listEl.children.filter(c => c.type === 'element' && c.tagName === 'li');
  const renderedItems = liElements.map(li => {
    // Si és una llista "loose" de markdown-it (<li><p>...</p></li>), desemboliquem els <p>
    const nonEmpty = li.children.filter(c => !(c.type === 'text' && !c.raw.trim()));
    let rawHtml;
    if (nonEmpty.length === 1 && nonEmpty[0].type === 'element' && nonEmpty[0].tagName === 'p') {
      rawHtml = nonEmpty[0].innerHTML.trim();
    } else {
      rawHtml = li.innerHTML.trim();
    }
    rawHtml = rawHtml.replace(/\s*\n\s*/g, ' ');

    const taskMatch = rawHtml.match(/^\[([ xX])\]\s*(.*)$/);
    const contentHtml = taskMatch ? taskMatch[2] : rawHtml;

    // Detectar etiqueta estructurada al principi del <li> (en <strong>...</strong> o text pla)
    const labelMatch = contentHtml.match(/^(?:<strong>([^<]{2,36}?)<\/strong>\s*:?\s*|([^<:*]{2,36}?):\s*)/);
    let known = null;
    if (labelMatch) {
      const candidate = decodeEntities(labelMatch[1] || labelMatch[2]).replace(/:$/, '').trim();
      known = listLabels.find(([pattern]) => pattern.test(`${candidate}:`));
    }

    let body = contentHtml;
    let className = '';
    if (known) {
      const [, kind, label] = known;
      const detail = contentHtml.slice(labelMatch[0].length);
      body = `<span class="markdown-list-label markdown-list-label-${kind}">${label}</span><span class="markdown-list-detail">${detail}</span>`;
      className = ` class="markdown-list-item markdown-list-item-${kind}"`;
    }
    if (taskMatch) {
      body = `<span class="markdown-task-mark" aria-hidden="true">${taskMatch[1].trim() ? '✓' : ''}</span><span class="markdown-list-detail">${body}</span>`;
      className = ' class="markdown-list-item markdown-task-item"';
    }
    return `<li${className}>${body}</li>`;
  });

  const listClass = renderedItems.some(item => /markdown-(?:list-item|task-item)/.test(item))
    ? ' class="markdown-structured-list"'
    : '';
  return `<${tag}${listClass}>${renderedItems.join('')}</${tag}>`;
}

function transformBlockquoteElement(bqEl, { plainEvidence = false } = {}) {
  const pElements = bqEl.children.filter(c => c.type === 'element' && c.tagName === 'p');
  const linesHtml = [];
  for (const p of pElements) {
    const parts = p.innerHTML.trim().split(/\r?\n/);
    for (const part of parts) {
      if (part.trim()) linesHtml.push(`<p>${part.trim()}</p>`);
    }
  }
  const content = linesHtml.join('');
  const isEvidence = /<strong>(evidència|evidencia|producte|pregunta docent|pregunta docente|repte|reto)/i.test(content);
  const label = content.match(/^<p><strong>([^<]+)<\/strong>\s*(.*?)<\/p>/s);
  const labelText = label ? decodeEntities(label[1]).trim() : '';
  const note = label && noteTypes.find(([pattern]) => pattern.test(labelText));
  if (note) {
    const [, kind, icon] = note;
    if (plainEvidence && kind === 'evidence') return content;
    return MarkdownNote({
      kind,
      icon,
      title: labelText.replace(/:$/, ''),
      bodyHTML: label[2],
      extraHTML: content.replace(label[0], '')
    });
  }
  return `<aside class="markdown-callout${isEvidence ? ' markdown-evidence' : ''}">${content}</aside>`;
}

function transformPreCodeElement(preEl) {
  const codeEl = preEl.children.find(c => c.type === 'element' && c.tagName === 'code');
  if (!codeEl) return preEl.outerHTML;

  const classAttr = codeEl.attrs.class || '';
  const langMatch = classAttr.match(/language-([\w+-]+)/);
  const lang = langMatch ? langMatch[1] : 'text';
  const lowerLang = lang.toLowerCase();
  const rawCode = codeEl.textContent.replace(/\r?\n$/, '');

  if (DIALECTS[lowerLang]) {
    try {
      return VisualBlocksPanel({ lang: DIALECTS[lowerLang], svgHTML: renderTangibleBlocks(rawCode, lowerLang) });
    } catch (error) {
      return `<aside class="markdown-callout"><p>${escapeHTML(error.message)}</p></aside>${CodePanel({ lang, codeHTML: escapeHTML(rawCode) })}`;
    }
  }

  // Suport natiu per a blocs visuals: MakeCode, mBlock 5 i LEGO SPIKE App
  if (['mblock', 'mblocks', 'spikeapp', 'spike-app', 'spike', 'scratchblocks'].includes(lowerLang)) {
    const svgHTML = renderScratchBlocks(rawCode, { dialect: lowerLang });
    return VisualBlocksPanel({ lang: lowerLang, rawCode, svgHTML });
  }

  if (lowerLang === 'makecode') {
    const { svg: svgHTML, hash } = renderOrGetMakeCodeSVG(rawCode, {
      fallbackRenderer: renderMakeCodeFallbackSVG
    });
    return VisualBlocksPanel({ lang: 'makecode', rawCode, svgHTML, hash });
  }

  const codeHTML = highlight(rawCode, lang);
  return CodePanel({ lang, codeHTML });
}

function transformTableElement(tableEl) {
  // Afegir scope="col" als <th> dins de <thead> i netejar salts de línia innecessaris
  const thead = tableEl.children.find(c => c.type === 'element' && c.tagName === 'thead');
  const tbody = tableEl.children.find(c => c.type === 'element' && c.tagName === 'tbody');

  let theadHtml = '';
  if (thead) {
    const trs = thead.children.filter(c => c.type === 'element' && c.tagName === 'tr');
    theadHtml = `<thead>${trs.map(tr => {
      const ths = tr.children.filter(c => c.type === 'element' && (c.tagName === 'th' || c.tagName === 'td'));
      return `<tr>${ths.map(th => `<th scope="col">${th.innerHTML.trim()}</th>`).join('')}</tr>`;
    }).join('')}</thead>`;
  }

  let tbodyHtml = '';
  if (tbody) {
    const trs = tbody.children.filter(c => c.type === 'element' && c.tagName === 'tr');
    tbodyHtml = `<tbody>${trs.map(tr => {
      const tds = tr.children.filter(c => c.type === 'element' && (c.tagName === 'td' || c.tagName === 'th'));
      return `<tr>${tds.map(td => `<td>${td.innerHTML.trim()}</td>`).join('')}</tr>`;
    }).join('')}</tbody>`;
  }

  if (!thead && !tbody) {
    return `<div class="markdown-table-wrap">${tableEl.outerHTML}</div>`;
  }
  return `<div class="markdown-table-wrap"><table>${theadHtml}${tbodyHtml}</table></div>`;
}

/**
 * Transforma una seqüència de nodes germans (dins d'una secció o d'una fase)
 * en fragments HTML semàntics.
 */
function renderSemanticBlocks(nodes, state = { introPending: false }) {
  const meaningful = nodes.filter(n => !(n.type === 'text' && !n.raw.trim()));
  const out = [];

  for (let i = 0; i < meaningful.length; i++) {
    const node = meaningful[i];

    if (node.type !== 'element') {
      out.push(node.outerHTML);
      continue;
    }

    // 1. Imatge sola dins d'un <p> (+ peu opcional en el <p><em> següent) -> <figure class="sa-illustration">
    if (node.tagName === 'p') {
      const singleImg = isSingleChildElement(node, 'img');
      if (singleImg) {
        let caption = '';
        if (i + 1 < meaningful.length && meaningful[i + 1].type === 'element' && meaningful[i + 1].tagName === 'p') {
          const singleEm = isSingleChildElement(meaningful[i + 1], 'em');
          if (singleEm) {
            caption = singleEm.innerHTML.trim();
            i += 1;
          }
        }
        out.push(`<figure class="sa-illustration">${singleImg.outerHTML}${caption ? `<figcaption>${caption}</figcaption>` : ''}</figure>`);
        continue;
      }

      // 2. Respectar els paràgrafs del Markdown i detectar MarkdownNote.
      const chunks = [node.innerHTML];
      for (const chunk of chunks) {
        let rendered = transformParagraphHTML(chunk, state);
        if (state.introPending) {
          state.introPending = false;
          if (!rendered.includes('markdown-note')) {
            rendered = `<aside class="markdown-note markdown-note-situation"><span class="markdown-note-icon" aria-hidden="true">${SectionIcon('idea', 'note-pack-icon')}</span><div><h4>Punt de partida</h4>${rendered}</div></aside>`;
          }
        }
        out.push(rendered);
      }
      continue;
    }

    // 3. Llistes <ul> i <ol>
    if (node.tagName === 'ul' || node.tagName === 'ol') {
      out.push(transformListElement(node));
      continue;
    }

    // 4. Cites <blockquote>
    if (node.tagName === 'blockquote') {
      out.push(transformBlockquoteElement(node, state));
      continue;
    }

    // 5. Blocs de codi <pre><code> (incloent MakeCode, mBlock i SPIKE App)
    if (node.tagName === 'pre') {
      out.push(transformPreCodeElement(node));
      continue;
    }

    // 6. Taules <table>
    if (node.tagName === 'table') {
      out.push(transformTableElement(node));
      continue;
    }

    // 7. Encapçalaments h3-h6 normals fora de passos
    if (/^h[1-6]$/.test(node.tagName)) {
      const plainTitle = node.textContent.trim();
      if (!node.attrs.id) {
        node.attrs.id = slugify(plainTitle);
      }
      out.push(node.outerHTML);
      continue;
    }

    // 8. Qualsevol altre element HTML escrit directament al fitxer Markdown (<div>, <details>, <figure>, <svg>...)
    out.push(node.outerHTML);
  }

  if (state.introCoverHTML?.length) {
    const situationIndex = out.findIndex(html => html.includes('class="markdown-note markdown-note-situation"'));
    if (situationIndex !== -1) {
      out.splice(situationIndex + 1, 0, ...state.introCoverHTML);
      state.introCoverHTML = [];
    }
  }
  return out;
}

/**
 * 3. Agrupació semàntica de seccions <h2>, passos <h3> (learning-step) i fases <h4> (learning-phase)
 */
function transformSemanticHTML(rawHTML, { data = {}, sourceURL = '' } = {}) {
  const isSituation = /(?:^|\/)situacions\/[^/]+\.md(?:[?#]|$)/.test(sourceURL);
  const isTutorial = /(?:^|\/)tutorials\/[^/]+\.md(?:[?#]|$)/.test(sourceURL);
  const isActivity = /(?:^|\/)activitats\/[^/]+\.md(?:[?#]|$)/.test(sourceURL);
  const root = parseHTML(rawHTML);
  sanitizeAndRewriteDOM(root, sourceURL);

  const { robotLead, robotHighlightTitle, robotHighlightBody } = extractRobotOverview(root);

  const topNodes = root.children.filter(n => !(n.type === 'text' && !n.raw.trim()));

  // Dividir els nodes de primer nivell per cada <h2> per poder-los ordenar canònicament
  const preambleNodes = [];
  const h2Groups = [];
  let currentGroup = null;

  for (const node of topNodes) {
    if (node.type === 'element' && node.tagName === 'h2') {
      if (currentGroup) h2Groups.push(currentGroup);
      const plainTitle = node.textContent.trim();
      const tutorialSections = {
        'Qué vamos a aprender?': ['intro', '🎯 ¿Qué vamos a aprender?'],
        'Què aprendrem?': ['intro', '🎯 ¿Qué vamos a aprender?'],
        'Materiales y preparación': ['materials', '🧰 Materiales y preparación'],
        'Materials i preparació': ['materials', '🧰 Materiales y preparación'],
        'Funciones y controles': ['learning', '🧩 Funciones y controles'],
        'Funcions i controls': ['learning', '🧩 Funciones y controles'],
        'Paso a paso': ['sequence', '👣 Paso a paso'],
        'Pas a pas': ['sequence', '👣 Paso a paso'],
        'Comprobación y resolución de problemas': ['assessment', '🧪 Comprobación y resolución de problemas'],
        'Comprovació i resolució de problemes': ['assessment', '🧪 Comprobación y resolución de problemas'],
        'Uso y seguridad': ['access', '🛡️ Uso y seguridad'],
        'Ús i seguretat': ['access', '🛡️ Uso y seguridad'],
        'Fuentes y límites': ['official', '🔗 Fuentes y límites'],
        'Fonts i límits': ['official', '🔗 Fuentes y límites']
      };
      const tutorialSection = isTutorial && tutorialSections[plainTitle.replace(/^[^\p{L}]+/u, '')];
      const section = tutorialSection ? { key: tutorialSection[0], title: tutorialSection[1] } : canonicalSection(plainTitle);
      currentGroup = {
        key: section.key || 'other',
        section,
        h2Node: node,
        plainTitle,
        nodes: []
      };
    } else if (currentGroup) {
      currentGroup.nodes.push(node);
    } else {
      preambleNodes.push(node);
    }
  }
  if (currentGroup) h2Groups.push(currentGroup);

  // La portada i el peu pertanyen a la introducció, no al preàmbul de la pàgina.
  const introGroup = h2Groups.find(group => group.key === 'intro');
  if (introGroup && /(?:^|\/)situacions\/[^/]+\.md(?:[?#]|$)/.test(sourceURL)) {
    introGroup.coverNodes = [];
    for (let i = 0; i < preambleNodes.length; i++) {
      const node = preambleNodes[i];
      if (node.type !== 'element' || node.tagName !== 'p' || !isSingleChildElement(node, 'img')) continue;
      const next = preambleNodes[i + 1];
      const hasCaption = next?.type === 'element' && next.tagName === 'p' && isSingleChildElement(next, 'em');
      introGroup.coverNodes.push(...preambleNodes.splice(i, hasCaption ? 2 : 1));
      i--;
    }
  }

  const priority = { intro: 0, learning: 1, materials: 2, sequence: 3, other: 4, assessment: 5, access: 6, official: 7 };
  const orderedGroups = h2Groups
    .map((group, index) => ({ ...group, index }))
    .sort((a, b) => (priority[a.key] ?? 4) - (priority[b.key] ?? 4) || a.index - b.index);

  const output = [];
  const steps = [];
  let wizardInserted = false;

  // Renderitzar el preàmbul (abans del primer <h2>, ex. imatge de portada)
  output.push(...renderSemanticBlocks(preambleNodes, { introPending: false }));

  const isStepHeading = title => /^(sessió|sessio|lliçó|lliço|sesión|lección|lesson|session)\s+\d+/i.test(title);

  // Agrupar grups consecutius amb la mateixa clau canònica en un únic <section class="detail-section">
  const mergedSections = [];
  for (const group of orderedGroups) {
    const prev = mergedSections[mergedSections.length - 1];
    if (prev && prev.key === group.key) {
      prev.subGroups.push(group);
    } else {
      mergedSections.push({
        key: group.key,
        section: group.section,
        firstGroup: group,
        subGroups: [group]
      });
    }
  }

  for (const merged of mergedSections) {
    const first = merged.firstGroup;
    const firstId = slugify(first.plainTitle);
    const sectionClass = `detail-section${merged.key === 'intro' ? ' detail-section-intro' : ''}`;
    output.push(`<section class="${sectionClass}" data-section-group="${merged.key || 'other'}"><h2 id="${firstId}">${SectionHeading(merged.section.title, merged.key, isTutorial)}</h2>`);

    const state = {
      introPending: merged.key === 'intro' && !isTutorial,
      introCoverHTML: merged.subGroups.flatMap(group => renderSemanticBlocks(group.coverNodes || [], { introPending: false }))
    };

    for (let gIdx = 0; gIdx < merged.subGroups.length; gIdx++) {
      const sub = merged.subGroups[gIdx];
      if (gIdx > 0) {
        const subId = slugify(sub.plainTitle);
        const cleanSubHtml = sub.h2Node.innerHTML.trim().replace(/[.!?]+$/, '').replace(/^\d+\s*/, '');
        output.push(`<h3 class="detail-subsection-title" id="${subId}">${stripHeadingIcon(cleanSubHtml)}</h3>`);
      }

      const isSequenceSub =
        sub.key === 'sequence' &&
        !/oficial|adaptació|adaptacio|referent/i.test(sub.plainTitle) &&
        (isTutorial || /(seqüèn|seqüen|itinerari|sessions|passos|lliçons|activitats|desenvolupament|projecte en|reptes|estands|fases|àmbits|repte\s+\d|secuencia|sesiones|pasos|lecciones|actividades|desarrollo|proyecto en|retos|fases|reto\s+\d)/i.test(sub.plainTitle));

      // Processar els nodes dins d'aquest bloc <h2>
      let openStep = false;
      let openPhase = false;
      let pendingBlocks = [];

      const flushPendingBlocks = () => {
        if (pendingBlocks.length > 0) {
          output.push(...renderSemanticBlocks(pendingBlocks, state));
          pendingBlocks = [];
        }
      };

      const closePhase = () => {
        flushPendingBlocks();
        if (openPhase) {
          output.push('</section>');
          openPhase = false;
          state.plainEvidence = false;
        }
      };

      const closeStep = () => {
        closePhase();
        if (openStep) {
          output.push('</div></section>');
          openStep = false;
        }
      };

      const subNodes = sub.nodes;
      for (let nIdx = 0; nIdx < subNodes.length; nIdx++) {
        const node = subNodes[nIdx];

        if (node.type === 'element' && node.tagName === 'h3' && (isStepHeading(node.textContent.trim()) || isSequenceSub)) {
          closeStep();
          const stepNumber = steps.length + 1;
          if (!wizardInserted) {
            output.push('<!--LEARNING_WIZARD-->');
            wizardInserted = true;
          }

          const plainTitle = node.textContent.trim();
          const displayTitlePlain = plainTitle
            .replace(/^(?:(?:sess(?:ió|io)|lliç(?:ó|o)|sesión|lección|lesson|session)\s+\d+|s\d+)\s*[·—:.-]\s*/i, '')
            .replace(/^(?:[a-z]{1,3}-?\d+)\s*[·—:.-]\s*/i, '')
            .replace(/^\d+(?:[.)]\s*|\s+|(?=[A-ZÀ-ÖØ-Þ]))/, '')
            .replace(/[.!?]+$/, '')
            .trim();

          // Preservar format inline (ex. <em> o <code>) si n'hi ha dins del títol del pas
          let displayTitleHTML = escapeHTML(displayTitlePlain);
          const id = slugify(plainTitle);

          // Mirar si aquest pas conté cap <h4> abans del següent <h3>
          let hasPhaseInStep = false;
          for (let k = nIdx + 1; k < subNodes.length; k++) {
            if (subNodes[k].type === 'element' && subNodes[k].tagName === 'h3') break;
            if (subNodes[k].type === 'element' && subNodes[k].tagName === 'h4') {
              hasPhaseInStep = true;
              break;
            }
          }

          const hiddenAttr = steps.length > 0 ? ' hidden' : '';
          output.push(
            `<section class="learning-step" id="${id}" data-step="${stepNumber}"${hiddenAttr}><header class="learning-step-header"><span class="learning-step-kicker">Paso ${stepNumber}</span><h3>${stripHeadingIcon(displayTitleHTML)}</h3></header><div class="learning-step-content">`
          );
          openStep = true;
          steps.push({ id, title: displayTitlePlain });

          if (!isTutorial && !isActivity && !hasPhaseInStep) {
            output.push('<section class="learning-phase learning-phase-default"><h4>Desarrollo del paso</h4>');
            openPhase = true;
          }
          continue;
        }

        if (node.type === 'element' && node.tagName === 'h4' && openStep) {
          closePhase();
          const plainH4 = node.textContent.trim();
          const phaseMatch = plainH4.match(/^Fase [1-5] · (Activem i prediem|Explorem i construïm|Expliquem i registrem|Apliquem i millorem|Comprovem i reflexionem|Activamos y predecimos|Exploramos y construimos|Explicamos y registramos|Aplicamos y mejoramos|Comprobamos y reflexionamos)(?:\s*\(([^)]+)\))?$/);
          const phaseNames = { 'Activem i prediem': 'Activamos y predecimos', 'Explorem i construïm': 'Exploramos y construimos', 'Expliquem i registrem': 'Explicamos y registramos', 'Apliquem i millorem': 'Aplicamos y mejoramos', 'Comprovem i reflexionem': 'Comprobamos y reflexionamos' };
          const phaseNumber = phaseMatch ? Number(plainH4.match(/^Fase ([1-5])/)[1]) : 0;
          const phaseHeading = phaseMatch ? escapeHTML(`Fase ${phaseNumber} · ${phaseNames[phaseMatch[1]] || phaseMatch[1]}`) : stripHeadingIcon(node.innerHTML.trim());
          state.plainEvidence = isSituation && phaseNumber === 5;
          const timelineAttr = isSituation && phaseNumber ? ` data-phase="${phaseNumber}"` : '';
          const markerHTML = timelineAttr ? PhaseMarker(phaseNumber) : '';
          output.push(isTutorial ? `<h4>${phaseHeading}</h4>` : `<section class="learning-phase"${timelineAttr}>${markerHTML}<h4>${phaseHeading}</h4>`);
          openPhase = !isTutorial;
          continue;
        }

        if (node.type === 'element' && node.tagName === 'hr') {
          closeStep();
          output.push('<hr>');
          continue;
        }

        pendingBlocks.push(node);
      }

      closeStep();
    }

    output.push('</section>');
  }

  const stepIndex = LearningWizard(steps);
  const renderedHTML = output.join('\n').replace('<!--LEARNING_WIZARD-->', stepIndex);

  return {
    data,
    html: renderedHTML,
    steps,
    robotLead,
    robotHighlightTitle,
    robotHighlightBody
  };
}

module.exports = {
  transformSemanticHTML,
  canonicalSection,
  safeURL,
  highlight
};
