import type { Metadata } from 'next';

import { SITE } from '~/config.js';
import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import Features from '~/components/widgets/Features';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import { IconFileText, IconClock, IconCheck, IconPhoneCall, IconBrandWhatsapp, IconShield, IconMapPin, IconHome } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: `Consular Report of Birth Abroad - Morgan Dauterive LLP | CRBA Applications`,
  description: 'Expert assistance with CRBA applications for US citizens born outside the United States. Establish US citizenship documentation for children born abroad.',
};

const crbaHero = {
  title: (
    <>
      Consular Report of Birth Abroad <span className="hidden md:inline">-</span> <span>CRBA</span>{' '}
      <span className="sm:whitespace-nowrap text-accent-600">Applications</span>
    </>
  ),
  subtitle: (
    <>
      <div className="mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
        <div className="flex items-center gap-3 mb-2">
          <IconFileText className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-xl text-primary-600">$200 Attorney Fee</span>
        </div>
        <div className="flex items-center gap-3">
          <IconClock className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-lg text-primary-600">3-6 Months Processing</span>
        </div>
      </div>
      Expert assistance with Consular Report of Birth Abroad (CRBA) applications for US citizens born outside
      the United States. Establish official proof of US citizenship for your child.
    </>
  ),
  callToAction: {
    text: 'WhatsApp Consultation',
    href: 'https://wa.me/17135550123',
    icon: IconBrandWhatsapp,
  },
  callToAction2: {
    text: 'Check Eligibility',
    href: '#eligibility',
  },
  image: {
    src: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Consular Report of Birth Abroad services',
  },
};

const crbaContent = {
  id: 'crba-overview',
  hasBackground: true,
  header: {
    title: 'What is a Consular Report of Birth Abroad?',
    subtitle: 'Establishing US citizenship for children born overseas',
    tagline: 'CRBA Overview',
  },
  content: `A Consular Report of Birth Abroad (CRBA) is an official document that establishes a child's claim to US citizenship
  when born outside the United States to US citizen parents. This document serves as proof of citizenship and can be used
  to obtain a US passport and other benefits of citizenship.`,
  items: [
    {
      title: 'Proof of US Citizenship',
      description: 'Official documentation that your child is a US citizen despite being born abroad.',
    },
    {
      title: 'Passport Eligibility',
      description: 'CRBA allows your child to obtain a US passport for travel and identification.',
    },
    {
      title: 'Government Benefits',
      description: 'Access to Social Security benefits and other rights of US citizenship.',
    },
    {
      title: 'Future Documentation',
      description: 'Permanent record that can be used throughout your child\'s life for citizenship proof.',
    },
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'CRBA documentation services',
  },
  isReversed: false,
  isAfterContent: false,
};

const crbaEligibility = {
  id: 'crba-eligibility',
  hasBackground: false,
  columns: 2,
  header: {
    title: 'CRBA Eligibility Requirements',
    subtitle: 'Does your child qualify for a Consular Report of Birth Abroad?',
    tagline: 'Eligibility',
  },
  items: [
    {
      title: 'US Citizen Parent',
      description: 'At least one parent must be a US citizen at the time of the child\'s birth.',
      icon: IconShield,
    },
    {
      title: 'Physical Presence',
      description: 'The US citizen parent must meet specific physical presence requirements in the US.',
      icon: IconHome,
    },
    {
      title: 'Age Requirement',
      description: 'Application must be filed before the child\'s 18th birthday.',
      icon: IconClock,
    },
    {
      title: 'Birth Documentation',
      description: 'Foreign birth certificate and other supporting documents must be provided.',
      icon: IconFileText,
    },
  ],
};

const crbaPricing = {
  id: 'crba-pricing',
  hasBackground: true,
  columns: 3,
  header: {
    title: 'CRBA Service Pricing & Timeline',
    subtitle: 'Transparent pricing for Consular Report of Birth Abroad applications',
    tagline: 'Investment & Timeline',
  },
  items: [
    {
      title: 'Attorney Fees',
      description: 'Complete CRBA application assistance including document review, form preparation, and submission guidance.',
      icon: IconFileText,
      callToAction: {
        text: '$200',
        href: '#',
      },
    },
    {
      title: 'Consular Fees',
      description: 'US Department of State fees for processing the Consular Report of Birth Abroad application.',
      icon: IconShield,
      callToAction: {
        text: '$100',
        href: '#',
      },
    },
    {
      title: 'Processing Time',
      description: 'Standard processing time for CRBA applications at US consulates worldwide.',
      icon: IconClock,
      callToAction: {
        text: '3-6 months',
        href: '#',
      },
    },
    {
      title: 'Document Authentication',
      description: 'Additional time and fees may be required for document authentication and translation.',
      icon: IconCheck,
      callToAction: {
        text: 'Varies',
        href: '#',
      },
    },
    {
      title: 'Expedited Service',
      description: 'Limited expedited processing available for urgent cases with compelling reasons.',
      icon: IconClock,
      callToAction: {
        text: '2-4 weeks',
        href: '#',
      },
    },
    {
      title: 'Supporting Documents',
      description: 'Cost of obtaining required supporting documents varies by case complexity.',
      icon: IconFileText,
      callToAction: {
        text: '$50-$200',
        href: '#',
      },
    },
  ],
};

const crbaCTA = {
  id: 'crba-cta',
  hasBackground: false,
  title: 'Ready to Apply for Your Child\'s CRBA?',
  subtitle: 'Professional CRBA assistance for $200 + $100 government fee. Establish your child\'s US citizenship with expert guidance.',
  callToAction: {
    text: 'Start CRBA Application',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'WhatsApp Consultation',
    href: 'https://wa.me/17135550123',
    icon: IconBrandWhatsapp,
  },
};

const contactCRBA = {
  id: 'contact-crba',
  hasBackground: false,
  header: {
    title: 'Get Started with Your CRBA Application',
    subtitle: 'Expert assistance for establishing your child\'s US citizenship',
    tagline: 'Contact Us',
  },
  content: 'Time is important for CRBA applications. Contact our experienced team to ensure your child\'s US citizenship is properly documented.',
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
    title: 'Start Your CRBA Application',
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
      placeholder: 'Tell us about your CRBA case (child\'s birth country, parent citizenship status, etc.)...',
    },
    btn: {
      title: 'Get CRBA Assistance',
      type: 'submit',
    },
  },
};

export default function ConsularReportBirthAbroadPage() {
  return (
    <>
      <Hero {...crbaHero} />
      <Content {...crbaContent} />
      <Features {...crbaEligibility} />
      <Features {...crbaPricing} />
      <CallToAction2 {...crbaCTA} />
      <Contact {...contactCRBA} />
    </>
  );
}
