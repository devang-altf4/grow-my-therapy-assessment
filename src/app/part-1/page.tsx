"use client";

import { useState } from "react";
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
      <header className="relative bg-[#F6F4EE] w-full z-40 h-[118px] flex items-center">
        <div className="w-full px-6 md:px-12 lg:px-[76px] flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/part-1" className="relative h-[75px] w-[257px] flex-shrink-0 block">
            <Image
              src="/assets/conejo/Conejo_Valley_Counseling_Logo.png"
              alt="Conejo Valley Family Counseling"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Right Section: Desktop Navigation Links + Contact CTA */}
          <div className="hidden lg:flex items-center gap-[38px]">
            <nav
              aria-label="Desktop primary navigation"
              className="flex items-center gap-[38px] text-[13.17px] font-sans-nav font-normal tracking-[1.32px] uppercase text-[#2B2B2B]"
            >
              {/* About */}
              <div
                className="relative py-2 group cursor-pointer"
                onMouseEnter={() => setActiveDropdown("about")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="hover:text-[#86B3B3] transition-colors nav-link-item">
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
                <span className="hover:text-[#86B3B3] transition-colors nav-link-item">
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
                <span className="hover:text-[#86B3B3] transition-colors nav-link-item">
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
                <span className="hover:text-[#86B3B3] transition-colors nav-link-item">
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

              <span className="hover:text-[#86B3B3] transition-colors cursor-pointer nav-link-item">
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
          <div className="lg:hidden bg-[#F6F4EE] border-b border-[#E3D9CA] px-6 py-6 space-y-4 absolute top-[118px] left-0 w-full shadow-lg">
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
      <section className="relative w-full bg-[#F6F4EE] overflow-hidden">
        {/* Mobile View (<768px) */}
        <div className="md:hidden px-6 pt-6 pb-12 space-y-6">
          <div className="relative aspect-[526/596] w-full overflow-hidden bg-[#E3D9CA]/30">
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
            <p className="font-sans-nav text-[13px] font-normal tracking-[1.8px] uppercase text-[#2B2B2B]">
              ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY<br />PARK &amp; ACROSS CA
            </p>
            <h1 className="font-serif-heading text-[36px] font-light text-[#2B2B2B] leading-[1.18] tracking-[-0.625px]">
              Rebuild your foundation on<br />solid ground and finally<br />begin to <span className="font-script text-[48px] text-[#86B3B3]">thrive.</span>
            </h1>
            <p className="font-body text-[16px] text-[#2B2B2B] font-light">
              Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
            </p>
            <div>
              <a href="#appointment" className="conejo-btn-underline text-[12.26px] tracking-[1.47px]">
                BOOK AN APPOINTMENT
              </a>
            </div>
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid (>=768px) */}
        <div className="hidden md:grid sqs-fluid-grid-11" style={{ minHeight: "560px" }}>
          {/* Left Image: col 1 to 10 (flush to left edge), row 2 to 17 */}
          <div style={{ gridColumn: "1 / 10", gridRow: "2 / 17" }} className="relative w-full h-full min-h-[520px]">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__2866_29.jpg"
              alt="Therapy in Newbury Park"
              fill
              sizes="(max-width: 1024px) 45vw, 36vw"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Eyebrow: col 12 to 20, row 2 to 4 */}
          <div style={{ gridColumn: "12 / 20", gridRow: "2 / 4" }} className="flex items-end pb-2">
            <p className="font-sans-nav text-[14px] lg:text-[15px] font-normal tracking-[1.8px] uppercase text-[#2B2B2B] leading-[26px]">
              ONLINE &amp; IN-PERSON COUNSELING IN NEWBURY
              <br />
              PARK &amp; ACROSS CA
            </p>
          </div>

          {/* H1 Heading & Paragraph: col 12 to 25, row 7 to 15 */}
          <div style={{ gridColumn: "12 / 25", gridRow: "7 / 15" }} className="flex flex-col justify-center space-y-4">
            <h1 className="font-serif-heading text-[38px] lg:text-[50px] xl:text-[62.5px] font-light text-[#2B2B2B] leading-[1.18] tracking-[-0.625px]">
              <span className="inline-block whitespace-nowrap">Rebuild your foundation on</span>
              <br />
              <span className="inline-block whitespace-nowrap">solid ground and finally</span>
              <br />
              <span className="inline-block whitespace-nowrap">
                begin to{" "}
                <span className="font-script text-[62.5px] text-[#86B3B3] font-light inline-block ml-1">
                  thrive.
                </span>
              </span>
            </h1>
            <p className="font-body text-[16.8px] text-[#2B2B2B] font-light leading-[30.3px] max-w-2xl">
              Specialized therapy for adults, couples, teens, and children to reflect, heal, and grow.
            </p>
          </div>

          {/* Button CTA: col 12 to 24, row 15 to 17 */}
          <div style={{ gridColumn: "12 / 24", gridRow: "15 / 17" }} className="pt-2">
            <a
              href="#appointment"
              className="conejo-btn-underline text-[12.26px] tracking-[1.47px]"
            >
              BOOK AN APPOINTMENT
            </a>
          </div>

          {/* Right Image: col 25 to 27 (flush to right edge), row 7 to 17 */}
          <div style={{ gridColumn: "25 / 27", gridRow: "7 / 17" }} className="relative w-full h-full min-h-[380px]">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__2867_29.jpg"
              alt="Child and family therapy"
              fill
              sizes="130px"
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
      <section className="w-full bg-[#F6F4EE] py-16 lg:py-24 border-t border-[#E3D9CA]/40 overflow-hidden">
        {/* Mobile View */}
        <div className="md:hidden px-6 space-y-6">
          <h2 className="font-serif-heading text-[30px] font-light text-[#2B2B2B] leading-[1.24]">
            You’re holding onto hope that life can be better than it is right now.
          </h2>
          <p className="font-serif-heading text-[18px] font-normal italic text-[#2B2B2B] leading-snug">
            At Conejo Valley Family Counseling we want to make that hope a reality.
          </p>
          <p className="font-body text-[16px] font-light text-[#2B2B2B] leading-relaxed">
            Whether you're an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life’s ups and downs.
          </p>
          <p className="font-body text-[16px] font-light text-[#2B2B2B] leading-relaxed">
            First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.
          </p>
          <div className="relative aspect-[462/580] w-full overflow-hidden bg-[#E3D9CA]/30">
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
        <div className="hidden md:grid sqs-fluid-grid-20" style={{ minHeight: "560px" }}>
          {/* H2 Heading: col 3 to 16, row 4 to 8 */}
          <div style={{ gridColumn: "3 / 16", gridRow: "4 / 8" }} className="flex items-end pb-3">
            <h2 className="font-serif-heading text-[32px] sm:text-[42px] lg:text-[49.7px] font-light text-[#2B2B2B] leading-[1.24] tracking-tight">
              You’re holding onto hope that life can
              <br /> be better than it is right now.
            </h2>
          </div>

          {/* Col 1 Text: col 3 to 10, row 9 to 16 */}
          <div style={{ gridColumn: "3 / 10", gridRow: "9 / 16" }} className="space-y-4 pr-2">
            <p className="font-serif-heading text-[20px] lg:text-[22px] font-normal italic text-[#2B2B2B] leading-snug">
              At Conejo Valley Family Counseling we want to make that hope a reality.
            </p>
            <p className="font-body text-[16.8px] font-light text-[#2B2B2B] leading-[30.3px]">
              Whether you're an adult seeking personal growth, looking to work through your trauma, a couple working on your relationship, or a parent looking for support for your child, we provide a compassionate and safe space to help you navigate all of life’s ups and downs.
            </p>
          </div>

          {/* Col 2 Text: col 10 to 17, row 9 to 17 */}
          <div style={{ gridColumn: "10 / 17", gridRow: "9 / 17" }} className="space-y-3 px-2">
            <p className="font-body text-[16.8px] font-light text-[#2B2B2B] leading-[30.3px]">
              First and foremost, we believe what you’re going through is real, valid, and worthy of support. Our team offers clients in the Newbury Park area and across CA an environment to discover a new life and a deeper sense of self in the midst of their struggles. As we tap into the power of connection and understanding, you can find your footing again and take a transformative path forward.
            </p>
          </div>

          {/* Right Ocean Image: col 19 to 27 (flush to right edge!), row 1 to 17 */}
          <div style={{ gridColumn: "19 / 27", gridRow: "1 / 17" }} className="relative w-full h-full min-h-[500px]">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__283_29.jpg"
              alt="Sandy beach with gentle ocean waves and a cloudy sky"
              fill
              sizes="(max-width: 1024px) 35vw, 30vw"
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
      <section className="bg-white py-16 lg:py-24 overflow-hidden">
        {/* Mobile View (<768px) */}
        <div className="md:hidden px-6 space-y-12">
          <h2 className="font-serif-heading text-[36px] font-light text-[#2B2B2B] tracking-tight">
            Who we{" "}
            <span className="font-script text-[1.25em] text-[#86B3B3] font-normal ml-1">
              help
            </span>
          </h2>

          {/* Column 1: Adults */}
          <div className="space-y-4">
            <div className="relative aspect-[1105/1683] w-full overflow-hidden bg-neutral-100 mb-4">
              <Image
                src="/assets/conejo/Jennifer_A_-_Images__288_29.jpg"
                alt="Two people sitting on a log at the beach"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
            <h3 className="font-serif-heading text-[28px] font-light text-[#2B2B2B] tracking-tight">
              Adults
            </h3>
            <p className="font-body text-[16.8px] font-light text-[#2B2B2B] leading-[30.3px]">
              Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.
            </p>
          </div>

          {/* Column 2: Couples */}
          <div className="space-y-4">
            <div className="relative aspect-[1105/1683] w-full overflow-hidden bg-neutral-100 mb-4">
              <Image
                src="/assets/conejo/Jennifer_A_-_Images__289_29.jpg"
                alt="A couple embracing on the beach"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
            <h3 className="font-serif-heading text-[28px] font-light text-[#2B2B2B] tracking-tight">
              Couples
            </h3>
            <p className="font-body text-[16.8px] font-light text-[#2B2B2B] leading-[30.3px]">
              Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.
            </p>
          </div>

          {/* Column 3: Children & Teens */}
          <div className="space-y-4">
            <div className="relative aspect-[1105/1683] w-full overflow-hidden bg-neutral-100 mb-4">
              <Image
                src="/assets/conejo/Jennifer_A_-_Images__2810_29.jpg"
                alt="A boy carrying a girl on a beach"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
            <h3 className="font-serif-heading text-[28px] font-light text-[#2B2B2B] tracking-tight">
              Children &amp; Teens
            </h3>
            <p className="font-body text-[16.8px] font-light text-[#2B2B2B] leading-[30.3px]">
              Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.
            </p>
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid (>=768px) */}
        <div className="hidden md:grid sqs-fluid-grid-20" style={{ minHeight: "750px" }}>
          {/* Heading: col 2 to 10, row 1 to 3 */}
          <div style={{ gridColumn: "2 / 10", gridRow: "1 / 3" }} className="flex items-center">
            <h2 className="font-serif-heading text-[38px] sm:text-[49.7px] font-light text-[#2B2B2B] tracking-tight">
              Who we{" "}
              <span className="font-script text-[1.25em] text-[#86B3B3] font-normal ml-1">
                help
              </span>
            </h2>
          </div>

          {/* Card 1 (Adults) Photo: col 5 to 12, row 4 to 15 */}
          <div style={{ gridColumn: "5 / 12", gridRow: "4 / 15" }} className="relative w-full h-full min-h-[380px] overflow-hidden">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__288_29.jpg"
              alt="Two people sitting on a log at the beach"
              fill
              sizes="(max-width: 1024px) 30vw, 25vw"
              className="object-cover object-center"
            />
          </div>

          {/* Card 1 (Adults) Text: col 5 to 12, row 16 to 21 */}
          <div style={{ gridColumn: "5 / 12", gridRow: "16 / 21" }} className="space-y-3 pt-2">
            <h3 className="font-serif-heading text-[28px] font-light text-[#2B2B2B] tracking-tight">
              Adults
            </h3>
            <p className="font-body text-[16.8px] font-light text-[#2B2B2B] leading-[30.3px]">
              Feeling stuck or overwhelmed? We help adults find clarity, build resilience, and move forward with confidence by addressing the root causes of anxiety, stress, and emotional pain.
            </p>
          </div>

          {/* Card 2 (Couples) Photo: col 12 to 19, row 4 to 15 */}
          <div style={{ gridColumn: "12 / 19", gridRow: "4 / 15" }} className="relative w-full h-full min-h-[380px] overflow-hidden">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__289_29.jpg"
              alt="A couple embracing on the beach"
              fill
              sizes="(max-width: 1024px) 30vw, 25vw"
              className="object-cover object-center"
            />
          </div>

          {/* Card 2 (Couples) Text: col 12 to 19, row 16 to 22 */}
          <div style={{ gridColumn: "12 / 19", gridRow: "16 / 22" }} className="space-y-3 pt-2">
            <h3 className="font-serif-heading text-[28px] font-light text-[#2B2B2B] tracking-tight">
              Couples
            </h3>
            <p className="font-body text-[16.8px] font-light text-[#2B2B2B] leading-[30.3px]">
              Relationships require effort, and we’re here to help you strengthen yours. We guide couples through challenges like communication breakdowns and trust issues, helping you rebuild intimacy and strengthen your relationship.
            </p>
          </div>

          {/* Card 3 (Children & Teens) Photo: col 19 to 26, row 4 to 15 */}
          <div style={{ gridColumn: "19 / 26", gridRow: "4 / 15" }} className="relative w-full h-full min-h-[380px] overflow-hidden">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__2810_29.jpg"
              alt="A boy carrying a girl on a beach"
              fill
              sizes="(max-width: 1024px) 30vw, 25vw"
              className="object-cover object-center"
            />
          </div>

          {/* Card 3 (Children & Teens) Text: col 19 to 26, row 16 to 22 */}
          <div style={{ gridColumn: "19 / 26", gridRow: "16 / 22" }} className="space-y-3 pt-2">
            <h3 className="font-serif-heading text-[28px] font-light text-[#2B2B2B] tracking-tight">
              Children &amp; Teens
            </h3>
            <p className="font-body text-[16.8px] font-light text-[#2B2B2B] leading-[30.3px]">
              Kids need support, too. We help them process big emotions, cope with challenging family situations, build coping skills, and feel understood, while also working closely with their parents to create a nurturing environment.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: QUOTE BANNER (Full-bleed beach image background)
          Fluid Grid: cols 3 to 19, rows 5 to 11
      ========================================================================== */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
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
        <div className="md:hidden relative z-10 px-6 py-12 text-center text-white">
          <blockquote className="font-serif-heading text-2xl font-light text-[#F6F4EE] leading-[1.38] tracking-tight">
            You deserve a place where your story is heard, valued, and understood.{" "}
            <em className="font-light italic text-[#F6F4EE]">
              Nothing will be too heavy for us to carry together.
            </em>
          </blockquote>
        </div>

        {/* Desktop 24-Column Fluid Grid */}
        <div className="hidden md:grid sqs-fluid-grid-11 relative z-10" style={{ minHeight: "340px" }}>
          <div style={{ gridColumn: "3 / 19", gridRow: "5 / 11" }} className="flex items-center">
            <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-[42px] font-light text-[#F6F4EE] leading-[1.38] tracking-tight">
              You deserve a place where your story is heard, valued, and understood.{" "}
              <em className="font-light italic text-[#F6F4EE]">
                Nothing will be too heavy for us to carry together.
              </em>
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
      <section className="bg-white py-16 lg:py-24 overflow-hidden">
        {/* Mobile View */}
        <div className="md:hidden px-6 space-y-8">
          <h2 className="font-serif-heading text-3xl font-light text-[#2B2B2B] tracking-tight">
            Our areas of
            <br />
            <span className="font-script text-[1.3em] text-[#86B3B3] font-normal block mt-1">
              expertise
            </span>
          </h2>
          <div className="space-y-0">
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
                className="py-3.5 text-[14px] font-sans-nav font-normal uppercase tracking-[1.8px] text-[#2B2B2B] border-b border-[#E3D9CA]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid */}
        <div className="hidden md:grid sqs-fluid-grid-11" style={{ minHeight: "480px" }}>
          {/* Title: col 3 to 9, row 1 to 4 */}
          <div style={{ gridColumn: "3 / 9", gridRow: "1 / 4" }} className="flex items-start">
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-[49.7px] font-light text-[#2B2B2B] tracking-tight">
              Our areas of
              <br />
              <span className="font-script text-[1.3em] text-[#86B3B3] font-normal block mt-1">
                expertise
              </span>
            </h2>
          </div>

          {/* Left Column: col 10 to 18, row 1 to 13 */}
          <div style={{ gridColumn: "10 / 18", gridRow: "1 / 13" }} className="flex flex-col justify-between">
            <div className="py-3.5 text-[14px] lg:text-[15px] font-sans-nav font-normal uppercase tracking-[1.8px] text-[#2B2B2B] border-b border-[#E3D9CA]">
              DISSOCIATION
            </div>
            <div className="py-3.5 text-[14px] lg:text-[15px] font-sans-nav font-normal uppercase tracking-[1.8px] text-[#2B2B2B] border-b border-[#E3D9CA]">
              TRAUMA
            </div>
            <div className="py-3.5 text-[14px] lg:text-[15px] font-sans-nav font-normal uppercase tracking-[1.8px] text-[#2B2B2B] border-b border-[#E3D9CA]">
              FAMILY CONFLICT
            </div>
            <div className="py-3.5 text-[14px] lg:text-[15px] font-sans-nav font-normal uppercase tracking-[1.8px] text-[#2B2B2B] border-b border-[#E3D9CA]">
              SPECIAL NEEDS PARENTING
            </div>
            <div className="py-3.5 text-[14px] lg:text-[15px] font-sans-nav font-normal uppercase tracking-[1.8px] text-[#2B2B2B] border-b border-[#E3D9CA]">
              DEPRESSION
            </div>
            <div className="py-3.5 text-[14px] lg:text-[15px] font-sans-nav font-normal uppercase tracking-[1.8px] text-[#2B2B2B] border-b border-[#E3D9CA]">
              MARRIAGE
            </div>
          </div>

          {/* Right Column: col 19 to 27 (leaving col 18 as spacer), row 1 to 13 */}
          <div style={{ gridColumn: "19 / 27", gridRow: "1 / 13" }} className="flex flex-col justify-between">
            <div className="py-3.5 text-[14px] lg:text-[15px] font-sans-nav font-normal uppercase tracking-[1.8px] text-[#2B2B2B] border-b border-[#E3D9CA]">
              ANXIETY
            </div>
            <div className="py-3.5 text-[14px] lg:text-[15px] font-sans-nav font-normal uppercase tracking-[1.8px] text-[#2B2B2B] border-b border-[#E3D9CA]">
              RELATIONSHIPS
            </div>
            <div className="py-3.5 text-[14px] lg:text-[15px] font-sans-nav font-normal uppercase tracking-[1.8px] text-[#2B2B2B] border-b border-[#E3D9CA]">
              CHILDREN
            </div>
            <div className="py-3.5 text-[14px] lg:text-[15px] font-sans-nav font-normal uppercase tracking-[1.8px] text-[#2B2B2B] border-b border-[#E3D9CA]">
              TEENS
            </div>
            <div className="py-3.5 text-[14px] lg:text-[15px] font-sans-nav font-normal uppercase tracking-[1.8px] text-[#2B2B2B] border-b border-[#E3D9CA]">
              INTIMACY &amp; CONNECTION
            </div>
            <div className="py-3.5 text-[14px] lg:text-[15px] font-sans-nav font-normal uppercase tracking-[1.8px] text-[#2B2B2B] border-b border-[#E3D9CA]">
              …AND MORE.
            </div>
          </div>
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
      <section className="w-full bg-[#E3D9CA] py-12 lg:py-16 overflow-hidden">
        {/* Mobile View */}
        <div className="md:hidden px-6 py-16 space-y-6">
          <p className="font-sans-nav text-[13px] font-normal tracking-[1.8px] uppercase text-[#2B2B2B]">
            HOW WE WORK
          </p>
          <h2 className="font-serif-heading text-[30px] font-light text-[#2B2B2B] leading-[1.2]">
            We’re here to make a difference.
          </h2>
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#E3D9CA]/30">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__286_29.jpg"
              alt="A woman and a child in white dresses dancing on a sandy beach"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="space-y-4 text-[16px] font-body font-light text-[#2B2B2B] leading-relaxed">
            <p className="font-serif-heading text-[18px] font-normal italic text-[#2B2B2B] leading-snug">
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
            <a href="#about" className="conejo-btn-underline text-[12.26px] tracking-[1.47px]">
              LEARN MORE ABOUT US
            </a>
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid */}
        <div className="hidden md:grid sqs-fluid-grid-20" style={{ minHeight: "750px" }}>
          {/* Eyebrow: col 3 to 15, row 4 to 6 */}
          <div style={{ gridColumn: "3 / 15", gridRow: "4 / 6" }} className="flex items-end pb-1">
            <p className="font-sans-nav text-[15px] font-normal tracking-[1.8px] uppercase text-[#2B2B2B]">
              HOW WE WORK
            </p>
          </div>

          {/* H2 Heading: col 3 to 20, row 8 to 10 */}
          <div style={{ gridColumn: "3 / 20", gridRow: "8 / 10" }} className="flex items-center">
            <h2 className="font-serif-heading text-[32px] sm:text-[42px] lg:text-[49.7px] font-light text-[#2B2B2B] tracking-tight leading-[1.2]">
              We’re here to make a difference.
            </h2>
          </div>

          {/* Right Image: col 21 to 27 (flush to right edge), row 4 to 22 */}
          <div style={{ gridColumn: "21 / 27", gridRow: "4 / 22" }} className="relative w-full h-full min-h-[520px]">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__286_29.jpg"
              alt="A woman and a child in white dresses dancing on a sandy beach"
              fill
              sizes="(max-width: 1024px) 35vw, 28vw"
              className="object-cover object-center"
            />
          </div>

          {/* Paragraph Col 1: col 3 to 11, row 11 to 20 */}
          <div style={{ gridColumn: "3 / 11", gridRow: "11 / 20" }} className="space-y-4 pr-4">
            <p className="font-serif-heading text-[20px] lg:text-[22px] font-normal italic text-[#2B2B2B] leading-snug">
              The clients we work with are balancing so many things at once, it’s often hard for them to put themselves first.
            </p>
            <p className="font-body text-[16.8px] font-light text-[#2B2B2B] leading-[30.3px]">
              Here, your needs are always top priority. Our team takes the time to deeply listen to our clients in order to truly understand their story and their struggles. We recognize that no two people are the same and that personalized therapy means an intentional, tailored approach. (You won’t find anything “one-size-fits-all” here.) If you’re ready to do the work, we’re ready to help.
            </p>
          </div>

          {/* Paragraph Col 2: col 11 to 19, row 11 to 20 */}
          <div style={{ gridColumn: "11 / 19", gridRow: "11 / 20" }} className="space-y-3 px-2">
            <p className="font-body text-[16.8px] font-light text-[#2B2B2B] leading-[30.3px]">
              Sometimes we may gently challenge you to look at things differently and other times we may explore your emotions, all while encouraging you to practice what you’ve learned in your daily life. We take what we do seriously because we know how important it is for you to heal from what’s hurting you, discover a fulfilling life, and build meaningful relationships. Our goal is to walk alongside you in this journey, offering support and guidance as you uncover your strengths and embrace what the future can hold for you.
            </p>
          </div>

          {/* Button: col 3 to 19, row 21 to 23 */}
          <div style={{ gridColumn: "3 / 19", gridRow: "21 / 23" }} className="pt-2">
            <a href="#about" className="conejo-btn-underline text-[12.26px] tracking-[1.47px]">
              LEARN MORE ABOUT US
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: SECONDARY AFFIRMATION BANNER (Pure White #FFFFFF)
          Image: cols 1 to 15 (flush left edge), rows 1 to 15
          Text: cols 16 to 26, rows 9 to 15
      ========================================================================== */}
      <section className="bg-white py-16 lg:py-24 overflow-hidden">
        {/* Mobile View */}
        <div className="md:hidden space-y-6">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__285_29.jpg"
              alt="Family of four standing on a beach, holding hands, facing the ocean at sunset"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="px-6 pb-12">
            <h2 className="font-serif-heading text-[28px] font-light text-[#2B2B2B] leading-[1.22]">
              Honoring where you’ve been{" "}
              <span className="font-script text-[1.3em] text-[#86B3B3] font-normal inline-block">
                &amp;
              </span>
              <br />
              helping shape where you’re headed.
            </h2>
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid */}
        <div className="hidden md:grid sqs-fluid-grid-11" style={{ minHeight: "460px" }}>
          {/* Left Image: col 1 to 15 (flush left edge), row 1 to 15 */}
          <div style={{ gridColumn: "1 / 15", gridRow: "1 / 15" }} className="relative w-full h-full min-h-[420px]">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__285_29.jpg"
              alt="Family of four standing on a beach, holding hands, facing the ocean at sunset"
              fill
              sizes="(max-width: 1024px) 55vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* Quote Text: col 16 to 26, row 9 to 15 */}
          <div style={{ gridColumn: "16 / 26", gridRow: "9 / 15" }} className="flex items-center pl-4">
            <h2 className="font-serif-heading text-[32px] sm:text-[42px] lg:text-[49.7px] font-light text-[#2B2B2B] leading-[1.22] tracking-tight">
              Honoring where you’ve been{" "}
              <span className="font-script text-[1.3em] text-[#86B3B3] font-normal inline-block">
                &amp;
              </span>
              <br />
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
        <div className="md:hidden px-6 py-16 space-y-10">
          <h2 className="font-serif-heading text-3xl font-light text-[#2B2B2B] tracking-tight">
            Our{" "}
            <span className="font-script text-[1.3em] text-[#86B3B3] font-normal">
              specialties
            </span>
            <br />
            include…
          </h2>
          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="font-serif-heading text-[26px] font-light text-[#2B2B2B]">Trauma</h3>
              <p className="font-body text-[16px] font-light text-[#2B2B2B] leading-relaxed">
                We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.
              </p>
              <div>
                <a href="#specialties" className="conejo-btn-underline text-[12px] tracking-wider">LEARN MORE</a>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-serif-heading text-[26px] font-light text-[#2B2B2B]">Dissociation</h3>
              <p className="font-body text-[16px] font-light text-[#2B2B2B] leading-relaxed">
                The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.
              </p>
              <div>
                <a href="#specialties" className="conejo-btn-underline text-[12px] tracking-wider">LEARN MORE</a>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-serif-heading text-[26px] font-light text-[#2B2B2B]">EMDR</h3>
              <p className="font-body text-[16px] font-light text-[#2B2B2B] leading-relaxed">
                Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.
              </p>
              <div>
                <a href="#specialties" className="conejo-btn-underline text-[12px] tracking-wider">LEARN MORE</a>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-serif-heading text-[26px] font-light text-[#2B2B2B]">Special Needs Parenting</h3>
              <p className="font-body text-[16px] font-light text-[#2B2B2B] leading-relaxed">
                Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.
              </p>
              <div>
                <a href="#specialties" className="conejo-btn-underline text-[12px] tracking-wider">LEARN MORE</a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid */}
        <div className="hidden md:grid sqs-fluid-grid-11" style={{ minHeight: "800px" }}>
          {/* Title: col 3 to 10, row 3 to 7 */}
          <div style={{ gridColumn: "3 / 10", gridRow: "3 / 7" }}>
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-[49.7px] font-light text-[#2B2B2B] tracking-tight">
              Our{" "}
              <span className="font-script text-[1.3em] text-[#86B3B3] font-normal">
                specialties
              </span>
              <br />
              include…
            </h2>
          </div>

          {/* Col 1, Item 1 (Trauma): col 11 to 18, row 4 to 14 */}
          <div style={{ gridColumn: "11 / 18", gridRow: "4 / 14" }} className="space-y-3 pr-4">
            <h3 className="font-serif-heading text-[28px] font-light text-[#2B2B2B] tracking-tight">
              Trauma
            </h3>
            <p className="font-body text-[16.8px] font-light text-[#2B2B2B] leading-[30.3px]">
              We don’t always know when and how we’ve experienced trauma. In therapy, we’ll work together to help you process your past, understand what’s causing you to stay “stuck,” and regain a sense of safety, control, and hope. You don’t have to carry your burdens alone.
            </p>
            <div className="pt-2">
              <a href="#specialties" className="conejo-btn-underline text-[12.26px] tracking-[1.47px]">
                LEARN MORE
              </a>
            </div>
          </div>

          {/* Col 1, Item 2 (Dissociation): col 11 to 18, row 15 to 25 */}
          <div style={{ gridColumn: "11 / 18", gridRow: "15 / 25" }} className="space-y-3 pr-4">
            <h3 className="font-serif-heading text-[28px] font-light text-[#2B2B2B] tracking-tight">
              Dissociation
            </h3>
            <p className="font-body text-[16.8px] font-light text-[#2B2B2B] leading-[30.3px]">
              The feeling of losing time, hearing conflicting voices, or questioning your sense of self can be overwhelming. In therapy, we’ll help you understand these experiences, recognize your own triggers, and create a sense of balance and identity so that you can feel more grounded.
            </p>
            <div className="pt-2">
              <a href="#specialties" className="conejo-btn-underline text-[12.26px] tracking-[1.47px]">
                LEARN MORE
              </a>
            </div>
          </div>

          {/* Col 2, Item 1 (EMDR): col 19 to 26, row 4 to 14 */}
          <div style={{ gridColumn: "19 / 26", gridRow: "4 / 14" }} className="space-y-3 pr-2">
            <h3 className="font-serif-heading text-[28px] font-light text-[#2B2B2B] tracking-tight">
              EMDR
            </h3>
            <p className="font-body text-[16.8px] font-light text-[#2B2B2B] leading-[30.3px]">
              Eye Movement Desensitization and Reprocessing (EMDR) is a powerful therapeutic technique that helps process and heal trauma by reworking how painful memories are stored in your brain. This allows you to find relief and move toward lasting healing.
            </p>
            <div className="pt-2">
              <a href="#specialties" className="conejo-btn-underline text-[12.26px] tracking-[1.47px]">
                LEARN MORE
              </a>
            </div>
          </div>

          {/* Col 2, Item 2 (Special Needs Parenting): col 19 to 26, row 15 to 25 */}
          <div style={{ gridColumn: "19 / 26", gridRow: "15 / 25" }} className="space-y-3 pr-2">
            <h3 className="font-serif-heading text-[28px] font-light text-[#2B2B2B] tracking-tight">
              Special Needs Parenting
            </h3>
            <p className="font-body text-[16.8px] font-light text-[#2B2B2B] leading-[30.3px]">
              Parenting a child with special needs presents unique challenges and complex emotions. We provide compassionate support through lived experience and expertise to help you navigate this journey with tools, understanding, and self-care.
            </p>
            <div className="pt-2">
              <a href="#specialties" className="conejo-btn-underline text-[12.26px] tracking-[1.47px]">
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: SCHEDULE AN APPOINTMENT (Flanked by edge-anchored photos)
          Left Photo: cols 1 to 4 (flush left), rows 4 to 16
          Center: cols 6 to 16, rows 1 to 16
          Right Photo: cols 18 to 27 (flush right), rows 1 to 16
      ========================================================================== */}
      {/* =========================================================================
          SECTION 9: SCHEDULE AN APPOINTMENT (Light Cream #F6F4EE)
          Eyebrow: cols 6 to 16, rows 1 to 3 (left-aligned)
          H2: cols 6 to 16, rows 4 to 8 (left-aligned)
          Body: cols 6 to 16, rows 8 to 14 (left-aligned)
          Button: cols 6 to 16, rows 14 to 16 (left-aligned)
          Left Photo: cols 1 to 4 (flush left), rows 4 to 16
          Right Photo: cols 18 to 27 (flush right), rows 1 to 16
      ========================================================================== */}
      <section id="appointment" className="w-full bg-[#F6F4EE] py-16 lg:py-24 overflow-hidden">
        {/* Mobile View */}
        <div className="md:hidden px-6 space-y-6 text-left">
          <p className="font-sans-nav text-[14px] font-normal tracking-[1.8px] uppercase text-[#2B2B2B]">
            SCHEDULE AN APPOINTMENT
          </p>
          <h2 className="font-serif-heading text-[30px] font-light text-[#2B2B2B] leading-[1.2]">
            Find a therapist who is the
            <br />
            right fit for{" "}
            <span className="font-script text-[1.15em] text-[#86B3B3] font-normal inline-block lowercase">
              you
            </span>
            .
          </h2>
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#E3D9CA]/30">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__2811_29.jpg"
              alt="A person in a striped dress pointing at shells on the sandy beach"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="space-y-4 text-[16.8px] font-body font-light text-[#2B2B2B] leading-[30.24px]">
            <p>
              Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we're here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
            </p>
            <p className="font-body text-[16.8px] font-light text-[#2B2B2B] leading-[30.24px]">
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
        <div className="hidden md:grid sqs-fluid-grid-11" style={{ minHeight: "560px" }}>
          {/* Left Photo: col 1 to 4 (flush to left edge), row 4 to 16 */}
          <div style={{ gridColumn: "1 / 4", gridRow: "4 / 16" }} className="relative w-full h-full min-h-[380px]">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__2812_29.jpg"
              alt="A person picking up seashells on a sandy beach"
              fill
              sizes="(max-width: 1024px) 16vw, 13vw"
              className="object-cover object-center"
            />
          </div>

          {/* Eyebrow: col 6 to 16, row 1 to 3 */}
          <div style={{ gridColumn: "6 / 16", gridRow: "1 / 3" }} className="flex items-end justify-start pb-2 text-left">
            <p className="font-sans-nav text-[14px] font-normal tracking-[1.8px] uppercase text-[#2B2B2B]">
              SCHEDULE AN APPOINTMENT
            </p>
          </div>

          {/* H2 Heading: col 6 to 16, row 4 to 8 */}
          <div style={{ gridColumn: "6 / 16", gridRow: "4 / 8" }} className="flex items-center justify-start text-left">
            <h2 className="font-serif-heading text-[32px] sm:text-[42px] lg:text-[49.7px] font-light text-[#2B2B2B] tracking-tight leading-[1.2]">
              Find a therapist who is the
              <br /> right fit for{" "}
              <span className="font-script text-[1.15em] text-[#86B3B3] font-normal inline-block lowercase">
                you
              </span>
              .
            </h2>
          </div>

          {/* Body text: col 6 to 16, row 8 to 14 */}
          <div style={{ gridColumn: "6 / 16", gridRow: "8 / 14" }} className="flex flex-col justify-start text-left space-y-4 pt-1">
            <p className="font-body text-[16.8px] font-light text-[#2B2B2B] leading-[30.24px] max-w-lg">
              Coming to therapy is a courageous decision, and connecting with the right kind of therapist makes all the difference. We understand that your journey is personal, and we're here to support you with care and understanding every step of the way. Each member of our team brings dedicated expertise and a commitment to support you in your struggles. We want you to feel prioritized, understood, and empowered.
            </p>
            <p className="font-body text-[16.8px] font-light text-[#2B2B2B] leading-[30.24px]">
              Click the button below to schedule an appointment.
            </p>
          </div>

          {/* CTA Button: col 6 to 16, row 14 to 16 */}
          <div style={{ gridColumn: "6 / 16", gridRow: "14 / 16" }} className="flex items-start justify-start pt-2">
            <a
              href="#contact"
              className="conejo-btn-pill"
            >
              BOOK NOW
            </a>
          </div>

          {/* Right Photo: col 18 to 27 (flush to right edge), row 1 to 16 */}
          <div style={{ gridColumn: "18 / 27", gridRow: "1 / 16" }} className="relative w-full h-full min-h-[480px]">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__2811_29.jpg"
              alt="A person in a striped dress pointing at shells on the sandy beach"
              fill
              sizes="(max-width: 1024px) 35vw, 32vw"
              className="object-cover object-center"
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
      <footer id="contact" className="bg-white py-16 sm:py-24 border-t border-[#E3D9CA]/50 overflow-hidden">
        {/* Mobile View */}
        <div className="md:hidden px-6 space-y-10">
          <div className="space-y-4">
            <div className="relative h-[60px] w-[240px]">
              <Image
                src="/assets/conejo/Conejo_Valley_Counseling_Logo.png"
                alt="Conejo Valley Family Counseling"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="font-body text-[16.8px] font-light text-[#2B2B2B] leading-[30.24px]">
              We want to make getting started simple. You’re welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-sans-nav text-[16.8px] font-normal uppercase tracking-[1.68px] leading-[30.24px] text-[#2B2B2B]">
              NAVIGATE
            </h4>
            <ul className="space-y-[10px] text-[13.44px] font-body font-light text-[#2B2B2B] leading-[24.2px]">
              <li><a href="#home" className="hover:text-[#86B3B3] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#86B3B3] transition-colors">About</a></li>
              <li><a href="#faqs" className="hover:text-[#86B3B3] transition-colors">FAQs</a></li>
              <li><a href="#contact" className="hover:text-[#86B3B3] transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-sans-nav text-[16.8px] font-normal uppercase tracking-[1.68px] leading-[30.24px] text-[#2B2B2B]">
              OUR TEAM
            </h4>
            <ul className="space-y-[6px] text-[13.44px] font-body font-light text-[#2B2B2B] leading-[24.2px]">
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
            <h4 className="font-sans-nav text-[16.8px] font-normal uppercase tracking-[1.68px] leading-[30.24px] text-[#2B2B2B]">
              CONTACT
            </h4>
            <div className="space-y-3 text-[13.44px] font-body font-light text-[#2B2B2B] leading-[24.2px]">
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
              <p className="text-[13.44px] font-body font-light italic text-[#2B2B2B] leading-[22px] pt-1">
                Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, &amp; Simi Valley
              </p>
            </div>
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid */}
        <div className="hidden md:grid sqs-fluid-grid-11" style={{ minHeight: "340px" }}>
          {/* Logo & Warm Intro: col 2 to 10, row 1 to 10 */}
          <div style={{ gridColumn: "2 / 10", gridRow: "1 / 10" }} className="space-y-6 pr-6">
            <div className="relative h-[60px] w-[240px]">
              <Image
                src="/assets/conejo/Conejo_Valley_Counseling_Logo.png"
                alt="Conejo Valley Family Counseling"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="font-body text-[16.8px] font-light text-[#2B2B2B] leading-[30.24px] max-w-[430px]">
              We want to make getting started simple. You’re welcome to come into our office in Newbury Park or schedule virtual appointments from anywhere in CA—whatever works best for you.
            </p>
          </div>

          {/* Navigate: col 12 to 16, row 1 to 10 */}
          <div style={{ gridColumn: "12 / 16", gridRow: "1 / 10" }}>
            <h4 className="font-sans-nav text-[16.8px] font-normal uppercase tracking-[1.68px] leading-[30.24px] text-[#2B2B2B] mb-5">
              NAVIGATE
            </h4>
            <ul className="space-y-[10px] text-[13.44px] font-body font-light text-[#2B2B2B] leading-[24.2px]">
              <li><a href="#home" className="hover:text-[#86B3B3] transition-colors cursor-pointer">Home</a></li>
              <li><a href="#about" className="hover:text-[#86B3B3] transition-colors cursor-pointer">About</a></li>
              <li><a href="#faqs" className="hover:text-[#86B3B3] transition-colors cursor-pointer">FAQs</a></li>
              <li><a href="#contact" className="hover:text-[#86B3B3] transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>

          {/* Our Team: col 16 to 21, row 1 to 10 */}
          <div style={{ gridColumn: "16 / 21", gridRow: "1 / 10" }}>
            <h4 className="font-sans-nav text-[16.8px] font-normal uppercase tracking-[1.68px] leading-[30.24px] text-[#2B2B2B] mb-5">
              OUR TEAM
            </h4>
            <ul className="space-y-[6px] text-[13.44px] font-body font-light text-[#2B2B2B] leading-[24.2px]">
              {teamMembers.map((m) => (
                <li key={m}>
                  <a href="#team" className="hover:text-[#86B3B3] transition-colors cursor-pointer">
                    {m.replace(/,.*$/, "")}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact: col 21 to 26, row 1 to 10 */}
          <div style={{ gridColumn: "21 / 26", gridRow: "1 / 10" }} className="text-[13.44px] font-body font-light text-[#2B2B2B] leading-[24.2px]">
            <h4 className="font-sans-nav text-[16.8px] font-normal uppercase tracking-[1.68px] leading-[30.24px] text-[#2B2B2B] mb-5">
              CONTACT
            </h4>
            <div className="space-y-4">
              <p>
                925 Broadbeck Dr
                <br />
                Suites 200 and 225
                <br />
                Newbury Park, CA 91320
              </p>
              <div>
                <p>
                  <a
                    href="mailto:info@conejovalleycounseling.com"
                    className="hover:text-[#86B3B3] transition-colors"
                  >
                    info@conejovalleycounseling.com
                  </a>
                </p>
                <p>
                  <a href="tel:8052423120" className="hover:text-[#86B3B3] transition-colors">
                    805.242.3120
                  </a>
                </p>
              </div>
              <p className="text-[13.44px] font-body font-light italic text-[#2B2B2B] leading-[22px] pt-2">
                Serving Thousand Oaks, Westlake Village, Camarillo, Moorpark, &amp; Simi Valley
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* =========================================================================
          SECTION 11: SUB-FOOTER LEGAL BAR (Teal Accent #86B3B3 with white text)
      ========================================================================== */}
      <div className="bg-[#86B3B3] text-white py-5 px-6 text-xs text-center font-body font-light tracking-wide">
        <p>Terms | Privacy Policy | Disclaimer | Website by Walker Strategy Co.</p>
      </div>
    </div>
  );
}
