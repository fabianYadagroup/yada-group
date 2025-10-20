# YADA GROUP Website

A sleek, high-conversion one-page website for YADA GROUP built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- pnpm package manager (or npm/yarn)

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## ⚙️ Configuration

Before deploying, update these variables:

### 1. Fyxer Booking Link

In `app/page.tsx`, line 2:

```tsx
const fyxer = "https://YOUR-FYXER-BOOKING-LINK"; // ← Replace with your Fyxer URL
```

### 2. Contact Email

In `app/page.tsx`, line 3:

```tsx
const email = "dealflow@yadagroup.com"; // ← Update if needed
```

### 3. Google Analytics 4

In `app/layout.tsx`, line 24:

```tsx
const GA_ID = "G-XXXXXXXXXX"; // ← Replace with your GA4 Measurement ID
```

## 📦 Build for Production

```bash
# Build static site
pnpm build

# The output will be in the /out directory
```

## 🌐 Deploy to GitHub Pages

### Option 1: Automatic Deployment with GitHub Actions

1. **Push to GitHub:**

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/yada-group.git
git push -u origin main
```

2. **Create GitHub Actions workflow:**

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"
      
      - name: Setup pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 10
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build
        run: pnpm build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

3. **Enable GitHub Pages:**
   - Go to your repository Settings → Pages
   - Under "Build and deployment", select "GitHub Actions" as the source
   - Push the workflow file and it will auto-deploy

### Option 2: Manual Deployment

```bash
# Build the site
pnpm build

# The /out directory contains your static site
# Upload the contents to your hosting provider
```

## 🎨 Customization

- **Colors:** Modify Tailwind classes in `app/page.tsx`
- **Content:** Update copy directly in `app/page.tsx`
- **SEO:** Edit metadata in `app/layout.tsx`
- **Styling:** Adjust global styles in `app/globals.css`

## 📁 Project Structure

```
yada-group/
├── app/
│   ├── layout.tsx       # Root layout with SEO & GA4
│   ├── page.tsx         # Main landing page
│   └── globals.css      # Global styles
├── public/
│   ├── favicon.svg      # Favicon (SVG)
│   ├── favicon.png      # Favicon (PNG fallback)
│   └── og.png           # Open Graph image
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind configuration
└── package.json         # Dependencies
```

## 🔧 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Static export (GitHub Pages, Vercel, Netlify compatible)

## 📝 Notes

- The site is configured for static export (`output: "export"` in `next.config.ts`)
- All CTAs link to the Fyxer booking URL
- Smooth scrolling and sticky header are enabled
- Fully responsive and mobile-optimized
- SEO metadata and Open Graph tags included

## 🚢 Deploy to Vercel (Alternative)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR-USERNAME/yada-group)

1. Push to GitHub
2. Import the repository in Vercel
3. Vercel will auto-detect Next.js and deploy
4. Update environment variables in Vercel dashboard if needed

---

**Built for YADA GROUP** — Smart Growth Through Acquisitions & Partnerships

