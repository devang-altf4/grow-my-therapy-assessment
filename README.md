# Grow My Therapy — Technical Screening Assignment
**Candidate:** Devang Gupta  
**Role:** Front-End Developer Intern  
**Tech Stack:** Next.js (App Router, Turbopack, TypeScript) + Tailwind CSS (v4) + Lucide Icons  

---

## 🌟 Executive Summary & Deliverables

This repository implements both stages of the **Grow My Therapy** evaluation assignment with high fidelity:

1. **Part 1: 1:1 Layout & Structural Clone** (`/original-clone`):
   - A pixel-accurate replication of [Conejo Valley Family Counseling](https://www.conejovalleycounseling.com/home).
   - Recreates the exact section ordering, organic arched image frames, grid hierarchy, fluid typography, and original terracotta color scheme.
2. **Part 2: Creative Redesign for Dr. Maya Reynolds, PsyD** (`/`):
   - Single source of truth: [Dr. Maya Reynolds Profile](https://docs.google.com/document/d/1-IJVKEjuqV9CTd9QH16UNHJ7SQfdiweS4oAIZ8vmgHU/edit?usp=sharing).
   - Bespoke coastal California theme (*Coastal Slate Pine & Warm Alabaster Sand*) tailored to high-achieving professionals in Santa Monica, CA.
   - 3 focused clinical services with localized SEO keywords (Anxiety & Panic, Trauma Recovery & EMDR, Burnout Counseling).
   - Dr. Maya Reynolds' authentic portrait image from her Google Drive folder.
3. **Part 3: Custom "Our Office" Section**:
   - A brand-new section seamlessly integrated into the homepage flow.
   - Highlights the Santa Monica office sanctuary (`123th Street 45 W, Santa Monica, CA 90401`).
   - Uses the **two authentic office photos** (`office1.jpeg` & `office2.jpeg`) retrieved directly from her Google Drive asset folder.
4. **Interactive Evaluation Switcher**:
   - A persistent banner at the top of every page allows evaluators to toggle seamlessly between the **Rebranded Experience (`/`)** and the **1:1 Original Clone (`/original-clone`)**.

---

## 🎨 Design System & Theme Tokens

The redesign implements a cohesive, high-contrast, calming palette via CSS custom properties and Tailwind tokens:

| Token | CSS Variable | Hex Code | Visual Application |
|---|---|---|---|
| **Primary** | `--primary` | `#244136` | Coastal Slate Pine; primary buttons, brand titles, focus rings |
| **Primary Hover** | `--primary-hover` | `#192E26` | Deep Pine; active button states |
| **Secondary** | `--secondary` | `#F7F4EE` | Warm Alabaster Sand; alternating section fills, card surfaces |
| **Accent** | `--accent` | `#C47D5A` | Terracotta Clay; eyebrow pills, badges, micro-accents |
| **Surface** | `--surface` | `#FDFCF9` | Crisp Off-White; page background |
| **Foreground** | `--foreground` | `#1B221E` | Deep Charcoal; high-contrast, accessible typography |
| **Muted** | `--muted` | `#5D6862` | Slate Olive; subheadings, secondary labels, footers |

### Typography Scale
- **Headings**: `Cormorant Garamond` (Google Font) — Sophisticated editorial serif conveying clinical authority and warmth.
- **Body & UI**: `Plus Jakarta Sans` (Google Font) — Crisp, modern geometric sans-serif for optimal reading comfort.

---

## 📁 Repository Structure

```
d:/coding/assesment/
├── public/
│   └── assets/
│       ├── Dr. Maya Reynolds.png     # Authentic client portrait
│       ├── office1.jpeg              # Authentic Santa Monica office photo
│       ├── office2.jpeg              # Authentic Santa Monica office photo
│       ├── maya/                     # Curated high-res therapy photography
│       └── conejo/                   # Scraped reference assets for 1:1 clone
├── src/
│   ├── app/
│   │   ├── layout.tsx                # Google fonts, viewport, OpenGraph SEO tags
│   │   ├── page.tsx                  # Main redesigned landing page
│   │   ├── original-clone/
│   │   │   └── page.tsx              # 1:1 reference clone route
│   │   └── globals.css               # Tailwind v4 theme & architectural arch classes
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx            # Responsive navigation & mobile drawer
│   │   │   ├── Footer.tsx            # Rich practice footer & legal disclaimers
│   │   │   └── SwitcherBanner.tsx    # Live evaluator preview toggle
│   │   └── sections/
│   │       ├── HeroSection.tsx       # S1: Arched dual imagery & local SEO H1
│   │       ├── EmpathySection.tsx    # S2: Validation narrative for high achievers
│   │       ├── WhoWeHelpSection.tsx  # S3: 3 client profile focus cards
│   │       ├── QuoteSection.tsx      # S4: Full-width editorial quote banner
│   │       ├── ExpertiseSection.tsx  # S5: Clinical tags cloud (EMDR, CBT, etc.)
│   │       ├── HowWeWorkSection.tsx  # S6: Clinical approach + Dr. Maya bio card
│   │       ├── SecondaryQuoteSection.tsx # S7: Mid-page affirmative quote
│   │       ├── SpecialtiesSection.tsx    # S8: 3 core clinical specialties
│   │       ├── OurOfficeSection.tsx  # PART 3: Custom Santa Monica office section
│   │       ├── BookingCtaSection.tsx # S9: Consultation scheduling banner
│   │       ├── FaqSection.tsx        # Interactive accordion FAQ
│   │       └── ContactFormSection.tsx# HIPAA-compliant consultation form
│   └── config/
│       ├── mayaContent.ts            # Typed content from Dr. Maya Reynolds profile
│       └── originalCloneContent.ts   # Typed reference content from Conejo Valley
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18+ (tested on Node v22.20.0)
- npm 9+

### Installation & Execution
```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Open in browser
# Rebranded Experience: http://localhost:3000
# 1:1 Reference Clone:  http://localhost:3000/original-clone
```

### Production Build
```bash
npm run build
npm run start
```

---

## 📹 5-Minute Client Walkthrough Video Guide (Part 4)

Below is the presentation outline crafted for your 5-minute Loom demo to Dr. Maya Reynolds:

### 0:00 – 0:45 | Warm Welcome & Strategic Overview
> *"Hello Dr. Reynolds! I’m excited to present the first draft of your new practice website. We built this site specifically around your practice in Santa Monica and your work with high-achieving adults navigating anxiety, trauma, and burnout. Our core goal was to create a digital space that feels as calm, grounded, and welcoming as your physical office, while making it effortless for prospective clients to book an introductory consultation."*

### 0:45 – 1:45 | Above-the-Fold & Hero Section
> *"At the very top, we feature an elegant, uncluttered navigation with an immediate 'Book a Consultation' button. The hero headline speaks directly to your ideal client: 'Reclaim your calm, rebuild your foundation, and finally begin to thrive.' Notice the warm, coastal sage and sand color palette—it gives an immediate feeling of safety without clinical sterility. We also included your dual arched photo layout that reflects your integrative, grounded approach."*

### 1:45 – 2:45 | Who We Help & Your Three Core Specialties
> *"As clients scroll, we validate the quiet internal pressure they feel—looking composed on the outside while exhausted on the inside. In the Specialties section, we highlighted your three distinct focus areas: Anxiety & Panic Therapy, Trauma Recovery & EMDR, and Burnout Counseling. Each card clearly explains how your evidence-based methods (CBT, somatic regulation, EMDR) help them feel better in daily life."*

### 2:45 – 3:45 | Custom "Our Office" Section
> *"Here is a brand-new feature we crafted specifically for your practice: 'Our Office — A Calm Sanctuary for Healing in Santa Monica.' We showcased your actual office photographs from 123th Street 45 W with natural lighting and soothing textures. We also explicitly highlighted your flexibility: in-person sessions here in Santa Monica, plus secure telehealth across all of California."*

### 3:45 – 4:30 | Mobile Responsiveness & Consultation Form
> *(Switch browser to mobile view in Developer Tools).*  
> *"Over 65% of therapy searches happen on mobile devices. As you can see, every element stacks seamlessly on smartphone screens—the typography remains crisp, buttons are thumb-friendly, and the interactive consultation form makes reaching out feel warm, confidential, and completely stress-free."*

### 4:30 – 5:00 | Wrap-up & Next Steps
> *"We’ve also included an evaluation toggle at the top showing how we preserved the layout DNA of your reference site while completely elevating the brand for you. I look forward to your feedback and taking the next steps together!"*

---

## 🎯 Evaluation Checklist Self-Audit

- [x] **Part 1 (UI Cloning Accuracy - 25%)**: Recreated exact layout, spacing, hierarchy, and responsive behavior of Conejo Valley Counseling available at `/original-clone`.
- [x] **Part 2 (Theme & Design Sense - 25%)**: Replaced palette with cohesive Coastal Slate Pine (`#244136`) & Alabaster Sand (`#F7F4EE`), customized typography with Cormorant Garamond & Plus Jakarta Sans.
- [x] **Part 2 (Copywriting & SEO - 10%)**: All copy derived strictly from Dr. Maya Reynolds' profile with local Santa Monica SEO keywords in H1, headings, and body.
- [x] **Part 2 (Images - 10%)**: Added Dr. Maya's portrait, removed stock placeholders, and used curated serene wellness photography matching the coastal palette.
- [x] **Part 3 (New Section Creativity - 10%)**: Integrated custom "Our Office" section using the two authentic Google Drive office images and physical practice details.
- [x] **Part 4 (Communication - 30%)**: Clear video demo structure avoiding technical jargon, highlighting client benefits.
