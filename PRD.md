# HS Timber Group — Product Requirements Document

## Overview

A single-page, fully responsive, brutalist landing page for **HS Timber Group**, a global timber manufacturing company. Built with vanilla HTML, CSS, and JavaScript — no frameworks.

---

## Sections & Requirements

### 1. Navigation Bar
- Sticky top nav, white background, `64px` height
- **Left**: Abstract geometric logo (SVG)
- **Center**: In-page anchor links — `COMPANY`, `RESPONSIBILITY`, `PURCHASE`, `CAREER`, `NEWS`
- **Right**: `CONTACT US` anchor link
- **Mobile**: Hamburger icon toggles a full-screen dark overlay with vertically stacked links

### 2. Hero Section
- Full viewport height (`100vh`), background image with dark gradient overlay
- Bottom-left: Massive heading — `PERFECTION IN TIMBER.`
- Bottom-left: White bordered box — downward chevron + `SCROLL DOWN` (static, no animation)
- Bottom-right: Solid orange CTA box — `CONTACT US` + arrow icon
- **Mobile**: Heading scales down. Scroll indicator hidden. CTA becomes full-width bar

### 3. About & Stats
- Dark background
- Full-width heading: `WE ARE HS TIMBER GROUP, A LEADING WOOD PROCESSING COMPANY SERVING CUSTOMERS IN 80 COUNTRIES.`
- 3-column stat grid (stacks to 1 column on mobile):

| Number  | Label                    |
|---------|--------------------------|
| `07`    | Global Production Sites  |
| `80`    | Markets Worldwide        |
| `2,700` | Employees                |

- Stat cards: Light gray bg, hover → orange bg + white text

### 4. Expertise Section — Carousel (4 slides)
- 50/50 split layout (image left, content right)
- Right panel: Heading `END-TO-END EXPERTISE`, numbered feature list (1–3), slide counter `X / 4`, prev/next arrows
- **Mobile**: Stacks vertically (image top, content below)
- No autoplay, no swipe — prev/next only

| Slide | Theme                  | Features                                           |
|-------|------------------------|----------------------------------------------------|
| 1     | Raw Material Sourcing  | Supply chain control, certified forests, traceability |
| 2     | Sawmill Processing     | Precision cutting, automated grading, quality control |
| 3     | Product Manufacturing  | Kiln drying, planing, custom profiles               |
| 4     | Global Distribution    | 80-country logistics, JIT delivery, packaging       |

### 5. Product Catalog — Carousel (10 products)
- Dark background, heading `PRODUCT CATALOG`
- Circular orange nav arrows (exception to no-rounded-corners rule)
- Shows 3 cards on desktop, 2 on tablet, 1 on mobile
- Each card: Image, product name, dimensions, category tag

| #  | Product                | Dimensions   |
|----|------------------------|--------------|
| 1  | Sawn Timber            | 50×100mm     |
| 2  | Construction Laths     | 30×50mm      |
| 3  | Structural Beams       | 100×200mm    |
| 4  | Planed Boards          | 25×150mm     |
| 5  | Decking Planks         | 28×145mm     |
| 6  | Cladding Profiles      | 19×125mm     |
| 7  | Roof Battens           | 38×50mm      |
| 8  | Pallet Boards          | 22×100mm     |
| 9  | Finger-Jointed Timber  | 45×95mm      |
| 10 | Glulam Beams           | 120×240mm    |

### 6. Team / Leadership
- Light gray background
- Static oversized watermark text `HS TIMBER GROUP` in background (no animation)
- Staggered grid of portrait photos (4-col desktop, 3-col tablet, 2-col mobile)
- Default: Grayscale photos. Hover: Color + orange overlay showing name, title, LinkedIn icon
- **Mobile**: Always show name/title below image, tap to toggle overlay

| #  | Name (placeholder) | Role               |
|----|--------------------|--------------------|
| 1  | Placeholder        | CEO                |
| 2  | Placeholder        | COO                |
| 3  | Placeholder        | CFO                |
| 4  | Placeholder        | VP Production      |
| 5  | Placeholder        | VP Sales           |
| 6  | Placeholder        | VP Sustainability  |

### 7. Global Locations
- Light gray background, heading `PRODUCTION SITES`
- Grid: 3-col desktop, 2-col tablet, 1-col mobile
- Each card: Abstract geometric icon (unique per country), country name, facility details
- Hover: Card turns orange, text/icon turns white

| Country        | Facility                    |
|----------------|-----------------------------|
| Romania        | Sawmill, 500K m³/year       |
| Germany        | Distribution Hub            |
| Finland        | Forestry Operations         |
| Austria        | Headquarters & Processing   |
| Czech Republic | Panel Production            |
| Ukraine        | Raw Material Sourcing       |

### 8. Supply Chain Q&A
- Dark background, heading `SUPPLY CHAIN Q&A`
- Accordion (one open at a time), bold uppercase questions + chevron
- 5 FAQs:
  1. Where does HS Timber Group source its raw materials?
  2. How do you ensure sustainable forestry practices?
  3. What certifications do your products carry?
  4. What is your average delivery timeline?
  5. Do you offer custom dimensions and specifications?

### 9. CTA & Footer
- **Careers CTA**: Dark image banner, `LOOKING FOR A CAREER?`, orange `EXPLORE CAREERS` button
- **Footer Top** (2-column, stacks on mobile):
  - Left: Contact info, phone `+43 1 585 68 62-0`, social icons (LinkedIn, Facebook, Instagram)
  - Right: Contact form (First Name, Last Name, Email, Subject, Message) + orange `SUBMIT` button. Frontend only — shows "Thank you" on submit
- **Footer Bottom**: Giant `HOLZINDUSTRIE SCHWEIGHOFER` spanning full width, subtle dark gray. Copyright line below

---

## Interaction Summary

| Element              | Desktop          | Mobile              |
|----------------------|------------------|----------------------|
| Nav links            | Hover → orange   | Tap in overlay       |
| Stat cards           | Hover → orange   | Hover → orange       |
| Expertise carousel   | Prev/next arrows | Prev/next arrows     |
| Product carousel     | Prev/next arrows | Prev/next arrows     |
| Team photos          | Hover → overlay  | Tap → toggle overlay |
| Location cards       | Hover → orange   | Hover → orange       |
| FAQ accordion        | Click → expand   | Click → expand       |
| Contact form         | Submit → message | Submit → message     |

---

## File Structure

```
TestLP/
├── index.html
├── styles/
│   ├── reset.css
│   ├── variables.css
│   ├── global.css
│   ├── nav.css
│   ├── hero.css
│   ├── about.css
│   ├── expertise.css
│   ├── products.css
│   ├── team.css
│   ├── locations.css
│   ├── faq.css
│   └── footer.css
├── js/
│   ├── nav.js
│   ├── carousel.js
│   ├── accordion.js
│   └── form.js
└── assets/
    └── images/
```
