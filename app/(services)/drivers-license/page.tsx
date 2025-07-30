import type { Metadata } from 'next';

import { SITE } from '~/config.js';
import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import Features from '~/components/widgets/Features';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import { IconFileText, IconClock, IconCheck, IconPhoneCall, IconBrandWhatsapp, IconShield, IconMapPin, IconCar, IconId } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: `Driver's License Services - Morgan Dauterive LLP | Immigration Legal Assistance`,
  description: 'Professional assistance with driver&apos;s license applications for immigrants. Expert guidance navigating DMV requirements and documentation.',
};

const licenseHero = {
  title: (
    <>
      Driver&apos;s License <span className="hidden md:inline">-</span> <span>Immigration</span>{' '}
      <span className="sm:whitespace-nowrap text-accent-600">Assistance</span>
    </>
  ),
  subtitle: (
    <>
      <div className="mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
        <div className="flex items-center gap-3 mb-2">
          <IconFileText className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-xl text-primary-600">$800 Attorney Fee</span>
        </div>
        <div className="flex items-center gap-3">
          <IconClock className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-lg text-primary-600">Same Day Service</span>
        </div>
      </div>
      Expert assistance with driver&apos;s license applications for immigrants and non-citizens. We help navigate
      complex DMV requirements and ensure you have the proper documentation for your license application.
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
    src: '/driverslicensehero.jpg',
    alt: 'Driver\'s license application assistance',
  },
};

const licenseContent = {
  id: 'license-overview',
  hasBackground: true,
  header: {
    title: 'Driver\'s License Immigration Services',
    subtitle: 'Professional assistance for all driver\'s license needs',
    tagline: 'Our Services',
  },
  content: `Obtaining a driver's license as an immigrant can be complex due to varying documentation requirements
  and immigration status considerations. Our experienced team provides comprehensive assistance to ensure your
  application is successful and compliant with state regulations.`,
  items: [
    {
      title: 'Documentation Review',
      description: 'Comprehensive review of your documents to ensure DMV compliance and eligibility.',
    },
    {
      title: 'Application Assistance',
      description: 'Complete guidance through the driver\'s license application process.',
    },
    {
      title: 'Immigration Status Verification',
      description: 'Help with acceptable immigration documents for driver\'s license applications.',
    },
    {
      title: 'REAL ID Compliance',
      description: 'Assistance obtaining REAL ID compliant driver\'s licenses for federal purposes.',
    },
  ],
  image: {
    src: '/driverslienseprocess.jpg',
    alt: 'Driver\'s license services',
  },
  isReversed: false,
  isAfterContent: false,
};

const licenseRequirements = {
  id: 'license-requirements',
  hasBackground: false,
  columns: 2,
  header: {
    title: 'Driver\'s License Requirements',
    subtitle: 'What you need for your driver\'s license application',
    tagline: 'Requirements',
  },
  items: [
    {
      title: 'Identity Documentation',
      description: 'Valid passport, birth certificate, or other acceptable identity documents.',
      icon: IconId,
    },
    {
      title: 'Immigration Status Proof',
      description: 'Valid immigration documents (Green Card, EAD, I-94, visa, etc.).',
      icon: IconFileText,
    },
    {
      title: 'Texas Residency Proof',
      description: 'Two documents proving Texas residency (utility bills, lease, bank statements).',
      icon: IconMapPin,
    },
    {
      title: 'Social Security Number',
      description: 'Social Security card or letter of ineligibility from Social Security Administration.',
      icon: IconShield,
    },
  ],
};

const licensePricing = {
  id: 'license-pricing',
  hasBackground: true,
  columns: 3,
  header: {
    title: 'Driver\'s License Service Pricing',
    subtitle: 'Transparent pricing for all driver\'s license assistance',
    tagline: 'Investment & Timeline',
  },
  items: [
    {
      title: 'Attorney Fees',
      description: 'Complete driver\'s license assistance including document review, form preparation, and DMV guidance.',
      icon: IconFileText,
      callToAction: {
        text: '$100',
        href: '#',
      },
    },
    {
      title: 'Standard License Fee',
      description: 'Texas DPS fee for standard driver\'s license (6-year validity).',
      icon: IconCar,
      callToAction: {
        text: '$33',
        href: '#',
      },
    },
    {
      title: 'REAL ID Fee',
      description: 'Additional fee for REAL ID compliant driver\'s license for federal identification.',
      icon: IconShield,
      callToAction: {
        text: '+$8',
        href: '#',
      },
    },
    {
      title: 'Processing Time',
      description: 'Immediate license issuance upon successful application and testing.',
      icon: IconClock,
      callToAction: {
        text: 'Same Day',
        href: '#',
      },
    },
    {
      title: 'Driving Test',
      description: 'Road test may be required for first-time Texas license applicants.',
      icon: IconCheck,
      callToAction: {
        text: 'May Apply',
        href: '#',
      },
    },
    {
      title: 'Renewal Assistance',
      description: 'Help with driver\'s license renewals and address changes.',
      icon: IconId,
      callToAction: {
        text: '$75',
        href: '#',
      },
    },
  ],
};

const licenseCTA = {
  id: 'license-cta',
  hasBackground: false,
  title: 'Ready to Get Your Driver\'s License?',
  subtitle: 'Professional driver\'s license assistance for $100 + DMV fees. Don\'t let documentation issues prevent you from getting your license.',
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

const contactLicense = {
  id: 'contact-license',
  hasBackground: false,
  header: {
    title: 'Get Started with Driver\'s License Services',
    subtitle: 'Professional assistance for all driver\'s license needs',
    tagline: 'Contact Us',
  },
  content: 'Don\'t let confusing DMV requirements prevent you from getting your driver\'s license. Our experienced team ensures you have the right documents and guidance.',
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
      description: ['Monday - Friday: 8:00 - 18:00', 'Saturday: 9:00 - 15:00', 'DMV appointment scheduling available'],
      icon: IconClock,
    },
  ],
  form: {
    title: 'Request Driver\'s License Assistance',
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
      placeholder: 'Tell us about your driver\'s license needs (first-time application, renewal, immigration status, etc.)...',
    },
    btn: {
      title: 'Get License Assistance',
      type: 'submit',
    },
  },
};

export default function DriversLicensePage() {
  return (
    <>
      <Hero {...licenseHero} />
      <Content {...licenseContent} />
      <Features {...licenseRequirements} />
      <Features {...licensePricing} />
      <CallToAction2 {...licenseCTA} />
      <Contact {...contactLicense} />
    </>
  );
}
