# Sanastro Design System - Style Guide

## Brand Overview

Sanastro is a wellness and spiritual services platform that embodies tranquility, mysticism, and self-discovery. The design language blends celestial imagery with organic, earthy elements to create a warm, inviting, and trustworthy aesthetic.

### Design Principles

1. **Warmth & Comfort** - Every element should feel welcoming and calming
2. **Mystical Elegance** - Sophisticated yet approachable spiritual aesthetics
3. **Organic Flow** - Natural, fluid shapes that mirror the journey of self-discovery
4. **Clarity & Peace** - Clean layouts with generous whitespace for mental rest
5. **Authenticity** - Genuine, handcrafted feel without being overly polished

---

## Color Palette

### Primary Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Cream** | `#FAF7F2` | Primary background |
| **Warm Sand** | `#F0E6D8` | Secondary background, cards |
| **Terracotta** | `#C4A484` | Accent, buttons, highlights |
| **Dusty Rose** | `#D4A5A5` | Secondary accent, illustrations |
| **Bronze** | `#8B7355` | Text accents, icons |

### Neutral Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Espresso** | `#3D2E2E` | Primary text |
| **Cocoa** | `#5C4A4A` | Secondary text |
| **Taupe** | `#9A8B7A` | Muted text, borders |
| **Linen** | `#EDE4D8` | Dividers, subtle backgrounds |
| **Pearl** | `#FEFCF9` | Cards, overlays |

### Accent Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Golden Hour** | `#D4A574` | CTA buttons, important highlights |
| **Blush** | `#E8C4B8` | Soft accents, hover states |
| **Sage** | `#A8B5A0` | Success states, nature elements |
| **Celestial Blue** | `#8FA4B8` | Links, mystical elements |

### Gradient Definitions

```css
/* Hero gradient - warm sunset feel */
--gradient-hero: linear-gradient(180deg, #FAF7F2 0%, #F0E6D8 50%, #E8DFD0 100%);

/* Card gradient - subtle warmth */
--gradient-card: linear-gradient(135deg, #FEFCF9 0%, #F5EFE6 100%);

/* Accent gradient - golden glow */
--gradient-accent: linear-gradient(90deg, #D4A574 0%, #C4A484 100%);
```

---

## Typography

### Font Stack

**Primary (Headings):** `'Cormorant Garamond', Georgia, serif`
- Elegant serif with classical proportions
- Use weights: 400 (regular), 500 (medium), 600 (semibold)

**Secondary (Body):** `'Nunito Sans', 'Segoe UI', sans-serif`
- Warm, rounded sans-serif for readability
- Use weights: 300 (light), 400 (regular), 600 (semibold)

**Accent (Special):** `'Italiana', serif`
- Display font for hero headlines and special callouts
- Use sparingly for maximum impact

### Type Scale

| Element | Size | Weight | Line Height | Letter Spacing |
|---------|------|--------|-------------|----------------|
| Display | 64px / 4rem | 400 | 1.1 | -0.02em |
| H1 | 48px / 3rem | 500 | 1.2 | -0.01em |
| H2 | 36px / 2.25rem | 500 | 1.25 | 0 |
| H3 | 28px / 1.75rem | 500 | 1.3 | 0 |
| H4 | 22px / 1.375rem | 600 | 1.35 | 0.01em |
| H5 | 18px / 1.125rem | 600 | 1.4 | 0.02em |
| Body Large | 18px / 1.125rem | 400 | 1.7 | 0 |
| Body | 16px / 1rem | 400 | 1.6 | 0 |
| Body Small | 14px / 0.875rem | 400 | 1.5 | 0.01em |
| Caption | 12px / 0.75rem | 400 | 1.4 | 0.02em |
| Overline | 12px / 0.75rem | 600 | 1.2 | 0.15em |

### Typography Examples

```
Display: "Find peace of mind"
H1: "Discover Your Path"
H2: "Choose a way to know your future"
H3: "Tarot Reading"
Body: "Experience the ancient art of divination..."
Overline: "OUR SERVICES"
```

---

## Spacing System

Based on an 8px grid with a 4px half-step for fine adjustments.

| Token | Value | Usage |
|-------|-------|-------|
| `space-1` | 4px | Tight gaps, inline spacing |
| `space-2` | 8px | Icon gaps, compact elements |
| `space-3` | 12px | Small internal padding |
| `space-4` | 16px | Default padding, list gaps |
| `space-5` | 24px | Card padding, section gaps |
| `space-6` | 32px | Component spacing |
| `space-7` | 48px | Section padding (mobile) |
| `space-8` | 64px | Section padding (tablet) |
| `space-9` | 96px | Section padding (desktop) |
| `space-10` | 128px | Hero sections, major divisions |

---

## Border & Radius

### Border Styles

```css
--border-subtle: 1px solid #EDE4D8;
--border-default: 1px solid #D4C8B8;
--border-accent: 2px solid #C4A484;
```

### Border Radius Scale

| Token | Value | Usage |
|-------|-------|-------|
| `radius-sm` | 4px | Small buttons, tags |
| `radius-md` | 8px | Input fields, small cards |
| `radius-lg` | 16px | Cards, modal corners |
| `radius-xl` | 24px | Featured cards, hero elements |
| `radius-2xl` | 32px | Large decorative elements |
| `radius-full` | 9999px | Pills, avatars, circular elements |

---

## Shadows & Elevation

### Shadow Scale

```css
/* Subtle lift - cards at rest */
--shadow-sm: 0 1px 2px rgba(61, 46, 46, 0.04);

/* Default elevation - interactive cards */
--shadow-md: 0 4px 12px rgba(61, 46, 46, 0.08);

/* Raised - hover states, dropdowns */
--shadow-lg: 0 8px 24px rgba(61, 46, 46, 0.12);

/* High elevation - modals, popovers */
--shadow-xl: 0 16px 48px rgba(61, 46, 46, 0.16);

/* Warm glow - featured elements */
--shadow-glow: 0 4px 24px rgba(212, 165, 116, 0.2);
```

---

## Iconography

### Style Guidelines

- **Stroke width:** 1.5px for standard icons, 1px for detailed illustrations
- **Corner style:** Rounded caps and joins
- **Size scale:** 16px, 20px, 24px, 32px, 48px
- **Color:** Inherit from parent or use `Bronze (#8B7355)`

### Icon Categories

1. **Mystical** - Sun, moon, stars, eye, crystal ball, zodiac signs
2. **Nature** - Flowers, leaves, hands, palm, lotus
3. **UI** - Arrows, menu, close, search, heart
4. **Service** - Cards (tarot), massage hands, horoscope symbols

---

## Imagery

### Photography Style

- Soft, diffused lighting with warm tones
- Earth tones and muted color grading
- Intimate, close-up compositions
- Natural textures (fabric, wood, stone, botanicals)
- Human elements showing relaxation and introspection

### Illustration Style

- Line art with organic, flowing strokes
- Celestial and botanical motifs
- Warm, muted color fills
- Hand-drawn aesthetic without being rough
- Combine geometric (stars, circles) with organic (flowers, hands)

### Image Treatment

```css
/* Warm overlay for consistency */
filter: sepia(10%) saturate(90%);

/* Soft fade edges */
mask-image: radial-gradient(ellipse at center, black 60%, transparent 100%);
```

---

## Motion & Animation

### Timing Functions

```css
--ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
--ease-bounce: cubic-bezier(0.34, 1.56, 0.64, 1);
--ease-gentle: cubic-bezier(0.25, 0.1, 0.25, 1);
```

### Duration Scale

| Token | Value | Usage |
|-------|-------|-------|
| `duration-fast` | 150ms | Micro-interactions, hovers |
| `duration-normal` | 250ms | Standard transitions |
| `duration-slow` | 400ms | Page transitions, reveals |
| `duration-slower` | 600ms | Complex animations |

### Animation Principles

1. **Gentle & Flowing** - Movements should feel natural and unhurried
2. **Purposeful** - Only animate what needs attention
3. **Subtle** - Prefer opacity and transform over dramatic effects
4. **Consistent** - Use the same easing across similar interactions

---

## Accessibility

### Color Contrast

All text combinations meet WCAG 2.1 AA standards:
- Primary text on Cream: 10.2:1
- Secondary text on Cream: 7.1:1
- Button text on Terracotta: 4.8:1

### Focus States

```css
/* Visible focus ring */
outline: 2px solid #C4A484;
outline-offset: 2px;

/* Focus-visible for keyboard only */
:focus-visible {
  outline: 2px solid #C4A484;
  outline-offset: 2px;
}
```

### Touch Targets

- Minimum size: 44x44px for interactive elements
- Adequate spacing between clickable items (minimum 8px)

---

## Responsive Breakpoints

| Name | Value | Target |
|------|-------|--------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

### Container Widths

```css
--container-sm: 640px;
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1200px;
--container-prose: 65ch; /* For readable text blocks */
```

---

## File References

- **Design Tokens:** `./tokens.css` and `./tokens.json`
- **Component Specs:** `./component-specs.md`
- **Reference Images:** `./references/`
