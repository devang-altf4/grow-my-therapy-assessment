import { originalCloneContent } from "@/config/originalCloneContent";
import { SwitcherBanner } from "@/components/layout/SwitcherBanner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { EmpathySection } from "@/components/sections/EmpathySection";
import { WhoWeHelpSection } from "@/components/sections/WhoWeHelpSection";
import { QuoteSection } from "@/components/sections/QuoteSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { HowWeWorkSection } from "@/components/sections/HowWeWorkSection";
import { SecondaryQuoteSection } from "@/components/sections/SecondaryQuoteSection";
import { SpecialtiesSection } from "@/components/sections/SpecialtiesSection";
import { BookingCtaSection } from "@/components/sections/BookingCtaSection";

export const metadata = {
  title: "Counseling in Newbury Park, CA | Conejo Valley Family Counseling (1:1 Layout Clone)",
  description:
    "Counseling for adults, couples, and children in Newbury & across CA. EMDR, trauma & dissociation, special needs parenting, anxiety, & more.",
};

export default function OriginalClonePage() {
  return (
    <div className="theme-conejo min-h-screen bg-surface text-foreground font-sans">
      <SwitcherBanner />
      <Header
        title={originalCloneContent.practitioner.name}
        subtitle="Newbury Park, CA • In-Person & CA Telehealth"
        links={originalCloneContent.navigation}
        ctaText="Book an Appointment"
        phone={originalCloneContent.practitioner.phone}
      />

      <main>
        {/* Section 1: Hero Banner */}
        <HeroSection
          eyebrow={originalCloneContent.hero.eyebrow}
          title={originalCloneContent.hero.title}
          subtext={originalCloneContent.hero.subtext}
          primaryCta={originalCloneContent.hero.primaryCta}
          image1={originalCloneContent.hero.image1}
          image2={originalCloneContent.hero.image2}
        />

        {/* Section 2: Empathy & Narrative */}
        <EmpathySection
          heading={originalCloneContent.empathy.heading}
          paragraphs={originalCloneContent.empathy.paragraphs}
          image={originalCloneContent.empathy.image}
        />

        {/* Section 3: Who We Help (Adults, Couples, Children & Teens) */}
        <WhoWeHelpSection
          heading={originalCloneContent.whoWeHelp.heading}
          items={originalCloneContent.whoWeHelp.items}
        />

        {/* Section 4: Quote Callout Banner */}
        <QuoteSection
          quote={originalCloneContent.quoteBanner1.quote}
          image={originalCloneContent.quoteBanner1.image}
        />

        {/* Section 5: Clinical Expertise Tag Cloud */}
        <ExpertiseSection
          heading={originalCloneContent.areasOfExpertise.heading}
          tags={originalCloneContent.areasOfExpertise.tags}
        />

        {/* Section 6: How We Work */}
        <HowWeWorkSection
          eyebrow={originalCloneContent.howWeWork.eyebrow}
          heading={originalCloneContent.howWeWork.heading}
          paragraphs={originalCloneContent.howWeWork.paragraphs}
          buttonText={originalCloneContent.howWeWork.buttonText}
          image={originalCloneContent.howWeWork.image}
        />

        {/* Section 7: Secondary Affirmation Banner */}
        <SecondaryQuoteSection
          quote={originalCloneContent.quoteBanner2.quote}
          image={originalCloneContent.quoteBanner2.image}
        />

        {/* Section 8: Our Specialties (Trauma, Dissociation, EMDR, Special Needs Parenting) */}
        <SpecialtiesSection
          heading={originalCloneContent.specialties.heading}
          services={originalCloneContent.specialties.services}
        />

        {/* Section 9: Booking Call to Action */}
        <BookingCtaSection
          eyebrow={originalCloneContent.bookingCta.eyebrow}
          heading={originalCloneContent.bookingCta.heading}
          paragraphs={originalCloneContent.bookingCta.paragraphs}
          ctaButton={originalCloneContent.bookingCta.ctaButton}
          image1={originalCloneContent.bookingCta.image1}
          image2={originalCloneContent.bookingCta.image2}
        />
      </main>

      {/* Section 10 & 11: Footer */}
      <Footer
        name={originalCloneContent.practitioner.name}
        address={originalCloneContent.practitioner.address.full}
        phone={originalCloneContent.practitioner.phone}
        email={originalCloneContent.practitioner.email}
        aboutText={originalCloneContent.footer.aboutText}
        serviceAreas={originalCloneContent.footer.serviceAreas}
        disclaimer={originalCloneContent.footer.disclaimer}
        navLinks={originalCloneContent.navigation}
      />
    </div>
  );
}
