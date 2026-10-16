#!/usr/bin/env python3
"""Generate the 1200x630 executive OG cover for ottodev.

Reproduces the site's design language: obsidian background (#090d16),
gold monogram gradient (#D97706 -> #FDE68A), executive typography.
Run from the repo root:
    python3 tools/make-og-cover.py
Writes assets/images/og-cover.jpg (1200x630). Falls back to DejaVu
fonts when Montserrat is not installed, so it runs in any Pillow env.
"""
import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1200, 630
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FONTS = os.path.expanduser("~/.fonts")

GOLD_DARK = (217, 119, 6)      # #D97706
GOLD = (245, 158, 11)          # #F59E0B
GOLD_LIGHT = (253, 230, 138)   # #FDE68A
WHITE = (245, 247, 250)
MUTED = (147, 158, 178)
BG_TOP = (16, 22, 38)
BG_BOTTOM = (9, 13, 22)        # #090d16


def font(name, size):
    path = os.path.join(FONTS, name)
    if not os.path.exists(path):
        # Portable fallback (DejaVu ships with most Pillow installs)
        preferred = {
            "Montserrat-ExtraBold.ttf": "DejaVuSerif-Bold.ttf",
            "Montserrat-SemiBold.ttf": "DejaVuSans-Bold.ttf",
            "Montserrat-Regular.ttf": "DejaVuSans.ttf",
        }.get(name, "DejaVuSans.ttf")
        path = os.path.join("/usr/share/fonts/truetype/dejavu", preferred)
    return ImageFont.truetype(path, size)


def fit_font(name, text, max_w, start=64, min_=24):
    size = start
    while size > min_:
        f = font(name, size)
        if f.getbbox(text)[2] - f.getbbox(text)[0] <= max_w:
            return f, size
        size -= 2
    return font(name, min_), min_


def draw_monogram(draw, cx, cy, size):
    """Rounded obsidian square with gold rim + gold OF letters (matches monogram-of.svg)."""
    r = size
    x0, y0 = cx - r // 2, cy - r // 2
    # background, 18% radius
    draw.rounded_rectangle([x0, y0, x0 + r, y0 + r], radius=int(r * 0.27),
                           fill=(26, 34, 52))
    # gold rim
    draw.rounded_rectangle([x0 + 2, y0 + 2, x0 + r - 2, y0 + r - 2],
                           radius=int(r * 0.27) - 2, outline=GOLD, width=3)
    f, _ = fit_font("Montserrat-SemiBold.ttf", "OF", int(r * 0.95), start=int(r * 0.55))
    bb = draw.textbbox((0, 0), "OF", font=f)
    tw, th = bb[2] - bb[0], bb[3] - bb[1]
    draw.text((cx - tw / 2 - bb[0], cy - th / 2 - bb[1] + 2), "OF",
              font=f, fill=GOLD)


def main():
    # Background: vertical gradient
    bg = Image.new("RGB", (W, H))
    px = bg.load()
    for y in range(H):
        t = y / H
        r = int(BG_TOP[0] + (BG_BOTTOM[0] - BG_TOP[0]) * t)
        g = int(BG_TOP[1] + (BG_BOTTOM[1] - BG_TOP[1]) * t)
        b = int(BG_TOP[2] + (BG_BOTTOM[2] - BG_TOP[2]) * t)
        for x in range(W):
            px[x, y] = (r, g, b)

    # Subtle gold radial glow, top-right
    glow = Image.new("L", (W, H), 0)
    gd = ImageDraw.Draw(glow)
    gd.ellipse([W - 620, -260, W + 320, 620], fill=90)
    glow = glow.filter(ImageFilter.GaussianBlur(220))
    gold_overlay = Image.new("RGB", (W, H), (217, 119, 6))
    bg.paste(gold_overlay, (0, 0), glow)

    draw = ImageDraw.Draw(bg, "RGBA")

    # ---- Photo card (left) ----
    photo = Image.open(os.path.join(ROOT, "assets/images/otto-freitag.jpg")).convert("RGB")
    card_w, card_h = 300, 352
    pw, ph = photo.size
    scale = max(card_w / pw, card_h / ph)
    photo = photo.resize((int(pw * scale), int(ph * scale)), Image.LANCZOS)
    left = (photo.width - card_w) // 2
    top = (photo.height - card_h) // 2
    photo = photo.crop((left, top, left + card_w, top + card_h))

    mask = Image.new("L", (card_w, card_h), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, card_w, card_h], radius=26, fill=255)
    px0, py0 = 70, 139
    bg.paste(photo, (px0, py0), mask)
    # gold frame
    draw.rounded_rectangle([px0, py0, px0 + card_w, py0 + card_h],
                           radius=26, outline=GOLD, width=4)

    # ---- Text column (right) ----
    tx = 440
    # monogram
    draw_monogram(draw, tx + 38, 175, 76)

    # name
    name = "OTTO DAVID DE SANTANA FREITAG"
    f_name, _ = fit_font("Montserrat-ExtraBold.ttf", name, 660, start=52)
    draw.text((tx, 236), name, font=f_name, fill=WHITE)

    # gold divider
    draw.rounded_rectangle([tx, 306, tx + 92, 312], radius=3, fill=GOLD)

    # role line
    role = "LIDERANÇA EXECUTIVA  ·  ARQUITETURA DE SOLUÇÕES  ·  ENGENHARIA DE SOFTWARE"
    size = 26
    f_role = font("Montserrat-SemiBold.ttf", size)
    while draw.textlength(role, font=f_role) > 700 and size > 16:
        size -= 1
        f_role = font("Montserrat-SemiBold.ttf", size)
    draw.text((tx, 332), role, font=f_role, fill=GOLD_LIGHT)

    # tagline
    f_tag = font("Montserrat-Regular.ttf", 21)
    tag_lines = [
        "Mais de 20 anos de liderança executiva em grandes operações",
        "industriais (Gerdau, CSN, Servisan), arquitetura de soluções e",
        "engenharia de software corporativo. Fundador da Sysotto",
        "Softwares — SaaS para processos críticos e resultado de negócio.",
    ]
    y = 396
    for ln in tag_lines:
        draw.text((tx, y), ln, font=f_tag, fill=MUTED)
        y += 34

    # URL
    draw.text((tx, 566), "ottof77.github.io/ottodev", font=font("Montserrat-SemiBold.ttf", 17),
              fill=(102, 113, 136))

    out_jpg = os.path.join(ROOT, "assets/images/og-cover.jpg")
    bg.convert("RGB").save(out_jpg, "JPEG", quality=92)
    print("wrote", out_jpg, bg.size)


if __name__ == "__main__":
    main()
