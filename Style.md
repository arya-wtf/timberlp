# HS Timber Group — Style Guide

## Design Philosophy

**Brutalist industrial aesthetic.** Every element communicates raw strength, precision, and manufacturing confidence. No decoration for decoration's sake — every visual choice is functional and bold.

**Key principles:**
- Sharp edges everywhere — `border-radius: 0` (sole exception: circular product carousel arrows)
- Heavy `2px+` borders
- Massive, screen-dominating typography for headings
- High-contrast color pairs only
- Strict grid alignment — nothing floats freely
- Generous whitespace between sections, tight spacing within components

---

## Color Palette

```css
:root {
  /* Backgrounds */
  --bg-dark:       #111111;
  --bg-light:      #F4F4F4;
  --bg-white:      #FFFFFF;

  /* Accent */
  --accent:        #F38B00;
  --accent-hover:  #D47A00;

  /* Text */
  --text-light:    #FFFFFF;
  --text-dark:     #111111;
  --text-muted:    #888888;
  --text-subtle:   #666666;

  /* Borders */
  --border-dark:   #333333;
  --border-light:  #CCCCCC;

  /* Overlays */
  --overlay-dark:  rgba(0, 0, 0, 0.5);
  --overlay-accent: rgba(243, 139, 0, 0.85);
}
```

### Usage Rules
| Context                   | Background    | Text           | Border          |
|---------------------------|---------------|----------------|-----------------|
| Dark sections             | `--bg-dark`   | `--text-light` | `--border-dark` |
| Light sections            | `--bg-light`  | `--text-dark`  | `--border-light`|
| Cards on dark bg          | `--bg-light`  | `--text-dark`  | none            |
| Cards on light bg         | `--bg-white`  | `--text-dark`  | none            |
| Hover / active states     | `--accent`    | `--text-light` | `--accent`      |
| CTAs / buttons            | `--accent`    | `--text-light` | none            |
| Muted/secondary text      | —             | `--text-muted` | —               |

---

## Typography

### Font Stack
```css
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600&display=swap');

:root {
  --font-heading: 'Bebas Neue', 'Impact', 'Arial Narrow', sans-serif;
  --font-body:    'Inter', 'Helvetica Neue', Arial, sans-serif;
}
```

### Scale

| Role               | Font           | Size                             | Weight | Transform  | Tracking     |
|--------------------|----------------|----------------------------------|--------|------------|--------------|
| Hero heading       | `--font-heading` | `clamp(3rem, 10vw, 8rem)`      | 400    | uppercase  | normal       |
| Section heading    | `--font-heading` | `clamp(2rem, 5vw, 3.5rem)`     | 400    | uppercase  | normal       |
| Stat numbers       | `--font-heading` | `clamp(3rem, 6vw, 5rem)`       | 400    | —          | normal       |
| Slide counter      | `--font-heading` | `clamp(2rem, 4vw, 4rem)`       | 400    | —          | normal       |
| Giant footer text  | `--font-heading` | `clamp(3rem, 12vw, 10rem)`     | 400    | uppercase  | normal       |
| Nav links          | `--font-body`    | `13px`                          | 600    | uppercase  | `1px`        |
| Section label      | `--font-body`    | `12px`                          | 600    | uppercase  | `2px`        |
| Body text          | `--font-body`    | `1rem` (16px)                   | 400    | normal     | normal       |
| Featured body      | `--font-body`    | `1.125rem` (18px)               | 400    | normal     | normal       |
| Small/technical    | `--font-body`    | `13px`                          | 400    | normal/upper | `0.5px`   |
| Tiny (copyright)   | `--font-body`    | `12px`                          | 400    | normal     | normal       |

### Rules
- Headings are always **uppercase** with `Bebas Neue`
- Body text is always **sentence case** with `Inter`
- Labels and tags use uppercase `Inter 600` with wide letter-spacing
- Never use italic — brutalism rejects ornamentation
- Line height: headings `1.0–1.1`, body `1.5–1.6`

---

## Layout & Spacing

### Container
```css
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 48px;
}

@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
}
```

### Section Spacing
```css
:root {
  --section-padding-desktop: 80px 0;
  --section-padding-mobile:  48px 0;
  --grid-gap-desktop: 24px;
  --grid-gap-mobile:  16px;
}
```

### Grid Patterns
| Pattern        | Desktop          | Tablet            | Mobile        |
|----------------|------------------|-------------------|---------------|
| Stats          | 3 equal columns  | 3 equal columns   | 1 column      |
| Expertise      | 50/50 split      | 50/50 split       | Stacked       |
| Products       | 3 visible cards  | 2 visible cards   | 1 card        |
| Team           | 4 columns        | 3 columns         | 2 columns     |
| Locations      | 3 columns        | 2 columns         | 1 column      |
| Footer top     | 2 columns        | 2 columns         | Stacked       |

---

## Borders & Dividers

```css
/* Structural borders */
--border-width: 2px;

/* Decorative dividers */
--divider-width: 1px;
```

| Usage                       | Style                                  |
|-----------------------------|----------------------------------------|
| Nav bottom edge             | `2px solid var(--border-light)`         |
| Stat card gaps              | `2px` gap (background bleed-through)   |
| FAQ separators              | `1px solid var(--border-dark)`          |
| Feature list dividers       | `1px solid var(--border-light)`         |
| Input underlines            | `2px solid var(--border-dark)`          |
| Carousel arrow buttons      | `2px solid` (inherits text color)      |
| Location card gaps          | `2px` gap                              |
| Footer bottom border-top    | `1px solid var(--border-dark)`          |

---

## Interactive States

All transitions use `transition: 0.2s ease`.

### Hover Matrix

| Element            | Default                          | Hover                              |
|--------------------|----------------------------------|------------------------------------|
| Nav links          | `color: --text-dark`             | `color: --accent`                  |
| Stat cards         | `bg: --bg-light`                 | `bg: --accent; color: --text-light`|
| Carousel arrows    | `border: text-color; bg: transparent` | `bg: --accent; border: --accent; arrow: white` |
| Product cards      | `border: --border-dark`          | `border: --accent`                 |
| Team photos        | `filter: grayscale(100%)`        | `filter: none; overlay: --overlay-accent` |
| Location cards     | `bg: --bg-white`                 | `bg: --accent; color/icon: white`  |
| CTA buttons        | `bg: --accent`                   | `bg: --accent-hover`               |
| Social icons       | `color: --text-light`            | `color: --accent`                  |
| Form inputs        | `border-bottom: --border-dark`   | —                                  |
| Form inputs:focus  | —                                | `border-bottom: --accent`          |

---

## Iconography

- All icons are inline SVGs for crisp rendering and color control
- Stroke-based, `stroke-width: 2`, no fill
- Size: `24px` default, `16px` for small contexts
- Color: Inherits from `currentColor`

| Icon          | Usage                                      |
|---------------|--------------------------------------------|
| Chevron down  | Scroll indicator, FAQ accordion toggle     |
| Chevron left  | Carousel prev                              |
| Chevron right | Carousel next, CTA arrows                 |
| Arrow right   | Contact CTA, button arrows                 |
| Hamburger     | Mobile nav toggle                          |
| Close (X)     | Mobile nav close                           |
| LinkedIn      | Team member hover, footer social           |
| Facebook      | Footer social                              |
| Instagram     | Footer social                              |

---

## Image Treatment

| Context            | Filter                    | Aspect Ratio | Object Fit |
|--------------------|---------------------------|--------------|------------|
| Hero background    | Dark gradient overlay     | Cover        | `cover`    |
| Expertise images   | None                      | 1:1 (square) | `cover`    |
| Product images     | None                      | 1:1 (square) | `cover`    |
| Team portraits     | `grayscale(100%)` default | 3:4          | `cover`    |
| Careers CTA bg     | Dark gradient overlay     | Cover        | `cover`    |
