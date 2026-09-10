"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Plus, Minus, Check } from "lucide-react";

export default function Part2CreativeRedesignPage() {
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
          Height: 129px, warm linen background, clean uppercase typography
      ========================================================================== */}
      <header className="relative bg-[#F8F6F2] w-full z-40 h-[129px] flex items-center border-b border-[#E5DDD1]/40">
        <div className="w-full px-6 md:px-12 lg:px-[96px] flex items-center justify-between">
          {/* Brand Typographic Identity */}
          <Link href="/part-2" className="block flex-shrink-0 group">
            <span className="font-serif-heading text-[22px] sm:text-[25px] font-light tracking-[-0.3px] text-[#242424] block leading-tight group-hover:text-[#A45D43] transition-colors">
              Dr. Maya Reynolds, PsyD
            </span>
            <span className="font-sans-nav text-[10px] sm:text-[11px] font-normal tracking-[2px] uppercase text-[#738A84] block mt-0.5">
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
          <div className="lg:hidden bg-[#F8F6F2] border-b border-[#E5DDD1] px-6 py-6 space-y-4 absolute top-[129px] left-0 w-full shadow-lg z-50">
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
        {/* Mobile View (<768px) */}
        <div className="md:hidden px-6 pt-6 pb-12 space-y-6">
          <div className="relative aspect-[526/596] w-full overflow-hidden bg-[#EFEBE3]">
            <Image
              src="/assets/Dr. Maya Reynolds.png"
              alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica"
              fill
              sizes="100vw"
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="space-y-4">
            <p className="font-sans-nav text-[13px] font-normal tracking-[1.8px] uppercase text-[#738A84]">
              ONLINE &amp; IN-PERSON THERAPY IN SANTA MONICA &amp; ACROSS CA
            </p>
            <h1 className="font-serif-heading text-[36px] font-light text-[#242424] leading-[1.18] tracking-[-0.625px]">
              Reclaim your calm, rebuild<br />your foundation, and finally<br />begin to{" "}
              <span className="font-script text-[48px] text-[#A45D43]">thrive.</span>
            </h1>
            <p className="font-body text-[16px] text-[#242424] font-light leading-relaxed">
              Specialized psychological therapy for high-achieving adults navigating anxiety, trauma, and burnout. Combining practical tools with deep, lasting healing.
            </p>
            <div>
              <a href="#consultation" className="maya-btn-underline text-[12.26px] tracking-[1.47px]">
                SCHEDULE A CONSULTATION
              </a>
            </div>
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid (>=768px) */}
        <div className="hidden md:grid sqs-fluid-grid-11" style={{ minHeight: "560px" }}>
          {/* Left Image: col 1 to 10 (flush to left edge), row 2 to 17 */}
          <div style={{ gridColumn: "1 / 10", gridRow: "2 / 17" }} className="relative w-full h-full min-h-[520px]">
            <Image
              src="/assets/Dr. Maya Reynolds.png"
              alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist"
              fill
              sizes="(max-width: 1024px) 45vw, 36vw"
              className="object-cover object-top"
              priority
            />
          </div>

          {/* Eyebrow: col 12 to 24, row 2 to 4 */}
          <div style={{ gridColumn: "12 / 24", gridRow: "2 / 4" }} className="flex items-end pb-2">
            <p className="font-sans-nav text-[14px] lg:text-[15px] font-normal tracking-[1.8px] uppercase text-[#738A84] leading-[26px]">
              ONLINE &amp; IN-PERSON THERAPY IN SANTA MONICA &amp; ACROSS CA
            </p>
          </div>

          {/* H1 Heading & Paragraph: col 12 to 24, row 6 to 15 */}
          <div style={{ gridColumn: "12 / 24", gridRow: "6 / 15" }} className="flex flex-col justify-center space-y-4">
            <h1 className="font-serif-heading text-[38px] lg:text-[50px] xl:text-[62.5px] font-light text-[#242424] leading-[1.18] tracking-[-0.625px]">
              <span className="inline-block whitespace-nowrap">Reclaim your calm, rebuild</span>
              <br />
              <span className="inline-block whitespace-nowrap">your foundation, and finally</span>
              <br />
              <span className="inline-block whitespace-nowrap">
                begin to{" "}
                <span className="font-script text-[62.5px] text-[#A45D43] font-light inline-block ml-1">
                  thrive.
                </span>
              </span>
            </h1>
            <p className="font-body text-[16.8px] text-[#242424] font-light leading-[30.3px] max-w-xl">
              Specialized psychological therapy for high-achieving adults navigating anxiety, trauma, and burnout. Combining practical tools with deep, lasting healing.
            </p>
          </div>

          {/* Button CTA: col 12 to 24, row 15 to 17 */}
          <div style={{ gridColumn: "12 / 24", gridRow: "15 / 17" }} className="pt-2">
            <a
              href="#consultation"
              className="maya-btn-underline text-[12.26px] tracking-[1.47px]"
            >
              SCHEDULE A CONSULTATION
            </a>
          </div>

          {/* Right Image: Coastal Accent: col 25 to 27 (flush right), row 7 to 17 */}
          <div style={{ gridColumn: "25 / 27", gridRow: "7 / 17" }} className="relative w-full h-full min-h-[380px] overflow-hidden">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__2867_29.jpg"
              alt="Peaceful California coastline"
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
      ========================================================================== */}
      <section className="w-full bg-[#F8F6F2] py-16 lg:py-24 border-t border-[#E5DDD1]/50 overflow-hidden">
        {/* Mobile View */}
        <div className="md:hidden px-6 space-y-6">
          <h2 className="font-serif-heading text-[30px] font-light text-[#242424] leading-[1.24]">
            You’re holding onto hope that life can feel lighter and more grounded than it does right now.
          </h2>
          <p className="font-serif-heading text-[18px] font-normal italic text-[#242424] leading-snug">
            At our Santa Monica practice, our goal is to help you turn that hope into lasting reality.
          </p>
          <p className="font-body text-[16px] font-light text-[#242424] leading-relaxed">
            Many of the people I work with are high-achieving, thoughtful, and deeply self-aware—yet internally feel exhausted, trapped in cycles of overthinking, or emotionally on edge. You may look completely composed to the outside world while quietly carrying chronic worry, persistent tension in your body, or an unspoken fear of things falling apart.
          </p>
          <p className="font-body text-[16px] font-light text-[#242424] leading-relaxed">
            First and foremost, what you are experiencing is real, valid, and worthy of compassionate, expert support. Whether you are navigating past trauma, persistent anxiety, or the heavy weight of burnout, you don&apos;t have to carry it in isolation. Together, we create a safe, steady container to help you find your footing again and build a deeply resilient future.
          </p>
          <div className="relative aspect-[462/580] w-full overflow-hidden bg-[#EFEBE3]">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__283_29.jpg"
              alt="Peaceful ocean waves along the Santa Monica coast"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid */}
        <div className="hidden md:grid sqs-fluid-grid-20" style={{ minHeight: "560px" }}>
          {/* H2 Heading: col 3 to 17, row 4 to 8 */}
          <div style={{ gridColumn: "3 / 17", gridRow: "4 / 8" }} className="flex items-end pb-3">
            <h2 className="font-serif-heading text-[32px] sm:text-[42px] lg:text-[49.7px] font-light text-[#242424] leading-[1.24] tracking-tight">
              You’re holding onto hope that life can
              <br /> feel lighter and more grounded.
            </h2>
          </div>

          {/* Col 1 Text: col 3 to 10, row 9 to 16 */}
          <div style={{ gridColumn: "3 / 10", gridRow: "9 / 16" }} className="space-y-4 pr-2">
            <p className="font-serif-heading text-[20px] lg:text-[22px] font-normal italic text-[#242424] leading-snug">
              At our Santa Monica practice, our goal is to help you turn that hope into lasting reality.
            </p>
            <p className="font-body text-[16.8px] font-light text-[#242424] leading-[30.3px]">
              Many of the people I work with are high-achieving, thoughtful, and deeply self-aware—yet internally feel exhausted, trapped in cycles of overthinking, or emotionally on edge. You may look completely composed to the outside world while quietly carrying chronic worry or persistent tension.
            </p>
          </div>

          {/* Col 2 Text: col 10 to 17, row 9 to 17 */}
          <div style={{ gridColumn: "10 / 17", gridRow: "9 / 17" }} className="space-y-3 px-2">
            <p className="font-body text-[16.8px] font-light text-[#242424] leading-[30.3px]">
              First and foremost, what you are experiencing is real, valid, and worthy of compassionate, expert support. Whether you are navigating past trauma, persistent anxiety, or the heavy weight of burnout, you don&apos;t have to carry it in isolation. Together, we create a safe, steady container to help you find your footing again and build a deeply resilient future.
            </p>
          </div>

          {/* Right Ocean Image: col 19 to 27 (flush right), row 1 to 17 */}
          <div style={{ gridColumn: "19 / 27", gridRow: "1 / 17" }} className="relative w-full h-full min-h-[500px]">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__283_29.jpg"
              alt="Peaceful ocean waves along the Santa Monica coast"
              fill
              sizes="(max-width: 1024px) 35vw, 30vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: WHO WE HELP (Pure White #FFFFFF)
          Editorial 3-Column Architecture matching Part 1
      ========================================================================== */}
      <section id="who-we-help" className="bg-white py-16 lg:py-24 overflow-hidden border-t border-[#E5DDD1]/40">
        {/* Mobile View */}
        <div className="md:hidden px-6 space-y-12">
          <h2 className="font-serif-heading text-[36px] font-light text-[#242424] tracking-tight">
            Who we{" "}
            <span className="font-script text-[1.25em] text-[#A45D43] font-normal ml-1">
              help
            </span>
          </h2>

          {/* Column 1: High-Achieving Professionals */}
          <div className="space-y-4">
            <div className="relative aspect-[1105/1683] w-full overflow-hidden bg-neutral-100 mb-4">
              <Image
                src="/assets/maya/who-professionals.jpg"
                alt="High-achieving adult reflecting in an inspiring workspace"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
            <h3 className="font-serif-heading text-[28px] font-light text-[#242424] tracking-tight">
              High-Achieving Professionals
            </h3>
            <p className="font-body text-[16.8px] font-light text-[#242424] leading-[30.3px]">
              Entrepreneurs, creatives, attorneys, and leaders feeling depleted by perfectionism, relentless internal pressure, and chronic burnout who want to reclaim sustainable balance.
            </p>
          </div>

          {/* Column 2: Adults with Anxiety & Panic */}
          <div className="space-y-4">
            <div className="relative aspect-[1105/1683] w-full overflow-hidden bg-neutral-100 mb-4">
              <Image
                src="/assets/maya/who-anxiety.jpg"
                alt="Mindful person taking a deep breath of fresh air"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
            <h3 className="font-serif-heading text-[28px] font-light text-[#242424] tracking-tight">
              Adults with Anxiety &amp; Panic
            </h3>
            <p className="font-body text-[16.8px] font-light text-[#242424] leading-[30.3px]">
              Individuals battling constant overthinking, racing thoughts, panic sensations, or nervous system dysregulation who crave grounded relief and practical regulation tools.
            </p>
          </div>

          {/* Column 3: Individuals Healing from Trauma */}
          <div className="space-y-4">
            <div className="relative aspect-[1105/1683] w-full overflow-hidden bg-neutral-100 mb-4">
              <Image
                src="/assets/maya/who-trauma.jpg"
                alt="Warm light symbolizing emotional safety and healing"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
            <h3 className="font-serif-heading text-[28px] font-light text-[#242424] tracking-tight">
              Healing from Trauma &amp; Stress
            </h3>
            <p className="font-body text-[16.8px] font-light text-[#242424] leading-[30.3px]">
              Adults navigating the lingering impact of single-incident events or complex developmental experiences that continue to disrupt confidence, relationships, and emotional peace.
            </p>
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid (>=768px) */}
        <div className="hidden md:grid sqs-fluid-grid-20" style={{ minHeight: "750px" }}>
          {/* Heading: col 2 to 10, row 1 to 3 */}
          <div style={{ gridColumn: "2 / 10", gridRow: "1 / 3" }} className="flex items-center">
            <h2 className="font-serif-heading text-[38px] sm:text-[49.7px] font-light text-[#242424] tracking-tight">
              Who we{" "}
              <span className="font-script text-[1.25em] text-[#A45D43] font-normal ml-1">
                help
              </span>
            </h2>
          </div>

          {/* Card 1 Photo: col 5 to 12, row 4 to 15 */}
          <div style={{ gridColumn: "5 / 12", gridRow: "4 / 15" }} className="relative w-full h-full min-h-[380px] overflow-hidden">
            <Image
              src="/assets/maya/who-professionals.jpg"
              alt="High-achieving professional reflecting"
              fill
              sizes="(max-width: 1024px) 30vw, 25vw"
              className="object-cover object-center"
            />
          </div>

          {/* Card 1 Text: col 5 to 12, row 16 to 21 */}
          <div style={{ gridColumn: "5 / 12", gridRow: "16 / 21" }} className="space-y-3 pt-2">
            <h3 className="font-serif-heading text-[28px] font-light text-[#242424] tracking-tight">
              High-Achieving Professionals
            </h3>
            <p className="font-body text-[16.8px] font-light text-[#242424] leading-[30.3px]">
              Entrepreneurs, creatives, and leaders feeling depleted by perfectionism, relentless internal pressure, and chronic burnout who want to reclaim sustainable balance.
            </p>
          </div>

          {/* Card 2 Photo: col 12 to 19, row 4 to 15 */}
          <div style={{ gridColumn: "12 / 19", gridRow: "4 / 15" }} className="relative w-full h-full min-h-[380px] overflow-hidden">
            <Image
              src="/assets/maya/who-anxiety.jpg"
              alt="Person experiencing calm and steady breathing"
              fill
              sizes="(max-width: 1024px) 30vw, 25vw"
              className="object-cover object-center"
            />
          </div>

          {/* Card 2 Text: col 12 to 19, row 16 to 22 */}
          <div style={{ gridColumn: "12 / 19", gridRow: "16 / 22" }} className="space-y-3 pt-2">
            <h3 className="font-serif-heading text-[28px] font-light text-[#242424] tracking-tight">
              Adults with Anxiety &amp; Panic
            </h3>
            <p className="font-body text-[16.8px] font-light text-[#242424] leading-[30.3px]">
              Individuals battling constant overthinking, racing thoughts, panic sensations, or nervous system dysregulation who crave grounded relief and practical regulation tools.
            </p>
          </div>

          {/* Card 3 Photo: col 19 to 26, row 4 to 15 */}
          <div style={{ gridColumn: "19 / 26", gridRow: "4 / 15" }} className="relative w-full h-full min-h-[380px] overflow-hidden">
            <Image
              src="/assets/maya/who-trauma.jpg"
              alt="Warm coastal sunlight symbolizing renewal"
              fill
              sizes="(max-width: 1024px) 30vw, 25vw"
              className="object-cover object-center"
            />
          </div>

          {/* Card 3 Text: col 19 to 26, row 16 to 22 */}
          <div style={{ gridColumn: "19 / 26", gridRow: "16 / 22" }} className="space-y-3 pt-2">
            <h3 className="font-serif-heading text-[28px] font-light text-[#242424] tracking-tight">
              Healing from Trauma &amp; Stress
            </h3>
            <p className="font-body text-[16.8px] font-light text-[#242424] leading-[30.3px]">
              Adults navigating the lingering impact of single-incident events or complex developmental experiences that continue to disrupt confidence, relationships, and emotional peace.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4: QUOTE BANNER (Full-bleed photographic backdrop)
      ========================================================================== */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
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

        {/* Mobile View */}
        <div className="md:hidden relative z-10 px-6 py-12 text-center text-white">
          <blockquote className="font-serif-heading text-2xl font-light text-[#F8F6F2] leading-[1.38] tracking-tight">
            You deserve a quiet, sacred space where your story is heard, honored, and deeply understood.{" "}
            <em className="font-light italic text-[#F8F6F2]">
              Nothing you bring is too heavy for us to carry together.
            </em>
          </blockquote>
        </div>

        {/* Desktop 24-Column Fluid Grid */}
        <div className="hidden md:grid sqs-fluid-grid-11 relative z-10" style={{ minHeight: "340px" }}>
          <div style={{ gridColumn: "3 / 21", gridRow: "5 / 11" }} className="flex items-center">
            <h2 className="font-serif-heading text-2xl sm:text-3xl lg:text-[42px] font-light text-[#F8F6F2] leading-[1.38] tracking-tight">
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
      <section className="bg-white py-16 lg:py-24 overflow-hidden border-t border-[#E5DDD1]/40">
        {/* Mobile View */}
        <div className="md:hidden px-6 space-y-8">
          <h2 className="font-serif-heading text-3xl font-light text-[#242424] tracking-tight">
            Our areas of
            <br />
            <span className="font-script text-[1.3em] text-[#A45D43] font-normal block mt-1">
              expertise
            </span>
          </h2>
          <div className="space-y-0">
            {clinicalAreas.map((item) => (
              <div
                key={item}
                className="py-3.5 text-[14px] font-sans-nav font-normal uppercase tracking-[1.8px] text-[#242424] border-b border-[#E5DDD1]"
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
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-[49.7px] font-light text-[#242424] tracking-tight">
              Our areas of
              <br />
              <span className="font-script text-[1.3em] text-[#A45D43] font-normal block mt-1">
                expertise
              </span>
            </h2>
          </div>

          {/* Left Column: col 10 to 18, row 1 to 13 */}
          <div style={{ gridColumn: "10 / 18", gridRow: "1 / 13" }} className="flex flex-col justify-between">
            {clinicalAreas.slice(0, 6).map((item) => (
              <div
                key={item}
                className="py-3.5 text-[14px] lg:text-[15px] font-sans-nav font-normal uppercase tracking-[1.8px] text-[#242424] border-b border-[#E5DDD1]"
              >
                {item}
              </div>
            ))}
          </div>

          {/* Right Column: col 19 to 27, row 1 to 13 */}
          <div style={{ gridColumn: "19 / 27", gridRow: "1 / 13" }} className="flex flex-col justify-between">
            {clinicalAreas.slice(6).map((item) => (
              <div
                key={item}
                className="py-3.5 text-[14px] lg:text-[15px] font-sans-nav font-normal uppercase tracking-[1.8px] text-[#242424] border-b border-[#E5DDD1]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6: HOW WE WORK (Warm Dune Sand #EFEBE3)
      ========================================================================== */}
      <section id="approach" className="w-full bg-[#EFEBE3] py-12 lg:py-16 overflow-hidden border-t border-[#E5DDD1]/50">
        {/* Mobile View */}
        <div className="md:hidden px-6 py-16 space-y-6">
          <p className="font-sans-nav text-[13px] font-normal tracking-[1.8px] uppercase text-[#738A84]">
            OUR CLINICAL PHILOSOPHY
          </p>
          <h2 className="font-serif-heading text-[30px] font-light text-[#242424] leading-[1.2]">
            A warm, collaborative, and grounded approach to therapy.
          </h2>
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#E5DDD1]">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__286_29.jpg"
              alt="A joyous moment of connection and lightness on the beach"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="space-y-4 text-[16px] font-body font-light text-[#242424] leading-relaxed">
            <p className="font-serif-heading text-[18px] font-normal italic text-[#242424] leading-snug">
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
            <a href="#about" className="maya-btn-underline text-[12.26px] tracking-[1.47px]">
              LEARN MORE ABOUT DR. MAYA
            </a>
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid */}
        <div className="hidden md:grid sqs-fluid-grid-20" style={{ minHeight: "750px" }}>
          {/* Eyebrow: col 3 to 15, row 4 to 6 */}
          <div style={{ gridColumn: "3 / 15", gridRow: "4 / 6" }} className="flex items-end pb-1">
            <p className="font-sans-nav text-[15px] font-normal tracking-[1.8px] uppercase text-[#738A84]">
              OUR CLINICAL PHILOSOPHY
            </p>
          </div>

          {/* H2 Heading: col 3 to 20, row 8 to 10 */}
          <div style={{ gridColumn: "3 / 20", gridRow: "8 / 10" }} className="flex items-center">
            <h2 className="font-serif-heading text-[32px] sm:text-[42px] lg:text-[49.7px] font-light text-[#242424] tracking-tight leading-[1.2]">
              A warm, collaborative, and grounded approach to therapy.
            </h2>
          </div>

          {/* Right Image: col 21 to 27 (flush right), row 4 to 22 */}
          <div style={{ gridColumn: "21 / 27", gridRow: "4 / 22" }} className="relative w-full h-full min-h-[520px] overflow-hidden bg-[#E5DDD1]">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__286_29.jpg"
              alt="A joyous moment of connection and lightness on the beach"
              fill
              sizes="(max-width: 1024px) 35vw, 28vw"
              className="object-cover object-center"
            />
          </div>

          {/* Paragraph Col 1: col 3 to 11, row 11 to 20 */}
          <div style={{ gridColumn: "3 / 11", gridRow: "11 / 20" }} className="space-y-4 pr-4">
            <p className="font-serif-heading text-[20px] lg:text-[22px] font-normal italic text-[#242424] leading-snug">
              Sessions in my practice are structured to feel deeply supportive and clarifying, leaving ample space for reflection.
            </p>
            <p className="font-body text-[16.8px] font-light text-[#242424] leading-[30.3px]">
              I integrate evidence-based modalities including Cognitive-Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), mindfulness-based practices, and body-oriented techniques. Together, we address both the emotional thought loops and physiological tension you carry.
            </p>
          </div>

          {/* Paragraph Col 2: col 11 to 19, row 11 to 20 */}
          <div style={{ gridColumn: "11 / 19", gridRow: "11 / 20" }} className="space-y-3 px-2">
            <p className="font-body text-[16.8px] font-light text-[#242424] leading-[30.3px]">
              Trauma and anxiety work is paced carefully, prioritizing safety, nervous system stabilization, and practical integration so you feel more centered and regulated in your everyday life—not just during our 50 minutes together. We work together as collaborative partners to help you understand your internal world, build durable coping tools, and cultivate a stronger, kinder relationship with yourself.
            </p>
          </div>

          {/* Button: col 3 to 19, row 21 to 23 */}
          <div style={{ gridColumn: "3 / 19", gridRow: "21 / 23" }} className="pt-2">
            <a href="#about" className="maya-btn-underline text-[12.26px] tracking-[1.47px]">
              LEARN MORE ABOUT DR. MAYA REYNOLDS
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7: SECONDARY AFFIRMATION BANNER (Pure White #FFFFFF)
      ========================================================================== */}
      <section className="bg-white py-16 lg:py-24 overflow-hidden border-t border-[#E5DDD1]/40">
        {/* Mobile View */}
        <div className="md:hidden space-y-6">
          <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__285_29.jpg"
              alt="Serene ocean shoreline at sunset"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="px-6 pb-12">
            <h2 className="font-serif-heading text-[28px] font-light text-[#242424] leading-[1.22]">
              Honoring where you’ve been{" "}
              <span className="font-script text-[1.3em] text-[#A45D43] font-normal inline-block">
                &amp;
              </span>
              <br />
              helping shape a sustainable, fulfilling path forward.
            </h2>
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid */}
        <div className="hidden md:grid sqs-fluid-grid-11" style={{ minHeight: "460px" }}>
          {/* Left Image: col 1 to 15 (flush left), row 1 to 15 */}
          <div style={{ gridColumn: "1 / 15", gridRow: "1 / 15" }} className="relative w-full h-full min-h-[420px]">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__285_29.jpg"
              alt="Serene ocean shoreline at sunset"
              fill
              sizes="(max-width: 1024px) 55vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          {/* Quote Text: col 16 to 26, row 9 to 15 */}
          <div style={{ gridColumn: "16 / 26", gridRow: "9 / 15" }} className="flex items-center pl-4">
            <h2 className="font-serif-heading text-[32px] sm:text-[42px] lg:text-[49.7px] font-light text-[#242424] leading-[1.22] tracking-tight">
              Honoring where you’ve been{" "}
              <span className="font-script text-[1.3em] text-[#A45D43] font-normal inline-block">
                &amp;
              </span>
              <br />
              helping shape a sustainable, fulfilling path forward.
            </h2>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8: OUR SPECIALTIES INCLUDE… (Pure White #FFFFFF)
      ========================================================================== */}
      <section id="specialties" className="bg-white border-t border-[#E5DDD1]/40 overflow-hidden py-16 lg:py-24">
        {/* Mobile View */}
        <div className="md:hidden px-6 space-y-10">
          <h2 className="font-serif-heading text-3xl font-light text-[#242424] tracking-tight">
            Our{" "}
            <span className="font-script text-[1.3em] text-[#A45D43] font-normal">
              specialties
            </span>
            <br />
            include…
          </h2>
          <div className="space-y-8">
            <div className="space-y-3">
              <h3 className="font-serif-heading text-[26px] font-light text-[#242424]">
                Anxiety &amp; Panic Therapy
              </h3>
              <p className="font-body text-[16px] font-light text-[#242424] leading-relaxed">
                Untangling persistent worry, catastrophic thinking loops, and somatic panic sensations. Through a thoughtful combination of CBT and somatic grounding, we identify the cognitive patterns and physiological triggers driving your anxiety, helping you regain control and feel truly safe in your body.
              </p>
              <div>
                <a href="#consultation" className="maya-btn-underline text-[12px] tracking-wider">
                  LEARN MORE
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-serif-heading text-[26px] font-light text-[#242424]">
                Trauma Recovery &amp; EMDR
              </h3>
              <p className="font-body text-[16px] font-light text-[#242424] leading-relaxed">
                Evidence-based trauma therapy that reprocesses painful memories so they no longer control your present. EMDR works by reactivating your brain&apos;s natural information processing system, reducing emotional distress and restoring deep self-compassion.
              </p>
              <div>
                <a href="#consultation" className="maya-btn-underline text-[12px] tracking-wider">
                  LEARN MORE
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <h3 className="font-serif-heading text-[26px] font-light text-[#242424]">
                Burnout &amp; Perfectionism
              </h3>
              <p className="font-body text-[16px] font-light text-[#242424] leading-relaxed">
                Helping high-achieving professionals and creatives step out of chronic exhaustion and relentless internal pressure. In therapy, we examine the roots of internal high expectations, establish healthy psychological boundaries, and cultivate sustainable rhythms.
              </p>
              <div>
                <a href="#consultation" className="maya-btn-underline text-[12px] tracking-wider">
                  LEARN MORE
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid */}
        <div className="hidden md:grid sqs-fluid-grid-11" style={{ minHeight: "680px" }}>
          {/* Title: col 3 to 10, row 3 to 7 */}
          <div style={{ gridColumn: "3 / 10", gridRow: "3 / 7" }}>
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-[49.7px] font-light text-[#242424] tracking-tight">
              Our{" "}
              <span className="font-script text-[1.3em] text-[#A45D43] font-normal">
                specialties
              </span>
              <br />
              include…
            </h2>
          </div>

          {/* Col 1, Item 1 (Anxiety): col 11 to 18, row 4 to 14 */}
          <div style={{ gridColumn: "11 / 18", gridRow: "4 / 14" }} className="space-y-3 pr-4">
            <h3 className="font-serif-heading text-[28px] font-light text-[#242424] tracking-tight">
              Anxiety &amp; Panic Therapy
            </h3>
            <p className="font-body text-[16.8px] font-light text-[#242424] leading-[30.3px]">
              Untangling persistent worry, catastrophic thinking loops, and somatic panic sensations. Through CBT and somatic grounding, we identify the cognitive patterns and physiological triggers driving your anxiety, helping you regain control and feel truly safe in your body.
            </p>
            <div className="pt-2">
              <a href="#consultation" className="maya-btn-underline text-[12.26px] tracking-[1.47px]">
                LEARN MORE
              </a>
            </div>
          </div>

          {/* Col 2, Item 1 (EMDR): col 19 to 26, row 4 to 14 */}
          <div style={{ gridColumn: "19 / 26", gridRow: "4 / 14" }} className="space-y-3 pr-2">
            <h3 className="font-serif-heading text-[28px] font-light text-[#242424] tracking-tight">
              Trauma Recovery &amp; EMDR
            </h3>
            <p className="font-body text-[16.8px] font-light text-[#242424] leading-[30.3px]">
              Evidence-based trauma therapy that reprocesses painful memories so they no longer control your present. EMDR works by reactivating your brain&apos;s natural information processing system, reducing emotional distress and restoring deep self-compassion.
            </p>
            <div className="pt-2">
              <a href="#consultation" className="maya-btn-underline text-[12.26px] tracking-[1.47px]">
                LEARN MORE
              </a>
            </div>
          </div>

          {/* Col 1, Item 2 (Burnout): col 11 to 18, row 15 to 25 */}
          <div style={{ gridColumn: "11 / 18", gridRow: "15 / 25" }} className="space-y-3 pr-4 pt-4">
            <h3 className="font-serif-heading text-[28px] font-light text-[#242424] tracking-tight">
              Burnout &amp; Perfectionism
            </h3>
            <p className="font-body text-[16.8px] font-light text-[#242424] leading-[30.3px]">
              Helping high-achieving professionals, entrepreneurs, and creatives step out of chronic exhaustion and internal pressure. We examine the roots of relentless expectations, establish healthy boundaries, and cultivate sustainable rhythms that protect your well-being.
            </p>
            <div className="pt-2">
              <a href="#consultation" className="maya-btn-underline text-[12.26px] tracking-[1.47px]">
                LEARN MORE
              </a>
            </div>
          </div>

          {/* Col 2, Item 2 (Somatic Regulation): col 19 to 26, row 15 to 25 */}
          <div style={{ gridColumn: "19 / 26", gridRow: "15 / 25" }} className="space-y-3 pr-2 pt-4">
            <h3 className="font-serif-heading text-[28px] font-light text-[#242424] tracking-tight">
              Nervous System Regulation
            </h3>
            <p className="font-body text-[16.8px] font-light text-[#242424] leading-[30.3px]">
              Connecting the mind and the body through polyvagal-informed somatic techniques. We help you recognize subtle autonomic triggers before panic escalates, teaching your nervous system how to return safely to calm presence and grounded ease.
            </p>
            <div className="pt-2">
              <a href="#consultation" className="maya-btn-underline text-[12.26px] tracking-[1.47px]">
                LEARN MORE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9: DEDICATED OFFICE SANCTUARY IN SANTA MONICA
          Showcasing authentic client photos office1.jpeg and office2.jpeg
      ========================================================================== */}
      <section id="our-office" className="w-full bg-[#F8F6F2] py-16 lg:py-24 border-t border-[#E5DDD1]/50 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 space-y-12">
          {/* Header */}
          <div className="max-w-3xl space-y-3">
            <p className="font-sans-nav text-[14px] font-normal tracking-[1.8px] uppercase text-[#738A84]">
              IN-PERSON SANTA MONICA &amp; VIRTUAL CALIFORNIA CARE
            </p>
            <h2 className="font-serif-heading text-[32px] sm:text-[42px] lg:text-[49.7px] font-light text-[#242424] leading-[1.2] tracking-tight">
              Our Office — A Calm Sanctuary for Healing in Santa Monica
            </h2>
            <p className="font-body text-[16.8px] font-light text-[#242424] leading-[30.3px] pt-1">
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
      ========================================================================== */}
      <section id="appointment" className="w-full bg-[#F8F6F2] py-16 lg:py-24 overflow-hidden border-t border-[#E5DDD1]/50">
        {/* Mobile View */}
        <div className="md:hidden px-6 space-y-6 text-left">
          <p className="font-sans-nav text-[14px] font-normal tracking-[1.8px] uppercase text-[#738A84]">
            SCHEDULE A CONSULTATION
          </p>
          <h2 className="font-serif-heading text-[30px] font-light text-[#242424] leading-[1.2]">
            Find a therapist who is the
            <br />
            right fit for{" "}
            <span className="font-script text-[1.15em] text-[#A45D43] font-normal inline-block lowercase">
              you
            </span>
            .
          </h2>
          <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#EFEBE3]">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__2811_29.jpg"
              alt="Peaceful beach sand and calming shore"
              fill
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          <div className="space-y-4 text-[16.8px] font-body font-light text-[#242424] leading-[30.24px]">
            <p>
              Reaching out for therapy is a courageous decision, and working with someone who truly understands your lived reality makes all the difference.
            </p>
            <p className="font-body text-[16.8px] font-light text-[#242424] leading-[30.24px]">
              I invite you to schedule an initial 15-minute consultation to discuss what you&apos;re seeking and explore if my approach aligns with your needs.
            </p>
          </div>
          <div className="pt-2">
            <a href="#consultation" className="maya-btn-pill">
              BOOK A CONSULTATION
            </a>
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid */}
        <div className="hidden md:grid sqs-fluid-grid-11" style={{ minHeight: "560px" }}>
          {/* Left Photo: col 1 to 4 (flush to left edge), row 4 to 16 */}
          <div style={{ gridColumn: "1 / 4", gridRow: "4 / 16" }} className="relative w-full h-full min-h-[380px]">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__2812_29.jpg"
              alt="Person reflecting peacefully on the beach"
              fill
              sizes="(max-width: 1024px) 16vw, 13vw"
              className="object-cover object-center"
            />
          </div>

          {/* Eyebrow: col 6 to 16, row 1 to 3 */}
          <div style={{ gridColumn: "6 / 16", gridRow: "1 / 3" }} className="flex items-end justify-start pb-2 text-left">
            <p className="font-sans-nav text-[14px] font-normal tracking-[1.8px] uppercase text-[#738A84]">
              SCHEDULE A CONSULTATION
            </p>
          </div>

          {/* H2 Heading: col 6 to 16, row 4 to 8 */}
          <div style={{ gridColumn: "6 / 16", gridRow: "4 / 8" }} className="flex items-center justify-start text-left">
            <h2 className="font-serif-heading text-[32px] sm:text-[42px] lg:text-[49.7px] font-light text-[#242424] tracking-tight leading-[1.2]">
              Find a therapist who is the
              <br /> right fit for{" "}
              <span className="font-script text-[1.15em] text-[#A45D43] font-normal inline-block lowercase">
                you
              </span>
              .
            </h2>
          </div>

          {/* Body text: col 6 to 16, row 8 to 14 */}
          <div style={{ gridColumn: "6 / 16", gridRow: "8 / 14" }} className="flex flex-col justify-start text-left space-y-4 pt-1">
            <p className="font-body text-[16.8px] font-light text-[#242424] leading-[30.24px] max-w-lg">
              Reaching out for therapy is a courageous decision, and working with someone who truly understands your lived reality makes all the difference.
            </p>
            <p className="font-body text-[16.8px] font-light text-[#242424] leading-[30.24px]">
              I invite you to schedule an initial 15-minute consultation to discuss what you&apos;re seeking and explore if my approach aligns with your needs.
            </p>
          </div>

          {/* CTA Button: col 6 to 16, row 14 to 16 */}
          <div style={{ gridColumn: "6 / 16", gridRow: "14 / 16" }} className="flex items-start justify-start pt-2">
            <a href="#consultation" className="maya-btn-pill">
              BOOK A CONSULTATION
            </a>
          </div>

          {/* Right Photo: col 18 to 27 (flush to right edge), row 1 to 16 */}
          <div style={{ gridColumn: "18 / 27", gridRow: "1 / 16" }} className="relative w-full h-full min-h-[480px]">
            <Image
              src="/assets/conejo/Jennifer_A_-_Images__2811_29.jpg"
              alt="Sunset reflections along the Santa Monica shore"
              fill
              sizes="(max-width: 1024px) 35vw, 32vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11: FAQS ACCORDION (Pure White #FFFFFF)
      ========================================================================== */}
      <section id="faqs" className="bg-white py-16 lg:py-24 border-t border-[#E5DDD1]/40 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-10">
          <div className="text-center space-y-3">
            <p className="font-sans-nav text-[14px] font-normal tracking-[1.8px] uppercase text-[#738A84]">
              FREQUENTLY ASKED QUESTIONS
            </p>
            <h2 className="font-serif-heading text-[32px] sm:text-[42px] font-light text-[#242424] tracking-tight">
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
                  <span className="font-serif-heading text-[20px] sm:text-[23px] font-light text-[#242424] group-hover:text-[#A45D43] transition-colors pr-6">
                    {faq.q}
                  </span>
                  <span className="text-[#A45D43] flex-shrink-0">
                    {openFaq === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="pt-4 pr-6 text-[16px] font-body font-light text-[#444] leading-[28px]">
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
      <section id="consultation" className="bg-[#EFEBE3] py-16 lg:py-24 border-t border-[#E5DDD1]/50 overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 md:px-12 space-y-8">
          <div className="text-center space-y-3">
            <p className="font-sans-nav text-[14px] font-normal tracking-[1.8px] uppercase text-[#738A84]">
              GET IN TOUCH
            </p>
            <h2 className="font-serif-heading text-[32px] sm:text-[42px] font-light text-[#242424] tracking-tight">
              Schedule Your 15-Minute Phone Consultation
            </h2>
            <p className="font-body text-[16px] font-light text-[#242424] max-w-xl mx-auto">
              Please share a few details below and Dr. Maya Reynolds will get back to you within 24–48 business hours.
            </p>
          </div>

          {formSubmitted ? (
            <div className="bg-[#F8F6F2] border border-[#A45D43]/40 p-8 text-center space-y-4">
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
            <form onSubmit={handleFormSubmit} className="space-y-6 bg-[#F8F6F2] p-8 md:p-10 border border-[#E5DDD1]">
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
      <footer id="about" className="bg-white py-16 sm:py-24 border-t border-[#E5DDD1]/50 overflow-hidden">
        {/* Mobile View */}
        <div className="md:hidden px-6 space-y-10">
          <div className="space-y-4">
            <span className="font-serif-heading text-[22px] font-light tracking-[-0.3px] text-[#242424] block">
              Dr. Maya Reynolds, PsyD
            </span>
            <span className="font-sans-nav text-[11px] font-normal tracking-[2px] uppercase text-[#738A84] block">
              Licensed Clinical Psychologist • Santa Monica, CA
            </span>
            <p className="font-body text-[16.8px] font-light text-[#242424] leading-[30.24px]">
              Specialized, grounded psychological therapy for thoughtful adults navigating anxiety, trauma, and burnout. Welcoming clients in-person at our Santa Monica sanctuary and throughout California via secure telehealth.
            </p>
          </div>
          <div className="space-y-3">
            <h4 className="font-sans-nav text-[16.8px] font-normal uppercase tracking-[1.68px] leading-[30.24px] text-[#242424]">
              NAVIGATE
            </h4>
            <ul className="space-y-[10px] text-[13.44px] font-body font-light text-[#242424] leading-[24.2px]">
              <li><a href="/part-2" className="hover:text-[#A45D43] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#A45D43] transition-colors">About Dr. Maya</a></li>
              <li><a href="#who-we-help" className="hover:text-[#A45D43] transition-colors">Who We Help</a></li>
              <li><a href="#specialties" className="hover:text-[#A45D43] transition-colors">Specialties</a></li>
              <li><a href="#our-office" className="hover:text-[#A45D43] transition-colors">Our Office</a></li>
              <li><a href="#faqs" className="hover:text-[#A45D43] transition-colors">FAQs</a></li>
              <li><a href="#consultation" className="hover:text-[#A45D43] transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-sans-nav text-[16.8px] font-normal uppercase tracking-[1.68px] leading-[30.24px] text-[#242424]">
              CLINICAL SPECIALTIES
            </h4>
            <ul className="space-y-[6px] text-[13.44px] font-body font-light text-[#242424] leading-[24.2px]">
              <li><a href="#specialties" className="hover:text-[#A45D43] transition-colors">Anxiety &amp; Panic Therapy</a></li>
              <li><a href="#specialties" className="hover:text-[#A45D43] transition-colors">Trauma Recovery &amp; EMDR</a></li>
              <li><a href="#specialties" className="hover:text-[#A45D43] transition-colors">Burnout &amp; Perfectionism</a></li>
              <li><a href="#specialties" className="hover:text-[#A45D43] transition-colors">Somatic &amp; Nervous System Care</a></li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="font-sans-nav text-[16.8px] font-normal uppercase tracking-[1.68px] leading-[30.24px] text-[#242424]">
              CONTACT &amp; OFFICE
            </h4>
            <div className="space-y-3 text-[13.44px] font-body font-light text-[#242424] leading-[24.2px]">
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
              <p className="text-[13.44px] font-body font-light italic text-[#242424] leading-[22px] pt-1">
                Serving Santa Monica, Venice, Brentwood, Pacific Palisades, Westwood, &amp; statewide California via Telehealth
              </p>
            </div>
          </div>
        </div>

        {/* Desktop 24-Column Fluid Grid */}
        <div className="hidden md:grid sqs-fluid-grid-11" style={{ minHeight: "340px" }}>
          {/* Logo & Warm Intro: col 2 to 10, row 1 to 10 */}
          <div style={{ gridColumn: "2 / 10", gridRow: "1 / 10" }} className="space-y-4 pr-6">
            <div className="space-y-1">
              <span className="font-serif-heading text-[22px] font-light tracking-[-0.3px] text-[#242424] block">
                Dr. Maya Reynolds, PsyD
              </span>
              <span className="font-sans-nav text-[11px] font-normal tracking-[2px] uppercase text-[#738A84] block">
                Licensed Clinical Psychologist • Santa Monica, CA
              </span>
            </div>
            <p className="font-body text-[16.8px] font-light text-[#242424] leading-[30.24px] max-w-[430px]">
              Specialized, grounded psychological therapy for thoughtful adults navigating anxiety, trauma, and burnout. Welcoming clients in-person at our Santa Monica sanctuary and throughout California via secure telehealth.
            </p>
          </div>

          {/* Navigate: col 12 to 16, row 1 to 10 */}
          <div style={{ gridColumn: "12 / 16", gridRow: "1 / 10" }}>
            <h4 className="font-sans-nav text-[16.8px] font-normal uppercase tracking-[1.68px] leading-[30.24px] text-[#242424] mb-5">
              NAVIGATE
            </h4>
            <ul className="space-y-[10px] text-[13.44px] font-body font-light text-[#242424] leading-[24.2px]">
              <li><a href="/part-2" className="hover:text-[#A45D43] transition-colors cursor-pointer">Home</a></li>
              <li><a href="#about" className="hover:text-[#A45D43] transition-colors cursor-pointer">About Dr. Maya</a></li>
              <li><a href="#who-we-help" className="hover:text-[#A45D43] transition-colors cursor-pointer">Who We Help</a></li>
              <li><a href="#specialties" className="hover:text-[#A45D43] transition-colors cursor-pointer">Specialties</a></li>
              <li><a href="#our-office" className="hover:text-[#A45D43] transition-colors cursor-pointer">Our Office</a></li>
              <li><a href="#faqs" className="hover:text-[#A45D43] transition-colors cursor-pointer">FAQs</a></li>
              <li><a href="#consultation" className="hover:text-[#A45D43] transition-colors cursor-pointer">Contact</a></li>
            </ul>
          </div>

          {/* Specialties: col 16 to 21, row 1 to 10 */}
          <div style={{ gridColumn: "16 / 21", gridRow: "1 / 10" }}>
            <h4 className="font-sans-nav text-[16.8px] font-normal uppercase tracking-[1.68px] leading-[30.24px] text-[#242424] mb-5">
              SPECIALTIES
            </h4>
            <ul className="space-y-[8px] text-[13.44px] font-body font-light text-[#242424] leading-[24.2px]">
              <li><a href="#specialties" className="hover:text-[#A45D43] transition-colors cursor-pointer">Anxiety &amp; Panic Therapy</a></li>
              <li><a href="#specialties" className="hover:text-[#A45D43] transition-colors cursor-pointer">Trauma Recovery &amp; EMDR</a></li>
              <li><a href="#specialties" className="hover:text-[#A45D43] transition-colors cursor-pointer">Burnout &amp; Perfectionism</a></li>
              <li><a href="#specialties" className="hover:text-[#A45D43] transition-colors cursor-pointer">Nervous System Somatics</a></li>
            </ul>
          </div>

          {/* Contact: col 21 to 26, row 1 to 10 */}
          <div style={{ gridColumn: "21 / 26", gridRow: "1 / 10" }} className="text-[13.44px] font-body font-light text-[#242424] leading-[24.2px]">
            <h4 className="font-sans-nav text-[16.8px] font-normal uppercase tracking-[1.68px] leading-[30.24px] text-[#242424] mb-5">
              OFFICE &amp; CONTACT
            </h4>
            <div className="space-y-4">
              <p>
                123th Street 45 W
                <br />
                Santa Monica, CA 90401
              </p>
              <div>
                <p>
                  <a
                    href="mailto:dr.maya@reynoldspsychology.com"
                    className="hover:text-[#A45D43] transition-colors"
                  >
                    dr.maya@reynoldspsychology.com
                  </a>
                </p>
                <p>
                  <a href="tel:3105550194" className="hover:text-[#A45D43] transition-colors">
                    (310) 555-0194
                  </a>
                </p>
              </div>
              <p className="text-[13.44px] font-body font-light italic text-[#242424] leading-[22px] pt-2">
                Serving Santa Monica, Venice, Brentwood, Pacific Palisades, &amp; across California via Telehealth
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* =========================================================================
          SECTION 14: SUB-FOOTER LEGAL BAR (Santa Monica Terracotta Accent #A45D43)
      ========================================================================== */}
      <div className="bg-[#A45D43] text-white py-5 px-6 text-xs text-center font-body font-light tracking-wide">
        <p>
          © {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All Rights Reserved. | Terms &amp; Conditions | Privacy Policy | Notice of Privacy Practices | Santa Monica, CA
        </p>
      </div>
    </div>
  );
}
