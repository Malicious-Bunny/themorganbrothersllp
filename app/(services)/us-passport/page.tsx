import type { Metadata } from 'next';

import { SITE } from '~/config.js';
import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import Features from '~/components/widgets/Features';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import { IconFileText, IconClock, IconCheck, IconPhoneCall, IconBrandWhatsapp, IconShield, IconMapPin } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: `US Passport Services - Morgan Dauterive LLP | Application & Renewal Help`,
  description: 'Professional assistance with US passport applications, renewals, and replacements. Expert guidance for first-time applicants and expedited services.',
};

const passportHero = {
  title: (
    <>
      US Passport Services <span className="hidden md:inline">-</span> <span>Applications</span>{' '}
      <span className="sm:whitespace-nowrap text-accent-600">& Renewals</span>
    </>
  ),
  subtitle: (
    <>
      <div className="mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
        <div className="flex items-center gap-3 mb-2">
          <IconFileText className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-xl text-primary-600">$3000 Attorney Fee</span>
        </div>
        <div className="flex items-center gap-3">
          <IconClock className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-lg text-primary-600">6-8 Weeks Processing</span>
        </div>
      </div>
      Expert assistance with US passport applications, renewals, and replacements. We ensure your application
      is complete and submitted correctly to avoid delays and rejections.
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
    src: '/uspassport.jpg',
    alt: 'US passport application assistance',
  },
};

const passportContent = {
  id: 'passport-overview',
  hasBackground: true,
  header: {
    title: 'US Passport Application Services',
    subtitle: 'Complete assistance for all passport needs',
    tagline: 'Our Services',
  },
  content: `A US passport is essential for international travel and serves as definitive proof of US citizenship.
  Our experienced team provides comprehensive assistance to ensure your passport application is processed smoothly and efficiently.`,
  items: [
    {
      title: 'First-Time Applications',
      description: 'Complete guidance for applicants who have never had a US passport.',
    },
    {
      title: 'Passport Renewals',
      description: 'Streamlined renewal process for expired or expiring passports.',
    },
    {
      title: 'Replacement Services',
      description: 'Assistance replacing lost, stolen, or damaged passports.',
    },
    {
      title: 'Expedited Processing',
      description: 'Rush services for urgent travel needs with faster processing times.',
    },
  ],
  image: {
    src: '/whatisuspassport.jpg',
    alt: 'US passport services',
  },
  isReversed: false,
  isAfterContent: false,
};

const passportRequirements = {
  id: 'passport-requirements',
  hasBackground: false,
  columns: 2,
  header: {
    title: 'Passport Application Requirements',
    subtitle: 'What you need to apply for your US passport',
    tagline: 'Requirements',
  },
  items: [
    {
      title: 'Proof of US Citizenship',
      description: 'Certified birth certificate, naturalization certificate, or previous passport.',
      icon: IconShield,
    },
    {
      title: 'Photo Identification',
      description: 'Valid driver\'s license, state ID, military ID, or other acceptable forms.',
      icon: IconFileText,
    },
    {
      title: 'Passport Photo',
      description: 'Recent color photograph meeting specific US passport photo requirements.',
      icon: IconCheck,
    },
    {
      title: 'Completed Application',
      description: 'Form DS-11 for first-time applicants or DS-82 for renewals.',
      icon: IconMapPin,
    },
  ],
};

const passportPricing = {
  id: 'passport-pricing',
  hasBackground: true,
  columns: 3,
  header: {
    title: 'Passport Service Pricing & Timeline',
    subtitle: 'Transparent pricing and realistic processing expectations',
    tagline: 'Investment & Timeline',
  },
  items: [
    {
      title: 'Attorney Fees',
      description: 'Complete passport application assistance including document review, form preparation, and submission guidance.',
      icon: IconFileText,
      callToAction: {
        text: '$200',
        href: '#',
      },
    },
    {
      title: 'Government Fees (Adult)',
      description: 'US State Department fees for adult passport book and acceptance fee for first-time applicants.',
      icon: IconShield,
      callToAction: {
        text: '$165',
        href: '#',
      },
    },
    {
      title: 'Standard Processing',
      description: 'Regular processing time for passport applications through US State Department.',
      icon: IconClock,
      callToAction: {
        text: '6-8 weeks',
        href: '#',
      },
    },
    {
      title: 'Expedited Service',
      description: 'Faster processing available for urgent travel needs with additional government fee.',
      icon: IconClock,
      callToAction: {
        text: '2-3 weeks',
        href: '#',
      },
    },
    {
      title: 'Expedited Fee',
      description: 'Additional government fee for expedited passport processing services.',
      icon: IconCheck,
      callToAction: {
        text: '+$60',
        href: '#',
      },
    },
    {
      title: 'Minor Passport',
      description: 'Special pricing for passport applications for children under 16 years old.',
      icon: IconFileText,
      callToAction: {
        text: '$100',
        href: '#',
      },
    },
  ],
};

const passportCTA = {
  id: 'passport-cta',
  hasBackground: false,
  title: 'Ready to Apply for Your US Passport?',
  subtitle: 'Professional passport assistance for $200 + government fees. Get expert guidance to ensure your application is processed correctly.',
  callToAction: {
    text: 'Start Application',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'WhatsApp Consultation',
    href: 'https://wa.me/17135550123',
    icon: IconBrandWhatsapp,
  },
};

const contactPassport = {
  id: 'contact-passport',
  hasBackground: false,
  header: {
    title: 'Get Started with Your Passport Application',
    subtitle: 'Professional assistance for all US passport needs',
    tagline: 'Contact Us',
  },
  content: 'Don\'t let passport application mistakes delay your travel plans. Our experienced team ensures your application is complete and submitted correctly.',
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
    title: 'Start Your Passport Application',
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
      placeholder: 'Tell us about your passport needs (first-time, renewal, replacement, etc.)...',
    },
    btn: {
      title: 'Get Passport Assistance',
      type: 'submit',
    },
  },
};

export default function USPassportPage() {
  return (
    <>
      <Hero {...passportHero} />
      <Content {...passportContent} />
      <Features {...passportRequirements} />
      <Features {...passportPricing} />
      <CallToAction2 {...passportCTA} />
      <Contact {...contactPassport} />
    </>
  );
}
