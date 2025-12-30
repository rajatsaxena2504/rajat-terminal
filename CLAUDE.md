# Claude Code Session Notes

## Project: rajat.terminal - Personal Website

**Tech Stack:** Astro, TypeScript, CSS (no framework)
**Dev Server:** `npm run dev` → http://localhost:4321/rajat-terminal/
**Deploy:** GitHub Pages with base path `/rajat-terminal/`

---

## Current Status (Dec 31, 2024)

### Completed Work

#### 1. Hero Section Redesign
- Bio-focused layout with personal introduction
- Clean typography with Satoshi/Inter fonts
- Subtle animations on load

#### 2. Blog Page (`/blogs/`)
- Year-grouped post listing
- **Hover Effect (Maxime Heckel inspired):**
  - Animated corner brackets `┌` `┘` frame the title
  - Arrow slides in from right
  - Date turns accent blue
  - Subtle blue background tint
  - Smooth cubic-bezier transitions

#### 3. Papers Page (`/papers/`)
- Same hover effect as blog
- Additional: tags highlight blue on hover
- TLDR text brightens on hover
- Month-grouped listing

---

## Design System

### Colors (CSS Variables)
```css
--accent: #58a6ff (blue)
--accent-light: lighter blue variant
--foreground: main text
--foreground-secondary: secondary text
--foreground-muted: muted/date text
--background: dark bg
--background-secondary: card bg
--border: subtle borders
```

### Fonts
- **Headings:** Satoshi, Inter (sans-serif)
- **Body:** Inter
- **Mono:** JetBrains Mono, Fira Code

### Hover Effect Pattern
Used on both blog and papers pages:
```css
/* Corner brackets on title */
.post-title-wrapper::before - top-left corner
.post-title-wrapper::after - bottom-right corner

/* Arrow indicator */
.post-arrow - slides in from right

/* Transitions */
cubic-bezier(0.16, 1, 0.3, 1) - smooth spring-like easing
```

---

## File Structure (Key Files)

```
src/
├── layouts/
│   └── BaseLayout.astro      # Main layout with nav/footer
├── pages/
│   ├── index.astro           # Home page with hero
│   ├── blogs/
│   │   └── index.astro       # Blog listing (hover effect)
│   └── papers/
│       └── index.astro       # Papers listing (hover effect)
├── content/
│   ├── blogs/                # Blog posts (.md)
│   └── papers/               # Paper notes (.md)
└── styles/
    └── global.css            # Global styles & variables
```

---

## Inspiration

- **Maxime Heckel's blog:** https://blog.maximeheckel.com/
  - Article list hover effect with corner brackets
  - Clean dark theme
  - Elegant typography

---

## Navigation Structure

```
Blog | Projects | Books | List 50 | Learn (dropdown)
                                      ├── Papers
                                      ├── System Design
                                      └── AI Guide
```

---

## Pending / Ideas

- [ ] Projects page styling
- [ ] Books page
- [ ] Newsletter section
- [ ] Search functionality (Cmd+K style?)
- [ ] Mobile responsiveness fine-tuning
- [ ] Add more blog posts / paper notes
- [ ] Consider light mode toggle

---

## Git Status

All changes committed and pushed to main. Latest commits:
- `8ca65e6` - Move List 50 to main nav, remove More dropdown
- `2ff00ce` - Add hover effects to blog and papers pages

---

## Quick Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Notes for Next Session

1. The hover effect uses `::before` and `::after` pseudo-elements for corners
2. Arrow is an inline SVG for easy color transitions
3. Mobile view hides corners and arrow (simpler touch experience)
4. All transitions use same easing for consistency
5. Base path is `/rajat-terminal/` - all internal links need this prefix
