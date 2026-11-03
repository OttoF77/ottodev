#!/usr/bin/env node
/**
 * Static i18n Static Route Generator for Otto Freitag Portfolio
 * Generates en/index.html pre-rendered from index.html and js/i18n.js dictionary.
 * Zero external dependencies (uses standard Node.js built-ins).
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const indexPath = path.join(rootDir, 'index.html');
const i18nPath = path.join(rootDir, 'js', 'i18n.js');
const outDir = path.join(rootDir, 'en');
const outPath = path.join(outDir, 'index.html');

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function escapeAttr(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

export function buildStaticI18n() {
  console.log('🔄 Building static English route (en/index.html)...');

  if (!fs.existsSync(indexPath)) {
    throw new Error(`Source file not found: ${indexPath}`);
  }
  if (!fs.existsSync(i18nPath)) {
    throw new Error(`Translations file not found: ${i18nPath}`);
  }

  // 1. Load dictionary from js/i18n.js
  const i18nSource = fs.readFileSync(i18nPath, 'utf8');
  const extractFn = new Function(i18nSource.replace(/class I18nManager[\s\S]*$/, '') + '\nreturn translations;');
  const allTranslations = extractFn();
  const en = allTranslations['en-US'];

  if (!en || typeof en !== 'object') {
    throw new Error('Failed to extract en-US dictionary from js/i18n.js');
  }

  console.log(`📖 Loaded en-US dictionary with ${Object.keys(en).length} entries.`);

  // 2. Read source index.html
  let html = fs.readFileSync(indexPath, 'utf8');

  // 3. Update root html lang
  html = html.replace(/<html\s+lang="pt-BR"/i, '<html lang="en-US"');

  // 4. Update Document Title
  if (en['meta.title']) {
    html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeHtml(en['meta.title'])}</title>`);
  }

  // 5. Update Meta Description
  if (en['meta.description']) {
    html = html.replace(/<meta\s+name="description"\s+content="[^"]*"/i, `<meta name="description" content="${escapeAttr(en['meta.description'])}"`);
  }

  // 6. Update Canonical URL
  html = html.replace(/<link\s+rel="canonical"\s+href="https:\/\/ottof77\.github\.io\/ottodev\/"/i, '<link rel="canonical" href="https://ottof77.github.io/ottodev/en/"');

  // 7. Ensure hreflang tags are present
  const hreflangBlock = [
    '  <link rel="alternate" hreflang="pt-BR" href="https://ottof77.github.io/ottodev/">',
    '  <link rel="alternate" hreflang="en-US" href="https://ottof77.github.io/ottodev/en/">',
    '  <link rel="alternate" hreflang="x-default" href="https://ottof77.github.io/ottodev/">'
  ].join('\n');

  if (!html.includes('hreflang="en-US"')) {
    html = html.replace(/(<link\s+rel="canonical"[^>]*>)/i, `$1\n${hreflangBlock}`);
  }

  // 8. Update Open Graph and Twitter tags
  if (en['meta.title']) {
    html = html.replace(/<meta\s+property="og:title"\s+content="[^"]*"/i, `<meta property="og:title" content="${escapeAttr(en['meta.title'])}"`);
    html = html.replace(/<meta\s+name="twitter:title"\s+content="[^"]*"/i, `<meta name="twitter:title" content="${escapeAttr(en['meta.title'])}"`);
  }
  if (en['meta.description']) {
    html = html.replace(/<meta\s+property="og:description"\s+content="[^"]*"/i, `<meta property="og:description" content="${escapeAttr(en['meta.description'])}"`);
    html = html.replace(/<meta\s+name="twitter:description"\s+content="[^"]*"/i, `<meta name="twitter:description" content="${escapeAttr(en['meta.description'])}"`);
  }
  html = html.replace(/<meta\s+property="og:url"\s+content="https:\/\/ottof77\.github\.io\/ottodev\/"/i, '<meta property="og:url" content="https://ottof77.github.io/ottodev/en/"');

  if (en['meta.image_alt']) {
    html = html.replace(/<meta\s+property="og:image:alt"\s+content="[^"]*"/i, `<meta property="og:image:alt" content="${escapeAttr(en['meta.image_alt'])}"`);
    html = html.replace(/<meta\s+name="twitter:image:alt"\s+content="[^"]*"/i, `<meta name="twitter:image:alt" content="${escapeAttr(en['meta.image_alt'])}"`);
  }

  html = html.replace(/<meta\s+property="og:locale"\s+content="pt_BR"/i, '<meta property="og:locale" content="en_US"');
  html = html.replace(/<meta\s+property="og:locale:alternate"\s+content="en_US"/i, '<meta property="og:locale:alternate" content="pt_BR"');

  // 9. Update Structured Data (Schema.org / JSON-LD)
  html = html.replace(
    /"@type":\s*"WebSite",\s*"name":\s*"Otto Freitag — Portfólio Profissional",\s*"url":\s*"https:\/\/ottof77\.github\.io\/ottodev\/",\s*"inLanguage":\s*\[\s*"pt-BR",\s*"en-US"\s*\]/,
    '"@type": "WebSite",\n        "name": "Otto Freitag — Professional Portfolio",\n        "url": "https://ottof77.github.io/ottodev/en/",\n        "inLanguage": [\n          "en-US",\n          "pt-BR"\n        ]'
  );

  // 10. Update Language Switcher Button UI for English page
  html = html.replace(
    /(<button[^>]*data-action="toggle-lang"[^>]*>)([\s\S]*?)(<\/button>)/i,
    (match, openTag, innerContent, closeTag) => {
      let updatedOpen = openTag
        .replace(/aria-label="[^"]*"/i, 'aria-label="Switch language to Portuguese (PT)"')
        .replace(/title="[^"]*"/i, 'title="Switch to Portuguese"');
      let updatedInner = innerContent
        .replace(/<span\s+class="lang-current-text">PT<\/span>/i, '<span class="lang-current-text">EN</span>')
        .replace(/<span\s+class="lang-badge">BR<\/span>/i, '<span class="lang-badge">US</span>');
      return updatedOpen + updatedInner + closeTag;
    }
  );

  // 11. Update dynamic CV download links to EN-US PDF and adjusted path
  html = html.replace(/\bhref="assets\/docs\/cv-otto-freitag-pt-br\.pdf"/g, 'href="../assets/docs/cv-otto-freitag-en-us.pdf"');
  html = html.replace(/\bdownload="CV-Otto-David-Freitag-PT-BR\.pdf"/g, 'download="CV-Otto-David-Freitag-EN-US.pdf"');

  // 12. Localize attributes: data-i18n-aria-label, data-i18n-title, data-i18n-alt
  let attrCount = 0;
  html = html.replace(/(<[^>]*\bdata-i18n-aria-label="([^"]+)"[^>]*>)/gi, (tag, _, key) => {
    if (en[key]) {
      attrCount++;
      return tag.replace(/\baria-label="[^"]*"/, `aria-label="${escapeAttr(en[key])}"`);
    }
    return tag;
  });

  html = html.replace(/(<[^>]*\bdata-i18n-title="([^"]+)"[^>]*>)/gi, (tag, _, key) => {
    if (en[key]) {
      attrCount++;
      return tag.replace(/\btitle="[^"]*"/, `title="${escapeAttr(en[key])}"`);
    }
    return tag;
  });

  html = html.replace(/(<[^>]*\bdata-i18n-alt="([^"]+)"[^>]*>)/gi, (tag, _, key) => {
    if (en[key]) {
      attrCount++;
      return tag.replace(/\balt="[^"]*"/, `alt="${escapeAttr(en[key])}"`);
    }
    return tag;
  });
  console.log(`🏷️  Updated ${attrCount} localized attributes (aria-label, title, alt).`);

  // 13. Localize text & HTML elements with [data-i18n]
  const openingTagRegex = /<([a-z0-9]+)(\s[^>]*?\bdata-i18n="([^"]+)"[^>]*)>/gi;
  let match;
  const replacements = [];

  while ((match = openingTagRegex.exec(html)) !== null) {
    const tagName = match[1];
    const fullOpenTag = match[0];
    const key = match[3];
    const attrs = match[2];
    const isHtml = /data-i18n-html="true"/i.test(attrs);

    const startIndex = match.index + fullOpenTag.length;

    // Find corresponding closing tag
    let depth = 1;
    const tagFinder = new RegExp(`(</?${tagName}\\b[^>]*>)`, 'gi');
    tagFinder.lastIndex = startIndex;
    let subMatch;
    let closingIndex = -1;
    while ((subMatch = tagFinder.exec(html)) !== null) {
      if (subMatch[0].startsWith('</')) {
        depth--;
        if (depth === 0) {
          closingIndex = subMatch.index;
          break;
        }
      } else if (!subMatch[0].endsWith('/>')) {
        depth++;
      }
    }

    if (closingIndex !== -1 && en[key] !== undefined) {
      const translated = isHtml ? en[key] : escapeHtml(en[key]);
      replacements.push({
        start: startIndex,
        end: closingIndex,
        key,
        text: translated
      });
    } else if (closingIndex === -1) {
      console.warn(`⚠️ Warning: Could not find closing tag for <${tagName} data-i18n="${key}">`);
    }
  }

  console.log(`📝 Replacing ${replacements.length} data-i18n element contents...`);
  // Sort descending by start index to prevent shifting
  replacements.sort((a, b) => b.start - a.start);
  for (const r of replacements) {
    html = html.slice(0, r.start) + r.text + html.slice(r.end);
  }

  // 14. Adjust relative asset, script, and stylesheet paths for /en/ subdirectory
  html = html
    .replace(/\bhref="assets\//g, 'href="../assets/')
    .replace(/\bsrc="assets\//g, 'src="../assets/')
    .replace(/\bdata-cert-file="assets\//g, 'data-cert-file="../assets/')
    .replace(/\bhref="css\//g, 'href="../css/')
    .replace(/\bsrc="js\//g, 'src="../js/');

  // 15. Ensure output directory exists and write out en/index.html
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  fs.writeFileSync(outPath, html, 'utf8');
  console.log(`✅ Generated: ${outPath} (${(html.length / 1024).toFixed(1)} KB)`);
  return outPath;
}

// Auto-run when executed directly from CLI
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(__filename)) {
  try {
    buildStaticI18n();
  } catch (err) {
    console.error('❌ Build failed:', err);
    process.exit(1);
  }
}
