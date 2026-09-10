import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SwitcherBanner } from "@/components/layout/SwitcherBanner";
import { HeroSection } from "@/components/sections/HeroSection";
import { EmpathySection } from "@/components/sections/EmpathySection";
import { WhoWeHelpSection } from "@/components/sections/WhoWeHelpSection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { SecondaryQuoteSection } from "@/components/sections/SecondaryQuoteSection";
import { SpecialtiesSection } from "@/components/sections/SpecialtiesSection";
import { OurOfficeSection } from "@/components/sections/OurOfficeSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { BookingCtaSection } from "@/components/sections/BookingCtaSection";
import { ContactFormSection } from "@/components/sections/ContactFormSection";
import { mayaContent } from "@/config/mayaContent";

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Clinical Psychologist Santa Monica, CA",
  description:
    "Grounded psychological therapy for high-achieving adults navigating anxiety, trauma, and burnout. In-person therapy in Santa Monica and California telehealth. Evidence-based CBT, EMDR, and somatic practices.",
  keywords: [
    "Clinical Psychologist Santa Monica",
    "Anxiety Therapy Santa Monica",
    "EMDR Therapist Santa Monica",
    "Trauma Therapy California",
    "Burnout Counseling Los Angeles",
    "High-Achieving Adults Therapy",
    "Telehealth Psychologist California",
  ],
  openGraph: {
    title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist",
    description:
      "Specialized, grounded psychological therapy in Santa Monica, CA. Healing anxiety, complex trauma, and burnout with CBT, EMDR, and somatic techniques.",
    url: "https://www.reynoldspsychology.com",
    siteName: "Dr. Maya Reynolds, PsyD",
    locale: "en_US",
    type: "website",
  },
};

export default function Part2Page() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1A2022] font-sans selection:bg-[#C28B59]/20 selection:text-[#1C3B37]">
      {/* Top Assignment Mode Switcher */}
      <SwitcherBanner />

      {/* Primary Brand Header */}
      <Header
        title={mayaContent.practitioner.name}
        subtitle={`${mayaContent.practitioner.license} • ${mayaContent.practitioner.location}`}
        links={mayaContent.navigation}
        ctaText="Schedule Call"
        phone={mayaContent.practitioner.phone}
      />

      {/* Main Content Sections */}
      <main className="grow">
        {/* Hero Section */}
        <HeroSection
          eyebrow={mayaContent.hero.eyebrow}
          title={mayaContent.hero.title}
          subtext={mayaContent.hero.subtext}
          primaryCta={mayaContent.hero.primaryCta}
          secondaryCta={mayaContent.hero.secondaryCta}
          image1={mayaContent.hero.image1}
          image2={mayaContent.hero.image2}
        />

        {/* Empathy & Recognition Section */}
        <EmpathySection
          heading={mayaContent.empathy.heading}
          paragraphs={mayaContent.empathy.paragraphs}
          image={mayaContent.empathy.image}
        />

        {/* Who We Help Section (3 Personas) */}
        <WhoWeHelpSection
          heading={mayaContent.whoWeHelp.heading}
          subheading={mayaContent.whoWeHelp.subheading}
          items={mayaContent.whoWeHelp.items}
        />

        {/* Quote Banner 1 */}
        <QuoteSection
          quote={mayaContent.quoteBanner1.quote}
          image={mayaContent.quoteBanner1.image}
        />

        {/* Areas of Clinical Expertise Tag Grid */}
        <ExpertiseSection
          heading={mayaContent.areasOfExpertise.heading}
          tags={mayaContent.areasOfExpertise.tags}
        />

        {/* Clinical Approach / Bio Section featuring Maya's Portrait */}
        <HowWeWorkSection
          eyebrow={mayaContent.howWeWork.eyebrow}
          heading={mayaContent.howWeWork.heading}
          paragraphs={mayaContent.howWeWork.paragraphs}
          buttonText={mayaContent.howWeWork.buttonText}
          image={mayaContent.practitioner.portrait}
          therapistName={mayaContent.practitioner.name}
          therapistTitle={`${mayaContent.practitioner.license} • ${mayaContent.practitioner.location}`}
        />

        {/* Secondary Quote Banner */}
        <SecondaryQuoteSection quote={mayaContent.quoteBanner2.quote} />

        {/* Three Core Specialties */}
        <SpecialtiesSection
          heading={mayaContent.specialties.heading}
          subheading={mayaContent.specialties.subheading}
          services={mayaContent.specialties.services}
        />

        {/* Dedicated Office Sanctuary Section (Part 3 requirement & authentic photos) */}
        <OurOfficeSection
          badge={mayaContent.ourOffice.badge}
          heading={mayaContent.ourOffice.heading}
          subheading={mayaContent.ourOffice.subheading}
          description={mayaContent.ourOffice.description}
          addressNotice={mayaContent.ourOffice.addressNotice}
          features={mayaContent.ourOffice.features}
          images={mayaContent.ourOffice.images}
        />

        {/* Frequently Asked Questions */}
        <FaqSection faqs={mayaContent.faqs} />

        {/* Booking Reassurance CTA */}
        <BookingCtaSection
          eyebrow={mayaContent.bookingCta.eyebrow}
          heading={mayaContent.bookingCta.heading}
          paragraphs={mayaContent.bookingCta.paragraphs}
          ctaButton={mayaContent.bookingCta.ctaButton}
          phoneCta={mayaContent.bookingCta.phoneCta}
          image1={mayaContent.bookingCta.image1}
          image2={mayaContent.bookingCta.image2}
        />

        {/* Direct Interactive Consultation Booking Form */}
        <ContactFormSection
          practitionerName={mayaContent.practitioner.name}
          location={mayaContent.practitioner.address.full}
          phone={mayaContent.practitioner.phone}
          email={mayaContent.practitioner.email}
        />
      </main>

      {/* Global Practice Footer */}
      <Footer
        name={mayaContent.practitioner.name}
        license={mayaContent.practitioner.license}
        address={mayaContent.practitioner.address.full}
        phone={mayaContent.practitioner.phone}
        email={mayaContent.practitioner.email}
        aboutText={mayaContent.footer.aboutText}
        serviceAreas={mayaContent.footer.serviceAreas}
        officeHours={mayaContent.footer.officeHours}
        disclaimer={mayaContent.footer.disclaimer}
        navLinks={mayaContent.navigation}
      />
    </div>
  );
}
