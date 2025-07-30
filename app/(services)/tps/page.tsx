import type { Metadata } from 'next';

import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import Features from '~/components/widgets/Features';
import Steps from '~/components/widgets/Steps';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import { IconShield, IconHome, IconUsers, IconPhoneCall, IconBrandWhatsapp, IconCheck, IconClock, IconGlobe, IconFileText, IconScale, IconCash } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: 'TPS - Temporary Protected Status - Morgan Dauterive LLP | Country-Based Immigration Relief',
  description: 'Expert TPS registration and re-registration assistance for nationals from designated countries experiencing armed conflict, natural disasters, or extraordinary circumstances.',
};

const tpsHero = {
  title: (
    <>
      Temporary Protected Status <span className="hidden md:inline">-</span> <span>TPS</span>{' '}
      <span className="sm:whitespace-nowrap text-accent-600">Registration</span>
    </>
  ),
  subtitle: (
    <>
      <div className="mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
        <div className="flex items-center gap-3 mb-2">
          <IconCash className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-xl text-primary-600">$1,200 Attorney Fee</span>
        </div>
        <div className="flex items-center gap-3">
          <IconClock className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-lg text-primary-600">6-12 Months Processing Time</span>
        </div>
      </div>
      If you are a national of a country designated for TPS due to ongoing armed conflict, natural disaster,
      or extraordinary circumstances, our attorneys can help you register for protection and work authorization
      while conditions in your home country remain unsafe.
    </>
  ),
  callToAction: {
    text: 'Check TPS Eligibility',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'TPS Information',
    href: '#eligibility',
  },
  image: {
    src: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Temporary Protected Status assistance',
  },
};

const tpsContent = {
  id: 'tps-overview',
  hasBackground: true,
  header: {
    title: 'What is Temporary Protected Status (TPS)?',
    subtitle: 'Protection for Nationals from Designated Countries',
    tagline: 'TPS Overview',
  },
  content: `Temporary Protected Status (TPS) is a temporary immigration benefit for individuals from countries experiencing ongoing armed conflict, environmental disaster, or other extraordinary and temporary circumstances that prevent safe return.`,
  items: [
    {
      title: 'Protection from Removal',
      description: 'Protection from deportation while your country is designated for TPS.',
    },
    {
      title: 'Work Authorization',
      description: 'Eligible to receive employment authorization document (EAD) to work legally.',
    },
    {
      title: 'Travel Authorization',
      description: 'May be eligible for advance parole to travel outside the United States.',
    },
    {
      title: 'Renewable Status',
      description: 'TPS can be renewed if your country\'s designation is extended by DHS.',
    },
  ],
  image: {
    src: '/protected.jpg',
    alt: 'Legal documentation and assistance',
  },
  isReversed: false,
  isAfterContent: false,
};

const tpsEligibility = {
  id: 'tps-eligibility',
  hasBackground: false,
  columns: 2,
  header: {
    title: 'TPS Eligibility Requirements',
    subtitle: 'General requirements for TPS registration',
    tagline: 'Eligibility',
  },
  items: [
    {
      title: 'Nationality Requirement',
      description: 'Must be a national of a country currently designated for TPS by the Department of Homeland Security.',
      icon: IconGlobe,
    },
    {
      title: 'Continuous Physical Presence',
      description: 'Must have continuously resided in the US since the date specified for your country.',
      icon: IconHome,
    },
    {
      title: 'Continuous Residence',
      description: 'Must have been continuously physically present in the US since the effective date.',
      icon: IconCheck,
    },
    {
      title: 'Timely Registration',
      description: 'Must register during the initial registration period or qualify for late registration.',
      icon: IconClock,
    },
  ],
};

const tpsCountries = {
  id: 'tps-countries',
  hasBackground: true,
  columns: 3,
  header: {
    title: 'Current TPS Designated Countries',
    subtitle: 'Countries currently designated for Temporary Protected Status',
    tagline: 'Designated Countries',
  },
  items: [
    {
      title: 'El Salvador',
      description: 'Designated due to ongoing armed conflict and extraordinary and temporary circumstances.',
      icon: IconShield,
      callToAction: {
        text: 'Since 2001',
        href: '#',
      },
    },
    {
      title: 'Haiti',
      description: 'Designated due to extraordinary and temporary circumstances following natural disasters.',
      icon: IconHome,
      callToAction: {
        text: 'Various periods',
        href: '#',
      },
    },
    {
      title: 'Honduras',
      description: 'Designated due to environmental disaster and extraordinary circumstances.',
      icon: IconGlobe,
      callToAction: {
        text: 'Since 1999',
        href: '#',
      },
    },
    {
      title: 'Nepal',
      description: 'Designated due to ongoing armed conflict and extraordinary circumstances.',
      icon: IconUsers,
      callToAction: {
        text: 'Since 2015',
        href: '#',
      },
    },
    {
      title: 'Nicaragua',
      description: 'Designated due to environmental disaster and extraordinary circumstances.',
      icon: IconShield,
      callToAction: {
        text: 'Since 1999',
        href: '#',
      },
    },
    {
      title: 'Venezuela',
      description: 'Designated due to extraordinary and temporary circumstances.',
      icon: IconHome,
      callToAction: {
        text: 'Since 2021',
        href: '#',
      },
    },
  ],
};

const tpsPricingDetails = {
  id: 'tps-pricing-details',
  hasBackground: false,
  columns: 3,
  header: {
    title: 'TPS Service Pricing & Timeline',
    subtitle: 'Affordable TPS registration and renewal assistance',
    tagline: 'Investment & Timeline',
  },
  items: [
    {
      title: 'Attorney Fees',
      description: 'Complete TPS application preparation, filing assistance, and guidance throughout the process.',
      icon: IconFileText,
      callToAction: {
        text: '$1,200',
        href: '#',
      },
    },
    {
      title: 'Government Filing Fees',
      description: 'USCIS fees for Form I-821 (TPS application) and Form I-765 (work authorization).',
      icon: IconShield,
      callToAction: {
        text: '$50 + $410',
        href: '#',
      },
    },
    {
      title: 'Processing Time - Initial',
      description: 'Processing time for initial TPS registration applications.',
      icon: IconClock,
      callToAction: {
        text: '3-8 months',
        href: '#',
      },
    },
    {
      title: 'Processing Time - Renewal',
      description: 'Processing time for TPS re-registration applications.',
      icon: IconCheck,
      callToAction: {
        text: '2-6 months',
        href: '#',
      },
    },
    {
      title: 'Work Authorization',
      description: 'Employment authorization document typically received with TPS approval.',
      icon: IconUsers,
      callToAction: {
        text: 'With approval',
        href: '#',
      },
    },
    {
      title: 'Status Duration',
      description: 'TPS status duration depends on country designation period (typically 6-18 months).',
      icon: IconScale,
      callToAction: {
        text: '6-18 months',
        href: '#',
      },
    },
  ],
};

const tpsProcess = {
  id: 'tps-process',
  hasBackground: true,
  header: {
    title: 'TPS Registration Process',
    subtitle: 'Step-by-step guide to TPS registration or renewal',
    tagline: 'Process',
  },
  items: [
    {
      title: 'Eligibility Assessment',
      description: 'We evaluate your country designation, residence requirements, and registration timeline.',
      icon: IconGlobe,
    },
    {
      title: 'Document Gathering',
      description: 'We help gather nationality evidence, residence documentation, and supporting materials.',
      icon: IconFileText,
    },
    {
      title: 'Application Preparation',
      description: 'We prepare your TPS registration (Form I-821) and work authorization (Form I-765) applications.',
      icon: IconShield,
    },
    {
      title: 'Filing and Follow-up',
      description: 'We file your applications and monitor case status, responding to any USCIS requests.',
      icon: IconCheck,
    },
    {
      title: 'Approval and Renewal Planning',
      description: 'Upon approval, we help you understand your status and plan for timely re-registration.',
      icon: IconUsers,
    },
  ],
};

const tpsPricing = {
  id: 'tps-pricing',
  hasBackground: false,
  title: 'Register for TPS Protection',
  subtitle: 'Complete TPS services for $1,200 attorney fees + $460 government filing fees. Free consultation to assess your TPS eligibility.',
  callToAction: {
    text: 'Schedule TPS Consultation',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'WhatsApp TPS Help',
    href: 'https://wa.me/17135550123',
    icon: IconBrandWhatsapp,
  },
};

const contactTps = {
  id: 'contact-tps',
  hasBackground: true,
  header: {
    title: 'Get TPS Registration Help',
    subtitle: 'Expert assistance with TPS applications and renewals',
    tagline: 'Get Started',
  },
  content: 'TPS registration deadlines are critical. Don\'t miss your opportunity for protection and work authorization. Our experienced attorneys help nationals from designated countries secure TPS benefits.',
  items: [
    {
      title: 'Country-Specific Expertise',
      description: ['Current designation updates', 'Country-specific requirements', 'Registration deadline tracking'],
      icon: IconGlobe,
    },
    {
      title: 'Document Assistance',
      description: ['Nationality verification', 'Residence proof', 'Supporting evidence gathering'],
      icon: IconFileText,
    },
    {
      title: 'Renewal Services',
      description: ['Re-registration assistance', 'Status maintenance', 'Timeline management'],
      icon: IconCheck,
    },
  ],
  form: {
    title: 'Start Your TPS Registration',
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
      placeholder: 'Which country are you from and when did you arrive in the US?',
    },
    btn: {
      title: 'Get TPS Eligibility Assessment',
      type: 'submit',
    },
  },
};

export default function TpsPage() {
  return (
    <>
      <Hero {...tpsHero} />
      <Content {...tpsContent} />
      <Features {...tpsEligibility} />
      <Features {...tpsCountries} />
      <Features {...tpsPricingDetails} />
      <Steps {...tpsProcess} />
      <CallToAction2 {...tpsPricing} />
      <Contact {...contactTps} />
    </>
  );
}
