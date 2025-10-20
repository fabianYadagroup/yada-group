# Deployment Guide for YADA GROUP Website

## 📋 Pre-Deployment Checklist

Before deploying, make sure to update these three configuration values:

### 1. Update Fyxer Booking Link
**File:** `app/page.tsx` (line 2)

```tsx
const fyxer = "https://YOUR-FYXER-BOOKING-LINK"; // ← Replace with your actual Fyxer URL
```

### 2. Update Contact Email (if needed)
**File:** `app/page.tsx` (line 3)

```tsx
const email = "dealflow@yadagroup.com"; // ← Update if using a different email
```

### 3. Add Google Analytics 4 ID
**File:** `app/layout.tsx` (line 24)

```tsx
const GA_ID = "G-XXXXXXXXXX"; // ← Replace with your GA4 Measurement ID
```

---

## 🚀 Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top right → **"New repository"**
3. Name it `yada-group` (or any name you prefer)
4. Keep it **Public** (required for free GitHub Pages)
5. **DO NOT** initialize with README, .gitignore, or license
6. Click **"Create repository"**

### Step 2: Push Code to GitHub

Copy your repository URL from GitHub (it looks like `https://github.com/YOUR-USERNAME/yada-group.git`), then run:

```bash
cd /home/ubuntu/yada-group
git remote add origin https://github.com/YOUR-USERNAME/yada-group.git
git push -u origin main
```

If prompted, authenticate with your GitHub credentials or personal access token.

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. In the left sidebar, click **Pages**
4. Under **"Build and deployment"**:
   - **Source:** Select **"GitHub Actions"**
5. That's it! The workflow will automatically trigger

### Step 4: Monitor Deployment

1. Go to the **Actions** tab in your repository
2. You'll see the **"Deploy to GitHub Pages"** workflow running
3. Wait for it to complete (usually 1-2 minutes)
4. Once complete, your site will be live at:
   ```
   https://YOUR-USERNAME.github.io/yada-group/
   ```

### Step 5: Custom Domain (Optional)

If you want to use a custom domain like `yadagroup.com`:

1. In GitHub Settings → Pages, enter your custom domain
2. Add these DNS records at your domain registrar:

   **For apex domain (yadagroup.com):**
   ```
   A     @     185.199.108.153
   A     @     185.199.109.153
   A     @     185.199.110.153
   A     @     185.199.111.153
   ```

   **For www subdomain:**
   ```
   CNAME www   YOUR-USERNAME.github.io
   ```

3. Wait for DNS propagation (can take up to 24 hours)
4. Enable **"Enforce HTTPS"** in GitHub Pages settings

---

## 🔄 Update the Site

To make changes after initial deployment:

```bash
# Make your changes to the code
# Then commit and push:
git add .
git commit -m "Update content"
git push
```

The GitHub Actions workflow will automatically rebuild and redeploy your site.

---

## 🆘 Troubleshooting

### Build Fails

- Check the **Actions** tab for error messages
- Ensure all dependencies are in `package.json`
- Verify `next.config.ts` has `output: "export"`

### Site Not Loading

- Wait a few minutes after first deployment
- Check Settings → Pages for the published URL
- Clear your browser cache

### 404 Errors

- Ensure the workflow completed successfully
- Check that the `out` directory was created during build
- Verify GitHub Pages source is set to "GitHub Actions"

---

## 🎯 Alternative: Deploy to Vercel

Vercel is the easiest option and offers better performance:

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click **"Add New Project"**
3. Import your `yada-group` repository
4. Vercel will auto-detect Next.js settings
5. Click **"Deploy"**
6. Your site will be live at `yada-group.vercel.app` in ~30 seconds

**Benefits of Vercel:**
- Faster builds
- Automatic previews for pull requests
- Better caching and CDN
- Free SSL certificate
- Custom domain setup is easier

---

## 📞 Support

If you encounter issues:
1. Check the [Next.js documentation](https://nextjs.org/docs)
2. Review [GitHub Pages documentation](https://docs.github.com/en/pages)
3. Verify all configuration values are updated correctly

---

**Your site is ready to go live!** 🎉

