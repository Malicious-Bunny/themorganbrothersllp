import type { Metadata } from 'next';

import { SITE } from '~/config.js';
import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import Features from '~/components/widgets/Features';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import { IconFileText, IconClock, IconCheck, IconPhoneCall, IconBrandWhatsapp, IconShield, IconMapPin, IconUsers } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: `Certificate of Citizenship - Morgan Dauterive LLP | N-600 Applications`,
  description: 'Expert assistance with N-600 Certificate of Citizenship applications for those who derived or acquired US citizenship. Obtain official proof of citizenship.',
};

const certCitizenshipHero = {
  title: (
    <>
      Certificate of Citizenship <span className="hidden md:inline">-</span> <span>N-600</span>{' '}
      <span className="sm:whitespace-nowrap text-accent-600">Applications</span>
    </>
  ),
  subtitle: (
    <>
      <div className="mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
        <div className="flex items-center gap-3 mb-2">
          <IconFileText className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-xl text-primary-600">$800 Attorney Fee</span>
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
      Expert assistance with N-600 Certificate of Citizenship applications for individuals who derived or
      acquired US citizenship through their parents. Obtain official proof of your US citizenship.
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
    src: '/certificateofcitizenship.webp',
    alt: 'Certificate of citizenship services',
  },
};

const certCitizenshipContent = {
  id: 'cert-citizenship-overview',
  hasBackground: true,
  header: {
    title: 'What is a Certificate of Citizenship?',
    subtitle: 'Official proof of US citizenship for derived or acquired citizens',
    tagline: 'Certificate Overview',
  },
  content: `A Certificate of Citizenship is an official document issued by USCIS that proves you are a US citizen.
  This is for people who became US citizens through their parents (derived citizenship) or who were born abroad
  and acquired citizenship at birth. It provides official proof of citizenship status.`,
  items: [
    {
      title: 'Derived Citizenship',
      description: 'For those who became citizens through their parents after birth.',
    },
    {
      title: 'Acquired Citizenship',
      description: 'For those who became citizens at birth through US citizen parents.',
    },
    {
      title: 'Official Proof',
      description: 'Government-issued document proving US citizenship status.',
    },
    {
      title: 'Permanent Record',
      description: 'Official documentation that can be used for all citizenship purposes.',
    },
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1589994965851-a8f479c573a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Certificate of citizenship documentation',
  },
  isReversed: false,
  isAfterContent: false,
};

const certCitizenshipEligibility = {
  id: 'cert-citizenship-eligibility',
  hasBackground: false,
  columns: 2,
  header: {
    title: 'Certificate of Citizenship Eligibility',
    subtitle: 'Do you qualify for a Certificate of Citizenship?',
    tagline: 'Eligibility',
  },
  items: [
    {
      title: 'Derived Citizenship',
      description: 'You became a US citizen through naturalization of your parents before age 18.',
      icon: IconUsers,
    },
    {
      title: 'Born Abroad to US Citizens',
      description: 'You were born outside the US to US citizen parents and acquired citizenship at birth.',
      icon: IconShield,
    },
    {
      title: 'Adopted by US Citizens',
      description: 'You were adopted by US citizens and meet specific requirements for derived citizenship.',
      icon: IconFileText,
    },
    {
      title: 'Legal Permanent Resident',
      description: 'For derived citizenship, you must have been a lawful permanent resident.',
      icon: IconCheck,
    },
  ],
};

const certCitizenshipPricing = {
  id: 'cert-citizenship-pricing',
  hasBackground: true,
  columns: 3,
  header: {
    title: 'Certificate of Citizenship Pricing & Timeline',
    subtitle: 'Transparent pricing for N-600 applications',
    tagline: 'Investment & Timeline',
  },
  items: [
    {
      title: 'Attorney Fees',
      description: 'Complete N-600 application assistance including complex case analysis, document preparation, and representation.',
      icon: IconFileText,
      callToAction: {
        text: '$800',
        href: '#',
      },
    },
    {
      title: 'USCIS Filing Fee',
      description: 'Government filing fee for Form N-600 Certificate of Citizenship application.',
      icon: IconShield,
      callToAction: {
        text: '$1,170',
        href: '#',
      },
    },
    {
      title: 'Processing Time',
      description: 'Current USCIS processing time for Certificate of Citizenship applications.',
      icon: IconClock,
      callToAction: {
        text: '14-18 months',
        href: '#',
      },
    },
    {
      title: 'Biometrics Fee',
      description: 'USCIS biometrics services fee for fingerprinting and background check.',
      icon: IconCheck,
      callToAction: {
        text: '$85',
        href: '#',
      },
    },
    {
      title: 'Document Costs',
      description: 'Cost of obtaining required supporting documents varies by case complexity.',
      icon: IconFileText,
      callToAction: {
        text: '$100-$300',
        href: '#',
      },
    },
    {
      title: 'Premium Processing',
      description: 'Premium processing is not available for N-600 Certificate of Citizenship applications.',
      icon: IconClock,
      callToAction: {
        text: 'Not Available',
        href: '#',
      },
    },
  ],
};

const certCitizenshipCTA = {
  id: 'cert-citizenship-cta',
  hasBackground: false,
  title: 'Ready to Apply for Your Certificate of Citizenship?',
  subtitle: 'Professional N-600 assistance for $800 + $1,170 government fees. Get official proof of your US citizenship with expert guidance.',
  callToAction: {
    text: 'Start N-600 Application',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'WhatsApp Consultation',
    href: 'https://wa.me/17135550123',
    icon: IconBrandWhatsapp,
  },
};

const contactCertCitizenship = {
  id: 'contact-cert-citizenship',
  hasBackground: false,
  header: {
    title: 'Get Your Certificate of Citizenship',
    subtitle: 'Expert assistance with N-600 applications and complex citizenship cases',
    tagline: 'Contact Us',
  },
  content: 'Certificate of Citizenship cases can be complex. Our experienced attorneys ensure your application is prepared correctly and supported with proper documentation.',
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
    title: 'Start Your Certificate Application',
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
      placeholder: 'Tell us about your citizenship situation (parents\' status, when they naturalized, etc.)...',
    },
    btn: {
      title: 'Get Certificate Assistance',
      type: 'submit',
    },
  },
};

export default function CertificateOfCitizenshipPage() {
  return (
    <>
      <Hero {...certCitizenshipHero} />
      <Content {...certCitizenshipContent} />
      <Features {...certCitizenshipEligibility} />
      <Features {...certCitizenshipPricing} />
      <CallToAction2 {...certCitizenshipCTA} />
      <Contact {...contactCertCitizenship} />
    </>
  );
}
