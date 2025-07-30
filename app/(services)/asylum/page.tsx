import type { Metadata } from 'next';

import { SITE } from '~/config.js';
import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import Features from '~/components/widgets/Features';
import Steps from '~/components/widgets/Steps';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import { IconHeartbeat, IconFileText, IconClock, IconScale, IconPhoneCall, IconBrandWhatsapp, IconShield, IconUsers, IconCheck, IconCash, IconHome, IconSchool, IconBookmark, IconEye, IconLock } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: `Asylum Services - Morgan Dauterive LLP | Protection from Persecution`,
  description: 'Expert asylum application services for individuals fleeing persecution. Comprehensive legal representation from application to court hearings.',
};

const asylumHero = {
  title: (
    <>
      Asylum Services <span className="hidden md:inline">-</span> <span>Protection from</span>{' '}
      <span className="sm:whitespace-nowrap text-accent-600">Persecution</span>
    </>
  ),
  subtitle: (
    <>
      <div className="mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
        <div className="flex items-center gap-3 mb-2">
          <IconCash className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-xl text-primary-600">$4,500 Attorney Fee</span>
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
      If you fear returning to your home country due to persecution, our experienced asylum attorneys can help you
      seek protection in the United States. We provide comprehensive legal representation throughout the entire asylum process
      with compassionate, culturally sensitive support.
    </>
  ),
  callToAction: {
    text: 'Free Asylum Consultation',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'Learn About Process',
    href: '#process',
  },
  image: {
    src: '/asylum-hero.jpg',
    alt: 'Person seeking protection and safety',
  },
};

const asylumContent = {
  id: 'asylum-overview',
  hasBackground: true,
  header: {
    title: 'What is Asylum?',
    subtitle: 'Understanding Protection from Persecution',
    tagline: 'Asylum Overview',
  },
  content: `Asylum is protection granted to individuals already in the United States who demonstrate they cannot return to their home country due to persecution or well-founded fear of persecution based on race, religion, nationality, political opinion, or membership in a particular social group.`,
  items: [
    {
      title: 'Protection from Removal',
      description: 'Asylum grants protection from being returned to a country where you face persecution.',
    },
    {
      title: 'Path to Permanent Residence',
      description: 'After one year of asylum status, you can apply for a green card (permanent residence).',
    },
    {
      title: 'Work Authorization',
      description: 'Asylum applicants can apply for employment authorization 150 days after filing their case.',
    },
    {
      title: 'Family Inclusion',
      description: 'Unmarried children under 21 and spouses can be included in your asylum application.',
    },
  ],
  image: {
    src: '/whatisasylum.jpg',
    alt: 'Legal consultation for asylum case',
  },
  isReversed: false,
  isAfterContent: false,
};

const asylumEligibility = {
  id: 'asylum-eligibility',
  hasBackground: false,
  columns: 2,
  header: {
    title: 'Asylum Eligibility Requirements',
    subtitle: 'Grounds for seeking asylum protection',
    tagline: 'Eligibility',
  },
  items: [
    {
      title: 'Race-Based Persecution',
      description: 'Persecution due to your racial, ethnic, or tribal identity.',
      icon: IconUsers,
    },
    {
      title: 'Religious Persecution',
      description: 'Persecution based on your religious beliefs, practices, or identity.',
      icon: IconHeartbeat,
    },
    {
      title: 'Political Opinion',
      description: 'Persecution for your political beliefs, activities, or perceived political opinions.',
      icon: IconScale,
    },
    {
      title: 'Nationality',
      description: 'Persecution based on your nationality or citizenship status.',
      icon: IconShield,
    },
    {
      title: 'Particular Social Group',
      description: 'Persecution based on membership in a defined social group (LGBTQ+, domestic violence survivors, etc.).',
      icon: IconUsers,
    },
    {
      title: 'One-Year Filing Deadline',
      description: 'Generally must file within one year of arrival (exceptions apply for extraordinary circumstances).',
      icon: IconClock,
    },
  ],
};

const asylumProcess = {
  id: 'asylum-process',
  header: {
    title: 'Asylum Application Process',
    subtitle: 'Comprehensive legal support through each step',
    tagline: 'Our Process',
  },
  items: [
    {
      title: 'Confidential Consultation',
      description: 'Safe, private evaluation of your case and persecution claims with trauma-informed approach.',
      icon: IconLock,
    },
    {
      title: 'Evidence Gathering',
      description: 'Comprehensive collection of supporting evidence including country condition reports and expert testimony.',
      icon: IconEye,
    },
    {
      title: 'Application Preparation',
      description: 'Expert preparation of Form I-589 and detailed personal statement documenting persecution.',
      icon: IconFileText,
    },
    {
      title: 'Filing & Timeline',
      description: 'Strategic filing within one-year deadline or establishing exceptional circumstances.',
      icon: IconClock,
    },
    {
      title: 'Court Representation',
      description: 'Expert representation at immigration court hearings and master calendar proceedings.',
      icon: IconScale,
    },
    {
      title: 'Final Decision',
      description: 'Support through final hearings and assistance with appeals if necessary.',
      icon: IconCheck,
    },
  ],
  image: {
    src: '/daca-process.jpg',
    alt: 'Asylum legal process documentation',
  },
};

const asylumBenefits = {
  id: 'asylum-benefits',
  hasBackground: true,
  columns: 2,
  header: {
    title: 'Asylum Protection Benefits',
    subtitle: 'What asylum approval means for you and your family',
    tagline: 'Benefits',
  },
  items: [
    {
      title: 'Indefinite Protection',
      description: 'Permanent protection from deportation to country where you face persecution.',
      icon: IconShield,
    },
    {
      title: 'Work Authorization',
      description: 'Immediate eligibility to work legally in the United States upon approval.',
      icon: IconCash,
    },
    {
      title: 'Family Inclusion',
      description: 'Spouse and unmarried children under 21 can be included in your asylum application.',
      icon: IconUsers,
    },
    {
      title: 'Path to Green Card',
      description: 'Eligible to apply for permanent residence one year after asylum approval.',
      icon: IconHome,
    },
    {
      title: 'Travel Document',
      description: 'Ability to obtain refugee travel document for international travel.',
      icon: IconFileText,
    },
    {
      title: 'Social Services',
      description: 'Access to certain social services and benefits available to asylees.',
      icon: IconHeartbeat,
    },
    {
      title: 'Education Access',
      description: 'In-state tuition eligibility and access to educational opportunities.',
      icon: IconSchool,
    },
    {
      title: 'Derivative Status',
      description: 'Family members receive same protection and benefits as principal asylee.',
      icon: IconUsers,
    },
  ],
};

const asylumPricingDetails = {
  id: 'asylum-pricing-details',
  hasBackground: true,
  columns: 3,
  header: {
    title: 'Asylum Service Pricing & Timeline',
    subtitle: 'Comprehensive legal representation with transparent pricing',
    tagline: 'Investment & Timeline',
  },
  items: [
    {
      title: 'Attorney Fees',
      description: 'Complete asylum case preparation, filing, and representation through all proceedings including interviews, hearings, and appeals if necessary.',
      icon: IconFileText,
      callToAction: {
        text: '$4,500',
        href: '#',
      },
    },
    {
      title: 'Government Filing Fee',
      description: 'No filing fee required for asylum applications filed with USCIS or Immigration Court.',
      icon: IconShield,
      callToAction: {
        text: '$0',
        href: '#',
      },
    },
    {
      title: 'USCIS Processing Time',
      description: 'Asylum applications filed with USCIS (affirmative cases) - timeline varies by office location and caseload.',
      icon: IconClock,
      callToAction: {
        text: '6-24 months',
        href: '#',
      },
    },
    {
      title: 'Immigration Court Timeline',
      description: 'Asylum cases in Immigration Court (defensive cases) - timeline depends on court backlog and case complexity.',
      icon: IconScale,
      callToAction: {
        text: '2-5 years',
        href: '#',
      },
    },
    {
      title: 'Work Authorization Eligibility',
      description: 'Can apply for employment authorization 150 days after filing complete asylum application.',
      icon: IconCheck,
      callToAction: {
        text: '150+ days',
        href: '#',
      },
    },
    {
      title: 'Green Card Eligibility',
      description: 'After asylum approval, eligible to apply for permanent residence (green card) after one year.',
      icon: IconUsers,
      callToAction: {
        text: '1+ year',
        href: '#',
      },
    },
  ],
};

const asylumPricing = {
  id: 'asylum-pricing',
  hasBackground: false,
  title: 'Professional Asylum Representation',
  subtitle: 'Complete asylum legal services for $4,500 attorney fees. No government filing fee required. Free initial consultation to evaluate your case.',
  callToAction: {
    text: 'Schedule Free Consultation',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'Emergency WhatsApp',
    href: 'https://wa.me/17135550123',
    icon: IconBrandWhatsapp,
  },
};

const contactAsylum = {
  id: 'contact-asylum',
  hasBackground: true,
  header: {
    title: 'Need Asylum Protection?',
    subtitle: 'Get expert legal representation for your asylum case',
    tagline: 'Get Help Now',
  },
  content: 'Asylum cases are complex and time-sensitive. Our experienced immigration attorneys understand the challenges you face and are here to guide you through every step of the process.',
  items: [
    {
      title: 'Emergency Consultations',
      description: ['Available 24/7 for urgent cases', 'Detained individuals', 'Immediate removal proceedings'],
      icon: IconPhoneCall,
    },
    {
      title: 'Multilingual Services',
      description: ['Spanish', 'English', 'Interpreter services available'],
      icon: IconUsers,
    },
    {
      title: 'Confidential & Safe',
      description: ['All communications protected', 'Safe space for your story', 'No information shared with authorities'],
      icon: IconShield,
    },
  ],
  form: {
    title: 'Start Your Asylum Case',
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
      placeholder: 'Briefly describe your situation and the persecution you face...',
    },
    btn: {
      title: 'Get Confidential Consultation',
      type: 'submit',
    },
  },
};

export default function AsylumPage() {
  return (
    <>
      <Hero {...asylumHero} />
      <Content {...asylumContent} />
      <Features {...asylumEligibility} />
      <Steps {...asylumProcess} />
      <Features {...asylumBenefits} />
      <CallToAction2 {...asylumPricing} />
      <Contact {...contactAsylum} />
    </>
  );
}
