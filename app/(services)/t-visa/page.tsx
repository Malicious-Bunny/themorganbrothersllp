import type { Metadata } from 'next';

import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import Features from '~/components/widgets/Features';
import Steps from '~/components/widgets/Steps';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import { IconShield, IconHeart, IconUsers, IconPhoneCall, IconBrandWhatsapp, IconCheck, IconClock, IconLock, IconFileText, IconScale, IconCash } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: 'T Visa for Trafficking Victims - Morgan Dauterive LLP | Human Trafficking Legal Help',
  description: 'Expert T visa legal assistance for human trafficking survivors. Secure protection, legal status, and support for you and your family.',
};

const tVisaHero = {
  title: (
    <>
      T Visa Protection <span className="hidden md:inline">for</span> <span>Trafficking</span>{' '}
      <span className="sm:whitespace-nowrap text-accent-600">Survivors</span>
    </>
  ),
  subtitle: (
    <>
      <div className="mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
        <div className="flex items-center gap-3 mb-2">
          <IconCash className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-xl text-primary-600">$3,000 Attorney Fee</span>
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
      If you are a victim of human trafficking, you deserve protection, safety, and justice.
      Our compassionate attorneys provide specialized legal assistance to help trafficking survivors secure T visa protection
      with trauma-informed care and complete confidentiality.
    </>
  ),
  callToAction: {
    text: 'Confidential T Visa Help',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'Emergency Support',
    href: 'https://wa.me/17135550123',
  },
  image: {
    src: '/survivors.jpg',
    alt: 'Support and protection for trafficking survivors',
  },
};

const tVisaContent = {
  id: 't-visa-overview',
  hasBackground: true,
  header: {
    title: 'What is a T Visa?',
    subtitle: 'Protection for Human Trafficking Survivors',
    tagline: 'T Visa Overview',
  },
  content: `The T visa provides temporary legal status to victims of severe forms of human trafficking who comply with law enforcement requests and would face extreme hardship if removed from the United States.`,
  items: [
    {
      title: 'Legal Protection',
      description: 'Protection from deportation for up to 4 years with possibility of extension.',
    },
    {
      title: 'Work Authorization',
      description: 'Eligible to receive employment authorization to work legally in the United States.',
    },
    {
      title: 'Family Protection',
      description: 'Certain family members may be included in your T visa application for their protection.',
    },
    {
      title: 'Path to Green Card',
      description: 'After 3 years in T status, may be eligible to apply for permanent residence.',
    },
  ],
  image: {
    src: '/whatisasylum.jpg',
    alt: 'Legal protection and support for survivors',
  },
  isReversed: false,
  isAfterContent: false,
};

const tVisaEligibility = {
  id: 't-visa-eligibility',
  hasBackground: false,
  columns: 2,
  header: {
    title: 'T Visa Eligibility Requirements',
    subtitle: 'Qualifying criteria for T visa protection',
    tagline: 'Eligibility',
  },
  items: [
    {
      title: 'Victim of Severe Trafficking',
      description: 'Must be a victim of severe forms of trafficking in persons as defined by federal law.',
      icon: IconShield,
    },
    {
      title: 'Physical Presence in US',
      description: 'Must be physically present in the United States on account of trafficking.',
      icon: IconCheck,
    },
    {
      title: 'Compliance with Law Enforcement',
      description: 'Must comply with reasonable requests from law enforcement (with exceptions for minors and trauma).',
      icon: IconScale,
    },
    {
      title: 'Extreme Hardship',
      description: 'Would suffer extreme hardship involving unusual and severe harm if removed from the United States.',
      icon: IconHeart,
    },
  ],
};

const tVisaPricingDetails = {
  id: 't-visa-pricing-details',
  hasBackground: true,
  columns: 3,
  header: {
    title: 'T Visa Service Pricing & Timeline',
    subtitle: 'Comprehensive legal representation for trafficking survivors',
    tagline: 'Investment & Timeline',
  },
  items: [
    {
      title: 'Attorney Fees',
      description: 'Complete T visa case preparation, law enforcement coordination, filing, and ongoing representation throughout the process.',
      icon: IconFileText,
      callToAction: {
        text: '$3,000',
        href: '#',
      },
    },
    {
      title: 'Government Filing Fee',
      description: 'No filing fee required for T visa applications (Form I-914).',
      icon: IconShield,
      callToAction: {
        text: '$0',
        href: '#',
      },
    },
    {
      title: 'Initial Processing Time',
      description: 'Current USCIS processing times for T visa applications, generally faster than U visa processing.',
      icon: IconClock,
      callToAction: {
        text: '12-24 months',
        href: '#',
      },
    },
    {
      title: 'Work Authorization',
      description: 'Eligible for employment authorization immediately upon T visa approval.',
      icon: IconCheck,
      callToAction: {
        text: 'Upon approval',
        href: '#',
      },
    },
    {
      title: 'T Visa Status Duration',
      description: 'T visa status is valid for 4 years and may be extended if trafficking investigation is ongoing.',
      icon: IconLock,
      callToAction: {
        text: '4 years',
        href: '#',
      },
    },
    {
      title: 'Green Card Eligibility',
      description: 'After 3 years of continuous presence in T status, eligible to apply for permanent residence.',
      icon: IconUsers,
      callToAction: {
        text: '3+ years',
        href: '#',
      },
    },
  ],
};

const tVisaProcess = {
  id: 't-visa-process',
  hasBackground: false,
  header: {
    title: 'T Visa Application Process',
    subtitle: 'Step-by-step guide to securing T visa protection',
    tagline: 'Process',
  },
  items: [
    {
      title: 'Safe Case Assessment',
      description: 'We conduct a confidential evaluation of your trafficking situation and determine T visa eligibility.',
      icon: IconShield,
    },
    {
      title: 'Evidence Gathering & Documentation',
      description: 'We help gather evidence of trafficking and document the impact on your life in a trauma-informed manner.',
      icon: IconFileText,
    },
    {
      title: 'Law Enforcement Coordination',
      description: 'We coordinate with federal law enforcement regarding your case and compliance requirements.',
      icon: IconScale,
    },
    {
      title: 'Prepare and File T Visa Application',
      description: 'We prepare your complete T visa application (Form I-914) with supporting evidence and personal statement.',
      icon: IconHeart,
    },
    {
      title: 'T Visa Approval & Benefits',
      description: 'Upon approval, we help you understand your rights, work authorization, and plan for future green card application.',
      icon: IconUsers,
    },
  ],
};

const tVisaPricing = {
  id: 't-visa-pricing',
  hasBackground: true,
  title: 'Get T Visa Protection & Support',
  subtitle: 'Complete T visa legal services for $3,000 attorney fees. No government filing fee required. Confidential consultation for trafficking survivors.',
  callToAction: {
    text: 'Schedule Confidential Consultation',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'Emergency Support Line',
    href: 'https://wa.me/17135550123',
    icon: IconBrandWhatsapp,
  },
};

const contactTVisa = {
  id: 'contact-t-visa',
  hasBackground: false,
  header: {
    title: 'Trafficking Survivor Support & Legal Help',
    subtitle: 'Confidential, trauma-informed assistance for T visa applications',
    tagline: 'Get Help Now',
  },
  content: 'If you are a trafficking survivor, you deserve protection, dignity, and support. Our experienced attorneys specialize in helping trafficking victims secure T visa protection and rebuild their lives.',
  items: [
    {
      title: 'Trauma-Informed Legal Care',
      description: ['Specialized trafficking expertise', 'Sensitive approach to trauma', 'Safe, confidential environment'],
      icon: IconHeart,
    },
    {
      title: 'Federal Law Enforcement Coordination',
      description: ['Work with FBI and ICE', 'US Attorney offices', 'Human trafficking task forces'],
      icon: IconShield,
    },
    {
      title: 'Crisis Support & Resources',
      description: ['24/7 emergency availability', 'Safety planning assistance', 'Referrals to support services'],
      icon: IconPhoneCall,
    },
  ],
  form: {
    title: 'Start Your T Visa Case (Completely Confidential)',
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
      placeholder: 'Briefly describe your situation (all information is completely confidential and protected)...',
    },
    btn: {
      title: 'Get Confidential T Visa Help',
      type: 'submit',
    },
  },
};

export default function TVisaPage() {
  return (
    <>
      <Hero {...tVisaHero} />
      <Content {...tVisaContent} />
      <Features {...tVisaEligibility} />
      <Features {...tVisaPricingDetails} />
      <Steps {...tVisaProcess} />
      <CallToAction2 {...tVisaPricing} />
      <Contact {...contactTVisa} />
    </>
  );
}
