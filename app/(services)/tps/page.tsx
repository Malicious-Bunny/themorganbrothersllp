import type { Metadata } from 'next';
import { SITE } from '~/config.js';
import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import Features from '~/components/widgets/Features';
import FAQs from '~/components/widgets/FAQs';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import { IconShield, IconHome, IconUsers, IconPhoneCall, IconBrandWhatsapp, IconCheck, IconClock, IconGlobe } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: 'TPS - Temporary Protected Status - Morgan Dauterive LLP',
  description: 'Expert assistance with Temporary Protected Status applications for nationals from designated countries facing ongoing conflicts or disasters.',
};

const heroData = {
  title: (
    <>
      Temporary Protected Status <span className="text-accent-600">(TPS)</span>
    </>
  ),
  subtitle: (
    <>
      If you are from a country experiencing ongoing armed conflict, natural disaster,
      or other extraordinary circumstances, you may be eligible for Temporary Protected Status (TPS).
    </>
  ),
  callToAction: {
    text: 'Check TPS Eligibility',
    href: '/contact',
    icon: IconBrandWhatsapp,
  },
  callToAction2: {
    text: 'Call for TPS Help',
    href: 'tel:+17135550123',
  },
  image: {
    src: 'https://marvinlawoffice.com/wp-content/uploads/5-ways-to-green-card.jpg',
    alt: 'Temporary Protected Status TPS',
  },
};

const contentData = {
  id: 'content-tps',
  hasBackground: true,
  header: {
    title: 'What is Temporary Protected Status (TPS)?',
    subtitle: 'Protection for Nationals from Designated Countries',
    tagline: 'TPS Benefits',
  },
  content:
    'Temporary Protected Status (TPS) is protection granted to individuals from countries experiencing ongoing armed conflict, environmental disasters, or other extraordinary circumstances that prevent safe return.',
  items: [
    {
      title: 'Protection from Removal',
      description:
        'TPS provides protection from deportation and removal proceedings while designation is active.',
    },
    {
      title: 'Work Authorization',
      description:
        'TPS beneficiaries can obtain employment authorization documents to work legally in the United States.',
    },
    {
      title: 'Travel Authorization',
      description:
        'With advance parole, TPS holders may be able to travel outside the United States and return.',
    },
  ],
  image: {
    src: '/lawyer-consultation.jpg',
    alt: 'TPS consultation',
  },
  isReversed: false,
  isAfterContent: false,
};

const featuresData = {
  id: 'features-tps',
  hasBackground: false,
  columns: 2,
  header: {
    title: 'Currently Designated TPS Countries',
    subtitle: 'Countries with active TPS designations (subject to change)',
    tagline: 'TPS Countries',
  },
  items: [
    {
      title: 'El Salvador',
      description: 'Designated due to ongoing armed conflict and extraordinary circumstances.',
      icon: IconGlobe,
    },
    {
      title: 'Haiti',
      description: 'Designated due to ongoing armed conflict and extraordinary circumstances.',
      icon: IconGlobe,
    },
    {
      title: 'Honduras',
      description: 'Designated due to ongoing armed conflict and extraordinary circumstances.',
      icon: IconGlobe,
    },
    {
      title: 'Nepal',
      description: 'Designated due to ongoing armed conflict and extraordinary circumstances.',
      icon: IconGlobe,
    },
    {
      title: 'Nicaragua',
      description: 'Designated due to ongoing armed conflict and extraordinary circumstances.',
      icon: IconGlobe,
    },
    {
      title: 'Somalia',
      description: 'Designated due to ongoing armed conflict and extraordinary circumstances.',
      icon: IconGlobe,
    },
    {
      title: 'South Sudan',
      description: 'Designated due to ongoing armed conflict and extraordinary circumstances.',
      icon: IconGlobe,
    },
    {
      title: 'Sudan',
      description: 'Designated due to ongoing armed conflict and extraordinary circumstances.',
      icon: IconGlobe,
    },
    {
      title: 'Syria',
      description: 'Designated due to ongoing armed conflict and extraordinary circumstances.',
      icon: IconGlobe,
    },
    {
      title: 'Venezuela',
      description: 'Designated due to ongoing armed conflict and extraordinary circumstances.',
      icon: IconGlobe,
    },
    {
      title: 'Yemen',
      description: 'Designated due to ongoing armed conflict and extraordinary circumstances.',
      icon: IconGlobe,
    },
    {
      title: 'Ukraine',
      description: 'Designated due to ongoing armed conflict and extraordinary circumstances.',
      icon: IconGlobe,
    },
  ],
};

const processData = {
  id: 'process-tps',
  hasBackground: true,
  header: {
    title: 'TPS Application Process',
    subtitle: 'How we help you apply for Temporary Protected Status',
    tagline: 'Our Process',
  },
  content:
    'Our experienced attorneys guide you through the TPS application process, ensuring all requirements are met and deadlines are followed.',
  items: [
    {
      title: 'Eligibility Assessment',
      description:
        'We evaluate your nationality, continuous residence, and physical presence requirements.',
    },
    {
      title: 'Document Preparation',
      description:
        'Complete preparation of Form I-821 and all required supporting documentation.',
    },
    {
      title: 'Ongoing Monitoring',
      description:
        'We monitor your TPS status and help with re-registration when required.',
    },
  ],
  image: {
    src: 'https://purdyimmigrationlawyer.com/wp-content/uploads/2021/12/Florida-Immigration-Lawyer-1.jpg',
    alt: 'TPS application assistance',
  },
  isReversed: true,
  isAfterContent: true,
};

const faqsData = {
  id: 'faqs-tps',
  hasBackground: false,
  header: {
    title: 'TPS Frequently Asked Questions',
    subtitle: 'Common questions about Temporary Protected Status',
    tagline: 'FAQs',
  },
  items: [
    {
      title: 'How long does TPS protection last?',
      description: `TPS protection varies by country designation, typically lasting 6-18 months. DHS can extend or terminate designations based on country conditions. You must re-register during each renewal period.`,
    },
    {
      title: 'Can I apply for TPS if I entered the US illegally?',
      description: `Yes, your manner of entry does not affect TPS eligibility. You must meet nationality, continuous residence, and physical presence requirements regardless of how you entered.`,
    },
    {
      title: 'Does TPS lead to permanent residence?',
      description: `TPS itself does not directly lead to a green card. However, TPS holders may be eligible for other immigration benefits like family-based petitions or asylum if they qualify.`,
    },
    {
      title: 'Can my family members get TPS too?',
      description: `Each person must apply individually for TPS. Spouses and children must meet the same eligibility requirements, including nationality and physical presence in the US.`,
    },
    {
      title: 'What happens if I miss the TPS registration deadline?',
      description: `Missing initial registration deadlines can be serious. Late initial registration is only allowed in very limited circumstances. However, you may still be eligible for other forms of relief.`,
    },
    {
      title: 'Can I travel outside the US with TPS?',
      description: `TPS alone does not authorize travel. You must apply for advance parole before traveling. Unauthorized travel can result in loss of TPS status.`,
    },
  ],
};

const ctaData = {
  id: 'cta-tps',
  hasBackground: false,
  title: 'Secure Your TPS Protection Today',
  subtitle:
    'Do not let TPS deadlines pass. Our experienced immigration attorneys can help you apply for or renew your Temporary Protected Status and explore other immigration options.',
  callToAction: {
    text: 'Apply for TPS Now',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'WhatsApp TPS Help',
    href: 'https://wa.me/17135550123',
    icon: IconBrandWhatsapp,
  },
};

const contactData = {
  id: 'contact-tps',
  hasBackground: true,
  header: {
    title: 'Expert TPS Assistance',
    subtitle: 'Professional help with Temporary Protected Status applications',
    tagline: 'Contact Us',
  },
  content:
    'Our immigration attorneys stay current with TPS designations and changes. We provide comprehensive assistance with initial applications, renewals, and exploring other immigration options.',
  items: [
    {
      title: 'TPS Monitoring',
      description: ['Country designation updates', 'Registration period alerts', 'Deadline tracking'],
      icon: IconClock,
    },
    {
      title: 'Complete TPS Services',
      description: ['Initial applications', 'Re-registration assistance', 'Work authorization'],
      icon: IconShield,
    },
    {
      title: 'Additional Options',
      description: ['Explore other immigration relief', 'Family-based petitions', 'Asylum applications'],
      icon: IconUsers,
    },
  ],
  form: {
    title: 'TPS Consultation Request',
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
      {
        type: 'text',
        name: 'country',
        placeholder: 'Your country of nationality',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Tell us about your TPS situation and timeline...',
    },
    btn: {
      title: 'Get TPS Consultation',
      type: 'submit',
    },
  },
};

export default function TpsPage() {
  return (
    <>
      <Hero {...heroData} />
      <Content {...contentData} />
      <Features {...featuresData} />
      <Content {...processData} />
      <FAQs {...faqsData} />
      <Contact {...contactData} />
      <CallToAction2 {...ctaData} />
    </>
  );
}
