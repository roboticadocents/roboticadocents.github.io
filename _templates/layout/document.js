'use strict';

const { escapeHTML, escapeAttr, cleanRoot } = require('./utils');
const { SiteHeader } = require('./site-header');
const { SiteFooter } = require('./site-footer');

function Document({
  title = 'Robòtica200 | Robòtica per a docents',
  description = 'Recursos oberts de robòtica educativa i pensament computacional per a mestres i professors.',
  activeNav = '',
  root = '',
  heroLayout = false,
  extraHead = '',
  body = ''
} = {}) {
  const r = cleanRoot(root);
  const fullTitle = title.includes('Robòtica') ? title : `${title} | Robòtica²⁰⁰`;

  return `<!DOCTYPE html>
<html lang="ca">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title id="page-title">${escapeHTML(fullTitle)}</title>
  <meta name="description" content="${escapeAttr(description)}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Sora:wght@400;600;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="${r}_css/styles.css?v=10">
  <link rel="icon" type="image/svg+xml" href="${r}_assets/icons/logo.svg">
  <script defer src="${r}_js/ui.js?v=6"></script>${extraHead ? `\n${extraHead}` : ''}
</head>
<body>${SiteHeader({ activeNav, root: r })}
  <main id="page-content" class="container page-content${heroLayout ? ' page-content-hero' : ''}">
${body}
  </main>${SiteFooter({ root: r })}
</body>
</html>
`;
}

module.exports = { Document };
