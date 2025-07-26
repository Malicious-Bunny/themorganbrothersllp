import type { Metadata } from 'next';

import { SITE } from '~/config.js';
import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import Features from '~/components/widgets/Features';
import Steps from '~/components/widgets/Steps';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import { IconHeartbeat, IconFileText, IconClock, IconScale, IconPhoneCall, IconBrandWhatsapp, IconShield, IconUsers } from '@tabler/icons-react';

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
      If you fear returning to your home country due to persecution, our experienced asylum attorneys can help you
      seek protection in the United States. We provide comprehensive legal representation throughout the entire asylum process.
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
    src: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
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
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
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
  hasBackground: true,
  header: {
    title: 'The Asylum Process',
    subtitle: 'Step-by-step guide to seeking asylum protection',
    tagline: 'Process',
  },
  items: [
    {
      title: 'Initial Consultation & Case Assessment',
      description: 'We evaluate your case, gather your story, and determine the best legal strategy for your situation.',
      icon: IconPhoneCall,
    },
    {
      title: 'Prepare and File I-589 Application',
      description: 'We prepare your detailed asylum application with supporting evidence and file it with USCIS or Immigration Court.',
      icon: IconFileText,
    },
    {
      title: 'Biometrics and Interview/Hearing',
      description: 'Attend biometrics appointment and prepare for asylum interview with USCIS or hearing before an Immigration Judge.',
      icon: IconScale,
    },
    {
      title: 'Decision and Next Steps',
      description: 'Receive decision on your case. If granted, we help with next steps including work authorization and eventual green card application.',
      icon: IconShield,
    },
  ],
};

const asylumPricing = {
  id: 'asylum-pricing',
  hasBackground: false,
  title: 'Asylum Legal Services',
  subtitle: 'Comprehensive representation for your asylum case - starting at $6,000',
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
      <CallToAction2 {...asylumPricing} />
      <Contact {...contactAsylum} />
    </>
  );
}
