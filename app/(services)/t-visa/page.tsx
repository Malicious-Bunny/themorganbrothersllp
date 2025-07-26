import type { Metadata } from 'next';
import { SITE } from '~/config.js';
import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import Features from '~/components/widgets/Features';
import FAQs from '~/components/widgets/FAQs';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import { IconShield, IconHeart, IconUsers, IconPhoneCall, IconBrandWhatsapp, IconCheck, IconClock, IconLock } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: 'T Visa for Trafficking Victims - Morgan Dauterive LLP',
  description: 'Expert legal assistance for T visa applications for human trafficking victims. Secure protection and legal status in the United States.',
};

const heroData = {
  title: (
    <>
      T Visa Protection for <span className="text-accent-600">Trafficking Survivors</span>
    </>
  ),
  subtitle: (
    <>
      If you are a victim of human trafficking, you deserve protection and justice.
      Our compassionate attorneys can help you secure safety and legal status through the T visa program.
    </>
  ),
  callToAction: {
    text: 'Confidential T Visa Help',
    href: '/contact',
    icon: IconBrandWhatsapp,
  },
  callToAction2: {
    text: 'Emergency Hotline',
    href: 'tel:+17135550124',
  },
  image: {
    src: 'https://www.millalegal.com/assets/pack/background/banner-v2-bg.2407111639336.jpg',
    alt: 'T Visa Protection for Trafficking Survivors',
  },
};

const contentData = {
  id: 'content-t-visa',
  hasBackground: true,
  header: {
    title: 'What is a T Visa?',
    subtitle: 'Protection for Human Trafficking Victims',
    tagline: 'T Visa Benefits',
  },
  content:
    'The T visa provides immigration protection to victims of human trafficking who are present in the United States as a result of trafficking and who comply with reasonable requests from law enforcement in the investigation or prosecution of trafficking.',
  items: [
    {
      title: 'Immediate Protection',
      description:
        'T visa provides immediate protection from deportation and allows you to remain in the United States.',
    },
    {
      title: 'Work Authorization',
      description:
        'T visa holders receive employment authorization to work legally in the United States.',
    },
    {
      title: 'Path to Green Card',
      description:
        'After 3 years, T visa holders may apply for permanent residence if they meet requirements.',
    },
  ],
  image: {
    src: '/lawyer-consultation.jpg',
    alt: 'T Visa consultation',
  },
  isReversed: false,
  isAfterContent: false,
};

const featuresData = {
  id: 'features-t-visa',
  hasBackground: false,
  columns: 2,
  header: {
    title: 'Types of Human Trafficking',
    subtitle: 'We help victims of all forms of human trafficking',
    tagline: 'Trafficking Forms',
  },
  items: [
    {
      title: 'Sex Trafficking',
      description: 'Forced prostitution, sexual exploitation, and commercial sexual abuse.',
      icon: IconShield,
    },
    {
      title: 'Labor Trafficking',
      description: 'Forced labor, debt bondage, and involuntary servitude in various industries.',
      icon: IconUsers,
    },
    {
      title: 'Domestic Servitude',
      description: 'Forced domestic work in private homes under coercive conditions.',
      icon: IconLock,
    },
    {
      title: 'Agricultural Trafficking',
      description: 'Forced labor in farms, fields, and agricultural operations.',
      icon: IconCheck,
    },
    {
      title: 'Construction Trafficking',
      description: 'Forced labor in construction, manufacturing, and industrial work.',
      icon: IconHeart,
    },
    {
      title: 'Service Industry Trafficking',
      description: 'Forced labor in restaurants, hotels, and service establishments.',
      icon: IconShield,
    },
  ],
};

const processData = {
  id: 'process-t-visa',
  hasBackground: true,
  header: {
    title: 'T Visa Application Process',
    subtitle: 'Compassionate legal assistance for trafficking survivors',
    tagline: 'Our Approach',
  },
  content:
    'We understand the trauma you have experienced and provide sensitive, confidential legal assistance throughout the T visa application process.',
  items: [
    {
      title: 'Safety First',
      description:
        'We prioritize your safety and well-being while assessing your T visa eligibility.',
    },
    {
      title: 'Evidence Gathering',
      description:
        'We help gather necessary documentation and evidence to support your T visa application.',
    },
    {
      title: 'Law Enforcement Cooperation',
      description:
        'We assist with reasonable cooperation requirements while protecting your interests.',
    },
  ],
  image: {
    src: 'https://purdyimmigrationlawyer.com/wp-content/uploads/2021/12/Florida-Immigration-Lawyer-1.jpg',
    alt: 'T Visa application assistance',
  },
  isReversed: true,
  isAfterContent: true,
};

const faqsData = {
  id: 'faqs-t-visa',
  hasBackground: false,
  header: {
    title: 'T Visa Frequently Asked Questions',
    subtitle: 'Common questions about T visa eligibility and process',
    tagline: 'FAQs',
  },
  items: [
    {
      title: 'What is considered human trafficking?',
      description: `Human trafficking involves the use of force, fraud, or coercion to obtain labor or commercial sex acts. This includes sex trafficking, labor trafficking, and domestic servitude.`,
    },
    {
      title: 'Do I need to cooperate with law enforcement?',
      description: `You must comply with reasonable requests from law enforcement for assistance in the investigation or prosecution of trafficking, unless you are under 18 or unable to cooperate due to trauma.`,
    },
    {
      title: 'Can my family members get T visas?',
      description: `Yes, certain family members may be eligible for derivative T visas, including spouses, children, parents (if you are under 21), and unmarried siblings under 18.`,
    },
    {
      title: 'What if I entered the US illegally?',
      description: `Your immigration status when you were trafficked does not affect your T visa eligibility. T visas are specifically designed to help trafficking victims regardless of how they entered the US.`,
    },
    {
      title: 'How long does the T visa process take?',
      description: `T visa applications typically take 12-24 months to process. You may receive interim benefits including work authorization while your case is pending.`,
    },
    {
      title: 'What if I am afraid to report my traffickers?',
      description: `We understand your fears and provide safety planning. Law enforcement cooperation can be tailored to your safety needs and trauma circumstances.`,
    },
  ],
};

const ctaData = {
  id: 'cta-t-visa',
  hasBackground: false,
  title: 'Break Free from Trafficking',
  subtitle:
    'You deserve freedom, safety, and legal protection. Our experienced attorneys can help you escape trafficking situations and secure legal status through the T visa program.',
  callToAction: {
    text: 'Get Confidential Help Now',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'Emergency WhatsApp',
    href: 'https://wa.me/17135550123',
    icon: IconBrandWhatsapp,
  },
};

const contactData = {
  id: 'contact-t-visa',
  hasBackground: true,
  header: {
    title: 'Confidential Help for Trafficking Survivors',
    subtitle: 'Safe, trauma-informed legal assistance',
    tagline: 'Contact Us',
  },
  content:
    'Our attorneys are specially trained to work with trafficking survivors. We provide confidential, trauma-informed legal services in a safe environment.',
  items: [
    {
      title: '24/7 Emergency Support',
      description: ['Immediate safety assistance', 'Crisis intervention', 'Emergency legal consultation'],
      icon: IconClock,
    },
    {
      title: 'Complete Confidentiality',
      description: ['Attorney-client privilege', 'Safe communication methods', 'Protected consultations'],
      icon: IconShield,
    },
    {
      title: 'Comprehensive Services',
      description: ['T visa applications', 'Family member protection', 'Path to permanent status'],
      icon: IconUsers,
    },
  ],
  form: {
    title: 'Secure T Visa Consultation',
    inputs: [
      {
        type: 'text',
        name: 'name',
        placeholder: 'Your name (confidential)',
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
      placeholder: 'Tell us about your situation (all information confidential)...',
    },
    btn: {
      title: 'Request Safe Consultation',
      type: 'submit',
    },
  },
};

export default function TVisaPage() {
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
