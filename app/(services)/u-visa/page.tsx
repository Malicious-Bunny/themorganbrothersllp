import type { Metadata } from 'next';
import { SITE } from '~/config.js';
import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import Features from '~/components/widgets/Features';
import FAQs from '~/components/widgets/FAQs';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import { IconShield, IconLock, IconUsers, IconPhoneCall, IconBrandWhatsapp, IconCheck, IconClock, IconHome } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: 'U Visa for Crime Victims - Morgan Dauterive LLP',
  description: 'Expert legal assistance for U visa applications for crime victims. Protect yourself and your family while helping law enforcement.',
};

const heroData = {
  title: (
    <>
      U Visa Protection for <span className="text-accent-600">Crime Victims</span>
    </>
  ),
  subtitle: (
    <>
      If you have been a victim of certain crimes and helped law enforcement, you may be eligible for a U visa.
      Our experienced attorneys can help you secure protection and legal status in the United States.
    </>
  ),
  callToAction: {
    text: 'Free U Visa Consultation',
    href: '/contact',
    icon: IconBrandWhatsapp,
  },
  callToAction2: {
    text: 'Call Now',
    href: 'tel:+17135550123',
  },
  image: {
    src: 'https://austinimmigrationattorney.com/wp-content/uploads/U-Visa-NONIMMIGRANT-STATUS-Eligibility-.jpeg',
    alt: 'U Visa Protection for Crime Victims',
  },
};

const contentData = {
  id: 'content-u-visa',
  hasBackground: true,
  header: {
    title: 'What is a U Visa?',
    subtitle: 'Protection for Crime Victims Who Assist Law Enforcement',
    tagline: 'U Visa Benefits',
  },
  content:
    'The U visa is a nonimmigrant visa available to victims of certain crimes who have suffered mental or physical abuse and are helpful to law enforcement in the investigation or prosecution of criminal activity.',
  items: [
    {
      title: 'Legal Status for 4 Years',
      description:
        'U visa provides temporary legal status for up to 4 years, with the possibility of extension.',
    },
    {
      title: 'Work Authorization',
      description:
        'U visa holders can legally work in the United States with proper employment authorization.',
    },
    {
      title: 'Path to Permanent Residency',
      description:
        'After 3 years, U visa holders may be eligible to apply for permanent residence (green card).',
    },
  ],
  image: {
    src: '/lawyer-consultation.jpg',
    alt: 'U Visa consultation',
  },
  isReversed: false,
  isAfterContent: false,
};

const featuresData = {
  id: 'features-u-visa',
  hasBackground: false,
  columns: 2 as const,
  header: {
    title: 'Qualifying Crimes for U Visa',
    subtitle: 'We help victims of various crimes obtain U visa protection',
    tagline: 'Crime Categories',
  },
  items: [
    {
      title: 'Domestic Violence',
      description: 'Physical and emotional abuse by intimate partners or family members.',
      icon: IconHome,
    },
    {
      title: 'Sexual Assault',
      description: 'Rape, sexual abuse, and other forms of sexual violence.',
      icon: IconShield,
    },
    {
      title: 'Human Trafficking',
      description: 'Labor trafficking and sex trafficking victims.',
      icon: IconUsers,
    },
    {
      title: 'Kidnapping',
      description: 'Unlawful detention, false imprisonment, and abduction.',
      icon: IconLock,
    },
    {
      title: 'Robbery & Extortion',
      description: 'Theft by force or threat, blackmail, and extortion.',
      icon: IconShield,
    },
    {
      title: 'Other Qualifying Crimes',
      description: 'Murder, manslaughter, felonious assault, witness tampering, and more.',
      icon: IconCheck,
    },
  ],
};

const processData = {
  id: 'process-u-visa',
  hasBackground: true,
  header: {
    title: 'U Visa Application Process',
    subtitle: 'Our step-by-step approach to your U visa case',
    tagline: 'How We Help',
  },
  content:
    'Our experienced attorneys guide you through every step of the U visa application process, ensuring your case is properly documented and presented.',
  items: [
    {
      title: 'Case Evaluation',
      description:
        'We assess your situation to determine U visa eligibility and gather necessary evidence.',
    },
    {
      title: 'Law Enforcement Certification',
      description:
        'We help obtain the required certification from law enforcement agencies.',
    },
    {
      title: 'Application Preparation',
      description:
        'Complete preparation of Form I-918 and all supporting documentation.',
    },
  ],
  image: {
    src: 'https://purdyimmigrationlawyer.com/wp-content/uploads/2021/12/Florida-Immigration-Lawyer-1.jpg',
    alt: 'U Visa application process',
  },
  isReversed: true,
  isAfterContent: true,
};

const faqsData = {
  id: 'faqs-u-visa',
  hasBackground: false,
  header: {
    title: 'U Visa Frequently Asked Questions',
    subtitle: 'Common questions about U visa eligibility and process',
    tagline: 'FAQs',
  },
  items: [
    {
      title: 'Do I need to report the crime to police to be eligible?',
      description: `Yes, you must have reported the crime to law enforcement and be willing to assist in the investigation or prosecution. However, there are exceptions for minors and those who were unable to report due to trauma.`,
    },
    {
      title: 'Can my family members get U visas too?',
      description: `Yes, certain family members may be eligible for derivative U visas, including spouses, children, parents (if you are under 21), and unmarried siblings under 18 (if you are under 21).`,
    },
    {
      title: 'How long does the U visa process take?',
      description: `The process can take 3-5 years due to annual caps on U visas. However, you may receive deferred action and work authorization while waiting.`,
    },
    {
      title: 'What if I have a criminal record?',
      description: `Having a criminal record does not automatically disqualify you. We can help evaluate your case and explore waiver options if necessary.`,
    },
    {
      title: 'Do I need to cooperate with ongoing investigations?',
      description: `Yes, continued cooperation with law enforcement is required to maintain U visa status, unless you are exempted due to age, trauma, or other circumstances.`,
    },
  ],
};

const ctaData = {
  id: 'cta-u-visa',
  hasBackground: false,
  title: 'Protect Yourself with U Visa Status',
  subtitle:
    'If you are a victim of crime, do not suffer in silence. Our experienced immigration attorneys can help you secure protection and legal status through the U visa program.',
  callToAction: {
    text: 'Start Your U Visa Application',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'WhatsApp Consultation',
    href: 'https://wa.me/17135550123',
    icon: IconBrandWhatsapp,
  },
};

const contactData = {
  id: 'contact-u-visa',
  hasBackground: true,
  header: {
    title: 'Get U Visa Help Today',
    subtitle: 'Confidential consultation for crime victims',
    tagline: 'Contact Us',
  },
  content:
    'Our compassionate immigration attorneys understand the trauma you have experienced. We provide confidential, sensitive legal assistance to help you secure protection through the U visa program.',
  items: [
    {
      title: 'Emergency Consultation',
      description: ['Available 24/7 for urgent cases', 'Immediate safety planning', 'Crisis intervention support'],
      icon: IconClock,
    },
    {
      title: 'Confidential Services',
      description: ['Attorney-client privilege protected', 'Safe and secure consultations', 'Trauma-informed approach'],
      icon: IconShield,
    },
    {
      title: 'Comprehensive Support',
      description: ['Full U visa application assistance', 'Family member derivatives', 'Path to permanent residence'],
      icon: IconUsers,
    },
  ],
  form: {
    title: 'Confidential U Visa Consultation',
    inputs: [
      {
        type: 'text',
        name: 'name',
        placeholder: 'Your name (confidential)',
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
      placeholder: 'Brief description of your situation (confidential)...',
    },
    btn: {
      title: 'Request Confidential Consultation',
      type: 'submit' as const,
    },
  },
};

export default function UVisaPage() {
  return (
    <>
      <Hero {...heroData} />
      <Content {...contentData} />
      <Features {...featuresData} />
      <Content {...processData} />
      <FAQs {...faqsData} />
      <Contact {...contactData} />
      <CallToAction2 {...ctaData} />
    </>
  );
}
