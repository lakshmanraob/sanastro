# Sanastro Design System

A warm, mystical design system for wellness and spiritual services.

---

## Quick Start

### 1. Import Design Tokens

**CSS Custom Properties:**
```html
<link rel="stylesheet" href="./tokens.css">
```

**Tailwind CSS:**
```js
// tailwind.config.js
import sanastroConfig from './docs/design/tailwind.config.js'
export default sanastroConfig
```

### 2. Load Fonts

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Italiana&family=Nunito+Sans:wght@300;400;600&display=swap" rel="stylesheet">
```

### 3. Apply Base Styles

```css
body {
  font-family: var(--font-body);
  background-color: var(--color-background);
  color: var(--color-text-primary);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
}
```

---

## Files Overview

| File | Description |
|------|-------------|
| `style-guide.md` | Complete style guide with design principles, colors, typography |
| `tokens.css` | CSS custom properties for all design tokens |
| `tokens.json` | JSON format tokens for build tools and theming |
| `component-specs.md` | Detailed specifications for all UI components |
| `tailwind.config.js` | Tailwind CSS configuration with all tokens |
| `references/` | Design reference images |

---

## Color Palette

### Primary

| | Color | Hex | CSS Variable |
|-|-------|-----|--------------|
| ![#FAF7F2](https://via.placeholder.com/20/FAF7F2/FAF7F2) | Cream | `#FAF7F2` | `--color-cream` |
| ![#F0E6D8](https://via.placeholder.com/20/F0E6D8/F0E6D8) | Warm Sand | `#F0E6D8` | `--color-warm-sand` |
| ![#C4A484](https://via.placeholder.com/20/C4A484/C4A484) | Terracotta | `#C4A484` | `--color-terracotta` |
| ![#D4A5A5](https://via.placeholder.com/20/D4A5A5/D4A5A5) | Dusty Rose | `#D4A5A5` | `--color-dusty-rose` |
| ![#8B7355](https://via.placeholder.com/20/8B7355/8B7355) | Bronze | `#8B7355` | `--color-bronze` |

### Neutrals

| | Color | Hex | CSS Variable |
|-|-------|-----|--------------|
| ![#3D2E2E](https://via.placeholder.com/20/3D2E2E/3D2E2E) | Espresso | `#3D2E2E` | `--color-espresso` |
| ![#5C4A4A](https://via.placeholder.com/20/5C4A4A/5C4A4A) | Cocoa | `#5C4A4A` | `--color-cocoa` |
| ![#9A8B7A](https://via.placeholder.com/20/9A8B7A/9A8B7A) | Taupe | `#9A8B7A` | `--color-taupe` |

### Accents

| | Color | Hex | CSS Variable |
|-|-------|-----|--------------|
| ![#D4A574](https://via.placeholder.com/20/D4A574/D4A574) | Golden Hour | `#D4A574` | `--color-golden-hour` |
| ![#E8C4B8](https://via.placeholder.com/20/E8C4B8/E8C4B8) | Blush | `#E8C4B8` | `--color-blush` |
| ![#A8B5A0](https://via.placeholder.com/20/A8B5A0/A8B5A0) | Sage | `#A8B5A0` | `--color-sage` |
| ![#8FA4B8](https://via.placeholder.com/20/8FA4B8/8FA4B8) | Celestial Blue | `#8FA4B8` | `--color-celestial-blue` |

---

## Typography

### Font Families

```css
/* Headings - elegant serif */
font-family: var(--font-heading);
/* 'Cormorant Garamond', Georgia, serif */

/* Body - warm sans-serif */
font-family: var(--font-body);
/* 'Nunito Sans', 'Segoe UI', sans-serif */

/* Display - special headlines */
font-family: var(--font-display);
/* 'Italiana', serif */
```

### Type Scale

| Name | Size | Usage |
|------|------|-------|
| Display | 64px | Hero headlines |
| 4xl | 48px | Page titles (H1) |
| 3xl | 36px | Section titles (H2) |
| 2xl | 28px | Subsections (H3) |
| xl | 22px | Card titles (H4) |
| lg | 18px | Large body text |
| base | 16px | Default body |
| sm | 14px | Small text |
| xs | 12px | Captions |

---

## Spacing

Based on 8px grid:

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | 4px | Tight gaps |
| `--space-2` | 8px | Icon gaps |
| `--space-3` | 12px | Small padding |
| `--space-4` | 16px | Default padding |
| `--space-5` | 24px | Card padding |
| `--space-6` | 32px | Component spacing |
| `--space-7` | 48px | Section padding (mobile) |
| `--space-8` | 64px | Section padding (tablet) |
| `--space-9` | 96px | Section padding (desktop) |

---

## Components

Key components defined in this system:

- **Layout:** Container, Section, Grid
- **Navigation:** Header, Mobile Menu
- **Typography:** Heading, Text, Overline
- **Buttons:** Primary, Secondary, Ghost, Link, Icon
- **Cards:** Base Card, Service Card
- **Forms:** Input, Textarea, Select, Checkbox, Radio
- **Sections:** Hero, Testimonials, Footer
- **Decorative:** Dividers, Celestial elements, Botanicals

See `component-specs.md` for detailed specifications.

---

## Brand Guidelines

### Design Principles

1. **Warmth & Comfort** - Welcoming and calming
2. **Mystical Elegance** - Sophisticated spiritual aesthetics
3. **Organic Flow** - Natural, fluid shapes
4. **Clarity & Peace** - Clean layouts, generous whitespace
5. **Authenticity** - Genuine, handcrafted feel

### Visual Elements

- Celestial imagery: sun, moon, stars
- Botanical elements: flowers, leaves, hands
- Warm gradients and soft shadows
- Line art illustrations
- Rounded corners and organic shapes

---

## Reference Image

The design system is based on the reference design located at:

```
docs/design/references/homepage-reference.png
```

This reference showcases:
- Hero section with celestial imagery
- Service cards with illustrations
- Warm, earthy color palette
- Elegant typography pairing
- Clean, peaceful layout

---

## Framework Integration

### Astro

```astro
---
// src/layouts/Layout.astro
import '../styles/tokens.css'
---
<html>
  <head>
    <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Italiana&family=Nunito+Sans:wght@300;400;600&display=swap" rel="stylesheet">
  </head>
  <body class="bg-cream text-espresso font-body">
    <slot />
  </body>
</html>
```

### React / Next.js

```jsx
// app/layout.tsx or _app.tsx
import '@/styles/tokens.css'
import { Cormorant_Garamond, Nunito_Sans } from 'next/font/google'

const heading = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-heading'
})

const body = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-body'
})
```

---

## Version

**v1.0.0** - Initial release
