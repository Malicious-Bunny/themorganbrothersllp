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
      title: 'Office Location',
      description: ['123 Main Street, Suite 400', 'Houston, TX 77002'],
      icon: IconMapPin,
    },
    {
      title: 'Contact Information',
      description: ['Phone: (713) 555-0123', 'Email: info@morgandauterrivellp.com'],
      icon: IconPhoneCall,
    },
    {
      title: 'Office Hours',
      description: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 10:00 AM - 2:00 PM', 'Sunday: Closed'],
      icon: IconClock,
    },
    {
      title: 'Emergency Contact',
      description: ['After-hours emergencies: (713) 555-0124', 'WhatsApp: (713) 555-0125'],
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
          label: 'Other/Consultation',
        },
      ],
    },
    textarea: {
      cols: 30,
      rows: 5,
      label: 'Brief Description of Your Case',
      name: 'message',
      placeholder: 'Please provide a brief description of your immigration situation...',
    },
    checkboxes: [
      {
        label: 'I understand that this form does not create an attorney-client relationship',
        value: '',
      },
      {
        label: 'I consent to receive communications from Morgan Dauterive LLP',
        value: '',
      },
    ],
    btn: {
      title: 'Schedule Free Consultation',
      type: 'submit',
    },
  },
};

// Feature2 data on Contact page *******************
export const features2Contact: FeaturesProps = {
  columns: 3,
  header: {
    title: 'Support Center',
    subtitle: 'Looking for something in particular?',
  },
  items: [
    {
      title: 'Have a question?',
      description: 'See our frequently asked questions',
      icon: IconHelp,
      callToAction: {
        text: 'Go to FAQ page',
        href: '/faqs',
      },
    },
    {
      title: 'Chat with us',
      description: 'Live chat with our support team',
      icon: IconMessages,
      callToAction: {
        text: 'Write to us',
        href: '/',
      },
    },
    {
      title: 'Get help',
      description: 'Speak to our team today',
      icon: IconHeadset,
      callToAction: {
        text: 'Call us',
        href: '/',
      },
    },
  ],
};
