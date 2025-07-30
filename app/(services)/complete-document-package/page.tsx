import type { Metadata } from 'next';

import { SITE } from '~/config.js';
import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import Features from '~/components/widgets/Features';
import Steps from '~/components/widgets/Steps';
import FAQs from '~/components/widgets/FAQs';
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
  IconCertificate,
  IconMail,
  IconPackage,
  IconStar,
  IconDollarSign,
  IconCalendar,
  IconUsers,
  IconLock,
  IconDocument,
  IconPassport
} from '@tabler/icons-react';

export const metadata: Metadata = {
  title: `Complete Document Package - All Essential Documents | Morgan Dauterive LLP | $5000 Comprehensive Service`,
  description: 'Get ALL your essential documents in one comprehensive package: Birth Certificate, Driver\'s License, Passport, SSN, Marriage Certificate & more. Complete documentation service for $5000.',
};

const documentPackageHero = {
  title: (
    <>
      Complete Document <span className="hidden md:inline">Package -</span> <span>All Essential</span>{' '}
      <span className="sm:whitespace-nowrap text-accent-600">Documents Included</span>
    </>
  ),
  subtitle: (
    <>
      <div className="mb-6 p-6 bg-primary-50 dark:bg-primary-900/20 rounded-xl border border-primary-200 dark:border-primary-800">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="font-bold text-3xl text-primary-600">$5,000 Complete Package</span>
        </div>
        <div className="flex items-center justify-center gap-4 mb-4">
          <IconClock className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-lg text-primary-600">1-5 Days Processing</span>
        </div>
        <div className="flex items-center justify-center gap-3 p-3 bg-orange-50 dark:bg-orange-900/20 rounded border border-orange-200 dark:border-orange-800 mb-4">
          <IconClock className="w-5 h-5 text-orange-600" />
          <span className="font-bold text-orange-600">Rush Service: 1-3 Days (+$300)</span>
        </div>
        <div className="text-center">
          <span className="font-semibold text-lg text-primary-700">Everything You Need - One Price, Complete Service</span>
        </div>
      </div>
      Get every essential document you need for life in the United States with our comprehensive documentation package.
      From birth certificates to passports, we handle all your documentation needs with expert legal guidance and professional service.
    </>
  ),
  callToAction: {
    text: 'WhatsApp Consultation',
    href: 'https://wa.me/17135550123',
    icon: IconBrandWhatsapp,
  },
  callToAction2: {
    text: 'Get Complete Package',
    href: '#contact-document-package',
  },
  image: {
    src: '/completedocuments.webp',
    alt: 'Complete document package service',
  },
};

const documentsIncluded = {
  id: 'documents-included',
  hasBackground: false,
  header: {
    title: 'Complete Document Package Includes',
    subtitle: 'All essential documents for full legal documentation in the United States',
  },
  content: `Our comprehensive $5,000 package includes every major document you need to establish your legal presence,
    work authorization, identification, and access to services in the United States. No hidden fees, no surprises.`,
  items: [
    {
      title: 'Social Security Number (SSN)',
      description: 'Complete SSN application assistance with eligibility review, document preparation, and application submission to Social Security Administration.',
      icon: IconCreditCard,
    },
    {
      title: 'US Passport Application',
      description: 'Full passport application service including photos, forms, document verification, and expedited processing options.',
      icon: IconPassport,
    },
    {
      title: 'Birth Certificate Assistance',
      description: 'Certified birth certificate obtainment from appropriate vital records offices, including authentication and apostille services if needed.',
      icon: IconFileText,
    },
    {
      title: 'Driver\'s License Support',
      description: 'Complete assistance with state driver\'s license applications, including document preparation and DMV appointment coordination.',
      icon: IconCar,
    },
    {
      title: 'Marriage Certificate Services',
      description: 'Official marriage certificate obtainment, verification, and certification for immigration and legal purposes.',
      icon: IconHome,
    },
    {
      title: 'Additional Certificates',
      description: 'Certificate of Citizenship, Certificate of Naturalization, Consular Report of Birth Abroad, and other specialized documents as needed.',
      icon: IconCertificate,
    },
  ],
  image: {
    src: '/completedocumentprocess.jpg',
    alt: 'All documents included in package',
  },
  isReversed: false,
  isAfterContent: false,
};

const packageBenefits = {
  id: 'package-benefits',
  hasBackground: false,
  header: {
    title: 'Why Choose Our Complete Document Package?',
    subtitle: 'Comprehensive service that saves time, money, and eliminates stress',
  },
  items: [
    {
      title: 'Significant Cost Savings',
      description: 'Individual services would cost $8,000+. Our package price of $5,000 saves you over $3,000 while providing comprehensive coverage.',
      icon: IconDollarSign,
    },
    {
      title: 'Single Point of Contact',
      description: 'One attorney team handles all your documentation needs. No need to coordinate with multiple providers or agencies.',
      icon: IconUsers,
    },
    {
      title: 'Streamlined Process',
      description: 'We coordinate all applications simultaneously, reducing overall processing time and eliminating duplicate documentation.',
      icon: IconClock,
    },
    {
      title: 'Expert Legal Guidance',
      description: 'Immigration attorneys ensure all documents are properly prepared, reducing chances of delays, rejections, or complications.',
      icon: IconShield,
    },
    {
      title: 'Priority Processing',
      description: 'Package clients receive priority attention, dedicated case management, and expedited processing when available.',
      icon: IconStar,
    },
    {
      title: 'Complete Compliance',
      description: 'All documents meet federal and state requirements, ensuring acceptance by employers, banks, and government agencies.',
      icon: IconCheck,
    },
  ],
};

const packageProcess = {
  id: 'package-process',
  hasBackground: true,
  header: {
    title: 'Our Complete Document Package Process',
    subtitle: 'Comprehensive 6-step process from consultation to document delivery',
  },
  items: [
    {
      title: 'Initial Consultation & Assessment',
      description: 'Comprehensive review of your immigration status, current documents, and specific needs. We create a customized timeline and strategy for your complete documentation.',
      icon: IconUserCheck,
    },
    {
      title: 'Document Audit & Preparation',
      description: 'Complete audit of existing documents and preparation of all required paperwork for multiple applications. We ensure everything is ready before submission.',
      icon: IconClipboardCheck,
    },
    {
      title: 'Simultaneous Application Filing',
      description: 'Strategic filing of multiple applications to minimize processing time. We coordinate timing to ensure documents are processed efficiently.',
      icon: IconFileText,
    },
    {
      title: 'Application Monitoring & Updates',
      description: 'Continuous monitoring of all application statuses with regular client updates. We handle any additional requests from agencies.',
      icon: IconCalendar,
    },
    {
      title: 'Document Collection & Verification',
      description: 'Secure collection and verification of all completed documents. We ensure accuracy and proper certification before delivery.',
      icon: IconShield,
    },
    {
      title: 'Final Delivery & Support',
      description: 'Secure delivery of all documents with guidance on proper use and storage. Ongoing support for any questions or additional needs.',
      icon: IconPackage,
    },
  ],
  callToAction: {
    text: 'Start Your Package Today',
    href: '#contact-document-package',
  },
};

const packageFAQs = {
  id: 'faqs-document-package',
  hasBackground: false,
  header: {
    title: 'Complete Document Package FAQs',
    subtitle: 'Common questions about our comprehensive documentation service',
  },
  items: [
    {
      title: 'How long does the complete package take?',
      description: 'The entire package typically takes 3-6 months depending on government processing times. We coordinate all applications to minimize total time and provide regular updates throughout.',
      icon: IconChevronRight,
    },
    {
      title: 'What if I already have some of these documents?',
      description: 'We can customize the package based on your existing documents. The $5,000 price includes all documents, but we can adjust pricing for partial packages.',
      icon: IconChevronRight,
    },
    {
      title: 'Are there any additional fees?',
      description: 'The $5,000 covers all attorney fees and most government fees. You may need to pay for expedited processing, photos, or special courier services if requested.',
      icon: IconChevronRight,
    },
    {
      title: 'What if an application is denied?',
      description: 'We provide free resubmission and appeal services for any denials. Our expertise significantly reduces denial rates, and we stand behind our work.',
      icon: IconChevronRight,
    },
    {
      title: 'Can my family members get the same package?',
      description: 'Yes! We offer family package discounts for spouses and children. Contact us for customized family pricing that can save even more money.',
      icon: IconChevronRight,
    },
    {
      title: 'How do I get started?',
      description: 'Schedule a free consultation to discuss your specific needs. We\'ll review your situation and create a customized documentation plan with clear timelines.',
      icon: IconChevronRight,
    },
  ],
};

const documentPackageCallToAction = {
  id: 'cta-document-package',
  hasBackground: false,
  title: 'Ready to get your legal status?',
  subtitle: 'Get everything you need with our comprehensive $5,000 document package.',
  callToAction: {
    text: 'Schedule Free Consultation',
    href: '#contact-document-package',
  },
};

const packageContactData = {
  id: 'contact-document-package',
  hasBackground: true,
  header: {
    title: 'Get Your Complete Document Package Started',
    subtitle: 'Contact Morgan Dauterive LLP for comprehensive documentation services.',
  },
  content: 'Our experienced immigration attorneys are ready to help you obtain all essential documents through our comprehensive $5,000 package service.',
  items: [
    {
      title: 'Free Package Consultation',
      description: 'Discuss your documentation needs and get a customized package plan with clear timelines.',
      icon: IconPhoneCall,
    },
    {
      title: 'WhatsApp Support',
      description: 'Quick consultation and regular updates available through WhatsApp throughout the entire process.',
      icon: IconBrandWhatsapp,
    },
    {
      title: 'Complete Package Service',
      description: '$5,000 comprehensive service includes all essential documents with expert legal guidance.',
      icon: IconPackage,
    },
  ],
  form: {
    inputs: [
      {
        type: 'text',
        name: 'name',
        label: 'Full Name',
        placeholder: 'Your full legal name',
        autocomplete: 'name',
      },
      {
        type: 'email',
        name: 'email',
        label: 'Email Address',
        placeholder: 'your.email@example.com',
        autocomplete: 'email',
      },
      {
        type: 'tel',
        name: 'phone',
        label: 'Phone Number',
        placeholder: '(555) 123-4567',
        autocomplete: 'tel',
      },
      {
        type: 'text',
        name: 'immigration_status',
        label: 'Current Immigration Status',
        placeholder: 'e.g., DACA, H-1B, Green Card, Asylum, etc.',
      },
    ],
    radioBtns: {
      label: 'Which documents do you currently have?',
      radios: [
        { label: 'None - Need complete package' },
        { label: 'Some documents - Need partial package' },
        { label: 'Most documents - Need specific items' },
      ],
    },
    textarea: {
      cols: 30,
      rows: 5,
      name: 'message',
      label: 'Specific Documentation Needs',
      placeholder: 'Please describe which documents you need, any specific deadlines, family members who also need documentation, or any other relevant details about your situation...',
    },
    checkboxes: [
      { label: 'I agree to receive communication from Morgan Dauterive LLP regarding my complete document package inquiry.' },
      { label: 'I understand this consultation is confidential and protected by attorney-client privilege.' },
      { label: 'I am interested in learning about family package discounts if applicable.' },
    ],
    btn: {
      title: 'Get Complete Package Quote',
      type: 'submit',
    },
  },
};

export default function CompleteDocumentPackagePage() {
  return (
    <>
      <Hero {...documentPackageHero} />
      <Content {...documentsIncluded} />
      <Features {...packageBenefits} />
      <Steps {...packageProcess} />
      <FAQs {...packageFAQs} />
      <CallToAction2 {...documentPackageCallToAction} />
      <Contact {...packageContactData} />
    </>
  );
}
