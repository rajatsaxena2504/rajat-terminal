# rajat.terminal

Personal website built with Astro, featuring blogs, projects, books, and more.

## Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Animations**: Framer Motion + CSS
- **CMS**: [Decap CMS](https://decapcms.org)
- **Hosting**: GitHub Pages

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
rajat-terminal/
├── public/
│   ├── admin/          # Decap CMS
│   └── favicon.svg
├── src/
│   ├── components/     # Reusable components
│   ├── content/        # MDX content (blogs, books, projects)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Route pages
│   └── styles/         # Global styles
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Content Management

### Local Development
Write content directly in MDX files under `src/content/`.

### Decap CMS
Access the admin panel at `/admin` to manage content through a GUI.

## Deployment

Push to `main` branch to trigger automatic deployment to GitHub Pages.

## Customization

1. Update `astro.config.mjs` with your site URL and base path
2. Update `public/admin/config.yml` with your GitHub repo details
3. Customize colors in `tailwind.config.mjs`
4. Update social links in `src/components/Footer.astro`

## Version Roadmap

- **V1**: Current - Modern dark theme with animations
- **V2**: 3D elements with Three.js
- **V3**: Terminal-based UI redesign
