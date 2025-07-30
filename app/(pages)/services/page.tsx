import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Features from '~/components/widgets/Features';
import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import CallToAction2 from '~/components/widgets/CallToAction2';
import {
  IconShield,
  IconHeartbeat,
  IconUsers,
  IconLock,
  IconScale,
  IconHome,
  IconFileText,
  IconPhoneCall,
  IconBrandWhatsapp
} from '@tabler/icons-react';

export const metadata: Metadata = {
  title: `Immigration Services - Morgan Dauterive LLP`,
  description: 'Comprehensive immigration services including DACA, asylum, adjustment of status, U visas, T visas, VAWA, TPS, and deportation defense.',
};

const servicesHero = {
  title: (
    <>
      Comprehensive <span className="hidden md:inline">Immigration</span> <span>Legal Services</span>{' '}
      <span className="sm:whitespace-nowrap text-accent-600">for Undocumented Immigrants</span>
    </>
  ),
  subtitle: (
    <>
      Morgan Dauterive LLP provides expert legal representation across all areas of immigration law.
      We specialize in helping undocumented immigrants secure legal status and protection from deportation.
    </>
  ),
  callToAction: {
    text: 'WhatsApp Consultation',
    href: 'https://wa.me/17135550123',
    icon: IconBrandWhatsapp,
  },
  callToAction2: {
    text: 'Schedule Consultation',
    href: '/contact',
  },
  image: {
    src: '/lawyer-consultation.jpg',
    alt: 'Immigration legal services consultation',
  },
};

const servicesFeatures = {
  id: 'services-overview',
  hasBackground: false,
  columns: 2 as const,
  header: {
    title: 'Our Immigration Services',
    subtitle: 'Protecting your rights and securing your future in the United States',
    tagline: 'Services',
  },
  items: [
    {
      title: 'DACA (Deferred Action for Childhood Arrivals)',
      description: 'Protection from deportation and work authorization for young immigrants brought to the US as children.',
      icon: IconShield,
      callToAction: {
        text: 'Learn More',
        href: '/daca',
      },
    },
    {
      title: 'Asylum Applications',
      description: 'Comprehensive legal representation for individuals fleeing persecution in their home countries.',
      icon: IconHeartbeat,
      callToAction: {
        text: 'Learn More',
        href: '/asylum',
      },
    },
    {
      title: 'Adjustment of Status',
      description: 'Family-based immigration and green card applications for eligible undocumented immigrants.',
      icon: IconUsers,
      callToAction: {
        text: 'Learn More',
        href: '/adjustment-of-status',
      },
    },
    {
      title: 'U Visa (Crime Victims)',
      description: 'Protection for victims of qualifying crimes who assist law enforcement in investigations.',
      icon: IconLock,
      callToAction: {
        text: 'Learn More',
        href: '/u-visa',
      },
    },
    {
      title: 'T Visa (Trafficking Victims)',
      description: 'Immigration relief for victims of human trafficking and their immediate family members.',
      icon: IconScale,
      callToAction: {
        text: 'Learn More',
        href: '/t-visa',
      },
    },
    {
      title: 'VAWA (Violence Against Women Act)',
      description: 'Protection for survivors of domestic violence, sexual assault, and other qualifying crimes.',
      icon: IconHeartbeat,
      callToAction: {
        text: 'Learn More',
        href: '/vawa',
      },
    },
    {
      title: 'TPS (Temporary Protected Status)',
      description: 'Relief for nationals from countries facing ongoing armed conflict or natural disasters.',
      icon: IconHome,
      callToAction: {
        text: 'Learn More',
        href: '/tps',
      },
    },
    {
      title: 'Cancellation of Removal',
      description: 'Deportation defense for individuals facing removal proceedings with qualifying circumstances.',
      icon: IconFileText,
      callToAction: {
        text: 'Learn More',
        href: '/cancellation-of-removal',
      },
    },
  ],
};

const servicesContent = {
  id: 'services-approach',
  hasBackground: true,
  header: {
    title: 'Our Approach to Immigration Law',
    subtitle: 'Compassionate, thorough, and results-driven representation',
    tagline: 'Our Method',
  },
  content: `At Morgan Dauterive LLP, we understand that every immigration case is unique and deeply personal. Our approach combines thorough legal knowledge with compassionate understanding of the challenges faced by undocumented immigrants.`,
  items: [
    {
      title: 'Personalized Strategy',
      description: 'We develop customized legal strategies based on your specific circumstances and goals.',
    },
    {
      title: 'Thorough Case Preparation',
      description: 'We meticulously prepare every case with attention to detail and comprehensive evidence gathering.',
    },
    {
      title: 'Ongoing Communication',
      description: 'We keep you informed at every step and ensure you understand the process and your options.',
    },
    {
      title: 'Emergency Response',
      description: 'Available 24/7 for emergency situations including ICE detention and removal proceedings.',
    },
  ],
  image: {
    src: '/lawyer-consultation.jpg',
    alt: 'Immigration attorney consultation',
  },
  isReversed: false,
  isAfterContent: false,
};

const servicesCallToAction = {
  id: 'services-cta',
  hasBackground: true,
  title: 'Ready to Secure Your Legal Status?',
  subtitle: 'Do not wait - immigration laws are complex and time-sensitive. Get the expert legal help you need today.',
  callToAction: {
    text: 'Schedule Free Consultation',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'WhatsApp Us Now',
    href: 'https://wa.me/17135550123',
    icon: IconBrandWhatsapp,
  },
};

export default function ServicesPage() {
  return (
    <>
      <Hero {...servicesHero} />
      <Features {...servicesFeatures} />
      <Content {...servicesContent} />
      <CallToAction2 {...servicesCallToAction} />
    </>
  );
}
