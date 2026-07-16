# PANESSO WEBSITE - Complete Setup & Build Guide

## Project Overview

This is a production-ready Next.js 15 website for PANESSO MERCADO ABOGADOS law firm built with:
- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first styling
- **Google Fonts** - Alexandria & Nunito
- **Responsive Design** - Mobile, Tablet, Desktop

## File Structure

```
panesso-website/
├── public/                          # Static assets
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout with font setup
│   │   ├── page.tsx                # Main page (7 sections)
│   │   └── globals.css             # Global styles & animations
│   ├── components/
│   │   ├── Button.tsx              # CTA button (3 variants)
│   │   ├── Card.tsx                # Generic card component
│   │   ├── Container.tsx           # Layout wrapper with max-width
│   │   └── sections/
│   │       ├── Navbar.tsx          # Sticky nav + mobile menu
│   │       ├── HeroSection.tsx     # Hero with parallax
│   │       ├── PartnersSection.tsx # 6 partner cards grid
│   │       ├── PracticeAreasSection.tsx # 10 areas with tabs
│   │       ├── TestimonialsSection.tsx  # 9 testimonial grid
│   │       ├── CTASection.tsx      # Call-to-action
│   │       └── Footer.tsx          # Footer with 3 columns
│   └── lib/
│       ├── content.ts              # ALL page content (centralized)
│       └── theme.ts                # Color & typography tokens
├── package.json                     # Dependencies & scripts
├── tsconfig.json                    # TypeScript config
├── tailwind.config.ts               # Tailwind configuration
├── postcss.config.js                # CSS processing
├── next.config.js                   # Next.js config
└── .gitignore                       # Git exclusions
```

## Installation & Setup

### Step 1: Install Dependencies
```bash
npm install
```

This installs:
- `next@15.0.0` - Framework
- `react@19.0.0` & `react-dom@19.0.0` - Core libraries
- `typescript@5.3.3` - Type checking
- `tailwindcss@4.0.0` - Styling
- `postcss@8.4.32` & `autoprefixer@10.4.16` - CSS processing

### Step 2: Verify Installation
```bash
npm run dev
# Server runs at http://localhost:3000
```

### Step 3: Build for Production
```bash
npm run build
# Creates .next/ directory with optimized output
```

## Color Scheme

All colors are defined in `src/app/globals.css` as CSS variables:

```css
--color-black: #000000       /* Main background */
--color-white: #FFFFFF      /* Main text/foreground */
--color-dark-gray: #404040  /* Accents, hover states */
--color-medium-gray: #808080 /* Secondary accents */
--color-light-gray: #C0C0C0 /* Subtle accents */
```

Also available as Tailwind classes:
- `bg-panesso-black`, `text-panesso-black`
- `bg-panesso-white`, `text-panesso-white`
- `bg-panesso-dark-gray`, `text-panesso-dark-gray`
- `bg-panesso-medium-gray`, `text-panesso-medium-gray`
- `bg-panesso-light-gray`, `text-panesso-light-gray`

## Typography

### Fonts
- **Headings** (h1-h6): Alexandria (100, 300, 400, 500, 700, 900)
- **Body Text**: Nunito (200, 300, 400, 500, 600, 700, 800, 900)

Both imported via Google Fonts with `display: 'swap'` in `src/app/layout.tsx`.

### Responsive Sizes
```
h1: clamp(1.875rem, 5vw, 3.5rem)   /* ~30px → 56px */
h2: clamp(1.5rem, 4vw, 2.5rem)     /* ~24px → 40px */
h3: clamp(1.25rem, 3vw, 1.875rem)  /* ~20px → 30px */
h4: 1.5rem (24px)
body: 0.95rem - 1rem (15-16px)
```

## 7 Main Sections

### 1. Navbar (Sticky)
- **Location**: `src/components/sections/Navbar.tsx`
- **Features**:
  - Logo "PANESSO"
  - 5 navigation links (Socios, Áreas, Recursos, Academia, Contacto)
  - "Plataforma" CTA button
  - Mobile hamburger menu (active below 768px)
  - Sticky on scroll (background changes after 50px scroll)
  - z-index: 50

### 2. Hero Section
- **Location**: `src/components/sections/HeroSection.tsx`
- **Features**:
  - Full viewport height (h-screen)
  - Parallax background effect (moves on scroll)
  - Large heading + subtitle
  - "Contáctenos" button
  - Scroll down indicator (animated bounce)
  - pt-20 for navbar offset

### 3. Partners Section
- **Location**: `src/components/sections/PartnersSection.tsx`
- **Features**:
  - White background section
  - "Nuestros Socios" heading
  - 3-column grid (1 mobile, 2 tablet, 3 desktop)
  - 6 partner cards (from content.ts):
    - Image placeholder (400x300)
    - Name (bold)
    - Title (subtitle)
    - Specialties (description)
  - Hover effect (scale 1.05, shadow)
  - "Ver todos los socios" link

### 4. Practice Areas Section
- **Location**: `src/components/sections/PracticeAreasSection.tsx`
- **Features**:
  - Black background
  - "Áreas de Práctica" heading
  - 10 tabs/buttons grid (2 mobile, 5 desktop)
  - Click to switch active area
  - Active content card with:
    - Emoji icon
    - Title
    - Description
    - "Ver área completa" link
  - Fade transition on switch

### 5. Testimonials Section
- **Location**: `src/components/sections/TestimonialsSection.tsx`
- **Features**:
  - White background
  - "Reconocimientos" heading
  - 3x3 grid of testimonial cards
  - Each card:
    - Quote text (italic)
    - Source (Legal500/Chambers & Partners)
    - Client name
    - Left border accent
  - Hover effect (scale, shadow)

### 6. CTA Section
- **Location**: `src/components/sections/CTASection.tsx`
- **Features**:
  - Black background
  - Large heading
  - Description text
  - "Contáctenos" outlined button
  - Centered, prominent spacing

### 7. Footer
- **Location**: `src/components/sections/Footer.tsx`
- **Features**:
  - Dark background (black with border-top)
  - 3 columns:
    1. Company logo + tagline
    2. Quick links (Socios, Áreas, Recursos, Academia)
    3. Contact info (address, phone, email)
  - Social media links
  - Copyright notice
  - Responsive: 1 column mobile, 3 columns desktop

## Content Management

**ALL page content is in `src/lib/content.ts`**

This single file contains:
```typescript
siteContent = {
  company: { name, tagline },
  navigation: [...],
  hero: { heading, subtitle, cta },
  partners: [{ name, title, specialties, image }],
  practiceAreas: [{ title, description, icon }],
  testimonials: [{ quote, source, author }],
  cta: { heading, description, buttonText },
  footer: { links, contact info, social },
  resources: { articles, webinars }
}
```

**To customize:**
1. Edit `src/lib/content.ts`
2. Update text, add/remove items, change links
3. Sections automatically reflect changes
4. No code changes needed in components

## Responsive Breakpoints

Tailwind breakpoints:
- **sm**: 640px
- **md**: 768px (tablet)
- **lg**: 1024px
- **xl**: 1280px

Custom design targets:
- **Mobile**: 390px (iPhone)
- **Tablet**: 768px (iPad)
- **Desktop**: 1440px (large screens)

## Build Process

### Development
```bash
npm run dev
# Hot reload at http://localhost:3000
# Recompiles on file changes
```

### Production Build
```bash
npm run build
# Creates optimized .next/ directory
# No errors should appear
# Output:
#   - Route (SG Static Generation)
#   - ○ (ISR Incremental Static Regeneration)
#   - λ (Server Function)
```

### Run Production Server
```bash
npm start
# Serves from .next/ directory
# http://localhost:3000
```

## TypeScript Verification

```bash
npx tsc --noEmit
# Checks for type errors (no compilation)
# Should complete without errors
```

## Project Features

### Animations
- `fade-in`: 0.6s opacity transition
- `slide-up`: 0.8s from translate(0, 20px)
- `bounce`: Continuous 2s loop (scroll indicator)
- All use `ease-in-out` or `ease-out` timing

### Hover Effects
- Buttons: scale 1.05, background color change
- Cards: scale 1.05, shadow-2xl
- Links: color transition
- Duration: 300ms for all

### Responsive Utilities
- Padding: `px-responsive`, `py-responsive` (clamp sizing)
- Typography: `clamp()` for fluid sizing
- Grid: Auto-responsive with gap adjustments
- Flexbox for layout flexibility

## Customization Checklist

- [ ] Update company name in `src/lib/content.ts`
- [ ] Replace navigation links
- [ ] Update hero heading/subtitle
- [ ] Edit partner list (add/remove/edit)
- [ ] Customize practice areas
- [ ] Replace testimonials
- [ ] Update contact information
- [ ] Change color scheme (if needed)
- [ ] Replace placeholder images
- [ ] Update footer links
- [ ] Test on mobile (390px), tablet (768px), desktop (1440px)
- [ ] Run `npm run build` to verify no errors
- [ ] Test all interactive elements (navbar, tabs, mobile menu)

## Performance Optimizations

- Code splitting: Automatic with Next.js
- Image optimization: Ready with next/image
- CSS minification: Built-in with Tailwind
- Font loading: `display: swap` for performance
- Static generation: All pages pre-rendered
- No unnecessary re-renders: React.memo where needed

## Deployment Options

### Vercel (Recommended)
```bash
vercel deploy
# Auto-deploys from GitHub
# Free tier available
```

### Netlify
```bash
npm run build
# Deploy the .next/ directory
```

### Traditional Server
```bash
npm install
npm run build
npm start
# Runs on port 3000
```

### Docker
Create `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install && npm run build
CMD npm start
```

## Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

### TypeScript Errors
```bash
npx tsc --noEmit
# Shows exact line numbers of issues
```

### Mobile Menu Not Working
- Check z-index (should be 50 on navbar)
- Verify `'use client'` directive is present
- Check useState import from React

### Fonts Not Loading
- Verify `next/font/google` import in layout.tsx
- Check font names are exact (Alexandria, Nunito)
- Verify CSS variables in globals.css

### Colors Not Applying
- Ensure Tailwind content path includes all files
- Check tailwind.config.ts has correct extend colors
- Verify globals.css CSS variables are defined

## Version Information

- Node.js: 18+ (18.17+)
- npm: 9+
- Next.js: 15.0.0
- React: 19.0.0
- TypeScript: 5.3.3
- Tailwind CSS: 4.0.0

## Browser Support

- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: All modern versions

## Support & Updates

For production deployments:
1. Test thoroughly on target devices
2. Use analytics to track performance
3. Monitor error logs in deployment platform
4. Keep dependencies updated regularly
5. Test before major version upgrades

## Next Steps

1. **Install & Build**:
   ```bash
   npm install
   npm run build
   npm start
   ```

2. **Customize Content**:
   - Edit `src/lib/content.ts` with real information

3. **Add Images**:
   - Replace placeholder image references with real URLs or local assets

4. **Test Thoroughly**:
   - Test on mobile, tablet, desktop
   - Verify all links and interactions

5. **Deploy**:
   - Choose deployment platform (Vercel recommended)
   - Configure domain and SSL

---

**Project Ready**: This is a complete, production-ready website. No additional configuration needed to run. Just customize the content!
