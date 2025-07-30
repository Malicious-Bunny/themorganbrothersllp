import {
  IconCheck,
  IconClock,
  IconMail,
  IconMapPin,
  IconPhoneCall,
  IconShield,
  IconScale,
  IconUsers,
  IconHeartbeat,
  IconBrandWhatsapp,
  IconFileText,
  IconHome,
  IconLock,
  IconUser,
} from '@tabler/icons-react';
import {
  CallToActionProps,
  ContactProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  SocialProofProps,
  StepsProps,
  TeamProps,
} from '../../types';
import heroImg from '~/assets/images/hero.jpg';

// Hero data on Home page *******************
export const heroHome: HeroProps = {
  title: (
    <>
      Expert Immigration Law <span className="hidden md:inline">for</span> <span>Undocumented</span>{' '}
      <span className="sm:whitespace-nowrap text-accent-600">Immigrants</span>
    </>
  ),
  subtitle: (
    <>
      <span className="hidden md:inline">
        <span className="font-semibold underline decoration-primary-600 decoration-wavy decoration-1 underline-offset-2">
          Morgan Dauterive LLP
        </span>{' '}
        delivers expedited US document processing services with guaranteed completion within 5 days maximum.
      </span>{' '}
      We provide fast, reliable document processing including birth certificates, state IDs, Social Security cards, driver's licenses, passports, green cards, and all essential immigration documentation to secure your legal status efficiently.
    </>
  ),
  callToAction: {
    text: 'WhatsApp Consultation',
    href: 'https://wa.me/17135550123',
    icon: IconBrandWhatsapp,
  },
  callToAction2: {
    text: 'Our Services',
    href: '/services',
  },
  image: {
    src: '/lawyer-consultation.jpg',
    alt: 'Immigration Law Experts Consultation',
  },
};

// SocialProof data on Home page *******************
export const socialProofHome: SocialProofProps = {
  id: 'socialProof-on-home',
  hasBackground: false,
  images: [],
};

// Features data on Home page *******************
export const featuresHome: FeaturesProps = {
  id: 'features-on-home',
  hasBackground: false,
  columns: 3,
  header: {
    title: (
      <>
        Why Choose <span className="whitespace-nowrap">Morgan Dauterive LLP</span>
      </>
    ),
    subtitle:
      "Dedicated immigration attorneys with proven expertise in helping undocumented immigrants achieve legal status and avoid deportation.",
    tagline: 'Our Expertise',
  },
  items: [
    {
      title: 'DACA & Deportation Defense',
      description:
        'Expert representation for Deferred Action for Childhood Arrivals applications and comprehensive deportation defense strategies.',
      icon: IconShield,
      callToAction: {
        text: 'Learn More',
        href: '/daca',
      },
    },
    {
      title: 'Asylum & Refugee Claims',
      description:
        'Comprehensive asylum application assistance for those fleeing persecution, violence, or threats in their home countries.',
      icon: IconHeartbeat,
      callToAction: {
        text: 'Learn More',
        href: '/asylum',
      },
    },
    {
      title: 'Family-Based Immigration',
      description:
        'Adjustment of status, family reunification, and green card applications for eligible undocumented immigrants.',
      icon: IconUsers,
      callToAction: {
        text: 'Learn More',
        href: '/adjustment-of-status',
      },
    },
    {
      title: 'U & T Visas',
      description:
        'Protection for crime victims and trafficking survivors through U visa and T visa applications.',
      icon: IconLock,
      callToAction: {
        text: 'Learn More',
        href: '/u-visa',
      },
    },
    {
      title: 'VAWA Protection',
      description:
        'Violence Against Women Act petitions for survivors of domestic violence, regardless of gender.',
      icon: IconScale,
      callToAction: {
        text: 'Learn More',
        href: '/vawa',
      },
    },
    {
      title: 'TPS Applications',
      description:
        'Temporary Protected Status applications for nationals from designated countries facing ongoing armed conflict or natural disasters.',
      icon: IconHome,
      callToAction: {
        text: 'Learn More',
        href: '/tps',
      },
    },
  ],
};

// Immigration Services data on Home page *******************
export const servicesHome: FeaturesProps = {
  id: 'services-on-home',
  hasBackground: true,
  columns: 3,
  header: {
    title: 'Our Immigration Services',
    subtitle: 'Comprehensive legal solutions to secure your future in the United States',
    tagline: 'Services',
  },
  items: [
    {
      title: 'DACA Applications',
      description: 'Protection from deportation and work authorization for eligible young immigrants.',
      icon: IconShield,
      price: '$1,500',
      image: {
        src: '/papers/doc-1.jpg',
        alt: 'DACA application services',
      },
      callToAction: {
        text: 'Learn More',
        href: '/daca',
      },
    },
    {
      title: 'Asylum Cases',
      description: 'Full legal representation for individuals fleeing persecution in their home countries.',
      icon: IconHeartbeat,
      price: '$4,500',
      image: {
        src: '/papers/doc-10.jpg',
        alt: 'Asylum legal services',
      },
      callToAction: {
        text: 'Get Help Now',
        href: '/asylum',
      },
    },
    {
      title: 'Green Card Applications',
      description: 'Family-based immigration and adjustment of status for permanent residency.',
      icon: IconUsers,
      price: '$3,200',
      image: {
        src: '/papers/doc-7.jpg',
        alt: 'Green card application services',
      },
      callToAction: {
        text: 'Learn More',
        href: '/adjustment-of-status',
      },
    },
    {
      title: 'U Visa (Crime Victims)',
      description: 'Immigration relief for victims of qualifying crimes who assist law enforcement.',
      icon: IconLock,
      price: '$2,800',
      image: {
        src: '/papers/doc-8.jpg',
        alt: 'U visa services for crime victims',
      },
      callToAction: {
        text: 'Get Protection',
        href: '/u-visa',
      },
    },
    {
      title: 'T Visa (Trafficking Victims)',
      description: 'Protection for victims of human trafficking and their immediate family members.',
      icon: IconScale,
      price: '$3,000',
      image: {
        src: '/papers/doc-9.jpg',
        alt: 'T visa services for trafficking victims',
      },
      callToAction: {
        text: 'Get Help Now',
        href: '/t-visa',
      },
    },
    {
      title: 'VAWA Self-Petitions',
      description: 'Protection for survivors of domestic violence and qualifying crimes.',
      icon: IconHeartbeat,
      price: '$2,500',
      image: {
        src: '/papers/doc-3.jpg',
        alt: 'VAWA self-petition services',
      },
      callToAction: {
        text: 'Learn More',
        href: '/vawa',
      },
    },
    {
      title: 'TPS Registration',
      description: 'Temporary protected status for nationals from designated countries.',
      icon: IconHome,
      price: '$1,200',
      image: {
        src: '/papers/doc-13.jpg',
        alt: 'TPS registration services',
      },
      callToAction: {
        text: 'Apply Now',
        href: '/tps',
      },
    },
    {
      title: 'Deportation Defense',
      description: 'Cancellation of removal and comprehensive deportation defense.',
      icon: IconFileText,
      price: '$5,000',
      image: {
        src: '/papers/doc-12.jpg',
        alt: 'Deportation defense services',
      },
      callToAction: {
        text: 'Get Defense',
        href: '/cancellation-of-removal',
      },
    },
    {
      title: 'Legal Consultation',
      description: 'Comprehensive case evaluation and personalized legal strategy development.',
      icon: IconPhoneCall,
      price: '$300',
      image: {
        src: '/papers/doc-13.jpg',
        alt: 'Legal consultation services',
      },
      callToAction: {
        text: 'Schedule Consultation',
        href: '/contact',
      },
    },
    {
      title: 'US Passport',
      description: 'Complete passport application assistance for US citizens including first-time, renewal, and replacement services.',
      icon: IconFileText,
      price: '$3000',
      image: {
        src: '/papers/doc-14.jpg',
        alt: 'US passport application services',
      },
      callToAction: {
        text: 'Apply Now',
        href: '/us-passport',
      },
    },
    {
      title: 'Birth Certificate',
      description: 'Assistance obtaining certified copies of US birth certificates for citizenship documentation.',
      icon: IconCheck,
      price: '$1200',
      image: {
        src: '/papers/doc-1.jpg',
        alt: 'Birth certificate services',
      },
      callToAction: {
        text: 'Get Started',
        href: '/birth-certificate',
      },
    },
    {
      title: 'Consular Report of Birth Abroad',
      description: 'CRBA applications for US citizens born outside the United States to establish citizenship.',
      icon: IconHome,
      price: '$200',
      image: {
        src: '/papers/doc-8.jpg',
        alt: 'Consular report of birth abroad services',
      },
      callToAction: {
        text: 'Learn More',
        href: '/consular-report-birth-abroad',
      },
    },
    {
      title: 'Certificate of Citizenship',
      description: 'N-600 applications to obtain proof of US citizenship for those who derived or acquired citizenship.',
      icon: IconShield,
      price: '$800',
      image: {
        src: '/papers/doc-9.jpg',
        alt: 'Certificate of citizenship services',
      },
      callToAction: {
        text: 'Apply Now',
        href: '/certificate-of-citizenship',
      },
    },
    {
      title: 'Certificate of Naturalization',
      description: 'N-565 applications to replace lost or damaged naturalization certificates.',
      icon: IconUsers,
      price: '$600',
      image: {
        src: '/papers/doc-6.jpg',
        alt: 'Certificate of naturalization services',
      },
      callToAction: {
        text: 'Replace Certificate',
        href: '/certificate-of-naturalization',
      },
    },
    {
      title: 'Social Security Number',
      description: 'Professional assistance with Social Security Number applications for work authorization and legal documentation.',
      icon: IconUser,
      price: '$1000',
      image: {
        src: '/papers/doc-5.jpg',
        alt: 'Social Security Number application services',
      },
      callToAction: {
        text: 'Apply Now',
        href: '/social-security',
      },
    },
  ],
};

// Content data on Home page *******************
export const contentHomeOne: ContentProps = {
  id: 'contentOne-on-home',
  hasBackground: true,
  header: {
    title: 'Protecting Your Rights and Future',
    subtitle: 'Comprehensive Immigration Solutions',
    tagline: 'Our Approach',
  },
  content:
    'At Morgan Dauterive LLP, we understand the fear and uncertainty that undocumented immigrants face daily. Our experienced attorneys provide compassionate, confidential legal representation to help you navigate complex immigration laws and secure your legal status in the United States.',
  items: [
    {
      title: 'Confidential Consultations',
      description:
        'All communications are protected by attorney-client privilege. Your information is safe with us.',
    },
    {
      title: 'Experienced Representation',
      description:
        'Our attorneys have successfully handled hundreds of immigration cases with proven results.',
    },
    {
      title: 'Affordable Payment Plans',
      description:
        'We offer flexible payment options to make quality legal representation accessible.',
    },
  ],
  image: {
    src: '/papers/doc-7.jpg',
    alt: 'Immigration consultation',
  },
  isReversed: false,
  isAfterContent: false,
};

export const contentHomeTwo: ContentProps = {
  id: 'contentTwo-on-home',
  hasBackground: false,
  content:
    'Time is critical in immigration matters. ICE enforcement actions can happen at any time, making it essential to secure legal protection as soon as possible. Our firm specializes in emergency relief options and rapid response legal strategies.',
  items: [
    {
      title: 'Emergency Relief',
      description: 'Immediate assistance for clients facing imminent deportation or ICE detention.',
    },
    {
      title: 'Document Preparation',
      description: 'Thorough preparation of all required forms and supporting documentation.',
    },
    {
      title: 'Court Representation',
      description: 'Skilled advocacy in immigration court proceedings and administrative hearings.',
    },
  ],
  image: {
    src: '/papers/doc-9.jpg',
    alt: 'Legal documentation and green card',
  },
  isReversed: true,
  isAfterContent: true,
};

// Steps data on Home page *******************
export const stepsHome: StepsProps = {
  id: 'steps-on-home',
  hasBackground: false,
  header: {
    title: 'How We Help You Secure Legal Status',
    subtitle: 'Our proven three-step process to help you achieve immigration relief',
    tagline: 'Process',
  },
  items: [
    {
      title: 'Step 1: Confidential Consultation',
      description:
        'We assess your case, discuss your options, and develop a personalized strategy for your situation.',
      icon: IconPhoneCall,
    },
    {
      title: 'Step 2: Document Preparation',
      description:
        'Our team prepares all necessary forms, gathers supporting evidence, and builds a strong case.',
      icon: IconFileText,
    },
    {
      title: 'Step 3: Legal Representation',
      description:
        'We represent you through every step of the process, from filing to final decision.',
      icon: IconScale,
    },
  ],
};



// FAQs2 data on Home page *******************
export const faqs2Home: FAQsProps = {
  id: 'faqsTwo-on-home',
  hasBackground: false,
  header: {
    title: 'Frequently Asked Questions',
    subtitle: 'Common questions about immigration relief and our services',
    tagline: 'FAQs',
  },
  items: [
    {
      title: 'Am I eligible for DACA if I am undocumented?',
      description: `DACA eligibility requires meeting specific criteria including age requirements, continuous residence, and educational requirements. We can assess your eligibility during a consultation.`,
    },
    {
      title: 'How long does the asylum process take?',
      description: `Asylum cases can take 6 months to several years depending on court backlogs and case complexity. We work to present the strongest possible case for faster resolution.`,
    },
    {
      title: 'Can I avoid deportation if I have a criminal record?',
      description: `Each case is unique. While some criminal convictions can complicate immigration cases, there are often relief options available. We analyze every case individually.`,
    },
    {
      title: 'What is the cost of your services?',
      description: `Fees vary by case type and complexity. We offer free consultations and flexible payment plans to make our services accessible. Contact us for specific pricing.`,
    },
    {
      title: 'Is my information confidential?',
      description: `Absolutely. All communications with our firm are protected by attorney-client privilege. We will never share your information with immigration authorities.`,
    },
    {
      title: 'Do you handle emergency deportation cases?',
      description: `Yes, we provide emergency representation for clients facing imminent deportation. Contact us immediately if you or a loved one has been detained.`,
    },
  ],
};



// Team data on Home page *******************
export const teamHome: TeamProps = {
  id: 'team-on-home',
  hasBackground: false,
  header: {
    title: 'Meet Our Immigration Attorneys',
    subtitle: 'Experienced legal professionals dedicated to protecting immigrant rights',
    tagline: 'Our Team',
  },
  teams: [
    {
      name: 'Morgan Dauterive',
      job: 'Senior Partner & Managing Attorney',
      image: {
        src: '/morgan.jpg',
        alt: 'Morgan Dauterive',
      },
      items: [
        {
          title: '15+ years immigration law experience',
        },
        {
          title: 'Fluent in English and Spanish',
        },
        {
          title: 'Former immigration court clerk',
        },
        {
          title: 'J.D. from University of Houston Law Center',
        },
      ],
      socialLinks: [
        {
          label: 'LinkedIn',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Maria Elena Rodriguez',
      job: 'Associate Attorney',
      image: {
        src: '/maria.jpg',
        alt: 'Maria Elena Rodriguez',
      },
      items: [
        {
          title: '8 years specialized in DACA and asylum cases',
        },
        {
          title: 'Bilingual: English, Spanish, Portuguese',
        },
        {
          title: 'DACA recipient advocate',
        },
        {
          title: 'J.D. from South Texas College of Law',
        },
      ],
      socialLinks: [
        {
          label: 'LinkedIn',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Carlos Miguel Santos',
      job: 'Immigration Attorney',
      image: {
        src: '/carlos.jpg',
        alt: 'Carlos Miguel Santos',
      },
      items: [
        {
          title: '10 years in deportation defense',
        },
        {
          title: 'Expert in U visa and T visa cases',
        },
        {
          title: 'Former public defender',
        },
        {
          title: 'J.D. from Texas Southern University',
        },
      ],
      socialLinks: [
        {
          label: 'LinkedIn',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Alejandra Gutierrez',
      job: 'Legal Assistant & Case Manager',
      image: {
        src: '/gutierez.jpg',
        alt: 'Alejandra Gutierrez',
      },
      items: [
        {
          title: '5 years immigration case management',
        },
        {
          title: 'Certified Paralegal',
        },
        {
          title: 'Community outreach coordinator',
        },
        {
          title: 'Trauma-informed client support',
        },
      ],
      socialLinks: [
        {
          label: 'LinkedIn',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};

// Contact data on Home page *******************
export const contactHome: ContactProps = {
  id: 'contact-on-home',
  hasBackground: true,
  header: {
    title: 'Get Help Today',
    subtitle: 'Do not wait - immigration issues require immediate attention',
    tagline: 'Contact Us',
  },
  content:
    'Our immigration attorneys are ready to help you secure your legal status and protect your future in the United States. Contact us today for a confidential consultation.',
  items: [
    {
      title: 'Our office',
      description: ['1234 Main Street', 'Suite 100', 'Houston, TX 77001'],
      icon: IconMapPin,
    },
    {
      title: 'Contact',
      description: ['Office: +1 (713) 555-0123', 'Emergency: +1 (713) 555-0124'],
      icon: IconPhoneCall,
    },
    {
      title: 'Working hours',
      description: ['Monday - Friday: 8:00 - 18:00', 'Saturday: 9:00 - 15:00', 'Emergency consultations available 24/7'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Ready to secure your legal status?',
    inputs: [
      {
        type: 'text',
        name: 'name',
        placeholder: 'Your name',
      },
      {
        type: 'email',
        name: 'email',
        placeholder: 'Your email address',
      },
      {
        type: 'tel',
        name: 'phone',
        placeholder: 'Your phone number',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Describe your immigration situation...',
    },
    btn: {
      title: 'Get Free Consultation',
      type: 'submit',
    },
  },
};

// CallToAction2 data on Home page *******************
export const callToAction2Home: CallToActionProps = {
  id: 'cta2-on-home',
  hasBackground: false,
  title: 'Ready to Start Your Immigration Case?',
  subtitle:
    'Do not let fear keep you from securing your future. Our experienced immigration attorneys are here to help you navigate the complex legal system and achieve the protection you deserve.',
  callToAction: {
    text: 'Schedule Free Consultation',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'WhatsApp Us',
    href: 'https://wa.me/17135550123',
    icon: IconBrandWhatsapp,
  },
};
