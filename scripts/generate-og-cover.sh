#!/usr/bin/env bash
set -euo pipefail

# Script to generate Open Graph executive banner (1200x630)
# Uses headless Chrome to render HTML/CSS and sips to convert to JPEG.

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$PROJECT_ROOT"

HTML_TEMPLATE=$(mktemp /tmp/og-cover-XXXXXX.html)
PNG_OUTPUT="assets/images/og-cover.png"
JPG_OUTPUT="assets/images/og-cover.jpg"

cat << 'EOF' > "$HTML_TEMPLATE"
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1200px;
    height: 630px;
    background: #090d16;
    color: #f8fafc;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    display: flex;
    position: relative;
    overflow: hidden;
    padding: 56px 64px;
    justify-content: space-between;
    align-items: center;
  }

  .bg-glow-1 {
    position: absolute;
    top: -120px;
    right: 180px;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(245, 158, 11, 0.16) 0%, rgba(217, 119, 6, 0.05) 50%, transparent 70%);
    filter: blur(40px);
    pointer-events: none;
  }
  .bg-glow-2 {
    position: absolute;
    bottom: -150px;
    left: -100px;
    width: 480px;
    height: 480px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(217, 119, 6, 0.12) 0%, transparent 70%);
    filter: blur(50px);
    pointer-events: none;
  }

  .card-frame {
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    border: 1px solid rgba(245, 158, 11, 0.22);
    border-radius: 20px;
    pointer-events: none;
  }

  .left-col {
    width: 680px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    z-index: 2;
  }

  .brand-row {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .brand-logo {
    width: 46px;
    height: 46px;
    border-radius: 12px;
  }
  .brand-text {
    font-size: 17px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #f8fafc;
  }
  .brand-badge {
    background: rgba(245, 158, 11, 0.12);
    border: 1px solid rgba(245, 158, 11, 0.3);
    color: #fbbf24;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.05em;
    padding: 4px 10px;
    border-radius: 999px;
    margin-left: 6px;
  }

  .content-main {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  .person-name {
    font-size: 46px;
    font-weight: 800;
    line-height: 1.15;
    color: #ffffff;
    letter-spacing: -0.02em;
    margin-bottom: 12px;
  }
  .executive-title {
    font-size: 24px;
    font-weight: 700;
    background: linear-gradient(135deg, #f59e0b 0%, #fbbf24 45%, #fde68a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 18px;
    letter-spacing: -0.01em;
  }
  .executive-desc {
    font-size: 17px;
    line-height: 1.5;
    color: #cbd5e1;
    margin-bottom: 22px;
  }
  .highlight-company {
    color: #fde68a;
    font-weight: 600;
  }

  .tags-row {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  .tag-pill {
    background: rgba(15, 20, 32, 0.8);
    border: 1px solid rgba(245, 158, 11, 0.2);
    padding: 6px 14px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 600;
    color: #e2e8f0;
  }

  .footer-row {
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 14px;
    color: #94a3b8;
  }
  .domain-pill {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #fbbf24;
    font-weight: 600;
  }
  .domain-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 8px #10b981;
  }

  .right-col {
    width: 380px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 2;
  }
  .photo-frame {
    position: relative;
    width: 330px;
    height: 330px;
    border-radius: 28px;
    padding: 4px;
    background: linear-gradient(135deg, #d97706 0%, #f59e0b 50%, #fde68a 100%);
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.65), 0 0 35px rgba(245, 158, 11, 0.25);
  }
  .photo-img {
    width: 100%;
    height: 100%;
    border-radius: 24px;
    object-fit: cover;
    object-position: center 20%;
    display: block;
  }

  .status-badge {
    position: absolute;
    bottom: -16px;
    background: #0f1420;
    border: 1px solid rgba(245, 158, 11, 0.35);
    padding: 8px 18px;
    border-radius: 999px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 600;
    color: #f8fafc;
    box-shadow: 0 10px 20px rgba(0,0,0,0.5);
    white-space: nowrap;
  }
  .status-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #f59e0b;
  }
</style>
</head>
<body>
  <div class="bg-glow-1"></div>
  <div class="bg-glow-2"></div>
  <div class="card-frame"></div>

  <div class="left-col">
    <div class="brand-row">
      <img src="assets/images/monogram-of.svg" alt="Monograma OF" class="brand-logo">
      <span class="brand-text">Otto Freitag</span>
      <span class="brand-badge">Portfólio Executivo</span>
    </div>

    <div class="content-main">
      <h1 class="person-name">Otto David de Santana Freitag</h1>
      <div class="executive-title">Liderança Executiva & Engenharia de Software</div>
      <p class="executive-desc">
        Mais de 20 anos de liderança em grandes corporações (<span class="highlight-company">Gerdau, CSN, Servisan</span>) integrados à arquitetura de soluções corporativas e plataformas SaaS.
      </p>
      <div class="tags-row">
        <span class="tag-pill">CEO & Fundador Sysotto</span>
        <span class="tag-pill">Arquiteto SaaS Multi-Tenant</span>
        <span class="tag-pill">Engenharia de Software</span>
      </div>
    </div>

    <div class="footer-row">
      <div class="domain-pill">
        <span class="domain-dot"></span>
        <span>ottof77.github.io/ottodev</span>
      </div>
      <span>•</span>
      <span>Sysotto Softwares</span>
    </div>
  </div>

  <div class="right-col">
    <div class="photo-frame">
      <img src="assets/images/otto-freitag.jpg" alt="Otto Freitag" class="photo-img">
      <div class="status-badge">
        <span class="status-dot"></span>
        <span>CEO & Software Engineer</span>
      </div>
    </div>
  </div>
</body>
</html>
EOF

CHROME_BIN="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
if [ ! -f "$CHROME_BIN" ]; then
  CHROME_BIN=$(which google-chrome || which chromium || echo "")
fi

if [ -n "$CHROME_BIN" ]; then
  "$CHROME_BIN" \
    --headless \
    --disable-gpu \
    --hide-scrollbars \
    --screenshot="$PNG_OUTPUT" \
    --window-size=1200,630 \
    "$HTML_TEMPLATE" 2>/dev/null
  sips -s format jpeg -s formatOptions 92 "$PNG_OUTPUT" --out "$JPG_OUTPUT" >/dev/null
  echo "OG Cover generated successfully at $JPG_OUTPUT"
else
  echo "Error: Google Chrome not found for headless rendering."
  exit 1
fi

rm -f "$HTML_TEMPLATE"
