// check-es:skip
'use strict';

/**
 * _scripts/lib/makecode-cache.js
 *
 * Sistema de gestió de memòria cau basada exclusivament en fitxers per a blocs MakeCode.
 * Desa i recupera fitxers SVG a _cache/makecode/<hash>.svg utilitzant el hash SHA-256
 * del codi normalitzat.
 * 0 dependències externes i 0 bases de dades.
 */

const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const CACHE_DIR = path.resolve(__dirname, '../../_cache/makecode');

function ensureCacheDir() {
  if (!fs.existsSync(CACHE_DIR)) {
    fs.mkdirSync(CACHE_DIR, { recursive: true });
  }
}

function normalizeMakeCode(code) {
  return String(code || '')
    .trim()
    .replace(/\r\n?/g, '\n')
    .replace(/[ \t]+$/gm, '');
}

function getMakeCodeHash(code) {
  const normalized = normalizeMakeCode(code);
  return crypto.createHash('sha256').update(normalized, 'utf8').digest('hex').slice(0, 16);
}

function getCacheFilePath(codeOrHash) {
  const hash = /^[0-9a-f]{16}$/i.test(codeOrHash)
    ? codeOrHash.toLowerCase()
    : getMakeCodeHash(codeOrHash);
  return path.join(CACHE_DIR, `${hash}.svg`);
}

function hasCachedMakeCode(code) {
  const filePath = getCacheFilePath(code);
  return fs.existsSync(filePath);
}

function getCachedMakeCodeSVG(code) {
  const filePath = getCacheFilePath(code);
  if (fs.existsSync(filePath)) {
    try {
      return fs.readFileSync(filePath, 'utf8');
    } catch (_) {
      return null;
    }
  }
  return null;
}

function setCachedMakeCodeSVG(code, svgContent) {
  ensureCacheDir();
  const hash = getMakeCodeHash(code);
  const filePath = path.join(CACHE_DIR, `${hash}.svg`);
  fs.writeFileSync(filePath, String(svgContent || '').trim(), 'utf8');
  return hash;
}

function setCachedMakeCodeByHash(hash, svgContent) {
  ensureCacheDir();
  const cleanHash = String(hash || '').trim().toLowerCase();
  if (!/^[0-9a-f]{16}$/.test(cleanHash)) {
    throw new Error(`Hash no vàlid per a MakeCode cache: ${hash}`);
  }
  const filePath = path.join(CACHE_DIR, `${cleanHash}.svg`);
  fs.writeFileSync(filePath, String(svgContent || '').trim(), 'utf8');
  return cleanHash;
}

function renderOrGetMakeCodeSVG(code, { fallbackRenderer } = {}) {
  const hash = getMakeCodeHash(code);
  const cached = getCachedMakeCodeSVG(hash);
  if (cached) {
    return {
      svg: cached,
      fromCache: true,
      hash
    };
  }

  // Cache miss: es genera el SVG amb el motor fallback i es desa a la memòria cau
  let svg = null;
  if (typeof fallbackRenderer === 'function') {
    svg = fallbackRenderer(code);
  }

  if (svg) {
    setCachedMakeCodeSVG(code, svg);
    return {
      svg,
      fromCache: false,
      hash
    };
  }

  return {
    svg: '',
    fromCache: false,
    hash
  };
}

function listCachedHashes() {
  if (!fs.existsSync(CACHE_DIR)) return [];
  try {
    return fs.readdirSync(CACHE_DIR)
      .filter(f => f.endsWith('.svg'))
      .map(f => f.replace(/\.svg$/, ''));
  } catch (_) {
    return [];
  }
}

async function warmMakeCodeCache(snippets = []) {
  ensureCacheDir();
  const { renderOfficialMakeCodeBatch } = require('./makecode-server-renderer');
  const missing = [];

  for (const item of snippets) {
    const code = typeof item === 'string' ? item : item.code;
    const id = (typeof item === 'object' && item.id) || getMakeCodeHash(code);
    if (!hasCachedMakeCode(code)) {
      missing.push({ id, code, hash: getMakeCodeHash(code) });
    }
  }

  if (missing.length === 0) {
    return { cachedCount: snippets.length, renderedCount: 0 };
  }

  console.log(`[makecode-cache] S'estan renderitzant ${missing.length} fragment(s) nou(s) amb el motor oficial de MakeCode...`);
  try {
    const results = await renderOfficialMakeCodeBatch(missing);
    let count = 0;
    for (const item of missing) {
      const svg = results.get(item.id);
      if (svg) {
        setCachedMakeCodeByHash(item.hash, svg);
        count++;
      }
    }
    console.log(`[makecode-cache] Desats oficialment ${count} fitxer(s) SVG a _cache/makecode/`);
    return { cachedCount: snippets.length, renderedCount: count };
  } catch (err) {
    console.warn(`[makecode-cache] Advertència renderitzant MakeCode oficial (${err.message}). S'usarà el motor local.`);
    return { cachedCount: snippets.length, renderedCount: 0, error: err };
  }
}

module.exports = {
  CACHE_DIR,
  ensureCacheDir,
  normalizeMakeCode,
  getMakeCodeHash,
  getCacheFilePath,
  hasCachedMakeCode,
  getCachedMakeCodeSVG,
  setCachedMakeCodeSVG,
  setCachedMakeCodeByHash,
  renderOrGetMakeCodeSVG,
  listCachedHashes,
  warmMakeCodeCache
};
