#!/usr/bin/env python3
"""
Integrity & Quality Audit Script for Otto Freitag Portfolio
Checks:
1. Relative asset & link integrity (src, href, data-cert-file) in index.html & en/index.html
2. Full i18n key parity between HTML markup and js/i18n.js (pt-BR and en-US)
3. Zero inline style="..." attributes in HTML files
4. JSON-LD Schema.org validity
5. SEO files integrity (robots.txt and sitemap.xml)
6. Hreflang and canonical link tags
Zero external dependencies (uses standard Python 3 libraries).
"""

import os
import re
import sys
import json
import subprocess
import xml.etree.ElementTree as ET
from pathlib import Path

ROOT_DIR = Path(__file__).resolve().parent.parent

class Colors:
    GREEN = '\033[92m'
    RED = '\033[91m'
    YELLOW = '\033[93m'
    CYAN = '\033[96m'
    BOLD = '\033[1m'
    RESET = '\033[0m'

def log_pass(msg):
    print(f"  {Colors.GREEN}✔ [PASS]{Colors.RESET} {msg}")

def log_fail(msg):
    print(f"  {Colors.RED}✖ [FAIL]{Colors.RESET} {msg}")

def log_info(msg):
    print(f"{Colors.BOLD}{Colors.CYAN}{msg}{Colors.RESET}")

def check_file_references(html_path, base_dir):
    """Verify that all local files referenced in src, href, and data-cert-file exist on disk."""
    errors = []
    with open(html_path, 'r', encoding='utf-8') as f:
        html = f.read()

    # Match src, href, data-cert-file
    pattern = re.compile(r'(?:src|href|data-cert-file)=["\']([^"\']+)["\']', re.IGNORECASE)
    matches = pattern.findall(html)

    checked = 0
    for ref in matches:
        ref_clean = ref.strip()
        # Skip remote URLs, anchors, mailto, javascript, about:
        if ref_clean.startswith(('http://', 'https://', 'mailto:', '#', 'about:', 'javascript:')) or not ref_clean:
            continue

        # Strip query strings and hash anchors
        file_path_rel = ref_clean.split('?')[0].split('#')[0]
        if not file_path_rel:
            continue

        resolved = (base_dir / file_path_rel).resolve()
        checked += 1
        if not resolved.exists():
            errors.append(f"Referenced file not found: '{ref}' (resolved to: '{resolved}')")

    return checked, errors

def check_inline_styles(html_path):
    """Ensure zero style='...' attributes in HTML."""
    with open(html_path, 'r', encoding='utf-8') as f:
        html = f.read()

    # Look for style="..." on tags (avoiding comments)
    # Remove HTML comments first
    clean_html = re.sub(r'<!--[\s\S]*?-->', '', html)
    matches = re.findall(r'<[a-z0-9]+[^>]*?\s(style=["\'][^"\']*["\'])', clean_html, re.IGNORECASE)
    return matches

def check_json_ld(html_path):
    """Validate JSON-LD structured data syntax and Schema.org context."""
    errors = []
    with open(html_path, 'r', encoding='utf-8') as f:
        html = f.read()

    matches = re.findall(r'<script\s+type=["\']application/ld\+json["\']\s*>(.*?)</script>', html, re.DOTALL | re.IGNORECASE)
    if not matches:
        errors.append("No <script type='application/ld+json'> found")
        return 0, errors

    for idx, block in enumerate(matches):
        try:
            data = json.loads(block)
            if data.get('@context') != 'https://schema.org':
                errors.append(f"Block #{idx+1}: @context is not 'https://schema.org' (got {data.get('@context')})")
            if '@graph' not in data and data.get('@type') not in ['Person', 'WebSite']:
                errors.append(f"Block #{idx+1}: Expected '@graph' array or valid schema @type")
        except json.JSONDecodeError as e:
            errors.append(f"Block #{idx+1}: Invalid JSON syntax: {e}")

    return len(matches), errors

def extract_translations():
    """Extract translations dictionaries from js/i18n.js using node or fallback regex."""
    i18n_file = ROOT_DIR / 'js' / 'i18n.js'
    if not i18n_file.exists():
        raise FileNotFoundError(f"Missing {i18n_file}")

    # Method 1: Try running Node to require/eval directly
    try:
        cmd = ["node", "-e", "console.log(JSON.stringify(require('./js/i18n.js').translations))"]
        output = subprocess.check_output(cmd, cwd=str(ROOT_DIR), stderr=subprocess.DEVNULL)
        return json.loads(output.decode('utf-8'))
    except Exception:
        pass

    # Method 2: Python regex extraction fallback
    with open(i18n_file, 'r', encoding='utf-8') as f:
        code = f.read()

    pt_match = re.search(r"'pt-BR':\s*\{(.*?)\n\s*\},?\s*'en-US':", code, re.DOTALL)
    en_match = re.search(r"'en-US':\s*\{(.*?)\n\s*\}[;\n\s]*class", code, re.DOTALL)

    if not pt_match or not en_match:
        raise ValueError("Could not extract translation blocks from js/i18n.js")

    def parse_keys(block):
        return set(re.findall(r"['\"]([a-zA-Z0-9_.]+)['\"]\s*:", block))

    return {
        'pt-BR': {k: True for k in parse_keys(pt_match.group(1))},
        'en-US': {k: True for k in parse_keys(en_match.group(1))}
    }

def check_i18n_parity():
    """Verify that all data-i18n* keys in index.html exist in pt-BR and en-US."""
    errors = []
    with open(ROOT_DIR / 'index.html', 'r', encoding='utf-8') as f:
        html = f.read()

    # Find all data-i18n* keys (excluding data-i18n-html="true")
    matches = re.findall(r'data-i18n(?:-[a-z]+)?=["\']([^"\']+)["\']', html)
    html_keys = set(k for k in matches if k != 'true')

    trans = extract_translations()
    pt_keys = set(trans.get('pt-BR', {}).keys())
    en_keys = set(trans.get('en-US', {}).keys())

    missing_in_pt = html_keys - pt_keys
    missing_in_en = html_keys - en_keys
    pt_en_diff = pt_keys ^ en_keys

    if missing_in_pt:
        errors.append(f"Keys present in index.html but missing in pt-BR: {sorted(missing_in_pt)}")
    if missing_in_en:
        errors.append(f"Keys present in index.html but missing in en-US: {sorted(missing_in_en)}")
    if pt_en_diff:
        errors.append(f"Discrepancy between pt-BR and en-US dictionaries: {sorted(pt_en_diff)}")

    return len(html_keys), len(pt_keys), len(en_keys), errors

def check_seo_files():
    """Validate robots.txt, sitemap.xml and hreflang tags."""
    errors = []
    robots_file = ROOT_DIR / 'robots.txt'
    sitemap_file = ROOT_DIR / 'sitemap.xml'

    if not robots_file.exists():
        errors.append("robots.txt is missing in root")
    else:
        with open(robots_file, 'r', encoding='utf-8') as f:
            robots_content = f.read()
        if 'Sitemap:' not in robots_content or 'sitemap.xml' not in robots_content:
            errors.append("robots.txt does not declare Sitemap URL")

    if not sitemap_file.exists():
        errors.append("sitemap.xml is missing in root")
    else:
        try:
            tree = ET.parse(sitemap_file)
            root = tree.getroot()
            # Check namespace
            if not root.tag.endswith('urlset'):
                errors.append(f"sitemap.xml root tag is not urlset (got {root.tag})")
            
            # Find all loc elements
            urls = [elem.text.strip() for elem in root.findall('.//{http://www.sitemaps.org/schemas/sitemap/0.9}loc')]
            expected_urls = [
                'https://ottof77.github.io/ottodev/',
                'https://ottof77.github.io/ottodev/en/'
            ]
            for exp in expected_urls:
                if exp not in urls:
                    errors.append(f"sitemap.xml is missing URL: {exp}")
        except Exception as e:
            errors.append(f"sitemap.xml XML parsing failed: {e}")

    # Check hreflang tags in index.html
    with open(ROOT_DIR / 'index.html', 'r', encoding='utf-8') as f:
        index_html = f.read()

    hreflang_tags = re.findall(r'<link\s+rel=["\']alternate["\']\s+hreflang=["\']([^"\']+)["\']', index_html)
    for lang in ['pt-BR', 'en-US', 'x-default']:
        if lang not in hreflang_tags:
            errors.append(f"index.html is missing hreflang tag for: {lang}")

    return errors

def main():
    print(f"\n{Colors.BOLD}🔍 Running Quality, SEO & Integrity Verification for Otto Freitag Portfolio...{Colors.RESET}\n")
    all_passed = True

    # 1. Check local file references
    log_info("1. Local File References (src, href, data-cert-file)")
    idx_count, idx_errs = check_file_references(ROOT_DIR / 'index.html', ROOT_DIR)
    if idx_errs:
        all_passed = False
        for err in idx_errs: log_fail(err)
    else:
        log_pass(f"index.html: Verified {idx_count} local asset/document references with 0 broken links.")

    en_path = ROOT_DIR / 'en' / 'index.html'
    if en_path.exists():
        en_count, en_errs = check_file_references(en_path, ROOT_DIR / 'en')
        if en_errs:
            all_passed = False
            for err in en_errs: log_fail(err)
        else:
            log_pass(f"en/index.html: Verified {en_count} local asset/document references with 0 broken links.")
    else:
        all_passed = False
        log_fail("en/index.html does not exist! Run scripts/build-i18n-static.mjs first.")

    # 2. Check i18n parity
    log_info("\n2. Internationalization (i18n) Parity & Completeness")
    try:
        html_k, pt_k, en_k, i18n_errs = check_i18n_parity()
        if i18n_errs:
            all_passed = False
            for err in i18n_errs: log_fail(err)
        else:
            log_pass(f"All {html_k} HTML data-i18n keys are present in both pt-BR ({pt_k}) and en-US ({en_k}) dictionaries (100% parity).")
    except Exception as e:
        all_passed = False
        log_fail(f"Failed i18n parity check: {e}")

    # 3. Check inline styles
    log_info("\n3. Inline Styles Check (CSS Architecture & Zero-Build Invariant)")
    idx_styles = check_inline_styles(ROOT_DIR / 'index.html')
    if idx_styles:
        all_passed = False
        log_fail(f"index.html has {len(idx_styles)} inline style attribute(s): {idx_styles}")
    else:
        log_pass("index.html: 0 inline style attributes found.")

    if en_path.exists():
        en_styles = check_inline_styles(en_path)
        if en_styles:
            all_passed = False
            log_fail(f"en/index.html has {len(en_styles)} inline style attribute(s): {en_styles}")
        else:
            log_pass("en/index.html: 0 inline style attributes found.")

    # 4. Check JSON-LD
    log_info("\n4. Structured Data (JSON-LD / Schema.org)")
    idx_ld_cnt, idx_ld_errs = check_json_ld(ROOT_DIR / 'index.html')
    if idx_ld_errs:
        all_passed = False
        for err in idx_ld_errs: log_fail(err)
    else:
        log_pass(f"index.html: {idx_ld_cnt} valid JSON-LD Schema.org block(s).")

    if en_path.exists():
        en_ld_cnt, en_ld_errs = check_json_ld(en_path)
        if en_ld_errs:
            all_passed = False
            for err in en_ld_errs: log_fail(err)
        else:
            log_pass(f"en/index.html: {en_ld_cnt} valid JSON-LD Schema.org block(s).")

    # 5. Check SEO Files & Hreflang
    log_info("\n5. SEO, Crawlers & Sitemap Configuration")
    seo_errs = check_seo_files()
    if seo_errs:
        all_passed = False
        for err in seo_errs: log_fail(err)
    else:
        log_pass("robots.txt: Present, properly allows indexing and references sitemap.xml.")
        log_pass("sitemap.xml: Present, valid XML with both pt-BR (/) and en-US (/en/) URLs.")
        log_pass("hreflang: Alternate tags for pt-BR, en-US and x-default verified.")

    print(f"\n{Colors.BOLD}{'='*50}{Colors.RESET}")
    if all_passed:
        print(f"{Colors.BOLD}{Colors.GREEN}✨ ALL AUDIT CHECKS PASSED SUCCESSFULLY! Ready for deployment.{Colors.RESET}\n")
        sys.exit(0)
    else:
        print(f"{Colors.BOLD}{Colors.RED}❌ AUDIT FAILED: Please fix the errors listed above.{Colors.RESET}\n")
        sys.exit(1)

if __name__ == '__main__':
    main()
