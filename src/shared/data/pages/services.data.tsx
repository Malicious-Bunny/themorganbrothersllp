import {
  IconScale,
  IconUsers,
  IconShield,
  IconHeartbeat,
  IconHome,
  IconLock,
  IconChevronsRight,
  IconFileText,
} from '@tabler/icons-react';

import {
  CallToActionProps,
  ContentProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  TestimonialsProps,
} from '~/shared/types';

import heroImg from '~/assets/images/hero.jpg';

// Hero data on Services page *******************
export const heroServices: HeroProps = {
  title: 'Comprehensive Immigration Law Services',
  subtitle:
    'Morgan Dauterive LLP provides expert legal representation for undocumented immigrants seeking legal status in the United States. Our experienced attorneys specialize in complex immigration cases and fight tirelessly for your rights.',
  callToAction: {
    text: 'Schedule Consultation',
    href: '/contact',
  },
  image: {
    src: '/lawyer-consultation.jpg',
    alt: 'Immigration Law Consultation',
  },
};

// Feature2 data on Services page *******************
export const features2Services: FeaturesProps = {
  id: 'featuresTwo-on-services',
  header: {
    title: 'Our Immigration Services',
    subtitle: 'Specialized legal representation for every immigration need',
  },
  items: [
    {
      title: 'DACA (Deferred Action for Childhood Arrivals)',
      description: 'Comprehensive assistance with DACA applications, renewals, and legal protection for Dreamers.',
      icon: IconUsers,
      href: '/daca',
    },
    {
      title: 'Asylum Applications',
      description: 'Expert representation for asylum seekers fleeing persecution based on race, religion, nationality, political opinion, or social group.',
      icon: IconShield,
      href: '/asylum',
    },
    {
      title: 'Adjustment of Status (Green Cards)',
      description: 'Help obtaining permanent resident status through family, employment, or other qualifying relationships.',
      icon: IconHome,
      href: '/adjustment-of-status',
    },
    {
      title: 'Cancellation of Removal',
      description: 'Defense against deportation proceedings for qualifying individuals with strong ties to the United States.',
      icon: IconScale,
      href: '/cancellation-of-removal',
    },
    {
      title: 'U-Visa (Crime Victims)',
      description: 'Protection for undocumented immigrants who are victims of qualifying crimes and assist law enforcement.',
      icon: IconHeartbeat,
      href: '/u-visa',
    },
    {
      title: 'T-Visa (Human Trafficking Victims)',
      description: 'Legal status for victims of severe human trafficking who cooperate with law enforcement.',
      icon: IconLock,
      href: '/t-visa',
    },
    {
      title: 'VAWA (Violence Against Women Act)',
      description: 'Self-petitioning for immigrants who are victims of domestic violence by U.S. citizens or permanent residents.',
      icon: IconShield,
      href: '/vawa',
    },
    {
      title: 'TPS (Temporary Protected Status)',
      description: 'Temporary relief from deportation for nationals of designated countries facing ongoing armed conflict or environmental disaster.',
      icon: IconFileText,
      href: '/tps',
    },
  ],
};

// Content data on Services page *******************
export const contentServicesOne: ContentProps = {
  id: 'contentOne-on-services-one',
  hasBackground: false,
  header: {
    title: 'Why Choose Morgan Dauterive LLP?',
    subtitle: 'Experienced immigration attorneys dedicated to securing your future in America',
  },
  content:
    'Our team understands the complexity and emotional weight of immigration cases. We provide compassionate, expert legal representation with a track record of successful outcomes.',
  items: [
    {
      title: 'Extensive Experience',
      description:
        'Years of specialized experience in immigration law with deep understanding of federal regulations and procedures.',
    },
    {
      title: 'Personalized Approach',
      description:
        'Every case is unique. We take time to understand your specific situation and develop a tailored legal strategy.',
    },
    {
      title: 'Proven Track Record',
      description:
        'Hundreds of successful cases including DACA approvals, asylum grants, and deportation defenses.',
    },
  ],
  image: {
    src: '/lawyer-consultation.jpg',
    alt: 'Immigration Attorney Consultation',
  },
  isReversed: true,
  isAfterContent: false,
};

// Content data on Services page *******************
export const contentServicesTwo: ContentProps = {
  id: 'contentOne-on-services-two',
  hasBackground: false,
  header: {
    title: 'Our Process',
    subtitle: 'How we help secure your legal status',
  },
  content:
    'We guide you through every step of the immigration process, from initial consultation to final resolution.',
  items: [
    {
      title: 'Initial Consultation',
      description: 'Comprehensive case evaluation and strategy development',
    },
    {
      title: 'Document Preparation',
      description: 'Meticulous preparation of all required forms and supporting documentation',
    },
    {
      title: 'Legal Representation',
      description: 'Expert advocacy before USCIS, Immigration Court, and other agencies',
    },
    {
      title: 'Case Monitoring',
      description: 'Ongoing case management and status updates throughout the process',
    },
    {
      title: 'Follow-up Support',
      description: 'Continued assistance after case resolution for renewals or next steps',
    },
  ],
  image: {
    src: '/lawyer-consultation.jpg',
    alt: 'Immigration Process',
  },
  isReversed: false,
  isAfterContent: true,
};

// Testimonials data on Services page *******************
export const testimonialsServices: TestimonialsProps = {
  id: 'testimonials-on-services',
  hasBackground: false,
  isTestimonialUp: true,
  header: {
    title: 'Client Success Stories',
    subtitle:
      'Real testimonials from clients who achieved their immigration goals with our help.',
  },
  testimonials: [
    {
      name: 'Maria Rodriguez',
      job: 'DACA Recipient',
      testimonial: `Morgan Dauterive LLP helped me renew my DACA status when I thought all hope was lost. Their expertise and dedication gave me back my future in America. I can&apos;t thank them enough.`,
      image: {
        src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        alt: 'Maria Rodriguez',
      },
    },
    {
      name: 'Carlos Martinez',
      job: 'Asylum Recipient',
      testimonial: `After fleeing violence in my home country, I was terrified and didn't know where to turn. The attorneys at Morgan Dauterive LLP fought for my asylum case and won. They saved my life.`,
      image: {
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        alt: 'Carlos Martinez',
      },
    },
    {
      name: 'Ana Silva',
      job: 'Green Card Holder',
      testimonial: `Thanks to Morgan Dauterive LLP, I was able to adjust my status and become a permanent resident. Their knowledge of immigration law is unmatched, and they made the complex process manageable.`,
      image: {
        src: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        alt: 'Ana Silva',
      },
    },
  ],
  callToAction: {
    text: 'Read More Success Stories',
    href: '/contact',
  },
};

// FAQS data on Services page *******************
export const faqsServices: FAQsProps = {
  id: 'faqs-on-services',
  hasBackground: true,
  header: {
    title: 'Frequently Asked Questions',
    subtitle:
      'Common questions about our immigration law services and processes.',
  },
  columns: 1,
  items: [
    {
      title: 'How much do your immigration services cost?',
      description: `Our fees vary depending on the complexity of your case. We offer affordable payment plans and free initial consultations to discuss your situation and provide transparent pricing.`,
      icon: IconChevronsRight,
    },
    {
      title: 'How long does the immigration process take?',
      description: `Processing times vary significantly based on the type of application and current USCIS workload. We provide realistic timelines during your consultation and keep you updated throughout the process.`,
      icon: IconChevronsRight,
    },
    {
      title: 'What documents do I need for my case?',
      description: `Required documents depend on your specific case type. During our consultation, we&apos;ll provide a detailed checklist of all necessary documentation and help you gather what&apos;s needed.`,
      icon: IconChevronsRight,
    },
    {
      title: 'Can you help if I&apos;m already in removal proceedings?',
      description: `Yes, we have extensive experience defending clients in immigration court. We can help with cancellation of removal, asylum claims, and other defenses against deportation.`,
      icon: IconChevronsRight,
    },
    {
      title: 'Do you offer services in Spanish?',
      description: `Yes, we provide services in both English and Spanish to ensure clear communication throughout your case. Our bilingual staff is here to help you every step of the way.`,
      icon: IconChevronsRight,
    },
  ],
};

// CallToAction data on Services page *******************
export const callToActionServices: CallToActionProps = {
  id: 'callToAction-on-services',
  hasBackground: false,
  title: 'Ready to Start Your Immigration Case?',
  subtitle:
    'Don\'t wait to secure your future in the United States. Contact Morgan Dauterive LLP today for expert immigration legal representation.',
  callToAction: {
    text: 'Schedule Free Consultation',
    href: '/contact',
  },
};
