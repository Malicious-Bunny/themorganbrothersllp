import { IconClock, IconHeadset, IconHelp, IconMapPin, IconMessages, IconPhoneCall, IconBrandWhatsapp } from '@tabler/icons-react';
import { ContactProps, FeaturesProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';

// Hero data on Contact page *******************
export const heroContact: HeroProps = {
  title: 'Schedule Your Free Immigration Consultation',
  subtitle: (
    <>
      <span className="hidden md:inline">{`Don't navigate the complex immigration system alone. Morgan Dauterive LLP is here to help you secure your legal status in the United States.`}</span>{' '}
      {`Contact us today for expert immigration legal representation.`}
    </>
  ),
  tagline: 'Contact Morgan Dauterive LLP',
};

// Contact data on Contact page *******************
export const contact2Contact: ContactProps = {
  id: 'contactTwo-on-contact',
  hasBackground: true,
  header: {
    title: 'Contact Morgan Dauterive LLP',
    subtitle: (
      <>
        Schedule your free consultation today.{' '}
        <span className="hidden md:inline">{`Our experienced immigration attorneys are ready to evaluate your case and discuss your legal options.`}</span>
      </>
    ),
  },
  items: [
    {
      title: 'Houston Office',
      description: ['123 Main Street, Suite 400', 'Houston, TX 77002', 'Free parking available'],
      icon: IconMapPin,
    },
    {
      title: 'Contact Information',
      description: ['Office: (713) 555-0123', 'Fax: (713) 555-0130', 'Email: info@morgandauterrivellp.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Office Hours',
      description: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 2:00 PM', 'Sunday: Closed', 'Evening appointments available'],
      icon: IconClock,
    },
    {
      title: 'Emergency & After-Hours',
      description: ['Detention emergencies: (713) 555-0124', 'WhatsApp consultations: (713) 555-0125', '24/7 emergency deportation defense'],
      icon: IconBrandWhatsapp,
    },
  ],
  form: {
    title: 'Schedule Your Free Consultation',
    inputs: [
      {
        type: 'text',
        name: 'firstName',
        label: 'First Name',
        autocomplete: 'given-name',
        placeholder: 'Enter your first name',
      },
      {
        type: 'text',
        name: 'lastName',
        label: 'Last Name',
        autocomplete: 'family-name',
        placeholder: 'Enter your last name',
      },
      {
        type: 'email',
        name: 'email',
        label: 'Email Address',
        autocomplete: 'email',
        placeholder: 'Enter your email address',
      },
      {
        type: 'tel',
        name: 'phone',
        label: 'Phone Number',
        autocomplete: 'tel',
        placeholder: 'Enter your phone number',
      },
    ],
    radioBtns: {
      label: 'What type of immigration assistance do you need?',
      radios: [
        {
          label: 'DACA Application/Renewal',
        },
        {
          label: 'Asylum Case',
        },
        {
          label: 'Adjustment of Status (Green Card)',
        },
        {
          label: 'Deportation Defense',
        },
        {
          label: 'U-Visa or T-Visa',
        },
        {
          label: 'VAWA Self-Petition',
        },
        {
          label: 'TPS Application',
        },
        {
          label: 'US Passport Application/Renewal',
        },
        {
          label: 'Birth Certificate',
        },
        {
          label: 'Consular Report of Birth Abroad',
        },
        {
          label: 'Certificate of Citizenship',
        },
        {
          label: 'Certificate of Naturalization',
        },
        {
          label: 'Other/Consultation',
        },
      ],
    },
    textarea: {
      cols: 30,
      rows: 6,
      label: 'Detailed Description of Your Immigration Matter',
      name: 'message',
      placeholder: 'Please provide details about your immigration situation, including timeline, current status, and any deadlines you may be facing...',
    },
    checkboxes: [
      {
        label: 'I understand that this form does not create an attorney-client relationship and that no confidential information should be included',
        value: '',
      },
      {
        label: 'I consent to receive communications from Morgan Dauterive LLP regarding my immigration matter',
        value: '',
      },
      {
        label: 'I understand that consultations are confidential and protected by attorney-client privilege once established',
        value: '',
      },
    ],
    btn: {
      title: 'Request Free Consultation',
      type: 'submit',
    },
  },
};

// Feature2 data on Contact page *******************
export const features2Contact: FeaturesProps = {
  columns: 3,
  header: {
    title: 'Additional Support Resources',
    subtitle: 'Access the help you need for your immigration case',
  },
  items: [
    {
      title: 'Immigration FAQs',
      description: 'Find answers to common immigration questions and learn about our services',
      icon: IconHelp,
      callToAction: {
        text: 'View Immigration FAQs',
        href: '/faqs',
      },
    },
    {
      title: 'Case Status Updates',
      description: 'Get updates on your case status and communicate with your attorney',
      icon: IconMessages,
      callToAction: {
        text: 'Client Portal Access',
        href: '#',
      },
    },
    {
      title: 'Emergency Legal Help',
      description: '24/7 emergency assistance for deportation defense and detention cases',
      icon: IconHeadset,
      callToAction: {
        text: 'Emergency Hotline',
        href: 'tel:(713)555-0124',
      },
    },
  ],
};
