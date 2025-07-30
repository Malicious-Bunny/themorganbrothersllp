import type { Metadata } from 'next';

import { SITE } from '~/config.js';
import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import Features from '~/components/widgets/Features';
import Steps from '~/components/widgets/Steps';
import FAQs from '~/components/widgets/FAQs';
import Testimonials from '~/components/widgets/Testimonials';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import {
  IconFileText,
  IconClock,
  IconCheck,
  IconPhoneCall,
  IconBrandWhatsapp,
  IconShield,
  IconMapPin,
  IconId,
  IconUser,
  IconCreditCard,
  IconBuildingBank,
  IconCar,
  IconHome,
  IconSchool,
  IconMedicalCross,
  IconChevronRight,
  IconUserCheck,
  IconClipboardCheck,
  IconCertificate
} from '@tabler/icons-react';

export const metadata: Metadata = {
  title: `Social Security Number (SSN) Services - Morgan Dauterive LLP | Professional SSN Application Assistance`,
  description: 'Expert Social Security Number application assistance for immigrants, work authorization holders, and qualifying individuals. Complete SSN application support with $1000 attorney fee.',
};

const socialSecurityHero = {
  title: (
    <>
      Social Security Number <span className="hidden md:inline">-</span> <span>Professional SSN</span>{' '}
      <span className="sm:whitespace-nowrap text-accent-600">Application Services</span>
    </>
  ),
  subtitle: (
    <>
      <div className="mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
        <div className="flex items-center gap-3 mb-2">
          <IconFileText className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-xl text-primary-600">$1000 Attorney Fee</span>
        </div>
        <div className="flex items-center gap-3 mb-2">
          <IconClock className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-lg text-primary-600">2-6 Weeks Processing</span>
        </div>
        <div className="flex items-center gap-3">
          <IconUserCheck className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-lg text-primary-600">Eligibility Assessment Included</span>
        </div>
      </div>
      Your Social Security Number is the key to employment, banking, credit, healthcare, and countless other essential services in the United States.
      Our immigration law experts provide comprehensive SSN application assistance, ensuring your application meets all Social Security Administration requirements.
    </>
  ),
  callToAction: {
    text: 'WhatsApp Consultation',
    href: 'https://wa.me/17135550123',
    icon: IconBrandWhatsapp,
  },
  callToAction2: {
    text: 'Check Eligibility',
    href: '#eligibility',
  },
  image: {
    src: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Social Security Number application assistance',
  },
};

const eligibilityContent = {
  id: 'eligibility-social-security',
  hasBackground: false,
  header: {
    title: 'Who Can Apply for a Social Security Number?',
    subtitle: 'Understanding SSN eligibility requirements for immigrants and work authorization holders',
  },
  content: `Social Security Numbers are available to U.S. citizens, permanent residents, and certain categories of immigrants with work authorization.
    Our experienced attorneys help determine your eligibility and guide you through the application process.`,
  items: [
    {
      title: 'Work Authorization Holders',
      description: 'DACA recipients, H-1B, L-1, TN visa holders, and others with valid Employment Authorization Documents (EAD).',
      icon: IconCreditCard,
    },
    {
      title: 'Permanent Residents',
      description: 'Green card holders and those who have adjusted their status to lawful permanent resident.',
      icon: IconHome,
    },
    {
      title: 'Certain Visa Categories',
      description: 'F-1 students with CPT/OPT, J-1 exchange visitors, and other specific visa classifications with work permission.',
      icon: IconSchool,
    },
    {
      title: 'Asylum & Refugee Status',
      description: 'Individuals granted asylum, refugee status, or other humanitarian protections allowing work authorization.',
      icon: IconShield,
    },
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Social Security eligibility assessment',
  },
  isReversed: false,
  isAfterContent: false,
};

const processSteps = {
  id: 'process-social-security',
  hasBackground: true,
  header: {
    title: 'Our Complete SSN Application Process',
    subtitle: 'Step-by-step professional assistance from consultation to card receipt',
  },
  items: [
    {
      title: 'Initial Consultation & Eligibility Review',
      description: 'Comprehensive assessment of your immigration status, work authorization, and SSN eligibility. We review your documents and determine the best application strategy.',
      icon: IconUserCheck,
    },
    {
      title: 'Document Collection & Preparation',
      description: 'Assistance gathering all required documentation including identity verification, immigration status proof, and work authorization evidence. We ensure all documents meet SSA requirements.',
      icon: IconClipboardCheck,
    },
    {
      title: 'Application Completion & Review',
      description: 'Professional completion of Form SS-5 (Application for Social Security Card) with thorough review to prevent delays or rejections.',
      icon: IconFileText,
    },
    {
      title: 'SSA Office Submission',
      description: 'Guidance on visiting the Social Security Administration office, what to expect, and representation if needed during the application process.',
      icon: IconBuildingBank,
    },
    {
      title: 'Application Tracking & Follow-up',
      description: 'Monitoring your application status and handling any additional requests from the Social Security Administration until you receive your card.',
      icon: IconCertificate,
    },
  ],
  callToAction: {
    text: 'Start Your Application',
    href: '/contact',
  },
};

const ssnBenefitsFeatures = {
  id: 'benefits-social-security',
  hasBackground: false,
  header: {
    title: 'Why You Need a Social Security Number',
    subtitle: 'Essential for employment, banking, credit, and countless other services in the US',
  },
  items: [
    {
      title: 'Employment & Payroll',
      description: 'Required for all legal employment in the United States. Employers must verify your SSN for tax reporting and wage documentation.',
      icon: IconCreditCard,
    },
    {
      title: 'Banking & Financial Services',
      description: 'Open bank accounts, apply for credit cards, secure loans, and access essential financial services that require SSN verification.',
      icon: IconBuildingBank,
    },
    {
      title: 'Credit History Building',
      description: 'Establish your credit history in the United States, essential for future loans, mortgages, and major financial decisions.',
      icon: IconCheck,
    },
    {
      title: 'Healthcare Services',
      description: 'Access health insurance plans, medical services, and healthcare benefits that require Social Security Number verification.',
      icon: IconMedicalCross,
    },
    {
      title: 'Driver\'s License & ID',
      description: 'Required for obtaining a driver\'s license or state identification card in most states across the United States.',
      icon: IconCar,
    },
    {
      title: 'Government Benefits',
      description: 'Access to various government programs, social services, and benefits that require SSN for eligibility verification.',
      icon: IconShield,
    },
  ],
};

const documentContent = {
  id: 'documents-social-security',
  hasBackground: true,
  header: {
    title: 'Required Documents for SSN Application',
    subtitle: 'Complete documentation checklist to ensure successful application submission',
  },
  content: `The Social Security Administration requires specific documentation to verify your identity, immigration status, and work authorization.
    Our attorneys ensure you have all necessary documents properly prepared and formatted.`,
  items: [
    {
      title: 'Identity Verification',
      description: 'Valid passport, driver\'s license, or other government-issued photo identification accepted by the SSA.',
      icon: IconId,
    },
    {
      title: 'Immigration Status Documents',
      description: 'I-94 record, visa documentation, green card, or other proof of lawful status in the United States.',
      icon: IconFileText,
    },
    {
      title: 'Work Authorization Evidence',
      description: 'Employment Authorization Document (EAD), I-20 with work permission, or other documents showing work eligibility.',
      icon: IconCheck,
    },
    {
      title: 'Supporting Documentation',
      description: 'Additional documents may be required based on your specific immigration status and circumstances.',
      icon: IconClipboardCheck,
    },
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Required documents for SSN application',
  },
  isReversed: true,
  isAfterContent: true,
};

const ssnFAQs = {
  id: 'faqs-social-security',
  hasBackground: false,
  header: {
    title: 'Frequently Asked Questions About SSN Applications',
    subtitle: 'Common questions about Social Security Number applications and our services',
  },
  items: [
    {
      title: 'How long does it take to get a Social Security Number?',
      description: 'Processing typically takes 2-6 weeks after submitting your complete application. We provide regular updates throughout the process and can help expedite when possible.',
      icon: IconChevronRight,
    },
    {
      title: 'Can I work while my SSN application is pending?',
      description: 'Yes, if you have valid work authorization. You can begin working with a receipt notice from the SSA, though your employer will need your actual SSN for payroll processing.',
      icon: IconChevronRight,
    },
    {
      title: 'What if my SSN application is denied?',
      description: 'We review the denial reasons and help you address any issues. Common problems include incomplete documentation or eligibility questions, which we can often resolve.',
      icon: IconChevronRight,
    },
    {
      title: 'Do I need an attorney for SSN applications?',
      description: 'While not required, our expertise ensures proper documentation, prevents delays, and provides guidance through complex immigration-related SSN issues.',
      icon: IconChevronRight,
    },
    {
      title: 'Can my family members also apply for SSNs?',
      description: 'Eligible family members (spouse, children) with proper work authorization or qualifying status can also apply. We provide family application assistance.',
      icon: IconChevronRight,
    },
    {
      title: 'What if I lose my Social Security card?',
      description: 'We assist with replacement Social Security card applications. The process is similar but requires different documentation to verify your identity and status.',
      icon: IconChevronRight,
    },
  ],
};

const ssnTestimonials = {
  id: 'testimonials-social-security',
  hasBackground: true,
  header: {
    title: 'Client Success Stories',
    subtitle: 'Real experiences from clients who obtained their Social Security Numbers with our help',
  },
  testimonials: [
    {
      name: 'Luis Rodriguez',
      job: 'DACA Recipient & Software Engineer',
      testimonial: 'Morgan Dauterive LLP helped me get my Social Security Number right after my DACA approval. Their expertise made the process smooth and stress-free. Now I can work legally and build my career in the US.',
      image: {
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        alt: 'Luis Rodriguez',
      },
    },
    {
      name: 'Priya Patel',
      job: 'H-1B Visa Holder & Healthcare Worker',
      testimonial: 'As an H-1B worker, getting my SSN was crucial for starting my new job. The attorneys guided me through every step and ensured I had all the right documents. Received my card in just 3 weeks!',
      image: {
        src: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        alt: 'Priya Patel',
      },
    },
    {
      name: 'Carlos Martinez',
      job: 'Asylum Recipient & Business Owner',
      testimonial: 'After being granted asylum, I needed an SSN to start my business and build credit. Morgan Dauterive LLP made sure my application was perfect. Their knowledge of immigration law was invaluable.',
      image: {
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
        alt: 'Carlos Martinez',
      },
    },
  ],
  callToAction: {
    text: 'Start Your SSN Application',
    href: '/contact',
  },
};

const socialSecurityCallToAction = {
  id: 'cta-social-security',
  hasBackground: false,
  title: 'Ready to Get Your Social Security Number?',
  subtitle: 'Don\'t let documentation issues delay your ability to work and live fully in the United States. Get expert legal assistance with your SSN application today.',
  callToAction: {
    text: 'Schedule Free Consultation',
    href: '/contact',
  },
};

export default function SocialSecurityPage() {
  return (
    <>
      <Hero {...socialSecurityHero} />
      <Content {...eligibilityContent} />
      <Steps {...processSteps} />
      <Features {...ssnBenefitsFeatures} />
      <Content {...documentContent} />
      <FAQs {...ssnFAQs} />
      <Testimonials {...ssnTestimonials} />
      <CallToAction2 {...socialSecurityCallToAction} />
      <Contact
        id="contact-social-security"
        hasBackground={true}
        header={{
          title: 'Get Professional SSN Application Assistance',
          subtitle: 'Contact Morgan Dauterive LLP today for expert Social Security Number application services. $1000 attorney fee includes complete application support.',
        }}
      />
    </>
  );
}
