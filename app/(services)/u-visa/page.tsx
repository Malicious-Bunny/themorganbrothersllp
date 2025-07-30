import type { Metadata } from 'next';

import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import Features from '~/components/widgets/Features';
import Steps from '~/components/widgets/Steps';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import { IconShield, IconLock, IconUsers, IconPhoneCall, IconBrandWhatsapp, IconCheck, IconClock, IconFileText, IconScale, IconCash } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: 'U Visa for Crime Victims - Morgan Dauterive LLP | Immigration Protection',
  description: 'Expert U visa legal assistance for crime victims who cooperate with law enforcement. Secure protection and legal status for you and your family.',
};

const uVisaHero = {
  title: (
    <>
      U Visa Protection <span className="hidden md:inline">for</span> <span>Crime</span>{' '}
      <span className="sm:whitespace-nowrap text-accent-600">Victims</span>
    </>
  ),
  subtitle: (
    <>
      <div className="mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
        <div className="flex items-center gap-3 mb-2">
          <IconCash className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-xl text-primary-600">$2,800 Attorney Fee</span>
        </div>
        <div className="flex items-center gap-3">
          <IconClock className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-lg text-primary-600">4-7 Years Processing Time</span>
        </div>
      </div>
      If you are a victim of certain crimes and have helped law enforcement, you may be eligible for U visa protection.
      Our experienced attorneys help crime victims secure legal status and safety in the United States with compassionate,
      trauma-informed legal representation.
    </>
  ),
  callToAction: {
    text: 'Free U Visa Consultation',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'Emergency Help',
    href: 'https://wa.me/17135550123',
  },
  image: {
    src: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Protection and support for crime victims',
  },
};

const uVisaContent = {
  id: 'u-visa-overview',
  hasBackground: true,
  header: {
    title: 'What is a U Visa?',
    subtitle: 'Protection for Crime Victims Who Assist Law Enforcement',
    tagline: 'U Visa Overview',
  },
  content: `The U visa provides temporary legal status to victims of certain crimes who have suffered mental or physical abuse and are helpful to law enforcement in the investigation or prosecution of criminal activity.`,
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
      title: 'Family Inclusion',
      description: 'Certain family members may be included in your U visa application.',
    },
    {
      title: 'Path to Green Card',
      description: 'After 3 years in U status, may be eligible to apply for permanent residence.',
    },
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Legal protection and support services',
  },
  isReversed: false,
  isAfterContent: false,
};

const uVisaEligibility = {
  id: 'u-visa-eligibility',
  hasBackground: false,
  columns: 2,
  header: {
    title: 'U Visa Eligibility Requirements',
    subtitle: 'Qualifying criteria for U visa protection',
    tagline: 'Eligibility',
  },
  items: [
    {
      title: 'Victim of Qualifying Crime',
      description: 'Must be a victim of domestic violence, sexual assault, trafficking, kidnapping, or other qualifying crimes.',
      icon: IconShield,
    },
    {
      title: 'Substantial Physical/Mental Abuse',
      description: 'Must have suffered substantial physical or mental abuse as a result of the crime.',
      icon: IconUsers,
    },
    {
      title: 'Helpful to Law Enforcement',
      description: 'Must be helpful, have been helpful, or likely to be helpful in investigation/prosecution.',
      icon: IconScale,
    },
    {
      title: 'Crime Occurred in US',
      description: 'The qualifying criminal activity must have occurred in the United States or violated US laws.',
      icon: IconCheck,
    },
  ],
};

const uVisaPricingDetails = {
  id: 'u-visa-pricing-details',
  hasBackground: true,
  columns: 3,
  header: {
    title: 'U Visa Service Pricing & Timeline',
    subtitle: 'Comprehensive legal representation for crime victims',
    tagline: 'Investment & Timeline',
  },
  items: [
    {
      title: 'Attorney Fees',
      description: 'Complete U visa case preparation, law enforcement certification assistance, filing, and ongoing representation throughout the process.',
      icon: IconFileText,
      callToAction: {
        text: '$2,800',
        href: '#',
      },
    },
    {
      title: 'Government Filing Fee',
      description: 'No filing fee required for U visa applications (Form I-918).',
      icon: IconShield,
      callToAction: {
        text: '$0',
        href: '#',
      },
    },
    {
      title: 'Initial Processing Time',
      description: 'Current USCIS processing times for U visa applications vary significantly based on application volume.',
      icon: IconClock,
      callToAction: {
        text: '4-6 years',
        href: '#',
      },
    },
    {
      title: 'Work Authorization',
      description: 'Eligible for employment authorization upon approval of bona fide determination (preliminary approval).',
      icon: IconCheck,
      callToAction: {
        text: '12-24 months',
        href: '#',
      },
    },
    {
      title: 'U Visa Status Duration',
      description: 'U visa status is valid for 4 years and may be extended in certain circumstances.',
      icon: IconLock,
      callToAction: {
        text: '4 years',
        href: '#',
      },
    },
    {
      title: 'Green Card Eligibility',
      description: 'After 3 years of continuous presence in U status, eligible to apply for permanent residence.',
      icon: IconUsers,
      callToAction: {
        text: '3+ years',
        href: '#',
      },
    },
  ],
};

const uVisaProcess = {
  id: 'u-visa-process',
  hasBackground: false,
  header: {
    title: 'U Visa Application Process',
    subtitle: 'Step-by-step guide to securing U visa protection',
    tagline: 'Process',
  },
  items: [
    {
      title: 'Case Assessment & Documentation',
      description: 'We evaluate your case, gather evidence of the crime, and document the impact on your life.',
      icon: IconFileText,
    },
    {
      title: 'Law Enforcement Certification',
      description: 'We work with law enforcement to obtain the required certification (Form I-918 Supplement B).',
      icon: IconShield,
    },
    {
      title: 'Prepare and File U Visa Petition',
      description: 'We prepare your complete U visa application with supporting evidence and personal statement.',
      icon: IconScale,
    },
    {
      title: 'Await Processing & Work Authorization',
      description: 'Once filed, you may be eligible for work authorization while your case is pending.',
      icon: IconCheck,
    },
    {
      title: 'U Visa Approval & Next Steps',
      description: 'Upon approval, we help you understand your rights and plan for potential green card application.',
      icon: IconUsers,
    },
  ],
};

const uVisaPricing = {
  id: 'u-visa-pricing',
  hasBackground: true,
  title: 'Get U Visa Protection Today',
  subtitle: 'Complete U visa legal services for $2,800 attorney fees. No government filing fee required. Free consultation for crime victims.',
  callToAction: {
    text: 'Schedule Confidential Consultation',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'Emergency WhatsApp Help',
    href: 'https://wa.me/17135550123',
    icon: IconBrandWhatsapp,
  },
};

const contactUVisa = {
  id: 'contact-u-visa',
  hasBackground: false,
  header: {
    title: 'Crime Victim Support & Legal Help',
    subtitle: 'Confidential assistance for U visa applications',
    tagline: 'Get Help Now',
  },
  content: 'If you are a crime victim, you deserve protection and support. Our experienced attorneys provide compassionate, confidential legal representation to help you secure U visa protection.',
  items: [
    {
      title: 'Trauma-Informed Legal Support',
      description: ['Sensitive approach to trauma', 'Confidential consultations', 'Support throughout process'],
      icon: IconUsers,
    },
    {
      title: 'Law Enforcement Coordination',
      description: ['Work with police agencies', 'Prosecutors and investigators', 'Federal law enforcement'],
      icon: IconShield,
    },
    {
      title: '24/7 Emergency Support',
      description: ['Crisis situations', 'Immediate safety concerns', 'Urgent legal needs'],
      icon: IconPhoneCall,
    },
  ],
  form: {
    title: 'Start Your U Visa Case (Confidential)',
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
      placeholder: 'Briefly describe your situation (all information is confidential)...',
    },
    btn: {
      title: 'Get Confidential U Visa Help',
      type: 'submit',
    },
  },
};

export default function UVisaPage() {
  return (
    <>
      <Hero {...uVisaHero} />
      <Content {...uVisaContent} />
      <Features {...uVisaEligibility} />
      <Features {...uVisaPricingDetails} />
      <Steps {...uVisaProcess} />
      <CallToAction2 {...uVisaPricing} />
      <Contact {...contactUVisa} />
    </>
  );
}
