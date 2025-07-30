import type { Metadata } from 'next';

import Hero from '~/components/widgets/Hero';
import Content from '~/components/widgets/Content';
import Features from '~/components/widgets/Features';
import Steps from '~/components/widgets/Steps';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import { IconShield, IconHeart, IconUsers, IconPhoneCall, IconBrandWhatsapp, IconCheck, IconClock, IconHome, IconFileText, IconScale, IconCash } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: 'VAWA Self-Petition - Morgan Dauterive LLP | Domestic Violence Immigration Relief',
  description: 'Expert VAWA self-petition assistance for survivors of domestic violence by US citizens or permanent residents. Confidential legal help for all genders.',
};

const vawaHero = {
  title: (
    <>
      VAWA Self-Petition <span className="hidden md:inline">for</span> <span>Domestic Violence</span>{' '}
      <span className="sm:whitespace-nowrap text-accent-600">Survivors</span>
    </>
  ),
  subtitle: (
    <>
      <div className="mb-6 p-4 bg-primary-50 dark:bg-primary-900/20 rounded-lg border border-primary-200 dark:border-primary-800">
        <div className="flex items-center gap-3 mb-2">
          <IconCash className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-xl text-primary-600">$2,500 Attorney Fee</span>
        </div>
        <div className="flex items-center gap-3">
          <IconClock className="w-6 h-6 text-primary-600" />
          <span className="font-bold text-lg text-primary-600">18-24 Months Processing Time</span>
        </div>
      </div>
      The Violence Against Women Act (VAWA) provides immigration protection for survivors of domestic violence,
      battery, and extreme cruelty by US citizens or permanent residents, regardless of gender. Our attorneys provide
      confidential, trauma-informed legal assistance to help survivors achieve safety and legal status.
    </>
  ),
  callToAction: {
    text: 'Confidential VAWA Consultation',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'Emergency Support',
    href: 'https://wa.me/17135550123',
  },
  image: {
    src: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Support and protection for domestic violence survivors',
  },
};

const vawaContent = {
  id: 'vawa-overview',
  hasBackground: true,
  header: {
    title: 'What is VAWA Self-Petition?',
    subtitle: 'Immigration Protection for Domestic Violence Survivors',
    tagline: 'VAWA Overview',
  },
  content: `VAWA self-petition allows survivors of domestic violence, battery, or extreme cruelty by US citizen or permanent resident spouses, parents, or children to petition for themselves without the abuser's knowledge or consent.`,
  items: [
    {
      title: 'Independent Petition',
      description: 'File for immigration status without your abuser\'s knowledge or participation.',
    },
    {
      title: 'Protection from Removal',
      description: 'VAWA provides protection from deportation while your case is pending.',
    },
    {
      title: 'Work Authorization',
      description: 'Eligible to apply for employment authorization after VAWA approval.',
    },
    {
      title: 'Path to Green Card',
      description: 'VAWA approval can lead to permanent residence (green card) application.',
    },
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    alt: 'Legal consultation and support for survivors',
  },
  isReversed: false,
  isAfterContent: false,
};

const vawaEligibility = {
  id: 'vawa-eligibility',
  hasBackground: false,
  columns: 2,
  header: {
    title: 'VAWA Self-Petition Eligibility',
    subtitle: 'Requirements for VAWA protection',
    tagline: 'Eligibility',
  },
  items: [
    {
      title: 'Qualifying Relationship',
      description: 'Must be married to, child of, or parent of a US citizen or permanent resident who abused you.',
      icon: IconUsers,
    },
    {
      title: 'Battery or Extreme Cruelty',
      description: 'Must have been subjected to battery or extreme cruelty by the qualifying relative.',
      icon: IconShield,
    },
    {
      title: 'Good Moral Character',
      description: 'Must demonstrate good moral character (with exceptions for acts related to the abuse).',
      icon: IconCheck,
    },
    {
      title: 'Residence Requirement',
      description: 'Must have resided with the abuser at some point (exceptions may apply).',
      icon: IconHome,
    },
  ],
};

const vawaPricingDetails = {
  id: 'vawa-pricing-details',
  hasBackground: true,
  columns: 3,
  header: {
    title: 'VAWA Service Pricing & Timeline',
    subtitle: 'Confidential legal representation for domestic violence survivors',
    tagline: 'Investment & Timeline',
  },
  items: [
    {
      title: 'Attorney Fees',
      description: 'Complete VAWA self-petition preparation, evidence gathering, filing, and ongoing representation throughout the process.',
      icon: IconFileText,
      callToAction: {
        text: '$2,500',
        href: '#',
      },
    },
    {
      title: 'Government Filing Fee',
      description: 'No filing fee required for VAWA self-petitions (Form I-360).',
      icon: IconShield,
      callToAction: {
        text: '$0',
        href: '#',
      },
    },
    {
      title: 'Initial Processing Time',
      description: 'Current USCIS processing times for VAWA self-petitions vary by service center.',
      icon: IconClock,
      callToAction: {
        text: '16-33 months',
        href: '#',
      },
    },
    {
      title: 'Work Authorization',
      description: 'Eligible to apply for employment authorization after VAWA petition approval.',
      icon: IconCheck,
      callToAction: {
        text: 'After approval',
        href: '#',
      },
    },
    {
      title: 'Protection Duration',
      description: 'VAWA approval provides indefinite protection until you can apply for permanent residence.',
      icon: IconScale,
      callToAction: {
        text: 'Indefinite',
        href: '#',
      },
    },
    {
      title: 'Green Card Application',
      description: 'After VAWA approval, eligible to apply for permanent residence with priority date protection.',
      icon: IconUsers,
      callToAction: {
        text: 'After approval',
        href: '#',
      },
    },
  ],
};

const vawaProcess = {
  id: 'vawa-process',
  hasBackground: false,
  header: {
    title: 'VAWA Self-Petition Process',
    subtitle: 'Step-by-step guide to securing VAWA protection',
    tagline: 'Process',
  },
  items: [
    {
      title: 'Confidential Case Assessment',
      description: 'We conduct a safe, confidential evaluation of your abuse situation and VAWA eligibility.',
      icon: IconShield,
    },
    {
      title: 'Evidence & Documentation',
      description: 'We help gather evidence of abuse, relationship, and good moral character in a trauma-informed manner.',
      icon: IconFileText,
    },
    {
      title: 'Prepare VAWA Self-Petition',
      description: 'We prepare your complete VAWA self-petition (Form I-360) with supporting evidence and personal statement.',
      icon: IconHeart,
    },
    {
      title: 'File Petition Confidentially',
      description: 'Your VAWA petition is filed confidentially - USCIS cannot share information with your abuser.',
      icon: IconCheck,
    },
    {
      title: 'Approval & Next Steps',
      description: 'Upon approval, we help you apply for work authorization and plan for permanent residence application.',
      icon: IconUsers,
    },
  ],
};

const vawaPricing = {
  id: 'vawa-pricing',
  hasBackground: true,
  title: 'Get VAWA Protection Today',
  subtitle: 'Complete VAWA self-petition services for $2,500 attorney fees. No government filing fee required. Confidential consultation for abuse survivors.',
  callToAction: {
    text: 'Schedule Confidential Consultation',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'Crisis Support WhatsApp',
    href: 'https://wa.me/17135550123',
    icon: IconBrandWhatsapp,
  },
};

const contactVawa = {
  id: 'contact-vawa',
  hasBackground: false,
  header: {
    title: 'Domestic Violence Survivor Support',
    subtitle: 'Confidential legal assistance for VAWA self-petitions',
    tagline: 'Get Help Now',
  },
  content: 'If you are a survivor of domestic violence, you deserve protection and independence. Our experienced attorneys provide confidential, trauma-informed legal representation to help you secure VAWA protection.',
  items: [
    {
      title: 'Confidential & Safe',
      description: ['All communications protected', 'Safe meeting locations', 'USCIS confidentiality protections'],
      icon: IconShield,
    },
    {
      title: 'Trauma-Informed Approach',
      description: ['Sensitive to abuse trauma', 'Understanding of DV dynamics', 'Supportive legal guidance'],
      icon: IconHeart,
    },
    {
      title: 'Available for All Genders',
      description: ['Women survivors', 'Men survivors', 'LGBTQ+ survivors'],
      icon: IconUsers,
    },
  ],
  form: {
    title: 'Start Your VAWA Case (Completely Confidential)',
    inputs: [
      {
        type: 'text',
        name: 'name',
        placeholder: 'Your full name',
      },
      {
        type: 'email',
        name: 'email',
        placeholder: 'Your safe email address',
      },
      {
        type: 'tel',
        name: 'phone',
        placeholder: 'Your safe phone number',
      },
    ],
    textarea: {
      cols: 30,
      rows: 5,
      name: 'textarea',
      placeholder: 'Briefly describe your situation (all information is completely confidential)...',
    },
    btn: {
      title: 'Get Confidential VAWA Help',
      type: 'submit',
    },
  },
};

export default function VawaPage() {
  return (
    <>
      <Hero {...vawaHero} />
      <Content {...vawaContent} />
      <Features {...vawaEligibility} />
      <Features {...vawaPricingDetails} />
      <Steps {...vawaProcess} />
      <CallToAction2 {...vawaPricing} />
      <Contact {...contactVawa} />
    </>
  );
}
