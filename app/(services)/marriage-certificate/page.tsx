import type { Metadata } from 'next';

import { SITE } from '~/config.js';
import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import Features from '~/components/widgets/Features';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import { IconFileText, IconClock, IconCheck, IconPhoneCall, IconBrandWhatsapp, IconShield, IconMapPin, IconHeart } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: `Marriage Certificate Services - Morgan Dauterive LLP | Legal Document Assistance`,
  description: 'Professional assistance with marriage certificates for immigration and legal purposes. Expert guidance for obtaining official marriage documentation.',
};

const marriageHero = {
  title: (
    <>
      Marriage Certificate <span className="hidden md:inline">-</span> <span>Legal Document</span>{' '}
      <span className="sm:whitespace-nowrap text-accent-600">Assistance</span>
    </>
  ),
  subtitle: (
    <>
      <div className="mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
        <div className="flex items-center gap-3 mb-2">
          <IconFileText className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-xl text-primary-600">$1500 Attorney Fee</span>
        </div>
        <div className="flex items-center gap-3">
          <IconClock className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-lg text-primary-600">2-4 Weeks Processing</span>
        </div>
      </div>
      Expert assistance obtaining official marriage certificates for immigration cases, legal proceedings,
      and official documentation. We ensure your marriage records are properly certified and legally valid.
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
    src: '/marriagecertificate.jpg',
    alt: 'Marriage certificate legal assistance',
  },
};

const marriageContent = {
  id: 'marriage-overview',
  hasBackground: true,
  header: {
    title: 'Marriage Certificate Legal Services',
    subtitle: 'Professional assistance for all marriage documentation needs',
    tagline: 'Our Services',
  },
  content: `Marriage certificates are essential legal documents required for immigration applications,
  name changes, and various legal proceedings. Our experienced team helps you obtain properly certified
  marriage certificates that meet all legal requirements.`,
  items: [
    {
      title: 'Certified Copy Requests',
      description: 'Assistance obtaining official certified copies of marriage certificates from vital records offices.',
    },
    {
      title: 'Foreign Marriage Recognition',
      description: 'Help with authenticating and legalizing marriage certificates from other countries.',
    },
    {
      title: 'Replacement Services',
      description: 'Assistance replacing lost, damaged, or destroyed marriage certificates.',
    },
    {
      title: 'Legal Validation',
      description: 'Ensuring marriage certificates meet requirements for immigration and legal proceedings.',
    },
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Marriage certificate services',
  },
  isReversed: false,
  isAfterContent: false,
};

const marriageRequirements = {
  id: 'marriage-requirements',
  hasBackground: false,
  columns: 2,
  header: {
    title: 'Marriage Certificate Requirements',
    subtitle: 'What you need to obtain your marriage certificate',
    tagline: 'Requirements',
  },
  items: [
    {
      title: 'Marriage Location Information',
      description: 'City, county, and state where the marriage took place and approximate date.',
      icon: IconMapPin,
    },
    {
      title: 'Identity Documentation',
      description: 'Valid photo identification of both spouses (driver\'s license, passport, etc.).',
      icon: IconFileText,
    },
    {
      title: 'Application Forms',
      description: 'Completed vital records application forms with accurate information.',
      icon: IconCheck,
    },
    {
      title: 'Payment of Fees',
      description: 'Government fees for certified copies and any applicable processing charges.',
      icon: IconShield,
    },
  ],
};

const marriagePricing = {
  id: 'marriage-pricing',
  hasBackground: true,
  columns: 3,
  header: {
    title: 'Marriage Certificate Service Pricing',
    subtitle: 'Transparent pricing for all marriage documentation services',
    tagline: 'Investment & Timeline',
  },
  items: [
    {
      title: 'Attorney Fees',
      description: 'Complete assistance with marriage certificate requests including form preparation and submission guidance.',
      icon: IconFileText,
      callToAction: {
        text: '$125',
        href: '#',
      },
    },
    {
      title: 'State/County Fees',
      description: 'Government fees for certified copies vary by state and county (typically $15-$50 per copy).',
      icon: IconShield,
      callToAction: {
        text: 'Varies',
        href: '#',
      },
    },
    {
      title: 'Standard Processing',
      description: 'Regular processing time for marriage certificate requests through vital records offices.',
      icon: IconClock,
      callToAction: {
        text: '2-4 weeks',
        href: '#',
      },
    },
    {
      title: 'Rush Service',
      description: 'Expedited processing available in some jurisdictions for urgent needs.',
      icon: IconClock,
      callToAction: {
        text: '1-2 weeks',
        href: '#',
      },
    },
    {
      title: 'Foreign Documents',
      description: 'Additional services for foreign marriage certificate authentication and apostille.',
      icon: IconHeart,
      callToAction: {
        text: '+$200',
        href: '#',
      },
    },
    {
      title: 'Multiple Copies',
      description: 'Discounted rates available for multiple certified copies of the same certificate.',
      icon: IconFileText,
      callToAction: {
        text: 'Discounts',
        href: '#',
      },
    },
  ],
};

const marriageCTA = {
  id: 'marriage-cta',
  hasBackground: false,
  title: 'Need Your Marriage Certificate?',
  subtitle: 'Professional marriage certificate assistance for $125 + government fees. Get the certified documentation you need for immigration and legal purposes.',
  callToAction: {
    text: 'Start Process',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'WhatsApp Consultation',
    href: 'https://wa.me/17135550123',
    icon: IconBrandWhatsapp,
  },
};

const contactMarriage = {
  id: 'contact-marriage',
  hasBackground: false,
  header: {
    title: 'Get Started with Marriage Certificate Services',
    subtitle: 'Professional assistance for all marriage documentation needs',
    tagline: 'Contact Us',
  },
  content: 'Don\'t let missing or invalid marriage certificates delay your immigration case or legal proceedings. Our experienced team ensures you get properly certified documents.',
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
    title: 'Request Marriage Certificate Assistance',
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
      placeholder: 'Tell us about your marriage certificate needs (location of marriage, date, intended use, etc.)...',
    },
    btn: {
      title: 'Get Marriage Certificate Help',
      type: 'submit',
    },
  },
};

export default function MarriageCertificatePage() {
  return (
    <>
      <Hero {...marriageHero} />
      <Content {...marriageContent} />
      <Features {...marriageRequirements} />
      <Features {...marriagePricing} />
      <CallToAction2 {...marriageCTA} />
      <Contact {...contactMarriage} />
    </>
  );
}
