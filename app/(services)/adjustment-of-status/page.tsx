import type { Metadata } from 'next';

import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import Features from '~/components/widgets/Features';
import Steps from '~/components/widgets/Steps';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import { IconUsers, IconFileText, IconClock, IconHome, IconPhoneCall, IconBrandWhatsapp, IconShield, IconCheck } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: `Adjustment of Status - Morgan Dauterive LLP | Green Card Applications`,
  description: 'Expert assistance with adjustment of status applications for family-based immigration and green card eligibility.',
};

const adjustmentHero = {
  title: (
    <>
      Adjustment of Status <span className="hidden md:inline">-</span> <span>Green Card</span>{' '}
      <span className="sm:whitespace-nowrap text-accent-600">Applications</span>
    </>
  ),
  subtitle: (
    <>
      Transform your undocumented status into lawful permanent residence through family-based immigration.
      Our experienced attorneys guide you through the complex adjustment of status process.
    </>
  ),
  callToAction: {
    text: 'Free Consultation',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'Check Eligibility',
    href: '#eligibility',
  },
  image: {
    src: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Family celebrating green card approval',
  },
};

const adjustmentContent = {
  id: 'adjustment-overview',
  hasBackground: true,
  header: {
    title: 'What is Adjustment of Status?',
    subtitle: 'Path to Permanent Residence',
    tagline: 'Overview',
  },
  content: `Adjustment of status allows eligible individuals already in the United States to apply for lawful permanent residence (green card) without leaving the country. This process is primarily available for family-based immigration cases.`,
  items: [
    {
      title: 'Permanent Residence',
      description: 'Obtain a green card and become a lawful permanent resident of the United States.',
    },
    {
      title: 'No Need to Leave US',
      description: 'Apply from within the United States without consular processing abroad.',
    },
    {
      title: 'Work Authorization',
      description: 'Receive employment authorization while your application is pending.',
    },
    {
      title: 'Path to Citizenship',
      description: 'Green card holders can apply for US citizenship after meeting residency requirements.',
    },
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Green card application documents',
  },
  isReversed: false,
  isAfterContent: false,
};

const adjustmentEligibility = {
  id: 'adjustment-eligibility',
  hasBackground: false,
  columns: 2,
  header: {
    title: 'Eligibility for Adjustment of Status',
    subtitle: 'Common pathways to permanent residence',
    tagline: 'Eligibility',
  },
  items: [
    {
      title: 'Immediate Relatives of US Citizens',
      description: 'Spouses, unmarried children under 21, and parents of US citizens.',
      icon: IconUsers,
    },
    {
      title: 'Family Preference Categories',
      description: 'Adult children and siblings of US citizens, spouses and children of permanent residents.',
      icon: IconHome,
    },
    {
      title: 'Special Immigrant Juveniles',
      description: 'Unmarried individuals under 21 who have been abused, abandoned, or neglected.',
      icon: IconShield,
    },
    {
      title: 'Registry Applicants',
      description: 'Individuals who have been in the US since before January 1, 1972.',
      icon: IconClock,
    },
    {
      title: 'Asylum/Refugee Status',
      description: 'Asylees and refugees eligible to adjust after one year of status.',
      icon: IconCheck,
    },
    {
      title: 'Other Special Categories',
      description: 'Various other categories including certain protected individuals.',
      icon: IconFileText,
    },
  ],
};

const adjustmentProcess = {
  id: 'adjustment-process',
  hasBackground: true,
  header: {
    title: 'The Adjustment Process',
    subtitle: 'Step-by-step guide to obtaining your green card',
    tagline: 'Process',
  },
  items: [
    {
      title: 'Eligibility Assessment',
      description: 'We evaluate your case to determine the best pathway for adjustment of status.',
      icon: IconFileText,
    },
    {
      title: 'Petition Filing',
      description: 'File the appropriate family petition (I-130) or determine if one already exists.',
      icon: IconUsers,
    },
    {
      title: 'I-485 Application',
      description: 'Prepare and file Form I-485 (Application to Adjust Status) with supporting documents.',
      icon: IconCheck,
    },
    {
      title: 'Interview & Decision',
      description: 'Attend USCIS interview and receive decision on your green card application.',
      icon: IconShield,
    },
  ],
};

const adjustmentPricing = {
  id: 'adjustment-pricing',
  hasBackground: false,
  title: 'Adjustment of Status Services',
  subtitle: 'Comprehensive legal assistance starting at $3,000 - Payment plans available',
  callToAction: {
    text: 'Schedule Consultation',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'WhatsApp Us',
    href: 'https://wa.me/17135550123',
    icon: IconBrandWhatsapp,
  },
};

const contactAdjustment = {
  id: 'contact-adjustment',
  hasBackground: true,
  header: {
    title: 'Ready to Apply for Your Green Card?',
    subtitle: 'Start your journey to permanent residence today',
    tagline: 'Get Started',
  },
  content: 'Family-based immigration can provide a path to permanent residence for eligible undocumented immigrants. Our experienced attorneys will evaluate your case and guide you through the process.',
  items: [
    {
      title: 'Family Petitions',
      description: ['US citizen spouses', 'Permanent resident family members', 'Special immigrant juvenile cases'],
      icon: IconUsers,
    },
    {
      title: 'Document Preparation',
      description: ['I-485 Application preparation', 'Supporting evidence gathering', 'Medical examination coordination'],
      icon: IconFileText,
    },
    {
      title: 'Interview Support',
      description: ['USCIS interview preparation', 'Legal representation', 'Response to RFEs'],
      icon: IconShield,
    },
  ],
  form: {
    title: 'Start Your Green Card Application',
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
      placeholder: 'Tell us about your family relationships and current status...',
    },
    btn: {
      title: 'Get Free Consultation',
      type: 'submit',
    },
  },
};

export default function AdjustmentPage() {
  return (
    <>
      <Hero {...adjustmentHero} />
      <Content {...adjustmentContent} />
      <Features {...adjustmentEligibility} />
      <Steps {...adjustmentProcess} />
      <CallToAction2 {...adjustmentPricing} />
      <Contact {...contactAdjustment} />
    </>
  );
}
