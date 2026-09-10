# Comprehensive Context Handover for Claude

## 1. Project Overview & Environment
- **Project**: Grow My Therapy Assessment / Internship Assignment (Candidate: Devang Gupta).
- **Workspace Path**: `d:\coding\assesment`
- **Tech Stack**: Next.js 15+ (App Router), React 19, TypeScript, Tailwind CSS, Lucide React.
- **Local Dev Server**: Running at `http://localhost:3000` (**managed directly by the user** in terminal — do NOT attempt to kill, restart, or spawn dev servers).
- **Git Branch**: `main` (**IMPORTANT**: Never push to GitHub unless the user explicitly tells you to).

---

## 2. Assessment Structure & Routes
The project is organized into modular routes accessible from the main landing page:
1. **`/` (`src/app/page.tsx`)**: Assessment portal / hub linking to each part.
2. **`/part-1` (`src/app/part-1/page.tsx`)**: Exact clone of the live reference site:
   - **Reference URL**: `https://www.conejovalleycounseling.com/home` (Conejo Valley Family Counseling).
3. **`/part-2` (`src/app/part-2/page.tsx`)**: Dr. Maya Reynolds, PsyD therapist landing page (Licensed Clinical Psychologist in Santa Monica, CA). Note: Hermes agent has also been working on Part 2 in parallel.
4. **`/part-3` (`src/app/part-3/page.tsx`)**: "Our Office" section / virtual office tour for Dr. Maya Reynolds (Address: 123th Street 45 W, Santa Monica, CA 90401) with office gallery images.
5. **`/original-clone` (`src/app/original-clone/page.tsx`)**: Standalone reference baseline copy.

---

## 3. Typography & Styling System
- **Fonts**:
  - Headings: `Beaufort Pro` (`font-serif-heading`, serif)
  - Body & Eyebrows: `Muli` / Mulish (`font-sans-nav`, `font-body`)
  - Accent Script: `PrintedMoments` (`font-script`, script font for colored highlighted words like *thrive.*, *help*, *expertise*, *you.*)
- **Fluid Typography Classes** (defined in `src/app/globals.css`):
  - `.f-h1`: Hero title (`min(calc(2.55vw + 20px), 70.8px)`)
  - `.f-h2`: Section titles (`min(calc(2.1vw + 18px), 58.34px)`)
  - `.f-h3`: Sub-headings (`min(calc(1.68vw + 15px), 45.24px)`)
  - `.f-h4`: Card & item titles (`min(calc(0.72vw + 18px), 25.08px)`)
  - `.f-body`: Paragraphs (`min(calc(0.12vw + 15px), 17.16px)`)
  - `.f-eyebrow`: Uppercase labels (`12px`, letter spacing `0.15em`)
  - `.f-script`: Calligraphic accents (`1.15em` relative, script font)
- **Grid Architecture**:
  - Squarespace Fluid Engine 24-column grid (`.sqs-fluid-grid-11`):
    `grid-template-columns: minmax(0, 1fr) repeat(24, minmax(0, 48.5px)) minmax(0, 1fr)`
    (26 tracks total: track 1 = left edge, tracks 2–26 = 24 content columns, track 27 = right edge).

---

## 4. Current State of Part 1 & Key Video Fixes
The user provided a side-by-side comparison recording (`comparing both simulatenously video.mp4`) between the clone and the live reference site.
The key discrepancies identified from the video and resolved in `src/app/part-1/page.tsx` are:

1. **Hero Section (S1)**:
   - Left hero image flush to viewport left: `gridColumn: "1 / 10"`.
   - Right hero image flush to viewport right: `gridColumn: "25 / 27"`.
   - H1 heading expanded to `gridColumn: "11 / 24"` with exact 3-line wrap:
     `Rebuild your foundation on<br />solid ground and finally<br />begin to <span ...>thrive.</span>`
2. **Empathy & Narrative (S2)**:
   - Heading broken into 2 clean lines: `You’re holding onto hope that life can be<br />better than it is right now.`.
   - Ocean photo flush to viewport right: `gridColumn: "19 / 27"`.
3. **"Who we help" (S3)**:
   - **Image Aspect Ratio**: Card images updated to **`aspect-[373/424]`** (previously stretched vertically to 1105/1683).
   - **Grid Spans**: 3 equal 7-column cards across `5 / 12`, `12 / 19`, and `19 / 26` (leaving space on left under the title).
4. **Quote Banner (S4)**:
   - Container expanded to `gridColumn: "2 / 25"` to eliminate orphan words ("for").
   - Balanced 3 lines:
     `You deserve a place where your story is heard,`
     `valued, and understood. Nothing will be too heavy for`
     `us to carry together.`
5. **Areas of Expertise (S5)**:
   - Title at `3 / 9`, left list at `10 / 18`, right list at `18 / 26` with uppercase `15px` styling and divider borders.
6. **"HOW WE WORK" (S6)**:
   - Two balanced paragraphs: `gridColumn: "2 / 10"` and `10 / 18`.
   - Beach photo expanded to 9 full columns: `gridColumn: "18 / 27"` (flush right).
7. **"Honoring where you’ve been..." (S7)**:
   - Left beach family photo: `gridColumn: "1 / 15"` (flush left).
   - Heading at `gridColumn: "16 / 26"`, `gridRow: "9 / 15"` with exact 3-line wrap matching live site:
     `Honoring where you’ve<br />been &amp; helping shape<br />where you’re headed.`
8. **"Our specialties include…" (S8)**:
   - Title at `3 / 10`, 2x2 grid columns at `11 / 18` and `19 / 26`.
9. **"SCHEDULE AN APPOINTMENT" (S9)**:
   - Left edge photo flush left (`1 / 4`), right edge photo flush right (`18 / 27`).
   - Center heading on 2 clean lines (`5 / 18`): `Find a therapist who is the right fit<br />for you.`.
10. **Footer**:
    - 4-column layout (`col-span-4`, `col-span-2`, `col-span-3`, `col-span-3`) + bottom legal bar.

---

## 5. Extracted Assets & Task Documentation in Repo
- **Extracted Video Comparison Frames**: Located in `d:\coding\assesment\comparison-frames\`
  - `01_hero_section.jpg`
  - `02_cards_aspect_ratio.jpg`
  - `03_quote_banner.jpg`
  - `04_how_we_work.jpg`
  - `05_honoring_heading.jpg`
  - `06_specialties.jpg`
  - `07_appointment_section.jpg`
- **Hermes Task Spec**: Located at `d:\coding\assesment\HERMES_TASK_SPEC.md`.

---

## 6. Strict User Guidelines & Constraints
1. **NO Hardcoding or Dummy Fallbacks**: User rule: "strict rule no hardcoding values if u need anything ask me but no hardcode or fallbacks when i say u to add a feature".
2. **Dev Server Control**: The user manages their own terminal (`npm run dev`). Do NOT kill, restart, or run competing dev servers.
3. **Git Control**: Do NOT push to GitHub unless explicitly instructed by the user.
4. **Evidence-First**: Always verify code against actual executable files and the live site (`https://www.conejovalleycounseling.com/home`).
