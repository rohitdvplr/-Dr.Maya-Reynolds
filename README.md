# Dr. Maya Reynolds, PsyD — Therapy Homepage

Next.js + Tailwind redesign of conejovalleycounseling.com/home for an imaginary
(fictional) therapist, Dr. Maya Reynolds, PsyD (Santa Monica, CA), built for
the Grow My Therapy internship assignment.

All copy is based on her actual profile doc (anxiety/panic, trauma, burnout
and perfectionism; adults; CBT/EMDR/mindfulness/body-oriented work; in-person
Santa Monica office + CA telehealth). Her headshot and two real office photos
were pulled from the profile doc itself and are already in `public/images/`.

## Still worth checking before you submit

1. **Clone accuracy** — this was rebuilt from a text read of the original
   site, not a pixel-diff copy. Open the original and this site side by
   side and fine-tune spacing/type/section order if anything's off.
2. **Hero / intro / "who I help" images** are abstract SVG shapes in the
   site's palette, not photos — the profile doc only included Maya's
   headshot and two office photos, not lifestyle photos. If you want
   real photography there instead of the illustrated placeholders, source
   images that fit the calm, grounded tone and swap them into the `Img`
   calls in `app/page.js`.
3. A third office photo would satisfy the "2-3 images" note more fully —
   only two were in the doc. Two is fine, but add a third if you find one.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy (Vercel - fastest)

```bash
npm i -g vercel
vercel
```
Follow the prompts; it gives you a live URL.

## Push to GitHub

```bash
git init
git add .
git commit -m "Maya Reynolds therapy homepage"
gh repo create maya-reynolds-therapy --public --source=. --push
```
No `gh` CLI? Create an empty public repo on github.com, then:
```bash
git remote add origin https://github.com/<your-username>/maya-reynolds-therapy.git
git branch -M main
git push -u origin main
```

## Then import that repo into Vercel

vercel.com -> Add New Project -> import the GitHub repo -> Deploy.
Gives auto-redeploy on every push, handy while you're still iterating.

## Structure

- `app/layout.js` - fonts, metadata (SEO title/description)
- `app/page.js` - the whole homepage, section by section
- `app/globals.css` - base styles, `.btn`, `.sec`, `.ph` helper classes
- `tailwind.config.js` - theme colors: `primary` (deep teal), `secondary`
  (seafoam), `accent` (marigold) - change these three values to re-theme
  the entire site
- `public/images/maya.jpg`, `office1.jpg`, `office2.jpg` - real photos
  from the profile doc

## Deliverables checklist

- [ ] Live link (Vercel)
- [ ] Public GitHub repo
- [ ] 5-min Loom walkthrough (see `VIDEO_SCRIPT.md`)
- [ ] Side-by-side check against the original template for layout accuracy
