# HS Timber Group — Technical Skills & Implementation Patterns

## Technology Stack

| Layer      | Technology                | Notes                          |
|------------|---------------------------|--------------------------------|
| Structure  | HTML5 semantic elements   | No framework, single `index.html` |
| Styling    | Vanilla CSS               | CSS custom properties, Grid, Flexbox |
| Logic      | Vanilla JavaScript (ES6+) | Modular files, no bundler      |
| Fonts      | Google Fonts CDN          | Bebas Neue + Inter             |
| Images     | AI-generated via `generate_image` | WebP/JPG format         |
| Server     | Python `http.server` or VS Code Live Server | Dev only |

---

## CSS Architecture

### File Organization
Split by section for maintainability. Load order matters:
```html
<!-- 1. Foundation -->
<link rel="stylesheet" href="styles/reset.css">
<link rel="stylesheet" href="styles/variables.css">
<link rel="stylesheet" href="styles/global.css">

<!-- 2. Sections (order doesn't matter) -->
<link rel="stylesheet" href="styles/nav.css">
<link rel="stylesheet" href="styles/hero.css">
<link rel="stylesheet" href="styles/about.css">
<link rel="stylesheet" href="styles/expertise.css">
<link rel="stylesheet" href="styles/products.css">
<link rel="stylesheet" href="styles/team.css">
<link rel="stylesheet" href="styles/locations.css">
<link rel="stylesheet" href="styles/faq.css">
<link rel="stylesheet" href="styles/footer.css">
```

### CSS Reset
Use a minimal modern reset:
- `*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }`
- `img { display: block; max-width: 100%; }`
- `button { font: inherit; cursor: pointer; border: none; background: none; }`

### Responsive Strategy
- **Mobile-first is NOT used** — this is a desktop-first design (brutalist layouts are defined at desktop, then simplified for mobile)
- Breakpoints via `@media (max-width: ...)`:
  - `1023px` — tablet adjustments
  - `767px` — mobile overrides
- Fluid typography via `clamp()` — no media queries needed for font sizes

---

## JavaScript Patterns

### Module Loading
```html
<script src="js/nav.js" defer></script>
<script src="js/carousel.js" defer></script>
<script src="js/accordion.js" defer></script>
<script src="js/form.js" defer></script>
```
All scripts use `defer` — they execute after HTML is parsed.

### `nav.js` — Mobile Navigation
```
Purpose: Toggle mobile menu overlay
Pattern:
  - Click hamburger → add `.nav-open` class to body
  - Click close / click nav link → remove `.nav-open`
  - CSS handles visibility via `.nav-open .nav-overlay { display: flex; }`
```

### `carousel.js` — Carousel Engine
```
Purpose: Shared carousel logic for Expertise and Product sections
Pattern:
  - Each carousel is initialized by a data attribute: `data-carousel`
  - Track movement via CSS `transform: translateX()`
  - State: currentIndex, totalSlides, visibleSlides
  - Prev/Next buttons update currentIndex and re-calculate translateX
  - Slide counter text updated on each navigation
  - Boundary clamping: cannot go below 0 or above max

Expertise carousel:
  - visibleSlides: always 1 (full slide swap)
  - translateX = -(currentIndex * 100%)

Product carousel:
  - visibleSlides: 3 (desktop), 2 (tablet), 1 (mobile)
  - Calculate based on card width + gap
  - Recalculate on window resize
  - translateX = -(currentIndex * (cardWidth + gap))
```

### `accordion.js` — FAQ Accordion
```
Purpose: Toggle FAQ answer panels, one open at a time
Pattern:
  - Click question row → toggle `.active` class on that item
  - Remove `.active` from all sibling items (auto-close)
  - CSS handles expansion:
    .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.3s; }
    .faq-item.active .faq-answer { max-height: 500px; }
  - Chevron rotation via CSS:
    .faq-item.active .faq-chevron { transform: rotate(180deg); }
```

### `form.js` — Contact Form Handler
```
Purpose: Frontend-only form submission
Pattern:
  - Listen for form submit event
  - e.preventDefault()
  - Validate required fields (basic: check non-empty)
  - On valid: hide form, show "Thank you for your message. We'll get back to you soon."
  - On invalid: add `.error` class to empty fields (red border-bottom)
```

---

## HTML Semantic Structure

```html
<body>
  <header>         <!-- Nav bar -->
  <main>
    <section id="hero">
    <section id="about">
    <section id="expertise">
    <section id="products">
    <section id="team">
    <section id="locations">
    <section id="faq">
    <section id="careers">
  </main>
  <footer>          <!-- Contact grid + giant text -->
</body>
```

- Every section gets a unique `id` for anchor navigation
- Nav links: `<a href="#about">`, `<a href="#products">`, etc.
- `scroll-behavior: smooth` on `html` element

---

## SVG Icon Approach

Inline SVGs directly in HTML — no icon font, no sprite sheet.

**Template for a chevron:**
```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="2" stroke-linecap="square">
  <polyline points="6 9 12 15 18 9"/>
</svg>
```

- `stroke-linecap="square"` — brutalist, no rounded caps
- `fill="none"` — stroke-only icons
- `currentColor` — inherits from parent for easy hover color changes

**Abstract country icons** use simple filled geometric shapes:
- Romania: Tall rectangle
- Germany: Wide rectangle
- Finland: Triangle
- Austria: Diamond (rotated square)
- Czech Republic: Hexagon
- Ukraine: Parallelogram

---

## Performance Considerations

- **Images**: Use `loading="lazy"` on all images below the fold
- **Hero image**: No lazy load (above fold), use `fetchpriority="high"`
- **Fonts**: `display=swap` in Google Fonts URL to prevent FOIT
- **CSS**: No unused styles — each file targets only its section
- **JS**: All files are small (~50–100 lines each), no need for bundling
