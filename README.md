# Dr. Maya Reynolds, PsyD — Therapy Homepage

Next.js + Tailwind redesign of conejovalleycounseling.com/home for an imaginary
(fictional) therapist, Dr. Maya Reynolds, PsyD (Santa Monica, CA), built for
the Grow My Therapy internship assignment.

All copy is based on her actual profile doc (anxiety/panic, trauma, burnout
and perfectionism; adults; CBT/EMDR/mindfulness/body-oriented work; in-person
Santa Monica office + CA telehealth). Her headshot and two real office photos
were pulled from the profile doc itself and are already in `public/images/`.


## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000



## Structure

- `app/layout.js` - fonts, metadata (SEO title/description)
- `app/page.js` - the whole homepage, section by section
- `app/globals.css` - base styles, `.btn`, `.sec`, `.ph` helper classes
- `tailwind.config.js` - theme colors: `primary` (deep teal), `secondary`
  (seafoam), `accent` (marigold) - change these three values to re-theme
  the entire site
- `public/images/maya.jpg`, `office1.jpg`, `office2.jpg` - real photos
  from the profile doc

