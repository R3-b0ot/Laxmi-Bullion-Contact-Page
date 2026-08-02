# Laxmi Bullion Contact Page

Static GitHub Pages-compatible contact page for Laxmi Bullion, Zaveri Bazaar, Mumbai.

## Design

Heritage aesthetic using the business card color palette (Deep Espresso Brown `#231514` + Rich Metallic Gold `#DDA835`). Diamond-cut tiling background inspired by the business card pattern.

## Tech

- Single `index.html` — all CSS and JS inline
- Tailwind CSS (CDN), Font Awesome 6.4, Google Fonts (Cinzel, Marcellus, Plus Jakarta Sans)
- WCAG AA compliant (contrast, focus-visible, ARIA, skip links)

## Project Structure

```
index.html                    ← single-page app
assets/logo/
  laxmi-bullion-logo-mark.svg     ← emblem/icon
  laxmi-bullion-logo-wordmark.svg ← "LAXMI BULLION" text
  laxmi-bullion-logo-curve.svg    ← ornamental gold curve divider
.github/workflows/
  pages.yml                    ← GitHub Pages deploy CI
```
