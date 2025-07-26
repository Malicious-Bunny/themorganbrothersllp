import type { Metadata } from 'next';
import { SITE } from '~/config.js';
import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import Features from '~/components/widgets/Features';
import FAQs from '~/components/widgets/FAQs';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import { IconShield, IconScale, IconUsers, IconPhoneCall, IconBrandWhatsapp, IconCheck, IconClock, IconHome } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: 'Cancellation of Removal - Deportation Defense - Morgan Dauterive LLP',
  description: 'Expert deportation defense and cancellation of removal applications. Protect yourself and your family from removal proceedings.',
};

const heroData = {
  title: (
    <>
      Cancellation of Removal <span className="text-accent-600">Deportation Defense</span>
    </>
  ),
  subtitle: (
    <>
      If you are in removal proceedings, cancellation of removal may allow you to remain in the United States.
      Our experienced deportation defense attorneys can fight for your right to stay.
    </>
  ),
  callToAction: {
    text: 'Emergency Defense Help',
    href: '/contact',
    icon: IconBrandWhatsapp,
  },
  callToAction2: {
    text: 'Crisis Hotline',
    href: 'tel:+17135550124',
  },
  image: {
    src: 'https://austinimmigrationattorney.com/wp-content/uploads/U-Visa-NONIMMIGRANT-STATUS-Eligibility-.jpeg',
    alt: 'Cancellation of Removal Deportation Defense',
  },
};

const contentData = {
  id: 'content-cancellation',
  hasBackground: true,
  header: {
    title: 'What is Cancellation of Removal?',
    subtitle: 'Relief from Deportation for Long-Term Residents',
    tagline: 'Deportation Defense',
  },
  content:
    'Cancellation of removal is a form of relief that allows certain individuals in removal proceedings to avoid deportation and obtain permanent residence (green card) if they meet specific requirements.',
  items: [
    {
      title: 'Stop Deportation',
      description:
        'Successfully obtaining cancellation of removal stops your removal proceedings.',
    },
    {
      title: 'Obtain Green Card',
      description:
        'Approved cancellation of removal applications result in permanent residence status.',
    },
    {
      title: 'Family Protection',
      description:
        'Protect your family from separation and maintain your life in the United States.',
    },
  ],
  image: {
    src: '/lawyer-consultation.jpg',
    alt: 'Cancellation of removal consultation',
  },
  isReversed: false,
  isAfterContent: false,
};

const featuresData = {
  id: 'features-cancellation',
  hasBackground: false,
  columns: 2,
  header: {
    title: 'Types of Cancellation of Removal',
    subtitle: 'Different forms of cancellation relief available',
    tagline: 'Relief Types',
  },
  items: [
    {
      title: 'Non-LPR Cancellation',
      description: 'For non-permanent residents with 10+ years continuous presence, exceptional hardship to qualifying relatives.',
      icon: IconHome,
    },
    {
      title: 'LPR Cancellation',
      description: 'For lawful permanent residents with 5+ years residence, no aggravated felony convictions.',
      icon: IconShield,
    },
    {
      title: 'VAWA Cancellation',
      description: 'Special cancellation relief for victims of domestic violence with reduced requirements.',
      icon: IconUsers,
    },
    {
      title: 'Special Rule Cancellation',
      description: 'For individuals who entered before 1982 and meet specific continuous residence requirements.',
      icon: IconCheck,
    },
  ],
};

const requirementsData = {
  id: 'requirements-cancellation',
  hasBackground: true,
  header: {
    title: 'Non-LPR Cancellation Requirements',
    subtitle: 'Key requirements for cancellation of removal relief',
    tagline: 'Eligibility Requirements',
  },
  content:
    'Non-LPR cancellation of removal has strict requirements that must be carefully documented and proven before an immigration judge.',
  items: [
    {
      title: '10 Years Continuous Presence',
      description:
        'Must demonstrate continuous physical presence in the United States for 10+ years before receiving Notice to Appear.',
    },
    {
      title: 'Good Moral Character',
      description:
        'Must establish good moral character during the required period, with no disqualifying criminal convictions.',
    },
    {
      title: 'Exceptional Hardship',
      description:
        'Must prove that removal would cause exceptional and extremely unusual hardship to qualifying U.S. citizen or LPR relatives.',
    },
  ],
  image: {
    src: 'https://purdyimmigrationlawyer.com/wp-content/uploads/2021/12/Florida-Immigration-Lawyer-1.jpg',
    alt: 'Cancellation requirements assessment',
  },
  isReversed: true,
  isAfterContent: true,
};

const faqsData = {
  id: 'faqs-cancellation',
  hasBackground: false,
  header: {
    title: 'Cancellation of Removal FAQs',
    subtitle: 'Common questions about deportation defense and cancellation relief',
    tagline: 'FAQs',
  },
  items: [
    {
      title: 'What is "exceptional and extremely unusual hardship"?',
      description: `This is a very high standard requiring proof that hardship to qualifying relatives would be far beyond what is normally expected in removal cases. Factors include health, family ties, financial impact, and country conditions.`,
    },
    {
      title: 'Who qualifies as a "qualifying relative" for hardship?',
      description: `Qualifying relatives are U.S. citizen or lawful permanent resident spouses, parents, or children. The hardship must be to these specific family members, not to yourself.`,
    },
    {
      title: 'Can I apply for cancellation if I have a criminal record?',
      description: `Certain criminal convictions can bar cancellation of removal. We carefully review your criminal history to determine eligibility and explore possible waivers or other relief options.`,
    },
    {
      title: 'How long does the cancellation process take?',
      description: `Cancellation cases can take 2-5 years or more depending on court backlogs. The case remains pending until the immigration judge makes a final decision.`,
    },
    {
      title: 'What happens if my cancellation case is denied?',
      description: `If denied, you face removal from the United States. However, you may be able to appeal the decision or explore other forms of relief depending on your circumstances.`,
    },
    {
      title: 'Do I need to be in removal proceedings to apply?',
      description: `Yes, cancellation of removal can only be applied for as a defense in removal proceedings before an immigration judge. You cannot apply for it affirmatively with USCIS.`,
    },
  ],
};

const ctaData = {
  id: 'cta-cancellation',
  hasBackground: false,
  title: 'Fight Your Deportation Case',
  subtitle:
    'Do not face removal proceedings alone. Our experienced deportation defense attorneys can evaluate your case and fight for your right to remain in the United States with your family.',
  callToAction: {
    text: 'Emergency Deportation Defense',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'Crisis WhatsApp',
    href: 'https://wa.me/17135550123',
    icon: IconBrandWhatsapp,
  },
};

const contactData = {
  id: 'contact-cancellation',
  hasBackground: true,
  header: {
    title: 'Immediate Deportation Defense',
    subtitle: 'Expert legal representation in removal proceedings',
    tagline: 'Contact Us',
  },
  content:
    'Facing removal proceedings is one of the most serious immigration situations. Our experienced deportation defense attorneys provide aggressive representation to protect your right to remain in the United States.',
  items: [
    {
      title: '24/7 Emergency Response',
      description: ['Immediate consultation for ICE detainees', 'Bond hearing representation', 'Crisis intervention'],
      icon: IconClock,
    },
    {
      title: 'Experienced Court Advocacy',
      description: ['Immigration court representation', 'Appeals and motions', 'Alternative relief options'],
      icon: IconScale,
    },
    {
      title: 'Family Protection',
      description: ['Hardship documentation', 'Family unity advocacy', 'Comprehensive case preparation'],
      icon: IconUsers,
    },
  ],
  form: {
    title: 'Emergency Deportation Defense',
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
        name: 'location',
        placeholder: 'Are you detained? Where?',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Describe your removal proceedings situation and timeline...',
    },
    btn: {
      title: 'Get Emergency Legal Help',
      type: 'submit',
    },
  },
};

export default function CancellationPage() {
  return (
    <>
      <Hero {...heroData} />
      <Content {...contentData} />
      <Features {...featuresData} />
      <Content {...requirementsData} />
      <FAQs {...faqsData} />
      <Contact {...contactData} />
      <CallToAction2 {...ctaData} />
    </>
  );
}
