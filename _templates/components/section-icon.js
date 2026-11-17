'use strict';

const ICON_FILES = {
  idea: 'Sin nombre', target: 'Sin nombre10', checklist: 'Sin nombre11', calendar: 'Sin nombre12',
  code: 'Sin nombre13', settings: 'Sin nombre14', puzzle: 'Sin nombre15', people: 'Sin nombre16',
  vocabulary: 'Sin nombre17', experiment: 'Sin nombre18', chart: 'Sin nombre21',
  microscope: 'Sin nombre22', books: 'Sin nombre24', book: 'Sin nombre8', folders: 'materia', star: 'tematica'
};

function SectionIcon(name, className = 'section-icon') {
  const file = ICON_FILES[name] || ICON_FILES.idea;
  return `<img class="${className}" src="../../_assets/icons/pack/${encodeURIComponent(file)}.webp" alt="" aria-hidden="true" width="36" height="36" loading="lazy">`;
}

function stripHeadingIcon(html) {
  const value = String(html);
  const match = value.match(/^((?:<(?:strong|em|b|i)>)*)([\s\S]*)$/u); // check-es:ignore
  const prefix = match ? match[1] : '';
  const rest = match ? match[2] : value;
  return (prefix + rest.replace(/^[^\p{L}\p{N}¿¡<]+/u, '')).trim();
}

function SectionHeading(title, key, isTutorial = false) {
  const icons = { intro: isTutorial ? 'idea' : 'target', learning: isTutorial ? 'settings' : 'book', materials: 'folders', sequence: isTutorial ? 'checklist' : 'calendar', assessment: isTutorial ? 'microscope' : 'checklist', access: 'people', official: 'books' };
  return `${SectionIcon(icons[key])}<span>${stripHeadingIcon(title)}</span>`;
}

const NOTE_ICONS = { situation: 'idea', materials: 'folders', evidence: 'checklist', question: 'target', support: 'people', extension: 'chart', vocabulary: 'vocabulary', learning: 'book', limit: 'settings', phase: 'puzzle' };

module.exports = { SectionIcon, SectionHeading, stripHeadingIcon, NOTE_ICONS, ICON_FILES };
