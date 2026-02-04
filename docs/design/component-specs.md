# Sanastro Component Specifications

This document defines the specifications for all UI components in the Sanastro design system. Each component includes its variants, states, anatomy, and implementation guidelines.

---

## Table of Contents

1. [Layout Components](#layout-components)
2. [Navigation](#navigation)
3. [Typography Components](#typography-components)
4. [Buttons](#buttons)
5. [Cards](#cards)
6. [Form Elements](#form-elements)
7. [Hero Section](#hero-section)
8. [Service Cards](#service-cards)
9. [Testimonials](#testimonials)
10. [Decorative Elements](#decorative-elements)
11. [Footer](#footer)

---

## Layout Components

### Container

Constrains content width and centers it horizontally.

```
Props:
├── size: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'prose' | 'full'
├── padding: boolean (default: true)
└── centered: boolean (default: true)

Sizes:
├── sm: max-width: 640px
├── md: max-width: 768px
├── lg: max-width: 1024px
├── xl: max-width: 1200px (default)
├── 2xl: max-width: 1400px
├── prose: max-width: 65ch
└── full: max-width: 100%

Padding:
├── Mobile: 16px (1rem) horizontal
├── Tablet: 24px (1.5rem) horizontal
└── Desktop: 32px (2rem) horizontal
```

### Section

Full-width section wrapper with vertical spacing.

```
Props:
├── background: 'default' | 'alt' | 'gradient' | 'none'
├── spacing: 'sm' | 'md' | 'lg'
└── id: string (for anchor links)

Background variants:
├── default: var(--color-background)
├── alt: var(--color-background-alt)
├── gradient: var(--gradient-hero)
└── none: transparent

Spacing (vertical padding):
├── sm: 48px (mobile) / 64px (desktop)
├── md: 64px (mobile) / 96px (desktop)
└── lg: 96px (mobile) / 128px (desktop)
```

### Grid

Responsive grid layout system.

```
Props:
├── columns: 1 | 2 | 3 | 4 | 'auto'
├── gap: 'sm' | 'md' | 'lg'
└── align: 'start' | 'center' | 'end' | 'stretch'

Responsive behavior:
├── Mobile: 1 column
├── Tablet (≥768px): 2 columns
└── Desktop (≥1024px): specified columns

Gap sizes:
├── sm: 16px
├── md: 24px
└── lg: 32px
```

---

## Navigation

### Header/Navbar

Primary site navigation component.

```
Anatomy:
├── Logo (left)
├── Nav Links (center or right)
├── CTA Button (right)
└── Mobile Menu Toggle (mobile only)

Dimensions:
├── Height: 72px (desktop) / 64px (mobile)
├── Logo: max-height 40px
└── Nav links gap: 32px

States:
├── Default: transparent or cream background
├── Scrolled: cream background + subtle shadow
└── Mobile menu open: full-height overlay

Styles:
├── Background: var(--color-cream)
├── Text: var(--color-text-secondary)
├── Active link: var(--color-text-primary) + underline accent
├── Hover: var(--color-text-primary)
└── Shadow (scrolled): var(--shadow-sm)

Nav Link Styles:
├── Font: var(--font-body)
├── Size: var(--text-base)
├── Weight: var(--font-medium)
├── Letter-spacing: var(--tracking-wide)
└── Transition: color var(--transition-fast)
```

### Mobile Menu

Full-screen navigation overlay for mobile devices.

```
Anatomy:
├── Close button (top right)
├── Nav links (centered, stacked)
├── CTA button (bottom)
└── Decorative element (optional)

Styles:
├── Background: var(--color-cream)
├── Link size: var(--text-2xl)
├── Link weight: var(--font-medium)
├── Link spacing: 24px vertical
└── Animation: slide in from right, 400ms

Transitions:
├── Overlay fade: 250ms ease
└── Menu slide: 400ms ease-out
```

---

## Typography Components

### Heading

Semantic heading component with styling variants.

```
Props:
├── level: 1 | 2 | 3 | 4 | 5 | 6 (semantic h1-h6)
├── size: 'display' | '4xl' | '3xl' | '2xl' | 'xl' | 'lg'
├── align: 'left' | 'center' | 'right'
└── color: 'primary' | 'secondary' | 'accent'

Default mappings:
├── h1 → size: 4xl
├── h2 → size: 3xl
├── h3 → size: 2xl
├── h4 → size: xl
├── h5 → size: lg
└── h6 → size: base

Styles:
├── Font: var(--font-heading)
├── Color: var(--color-text-primary)
├── Weight: var(--font-medium) to var(--font-semibold)
└── Line-height: var(--leading-tight) to var(--leading-snug)
```

### Text / Paragraph

Body text component with variants.

```
Props:
├── size: 'sm' | 'base' | 'lg'
├── color: 'primary' | 'secondary' | 'muted'
├── weight: 'normal' | 'medium' | 'semibold'
└── leading: 'normal' | 'relaxed' | 'loose'

Styles:
├── Font: var(--font-body)
├── Default size: var(--text-base)
├── Default color: var(--color-text-secondary)
├── Line-height: var(--leading-relaxed)
└── Max-width (prose): 65ch
```

### Overline

Small uppercase label text.

```
Styles:
├── Font: var(--font-body)
├── Size: var(--text-xs)
├── Weight: var(--font-semibold)
├── Letter-spacing: var(--tracking-widest)
├── Text-transform: uppercase
└── Color: var(--color-text-muted) or var(--color-accent)
```

---

## Buttons

### Button

Primary interactive button component.

```
Props:
├── variant: 'primary' | 'secondary' | 'ghost' | 'link'
├── size: 'sm' | 'md' | 'lg'
├── fullWidth: boolean
├── disabled: boolean
├── loading: boolean
└── icon: 'left' | 'right' | 'only'

Dimensions:
├── sm: height 36px, padding 8px 16px
├── md: height 44px, padding 12px 24px (default)
└── lg: height 52px, padding 16px 32px

Primary variant:
├── Background: var(--color-accent)
├── Text: white (#FFFFFF)
├── Border-radius: var(--radius-full)
├── Hover: background darken 8%
├── Active: background darken 12%
└── Shadow: none (default), var(--shadow-glow) on hover

Secondary variant:
├── Background: transparent
├── Text: var(--color-accent)
├── Border: 2px solid var(--color-accent)
├── Hover: background var(--color-accent), text white
└── Active: darken 8%

Ghost variant:
├── Background: transparent
├── Text: var(--color-text-secondary)
├── Hover: background var(--color-linen)
└── Active: background darken

Link variant:
├── Background: transparent
├── Text: var(--color-accent)
├── Padding: 0
├── Hover: text darken, underline
└── Active: text darken more

States:
├── Default: as specified above
├── Hover: specified per variant
├── Active/Pressed: specified per variant
├── Focus: 2px outline var(--color-accent), 2px offset
├── Disabled: opacity 0.5, cursor not-allowed
└── Loading: spinner icon, disabled state

Typography:
├── Font: var(--font-body)
├── Weight: var(--font-semibold)
├── Size: var(--text-sm) (sm) | var(--text-base) (md) | var(--text-lg) (lg)
└── Letter-spacing: var(--tracking-wide)

Transitions:
└── all var(--transition-fast)
```

### Icon Button

Circular button containing only an icon.

```
Props:
├── variant: 'primary' | 'secondary' | 'ghost'
├── size: 'sm' | 'md' | 'lg'
└── label: string (aria-label, required)

Dimensions:
├── sm: 36px × 36px, icon 16px
├── md: 44px × 44px, icon 20px
└── lg: 52px × 52px, icon 24px

Styles:
├── Border-radius: var(--radius-full)
└── Icon color: inherits from variant
```

---

## Cards

### Base Card

Foundational card container.

```
Props:
├── variant: 'elevated' | 'outlined' | 'filled'
├── padding: 'none' | 'sm' | 'md' | 'lg'
├── radius: 'md' | 'lg' | 'xl'
└── interactive: boolean

Elevated variant (default):
├── Background: var(--color-surface)
├── Shadow: var(--shadow-sm)
├── Hover (if interactive): var(--shadow-md), translateY(-2px)
└── Border: none

Outlined variant:
├── Background: transparent
├── Shadow: none
├── Border: var(--border-subtle)
└── Hover (if interactive): border-color var(--color-border-strong)

Filled variant:
├── Background: var(--color-background-alt)
├── Shadow: none
└── Border: none

Padding:
├── none: 0
├── sm: 16px
├── md: 24px (default)
└── lg: 32px

Radius:
├── md: var(--radius-md)
├── lg: var(--radius-lg) (default)
└── xl: var(--radius-xl)

Transitions:
└── box-shadow, transform var(--transition-normal)
```

---

## Form Elements

### Input / Text Field

Text input component with label and validation.

```
Anatomy:
├── Label (optional)
├── Input field
├── Helper text (optional)
└── Error message (optional)

Props:
├── type: 'text' | 'email' | 'password' | 'tel' | 'number' | 'search'
├── size: 'sm' | 'md' | 'lg'
├── state: 'default' | 'focus' | 'error' | 'disabled'
├── required: boolean
└── icon: 'left' | 'right' (optional)

Dimensions:
├── sm: height 36px
├── md: height 44px (default)
└── lg: height 52px

Styles:
├── Background: var(--color-pearl)
├── Border: var(--border-default)
├── Border-radius: var(--radius-md)
├── Padding: 12px 16px
├── Font: var(--font-body)
├── Font-size: var(--text-base)
├── Text color: var(--color-text-primary)
├── Placeholder: var(--color-text-muted)
└── Transition: border-color, box-shadow var(--transition-fast)

States:
├── Focus: border-color var(--color-accent), box-shadow var(--input-focus-ring)
├── Error: border-color var(--color-error)
├── Disabled: opacity 0.6, background var(--color-linen), cursor not-allowed
└── Read-only: background var(--color-linen)

Label:
├── Font-size: var(--text-sm)
├── Font-weight: var(--font-medium)
├── Color: var(--color-text-primary)
├── Margin-bottom: 8px
└── Required indicator: * in var(--color-error)

Helper/Error text:
├── Font-size: var(--text-sm)
├── Margin-top: 4px
├── Helper color: var(--color-text-muted)
└── Error color: var(--color-error)
```

### Textarea

Multi-line text input.

```
Props:
├── rows: number (default: 4)
├── resize: 'none' | 'vertical' | 'both'
└── (inherits Input props)

Styles:
├── Min-height: 100px
├── Padding: 12px 16px
└── Line-height: var(--leading-relaxed)
```

### Select / Dropdown

Selection input component.

```
Anatomy:
├── Label (optional)
├── Trigger button
├── Dropdown menu
├── Options
└── Helper text (optional)

Trigger styles:
├── Same as Input base styles
├── Right icon: chevron down
└── Icon rotation on open: 180deg

Dropdown menu:
├── Background: var(--color-surface)
├── Border: var(--border-subtle)
├── Border-radius: var(--radius-md)
├── Shadow: var(--shadow-lg)
├── Max-height: 280px
├── Overflow: auto
└── Animation: fade + slide down, 200ms

Option:
├── Padding: 12px 16px
├── Background (hover): var(--color-linen)
├── Background (selected): var(--color-background-alt)
├── Checkmark icon (selected): var(--color-accent)
└── Transition: background var(--transition-fast)
```

### Checkbox

Binary selection input.

```
Anatomy:
├── Checkbox box
├── Checkmark icon
└── Label

Dimensions:
├── Box size: 20px × 20px
├── Border-radius: var(--radius-sm)
└── Icon size: 14px

States:
├── Unchecked: border var(--border-default), background transparent
├── Checked: background var(--color-accent), border same, white checkmark
├── Hover: border-color var(--color-accent)
├── Focus: box-shadow var(--input-focus-ring)
└── Disabled: opacity 0.5

Label:
├── Font-size: var(--text-base)
├── Margin-left: 12px
└── Color: var(--color-text-primary)
```

### Radio Button

Single selection from group.

```
Dimensions:
├── Outer circle: 20px × 20px
├── Inner dot: 10px × 10px
└── Border-radius: var(--radius-full)

States:
├── Unselected: border var(--border-default), no inner dot
├── Selected: border var(--color-accent), inner dot var(--color-accent)
├── Hover: border-color var(--color-accent)
└── Disabled: opacity 0.5
```

---

## Hero Section

Full-width hero banner for page headers.

```
Anatomy:
├── Background (gradient or image)
├── Decorative elements (celestial imagery)
├── Overline text (optional)
├── Headline
├── Subheadline / description
├── CTA button(s)
└── Scroll indicator (optional)

Layout:
├── Min-height: 80vh (homepage) / 50vh (inner pages)
├── Content max-width: 800px
├── Text alignment: center
├── Vertical alignment: center

Spacing:
├── Headline margin-bottom: 24px
├── Description margin-bottom: 32px
├── CTA margin-bottom: 48px
└── Section padding: 96px vertical (desktop)

Background:
├── Gradient: var(--gradient-hero) or var(--gradient-mystical)
├── Image overlay: rgba(250, 247, 242, 0.85)
└── Decorative elements: positioned absolute, z-index -1

Typography:
├── Overline: as specified
├── Headline: Display or H1, var(--font-display)
├── Description: Body Large, var(--color-text-secondary)
└── Max-width (text): 600px

Decorative elements:
├── Sun/moon illustration: top center or top right
├── Floral elements: corners or sides
├── Stars/dots: scattered, subtle
└── Opacity: 0.6 - 1.0
```

---

## Service Cards

Cards showcasing individual services.

```
Anatomy:
├── Illustration / Icon
├── Title
├── Description
├── Price (optional)
├── CTA link or button
└── Decorative border (optional)

Layout:
├── Grid: 3 columns (desktop), 2 (tablet), 1 (mobile)
├── Gap: 32px
└── Card alignment: stretch height

Dimensions:
├── Min-height: 320px
├── Padding: 32px
├── Border-radius: var(--radius-xl)
└── Illustration size: 80px - 120px

Styles:
├── Background: var(--color-surface) or var(--gradient-card)
├── Shadow: var(--shadow-sm)
├── Hover: var(--shadow-md), translateY(-4px)
├── Border (decorative): 1px dashed var(--color-linen)
└── Transition: var(--transition-normal)

Illustration:
├── Style: line art, warm colors
├── Position: top center
├── Margin-bottom: 24px
└── Colors: var(--color-terracotta), var(--color-dusty-rose)

Typography:
├── Title: H3, var(--font-heading), center aligned
├── Description: Body, var(--color-text-secondary), center
├── Price: H4 or Body Large, var(--color-accent)
└── CTA: Link style or small button

Hover effects:
├── Card lift: translateY(-4px)
├── Shadow increase: var(--shadow-md)
├── Illustration: subtle scale(1.05)
└── Duration: var(--duration-normal)
```

---

## Testimonials

Customer testimonial display component.

```
Variants:
├── Card (single testimonial)
├── Carousel (multiple, sliding)
└── Grid (multiple, static)

Card anatomy:
├── Quote icon
├── Testimonial text
├── Author name
├── Author role / location
└── Author avatar (optional)

Styles:
├── Background: var(--color-surface) or transparent
├── Padding: 32px
├── Border-radius: var(--radius-lg)
├── Text alignment: center or left
└── Quote icon: var(--color-accent), opacity 0.3, size 48px

Typography:
├── Quote: Body Large or H4, italic optional
├── Quote color: var(--color-text-primary)
├── Author name: Body, var(--font-semibold)
├── Author role: Body Small, var(--color-text-muted)
└── Line-height: var(--leading-loose)

Carousel (if used):
├── Dots navigation: bottom center
├── Arrow navigation: sides
├── Auto-play: optional, 5s interval
├── Transition: slide or fade, 500ms
└── Dot style: 8px circles, var(--color-accent) active
```

---

## Decorative Elements

### Divider

Horizontal separator between sections.

```
Variants:
├── Line (simple)
├── Ornamental (with icon/decoration)
└── Gradient

Line:
├── Height: 1px
├── Color: var(--color-border)
├── Width: 100% or centered fixed width
└── Margin: 48px 0

Ornamental:
├── Line with centered icon (sun, flower, star)
├── Icon size: 24px
├── Icon color: var(--color-accent)
└── Line breaks around icon: 16px gap
```

### Celestial Illustrations

Decorative sun, moon, and star elements.

```
Sun element:
├── Circle with radiating lines
├── Colors: var(--color-golden-hour), var(--color-terracotta)
├── Typical sizes: 80px, 120px, 200px
└── Often includes face illustration

Moon element:
├── Crescent or full moon
├── Colors: var(--color-cream), var(--color-linen)
├── Typical sizes: 60px, 100px, 160px
└── Sometimes with stars around

Stars:
├── Various sizes: 4px, 8px, 12px
├── Shapes: dots, 4-point, 6-point
├── Colors: var(--color-golden-hour), var(--color-terracotta)
└── Often scattered in groups

Usage:
├── Hero backgrounds
├── Section accents
├── Card decorations
└── Loading states
```

### Botanical Elements

Floral and plant decorations.

```
Elements:
├── Single flowers (lotus, daisy, wildflowers)
├── Branches with leaves
├── Wreaths (circular arrangements)
└── Corner flourishes

Style:
├── Line art with optional color fill
├── Stroke: 1-1.5px
├── Colors: var(--color-dusty-rose), var(--color-sage), var(--color-bronze)
└── Often paired with hands imagery

Positioning:
├── Corners of cards/sections
├── Behind or around text
├── As bullet point replacements
└── Frame elements around CTAs
```

---

## Footer

Site footer with navigation and information.

```
Anatomy:
├── Logo
├── Navigation columns
├── Newsletter signup (optional)
├── Social links
├── Copyright / legal
└── Decorative element (optional)

Layout:
├── Full-width background
├── Content in container
├── 3-4 columns (desktop), stacked (mobile)
├── Padding: 64px top, 32px bottom
└── Gap between columns: 48px

Styles:
├── Background: var(--color-background-alt)
├── Border-top: 1px solid var(--color-border)
└── Text color: var(--color-text-secondary)

Navigation column:
├── Heading: Overline style
├── Links: Body, stacked
├── Link spacing: 12px vertical
├── Link hover: var(--color-text-primary)
└── Heading margin-bottom: 16px

Newsletter section:
├── Heading: H4 or H5
├── Description: Body Small
├── Input + Button: inline or stacked
└── Max-width: 400px

Social links:
├── Icon buttons: Ghost variant
├── Size: 24px icons
├── Gap: 16px
└── Colors: var(--color-text-muted), hover var(--color-accent)

Copyright:
├── Font-size: var(--text-sm)
├── Color: var(--color-text-muted)
├── Padding-top: 32px
├── Border-top: 1px solid var(--color-border) (optional)
└── Text: © 2024 Sanastro. All rights reserved.
```

---

## Implementation Notes

### Framework Recommendations

The design system is framework-agnostic but optimized for:

1. **Astro** - Static site generation with component islands
2. **React/Next.js** - For interactive applications
3. **Vue/Nuxt** - Alternative SPA framework
4. **Vanilla HTML/CSS** - For simple implementations

### CSS Architecture

Recommended approaches:
- **CSS Custom Properties** - Use tokens.css directly
- **Tailwind CSS** - Extend config with token values
- **CSS Modules** - Component-scoped styles
- **Styled Components** - Theme provider with tokens

### Font Loading

```html
<!-- Preconnect for performance -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Font imports -->
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=Italiana&family=Nunito+Sans:wght@300;400;600&display=swap" rel="stylesheet">
```

### Icon Library

Recommended: **Lucide Icons** or **Heroicons** for UI icons, custom SVGs for mystical/decorative elements.

---

## Changelog

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2024-XX-XX | Initial design system release |
