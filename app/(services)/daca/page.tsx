import type { Metadata } from 'next';

import { SITE } from '~/config.js';
import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import Features from '~/components/widgets/Features';
import Steps from '~/components/widgets/Steps';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import { IconShield, IconFileText, IconClock, IconCheck, IconPhoneCall, IconBrandWhatsapp, IconUsers, IconCash, IconMapPin, IconBookmark, IconSchool, IconHeartbeat } from '@tabler/icons-react';

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
      <div className="mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
        <div className="flex items-center gap-3 mb-2">
          <IconCash className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-xl text-primary-600">$1,500 Attorney Fee</span>
        </div>
        <div className="flex items-center gap-3 mb-3">
          <IconClock className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-lg text-primary-600">1-5 Days Processing</span>
        </div>
        <div className="flex items-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded border border-orange-200 dark:border-orange-800">
          <IconClock className="w-5 h-5 text-orange-600" />
          <span className="font-bold text-orange-600">Rush Service: 1-3 Days (+$300)</span>
        </div>
      </div>
      Secure your protection from deportation and work authorization through DACA. Our experienced attorneys
      provide comprehensive assistance with initial applications, renewals, and complex cases to help you build
      a secure future in the United States.
    </>
  ),
  callToAction: {
    text: 'Free DACA Consultation',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'Check Your Eligibility',
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
    src: '/DACA.jpg',
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

const dacaProcess = {
  id: 'daca-process',
  header: {
    title: 'DACA Application Process',
    subtitle: 'Step-by-step guidance through your DACA journey',
    tagline: 'Our Process',
  },
  items: [
    {
      title: 'Initial Consultation',
      description: 'Free case evaluation to determine DACA eligibility and assess your specific situation.',
      icon: IconPhoneCall,
    },
    {
      title: 'Document Collection',
      description: 'Comprehensive gathering of required documents including education, residence, and identity records.',
      icon: IconFileText,
    },
    {
      title: 'Application Preparation',
      description: 'Expert preparation of Form I-821D, I-765, and all supporting documentation.',
      icon: IconBookmark,
    },
    {
      title: 'Filing & Monitoring',
      description: 'Professional filing with USCIS and continuous monitoring of your case status.',
      icon: IconCheck,
    },
    {
      title: 'Biometrics & Interview',
      description: 'Preparation for biometrics appointment and any additional USCIS requirements.',
      icon: IconUsers,
    },
    {
      title: 'Work Authorization',
      description: 'Receiving your Employment Authorization Document (EAD) and ongoing renewal support.',
      icon: IconSchool,
    },
  ],
  image: {
    src: '/daca-process.jpg',
    alt: 'DACA application process steps',
  },
};

const dacaBenefits = {
  id: 'daca-benefits',
  hasBackground: true,
  columns: 2,
  header: {
    title: 'DACA Benefits & Protection',
    subtitle: 'What DACA approval means for your future',
    tagline: 'Benefits',
  },
  items: [
    {
      title: 'Protection from Deportation',
      description: 'Renewable two-year protection from removal proceedings, providing peace of mind.',
      icon: IconShield,
    },
    {
      title: 'Work Authorization',
      description: 'Legal employment authorization allowing you to work for any US employer.',
      icon: IconCash,
    },
    {
      title: 'Social Security Number',
      description: 'Eligibility to obtain a Social Security number for employment and benefits.',
      icon: IconFileText,
    },
    {
      title: 'Driver\'s License',
      description: 'Ability to obtain a driver\'s license in most states for increased mobility.',
      icon: IconMapPin,
    },
    {
      title: 'Travel Authorization',
      description: 'Potential to receive advance parole for international travel in certain circumstances.',
      icon: IconCheck,
    },
    {
      title: 'Educational Opportunities',
      description: 'Access to in-state tuition and financial aid in many states.',
      icon: IconSchool,
    },
    {
      title: 'Healthcare Access',
      description: 'Ability to obtain health insurance and access healthcare services.',
      icon: IconHeartbeat,
    },
    {
      title: 'Financial Services',
      description: 'Eligibility to open bank accounts, obtain credit, and build financial history.',
      icon: IconCash,
    },
  ],
};

const dacaPricingDetails = {
  id: 'daca-pricing-details',
  hasBackground: true,
  columns: 3,
  header: {
    title: 'DACA Service Pricing & Timeline',
    subtitle: 'Transparent pricing and realistic expectations for your DACA case',
    tagline: 'Investment & Timeline',
  },
  items: [
    {
      title: 'Attorney Fees',
      description: 'Complete DACA application preparation, filing, and representation including case review, document preparation, and ongoing support.',
      icon: IconFileText,
      callToAction: {
        text: '$1,500',
        href: '#',
      },
    },
    {
      title: 'Government Filing Fee',
      description: 'USCIS filing fee for Form I-821D (DACA), Form I-765 (work authorization), and Form I-765WS (worksheet).',
      icon: IconShield,
      callToAction: {
        text: '$495',
        href: '#',
      },
    },
    {
      title: 'Processing Time',
      description: 'Current USCIS processing times for DACA applications. Timeline may vary based on application volume and case complexity.',
      icon: IconClock,
      callToAction: {
        text: '8-13 months',
        href: '#',
      },
    },
    {
      title: 'Work Authorization',
      description: 'Employment Authorization Document (EAD) processing time, typically received with DACA approval or shortly after.',
      icon: IconCheck,
      callToAction: {
        text: '8-13 months',
        href: '#',
      },
    },
    {
      title: 'DACA Renewal',
      description: 'Renewal applications should be filed 120-150 days before expiration. Processing is generally faster than initial applications.',
      icon: IconClock,
      callToAction: {
        text: '3-5 months',
        href: '#',
      },
    },
    {
      title: 'Emergency Processing',
      description: 'Available for urgent situations such as emergency travel, job offers, or other qualifying circumstances.',
      icon: IconPhoneCall,
      callToAction: {
        text: 'Available',
        href: '#',
      },
    },
  ],
};

const dacaPricing = {
  id: 'daca-pricing',
  hasBackground: false,
  title: 'Ready to Start Your DACA Application?',
  subtitle: 'Complete DACA services for $1,500 attorney fees + $495 government filing fee. Free consultation to assess your eligibility.',
  callToAction: {
    text: 'Schedule Free Consultation',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'WhatsApp Us Now',
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
      <Steps {...dacaProcess} />
      <Features {...dacaBenefits} />
      <Features {...dacaPricingDetails} />
      <CallToAction2 {...dacaPricing} />
      <Contact {...contactDaca} />
    </>
  );
}
