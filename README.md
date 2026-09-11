# Grow My Therapy — Stage 2 Practical Assignment (Completed)
**Candidate:** Devang Gupta · **Role:** Front-End Developer Intern
**Stack:** Next.js (App Router, TypeScript) + Tailwind CSS (v4) + Lucide Icons

> All four parts of the assignment are finished as briefed: a pixel-verified clone, a full redesign from Dr. Maya Reynolds' profile, a custom Office section, and the client demo video.

## 📦 Deliverables

| # | Deliverable | Link |
|---|---|---|
| 1 | Live website (Vercel) | https://grow-my-therapy-assessment-one.vercel.app/ |
| 2 | Public GitHub repository | https://github.com/devang-altf4/grow-my-therapy-assessment |
| 3 | Video walkthrough (Loom, 5 min) | https://www.loom.com/share/3ebdfb5e0c464dadb129db6042069e70 |

**Routes:** `/part-1` → clone · `/part-2` → Maya Reynolds redesign · `/part-3` → redesign + Our Office section

---

## Part 1: Clone the Homepage ✅ (UI Accuracy — 25%)

Reference: https://www.conejovalleycounseling.com/home · Implemented in `src/app/part-1/page.tsx`

- [x] Clone matches the original homepage in layout and structure — every heading verified identical (position, size, line-count) against the live reference at 1920px, with identical wraps at 1680 / 1536 / 1440 / 1366.
- [x] Fully responsive across desktop, tablet, and mobile views.
- [x] Same fonts, typography, and styling as the original (Beaufort Pro / Muli / script accents, self-hosted; Squarespace fluid-type scale; exact brand palette).
- [x] Reusable themes/colors via CSS variables and shared classes in `src/app/globals.css`.
- [x] Consistent spacing, padding, and margins throughout (24-column fluid grid system).

## Part 2: Redesign from Dr. Maya Reynolds' Profile ✅ (Theme 25% + Copy/Images 10%)

Implemented in `src/app/part-2/page.tsx`. Profile is the single source of truth for all content.

**Theme & colors**
- [x] Existing theme fully replaced with a cohesive new palette (deep slate, warm alabaster sand, terracotta clay accent).
- [x] New primary / secondary / accent applied consistently to images, backgrounds, text, and buttons.
- [x] Readability and visual balance maintained (high-contrast text, calm therapy-practice feel).

**Copywriting**
- [x] All copy derived from the profile — H1, subtexts, services, about, FAQs, buttons.
- [x] Headings carry SEO keywords for the main specialties; Santa Monica location woven through headings and body.
- [x] Services section with described specialties (Anxiety & Panic, Trauma Recovery & EMDR, Burnout & Perfectionism, Nervous System Regulation).
- [x] About, FAQs, and consultation copy tailored to her bio, modalities, and clientele; natural local keyword integration.

**Images**
- [x] All images replaced with theme-matched photography (coastal California mood, warm sand/sage/terracotta).
- [x] Every image intentional and section-relevant; Maya's portrait added with a bio written from her profile.

## Part 3: Custom "Our Office" Section ✅ (Creativity — 10%)

Implemented in `src/app/part-3/page.tsx` as *"Our Office — A Calm Sanctuary for Healing in Santa Monica."*

- [x] Brand-new section, not present in the original template, placed naturally in the homepage flow.
- [x] Clear heading + supporting copy describing the environment and what clients can expect.
- [x] Real office imagery (office1 / office2) aligned with the profile, plus location mention (Santa Monica, CA 90401).
- [x] Copy and imagery aligned with Dr. Reynolds' profile; safety, comfort, and warmth emphasized.
- [x] Seamless integration with the site's theme, spacing, and typography.

## Part 4: Video Walkthrough ✅ (Communication — 30%)

- [x] 5-minute Loom client demo to Dr. Reynolds: "here's your new website draft."
- [x] Desktop + mobile walkthroughs, design choices and profile usage explained in non-technical, benefits-focused language.

---

## 🚀 Run locally

```bash
npm install
npm run dev        # http://localhost:3000  (portal links to /part-1, /part-2, /part-3)
npm run build && npm run start   # production build
```
