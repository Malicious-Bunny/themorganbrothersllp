import type { Metadata } from 'next';

import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import Features from '~/components/widgets/Features';
import Steps from '~/components/widgets/Steps';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import { IconShield, IconScale, IconUsers, IconPhoneCall, IconBrandWhatsapp, IconCheck, IconClock, IconHome, IconFileText, IconHeart, IconCash } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: 'Cancellation of Removal - Morgan Dauterive LLP | Deportation Defense & Immigration Court',
  description: 'Expert cancellation of removal and deportation defense representation in Immigration Court. Fight removal proceedings with experienced attorneys.',
};

const cancellationHero = {
  title: (
    <>
      Cancellation of Removal <span className="hidden md:inline">&</span> <span>Deportation</span>{' '}
      <span className="sm:whitespace-nowrap text-accent-600">Defense</span>
    </>
  ),
  subtitle: (
    <>
      <div className="mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
        <div className="flex items-center gap-3 mb-2">
          <IconCash className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-xl text-primary-600">$5,000 Attorney Fee</span>
        </div>
        <div className="flex items-center gap-3">
          <IconClock className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-lg text-primary-600">2-4 Years Processing Time</span>
        </div>
      </div>
      If you are in removal proceedings or facing deportation, cancellation of removal may allow you to remain in the United States.
      Our experienced Immigration Court attorneys provide aggressive defense to keep families together and fight for your right to stay.
    </>
  ),
  callToAction: {
    text: 'Emergency Defense Help',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'Crisis WhatsApp',
    href: 'https://wa.me/17135550123',
  },
  image: {
    src: '/cancelationofremoval.jpg',
    alt: 'Immigration court deportation defense',
  },
};

const cancellationContent = {
  id: 'cancellation-overview',
  hasBackground: true,
  header: {
    title: 'What is Cancellation of Removal?',
    subtitle: 'Relief from Deportation for Long-Term Residents',
    tagline: 'Deportation Defense',
  },
  content: `Cancellation of removal is a form of relief available to certain individuals in removal proceedings before an Immigration Judge. If successful, it allows you to become a lawful permanent resident and avoid deportation.`,
  items: [
    {
      title: 'Stop Deportation',
      description: 'Successful cancellation of removal ends removal proceedings and allows you to remain in the US.',
    },
    {
      title: 'Lawful Permanent Residence',
      description: 'Approved applications result in a green card and permanent resident status.',
    },
    {
      title: 'Family Unity',
      description: 'Keep families together by avoiding separation due to deportation.',
    },
    {
      title: 'Path to Citizenship',
      description: 'As a permanent resident, you can eventually apply for US citizenship.',
    },
  ],
  image: {
    src: '/whatiscor.jpg',
    alt: 'Family protection from deportation',
  },
  isReversed: false,
  isAfterContent: false,
};

const cancellationEligibility = {
  id: 'cancellation-eligibility',
  hasBackground: false,
  columns: 2,
  header: {
    title: 'Cancellation of Removal Eligibility',
    subtitle: 'Requirements for non-permanent residents',
    tagline: 'Eligibility',
  },
  items: [
    {
      title: '10 Years Continuous Physical Presence',
      description: 'Must have been continuously physically present in the US for 10 years before the Notice to Appear.',
      icon: IconClock,
    },
    {
      title: 'Good Moral Character',
      description: 'Must demonstrate good moral character during the 10-year period.',
      icon: IconCheck,
    },
    {
      title: 'Exceptional & Extremely Unusual Hardship',
      description: 'Removal would result in exceptional and extremely unusual hardship to US citizen or permanent resident spouse, parent, or child.',
      icon: IconHeart,
    },
    {
      title: 'No Disqualifying Convictions',
      description: 'Must not have been convicted of certain criminal offenses that would bar relief.',
      icon: IconShield,
    },
  ],
};

const cancellationPricingDetails = {
  id: 'cancellation-pricing-details',
  hasBackground: true,
  columns: 3,
  header: {
    title: 'Cancellation of Removal Pricing & Timeline',
    subtitle: 'Comprehensive Immigration Court representation',
    tagline: 'Investment & Timeline',
  },
  items: [
    {
      title: 'Attorney Fees',
      description: 'Complete cancellation of removal case preparation, evidence gathering, Immigration Court representation, and appeals if necessary.',
      icon: IconFileText,
      callToAction: {
        text: '$5,000',
        href: '#',
      },
    },
    {
      title: 'Court Filing Fees',
      description: 'Application for cancellation of removal filed with Immigration Court (EOIR Form 42B).',
      icon: IconScale,
      callToAction: {
        text: '$100',
        href: '#',
      },
    },
    {
      title: 'Case Duration',
      description: 'Immigration Court proceedings can take 2-5 years depending on court backlog and case complexity.',
      icon: IconClock,
      callToAction: {
        text: '2-5 years',
        href: '#',
      },
    },
    {
      title: 'Evidence Preparation',
      description: 'Extensive documentation required including hardship evidence, character witnesses, and supporting materials.',
      icon: IconCheck,
      callToAction: {
        text: '6-12 months',
        href: '#',
      },
    },
    {
      title: 'Court Hearings',
      description: 'Multiple Immigration Court hearings including master calendar and individual hearings.',
      icon: IconUsers,
      callToAction: {
        text: 'Multiple hearings',
        href: '#',
      },
    },
    {
      title: 'Success Rate Factors',
      description: 'Success depends on strength of hardship evidence, criminal history, and quality of legal representation.',
      icon: IconShield,
      callToAction: {
        text: 'Case-specific',
        href: '#',
      },
    },
  ],
};

const cancellationProcess = {
  id: 'cancellation-process',
  hasBackground: false,
  header: {
    title: 'Cancellation of Removal Process',
    subtitle: 'Fighting deportation in Immigration Court',
    tagline: 'Process',
  },
  items: [
    {
      title: 'Emergency Response & Case Assessment',
      description: 'Immediate assessment of your case, deadlines, and development of defense strategy.',
      icon: IconShield,
    },
    {
      title: 'Extensive Evidence Gathering',
      description: 'Gather hardship evidence, character references, and documentation to build the strongest possible case.',
      icon: IconFileText,
    },
    {
      title: 'Prepare Cancellation Application',
      description: 'Prepare detailed Form 42B application with supporting evidence and legal brief.',
      icon: IconScale,
    },
    {
      title: 'Immigration Court Representation',
      description: 'Aggressive representation at all court hearings, including examination of witnesses and legal arguments.',
      icon: IconUsers,
    },
    {
      title: 'Decision & Appeals',
      description: 'If denied, we evaluate appeals options to the Board of Immigration Appeals and federal courts.',
      icon: IconCheck,
    },
  ],
};

const cancellationPricing = {
  id: 'cancellation-pricing',
  hasBackground: true,
  title: 'Fight Deportation with Expert Legal Defense',
  subtitle: 'Complete cancellation of removal representation for $5,000 attorney fees + $100 court filing fee. Emergency consultation available 24/7.',
  callToAction: {
    text: 'Emergency Consultation',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'Crisis Support',
    href: 'https://wa.me/17135550123',
    icon: IconBrandWhatsapp,
  },
};

const contactCancellation = {
  id: 'contact-cancellation',
  hasBackground: false,
  header: {
    title: 'Deportation Defense & Immigration Court',
    subtitle: 'Expert representation for removal proceedings',
    tagline: 'Get Help Now',
  },
  content: 'If you or a loved one is facing deportation, time is critical. Our Immigration Court attorneys have extensive experience defending removal cases and keeping families together.',
  items: [
    {
      title: '24/7 Emergency Response',
      description: ['ICE detention cases', 'Notice to Appear received', 'Court date scheduling'],
      icon: IconShield,
    },
    {
      title: 'Immigration Court Expertise',
      description: ['Houston Immigration Court', 'Appeals experience', 'Judge-specific strategies'],
      icon: IconScale,
    },
    {
      title: 'Family-Focused Defense',
      description: ['Hardship documentation', 'Community ties evidence', 'Character witnesses'],
      icon: IconUsers,
    },
  ],
  form: {
    title: 'Emergency Deportation Defense (Urgent)',
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
      placeholder: 'Describe your removal proceedings situation - do you have a court date? Are you detained?',
    },
    btn: {
      title: 'Get Emergency Defense Help',
      type: 'submit',
    },
  },
};

export default function CancellationPage() {
  return (
    <>
      <Hero {...cancellationHero} />
      <Content {...cancellationContent} />
      <Features {...cancellationEligibility} />
      <Features {...cancellationPricingDetails} />
      <Steps {...cancellationProcess} />
      <CallToAction2 {...cancellationPricing} />
      <Contact {...contactCancellation} />
    </>
  );
}
