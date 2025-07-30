import type { Metadata } from 'next';

import { SITE } from '~/config.js';
import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import Features from '~/components/widgets/Features';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import { IconFileText, IconClock, IconCheck, IconPhoneCall, IconBrandWhatsapp, IconShield, IconMapPin, IconUsers } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: `Certificate of Naturalization Replacement - Morgan Dauterive LLP | N-565 Applications`,
  description: 'Expert assistance with N-565 applications to replace lost, damaged, or destroyed Certificate of Naturalization. Get your replacement certificate quickly.',
};

const certNaturalizationHero = {
  title: (
    <>
      Certificate of Naturalization <span className="hidden md:inline">-</span> <span>N-565</span>{' '}
      <span className="sm:whitespace-nowrap text-accent-600">Replacement</span>
    </>
  ),
  subtitle: (
    <>
      <div className="mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
        <div className="flex items-center gap-3 mb-2">
          <IconFileText className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-xl text-primary-600">$600 Attorney Fee</span>
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
      Expert assistance with N-565 applications to replace lost, damaged, or destroyed Certificate of
      Naturalization. We help you obtain a replacement certificate efficiently and correctly.
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
    src: '/certificate-of-naturalization-sample.jpg',
    alt: 'Certificate of naturalization replacement services',
  },
};

const certNaturalizationContent = {
  id: 'cert-naturalization-overview',
  hasBackground: true,
  header: {
    title: 'Certificate of Naturalization Replacement',
    subtitle: 'Replace your lost, damaged, or destroyed naturalization certificate',
    tagline: 'Replacement Services',
  },
  content: `If your Certificate of Naturalization has been lost, stolen, damaged, or destroyed, you can apply for
  a replacement using Form N-565. This official document is essential proof of your US citizenship and may be
  required for various purposes including passport applications and employment verification.`,
  items: [
    {
      title: 'Lost Certificates',
      description: 'Replace certificates that have been lost or misplaced.',
    },
    {
      title: 'Damaged Certificates',
      description: 'Replace certificates that are damaged, torn, or illegible.',
    },
    {
      title: 'Stolen Certificates',
      description: 'Replace certificates that have been stolen or destroyed.',
    },
    {
      title: 'Name Changes',
      description: 'Update certificates to reflect legal name changes after naturalization.',
    },
  ],
  image: {
    src: '/naturalizationprocess.jpg',
    alt: 'Certificate of naturalization replacement',
  },
  isReversed: false,
  isAfterContent: false,
};

const certNaturalizationRequirements = {
  id: 'cert-naturalization-requirements',
  hasBackground: false,
  columns: 2,
  header: {
    title: 'Replacement Certificate Requirements',
    subtitle: 'What you need to replace your Certificate of Naturalization',
    tagline: 'Requirements',
  },
  items: [
    {
      title: 'Previous Naturalization',
      description: 'You must have previously been issued a Certificate of Naturalization by USCIS.',
      icon: IconShield,
    },
    {
      title: 'Identity Documentation',
      description: 'Valid government-issued photo identification to verify your identity.',
      icon: IconFileText,
    },
    {
      title: 'Naturalization Information',
      description: 'Details about your original naturalization including date, place, and certificate number if known.',
      icon: IconUsers,
    },
    {
      title: 'Name Change Documentation',
      description: 'If applicable, legal documentation of any name changes since naturalization.',
      icon: IconCheck,
    },
  ],
};

const certNaturalizationPricing = {
  id: 'cert-naturalization-pricing',
  hasBackground: true,
  columns: 3,
  header: {
    title: 'Certificate Replacement Pricing & Timeline',
    subtitle: 'Transparent pricing for N-565 replacement applications',
    tagline: 'Investment & Timeline',
  },
  items: [
    {
      title: 'Attorney Fees',
      description: 'Complete N-565 application assistance including form preparation, document review, and submission guidance.',
      icon: IconFileText,
      callToAction: {
        text: '$600',
        href: '#',
      },
    },
    {
      title: 'USCIS Filing Fee',
      description: 'Government filing fee for Form N-565 replacement Certificate of Naturalization application.',
      icon: IconShield,
      callToAction: {
        text: '$555',
        href: '#',
      },
    },
    {
      title: 'Processing Time',
      description: 'Current USCIS processing time for Certificate of Naturalization replacement applications.',
      icon: IconClock,
      callToAction: {
        text: '12-16 months',
        href: '#',
      },
    },
    {
      title: 'Biometrics Fee',
      description: 'USCIS biometrics services fee for fingerprinting and background check verification.',
      icon: IconCheck,
      callToAction: {
        text: '$85',
        href: '#',
      },
    },
    {
      title: 'Supporting Documents',
      description: 'Cost of obtaining supporting documents such as certified copies varies by case.',
      icon: IconFileText,
      callToAction: {
        text: '$50-$150',
        href: '#',
      },
    },
    {
      title: 'Premium Processing',
      description: 'Premium processing is not available for N-565 replacement applications.',
      icon: IconClock,
      callToAction: {
        text: 'Not Available',
        href: '#',
      },
    },
  ],
};

const certNaturalizationCTA = {
  id: 'cert-naturalization-cta',
  hasBackground: false,
  title: 'Need to Replace Your Naturalization Certificate?',
  subtitle: 'Professional N-565 assistance for $600 + $555 government fees. Get your replacement certificate with expert guidance.',
  callToAction: {
    text: 'Start Replacement',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'WhatsApp Consultation',
    href: 'https://wa.me/17135550123',
    icon: IconBrandWhatsapp,
  },
};

const contactCertNaturalization = {
  id: 'contact-cert-naturalization',
  hasBackground: false,
  header: {
    title: 'Replace Your Certificate of Naturalization',
    subtitle: 'Expert assistance with N-565 replacement applications',
    tagline: 'Contact Us',
  },
  content: 'Don\'t let a lost or damaged certificate prevent you from proving your citizenship. Our experienced team helps you navigate the N-565 replacement process efficiently.',
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
    title: 'Start Your Replacement Application',
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
      placeholder: 'Tell us about your situation (when you naturalized, what happened to your certificate, etc.)...',
    },
    btn: {
      title: 'Get Replacement Help',
      type: 'submit',
    },
  },
};

export default function CertificateOfNaturalizationPage() {
  return (
    <>
      <Hero {...certNaturalizationHero} />
      <Content {...certNaturalizationContent} />
      <Features {...certNaturalizationRequirements} />
      <Features {...certNaturalizationPricing} />
      <CallToAction2 {...certNaturalizationCTA} />
      <Contact {...contactCertNaturalization} />
    </>
  );
}
