import type { Metadata } from 'next';
import { SITE } from '~/config.js';
import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import Features from '~/components/widgets/Features';
import FAQs from '~/components/widgets/FAQs';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import { IconShield, IconHeart, IconUsers, IconPhoneCall, IconBrandWhatsapp, IconCheck, IconClock, IconHome } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: 'VAWA Protection for Domestic Violence Survivors - Morgan Dauterive LLP',
  description: 'Expert VAWA self-petition assistance for survivors of domestic violence, battery, and extreme cruelty by US citizens or permanent residents.',
};

const heroData = {
  title: (
    <>
      VAWA Protection for <span className="text-accent-600">Domestic Violence Survivors</span>
    </>
  ),
  subtitle: (
    <>
      The Violence Against Women Act (VAWA) provides protection for survivors of domestic violence,
      regardless of gender. Our compassionate attorneys can help you secure safety and legal status.
    </>
  ),
  callToAction: {
    text: 'Confidential VAWA Help',
    href: '/contact',
    icon: IconBrandWhatsapp,
  },
  callToAction2: {
    text: 'Crisis Hotline',
    href: 'tel:+17135550124',
  },
  image: {
    src: '/lawyer-consultation.jpg',
    alt: 'VAWA Protection for Domestic Violence Survivors',
  },
};

const contentData = {
  id: 'content-vawa',
  hasBackground: true,
  header: {
    title: 'What is VAWA?',
    subtitle: 'Self-Petition Protection for Abuse Survivors',
    tagline: 'VAWA Benefits',
  },
  content:
    'The Violence Against Women Act (VAWA) allows certain abused spouses, children, and parents of U.S. citizens and permanent residents to petition for themselves without the abuser\'s knowledge or participation.',
  items: [
    {
      title: 'Independent Petition',
      description:
        'File for legal status without your abuser\'s knowledge or consent through self-petition.',
    },
    {
      title: 'Work Authorization',
      description:
        'Receive employment authorization to support yourself and your children financially.',
    },
    {
      title: 'Path to Green Card',
      description:
        'VAWA approval can lead to permanent residence and eventual U.S. citizenship.',
    },
  ],
  image: {
    src: 'https://purdyimmigrationlawyer.com/wp-content/uploads/2021/12/Florida-Immigration-Lawyer-1.jpg',
    alt: 'VAWA self-petition consultation',
  },
  isReversed: false,
  isAfterContent: false,
};

const featuresData = {
  id: 'features-vawa',
  hasBackground: false,
  columns: 2,
  header: {
    title: 'Who Qualifies for VAWA Protection?',
    subtitle: 'VAWA protects various family relationships from abuse',
    tagline: 'Eligibility Categories',
  },
  items: [
    {
      title: 'Abused Spouses',
      description: 'Spouses of U.S. citizens or permanent residents who have been battered or subjected to extreme cruelty.',
      icon: IconHeart,
    },
    {
      title: 'Abused Children',
      description: 'Unmarried children under 21 who have been abused by a U.S. citizen or permanent resident parent.',
      icon: IconUsers,
    },
    {
      title: 'Abused Parents',
      description: 'Parents of U.S. citizens who have been battered or subjected to extreme cruelty by their adult child.',
      icon: IconHome,
    },
    {
      title: 'Self-Petitioning Widows/Widowers',
      description: 'Surviving spouses of deceased U.S. citizens who were abused during the marriage.',
      icon: IconShield,
    },
  ],
};

const abuseTypesData = {
  id: 'abuse-types-vawa',
  hasBackground: true,
  header: {
    title: 'Types of Abuse Covered by VAWA',
    subtitle: 'VAWA recognizes various forms of domestic violence and abuse',
    tagline: 'Forms of Abuse',
  },
  content:
    'VAWA protection extends to survivors of physical violence, emotional abuse, psychological manipulation, and other forms of domestic violence.',
  items: [
    {
      title: 'Physical Abuse',
      description:
        'Hitting, slapping, pushing, restraining, or any unwanted physical contact or violence.',
    },
    {
      title: 'Emotional & Psychological Abuse',
      description:
        'Threats, intimidation, isolation, controlling behavior, and psychological manipulation.',
    },
    {
      title: 'Sexual Abuse',
      description:
        'Forced sexual activity, sexual coercion, or any unwanted sexual contact.',
    },
  ],
  image: {
    src: 'https://www.cuny.edu/wp-content/uploads/sites/4/page-assets/current-students/student-affairs/cuny-immigrant-student-success/iss_students.jpg',
    alt: 'VAWA abuse protection',
  },
  isReversed: true,
  isAfterContent: true,
};

const faqsData = {
  id: 'faqs-vawa',
  hasBackground: false,
  header: {
    title: 'VAWA Frequently Asked Questions',
    subtitle: 'Common questions about VAWA eligibility and process',
    tagline: 'FAQs',
  },
  items: [
    {
      title: 'Do I need to be legally married to qualify for VAWA?',
      description: `You must be legally married or have been legally married to a U.S. citizen or permanent resident. Common-law marriages may qualify if recognized in the state where you live.`,
    },
    {
      title: 'Will my abuser know about my VAWA petition?',
      description: `No, VAWA petitions are confidential. USCIS will not contact your abuser or reveal that you have filed a petition. Your safety and privacy are protected.`,
    },
    {
      title: 'Do I need police reports to prove abuse?',
      description: `While police reports can be helpful evidence, they are not required. We can use medical records, photos, witness statements, counseling records, and other forms of evidence.`,
    },
    {
      title: 'Can men file VAWA petitions?',
      description: `Yes, despite its name, VAWA protection is available to all genders. Men who are victims of domestic violence by U.S. citizen or permanent resident spouses can also file VAWA petitions.`,
    },
    {
      title: 'What if my abuser threatens to call immigration on me?',
      description: `This is a common form of abuse called "immigration-related abuse." VAWA specifically protects against these threats, and we can help you document this type of control and manipulation.`,
    },
    {
      title: 'How long does the VAWA process take?',
      description: `VAWA petitions typically take 12-24 months to process. You may be eligible for work authorization while your petition is pending.`,
    },
  ],
};

const ctaData = {
  id: 'cta-vawa',
  hasBackground: false,
  title: 'Break Free from Domestic Violence',
  subtitle:
    'You deserve safety, independence, and legal protection. Our experienced VAWA attorneys can help you escape abuse and secure your legal status confidentially.',
  callToAction: {
    text: 'Confidential VAWA Consultation',
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
  id: 'contact-vawa',
  hasBackground: true,
  header: {
    title: 'Safe, Confidential VAWA Assistance',
    subtitle: 'Trauma-informed legal help for domestic violence survivors',
    tagline: 'Contact Us',
  },
  content:
    'Our attorneys understand the unique challenges faced by domestic violence survivors. We provide confidential, sensitive legal assistance in a safe, supportive environment.',
  items: [
    {
      title: 'Crisis Support',
      description: ['24/7 emergency consultation', 'Safety planning assistance', 'Immediate protection guidance'],
      icon: IconClock,
    },
    {
      title: 'Complete Confidentiality',
      description: ['Protected attorney-client privilege', 'No contact with abuser', 'Secure communication methods'],
      icon: IconShield,
    },
    {
      title: 'Comprehensive VAWA Services',
      description: ['VAWA self-petitions', 'Work authorization', 'Path to permanent residence'],
      icon: IconUsers,
    },
  ],
  form: {
    title: 'Confidential VAWA Consultation',
    inputs: [
      {
        type: 'text',
        name: 'name',
        placeholder: 'Your name (kept confidential)',
      },
      {
        type: 'email',
        name: 'email',
        placeholder: 'Safe email address',
      },
      {
        type: 'tel',
        name: 'phone',
        placeholder: 'Safe phone number',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Tell us about your situation (completely confidential)...',
    },
    btn: {
      title: 'Request Safe Consultation',
      type: 'submit',
    },
  },
};

export default function VawaPage() {
  return (
    <>
      <Hero {...heroData} />
      <Content {...contentData} />
      <Features {...featuresData} />
      <Content {...abuseTypesData} />
      <FAQs {...faqsData} />
      <Contact {...contactData} />
      <CallToAction2 {...ctaData} />
    </>
  );
}
