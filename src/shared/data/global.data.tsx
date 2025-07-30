import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconChevronDown,
  IconPhone,
  IconMail,
} from '@tabler/icons-react';
import { AnnouncementProps, FooterProps, HeaderProps } from '../types';

// Announcement data
export const announcementData: AnnouncementProps = {
  title: 'URGENT',
  callToAction: {
    text: 'Free emergency consultations available 24/7 for ICE detention cases »',
    href: '/contact',
  },
  callToAction2: {
    text: 'Call (713) 555-0124',
    href: 'tel:+17135550124',
  },
};

// Header data
export const headerData: HeaderProps = {
  links: [
    {
      label: 'Immigration Services',
      icon: IconChevronDown,
      links: [
        {
          label: 'DACA (Childhood Arrivals)',
          href: '/daca',
        },
        {
          label: 'Asylum Applications',
          href: '/asylum',
        },
        {
          label: 'Adjustment of Status',
          href: '/adjustment-of-status',
        },
        {
          label: 'U Visa (Crime Victims)',
          href: '/u-visa',
        },
        {
          label: 'T Visa (Trafficking)',
          href: '/t-visa',
        },
        {
          label: 'VAWA Protection',
          href: '/vawa',
        },
        {
          label: 'TPS (Protected Status)',
          href: '/tps',
        },
        {
          label: 'Cancellation of Removal',
          href: '/cancellation-of-removal',
        },
      ],
    },
    {
      label: 'Citizenship & Documents',
      icon: IconChevronDown,
      links: [
        {
          label: 'US Passport',
          href: '/us-passport',
        },
        {
          label: 'Birth Certificate',
          href: '/birth-certificate',
        },
        {
          label: 'Marriage Certificate',
          href: '/marriage-certificate',
        },
        {
          label: 'Driver\'s License',
          href: '/drivers-license',
        },
        {
          label: 'Social Security Number',
          href: '/social-security',
        },
        {
          label: 'Consular Report of Birth Abroad',
          href: '/consular-report-birth-abroad',
        },
        {
          label: 'Certificate of Citizenship',
          href: '/certificate-of-citizenship',
        },
        {
          label: 'Certificate of Naturalization',
          href: '/certificate-of-naturalization',
        },
      ],
    },
    {
      label: 'About',
      href: '/about',
    },
    {
      label: 'FAQ',
      href: '/faqs',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ],
  actions: [
    {
      text: 'WhatsApp',
      href: 'https://wa.me/17135550123',
      targetBlank: true,
      icon: IconBrandWhatsapp,
    },
  ],
  isSticky: true,
  showToggleTheme: false,
  showRssFeed: false,
  position: 'right',
};

// Footer data
export const footerData: FooterProps = {
  title: 'Morgan Dauterive LLP',
  links: [
    {
      label: 'Terms & Conditions',
      href: '/terms',
    },
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
  columns: [
    {
      title: 'Immigration Services',
      links: [
        {
          label: 'DACA Applications',
          href: '/daca',
        },
        {
          label: 'Asylum Cases',
          href: '/asylum',
        },
        {
          label: 'Green Card Applications',
          href: '/adjustment-of-status',
        },
        {
          label: 'U Visa for Crime Victims',
          href: '/u-visa',
        },
        {
          label: 'T Visa for Trafficking',
          href: '/t-visa',
        },
        {
          label: 'VAWA Protection',
          href: '/vawa',
        },
        {
          label: 'TPS Applications',
          href: '/tps',
        },
        {
          label: 'Deportation Defense',
          href: '/cancellation-of-removal',
        },
      ],
    },
    {
      title: 'Citizenship & Documents',
      links: [
        {
          label: 'US Passport',
          href: '/us-passport',
        },
        {
          label: 'Birth Certificate',
          href: '/birth-certificate',
        },
        {
          label: 'Marriage Certificate',
          href: '/marriage-certificate',
        },
        {
          label: 'Driver\'s License',
          href: '/drivers-license',
        },
        {
          label: 'Social Security Number',
          href: '/social-security',
        },
        {
          label: 'Consular Report Birth Abroad',
          href: '/consular-report-birth-abroad',
        },
        {
          label: 'Certificate of Citizenship',
          href: '/certificate-of-citizenship',
        },
        {
          label: 'Certificate of Naturalization',
          href: '/certificate-of-naturalization',
        },
      ],
    },
    {
      title: 'About Us',
      links: [
        {
          label: 'Our Law Firm',
          href: '/about',
        },
        {
          label: 'Our Attorneys',
          href: '/about#team',
        },
        {
          label: 'Service Areas',
          href: '/services',
        },
      ],
    },
    {
      title: 'Get Help',
      links: [
        {
          label: 'Free Consultation',
          href: '/contact',
        },
        {
          label: 'Emergency Contact',
          href: 'tel:+17135550124',
        },
        {
          label: 'WhatsApp Us',
          href: 'https://wa.me/17135550123',
        },
        {
          label: 'FAQ',
          href: '/faqs',
        },
      ],
    },
  ],
  socials: [
    { label: 'WhatsApp', icon: IconBrandWhatsapp, href: 'https://wa.me/17135550123' },
    { label: 'LinkedIn', icon: IconBrandLinkedin, href: '#' },
    { label: 'Facebook', icon: IconBrandFacebook, href: '#' },
    { label: 'Instagram', icon: IconBrandInstagram, href: '#' },
  ],
  footNote: (
    <div className="mr-4 text-sm dark:text-slate-400">
      <span className="float-left mr-1.5 h-5 w-5 rounded-sm bg-[url('/favicon.ico')] bg-cover md:-mt-0.5 md:h-6 md:w-6"></span>
      Made by{' '}
      <a
        className="text-gray-700 hover:text-primary-600 dark:text-gray-300 hover:dark:text-primary-600"
        href="https://morgan-dauterive-llp.com/"
      >
        {' '}
        Morgan Dauterive LLP
      </a>{' '}
      · All rights reserved. Attorney advertising.
    </div>
  ),
};
