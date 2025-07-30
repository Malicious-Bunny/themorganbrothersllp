import {
  ContactProps,
  FAQsProps,
  FeaturesProps,
  HeroProps,
  StatsProps,
  StepsProps,
  TeamProps,
} from '~/shared/types';
import hero2Img from '~/assets/images/hero2.jpg';
import {
  IconAdjustments,
  IconAward,
  IconBook,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBulb,
  IconCirclesRelation,
  IconClock,
  IconFlame,
  IconHeartHandshake,
  IconHomeEco,
  IconMail,
  IconMapPin,
  IconNumber1,
  IconNumber2,
  IconNumber3,
  IconNumber4,
  IconNumber5,
  IconPalette,
  IconPhoneCall,
  IconPuzzle2,
  IconScale,
  IconThumbUp,
  IconUser,
} from '@tabler/icons-react';

// Hero2 data on About page *******************
export const hero2About: HeroProps = {
  title: 'Protecting Immigrant Rights with Compassionate Legal Excellence',
  subtitle:
    'At Morgan Dauterive LLP, we understand that immigration law affects real people with real dreams. Our mission is to provide exceptional legal representation to undocumented immigrants, helping them navigate complex immigration processes and secure their rightful place in the United States.',
  tagline: 'About Morgan Dauterive LLP',
  callToAction: {
    text: 'Schedule Consultation',
    href: '/contact',
  },
  callToAction2: {
    text: 'View Our Services',
    href: '/services',
  },
  image: {
    src: '/papers/doc-1.jpg',
    alt: 'Immigration lawyers helping clients',
  },
};

// Stats data on About page *******************
export const statsAbout: StatsProps = {
  id: 'stats-on-about',
  hasBackground: true,
  items: [
    {
      title: 500,
      description: 'Cases Won',
    },
    {
      title: 15,
      description: 'Years Experience',
    },
    {
      title: 8,
      description: 'Practice Areas',
    },
    {
      title: 95,
      description: 'Success Rate %',
    },
  ],
};

// FeaturesFour data on About page *******************
export const featuresFourAbout: FeaturesProps = {
  id: 'features-four-on-about',
  hasBackground: false,
  header: {
    title: 'Our Mission',
    subtitle:
      'Morgan Dauterive LLP is dedicated to providing compassionate, expert legal representation to undocumented immigrants seeking safety, security, and legal status in the United States. We believe every person deserves the opportunity to build a better life and contribute to their community.',
    tagline: 'Mission and Values',
  },
};

// FeaturesFour data on About page (Two) *******************
export const featuresFourAboutTwo: FeaturesProps = {
  id: 'features-four-on-about-two',
  hasBackground: false,
  header: {
    title: 'Our Core Values',
    subtitle: 'The principles that guide every case we handle and every client we serve.',
  },
  isAfterContent: true,
  columns: 2,
  items: [
    {
      title: 'Compassionate Advocacy',
      description: 'We understand the fear and uncertainty our clients face, and we provide support with empathy and understanding.',
      icon: IconHeartHandshake,
    },
    {
      title: 'Legal Excellence',
      description: 'We stay current with ever-changing immigration laws and provide the highest quality legal representation.',
      icon: IconScale,
    },
    {
      title: 'Cultural Sensitivity',
      description: 'We respect and honor the diverse backgrounds of our clients, providing services in multiple languages.',
      icon: IconCirclesRelation,
    },
    {
      title: 'Transparent Communication',
      description: 'We keep our clients informed at every step, explaining complex legal processes in clear, understandable terms.',
      icon: IconUser,
    },
    {
      title: 'Accessible Justice',
      description: 'We offer flexible payment plans and work to ensure quality legal representation is available to those who need it most.',
      icon: IconAdjustments,
    },
    {
      title: 'Ethical Practice',
      description: 'We maintain the highest standards of professional ethics and never compromise on our commitment to client confidentiality.',
      icon: IconHomeEco,
    },
  ],
};

// Steps data on About page *******************
export const stepsAbout: StepsProps = {
  id: 'steps-on-about',
  hasBackground: true,
  isImageDisplayed: false,
  header: {
    title: 'Our Legal Journey',
    subtitle:
      'From our founding to today, Morgan Dauterive LLP has been dedicated to serving the immigrant community with unwavering commitment and expertise.',
    tagline: 'Our History',
  },
  items: [
    {
      title: 'Founded with Purpose',
      description:
        'Morgan Dauterive LLP was established with a clear mission: to provide expert legal representation to undocumented immigrants facing complex immigration challenges.',
      icon: IconNumber1,
    },
    {
      title: 'Building Expertise',
      description:
        'Through years of dedicated practice, we developed deep expertise in all areas of immigration law, from DACA applications to asylum cases and deportation defense.',
      icon: IconNumber2,
    },
    {
      title: 'Community Impact',
      description:
        'Our practice grew as we helped hundreds of families achieve legal status, reunite with loved ones, and build secure futures in the United States.',
      icon: IconNumber3,
    },
    {
      title: 'Comprehensive Services',
      description:
        'We expanded our practice areas to include all forms of immigration relief, ensuring we can help clients with diverse legal needs and circumstances.',
      icon: IconNumber4,
    },
    {
      title: 'Continuing Excellence',
      description:
        'Today, we continue to advocate tirelessly for immigrant rights, staying current with changing laws and providing compassionate, expert legal representation.',
      icon: IconNumber5,
    },
  ],
};

// Features3 data on About page *******************
export const features3About: FeaturesProps = {
  id: 'featuresThree-on-about',
  hasBackground: false,
  columns: 3,
  header: {
    title: 'Our Approach',
    subtitle:
      'We combine legal expertise with cultural understanding and compassionate service to provide the best possible representation for our clients.',
    tagline: 'Our Approach',
  },
  items: [
    {
      title: 'Client-Centered Service',
      description: 'Every client receives personalized attention and comprehensive support throughout their immigration journey.',
      icon: IconCirclesRelation,
    },
    {
      title: 'Multilingual Communication',
      description: 'We provide services in English and Spanish to ensure clear communication with all our clients.',
      icon: IconBook,
    },
    {
      title: 'Strategic Case Management',
      description: 'We develop comprehensive legal strategies tailored to each client\'s unique circumstances and goals.',
      icon: IconPuzzle2,
    },
    {
      title: 'Responsive Advocacy',
      description: 'We respond quickly to urgent immigration matters and provide emergency assistance when needed.',
      icon: IconFlame,
    },
    {
      title: 'Ethical Excellence',
      description: 'We maintain the highest standards of professional ethics and never compromise on our commitment to justice.',
      icon: IconScale,
    },
    {
      title: 'Community Partnership',
      description: 'We actively collaborate with community organizations to better serve the immigrant community.',
      icon: IconHeartHandshake,
    },
  ],
};

// Features data on About page *******************
export const featuresAbout: FeaturesProps = {
  id: 'features-on-about',
  hasBackground: true,
  header: {
    title: 'Our Track Record',
    subtitle:
      'Our success is measured by the lives we have changed and the families we have helped reunite. Here are some of our key achievements in immigration law.',
    tagline: 'Achievements',
  },
  columns: 1,
  items: [
    {
      title: '500+ Successful DACA Cases',
      description:
        'We have successfully helped over 500 young immigrants obtain and renew their DACA status, enabling them to work legally, pursue education, and contribute to their communities without fear of deportation.',
      icon: IconAward,
    },
    {
      title: '200+ Asylum Cases Won',
      description:
        'Our dedicated advocacy has secured asylum protection for over 200 individuals fleeing persecution, providing them with safety and the opportunity to rebuild their lives in the United States.',
      icon: IconAward,
    },
    {
      title: '300+ Families Reunited',
      description:
        'Through adjustment of status cases, family petitions, and other immigration remedies, we have helped reunite over 300 families, keeping loved ones together and building stronger communities.',
      icon: IconAward,
    },
  ],
};

// Team data on About page *******************
export const teamAbout: TeamProps = {
  id: 'team-on-about',
  hasBackground: false,
  header: {
    title: 'Meet Our Legal Team',
    subtitle:
      'Our experienced immigration attorneys are dedicated to providing compassionate, expert legal representation to help you achieve your immigration goals.',
    tagline: 'Our Team',
  },
  teams: [
    {
      name: 'Maria E. Dauterive',
      occupation: 'Founding Partner & Lead Immigration Attorney',
      image: {
        src: 'https://images.unsplash.com/photo-1594824723078-e6b0e2d87634?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'Maria E. Dauterive',
      },
      items: [
        {
          title: 'Connect on LinkedIn',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Carlos R. Morgan',
      occupation: 'Senior Partner & DACA Specialist',
      image: {
        src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'Carlos R. Morgan',
      },
      items: [
        {
          title: 'Connect on LinkedIn',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Ana L. Rodriguez',
      occupation: 'Associate Attorney & Asylum Specialist',
      image: {
        src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'Ana L. Rodriguez',
      },
      items: [
        {
          title: 'Connect on LinkedIn',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
    {
      name: 'Roberto Jimenez',
      occupation: 'Associate Attorney & Deportation Defense',
      image: {
        src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80',
        alt: 'Roberto Jimenez',
      },
      items: [
        {
          title: 'Connect on LinkedIn',
          icon: IconBrandLinkedin,
          href: '#',
        },
        {
          title: 'Contact by email',
          icon: IconMail,
          href: '#',
        },
      ],
    },
  ],
};



// FAQS data on About page *******************
export const faqsAbout: FAQsProps = {
  id: 'faqs-on-faqs',
  hasBackground: false,
  header: {
    title: 'Common Questions About Our Practice',
    subtitle:
      'Learn more about how we can help you with your immigration case and what to expect when working with our firm.',
    tagline: 'FAQs',
  },
  items: [
    {
      title: 'What makes Morgan Dauterive LLP different?',
      description: `We specialize exclusively in immigration law and understand the unique challenges faced by undocumented immigrants. Our compassionate approach combines legal expertise with cultural sensitivity to provide the best possible representation.`,
    },
    {
      title: 'What experience does your firm have?',
      description: `Our team has over 15 years of combined experience in immigration law, having successfully handled hundreds of cases including DACA, asylum, adjustment of status, and deportation defense.`,
    },
    {
      title: 'Do you offer services in languages other than English?',
      description: `Yes, we provide comprehensive legal services in both English and Spanish to ensure clear communication with all our clients throughout their immigration journey.`,
    },
    {
      title: 'How do you protect client confidentiality?',
      description: `All communications with our firm are protected by attorney-client privilege. We maintain strict confidentiality and will never share your information with immigration authorities without your explicit consent.`,
    },
    {
      title: 'Do you offer emergency assistance?',
      description: `Yes, we provide 24/7 emergency assistance for urgent situations including ICE detention, removal proceedings, and other time-sensitive immigration matters.`,
    },
    {
      title: 'What payment options do you offer?',
      description: `We offer flexible payment plans and work with clients to make quality legal representation accessible. We provide free initial consultations to discuss your case and explain all fees upfront.`,
    },
  ],
};

// Contact data on About page *******************
export const contactAbout: ContactProps = {
  id: 'contact-on-about',
  hasBackground: true,
  header: {
    title: 'Schedule Your Free Consultation',
    tagline: 'Contact Information',
  },
  content:
    'Ready to take the next step in your immigration journey? Contact Morgan Dauterive LLP today to schedule your free consultation. We\'re here to help you understand your options and guide you through every step of the process.',
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
  ],
  form: {
    title: 'Quick Contact Form',
    inputs: [
      {
        type: 'text',
        label: 'Full Name',
        name: 'name',
        placeholder: 'Enter your full name',
        autocomplete: 'name',
      },
      {
        type: 'email',
        label: 'Email Address',
        name: 'email',
        placeholder: 'Enter your email address',
        autocomplete: 'email',
      },
      {
        type: 'tel',
        label: 'Phone Number',
        name: 'phone',
        placeholder: 'Enter your phone number',
        autocomplete: 'tel',
      },
    ],
    textarea: {
      cols: 30,
      rows: 4,
      label: 'Brief Description of Your Immigration Matter',
      name: 'message',
      placeholder: 'Please briefly describe your immigration situation or question...',
    },
    checkboxes: [
      {
        label: 'I understand this form does not create an attorney-client relationship',
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
