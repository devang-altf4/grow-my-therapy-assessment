"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Plus, Minus, Check } from "lucide-react";

export default function Part3CustomSectionPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    format: "In-Person (Santa Monica)",
    focus: "Anxiety & Panic",
    message: "",
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const clinicalAreas = [
    "ANXIETY & PANIC DISORDERS",
    "EMDR TRAUMA RECOVERY",
    "PROFESSIONAL BURNOUT",
    "PERFECTIONISM & HIGH PRESSURE",
    "COGNITIVE BEHAVIORAL THERAPY (CBT)",
    "MINDFULNESS PRACTICES",
    "NERVOUS SYSTEM REGULATION",
    "IMPOSTER SYNDROME & SELF-DOUBT",
    "RELATIONAL BOUNDARIES",
    "LIFE & CAREER TRANSITIONS",
    "SOMATIC GROUNDING TECHNIQUES",
    "…AND MORE.",
  ];

  const faqs = [
    {
      q: "What modalities do you integrate during therapy sessions?",
      a: "I integrate Cognitive Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), mindfulness-based practices, and body-oriented somatic techniques. Rather than relying on rigid worksheets, we work collaboratively to address both the cognitive thought loops and physiological tension driving your symptoms.",
    },
    {
      q: "Do you offer in-person therapy, online telehealth, or both?",
      a: "Both options are readily available. I welcome clients to my calm, private therapy office at 123th Street 45 W in Santa Monica, California. For clients who travel frequently or reside elsewhere in California, I provide secure, HIPAA-compliant telehealth video sessions.",
    },
    {
      q: "How does EMDR therapy work for trauma and anxiety?",
      a: "Eye Movement Desensitization and Reprocessing (EMDR) is a scientifically validated modality that helps reprocess distressing or unresolved memories that remain 'stuck' in the nervous system. By using bilateral stimulation (such as side-to-side eye movements or gentle tactile taps), EMDR reactivates your brain's natural healing mechanisms, reducing physiological distress and restoring deep emotional equilibrium.",
    },
    {
      q: "Who is the ideal client for your private practice?",
      a: "I work primarily with thoughtful, high-achieving adults—executives, creatives, entrepreneurs, attorneys, healthcare professionals, and leaders—who look completely composed on the outside but internally feel exhausted, overwhelmed by perfectionism, stuck in chronic anxiety, or carrying the lingering weight of past trauma.",
    },
    {
      q: "What are your session fees, and do you accept insurance?",
      a: "I am an out-of-network clinical psychologist. This allows us to keep our clinical work entirely private, tailored to your schedule, and free from insurance limitations. At the end of each month, I provide detailed superbills that you can submit to your PPO insurance provider for potential out-of-network reimbursement. We accept credit cards, debit cards, and HSA/FSA funds.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#242424] font-body antialiased selection:bg-[#A45D43]/20 selection:text-[#242424] overflow-x-hidden">
      {/* =========================================================================
          HEADER & NAVIGATION (Squarespace Luxury Editorial Aesthetic)
          Height: responsive (80px mobile, 96px tablet, 129px desktop), warm linen background, clean uppercase typography
      ========================================================================== */}
      <header className="relative bg-[#F8F6F2] w-full z-40 h-[80px] sm:h-[96px] lg:h-[129px] flex items-center border-b border-[#E5DDD1]/40">
        <div className="w-full px-6 md:px-12 lg:px-[96px] flex items-center justify-between">
          {/* Brand Typographic Identity */}
          <Link href="/part-3" className="block flex-shrink-0 group">
            <span className="font-serif-heading text-[19px] sm:text-[22px] lg:text-[25px] font-light tracking-[-0.3px] text-[#242424] block leading-tight group-hover:text-[#A45D43] transition-colors">
              Dr. Maya Reynolds, PsyD
            </span>
            <span className="font-sans-nav text-[9px] sm:text-[10px] lg:text-[11px] font-normal tracking-[1.5px] sm:tracking-[2px] uppercase text-[#738A84] block mt-0.5">
              Licensed Clinical Psychologist • Santa Monica, CA
            </span>
          </Link>

          {/* Desktop Navigation Links + Contact CTA */}
          <div className="hidden lg:flex items-center gap-[44px]">
            <nav
              aria-label="Desktop primary navigation"
              className="flex items-center gap-[40px] f-small font-sans-nav font-normal tracking-[.1em] uppercase text-[#242424]"
            >
              {/* About Dropdown */}
              <div
                className="relative py-2 group cursor-pointer"
                onMouseEnter={() => setActiveDropdown("about")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="hover:text-[#A45D43] transition-colors nav-link-item">
                  About
                </span>
                {activeDropdown === "about" && (
                  <div className="absolute top-full left-0 w-64 bg-[#F8F6F2] border border-[#E5DDD1] shadow-md py-3 z-50 text-[0.8rem] tracking-normal normal-case">
                    <a
                      href="#about"
                      className="block px-4 py-2 hover:bg-[#EFEBE3] hover:text-[#A45D43] transition-colors text-[#333]"
                    >
                      Clinical Background &amp; Bio
                    </a>
                    <a
                      href="#approach"
                      className="block px-4 py-2 hover:bg-[#EFEBE3] hover:text-[#A45D43] transition-colors text-[#333]"
                    >
                      Therapeutic Philosophy
                    </a>
                    <a
                      href="#our-office"
                      className="block px-4 py-2 hover:bg-[#EFEBE3] hover:text-[#A45D43] transition-colors text-[#333]"
                    >
                      Santa Monica Sanctuary
                    </a>
                  </div>
                )}
              </div>

              {/* Who We Help */}
              <a
                href="#who-we-help"
                className="hover:text-[#A45D43] transition-colors nav-link-item cursor-pointer"
              >
                Who We Help
              </a>

              {/* Specialties Dropdown */}
              <div
                className="relative py-2 group cursor-pointer"
                onMouseEnter={() => setActiveDropdown("specialties")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <span className="hover:text-[#A45D43] transition-colors nav-link-item">
                  Specialties
                </span>
                {activeDropdown === "specialties" && (
                  <div className="absolute top-full left-0 w-64 bg-[#F8F6F2] border border-[#E5DDD1] shadow-md py-3 z-50 text-[0.8rem] tracking-normal normal-case">
                    <a
                      href="#specialties"
                      className="block px-4 py-2 hover:bg-[#EFEBE3] hover:text-[#A45D43] transition-colors text-[#333]"
                    >
                      Anxiety &amp; Panic Therapy
                    </a>
                    <a
                      href="#specialties"
                      className="block px-4 py-2 hover:bg-[#EFEBE3] hover:text-[#A45D43] transition-colors text-[#333]"
                    >
                      Trauma Recovery &amp; EMDR
                    </a>
                    <a
                      href="#specialties"
                      className="block px-4 py-2 hover:bg-[#EFEBE3] hover:text-[#A45D43] transition-colors text-[#333]"
                    >
                      Burnout &amp; Perfectionism
                    </a>
                  </div>
                )}
              </div>

              {/* Our Sanctuary */}
              <a
                href="#our-office"
                className="hover:text-[#A45D43] transition-colors nav-link-item cursor-pointer"
              >
                Our Office
              </a>

              {/* FAQs */}
              <a
                href="#faqs"
                className="hover:text-[#A45D43] transition-colors nav-link-item cursor-pointer"
              >
                FAQs
              </a>
            </nav>

            {/* Desktop Right CTA Button */}
            <div className="flex-shrink-0">
              <a href="#consultation" className="maya-btn-pill">
                Contact
              </a>
            </div>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#242424] hover:bg-[#EFEBE3] rounded-lg"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F8F6F2] border-b border-[#E5DDD1] px-6 py-6 space-y-4 absolute top-full left-0 w-full shadow-lg z-50">
            <div className="flex flex-col space-y-3 font-sans-nav text-xs uppercase tracking-wider font-normal">
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#E5DDD1]/50 text-[#242424]"
              >
                About Dr. Maya
              </a>
              <a
                href="#who-we-help"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#E5DDD1]/50 text-[#242424]"
              >
                Who We Help
              </a>
              <a
                href="#specialties"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#E5DDD1]/50 text-[#242424]"
              >
                Specialties
              </a>
              <a
                href="#our-office"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#E5DDD1]/50 text-[#242424]"
              >
                Our Office
              </a>
              <a
                href="#faqs"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-[#E5DDD1]/50 text-[#242424]"
              >
                FAQs
              </a>
            </div>
            <div className="pt-2">
              <a
                href="#consultation"
                onClick={() => setMobileMenuOpen(false)}
                className="maya-btn-pill w-full text-center block"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        )}
      </header>

      {/* =========================================================================
          SECTION 1: HERO (Authentic Squarespace Fluid Engine 24-Column Grid)
          Cols: 26 total (1 gutter + 24 cols + 1 gutter)
      ========================================================================== */}
      <section className="relative w-full bg-[#F8F6F2] overflow-hidden">
        {/* Mobile & Tablet View (<1024px) */}
        <div className="lg:hidden px-6 sm:px-12 pt-6 pb-12 space-y-6 max-w-3xl mx-auto">
          <div className="relative aspect-[526/596] w-full overflow-hidden bg-[#EFEBE3]">
            <Image
              src="/assets/Dr. Maya Reynolds.png"
              alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica"
              fill
              sizes="(max-width: 1024px) 100vw, 36vw"
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="space-y-4">
            <p className="font-sans-nav f-eyebrow text-[#738A84]">
              ONLINE &amp; IN-PERSON THERAPY IN SANTA MONICA &amp; ACROSS CA
            </p>
            <h1 className="font-serif-heading f-h1 text-[#242424]">
              Reclaim your calm, rebuild<br className="hidden sm:inline" /> your foundation, and finally<br className="hidden sm:inline" /> begin to{" "}
              <span className="font-script f-script text-[#A45D43]">thrive.</span>
            </h1>
            <p className="font-body f-body text-[#242424]">
              Specialized psychological therapy for high-achieving adults navigating anxiety, trauma, and burnout. Combining practical tools with deep, lasting healing.
            </p>
            <div>
              <a href="#consultation" className="maya-btn-underline">
                SCHEDULE A CONSULTATION
              </a>
            </div>
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid (>=1024px) */}
        <div className="hidden lg:grid sqs-fluid-grid-11" style={{ ["--row-count" as string]: 18 }}>
          {/* Left Hero Image: 1 / 1 / 19 / 10 */}
          <div style={{ gridColumn: "1 / 10", gridRow: "1 / 19" }} className="fe-block relative overflow-hidden">
            <Image
              src="/assets/Dr. Maya Reynolds.png"
              alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist"
              fill
              sizes="36vw"
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Right Coastal Accent Image: 5 / 25 / 17 / 27 */}
          <div style={{ gridColumn: "25 / 27", gridRow: "5 / 17" }} className="fe-block relative overflow-hidden">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__2867_29.jpg"
              alt="Peaceful California coastline"
              fill
              sizes="8vw"
              className="object-cover"
              style={{ objectPosition: "87.2951% 56.0035%" }}
            />
          </div>

          {/* Eyebrow: 2 / 11 / 4 / 24 */}
          <div style={{ gridColumn: "11 / 24", gridRow: "2 / 4" }} className="fe-block fe-bottom">
            <p className="font-sans-nav f-eyebrow text-[#738A84]">
              ONLINE &amp; IN-PERSON THERAPY IN SANTA MONICA &amp; ACROSS CA
            </p>
          </div>

          {/* H1 Heading: 6 / 11 / 14 / 24 */}
          <div style={{ gridColumn: "11 / 24", gridRow: "6 / 14" }} className="fe-block fe-top">
            <h1 className="font-serif-heading f-h1 text-[#242424]">
              Reclaim your calm, rebuild
              <br />
              your foundation, and finally
              <br />
              begin to{" "}
              <span className="font-script f-script text-[#A45D43]">
                thrive.
              </span>
            </h1>
          </div>

          {/* Body paragraph: 14 / 11 / 16 / 24 */}
          <div style={{ gridColumn: "11 / 24", gridRow: "14 / 16" }} className="fe-block fe-top">
            <p className="font-body f-body text-[#242424]">
              Specialized psychological therapy for high-achieving adults navigating anxiety, trauma, and burnout. Combining practical tools with deep, lasting healing.
            </p>
          </div>

          {/* CTA Button: 17 / 11 / 18 / 24 */}
          <div style={{ gridColumn: "11 / 24", gridRow: "17 / 18" }} className="fe-block fe-bottom items-start">
            <a href="#consultation" className="maya-btn-underline">
              SCHEDULE A CONSULTATION
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EMPATHY & NARRATIVE (Authentic 24-Column Grid)
          Cols: 26 total (1 gutter + 24 cols + 1 gutter)
      ========================================================================== */}
      <section className="w-full bg-[#F8F6F2] py-16 md:py-[4.5vmax] border-t border-[#E5DDD1]/50 overflow-hidden">
        {/* Mobile & Tablet View (<1024px) */}
        <div className="lg:hidden px-6 sm:px-12 space-y-6 max-w-3xl mx-auto">
          <h2 className="font-serif-heading f-h2 text-[#242424]">
            You’re holding onto hope that life can feel lighter and more grounded than it does right now.
          </h2>
          <p className="font-sans-nav f-caps text-[#242424]">
            At our Santa Monica practice, our goal is to help you turn that hope into lasting reality.
          </p>
          <p className="font-body f-body text-[#242424]">
            Many of the people I work with are high-achieving, thoughtful, and deeply self-aware—yet internally feel exhausted, trapped in cycles of overthinking, or emotionally on edge. You may look completely composed to the outside world while quietly carrying chronic worry, persistent tension in your body, or an unspoken fear of things falling apart.
          </p>
          <p className="font-body f-body text-[#242424]">
            First and foremost, what you are experiencing is real, valid, and worthy of compassionate, expert support. Whether you are navigating past trauma, persistent anxiety, or the heavy weight of burnout, you don&apos;t have to carry it in isolation. Together, we create a safe, steady container to help you find your footing again and build a deeply resilient future.
          </p>
          <div className="relative aspect-[462/580] w-full overflow-hidden bg-[#EFEBE3]">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__283_29.jpg"
              alt="Peaceful ocean waves along the Santa Monica coast"
              fill
              sizes="(max-width: 1024px) 100vw, 31vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid (>=1024px) */}
        <div className="hidden lg:grid sqs-fluid-grid-11" style={{ ["--row-count" as string]: 17 }}>
          {/* H2 Heading: 2 / 2 / 5 / 17 */}
          <div style={{ gridColumn: "2 / 17", gridRow: "2 / 5" }} className="fe-block">
            <h2 className="font-serif-heading f-h2 text-[#242424]">
              You’re holding onto hope that life can feel lighter and more grounded than it does right now.
            </h2>
          </div>

          {/* Paragraph Col 1: 6 / 2 / 16 / 10 */}
          <div style={{ gridColumn: "2 / 10", gridRow: "6 / 16" }} className="fe-block fe-top fe-pad-6 fe-rte">
            <p className="font-sans-nav f-caps text-[#242424]">
              At our Santa Monica practice, our goal is to help you turn that hope into lasting reality.
            </p>
            <p className="font-body f-body text-[#242424]">
              Many of the people I work with are high-achieving, thoughtful, and deeply self-aware—yet internally feel exhausted, trapped in cycles of overthinking, or emotionally on edge. You may look completely composed to the outside world while quietly carrying chronic worry or persistent tension.
            </p>
          </div>

          {/* Paragraph Col 2: 6 / 10 / 16 / 18 */}
          <div style={{ gridColumn: "10 / 18", gridRow: "6 / 16" }} className="fe-block fe-top fe-pad-6 fe-rte">
            <p className="font-body f-body text-[#242424]">
              First and foremost, what you are experiencing is real, valid, and worthy of compassionate, expert support. Whether you are navigating past trauma, persistent anxiety, or the heavy weight of burnout, you don&apos;t have to carry it in isolation. Together, we create a safe, steady container to help you find your footing again and build a deeply resilient future.
            </p>
          </div>

          {/* Right Ocean Image: 1 / 19 / 17 / 27 */}
          <div style={{ gridColumn: "19 / 27", gridRow: "1 / 17" }} className="fe-block relative overflow-hidden">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__283_29.jpg"
              alt="Peaceful ocean waves along the Santa Monica coast"
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
          Cards: Col 5-12, 12-19, 19-26 (3 empty columns on left)
      ========================================================================== */}
      <section id="who-we-help" className="bg-white py-16 md:py-[6.6vmax] overflow-hidden border-t border-[#E5DDD1]/40">
        {/* Mobile & Tablet View (<1024px) */}
        <div className="lg:hidden px-6 sm:px-12 py-12 space-y-12 max-w-5xl mx-auto">
          <h2 className="font-serif-heading f-h2 text-[#242424]">
            Who we{" "}
            <span className="font-script f-script text-[#A45D43]">
              help
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Column 1: High-Achieving Professionals */}
            <div className="space-y-4">
              <div className="relative aspect-[373/424] w-full overflow-hidden bg-neutral-100 mb-4">
                <Image
                  src="/assets/maya/who-professionals.jpg"
                  alt="High-achieving adult reflecting in an inspiring workspace"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
              <h3 className="font-serif-heading f-h4 text-[#242424]">
                High-Achieving Professionals
              </h3>
              <p className="font-body f-body text-[#242424]">
                Entrepreneurs, creatives, attorneys, and leaders feeling depleted by perfectionism, relentless internal pressure, and chronic burnout who want to reclaim sustainable balance.
              </p>
            </div>

            {/* Column 2: Adults with Anxiety & Panic */}
            <div className="space-y-4">
              <div className="relative aspect-[373/424] w-full overflow-hidden bg-neutral-100 mb-4">
                <Image
                  src="/assets/maya/who-anxiety.jpg"
                  alt="Mindful person taking a deep breath of fresh air"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
              <h3 className="font-serif-heading f-h4 text-[#242424]">
                Adults with Anxiety &amp; Panic
              </h3>
              <p className="font-body f-body text-[#242424]">
                Individuals battling constant overthinking, racing thoughts, panic sensations, or nervous system dysregulation who crave grounded relief and practical regulation tools.
              </p>
            </div>

            {/* Column 3: Individuals Healing from Trauma */}
            <div className="space-y-4">
              <div className="relative aspect-[373/424] w-full overflow-hidden bg-neutral-100 mb-4">
                <Image
                  src="/assets/maya/who-trauma.jpg"
                  alt="Warm light symbolizing emotional safety and healing"
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
              <h3 className="font-serif-heading f-h4 text-[#242424]">
                Healing from Trauma &amp; Stress
              </h3>
              <p className="font-body f-body text-[#242424]">
                Adults navigating the lingering impact of single-incident events or complex developmental experiences that continue to disrupt confidence, relationships, and emotional peace.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid (>=1024px) */}
        <div className="hidden lg:grid sqs-fluid-grid-20" style={{ ["--row-count" as string]: 21 }}>
          {/* Heading: 1 / 2 / 3 / 10 */}
          <div style={{ gridColumn: "2 / 10", gridRow: "1 / 3" }} className="fe-block">
            <h2 className="font-serif-heading f-h2 text-[#242424]">
              Who we{" "}
              <span className="font-script f-script text-[#A45D43]">
                help
              </span>
            </h2>
          </div>

          {/* Card 1 (Professionals) Photo: 4 / 5 / 15 / 12 */}
          <div style={{ gridColumn: "5 / 12", gridRow: "4 / 15" }} className="fe-block relative overflow-hidden">
            <Image
              src="/assets/maya/who-professionals.jpg"
              alt="High-achieving adult reflecting in an inspiring workspace"
              fill
              sizes="26vw"
              className="object-cover object-center"
            />
          </div>

          {/* Card 1 (Professionals) Text: 16 / 5 / 21 / 12 */}
          <div style={{ gridColumn: "5 / 12", gridRow: "16 / 21" }} className="fe-block fe-top">
            <div className="fe-rte">
              <h3 className="font-serif-heading f-h4 text-[#242424]">
                High-Achieving Professionals
              </h3>
              <p className="font-body f-body text-[#242424]">
                Entrepreneurs, creatives, and leaders feeling depleted by perfectionism, relentless internal pressure, and chronic burnout who want to reclaim sustainable balance.
              </p>
            </div>
          </div>

          {/* Card 2 (Anxiety) Photo: 4 / 12 / 15 / 19 */}
          <div style={{ gridColumn: "12 / 19", gridRow: "4 / 15" }} className="fe-block relative overflow-hidden">
            <Image
              src="/assets/maya/who-anxiety.jpg"
              alt="Mindful person taking a deep breath of fresh air"
              fill
              sizes="26vw"
              className="object-cover object-center"
            />
          </div>

          {/* Card 2 (Anxiety) Text: 16 / 12 / 22 / 19 */}
          <div style={{ gridColumn: "12 / 19", gridRow: "16 / 22" }} className="fe-block fe-top">
            <div className="fe-rte">
              <h3 className="font-serif-heading f-h4 text-[#242424]">
                Adults with Anxiety &amp; Panic
              </h3>
              <p className="font-body f-body text-[#242424]">
                Individuals battling constant overthinking, racing thoughts, panic sensations, or nervous system dysregulation who crave grounded relief and practical regulation tools.
              </p>
            </div>
          </div>

          {/* Card 3 (Trauma) Photo: 4 / 19 / 15 / 26 */}
          <div style={{ gridColumn: "19 / 26", gridRow: "4 / 15" }} className="fe-block relative overflow-hidden">
            <Image
              src="/assets/maya/who-trauma.jpg"
              alt="Warm coastal sunlight symbolizing renewal"
              fill
              sizes="26vw"
              className="object-cover object-center"
            />
          </div>

          {/* Card 3 (Trauma) Text: 16 / 19 / 22 / 26 */}
          <div style={{ gridColumn: "19 / 26", gridRow: "16 / 22" }} className="fe-block fe-top">
            <div className="fe-rte">
              <h3 className="font-serif-heading f-h4 text-[#242424]">
                Healing from Trauma &amp; Stress
              </h3>
              <p className="font-body f-body text-[#242424]">
                Adults navigating the lingering impact of single-incident events or complex developmental experiences that continue to disrupt confidence, relationships, and emotional peace.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: QUOTE BANNER (Full-bleed photographic backdrop)
      ========================================================================== */}
      <section className="relative py-20 md:py-[6.6vmax] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/conejo/Jennifer_A_-_Images__282_29.png"
            alt="Warm calming Pacific ocean beach backdrop"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Mobile & Tablet View (<1024px) */}
        <div className="lg:hidden relative z-10 px-6 sm:px-12 py-12 text-center text-white max-w-4xl mx-auto">
          <blockquote className="font-serif-heading f-h2 text-[#F8F6F2]">
            You deserve a quiet, sacred space where your story is heard, honored, and deeply understood.{" "}
            <em className="font-light italic text-[#F8F6F2]">
              Nothing you bring is too heavy for us to carry together.
            </em>
          </blockquote>
        </div>

        {/* Desktop 24-Column Fluid Grid (>=1024px) */}
        <div className="hidden lg:grid sqs-fluid-grid-11 relative z-10" style={{ ["--row-count" as string]: 10 }}>
          <div style={{ gridColumn: "3 / 21", gridRow: "5 / 11" }} className="fe-block fe-bottom">
            <h2 className="font-serif-heading f-h2 text-[#F8F6F2]">
              You deserve a quiet, sacred space where your story is heard, honored, and deeply understood.{" "}
              <em className="font-light italic text-[#F8F6F2]">
                Nothing you bring is too heavy for us to carry together.
              </em>
            </h2>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5: OUR AREAS OF EXPERTISE (Pure White #FFFFFF)
      ========================================================================== */}
      <section className="bg-white py-16 md:py-[8vmax] overflow-hidden border-t border-[#E5DDD1]/40">
        {/* Mobile & Tablet View (<1024px) */}
        <div className="lg:hidden px-6 sm:px-12 py-12 space-y-8 max-w-5xl mx-auto">
          <h3 className="font-serif-heading f-h3 text-[#242424]">
            Our areas of
            <br />
            <span className="font-script f-script text-[#A45D43]">
              expertise
            </span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-8">
            {clinicalAreas.map((item) => (
              <div
                key={item}
                className="py-3.5 text-[15px] font-sans-nav font-normal uppercase tracking-[1.8px] text-[#242424] border-b border-[#E5DDD1]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid (>=1024px) */}
        <div className="hidden lg:grid sqs-fluid-grid-11" style={{ ["--row-count" as string]: 12 }}>
          {/* Title: 1 / 3 / 4 / 9 */}
          <div style={{ gridColumn: "3 / 9", gridRow: "1 / 4" }} className="fe-block fe-top">
            <h3 className="font-serif-heading f-h3 text-[#242424]">
              Our areas of{" "}
              <span className="font-script f-script text-[#A45D43]">
                expertise
              </span>
            </h3>
          </div>

          {/* Two columns of clinical terms with exact 2-row blocks and 1-row dividers */}
          {[
            { col: "10 / 18", rule: "10 / 17", items: clinicalAreas.slice(0, 6) },
            { col: "18 / 26", rule: "18 / 25", items: clinicalAreas.slice(6) },
          ].flatMap(({ col, rule, items }) =>
            items.flatMap((item, idx) => {
              const row = idx * 2 + 1;
              const nodes = [
                <div
                  key={item}
                  style={{ gridColumn: col, gridRow: `${row} / ${row + 2}` }}
                  className="fe-block fe-top"
                >
                  <p className="font-sans-nav f-caps text-[#242424]">{item}</p>
                </div>,
              ];
              if (idx < items.length - 1) {
                nodes.push(
                  <div
                    key={`${item}-rule`}
                    style={{ gridColumn: rule, gridRow: `${row + 1} / ${row + 2}` }}
                    className="fe-block"
                  >
                    <hr className="h-px w-full border-0 bg-[#E5DDD1]/50" />
                  </div>
                );
              }
              return nodes;
            })
          )}
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: HOW WE WORK (Warm Dune Sand #EFEBE3)
          Eyebrow: cols 3 to 15, rows 4 to 6
          Heading: cols 3 to 20, rows 8 to 10
          Image: cols 21 to 27 (flush right edge), rows 4 to 22
          Text 1: cols 3 to 11, rows 11 to 20
          Text 2: cols 11 to 19, rows 11 to 20
          Button: cols 3 to 19, rows 21 to 23
      ========================================================================== */}
      <section id="approach" className="w-full bg-[#EFEBE3] py-12 md:py-0 overflow-hidden border-t border-[#E5DDD1]/50">
        {/* Mobile & Tablet View (<1024px) */}
        <div className="lg:hidden px-6 sm:px-12 py-16 space-y-6 max-w-3xl mx-auto">
          <p className="font-sans-nav f-eyebrow text-[#738A84]">
            OUR CLINICAL PHILOSOPHY
          </p>
          <h2 className="font-serif-heading f-h2 text-[#242424]">
            A warm, collaborative, and grounded approach to therapy.
          </h2>
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#E5DDD1]">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__286_29.jpg"
              alt="A joyous moment of connection and lightness on the beach"
              fill
              sizes="(max-width: 1024px) 100vw, 23vw"
              className="object-cover object-center"
            />
          </div>
          <div className="space-y-4 text-[16px] font-body font-light text-[#242424] leading-relaxed">
            <p className="font-sans-nav f-caps text-[#242424]">
              Sessions in my practice are structured to feel deeply supportive and clarifying, leaving ample space for reflection.
            </p>
            <p>
              I integrate evidence-based modalities including Cognitive-Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), mindfulness-based practices, and body-oriented techniques. Together, we address both the emotional thought loops and physiological tension you carry.
            </p>
            <p>
              Trauma and anxiety work is paced carefully, prioritizing safety, nervous system stabilization, and practical integration so you feel more centered and regulated in your everyday life—not just during our 50 minutes together. You won&apos;t find passive listening or rigid one-size-fits-all worksheets here.
            </p>
          </div>
          <div>
            <a href="#about" className="maya-btn-underline">
              LEARN MORE ABOUT DR. MAYA REYNOLDS
            </a>
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid (>=1024px) */}
        <div className="hidden lg:grid sqs-fluid-grid-20" style={{ ["--row-count" as string]: 24 }}>
          {/* Eyebrow: 4 / 3 / 6 / 15 */}
          <div style={{ gridColumn: "3 / 15", gridRow: "4 / 6" }} className="fe-block fe-top">
            <p className="font-sans-nav f-eyebrow text-[#738A84]">
              OUR CLINICAL PHILOSOPHY
            </p>
          </div>

          {/* H2 Heading: 8 / 3 / 10 / 20 */}
          <div style={{ gridColumn: "3 / 20", gridRow: "8 / 10" }} className="fe-block">
            <h2 className="font-serif-heading f-h2 text-[#242424]">
              A warm, collaborative, and grounded approach to therapy.
            </h2>
          </div>

          {/* Right Image: 4 / 21 / 22 / 27 */}
          <div style={{ gridColumn: "21 / 27", gridRow: "4 / 22" }} className="fe-block relative overflow-hidden">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__286_29.jpg"
              alt="A joyous moment of connection and lightness on the beach"
              fill
              sizes="23vw"
              className="object-cover"
              style={{ objectPosition: "21.6259% 45.6029%" }}
            />
          </div>

          {/* Paragraph Col 1: 11 / 3 / 20 / 11 */}
          <div style={{ gridColumn: "3 / 11", gridRow: "11 / 20" }} className="fe-block fe-top">
            <div className="fe-rte">
              <p className="font-sans-nav f-caps text-[#242424]">
                Sessions in my practice are structured to feel deeply supportive and clarifying, leaving ample space for reflection.
              </p>
              <p className="font-body f-body text-[#242424]">
                I integrate evidence-based modalities including Cognitive-Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), mindfulness-based practices, and body-oriented techniques. Together, we address both the emotional thought loops and physiological tension you carry.
              </p>
            </div>
          </div>

          {/* Paragraph Col 2: 11 / 11 / 20 / 19 */}
          <div style={{ gridColumn: "11 / 19", gridRow: "11 / 20" }} className="fe-block fe-top">
            <p className="font-body f-body text-[#242424]">
              Trauma and anxiety work is paced carefully, prioritizing safety, nervous system stabilization, and practical integration so you feel more centered and regulated in your everyday life—not just during our 50 minutes together. We work together as collaborative partners to help you understand your internal world, build durable coping tools, and cultivate a stronger, kinder relationship with yourself.
            </p>
          </div>

          {/* Button: 21 / 3 / 23 / 19 */}
          <div style={{ gridColumn: "3 / 19", gridRow: "21 / 23" }} className="fe-block fe-top items-start">
            <a href="#about" className="maya-btn-underline">
              LEARN MORE ABOUT DR. MAYA REYNOLDS
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: SECONDARY AFFIRMATION BANNER (Pure White #FFFFFF)
          Image: cols 1 to 15 (flush left edge), rows 1 to 15
          Text: cols 16 to 26, rows 9 to 15
      ========================================================================== */}
      <section className="bg-white py-16 md:py-[6.6vmax] overflow-hidden border-t border-[#E5DDD1]/40">
        {/* Mobile & Tablet View (<1024px) */}
        <div className="lg:hidden space-y-6 max-w-3xl mx-auto">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__285_29.jpg"
              alt="Serene ocean shoreline at sunset"
              fill
              sizes="(max-width: 1024px) 100vw, 54vw"
              className="object-cover object-center"
            />
          </div>
          <div className="px-6 pb-12">
            <h2 className="font-serif-heading f-h2 text-[#242424]">
              Honoring where you’ve been{" "}
              <span className="font-script f-script text-[#A45D43]">
                &amp;
              </span>
              <br />
              helping shape a sustainable, fulfilling path forward.
            </h2>
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid (>=1024px) */}
        <div className="hidden lg:grid sqs-fluid-grid-11" style={{ ["--row-count" as string]: 14 }}>
          {/* Left Image: 1 / 1 / 15 / 15 */}
          <div style={{ gridColumn: "1 / 15", gridRow: "1 / 15" }} className="fe-block relative overflow-hidden">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__285_29.jpg"
              alt="Serene ocean shoreline at sunset"
              fill
              sizes="54vw"
              className="object-cover object-center"
            />
          </div>

          {/* Quote Text: 9 / 16 / 15 / 26 */}
          <div style={{ gridColumn: "16 / 26", gridRow: "9 / 15" }} className="fe-block fe-bottom">
            <h2 className="font-serif-heading f-h2 text-[#242424]">
              Honoring where you’ve been{" "}
              <span className="font-script f-script text-[#A45D43]">
                &amp;
              </span>{" "}
              helping shape a sustainable, fulfilling path forward.
            </h2>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: OUR SPECIALTIES INCLUDE… (Pure White #FFFFFF)
          Title: cols 3 to 10, rows 3 to 7
          Col 1 (Anxiety): cols 11 to 18, rows 4 to 14
          Col 1 (Burnout): cols 11 to 18, rows 15 to 25
          Col 2 (EMDR): cols 19 to 26, rows 4 to 14
          Col 2 (Nervous System): cols 19 to 26, rows 15 to 25
      ========================================================================== */}
      <section id="specialties" className="bg-white border-t border-[#E5DDD1]/40 overflow-hidden">
        {/* Mobile & Tablet View (<1024px) */}
        <div className="lg:hidden px-6 sm:px-12 py-16 space-y-10 max-w-5xl mx-auto">
          <h3 className="font-serif-heading f-h3 text-[#242424]">
            Our{" "}
            <span className="font-script f-script text-[#A45D43]">
              specialties
            </span>
            <br />
            include…
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="font-serif-heading f-h4 text-[#242424]">
                Anxiety &amp; Panic Therapy
              </h3>
              <p className="font-body f-body text-[#242424]">
                Untangling persistent worry, catastrophic thinking loops, and somatic panic sensations. Through a thoughtful combination of CBT and somatic grounding, we identify the cognitive patterns and physiological triggers driving your anxiety, helping you regain control and feel truly safe in your body.
              </p>
              <div>
                <a href="#consultation" className="maya-btn-underline">
                  LEARN MORE
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-serif-heading f-h4 text-[#242424]">
                Trauma Recovery &amp; EMDR
              </h3>
              <p className="font-body f-body text-[#242424]">
                Evidence-based trauma therapy that reprocesses painful memories so they no longer control your present. EMDR works by reactivating your brain&apos;s natural information processing system, reducing emotional distress and restoring deep self-compassion.
              </p>
              <div>
                <a href="#consultation" className="maya-btn-underline">
                  LEARN MORE
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-serif-heading f-h4 text-[#242424]">
                Burnout &amp; Perfectionism
              </h3>
              <p className="font-body f-body text-[#242424]">
                Helping high-achieving professionals and creatives step out of chronic exhaustion and relentless internal pressure. In therapy, we examine the roots of internal high expectations, establish healthy psychological boundaries, and cultivate sustainable rhythms.
              </p>
              <div>
                <a href="#consultation" className="maya-btn-underline">
                  LEARN MORE
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-serif-heading f-h4 text-[#242424]">
                Nervous System Regulation
              </h3>
              <p className="font-body f-body text-[#242424]">
                Connecting the mind and the body through polyvagal-informed somatic techniques. We help you recognize subtle autonomic triggers before panic escalates, teaching your nervous system how to return safely to calm presence and grounded ease.
              </p>
              <div>
                <a href="#consultation" className="maya-btn-underline">
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid (>=1024px) */}
        <div className="hidden lg:grid sqs-fluid-grid-11" style={{ ["--row-count" as string]: 25 }}>
          {/* Title: 3 / 3 / 7 / 10 */}
          <div style={{ gridColumn: "3 / 10", gridRow: "3 / 7" }} className="fe-block">
            <h3 className="font-serif-heading f-h3 text-[#242424]">
              Our{"  "}
              <span className="font-script f-script text-[#A45D43]">
                specialties
              </span>{" "}
              include…
            </h3>
          </div>

          {[
            {
              title: "Anxiety & Panic Therapy",
              col: "11 / 18",
              row: "4 / 11",
              btnRow: "11 / 13",
              body: "Untangling persistent worry, catastrophic thinking loops, and somatic panic sensations. Through CBT and somatic grounding, we identify the cognitive patterns and physiological triggers driving your anxiety, helping you regain control and feel truly safe in your body.",
            },
            {
              title: "Burnout & Perfectionism",
              col: "11 / 18",
              row: "15 / 22",
              btnRow: "22 / 24",
              body: "Helping high-achieving professionals, entrepreneurs, and creatives step out of chronic exhaustion and internal pressure. We examine the roots of relentless expectations, establish healthy boundaries, and cultivate sustainable rhythms that protect your well-being.",
            },
            {
              title: "Trauma Recovery & EMDR",
              col: "19 / 26",
              row: "4 / 11",
              btnRow: "11 / 13",
              body: "Evidence-based trauma therapy that reprocesses painful memories so they no longer control your present. EMDR works by reactivating your brain's natural information processing system, reducing emotional distress and restoring deep self-compassion.",
            },
            {
              title: "Nervous System Regulation",
              col: "19 / 26",
              row: "15 / 22",
              btnRow: "22 / 24",
              body: "Connecting the mind and the body through polyvagal-informed somatic techniques. We help you recognize subtle autonomic triggers before panic escalates, teaching your nervous system how to return safely to calm presence and grounded ease.",
            },
          ].flatMap(({ title, col, row, btnRow, body }) => [
            <div
              key={title}
              style={{ gridColumn: col, gridRow: row }}
              className="fe-block fe-top"
            >
              <div className="fe-rte">
                <h4 className="font-serif-heading f-h4 text-[#242424]">{title}</h4>
                <p className="font-body f-body text-[#242424]">{body}</p>
              </div>
            </div>,
            <div
              key={`${title}-cta`}
              style={{ gridColumn: col, gridRow: btnRow }}
              className="fe-block fe-top items-start"
            >
              <a href="#consultation" className="maya-btn-underline">
                LEARN MORE
              </a>
            </div>,
          ])}
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: DEDICATED OFFICE SANCTUARY IN SANTA MONICA
          Showcasing authentic client photos office1.jpeg and office2.jpeg
      ========================================================================== */}
      <section id="our-office" className="w-full bg-[#F8F6F2] py-16 md:py-[4.5vmax] border-t border-[#E5DDD1]/50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 space-y-12">
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <p className="font-sans-nav f-eyebrow text-[#738A84]">
              IN-PERSON SANTA MONICA &amp; VIRTUAL CALIFORNIA CARE
            </p>
            <h2 className="font-serif-heading f-h2 text-[#242424]">
              Our Office — A Calm Sanctuary for Healing in Santa Monica
            </h2>
            <p className="font-body f-body text-[#242424] pt-1">
              Located at <strong>123th Street 45 W, Santa Monica, CA 90401</strong>, our therapy space is intentionally designed with soft natural light, warm organic materials, and an acoustic environment that immediately invites an exhale.
            </p>
          </div>

          {/* Authentic Office Imagery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Main Therapy Room (Office 1) */}
            <div className="md:col-span-7 space-y-3">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFEBE3] shadow-sm">
                <Image
                  src="/assets/office1.jpeg"
                  alt="Dr. Maya Reynolds Santa Monica therapy office with soft natural light and comfortable seating"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center"
                />
              </div>
              <p className="font-sans-nav text-[12px] tracking-[1.5px] uppercase text-[#738A84]">
                Main Therapy Room • Sound Isolated &amp; Naturally Lit
              </p>
            </div>

            {/* Consultation Corner (Office 2) + Details */}
            <div className="md:col-span-5 space-y-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EFEBE3] shadow-sm">
                <Image
                  src="/assets/office2.jpeg"
                  alt="Quiet consultation corner with warm organic textures and plants"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="space-y-4 text-[15px] font-body font-light text-[#242424] leading-relaxed">
                <div className="border-l-2 border-[#A45D43] pl-4 space-y-1">
                  <h4 className="font-serif-heading text-[20px] font-normal text-[#242424]">
                    Acoustic Privacy &amp; Comfort
                  </h4>
                  <p className="text-[14.5px] text-[#555]">
                    Thoughtfully isolated environment designed for complete confidentiality, security, and vulnerable reflection.
                  </p>
                </div>
                <div className="border-l-2 border-[#A45D43] pl-4 space-y-1">
                  <h4 className="font-serif-heading text-[20px] font-normal text-[#242424]">
                    Hybrid Care Across California
                  </h4>
                  <p className="text-[14.5px] text-[#555]">
                    In-person sessions in Santa Monica, plus secure HIPAA-compliant telehealth for clients residing across California.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10: SCHEDULE AN APPOINTMENT (Flanked by edge-anchored photos)
          Left Photo: cols 1 to 4 (flush left), rows 4 to 16
          Center: cols 6 to 16, rows 1 to 16
          Right Photo: cols 18 to 27 (flush right), rows 1 to 16
      ========================================================================== */}
      <section id="appointment" className="w-full bg-[#F8F6F2] py-16 md:py-[6.6vmax] overflow-hidden border-t border-[#E5DDD1]/50">
        {/* Mobile & Tablet View (<1024px) */}
        <div className="lg:hidden px-6 sm:px-12 space-y-6 text-left max-w-3xl mx-auto">
          <p className="font-sans-nav f-eyebrow text-[#738A84]">
            SCHEDULE A CONSULTATION
          </p>
          <h2 className="font-serif-heading f-h2 text-[#242424]">
            Find a therapist who is the
            <br className="hidden sm:inline" />
            {" "}right fit for{" "}
            <span className="font-script f-script text-[#A45D43]">
              you
            </span>
            .
          </h2>
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#EFEBE3]">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__2811_29.jpg"
              alt="Peaceful beach sand and calming shore"
              fill
              sizes="(max-width: 1024px) 100vw, 35vw"
              className="object-cover object-center"
            />
          </div>
          <div className="space-y-4 font-body f-body text-[#242424]">
            <p>
              Reaching out for therapy is a courageous decision, and working with someone who truly understands your lived reality makes all the difference.
            </p>
            <p className="font-body f-body text-[#242424]">
              I invite you to schedule an initial 15-minute consultation to discuss what you&apos;re seeking and explore if my approach aligns with your needs.
            </p>
          </div>
          <div className="pt-2">
            <a href="#consultation" className="maya-btn-pill">
              BOOK A CONSULTATION
            </a>
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid (>=1024px) */}
        <div className="hidden lg:grid sqs-fluid-grid-11" style={{ ["--row-count" as string]: 16 }}>
          {/* Left Photo: 4 / 1 / 16 / 4 */}
          <div style={{ gridColumn: "1 / 4", gridRow: "4 / 16" }} className="fe-block relative overflow-hidden">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__2812_29.jpg"
              alt="Person reflecting peacefully on the beach"
              fill
              sizes="12vw"
              className="object-cover object-center"
            />
          </div>

          {/* Eyebrow: 1 / 6 / 3 / 16 */}
          <div style={{ gridColumn: "6 / 16", gridRow: "1 / 3" }} className="fe-block fe-top">
            <p className="font-sans-nav f-eyebrow text-[#738A84]">
              SCHEDULE A CONSULTATION
            </p>
          </div>

          {/* H2 Heading: 4 / 6 / 8 / 16 */}
          <div style={{ gridColumn: "6 / 16", gridRow: "4 / 8" }} className="fe-block fe-top">
            <h2 className="font-serif-heading f-h2 text-[#242424]">
              Find a therapist who is the
              <br /> right fit for{" "}
              <span className="font-script f-script text-[#A45D43]">
                you
              </span>
              .
            </h2>
          </div>

          {/* Body text: 8 / 6 / 14 / 16 */}
          <div style={{ gridColumn: "6 / 16", gridRow: "8 / 14" }} className="fe-block fe-top">
            <div className="fe-rte">
              <p className="font-body f-body text-[#242424]">
                Reaching out for therapy is a courageous decision, and working with someone who truly understands your lived reality makes all the difference.
              </p>
              <p className="font-body f-body text-[#242424]">
                I invite you to schedule an initial 15-minute consultation to discuss what you&apos;re seeking and explore if my approach aligns with your needs.
              </p>
            </div>
          </div>

          {/* CTA Button: 14 / 6 / 16 / 16 */}
          <div style={{ gridColumn: "6 / 16", gridRow: "14 / 16" }} className="fe-block items-start">
            <a href="#consultation" className="maya-btn-pill">
              BOOK A CONSULTATION
            </a>
          </div>

          {/* Right Photo: 1 / 18 / 16 / 27 */}
          <div style={{ gridColumn: "18 / 27", gridRow: "1 / 16" }} className="fe-block relative overflow-hidden">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__2811_29.jpg"
              alt="Sunset reflections along the Santa Monica shore"
              fill
              sizes="35vw"
              className="object-cover"
              style={{ objectPosition: "62.8568% 52.8033%" }}
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: FAQS ACCORDION (Pure White #FFFFFF)
      ========================================================================== */}
      <section id="faqs" className="bg-white py-16 md:py-[5.5vmax] border-t border-[#E5DDD1]/40 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-10">
          <div className="text-center space-y-3">
            <p className="font-sans-nav f-eyebrow text-[#738A84]">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="font-serif-heading f-h2 text-[#242424]">
              Everything you need to know about getting started.
            </h2>
          </div>

          {/* Accordion List */}
          <div className="border-t border-[#E5DDD1] divide-y divide-[#E5DDD1]">
            {faqs.map((faq, idx) => (
              <div key={faq.q} className="py-6">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between text-left group cursor-pointer"
                >
                  <span className="font-serif-heading text-[18px] sm:text-[21px] lg:text-[23px] font-light text-[#242424] group-hover:text-[#A45D43] transition-colors pr-4 sm:pr-6">
                    {faq.q}
                  </span>
                  <span className="text-[#A45D43] flex-shrink-0">
                    {openFaq === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="pt-4 pr-4 sm:pr-6 text-[15px] sm:text-[16px] font-body font-light text-[#444] leading-[26px] sm:leading-[28px]">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12: INTERACTIVE CONSULTATION FORM (Warm Dune Sand #EFEBE3)
      ========================================================================== */}
      <section id="consultation" className="bg-[#EFEBE3] py-16 md:py-[5.5vmax] border-t border-[#E5DDD1]/50 overflow-hidden">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-12 space-y-8">
          <div className="text-center space-y-3">
            <p className="font-sans-nav f-eyebrow text-[#738A84]">
              GET IN TOUCH
            </p>
            <h2 className="font-serif-heading f-h2 text-[#242424]">
              Schedule Your 15-Minute Phone Consultation
            </h2>
            <p className="font-body text-[16px] font-light text-[#242424] max-w-xl mx-auto">
              Please share a few details below and Dr. Maya Reynolds will get back to you within 24–48 business hours.
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-[#F8F6F2] border border-[#A45D43]/40 p-6 sm:p-8 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#A45D43]/10 text-[#A45D43] mx-auto">
                <Check className="w-6 h-6" />
              </div>
              <h3 className="font-serif-heading text-2xl font-normal text-[#242424]">
                Thank You, {formData.name}
              </h3>
              <p className="font-body text-[15.5px] font-light text-[#555] max-w-md mx-auto">
                Your consultation inquiry has been received. Dr. Maya Reynolds will review your details and reach out to {formData.email} shortly to schedule your call.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-6 bg-[#F8F6F2] p-6 sm:p-8 md:p-10 border border-[#E5DDD1]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans-nav text-[12px] uppercase tracking-[1.2px] text-[#444] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white border border-[#E5DDD1] px-4 py-3 text-sm font-body text-[#242424] focus:outline-none focus:border-[#A45D43]"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label className="block font-sans-nav text-[12px] uppercase tracking-[1.2px] text-[#444] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white border border-[#E5DDD1] px-4 py-3 text-sm font-body text-[#242424] focus:outline-none focus:border-[#A45D43]"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block font-sans-nav text-[12px] uppercase tracking-[1.2px] text-[#444] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-[#E5DDD1] px-4 py-3 text-sm font-body text-[#242424] focus:outline-none focus:border-[#A45D43]"
                    placeholder="(310) 555-0123"
                  />
                </div>
                <div>
                  <label className="block font-sans-nav text-[12px] uppercase tracking-[1.2px] text-[#444] mb-2">
                    Preferred Session Format
                  </label>
                  <select
                    value={formData.format}
                    onChange={(e) => setFormData({ ...formData, format: e.target.value })}
                    className="w-full bg-white border border-[#E5DDD1] px-4 py-3 text-sm font-body text-[#242424] focus:outline-none focus:border-[#A45D43]"
                  >
                    <option>In-Person (Santa Monica Office)</option>
                    <option>Telehealth (Across California)</option>
                    <option>Flexible / Hybrid</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-sans-nav text-[12px] uppercase tracking-[1.2px] text-[#444] mb-2">
                  Primary Area of Focus
                </label>
                <select
                  value={formData.focus}
                  onChange={(e) => setFormData({ ...formData, focus: e.target.value })}
                  className="w-full bg-white border border-[#E5DDD1] px-4 py-3 text-sm font-body text-[#242424] focus:outline-none focus:border-[#A45D43]"
                >
                  <option>Anxiety &amp; Panic Symptoms</option>
                  <option>Trauma Recovery &amp; EMDR</option>
                  <option>Burnout, Perfectionism &amp; Exhaustion</option>
                  <option>Life Transition or Self-Doubt</option>
                  <option>Other / Unsure</option>
                </select>
              </div>

              <div>
                <label className="block font-sans-nav text-[12px] uppercase tracking-[1.2px] text-[#444] mb-2">
                  What would you like support with? (Brief overview)
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-[#E5DDD1] px-4 py-3 text-sm font-body text-[#242424] focus:outline-none focus:border-[#A45D43]"
                  placeholder="Share what brings you to therapy at this time..."
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="maya-btn-pill w-full sm:w-auto"
                >
                  Send Consultation Request
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* =========================================================================
          SECTION 13: FOOTER (Pure White #FFFFFF)
          4 Columns: Brand/Intro, Navigate, Specialties, Contact
      ========================================================================== */}
      <footer id="about" className="bg-white py-16 md:py-[4.5vmax] border-t border-[#E5DDD1]/50 overflow-hidden">
        {/* Mobile & Tablet View (<1024px) */}
        <div className="lg:hidden px-6 sm:px-12 space-y-10 max-w-5xl mx-auto sm:grid sm:grid-cols-2 sm:gap-10 sm:space-y-0">
          <div className="space-y-4">
            <span className="font-serif-heading text-[22px] font-light tracking-[-0.3px] text-[#242424] block">
              Dr. Maya Reynolds, PsyD
            </span>
            <span className="font-sans-nav text-[11px] font-normal tracking-[2px] uppercase text-[#738A84] block">
              Licensed Clinical Psychologist • Santa Monica, CA
            </span>
            <p className="font-body f-body text-[#242424]">
              Specialized, grounded psychological therapy for thoughtful adults navigating anxiety, trauma, and burnout. Welcoming clients in-person at our Santa Monica sanctuary and throughout California via secure telehealth.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-sans-nav f-eyebrow text-[#242424]">
              NAVIGATE
            </h4>
            <ul className="space-y-[10px] font-body f-foot text-[#242424]">
              <li><a href="/part-3" className="hover:text-[#A45D43] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#A45D43] transition-colors">About Dr. Maya</a></li>
              <li><a href="#who-we-help" className="hover:text-[#A45D43] transition-colors">Who We Help</a></li>
              <li><a href="#specialties" className="hover:text-[#A45D43] transition-colors">Specialties</a></li>
              <li><a href="#our-office" className="hover:text-[#A45D43] transition-colors">Our Office</a></li>
              <li><a href="#faqs" className="hover:text-[#A45D43] transition-colors">FAQs</a></li>
              <li><a href="#consultation" className="hover:text-[#A45D43] transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-sans-nav f-eyebrow text-[#242424]">
              CLINICAL SPECIALTIES
            </h4>
            <ul className="space-y-[6px] font-body f-foot text-[#242424]">
              <li><a href="#specialties" className="hover:text-[#A45D43] transition-colors">Anxiety &amp; Panic Therapy</a></li>
              <li><a href="#specialties" className="hover:text-[#A45D43] transition-colors">Trauma Recovery &amp; EMDR</a></li>
              <li><a href="#specialties" className="hover:text-[#A45D43] transition-colors">Burnout &amp; Perfectionism</a></li>
              <li><a href="#specialties" className="hover:text-[#A45D43] transition-colors">Nervous System Regulation</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-sans-nav f-eyebrow text-[#242424]">
              CONTACT &amp; OFFICE
            </h4>
            <div className="space-y-3 font-body f-foot text-[#242424]">
              <p>
                123th Street 45 W
                <br />
                Santa Monica, CA 90401
              </p>
              <p>
                <a href="mailto:dr.maya@reynoldspsychology.com" className="hover:text-[#A45D43] transition-colors">
                  dr.maya@reynoldspsychology.com
                </a>
              </p>
              <p>
                <a href="tel:3105550194" className="hover:text-[#A45D43] transition-colors">
                  (310) 555-0194
                </a>
              </p>
              <p className="font-body f-foot text-[#242424] pt-1">
                Serving Santa Monica, Venice, Brentwood, Pacific Palisades, Westwood, &amp; statewide California via Telehealth
              </p>
            </div>
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid (>=1024px) */}
        <div className="hidden lg:grid sqs-fluid-grid-11" style={{ ["--row-count" as string]: 9 }}>
          {/* Brand/Identity: 1 / 2 / 5 / 9 */}
          <div style={{ gridColumn: "2 / 9", gridRow: "1 / 4" }} className="fe-block fe-top">
            <div className="space-y-1">
              <span className="font-serif-heading text-[22px] font-light tracking-[-0.3px] text-[#242424] block">
                Dr. Maya Reynolds, PsyD
              </span>
              <span className="font-sans-nav text-[11px] font-normal tracking-[2px] uppercase text-[#738A84] block">
                Licensed Clinical Psychologist • Santa Monica, CA
              </span>
            </div>
          </div>

          {/* Warm Intro: 4 / 2 / 9 / 10 */}
          <div style={{ gridColumn: "2 / 10", gridRow: "4 / 9" }} className="fe-block fe-top fe-pad-6">
            <p className="font-body f-body text-[#242424]">
              Specialized, grounded psychological therapy for thoughtful adults navigating anxiety, trauma, and burnout. Welcoming clients in-person at our Santa Monica sanctuary and throughout California via secure telehealth.
            </p>
          </div>

          {/* Navigate: 1 / 12 / 6 / 16 */}
          <div style={{ gridColumn: "12 / 16", gridRow: "1 / 6" }} className="fe-block fe-top">
            <div className="fe-rte">
              <p className="font-sans-nav f-eyebrow text-[#242424]">Navigate</p>
              <p className="font-body f-foot text-[#242424]">
                <a href="/part-3" className="hover:text-[#A45D43] transition-colors">Home</a>
                <br />
                <a href="#about" className="hover:text-[#A45D43] transition-colors">About Dr. Maya</a>
                <br />
                <a href="#who-we-help" className="hover:text-[#A45D43] transition-colors">Who We Help</a>
                <br />
                <a href="#specialties" className="hover:text-[#A45D43] transition-colors">Specialties</a>
                <br />
                <a href="#our-office" className="hover:text-[#A45D43] transition-colors">Our Office</a>
                <br />
                <a href="#faqs" className="hover:text-[#A45D43] transition-colors">FAQs</a>
                <br />
                <a href="#consultation" className="hover:text-[#A45D43] transition-colors">Contact</a>
              </p>
            </div>
          </div>

          {/* Specialties: 1 / 16 / 10 / 21 */}
          <div style={{ gridColumn: "16 / 21", gridRow: "1 / 10" }} className="fe-block fe-top">
            <div className="fe-rte">
              <p className="font-sans-nav f-eyebrow text-[#242424]">Specialties</p>
              <p className="font-body f-foot text-[#242424]">
                <a href="#specialties" className="hover:text-[#A45D43] transition-colors">Anxiety &amp; Panic Therapy</a>
                <br />
                <a href="#specialties" className="hover:text-[#A45D43] transition-colors">Trauma Recovery &amp; EMDR</a>
                <br />
                <a href="#specialties" className="hover:text-[#A45D43] transition-colors">Burnout &amp; Perfectionism</a>
                <br />
                <a href="#specialties" className="hover:text-[#A45D43] transition-colors">Nervous System Regulation</a>
              </p>
            </div>
          </div>

          {/* Contact: 1 / 21 / 10 / 26 */}
          <div style={{ gridColumn: "21 / 26", gridRow: "1 / 10" }} className="fe-block fe-top">
            <div className="fe-rte">
              <p className="font-sans-nav f-eyebrow text-[#242424]">Contact</p>
              <p className="font-body f-foot text-[#242424]">
                123th Street 45 W
                <br />
                Santa Monica, CA 90401
                <br />
                <a
                  href="mailto:dr.maya@reynoldspsychology.com"
                  className="hover:text-[#A45D43] transition-colors"
                >
                  dr.maya@reynoldspsychology.com
                </a>
                <br />
                <a href="tel:3105550194" className="hover:text-[#A45D43] transition-colors">
                  (310) 555-0194
                </a>
              </p>
              <p className="font-body f-foot italic text-[#242424]">
                Serving Santa Monica, Venice, Brentwood, Pacific Palisades, &amp; across CA via Telehealth
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* =========================================================================
          SECTION 14: SUB-FOOTER LEGAL BAR (Santa Monica Terracotta Accent #A45D43)
      ========================================================================== */}
      <div className="bg-[#A45D43] text-white py-3 md:py-[0.5vmax]">
        <div className="lg:hidden px-6 sm:px-12 py-3 text-center sm:text-left font-body f-foot">
          © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All Rights Reserved. | Terms &amp; Conditions | Privacy Policy | Notice of Privacy Practices | Santa Monica, CA
        </div>
        <div className="hidden lg:grid sqs-fluid-grid-11" style={{ ["--row-count" as string]: 1 }}>
          <div style={{ gridColumn: "2 / 26", gridRow: "1 / 2" }} className="fe-block fe-pad-2">
            <p className="font-body f-foot">© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All Rights Reserved. | Terms &amp; Conditions | Privacy Policy | Notice of Privacy Practices | Santa Monica, CA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
