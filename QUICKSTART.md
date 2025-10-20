# 🚀 Quick Start Guide

## Before You Deploy

### 1. Update Your Fyxer Booking Link
Open `app/page.tsx` and replace line 2:
```tsx
const fyxer = "https://YOUR-FYXER-BOOKING-LINK";
```

### 2. Add Your Google Analytics ID
Open `app/layout.tsx` and replace line 24:
```tsx
const GA_ID = "G-XXXXXXXXXX";
```

## Deploy to GitHub Pages (5 Minutes)

### Step 1: Create Repository on GitHub
1. Go to github.com and create a new repository
2. Name it `yada-group` (keep it Public)
3. Don't initialize with README

### Step 2: Push Your Code
```bash
cd yada-group
git remote add origin https://github.com/YOUR-USERNAME/yada-group.git
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to repository Settings → Pages
2. Under "Build and deployment", select **GitHub Actions**
3. Done! Your site will be live at `https://YOUR-USERNAME.github.io/yada-group/`

---

## Deploy to Vercel (Recommended - 2 Minutes)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import your `yada-group` repository
4. Click "Deploy"
5. Done! Your site is live at `yada-group.vercel.app`

---

## Local Development

```bash
# Install dependencies
pnpm install

# Run dev server
pnpm dev

# Build for production
pnpm build
```

---

**Need help?** See `DEPLOYMENT.md` for detailed instructions.

