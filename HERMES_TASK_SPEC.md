# Task Specification for Hermes Agent: Matching Part 1 Clone to Reference Video

## Context
The user recorded a side-by-side comparison video between the clone (left side) and the live reference site (right side: https://www.conejovalleycounseling.com/home).
Key comparison screenshots extracted directly from the video are saved in the workspace at:
`d:/coding/assesment/comparison-frames/`

---

## 1. Hero Section (Section 1)
- **Extracted Frame:** `comparison-frames/01_hero_section.jpg`
- **Reference URL:** `https://www.conejovalleycounseling.com/home`
- **Identified Issues:**
  1. **H1 Text Wrapping:** The H1 heading was breaking across 4 lines awkwardly and overlapping the right edge image.
  2. **Image Placement:** Left and right images must be flush against the viewport boundaries.
- **Required Implementation:**
  - Grid column for H1: `11 / 24` (or minimum width to prevent line overflow).
  - Explicit line breaks:
    ```html
    Rebuild your foundation on<br />
    solid ground and finally<br />
    begin to <span className="font-script f-script text-[#86B3B3]">thrive.</span>
    ```
  - Left hero image flush left: `gridColumn: "1 / 10"`
  - Right hero image flush right: `gridColumn: "25 / 27"`

---

## 2. Empathy & Narrative Section (Section 2)
- **Identified Issues:**
  1. H2 heading broke mid-sentence awkwardly without balanced lines.
  2. Ocean photo on the right had a gutter gap.
- **Required Implementation:**
  - H2 line break:
    ```html
    You’re holding onto hope that life can be<br />
    better than it is right now.
    ```
  - Ocean image flush right: `gridColumn: "19 / 27"`

---

## 3. "Who we help" Cards (Section 3)
- **Extracted Frame:** `comparison-frames/02_cards_aspect_ratio.jpg`
- **Identified Issues:**
  1. **Image Distortion:** Card images were vertically stretched and elongated (`aspect-[1105/1683]`), making people's bodies and logs look distorted.
  2. **Horizontal Grid Placement:** The 3 cards were centered rather than aligned to columns 5 to 26.
- **Required Implementation:**
  - Image aspect ratio: **`aspect-[373/424]`** (exact Squarespace card ratio).
  - 3 Equal 7-column card placement:
    - Card 1 (Adults): `gridColumn: "5 / 12"`
    - Card 2 (Couples): `gridColumn: "12 / 19"`
    - Card 3 (Children & Teens): `gridColumn: "19 / 26"`
  - Columns 2 to 4 on the left remain empty beneath the "Who we help" title.

---

## 4. Full-Width Quote Banner (Section 4)
- **Extracted Frame:** `comparison-frames/03_quote_banner.jpg`
- **Identified Issues:**
  - Line 2 broke abruptly leaving the single word `"for"` on line 3 as an orphan:
    *Bad:* "...Nothing will be too heavy" / "for us to carry together."
- **Required Implementation:**
  - Grid column expanded to `2 / 25` (to accommodate line length).
  - Balanced 3 lines:
    ```html
    You deserve a place where your story is heard,<br />
    valued, and understood. Nothing will be too heavy for<br />
    us to carry together.
    ```

---

## 5. "Our areas of expertise" (Section 5)
- **Identified Issues:**
  - Two columns of specialties were misaligned with the title.
- **Required Implementation:**
  - Title: `gridColumn: "3 / 9"`
  - Left column list: `gridColumn: "10 / 18"`
  - Right column list: `gridColumn: "18 / 26"`
  - Typography: uppercase, `text-[15px]`, `tracking-[1.8px]`, thin bottom border `border-b border-[#E3D9CA]`.

---

## 6. "HOW WE WORK" Section (Section 6)
- **Extracted Frame:** `comparison-frames/04_how_we_work.jpg`
- **Identified Issues:**
  1. Beach photo (mother and child twirling) was squeezed to only 5 columns wide (`22 / 27`).
  2. The two paragraphs did not sit side-by-side cleanly.
- **Required Implementation:**
  - Left paragraph column: `gridColumn: "2 / 10"`
  - Right paragraph column: `gridColumn: "10 / 18"`
  - Beach photo: `gridColumn: "18 / 27"` (9 columns wide, flush to right edge).

---

## 7. "Honoring where you’ve been..." (Section 7)
- **Extracted Frame:** `comparison-frames/05_honoring_heading.jpg`
- **Identified Issues:**
  - Heading was wrapping onto 4 fragmented lines instead of the exact 3 lines seen on the reference site.
- **Required Implementation:**
  - Left family beach photo: `gridColumn: "1 / 15"` (flush to left edge).
  - Heading container: `gridColumn: "16 / 26"`, `gridRow: "9 / 15"`.
  - Exact 3-line wrap matching live site:
    ```html
    Honoring where you’ve<br />
    been <span className="font-script f-script text-[#86B3B3]">&amp;</span> helping shape<br />
    where you’re headed.
    ```

---

## 8. "Our specialties include…" (Section 8)
- **Extracted Frame:** `comparison-frames/06_specialties.jpg`
- **Required Implementation:**
  - Title: `gridColumn: "3 / 10"`
  - 2x2 grid column spans:
    - Column 1 (Trauma, Dissociation): `gridColumn: "11 / 18"`
    - Column 2 (EMDR, Special Needs Parenting): `gridColumn: "19 / 26"`

---

## 9. "SCHEDULE AN APPOINTMENT" (Section 9)
- **Extracted Frame:** `comparison-frames/07_appointment_section.jpg`
- **Identified Issues:**
  1. Left and right edge photos were not flush to viewport borders.
  2. Heading broke onto 3 lines instead of 2.
- **Required Implementation:**
  - Left photo: `gridColumn: "1 / 4"` (flush left edge).
  - Center content container: `gridColumn: "5 / 18"`
  - Heading: 2 lines with script "you."
    ```html
    Find a therapist who is the right fit<br />for <span className="font-script f-script text-[#86B3B3]">you.</span>
    ```
  - Right photo: `gridColumn: "18 / 27"` (flush right edge).
