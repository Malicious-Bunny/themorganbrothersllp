import type { Metadata } from 'next';

import { SITE } from '~/config.js';
import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import Features from '~/components/widgets/Features';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import { IconFileText, IconClock, IconCheck, IconPhoneCall, IconBrandWhatsapp, IconShield, IconMapPin } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: `Birth Certificate Services - Morgan Dauterive LLP | Certified Copies & Documentation`,
  description: 'Professional assistance obtaining certified copies of US birth certificates for citizenship proof, passport applications, and legal documentation.',
};

const birthCertHero = {
  title: (
    <>
      Birth Certificate Services <span className="hidden md:inline">-</span> <span>Certified</span>{' '}
      <span className="sm:whitespace-nowrap text-accent-600">Documentation</span>
    </>
  ),
  subtitle: (
    <>
      <div className="mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
        <div className="flex items-center gap-3 mb-2">
          <IconFileText className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-xl text-primary-600">$1200 Attorney Fee</span>
        </div>
        <div className="flex items-center gap-3">
          <IconClock className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-lg text-primary-600">2-4 Weeks Processing</span>
        </div>
      </div>
      Expert assistance obtaining certified copies of US birth certificates for citizenship documentation,
      passport applications, and other legal purposes. We handle the complex process for you.
    </>
  ),
  callToAction: {
    text: 'WhatsApp Consultation',
    href: 'https://wa.me/17135550123',
    icon: IconBrandWhatsapp,
  },
  callToAction2: {
    text: 'Check Requirements',
    href: '#requirements',
  },
  image: {
    src: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Birth certificate documentation services',
  },
};

const birthCertContent = {
  id: 'birth-cert-overview',
  hasBackground: true,
  header: {
    title: 'Birth Certificate Documentation Services',
    subtitle: 'Certified copies for legal and citizenship purposes',
    tagline: 'Our Services',
  },
  content: `A certified birth certificate is essential documentation for establishing US citizenship, applying for passports,
  obtaining Social Security benefits, and many other legal purposes. We assist in obtaining certified copies from the
  appropriate vital records office.`,
  items: [
    {
      title: 'Certified Copies',
      description: 'Official certified copies accepted by government agencies and courts.',
    },
    {
      title: 'Multi-State Services',
      description: 'We can request birth certificates from all 50 states and territories.',
    },
    {
      title: 'Rush Processing',
      description: 'Expedited services available for urgent documentation needs.',
    },
    {
      title: 'Document Authentication',
      description: 'Verification that your birth certificate meets legal requirements.',
    },
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Birth certificate services',
  },
  isReversed: false,
  isAfterContent: false,
};

const birthCertRequirements = {
  id: 'birth-cert-requirements',
  hasBackground: false,
  columns: 2,
  header: {
    title: 'Birth Certificate Request Requirements',
    subtitle: 'Information needed to obtain your certified birth certificate',
    tagline: 'Requirements',
  },
  items: [
    {
      title: 'Personal Information',
      description: 'Full name at birth, date of birth, place of birth (city, county, state).',
      icon: IconFileText,
    },
    {
      title: 'Parent Information',
      description: 'Full names of both parents as listed on original birth certificate.',
      icon: IconShield,
    },
    {
      title: 'Valid Identification',
      description: 'Government-issued photo ID to verify your identity and relationship.',
      icon: IconCheck,
    },
    {
      title: 'Purpose Statement',
      description: 'Reason for requesting the birth certificate (passport, citizenship, etc.).',
      icon: IconMapPin,
    },
  ],
};

const birthCertPricing = {
  id: 'birth-cert-pricing',
  hasBackground: true,
  columns: 3,
  header: {
    title: 'Birth Certificate Service Pricing & Timeline',
    subtitle: 'Transparent pricing for all birth certificate services',
    tagline: 'Investment & Timeline',
  },
  items: [
    {
      title: 'Attorney Fees',
      description: 'Complete assistance with birth certificate requests including form preparation and submission.',
      icon: IconFileText,
      callToAction: {
        text: '$75',
        href: '#',
      },
    },
    {
      title: 'State Fees',
      description: 'Official state vital records fees vary by state, typically ranging from $10-$25 per copy.',
      icon: IconShield,
      callToAction: {
        text: '$10-$25',
        href: '#',
      },
    },
    {
      title: 'Standard Processing',
      description: 'Regular processing time for birth certificate requests from state vital records offices.',
      icon: IconClock,
      callToAction: {
        text: '2-4 weeks',
        href: '#',
      },
    },
    {
      title: 'Rush Service',
      description: 'Expedited processing available from most states for urgent documentation needs.',
      icon: IconClock,
      callToAction: {
        text: '3-5 days',
        href: '#',
      },
    },
    {
      title: 'Rush Fee',
      description: 'Additional state fees for expedited birth certificate processing services.',
      icon: IconCheck,
      callToAction: {
        text: '+$15-$50',
        href: '#',
      },
    },
    {
      title: 'Multiple Copies',
      description: 'Additional certified copies ordered at the same time for various purposes.',
      icon: IconFileText,
      callToAction: {
        text: '$5-$15 each',
        href: '#',
      },
    },
  ],
};

const birthCertCTA = {
  id: 'birth-cert-cta',
  hasBackground: false,
  title: 'Need Your Birth Certificate?',
  subtitle: 'Professional assistance for $75 + state fees. We handle the paperwork and ensure you get certified copies that meet all requirements.',
  callToAction: {
    text: 'Request Certificate',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'WhatsApp Consultation',
    href: 'https://wa.me/17135550123',
    icon: IconBrandWhatsapp,
  },
};

const contactBirthCert = {
  id: 'contact-birth-cert',
  hasBackground: false,
  header: {
    title: 'Get Your Certified Birth Certificate',
    subtitle: 'Expert assistance with all birth certificate needs',
    tagline: 'Contact Us',
  },
  content: 'Don\'t navigate complex state requirements alone. Our experienced team handles birth certificate requests from all states efficiently and accurately.',
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
    title: 'Request Your Birth Certificate',
    inputs: [
      {
        type: 'text',
        name: 'name',
        placeholder: 'Your full name',
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
      placeholder: 'Tell us about your birth certificate needs (state of birth, purpose, rush needed, etc.)...',
    },
    btn: {
      title: 'Get Birth Certificate Help',
      type: 'submit',
    },
  },
};

export default function BirthCertificatePage() {
  return (
    <>
      <Hero {...birthCertHero} />
      <Content {...birthCertContent} />
      <Features {...birthCertRequirements} />
      <Features {...birthCertPricing} />
      <CallToAction2 {...birthCertCTA} />
      <Contact {...contactBirthCert} />
    </>
  );
}
