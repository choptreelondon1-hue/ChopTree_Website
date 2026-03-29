# Chop Tree London — Website Setup Guide

## Stack
- **Next.js 15** (App Router, TypeScript)
- **Tailwind CSS** for styling
- **@chenglou/pretext** for precision text layout in the hero
- **lucide-react** for icons
- **Vercel** for deployment (London region: lhr1)

---

## Getting Started (run these in Claude Code or your terminal)

```bash
# 1. Navigate to the project
cd "Chop Tree London/choptree-website"

# 2. Install all dependencies
npm install

# 3. Run the dev server
npm run dev
# → Open http://localhost:3000
```

---

## Images Needed

Place these in `public/images/`:

| File | Description |
|---|---|
| `hero-bg.jpg` | Hero background — tree surgeon at work (landscape, 1920×1080 min) |
| `about-team.jpg` | About section image — team or job site |
| `tree-surgery.jpg` | Services page — tree surgery |
| `tree-removal.jpg` | Services page — tree removal |
| `stump-removal.jpg` | Services page — stump removal |
| `crown-lifting.jpg` | Services page — crown lifting |
| `og-image.jpg` | Open Graph share image (1200×630) |

> Use Adobe Stock or your own job photos. Adobe Firefly can generate any of these if needed.

---

## Contact Form Setup

The form submits to `/api/contact`. To make it actually send emails:

1. Sign up at [resend.com](https://resend.com) (free tier is generous)
2. Add your API key to Vercel env vars: `RESEND_API_KEY=re_xxxxx`
3. Uncomment the Resend block in `src/app/api/contact/route.ts`

---

## Deploy to Vercel

```bash
# Install Vercel CLI (if not already)
npm i -g vercel

# Deploy (first time — follow the prompts)
vercel

# Deploy to production
vercel --prod
```

> Set your custom domain `choptreelondon.com` in the Vercel dashboard after first deploy.

---

## SEO Checklist

- [ ] Add `RESEND_API_KEY` to Vercel env vars
- [ ] Add Google Search Console verification token in `src/app/layout.tsx`
- [ ] Upload real photos to `public/images/`
- [ ] Submit `https://choptreelondon.com/sitemap.xml` to Google Search Console
- [ ] Add your logo as `public/logo.svg` and update Header + Footer components

---

## Logo

The current header/footer use a placeholder tree icon. Once the revamped logo is ready (from Adobe):
1. Export as `logo.svg` (or `logo.png` at 2x)
2. Drop into `public/`
3. Update `src/components/layout/Header.tsx` and `Footer.tsx` — replace the placeholder `<div>` with `<Image src="/logo.svg" ... />`
