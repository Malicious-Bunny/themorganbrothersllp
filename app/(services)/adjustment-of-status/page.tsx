import type { Metadata } from 'next';

import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import Features from '~/components/widgets/Features';
import Steps from '~/components/widgets/Steps';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import { IconUsers, IconFileText, IconClock, IconHome, IconPhoneCall, IconBrandWhatsapp, IconShield, IconCheck, IconCash, IconSchool, IconHeartbeat, IconBookmark, IconMapPin, IconScale, IconEye } from '@tabler/icons-react';

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
      <div className="mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
        <div className="flex items-center gap-3 mb-2">
          <IconCash className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-xl text-primary-600">$3,200 Attorney Fee</span>
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
      Transform your undocumented status into lawful permanent residence through family-based immigration.
      Our experienced attorneys guide you through the complex adjustment of status process to help you achieve
      your American dream of permanent residence.
    </>
  ),
  callToAction: {
    text: 'Free Green Card Consultation',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'Check Your Eligibility',
    href: '#eligibility',
  },
  image: {
    src: '/greencardhero.jpg',
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
      description: 'Minors who have been abused, abandoned, or neglected by one or both parents.',
      icon: IconShield,
    },
    {
      title: 'Asylum-Based Adjustment',
      description: 'Individuals granted asylum who have held that status for at least one year.',
      icon: IconCheck,
    },
  ],
};

const adjustmentPricingDetails = {
  id: 'adjustment-pricing-details',
  hasBackground: true,
  columns: 3,
  header: {
    title: 'Adjustment of Status Pricing & Timeline',
    subtitle: 'Comprehensive green card services with transparent pricing',
    tagline: 'Investment & Timeline',
  },
  items: [
    {
      title: 'Attorney Fees',
      description: 'Complete adjustment of status case preparation, filing, and representation including family petition, adjustment application, and interview preparation.',
      icon: IconFileText,
      callToAction: {
        text: '$3,200',
        href: '#',
      },
    },
    {
      title: 'Government Filing Fees',
      description: 'USCIS fees for Form I-130 (family petition), Form I-485 (adjustment), biometrics, and medical examination.',
      icon: IconShield,
      callToAction: {
        text: '$1,760+',
        href: '#',
      },
    },
    {
      title: 'Processing Time - Immediate Relatives',
      description: 'Spouses, children under 21, and parents of US citizens (no waiting period for visa availability).',
      icon: IconClock,
      callToAction: {
        text: '12-24 months',
        href: '#',
      },
    },
    {
      title: 'Processing Time - Family Preference',
      description: 'Other family relationships with waiting periods for visa availability before adjustment can be filed.',
      icon: IconClock,
      callToAction: {
        text: '1-20+ years',
        href: '#',
      },
    },
    {
      title: 'Work Authorization',
      description: 'Employment authorization document typically received 3-5 months after filing adjustment application.',
      icon: IconCheck,
      callToAction: {
        text: '3-5 months',
        href: '#',
      },
    },
    {
      title: 'Interview Preparation',
      description: 'Comprehensive preparation for USCIS adjustment of status interview including mock interviews and document review.',
      icon: IconUsers,
      callToAction: {
        text: 'Included',
        href: '#',
      },
    },
  ],
};

const adjustmentProcess = {
  id: 'adjustment-process',
  header: {
    title: 'Adjustment of Status Process',
    subtitle: 'Step-by-step guidance to permanent residence',
    tagline: 'Our Process',
  },
  items: [
    {
      title: 'Eligibility Assessment',
      description: 'Comprehensive evaluation of your eligibility through family relationships and immigration history.',
      icon: IconEye,
    },
    {
      title: 'Petition Filing',
      description: 'Filing Form I-130 family petition and establishing the qualifying family relationship.',
      icon: IconFileText,
    },
    {
      title: 'Priority Date',
      description: 'Monitoring priority date progression and determining when to file adjustment application.',
      icon: IconClock,
    },
    {
      title: 'Form I-485 Preparation',
      description: 'Expert preparation of adjustment of status application with supporting documentation.',
      icon: IconBookmark,
    },
    {
      title: 'Biometrics & Interview',
      description: 'Preparation for biometrics appointment and adjustment of status interview at USCIS.',
      icon: IconUsers,
    },
    {
      title: 'Green Card Approval',
      description: 'Final approval and receipt of permanent resident card - your green card.',
      icon: IconHome,
    },
  ],
  image: {
    src: '/daca-process.jpg',
    alt: 'Green card application process',
  },
};

const adjustmentBenefits = {
  id: 'adjustment-benefits',
  hasBackground: true,
  columns: 2,
  header: {
    title: 'Green Card Benefits',
    subtitle: 'What permanent residence means for your future',
    tagline: 'Benefits',
  },
  items: [
    {
      title: 'Permanent Legal Status',
      description: 'Live and work permanently in the United States without fear of deportation.',
      icon: IconShield,
    },
    {
      title: 'Unrestricted Work',
      description: 'Work for any employer in the US without need for sponsorship or work authorization.',
      icon: IconCash,
    },
    {
      title: 'Travel Freedom',
      description: 'Travel internationally and return to the US as a permanent resident.',
      icon: IconMapPin,
    },
    {
      title: 'Path to Citizenship',
      description: 'Eligible to apply for US citizenship after 5 years (3 years if married to US citizen).',
      icon: IconHome,
    },
    {
      title: 'Family Sponsorship',
      description: 'Petition for immediate family members to immigrate to the United States.',
      icon: IconUsers,
    },
    {
      title: 'Social Security Benefits',
      description: 'Full access to Social Security benefits and Medicare when eligible.',
      icon: IconHeartbeat,
    },
    {
      title: 'Educational Opportunities',
      description: 'In-state tuition rates and eligibility for federal financial aid.',
      icon: IconSchool,
    },
    {
      title: 'Legal Protection',
      description: 'Constitutional protections and legal rights available to permanent residents.',
      icon: IconScale,
    },
  ],
};

const adjustmentPricing = {
  id: 'adjustment-pricing',
  hasBackground: true,
  title: 'Start Your Green Card Application',
  subtitle: 'Complete adjustment of status services for $3,200 attorney fees + government filing fees. Free consultation to evaluate your family-based immigration options.',
  callToAction: {
    text: 'Schedule Free Consultation',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'WhatsApp Family Immigration Help',
    href: 'https://wa.me/17135550123',
    icon: IconBrandWhatsapp,
  },
};

const contactAdjustment = {
  id: 'contact-adjustment',
  hasBackground: false,
  header: {
    title: 'Ready for Your Green Card?',
    subtitle: 'Get expert legal assistance with your adjustment of status case',
    tagline: 'Get Started',
  },
  content: 'Family-based immigration can be complex, but you don\'t have to navigate it alone. Our experienced attorneys help families reunite and secure permanent residence in the United States.',
  items: [
    {
      title: 'Family Immigration Specialists',
      description: ['15+ years family-based cases', 'Thousands of approvals', 'Multi-generational expertise'],
      icon: IconUsers,
    },
    {
      title: 'Comprehensive Support',
      description: ['Document preparation', 'Interview coaching', 'Case status updates'],
      icon: IconShield,
    },
    {
      title: 'Flexible Consultations',
      description: ['In-person meetings', 'Video consultations', 'Emergency availability'],
      icon: IconPhoneCall,
    },
  ],
  form: {
    title: 'Start Your Family Immigration Case',
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
      placeholder: 'Describe your family situation and immigration goals...',
    },
    btn: {
      title: 'Get Free Green Card Consultation',
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
      <Features {...adjustmentBenefits} />
      <Features {...adjustmentPricingDetails} />
      <CallToAction2 {...adjustmentPricing} />
      <Contact {...contactAdjustment} />
    </>
  );
}
