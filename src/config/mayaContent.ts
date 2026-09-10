export interface ServiceItem {
  id: string;
  title: string;
  badge: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  slug: string;
}

export interface WhoWeHelpItem {
  title: string;
  description: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const mayaContent = {
  practitioner: {
    name: "Dr. Maya Reynolds, PsyD",
    credentials: "PsyD",
    license: "Licensed Clinical Psychologist",
    location: "Santa Monica, CA",
    address: {
      street: "123th Street 45 W",
      city: "Santa Monica",
      state: "CA",
      zip: "90401",
      full: "123th Street 45 W, Santa Monica, CA 90401",
    },
    email: "dr.maya@reynoldspsychology.com",
    phone: "(310) 555-0194",
    portrait: "/assets/Dr. Maya Reynolds.png",
  },
  navigation: [
    { label: "About", href: "#about" },
    { label: "Who We Help", href: "#who-we-help" },
    { label: "Specialties", href: "#specialties" },
    { label: "Our Office", href: "#our-office" },
    { label: "Approach", href: "#approach" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" },
  ],
  hero: {
    eyebrow: "ONLINE & IN-PERSON THERAPY IN SANTA MONICA & ACROSS CALIFORNIA",
    title: "Reclaim your calm, rebuild your foundation, and finally begin to thrive.",
    subtext:
      "Specialized, grounded psychological therapy for thoughtful, high-achieving adults navigating anxiety, trauma, and burnout. Combining practical tools with deep, lasting healing.",
    primaryCta: "Schedule a Consultation",
    secondaryCta: "Explore Specialties",
    image1: "/assets/Dr. Maya Reynolds.png",
    image2: "/assets/maya/hero-1.jpg",
  },
  empathy: {
    heading: "You’re holding onto hope that life can feel lighter and more grounded than it does right now.",
    paragraphs: [
      "At our Santa Monica psychology practice, our goal is to help you turn that hope into lasting reality.",
      "Many of the clients I work with are high-achieving, thoughtful, and deeply self-aware—yet internally they feel exhausted, trapped in cycles of overthinking, or emotionally on edge. You may look completely 'functional' to the outside world while quietly carrying chronic worry, persistent tension in your body, sleep struggles, or a constant sense of bracing for something to go wrong.",
      "First and foremost, what you are experiencing is real, valid, and worthy of compassionate, expert support. Whether you are navigating past trauma, persistent anxiety, or the heavy weight of burnout, you don't have to carry it in isolation. Together, we create a safe, steady container to help you find your footing again and build a deeply resilient future.",
    ],
    image: "/assets/maya/empathy.jpg",
  },
  whoWeHelp: {
    heading: "Who We Help",
    subheading: "Thoughtful, tailored care designed for the unique pressures of modern adult life.",
    items: [
      {
        title: "High-Achieving Professionals",
        description:
          "Entrepreneurs, creatives, and leaders feeling depleted by perfectionism, relentless internal pressure, and chronic professional burnout who want to reclaim sustainable balance.",
        image: "/assets/maya/who-professionals.jpg",
      },
      {
        title: "Adults with Anxiety & Panic",
        description:
          "Individuals battling constant overthinking, racing thoughts, panic sensations, or nervous system dysregulation who crave grounded relief and practical regulation tools.",
        image: "/assets/maya/who-anxiety.jpg",
      },
      {
        title: "Individuals Healing from Trauma",
        description:
          "Adults navigating the lingering impact of single-incident events or complex developmental and relational experiences that continue to disrupt confidence and safety.",
        image: "/assets/maya/who-trauma.jpg",
      },
    ] as WhoWeHelpItem[],
  },
  quoteBanner1: {
    quote:
      "You deserve a quiet, sacred space where your story is heard, honored, and deeply understood. Nothing you bring is too heavy to carry together.",
    image: "/assets/maya/quote-1.jpg",
  },
  areasOfExpertise: {
    heading: "Our areas of clinical expertise",
    tags: [
      "Anxiety & Panic",
      "EMDR Therapy",
      "Trauma & Complex PTSD",
      "Professional Burnout",
      "Perfectionism & High Pressure",
      "Cognitive Behavioral Therapy (CBT)",
      "Mindfulness-Based Practices",
      "Somatic & Body-Oriented Techniques",
      "Nervous System Regulation",
      "Imposter Syndrome & Self-Doubt",
      "Life & Career Transitions",
      "Sleep & Stress Dysregulation",
    ],
  },
  howWeWork: {
    eyebrow: "OUR CLINICAL PHILOSOPHY",
    heading: "A warm, collaborative, and grounded approach to therapy.",
    paragraphs: [
      "Sessions in my practice are thoughtfully structured to feel supportive and clarifying, while still leaving ample space for emotional reflection and depth.",
      "I integrate evidence-based modalities including Cognitive-Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), mindfulness-based practices, and body-oriented techniques. Together, we address both the emotional and physiological dimensions of what you're experiencing.",
      "Trauma and anxiety work is paced carefully, prioritizing safety, nervous system stabilization, and practical integration so you feel more centered and regulated in your everyday life—not just during our 50 minutes together.",
      "You won't find one-size-fits-all worksheets or passive listening here. We work together as collaborative partners to help you understand your internal world, build durable coping tools, and cultivate a stronger, kinder relationship with yourself.",
    ],
    buttonText: "Schedule an Appointment",
  },
  quoteBanner2: {
    quote:
      "Honoring where you’ve been & helping shape a sustainable, fulfilling path forward.",
    image: "/assets/maya/quote-2.jpg",
  },
  specialties: {
    heading: "Our specialties include…",
    subheading: "Three focused clinical pathways rooted in depth, safety, and evidence-based results.",
    services: [
      {
        id: "anxiety-panic",
        title: "Anxiety & Panic Therapy",
        badge: "Specialty 01",
        shortDesc:
          "Untangling persistent worry, catastrophic thinking, and somatic panic to restore genuine nervous system peace.",
        fullDesc:
          "Many people live for years in an elevated state of 'fight-or-flight' without realizing how much energy it drains. Through a combination of CBT and somatic grounding, we identify the cognitive patterns and physiological triggers driving your anxiety, helping you regain control and feel truly safe in your body.",
        image: "/assets/maya/service-anxiety.jpg",
        slug: "#contact",
      },
      {
        id: "trauma-emdr",
        title: "Trauma Recovery & EMDR",
        badge: "Specialty 02",
        shortDesc:
          "Evidence-based trauma therapy that reprocesses painful memories so they no longer control your present.",
        fullDesc:
          "Whether you experienced a distinct traumatic event or long-standing emotional invalidation, painful memories can stay locked in the nervous system. EMDR works by reactivating your brain's natural information processing system, reducing emotional distress and restoring deep self-compassion.",
        image: "/assets/maya/service-emdr.jpg",
        slug: "#contact",
      },
      {
        id: "burnout-perfectionism",
        title: "Burnout & Perfectionism Counseling",
        badge: "Specialty 03",
        shortDesc:
          "Helping high-achieving professionals and creatives step out of chronic exhaustion and internal pressure.",
        fullDesc:
          "When self-worth becomes intertwined with constant output, burnout is almost inevitable. In therapy, we examine the roots of internal high pressure, establish healthy psychological boundaries, and cultivate sustainable rhythms that protect your creativity and well-being.",
        image: "/assets/maya/service-burnout.jpg",
        slug: "#contact",
      },
    ] as ServiceItem[],
  },
  ourOffice: {
    badge: "IN-PERSON & VIRTUAL CARE",
    heading: "Our Office — A Calm Sanctuary for Healing in Santa Monica",
    subheading:
      "Designed as a quiet, private haven where you can pause, breathe, and feel grounded from the moment you walk through the door.",
    description:
      "Located at 123th Street 45 W in Santa Monica, California, our therapy space is intentionally arranged with soft natural light, warm organic materials, and an uncluttered, soothing environment. Clients frequently share that the calm energy of the room itself brings an immediate exhale.",
    features: [
      {
        title: "Acoustic Privacy & Comfort",
        description: "A secure, confidential space with comfortable seating designed for deep reflection and safety.",
      },
      {
        title: "Natural Light & Grounding Materials",
        description: "Thoughtfully curated design elements that reduce sensory overload and invite presence.",
      },
      {
        title: "In-Person & Hybrid Flexibility",
        description: "Attend in-person sessions at our Santa Monica office or join secure telehealth sessions from anywhere in California.",
      },
    ],
    addressNotice: "123th Street 45 W, Santa Monica, CA 90401 • Convenient street & structure parking available.",
    images: [
      {
        src: "/assets/office1.jpeg",
        alt: "Dr. Maya Reynolds Santa Monica therapy office with natural light and comfortable seating",
        caption: "Main Therapy Room",
      },
      {
        src: "/assets/office2.jpeg",
        alt: "Calm consultation corner with warm textures and plant life",
        caption: "Private Consultation Space",
      },
    ],
  },
  bookingCta: {
    eyebrow: "SCHEDULE A CONSULTATION",
    heading: "Find a therapist who is the right fit for you.",
    paragraphs: [
      "Reaching out for therapy is a courageous decision, and working with someone who truly understands your lived reality makes all the difference.",
      "I invite you to schedule an initial 15-minute phone consultation to discuss what you're seeking, explore if my approach aligns with your needs, and answer any questions about the process.",
    ],
    ctaButton: "Book Your 15-Minute Consultation",
    phoneCta: "Call (310) 555-0194",
    image1: "/assets/maya/cta-1.jpg",
    image2: "/assets/maya/cta-2.jpg",
  },
  faqs: [
    {
      question: "What modalities do you use during therapy sessions?",
      answer:
        "I integrate Cognitive Behavioral Therapy (CBT), Eye Movement Desensitization and Reprocessing (EMDR), mindfulness-based practices, and body-oriented somatic techniques tailored to each individual's goals.",
    },
    {
      question: "Do you offer in-person or online therapy?",
      answer:
        "Both. I welcome clients to my quiet Santa Monica office for in-person therapy and provide secure, HIPAA-compliant telehealth sessions for individuals residing anywhere across California.",
    },
    {
      question: "How do I know if EMDR is right for me?",
      answer:
        "EMDR is highly effective for processing unresolved trauma, anxiety triggers, panic memories, and deep-seated beliefs like 'I'm not safe' or 'I must be perfect.' During our consultation, we will assess if EMDR fits your healing journey.",
    },
    {
      question: "What populations do you specialize in working with?",
      answer:
        "I work primarily with adults—particularly high-achieving professionals, entrepreneurs, creatives, and thoughtful individuals dealing with anxiety, burnout, trauma, and chronic internal pressure.",
    },
    {
      question: "What is your session fee and insurance policy?",
      answer:
        "I am an out-of-network provider. I provide detailed monthly superbills that you can submit to your PPO insurance for potential out-of-network reimbursement. Credit cards and HSA/FSA cards are accepted.",
    },
  ] as FaqItem[],
  footer: {
    aboutText:
      "Dr. Maya Reynolds, PsyD is a Licensed Clinical Psychologist offering in-person psychotherapy in Santa Monica, California and secure telehealth throughout the state of California.",
    serviceAreas: "Serving Santa Monica, Venice, Brentwood, Pacific Palisades, Westwood, Culver City, and across California via Telehealth.",
    officeHours: "Monday – Thursday: 9:00 AM – 6:00 PM | Friday: 9:00 AM – 2:00 PM (By appointment)",
    disclaimer:
      "The information on this website is for informational purposes only and does not constitute psychological or medical advice. If you are experiencing a mental health emergency, please call 988 or go to your nearest emergency room.",
  },
};
