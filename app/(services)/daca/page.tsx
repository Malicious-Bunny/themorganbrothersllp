import type { Metadata } from 'next';

import { SITE } from '~/config.js';
import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import Features from '~/components/widgets/Features';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import { IconShield, IconFileText, IconClock, IconCheck, IconPhoneCall, IconBrandWhatsapp } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: `DACA Services - Morgan Dauterive LLP | Deferred Action for Childhood Arrivals`,
  description: 'Expert DACA application and renewal services. Help securing protection from deportation for qualifying young immigrants brought to the US as children.',
};

const dacaHero = {
  title: (
    <>
      DACA Services <span className="hidden md:inline">-</span> <span>Deferred Action</span>{' '}
      <span className="sm:whitespace-nowrap text-accent-600">for Childhood Arrivals</span>
    </>
  ),
  subtitle: (
    <>
      Secure your protection from deportation and work authorization through DACA. Our experienced attorneys
      provide comprehensive assistance with initial applications, renewals, and complex cases.
    </>
  ),
  callToAction: {
    text: 'Free DACA Consultation',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'Check Eligibility',
    href: '#eligibility',
  },
  image: {
    src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Young person with graduation cap representing DACA recipients',
  },
};

const dacaContent = {
  id: 'daca-overview',
  hasBackground: true,
  header: {
    title: 'What is DACA?',
    subtitle: 'Understanding Deferred Action for Childhood Arrivals',
    tagline: 'DACA Overview',
  },
  content: `DACA provides temporary protection from deportation and work authorization for eligible young immigrants who were brought to the United States as children. This program allows qualified individuals to live and work legally in the US without fear of immediate deportation.`,
  items: [
    {
      title: 'Protection from Deportation',
      description: 'DACA provides a renewable two-year period of deferred action from removal proceedings.',
    },
    {
      title: 'Work Authorization',
      description: 'Recipients receive employment authorization documents (EAD) allowing them to work legally in the US.',
    },
    {
      title: 'Social Security Number',
      description: 'DACA recipients can obtain a Social Security number for employment and tax purposes.',
    },
    {
      title: 'Driver\'s License Eligibility',
      description: 'Most states allow DACA recipients to obtain driver\'s licenses and state identification.',
    },
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Person reviewing DACA documents',
  },
  isReversed: false,
  isAfterContent: false,
};

const dacaEligibility = {
  id: 'daca-eligibility',
  hasBackground: false,
  columns: 2,
  header: {
    title: 'DACA Eligibility Requirements',
    subtitle: 'Do you qualify for DACA protection?',
    tagline: 'Eligibility',
  },
  items: [
    {
      title: 'Age Requirements',
      description: 'Must have been under 31 years old on June 15, 2012, and arrived in the US before your 16th birthday.',
      icon: IconClock,
    },
    {
      title: 'Continuous Residence',
      description: 'Must have continuously resided in the US since June 15, 2007.',
      icon: IconShield,
    },
    {
      title: 'Education/Military',
      description: 'Must be currently in school, graduated from high school, obtained a GED, or be an honorably discharged veteran.',
      icon: IconFileText,
    },
    {
      title: 'Clean Criminal Record',
      description: 'Must not have been convicted of a felony, significant misdemeanor, or three or more misdemeanors.',
      icon: IconCheck,
    },
  ],
};

const dacaPricing = {
  id: 'daca-pricing',
  hasBackground: true,
  title: 'DACA Service Pricing',
  subtitle: 'Transparent pricing for comprehensive DACA assistance',
  callToAction: {
    text: 'Schedule Consultation',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'WhatsApp Us',
    href: 'https://wa.me/17135550123',
    icon: IconBrandWhatsapp,
  },
};

const contactDaca = {
  id: 'contact-daca',
  hasBackground: false,
  header: {
    title: 'Ready to Apply for DACA?',
    subtitle: 'Get expert legal assistance with your DACA case',
    tagline: 'Get Started',
  },
  content: 'Time is critical for DACA applications. Contact our experienced immigration attorneys today to begin your case and secure your future in the United States.',
  items: [
    {
      title: 'Our office',
      description: ['1234 Main Street', 'Suite 100', 'Houston, TX 77001'],
      icon: IconPhoneCall,
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
    title: 'Start Your DACA Application',
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
      placeholder: 'Tell us about your DACA situation (when you arrived, current status, etc.)...',
    },
    btn: {
      title: 'Get Free DACA Consultation',
      type: 'submit',
    },
  },
};

export default function DacaPage() {
  return (
    <>
      <Hero {...dacaHero} />
      <Content {...dacaContent} />
      <Features {...dacaEligibility} />
      <CallToAction2 {...dacaPricing} />
      <Contact {...contactDaca} />
    </>
  );
}
