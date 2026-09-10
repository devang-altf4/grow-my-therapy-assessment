"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Part1ClonePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const teamMembers = [
    "Jennifer Anderson, LMFT",
    "Heather Williams-Baumgart, AMFT",
    "Autumn Bodily, AMFT",
    "Michaela Gorospe, AMFT",
    "Candace Bletscher, AMFT",
    "Samantha Johnson, AMFT",
    "Andrea Watkins, APCC",
    "Rosa Gomez, AMFT",
    "Chad Flores, AMFT",
  ];

  const specialtiesList = [
    "Dissociation",
    "Trauma",
    "Special Needs Parenting",
    "Couples",
    "Children & Teens",
    "Anxiety & Depression",
    "Adoption",
  ];

  const methodsList = [
    "EMDR",
    "Brainspotting",
    "Somatic Therapy",
    "Parts Work Therapy",
  ];

  return (
    <div className="min-h-screen bg-[#F6F4EE] text-[#2B2B2B] font-body antialiased selection:bg-[#86B3B3]/30 selection:text-[#2B2B2B] overflow-x-hidden">
      {/* =========================================================================
          HEADER & NAVIGATION (Exact height: 118px, px-[76px], authentic nav order)
      ========================================================================== */}
      <header className="absolute top-0 left-0 right-0 bg-[#F6F4EE] w-full z-40 py-[1.4vw] flex items-center">
        <div className="w-full px-6 md:px-12 lg:px-[5vw] flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/part-1" className="relative h-[48px] sm:h-[60px] lg:h-[75px] w-[180px] sm:w-[220px] lg:w-[257px] flex-shrink-0 block">
            <Image
              src="/assets/conejo/Conejo_Valley_Counseling_Logo.png"
              alt="Conejo Valley Family Counseling"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Right Section: Desktop Navigation Links + Contact CTA */}
          <div className="hidden lg:flex items-center gap-[48px]">
            <nav
              aria-label="Desktop primary navigation"
              className="flex items-center gap-[48px] f-small font-sans-nav font-normal tracking-[.1em] uppercase text-[#2B2B2B]"
            >
              {/* About */}
              <div
                className="relative py-2 group cursor-pointer"
                onMouseEnter={() => setActiveDropdown("about")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="hover:text-[#86B3B3] transition-colors">
                  About
                </span>
                {activeDropdown === "about" && (
                  <div className="absolute top-full left-0 w-64 bg-[#F6F4EE] border border-[#E3D9CA] shadow-md py-2 z-50 text-[0.8rem] tracking-normal normal-case">
                    {teamMembers.map((member) => (
                      <span
                        key={member}
                        className="block px-4 py-2 hover:bg-[#E3D9CA]/50 hover:text-[#2B2B2B] transition-colors cursor-pointer text-[#444]"
                      >
                        {member}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Our Team */}
              <div
                className="relative py-2 group cursor-pointer"
                onMouseEnter={() => setActiveDropdown("team")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="hover:text-[#86B3B3] transition-colors">
                  Our Team
                </span>
                {activeDropdown === "team" && (
                  <div className="absolute top-full left-0 w-64 bg-[#F6F4EE] border border-[#E3D9CA] shadow-md py-2 z-50 text-[0.8rem] tracking-normal normal-case">
                    {teamMembers.map((member) => (
                      <span
                        key={member}
                        className="block px-4 py-2 hover:bg-[#E3D9CA]/50 hover:text-[#2B2B2B] transition-colors cursor-pointer text-[#444]"
                      >
                        {member}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Specialties */}
              <div
                className="relative py-2 group cursor-pointer"
                onMouseEnter={() => setActiveDropdown("specialties")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="hover:text-[#86B3B3] transition-colors">
                  Specialties
                </span>
                {activeDropdown === "specialties" && (
                  <div className="absolute top-full left-0 w-60 bg-[#F6F4EE] border border-[#E3D9CA] shadow-md py-2 z-50 text-[0.8rem] tracking-normal normal-case">
                    {specialtiesList.map((spec) => (
                      <span
                        key={spec}
                        className="block px-4 py-2 hover:bg-[#E3D9CA]/50 hover:text-[#2B2B2B] transition-colors cursor-pointer text-[#444]"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Methods */}
              <div
                className="relative py-2 group cursor-pointer"
                onMouseEnter={() => setActiveDropdown("methods")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="hover:text-[#86B3B3] transition-colors">
                  Methods
                </span>
                {activeDropdown === "methods" && (
                  <div className="absolute top-full left-0 w-56 bg-[#F6F4EE] border border-[#E3D9CA] shadow-md py-2 z-50 text-[0.8rem] tracking-normal normal-case">
                    {methodsList.map((method) => (
                      <span
                        key={method}
                        className="block px-4 py-2 hover:bg-[#E3D9CA]/50 hover:text-[#2B2B2B] transition-colors cursor-pointer text-[#444]"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              <span className="hover:text-[#86B3B3] transition-colors cursor-pointer">
                FAQs
              </span>
            </nav>

            {/* Desktop Right CTA Button */}
            <div className="flex-shrink-0">
              <a
                href="#appointment"
                className="conejo-btn-pill"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#2B2B2B] hover:bg-[#E3D9CA]/40 rounded-lg"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F6F4EE] border-b border-[#E3D9CA] px-6 py-6 space-y-4 absolute top-full left-0 w-full shadow-lg">
            <div className="flex flex-col space-y-3 font-sans-nav text-xs uppercase tracking-wider font-normal">
              <span className="py-2 border-b border-[#E3D9CA]/50">About</span>
              <span className="py-2 border-b border-[#E3D9CA]/50">Our Team</span>
              <span className="py-2 border-b border-[#E3D9CA]/50">Specialties</span>
              <span className="py-2 border-b border-[#E3D9CA]/50">Methods</span>
              <span className="py-2 border-b border-[#E3D9CA]/50">FAQs</span>
            </div>
            <div className="pt-2">
              <a
                href="#appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="conejo-btn-pill w-full text-center block"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================================
          SECTION 1: HERO (Authentic Squarespace Fluid Engine 24-Column Grid)
          Cols: 26 total (1 gutter + 24 cols + 1 gutter)
      ========================================================================== */}
      <section className="relative w-full bg-[#F6F4EE] overflow-hidden pt-[74px] sm:pt-[86px] lg:pt-[calc(75px+2.8vw)]">
        {/* Mobile View (<1024px) */}
        <div className="lg:hidden px-6 pt-6 pb-12 space-y-6 max-w-3xl mx-auto">
          <div className="relative aspect-[526/596] max-w-md mx-auto w-full overflow-hidden bg-[#E3D9CA]/30">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__2866_29.jpg"
              alt="Therapy in Newbury Park"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
            />
          </div>
          <div className="space-y-4">
            <p className="font-sans-nav f-eyebrow text-[#2B2B2B]">
              ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY<br className="hidden sm:inline" /> PARK &amp; ACROSS CA
            </p>
            <h1 className="font-serif-heading f-h1 text-[#2B2B2B]">
              Rebuild your foundation on<br className="hidden sm:inline" /> solid ground and finally<br className="hidden sm:inline" /> begin to <span className="font-script f-script text-[#86B3B3]">thrive.</span>
            </h1>
            <p className="font-body text-[16px] text-[#2B2B2B] font-light leading-relaxed">
              Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
            </p>
            <div>
              <a href="#appointment" className="conejo-btn-underline">
                BOOK AN APPOINTMENT
              </a>
            </div>
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid (>=1024px) */}
        <div className="hidden lg:grid sqs-fluid-grid-11" style={{ ["--row-count" as string]: 18 }}>
          {/* Left Image: 2 / 1 / 17 / 10 */}
          <div style={{ gridColumn: "1 / 10", gridRow: "2 / 17" }} className="fe-block relative overflow-hidden">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__2866_29.jpg"
              alt="Therapy in Newbury Park"
              fill
              sizes="35vw"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Eyebrow: 2 / 12 / 4 / 20 */}
          <div style={{ gridColumn: "12 / 20", gridRow: "2 / 4" }} className="fe-block">
            <p className="font-sans-nav f-eyebrow text-[#2B2B2B]">
              ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY PARK &amp; ACROSS CA
            </p>
          </div>

          {/* H1 Heading &amp; Paragraph: 7 / 12 / 15 / 24 */}
          <div style={{ gridColumn: "12 / 24", gridRow: "7 / 15" }} className="fe-block">
            <div className="fe-rte">
              <h1 className="font-serif-heading f-h1 text-[#2B2B2B]">
                Rebuild your foundation on solid ground and finally begin to{" "}
                <span className="font-script f-script text-[#86B3B3]">thrive.</span>
              </h1>
              <p className="font-body f-body text-[#2B2B2B]">
                Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
              </p>
            </div>
          </div>

          {/* Button CTA: 15 / 12 / 17 / 24 */}
          <div style={{ gridColumn: "12 / 24", gridRow: "15 / 17" }} className="fe-block items-start">
            <a href="#appointment" className="conejo-btn-underline">
              BOOK AN APPOINTMENT
            </a>
          </div>

          {/* Right Image: 7 / 25 / 17 / 27 */}
          <div style={{ gridColumn: "25 / 27", gridRow: "7 / 17" }} className="fe-block relative overflow-hidden">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__2867_29.jpg"
              alt="Child and family therapy"
              fill
              sizes="10vw"
              className="object-cover"
              style={{ objectPosition: "87.2951% 56.0035%" }}
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EMPATHY & NARRATIVE (Authentic 24-Column Grid)
          Cols: 26 total (1 gutter + 24 cols + 1 gutter)
      ========================================================================== */}
      <section className="w-full bg-[#F6F4EE] py-16 md:py-[7vmax] border-t border-[#E3D9CA]/40 overflow-hidden">
        {/* Mobile View */}
        <div className="lg:hidden px-6 space-y-6 max-w-3xl mx-auto">
          <h2 className="font-serif-heading f-h2 text-[#2B2B2B]">
            You’re holding onto hope that life can be better than it is right now.
          </h2>
          <p className="font-sans-nav f-caps text-[#2B2B2B]">
            At Conejo Valley Family Counseling we want to make that hope a reality.
          </p>
          <p className="font-body f-body text-[#2B2B2B]">
            Whether you're an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life’s ups and downs.
          </p>
          <p className="font-body f-body text-[#2B2B2B]">
            First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.
          </p>
          <div className="relative aspect-[462/580] max-w-md mx-auto w-full overflow-hidden bg-[#E3D9CA]/30">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__283_29.jpg"
              alt="Sandy beach with gentle ocean waves"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid */}
        <div className="hidden lg:grid sqs-fluid-grid-20" style={{ ["--row-count" as string]: 17 }}>
          {/* H2 Heading: 4 / 3 / 8 / 16 */}
          <div style={{ gridColumn: "3 / 16", gridRow: "4 / 8" }} className="fe-block">
            <h2 className="font-serif-heading f-h2 text-[#2B2B2B]">
              You’re holding onto hope that life can be better than it is right now.
            </h2>
          </div>

          {/* Col 1 Text: 9 / 3 / 16 / 10 */}
          <div style={{ gridColumn: "3 / 10", gridRow: "9 / 16" }} className="fe-block fe-top">
            <div className="fe-rte">
              <p className="font-sans-nav f-caps text-[#2B2B2B]">
                AT CONEJO VALLEY FAMILY COUNSELING WE WANT TO MAKE THAT HOPE A REALITY.
              </p>
              <p className="font-body f-body text-[#2B2B2B]">
                Whether you&apos;re an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life’s ups and downs.
              </p>
            </div>
          </div>

          {/* Col 2 Text: 9 / 10 / 17 / 17 */}
          <div style={{ gridColumn: "10 / 17", gridRow: "9 / 17" }} className="fe-block fe-top">
            <p className="font-body f-body text-[#2B2B2B]">
              First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.
            </p>
          </div>

          {/* Right Ocean Image: 1 / 19 / 17 / 27 */}
          <div style={{ gridColumn: "19 / 27", gridRow: "1 / 17" }} className="fe-block relative overflow-hidden">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__283_29.jpg"
              alt="Sandy beach with gentle ocean waves and a cloudy sky"
              fill
              sizes="31vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: WHO WE HELP (Authentic 24-Column Grid, Pure White #FFFFFF)
          Heading: Col 2 to 10, Row 1 to 3
          Cards: Col 5-12, 12-19, 19-26 (Notice: 3 empty columns on left!)
      ========================================================================== */}
      <section className="bg-white py-16 md:py-[6.6vmax] overflow-hidden">
        {/* Mobile View (<1024px) */}
        <div className="lg:hidden px-6 space-y-12 max-w-5xl mx-auto">
          <h2 className="font-serif-heading f-h2 text-[#2B2B2B]">
            Who we{" "}
            <span className="font-script f-script text-[#86B3B3]">
              help
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Column 1: Adults */}
            <div className="space-y-4">
              <div className="relative aspect-[373/424] w-full overflow-hidden bg-neutral-100 mb-4">
                <Image
                  src="/assets/conejo/Jennifer_A_-_Images__288_29.jpg"
                  alt="Two people sitting on a log at the beach"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
              <h3 className="font-serif-heading f-h4 text-[#2B2B2B]">
                Adults
              </h3>
              <p className="font-body f-body text-[#2B2B2B]">
                Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.
              </p>
            </div>

            {/* Column 2: Couples */}
            <div className="space-y-4">
              <div className="relative aspect-[373/424] w-full overflow-hidden bg-neutral-100 mb-4">
                <Image
                  src="/assets/conejo/Jennifer_A_-_Images__289_29.jpg"
                  alt="A couple embracing on the beach"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
              <h3 className="font-serif-heading f-h4 text-[#2B2B2B]">
                Couples
              </h3>
              <p className="font-body f-body text-[#2B2B2B]">
                Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.
              </p>
            </div>

            {/* Column 3: Children & Teens */}
            <div className="space-y-4">
              <div className="relative aspect-[373/424] w-full overflow-hidden bg-neutral-100 mb-4">
                <Image
                  src="/assets/conejo/Jennifer_A_-_Images__2810_29.jpg"
                  alt="A boy carrying a girl on a beach"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
              <h3 className="font-serif-heading f-h4 text-[#2B2B2B]">
                Children &amp; Teens
              </h3>
              <p className="font-body f-body text-[#2B2B2B]">
                Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid (>=1024px) */}
        <div className="hidden lg:grid sqs-fluid-grid-20" style={{ ["--row-count" as string]: 21 }}>
          {/* Heading: 1 / 2 / 3 / 10 */}
          <div style={{ gridColumn: "2 / 10", gridRow: "1 / 3" }} className="fe-block">
            <h2 className="font-serif-heading f-h2 text-[#2B2B2B]">
              Who we{" "}
              <span className="font-script f-script text-[#86B3B3]">
                help
              </span>
            </h2>
          </div>

          {/* Card 1 (Adults) Photo: 4 / 5 / 15 / 12 */}
          <div style={{ gridColumn: "5 / 12", gridRow: "4 / 15" }} className="fe-block relative overflow-hidden">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__288_29.jpg"
              alt="Two people sitting on a log at the beach"
              fill
              sizes="26vw"
              className="object-cover object-center"
            />
          </div>

          {/* Card 1 (Adults) Text: 16 / 5 / 21 / 12 */}
          <div style={{ gridColumn: "5 / 12", gridRow: "16 / 21" }} className="fe-block fe-top">
            <div className="fe-rte">
              <h4 className="font-serif-heading f-h4 text-[#2B2B2B]">
                Adults
              </h4>
              <p className="font-body f-body text-[#2B2B2B]">
                Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.
              </p>
            </div>
          </div>

          {/* Card 2 (Couples) Photo: 4 / 12 / 15 / 19 */}
          <div style={{ gridColumn: "12 / 19", gridRow: "4 / 15" }} className="fe-block relative overflow-hidden">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__289_29.jpg"
              alt="A couple embracing on the beach"
              fill
              sizes="26vw"
              className="object-cover object-center"
            />
          </div>

          {/* Card 2 (Couples) Text: 16 / 12 / 22 / 19 */}
          <div style={{ gridColumn: "12 / 19", gridRow: "16 / 22" }} className="fe-block fe-top">
            <div className="fe-rte">
              <h4 className="font-serif-heading f-h4 text-[#2B2B2B]">
                Couples
              </h4>
              <p className="font-body f-body text-[#2B2B2B]">
                Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.
              </p>
            </div>
          </div>

          {/* Card 3 (Children & Teens) Photo: 4 / 19 / 15 / 26 */}
          <div style={{ gridColumn: "19 / 26", gridRow: "4 / 15" }} className="fe-block relative overflow-hidden">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__2810_29.jpg"
              alt="A boy carrying a girl on a beach"
              fill
              sizes="26vw"
              className="object-cover object-center"
            />
          </div>

          {/* Card 3 (Children & Teens) Text: 16 / 19 / 22 / 26 */}
          <div style={{ gridColumn: "19 / 26", gridRow: "16 / 22" }} className="fe-block fe-top">
            <div className="fe-rte">
              <h4 className="font-serif-heading f-h4 text-[#2B2B2B]">
                Children &amp; Teens
              </h4>
              <p className="font-body f-body text-[#2B2B2B]">
                Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: QUOTE BANNER (Full-bleed beach image background)
          Fluid Grid: cols 3 to 19, rows 5 to 11
      ========================================================================== */}
      <section className="relative py-20 md:py-[6.6vmax] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/conejo/Jennifer_A_-_Images__282_29.png"
            alt="Warm calming ocean backdrop"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/35" />
        </div>

        {/* Mobile View */}
        <div className="lg:hidden relative z-10 px-6 py-12 text-center text-white max-w-3xl mx-auto">
          <blockquote className="font-serif-heading f-h2 text-[#F6F4EE]">
            You deserve a place where your story is heard, valued, and understood.{" "}
            <em className="font-light italic text-[#F6F4EE]">
              Nothing will be too heavy for us to carry together.
            </em>
          </blockquote>
        </div>

        {/* Desktop 24-Column Fluid Grid */}
        <div className="hidden lg:grid sqs-fluid-grid-11 relative z-10" style={{ ["--row-count" as string]: 10 }}>
          {/* Quote: 5 / 3 / 11 / 19 */}
          <div style={{ gridColumn: "3 / 19", gridRow: "5 / 11" }} className="fe-block fe-bottom">
            <h2 className="font-serif-heading f-h2 text-[#F6F4EE]">
              You deserve a place where your story is heard, valued, and understood. Nothing will be too heavy for us to carry together.
            </h2>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: OUR AREAS OF EXPERTISE (Pure White #FFFFFF)
          Title: cols 3 to 9, rows 1 to 4
          Left List: cols 10 to 18, rows 1 to 13
          Right List: cols 18 to 26, rows 1 to 13
      ========================================================================== */}
      <section className="bg-white py-16 md:py-[8vmax] overflow-hidden">
        {/* Mobile View */}
        <div className="lg:hidden px-6 space-y-8 max-w-4xl mx-auto">
          <h3 className="font-serif-heading f-h3 text-[#2B2B2B]">
          Our areas of
            <br />
            <span className="font-script f-script text-[#86B3B3]">
              expertise
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8 space-y-0">
            {[
              "DISSOCIATION",
              "TRAUMA",
              "FAMILY CONFLICT",
              "SPECIAL NEEDS PARENTING",
              "DEPRESSION",
              "MARRIAGE",
              "ANXIETY",
              "RELATIONSHIPS",
              "CHILDREN",
              "TEENS",
              "INTIMACY & CONNECTION",
              "…AND MORE.",
            ].map((item) => (
              <div
                key={item}
                className="py-3.5 text-[15px] font-sans-nav font-normal uppercase tracking-[1.8px] text-[#2B2B2B] border-b border-[#E3D9CA]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid */}
        <div className="hidden lg:grid sqs-fluid-grid-11" style={{ ["--row-count" as string]: 12 }}>
          {/* Title: 1 / 3 / 4 / 9 */}
          <div style={{ gridColumn: "3 / 9", gridRow: "1 / 4" }} className="fe-block fe-top">
            <h3 className="font-serif-heading f-h3 text-[#2B2B2B]">
              Our areas of{" "}
              <span className="font-script f-script text-[#86B3B3]">
                expertise
              </span>
            </h3>
          </div>

          {/* Two columns of terms; each term is a 2-row block, each divider a 1-row
              block one column narrower — matching the reference block-for-block. */}
          {[
            { col: "10 / 18", rule: "10 / 17", items: ["DISSOCIATION", "TRAUMA", "FAMILY CONFLICT", "SPECIAL NEEDS PARENTING", "DEPRESSION", "MARRIAGE"] },
            { col: "18 / 26", rule: "18 / 25", items: ["ANXIETY", "RELATIONSHIPS", "CHILDREN", "TEENS", "INTIMACY & CONNECTION", "…AND MORE."] },
          ].flatMap(({ col, rule, items }) =>
            items.flatMap((item, idx) => {
              const row = idx * 2 + 1;
              const nodes = [
                <div
                  key={item}
                  style={{ gridColumn: col, gridRow: `${row} / ${row + 2}` }}
                  className="fe-block fe-top"
                >
                  <p className="font-sans-nav f-caps text-[#2B2B2B]">{item}</p>
                </div>,
              ];
              // No rule after the last term in a column
              if (idx < items.length - 1) {
                nodes.push(
                  <div
                    key={`${item}-rule`}
                    style={{ gridColumn: rule, gridRow: `${row + 1} / ${row + 2}` }}
                    className="fe-block"
                  >
                    <hr className="h-px w-full border-0 bg-[#E3D9CA]/50" />
                  </div>
                );
              }
              return nodes;
            })
          )}
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: HOW WE WORK (Warm Tan Accent #E3D9CA)
          Eyebrow: cols 3 to 15, rows 4 to 6
          Heading: cols 3 to 20, rows 8 to 10
          Image: cols 21 to 27 (flush right edge), rows 4 to 22
          Text 1: cols 3 to 11, rows 11 to 20
          Text 2: cols 11 to 19, rows 11 to 20
          Button: cols 3 to 19, rows 21 to 23
      ========================================================================== */}
      <section className="w-full bg-[#E3D9CA] py-12 md:py-0 overflow-hidden">
        {/* Mobile View */}
        <div className="lg:hidden px-6 py-16 space-y-6 max-w-3xl mx-auto">
          <p className="font-sans-nav f-eyebrow text-[#2B2B2B]">
            HOW WE WORK
          </p>
          <h2 className="font-serif-heading f-h2 text-[#2B2B2B]">
            We’re here to make a difference.
          </h2>
          <div className="relative aspect-[3/4] max-w-md mx-auto w-full overflow-hidden bg-[#E3D9CA]/30">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__286_29.jpg"
              alt="A woman and a child in white dresses dancing on a sandy beach"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="space-y-4 text-[16px] font-body font-light text-[#2B2B2B] leading-relaxed">
            <p className="font-sans-nav f-caps text-[#2B2B2B]">
              The clients we work with are balancing so many things at once, it’s often hard for them to put themselves first.
            </p>
            <p>
              Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won’t find anything “one-size-fits-all” here.) If you’re ready to do the work, we’re ready to help.
            </p>
            <p>
              Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you’ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what’s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.
            </p>
          </div>
          <div>
            <a href="#about" className="conejo-btn-underline">
              LEARN MORE ABOUT US
            </a>
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid */}
        <div className="hidden lg:grid sqs-fluid-grid-20" style={{ ["--row-count" as string]: 24 }}>
          {/* Eyebrow: 4 / 3 / 6 / 15 */}
          <div style={{ gridColumn: "3 / 15", gridRow: "4 / 6" }} className="fe-block fe-top">
            <p className="font-sans-nav f-eyebrow text-[#2B2B2B]">
              HOW WE WORK
            </p>
          </div>

          {/* H2 Heading: 8 / 3 / 10 / 20 */}
          <div style={{ gridColumn: "3 / 20", gridRow: "8 / 10" }} className="fe-block">
            <h2 className="font-serif-heading f-h2 text-[#2B2B2B]">
              We’re here to make a difference.
            </h2>
          </div>

          {/* Right Image: 4 / 21 / 22 / 27 */}
          <div style={{ gridColumn: "21 / 27", gridRow: "4 / 22" }} className="fe-block relative overflow-hidden">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__286_29.jpg"
              alt="A woman and a child in white dresses dancing on a sandy beach"
              fill
              sizes="23vw"
              className="object-cover"
              style={{ objectPosition: "21.6259% 45.6029%" }}
            />
          </div>

          {/* Paragraph Col 1: 11 / 3 / 20 / 11 */}
          <div style={{ gridColumn: "3 / 11", gridRow: "11 / 20" }} className="fe-block fe-top">
            <div className="fe-rte">
              <p className="font-sans-nav f-caps text-[#2B2B2B]">
                The clients we work with are balancing so many things at once, it’s often hard for them to put themselves first.
              </p>
              <p className="font-body f-body text-[#2B2B2B]">
                Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won’t find anything “one-size-fits-all” here.) If you’re ready to do the work, we’re ready to help.
              </p>
            </div>
          </div>

          {/* Paragraph Col 2: 11 / 11 / 20 / 19 */}
          <div style={{ gridColumn: "11 / 19", gridRow: "11 / 20" }} className="fe-block fe-top">
            <p className="font-body f-body text-[#2B2B2B]">
              Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you’ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what’s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.
            </p>
          </div>

          {/* Button: 21 / 3 / 23 / 19 */}
          <div style={{ gridColumn: "3 / 19", gridRow: "21 / 23" }} className="fe-block fe-top items-start">
            <a href="#about" className="conejo-btn-underline">
              LEARN MORE ABOUT US
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: SECONDARY AFFIRMATION BANNER (Pure White #FFFFFF)
          Image: cols 1 to 15 (flush left edge), rows 1 to 15
          Text: cols 15 to 27, rows 9 to 15
      ========================================================================== */}
      <section className="bg-white py-16 md:py-[6.6vmax] overflow-hidden">
        {/* Mobile View */}
        <div className="lg:hidden space-y-6 max-w-4xl mx-auto">
          <div className="relative aspect-[16/10] max-w-3xl mx-auto w-full overflow-hidden bg-neutral-100">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__285_29.jpg"
              alt="Family of four standing on a beach, holding hands, facing the ocean at sunset"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="px-6 pb-12 space-y-4">
            <h2 className="font-serif-heading f-h2 text-[#2B2B2B]">
              Honoring where you’ve<br className="hidden sm:inline" />
              been{" "}
              <span className="font-script f-script text-[#86B3B3]">
                &amp;
              </span>{" "}
              helping shape<br className="hidden sm:inline" />
              where you’re headed.
            </h2>
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid */}
        <div className="hidden lg:grid sqs-fluid-grid-11" style={{ ["--row-count" as string]: 14 }}>
          {/* Left Image: 1 / 1 / 15 / 15 */}
          <div style={{ gridColumn: "1 / 15", gridRow: "1 / 15" }} className="fe-block relative overflow-hidden">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__285_29.jpg"
              alt="Family of four standing on a beach, holding hands, facing the ocean at sunset"
              fill
              sizes="54vw"
              className="object-cover object-center"
            />
          </div>

          {/* Quote Text: 9 / 16 / 15 / 26 */}
          <div style={{ gridColumn: "16 / 26", gridRow: "9 / 15" }} className="fe-block fe-bottom">
            <h2 className="font-serif-heading f-h2 text-[#2B2B2B]">
              Honoring where you’ve been{" "}
              <span className="font-script f-script text-[#86B3B3]">
                &amp;
              </span>{" "}
              helping shape where you’re headed.
            </h2>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: OUR SPECIALTIES INCLUDE… (Pure White #FFFFFF)
          Title: cols 3 to 10, rows 3 to 7
          Col 1 (Trauma): cols 11 to 18, rows 4 to 14
          Col 1 (Dissociation): cols 11 to 18, rows 15 to 25
          Col 2 (EMDR): cols 19 to 26, rows 4 to 14
          Col 2 (Special Needs Parenting): cols 19 to 26, rows 15 to 25
      ========================================================================== */}
      <section className="bg-white border-t border-[#E3D9CA]/40 overflow-hidden">
        {/* Mobile View */}
        <div className="lg:hidden px-6 py-16 space-y-10 max-w-5xl mx-auto">
          <h3 className="font-serif-heading f-h3 text-[#2B2B2B]">
            Our{" "}
            <span className="font-script f-script text-[#86B3B3]">
              specialties
            </span>
            <br />
            include…
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="font-serif-heading f-h4 text-[#2B2B2B]">Trauma</h3>
              <p className="font-body f-body text-[#2B2B2B]">
                We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.
              </p>
              <div>
                <a href="#specialties" className="conejo-btn-underline">LEARN MORE</a>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-serif-heading f-h4 text-[#2B2B2B]">Dissociation</h3>
              <p className="font-body f-body text-[#2B2B2B]">
                The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.
              </p>
              <div>
                <a href="#specialties" className="conejo-btn-underline">LEARN MORE</a>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-serif-heading f-h4 text-[#2B2B2B]">EMDR</h3>
              <p className="font-body f-body text-[#2B2B2B]">
                Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.
              </p>
              <div>
                <a href="#specialties" className="conejo-btn-underline">LEARN MORE</a>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-serif-heading f-h4 text-[#2B2B2B]">Special Needs Parenting</h3>
              <p className="font-body f-body text-[#2B2B2B]">
                Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.
              </p>
              <div>
                <a href="#specialties" className="conejo-btn-underline">LEARN MORE</a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid */}
        <div className="hidden lg:grid sqs-fluid-grid-11" style={{ ["--row-count" as string]: 25 }}>
          {/* Title: 3 / 3 / 7 / 10 — reference authors a double space after
              "Our", which white-space: pre-wrap preserves and which is what
              breaks this heading onto two lines. */}
          <div style={{ gridColumn: "3 / 10", gridRow: "3 / 7" }} className="fe-block">
            <h3 className="font-serif-heading f-h3 text-[#2B2B2B]">
              Our{"  "}
              <span className="font-script f-script text-[#86B3B3]">
                specialties
              </span>{" "}
              include…
            </h3>
          </div>

          {/* Each specialty is a text block plus a separate button block below it,
              exactly as the reference lays them out. */}
          {[
            {
              title: "Trauma",
              col: "11 / 18",
              row: "4 / 11",
              btnRow: "11 / 13",
              body: "We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.",
            },
            {
              title: "Dissociation",
              col: "11 / 18",
              row: "15 / 22",
              btnRow: "22 / 24",
              body: "The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.",
            },
            {
              title: "EMDR",
              col: "19 / 26",
              row: "4 / 11",
              btnRow: "11 / 13",
              body: "Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.",
            },
            {
              title: "Special Needs Parenting",
              col: "19 / 26",
              row: "15 / 22",
              btnRow: "22 / 24",
              body: "Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.",
            },
          ].flatMap(({ title, col, row, btnRow, body }) => [
            <div
              key={title}
              style={{ gridColumn: col, gridRow: row }}
              className="fe-block fe-top"
            >
              <div className="fe-rte">
                <h4 className="font-serif-heading f-h4 text-[#2B2B2B]">{title}</h4>
                <p className="font-body f-body text-[#2B2B2B]">{body}</p>
              </div>
            </div>,
            <div
              key={`${title}-cta`}
              style={{ gridColumn: col, gridRow: btnRow }}
              className="fe-block fe-top items-start"
            >
              <a href="#specialties" className="conejo-btn-underline">
                LEARN MORE
              </a>
            </div>,
          ])}
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: SCHEDULE AN APPOINTMENT (Flanked by edge-anchored photos)
          Left Photo: cols 1 to 4 (flush left), rows 4 to 16
          Center: cols 6 to 16, rows 1 to 16
          Right Photo: cols 18 to 27 (flush right), rows 1 to 16
      ========================================================================== */}
      <section id="appointment" className="w-full bg-[#F6F4EE] py-16 md:py-[6.6vmax] overflow-hidden">
        {/* Mobile View */}
        <div className="lg:hidden px-6 space-y-6 text-left max-w-3xl mx-auto">
          <p className="font-sans-nav f-eyebrow text-[#2B2B2B]">
            SCHEDULE AN APPOINTMENT
          </p>
          <h2 className="font-serif-heading f-h2 text-[#2B2B2B]">
            Find a therapist who is the right fit for{"  "}<span className="font-script f-script text-[#86B3B3]">you</span>.
          </h2>
          <div className="relative aspect-[3/4] max-w-md mx-auto w-full overflow-hidden bg-[#E3D9CA]/30">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__2811_29.jpg"
              alt="A person in a striped dress pointing at shells on the sandy beach"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="space-y-4 font-body f-body text-[#2B2B2B]">
            <p>
              Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we're here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
            </p>
            <p className="font-body f-body text-[#2B2B2B]">
              Click the button below to schedule an appointment.
            </p>
          </div>
          <div className="pt-2">
            <a
              href="#contact"
              className="conejo-btn-pill"
            >
              BOOK NOW
            </a>
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid */}
        <div className="hidden lg:grid sqs-fluid-grid-11" style={{ ["--row-count" as string]: 16 }}>
          {/* Left Photo: 4 / 1 / 16 / 4 */}
          <div style={{ gridColumn: "1 / 4", gridRow: "4 / 16" }} className="fe-block relative overflow-hidden">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__2812_29.jpg"
              alt="A person picking up seashells on a sandy beach"
              fill
              sizes="12vw"
              className="object-cover object-center"
            />
          </div>

          {/* Eyebrow: 1 / 6 / 3 / 16 */}
          <div style={{ gridColumn: "6 / 16", gridRow: "1 / 3" }} className="fe-block fe-top">
            <p className="font-sans-nav f-eyebrow text-[#2B2B2B]">
              SCHEDULE AN APPOINTMENT
            </p>
          </div>

          {/* H2 Heading: 4 / 6 / 8 / 16 */}
          <div style={{ gridColumn: "6 / 16", gridRow: "4 / 8" }} className="fe-block fe-top">
            <h2 className="font-serif-heading f-h2 text-[#2B2B2B]">
              Find a therapist who is the right fit for{" "}
              <span className="font-script f-script text-[#86B3B3]">you.</span>
            </h2>
          </div>

          {/* Body text: 8 / 6 / 14 / 16 */}
          <div style={{ gridColumn: "6 / 16", gridRow: "8 / 14" }} className="fe-block fe-top">
            <div className="fe-rte">
              <p className="font-body f-body text-[#2B2B2B]">
                Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we&apos;re here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
              </p>
              <p className="font-body f-body text-[#2B2B2B]">
                Click the button below to schedule an appointment.
              </p>
            </div>
          </div>

          {/* CTA Button: 14 / 6 / 16 / 16 */}
          <div style={{ gridColumn: "6 / 16", gridRow: "14 / 16" }} className="fe-block items-start">
            <a href="#contact" className="conejo-btn-pill">
              BOOK NOW
            </a>
          </div>

          {/* Right Photo: 1 / 18 / 16 / 27 */}
          <div style={{ gridColumn: "18 / 27", gridRow: "1 / 16" }} className="fe-block relative overflow-hidden">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__2811_29.jpg"
              alt="A person in a striped dress pointing at shells on the sandy beach"
              fill
              sizes="35vw"
              className="object-cover"
              style={{ objectPosition: "62.8568% 52.8033%" }}
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: FOOTER (Pure White #FFFFFF)
          Logo & Intro: cols 2 to 10, rows 1 to 10
          Navigate: cols 12 to 16, rows 1 to 10
          Our Team: cols 16 to 21, rows 1 to 10
          Contact: cols 21 to 26, rows 1 to 10
      ========================================================================== */}
      <footer id="contact" className="bg-white py-16 md:py-[4.5vmax] border-t border-[#E3D9CA]/50 overflow-hidden">
        {/* Mobile View */}
        <div className="lg:hidden px-6 space-y-10 max-w-5xl mx-auto sm:grid sm:grid-cols-2 sm:gap-8 sm:space-y-0">
          <div className="space-y-4">
            <div className="relative h-[60px] w-[240px]">
              <Image
                src="/assets/conejo/Conejo_Valley_Counseling_Logo.png"
                alt="Conejo Valley Family Counseling"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="font-body f-body text-[#2B2B2B]">
              We want to make getting started simple. You’re welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-sans-nav f-eyebrow text-[#2B2B2B]">
              NAVIGATE
            </h4>
            <ul className="space-y-[10px] font-body f-foot text-[#2B2B2B]">
              <li><a href="#home" className="hover:text-[#86B3B3] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#86B3B3] transition-colors">About</a></li>
              <li><a href="#faqs" className="hover:text-[#86B3B3] transition-colors">FAQs</a></li>
              <li><a href="#contact" className="hover:text-[#86B3B3] transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-sans-nav f-eyebrow text-[#2B2B2B]">
              OUR TEAM
            </h4>
            <ul className="space-y-[6px] font-body f-foot text-[#2B2B2B]">
              {teamMembers.map((m) => (
                <li key={m}>
                  <a href="#team" className="hover:text-[#86B3B3] transition-colors">
                    {m.replace(/,.*$/, "")}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-sans-nav f-eyebrow text-[#2B2B2B]">
              CONTACT
            </h4>
            <div className="space-y-3 font-body f-foot text-[#2B2B2B]">
              <p>925 Broadbeck Dr<br />Suites 200 and 225<br />Newbury Park, CA 91320</p>
              <p>
                <a href="mailto:info@conejovalleycounseling.com" className="hover:text-[#86B3B3] transition-colors">
                  info@conejovalleycounseling.com
                </a>
              </p>
              <p>
                <a href="tel:8052423120" className="hover:text-[#86B3B3] transition-colors">
                  805.242.3120
                </a>
              </p>
              <p className="font-body f-foot text-[#2B2B2B] pt-1">
                Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, &amp; Simi Valley
              </p>
            </div>
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid */}
        <div className="hidden lg:grid sqs-fluid-grid-11" style={{ ["--row-count" as string]: 9 }}>
          {/* Logo: 1 / 2 / 5 / 9 */}
          <div style={{ gridColumn: "2 / 9", gridRow: "1 / 5" }} className="fe-block fe-top">
            <div className="relative w-full aspect-[492/144]">
              <Image
                src="/assets/conejo/Conejo_Valley_Counseling_Logo.png"
                alt="Conejo Valley Family Counseling"
                fill
                sizes="26vw"
                className="object-contain object-left"
              />
            </div>
          </div>

          {/* Warm intro: 4 / 2 / 9 / 10 — block carries the reference's
              --tweak-text-block-padding of 0% 6% */}
          <div style={{ gridColumn: "2 / 10", gridRow: "4 / 9" }} className="fe-block fe-top fe-pad-6">
            <p className="font-body f-body text-[#2B2B2B]">
              We want to make getting started simple. You’re welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.
            </p>
          </div>

          {/* Navigate: 1 / 12 / 6 / 16 */}
          <div style={{ gridColumn: "12 / 16", gridRow: "1 / 6" }} className="fe-block fe-top">
            <div className="fe-rte">
              <p className="font-sans-nav f-eyebrow text-[#2B2B2B]">Navigate</p>
              <p className="font-body f-foot text-[#2B2B2B]">
                <a href="#home" className="hover:text-[#86B3B3] transition-colors">Home</a>
                <br />
                <a href="#about" className="hover:text-[#86B3B3] transition-colors">About</a>
                <br />
                <a href="#faqs" className="hover:text-[#86B3B3] transition-colors">FAQs</a>
                <br />
                <a href="#contact" className="hover:text-[#86B3B3] transition-colors">Contact</a>
              </p>
            </div>
          </div>

          {/* Our Team: 1 / 16 / 10 / 21 */}
          <div style={{ gridColumn: "16 / 21", gridRow: "1 / 10" }} className="fe-block fe-top">
            <div className="fe-rte">
              <p className="font-sans-nav f-eyebrow text-[#2B2B2B]">Our Team</p>
              <p className="font-body f-foot text-[#2B2B2B]">
                {teamMembers.map((m, i) => (
                  <Fragment key={m}>
                    {i > 0 && <br />}
                    <a href="#team" className="hover:text-[#86B3B3] transition-colors">
                      {m.replace(/,.*$/, "")}
                    </a>
                  </Fragment>
                ))}
              </p>
            </div>
          </div>

          {/* Contact: 1 / 21 / 10 / 26 */}
          <div style={{ gridColumn: "21 / 26", gridRow: "1 / 10" }} className="fe-block fe-top">
            <div className="fe-rte">
              <p className="font-sans-nav f-eyebrow text-[#2B2B2B]">Contact</p>
              <p className="font-body f-foot text-[#2B2B2B]">
                925 Broadbeck Dr
                <br />
                Suites 200 and 225
                <br />
                Newbury Park, CA 91320
                <br />
                <a
                  href="mailto:info@conejovalleycounseling.com"
                  className="hover:text-[#86B3B3] transition-colors"
                >
                  info@conejovalleycounseling.com
                </a>
                <br />
                <a href="tel:8052423120" className="hover:text-[#86B3B3] transition-colors">
                  805.242.3120
                </a>
              </p>
              <p className="font-body f-foot italic text-[#2B2B2B]">
                Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, &amp; Simi Valley
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* =========================================================================
          SECTION 11: SUB-FOOTER LEGAL BAR (Teal Accent #86B3B3 with white text)
      ========================================================================== */}
      <div className="bg-[#86B3B3] text-white py-3 md:py-[0.5vmax]">
        <div className="lg:hidden px-6 font-body f-foot text-center sm:text-left">
          Terms | Privacy Policy | Disclaimer | Website by Walker Strategy Co.
        </div>
        <div className="hidden lg:grid sqs-fluid-grid-11" style={{ ["--row-count" as string]: 1 }}>
          {/* Legal: 1 / 2 / 2 / 26 — --tweak-text-block-padding of 0% 2% */}
          <div style={{ gridColumn: "2 / 26", gridRow: "1 / 2" }} className="fe-block fe-pad-2">
            <p className="font-body f-foot">Terms | Privacy Policy | Disclaimer | Website by Walker Strategy Co.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
