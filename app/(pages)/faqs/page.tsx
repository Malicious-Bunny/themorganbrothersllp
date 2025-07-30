import type { Metadata } from 'next';

import { SITE } from '~/config.js';
import Hero from '~/components/widgets/Hero';
import FAQs from '~/components/widgets/FAQs';
import CallToAction2 from '~/components/widgets/CallToAction2';
import { IconQuestionMark, IconPhoneCall, IconBrandWhatsapp } from '@tabler/icons-react';

export const metadata: Metadata = {
  title: `Frequently Asked Questions - Morgan Dauterive LLP | Immigration Law FAQ`,
  description: 'Get answers to common immigration law questions about DACA, asylum, green cards, deportation defense, and other immigration matters.',
};

const faqHero = {
  title: (
    <>
      Frequently Asked <span className="text-accent-600">Questions</span>
    </>
  ),
  subtitle: (
    <>
      Find answers to common immigration law questions. If you don&apos;t find what you&apos;re looking for,
      contact us for a free consultation to discuss your specific situation.
    </>
  ),
  callToAction: {
    text: 'Free Consultation',
    href: '/contact',
    icon: IconPhoneCall,
  },
  callToAction2: {
    text: 'WhatsApp Us',
    href: 'https://wa.me/17135550123',
    icon: IconBrandWhatsapp,
  },
  image: {
    src: '/papers/doc-5.jpg',
    alt: 'Immigration attorney answering questions',
  },
};

const faqsData = {
  id: 'immigration-faqs',
  hasBackground: true,
  header: {
    title: 'Immigration Law Questions & Answers',
    subtitle: 'Get expert insights on common immigration concerns',
    tagline: 'FAQs',
  },
  columns: 1,
  items: [
    {
      title: 'What is DACA and am I eligible?',
      description: `DACA (Deferred Action for Childhood Arrivals) provides protection from deportation and work authorization for individuals who were brought to the US as children. To qualify, you must have: arrived in the US before age 16, been under 31 as of June 15, 2012, continuously resided in the US since June 15, 2007, been physically present in the US when DACA was announced and when filing your application, had no lawful status on June 15, 2012, and be currently in school, graduated from high school, obtained a GED, or be an honorably discharged veteran.`,
    },
    {
      title: 'How long does the asylum process take?',
      description: `The asylum process timeline varies significantly depending on your location and case complexity. Generally, you can expect: Initial asylum interview or court hearing within 21-45 days of filing (though delays are common), decision within 30 days of the interview, and if approved, you can apply for a green card after one year. The entire process from filing to green card can take 2-5 years or longer. Emergency cases may be expedited.`,
    },
    {
      title: 'Can undocumented immigrants get green cards?',
      description: `Yes, undocumented immigrants may qualify for green cards through several pathways: family-based petitions (adjustment of status if you entered legally), asylum or refugee status, U visa for crime victims, T visa for trafficking victims, VAWA for domestic violence survivors, special immigrant categories, or cancellation of removal in immigration court. Each pathway has specific requirements and not all require prior legal entry.`,
    },
    {
      title: 'What should I do if ICE comes to my home?',
      description: `If ICE comes to your home: Do not open the door unless they have a warrant signed by a judge, ask to see the warrant through the door, remain silent and do not answer questions, contact an immigration attorney immediately, have an emergency plan with family members, and never sign anything without legal representation. Remember that you have constitutional rights regardless of your immigration status.`,
    },
    {
      title: 'How much do immigration attorney services cost?',
      description: `Legal fees vary by case type and complexity. We offer free initial consultations to assess your case. Many services can be handled with affordable payment plans. DACA cases typically range from $1,500-$3,000, asylum cases from $3,000-$8,000, and family-based green cards from $2,500-$5,000. Emergency detention cases require immediate attention and fees are discussed case-by-case. We believe quality legal representation should be accessible.`,
    },
    {
      title: 'What is a U visa and do I qualify?',
      description: `U visas are for victims of qualifying crimes who assist law enforcement. Qualifying crimes include domestic violence, sexual assault, trafficking, kidnapping, and many others. To qualify, you must: be a victim of qualifying criminal activity, have suffered substantial physical or mental abuse, possess information about the crime, and be helpful in the investigation or prosecution. You need a law enforcement certification (Form I-918B). U visa holders can apply for green cards after 3 years.`,
    },
    {
      title: 'Can I travel outside the US with pending immigration cases?',
      description: `Travel during pending immigration cases can be risky and may abandon your case. DACA recipients can travel with advance parole approval, asylum applicants should not travel to their home country as it may be seen as abandoning their claim, pending adjustment of status applicants need advance parole, and U visa applicants should consult with an attorney before traveling. Always consult your attorney before making travel plans.`,
    },
    {
      title: 'What is TPS and which countries qualify?',
      description: `TPS (Temporary Protected Status) provides protection for nationals of countries facing ongoing armed conflict, natural disasters, or other extraordinary circumstances. Currently designated countries include Afghanistan, Burma (Myanmar), Cameroon, El Salvador, Ethiopia, Haiti, Honduras, Nepal, Nicaragua, Somalia, South Sudan, Sudan, Syria, Ukraine, Venezuela, and Yemen. TPS must be renewed periodically and provides work authorization.`,
    },
    {
      title: 'How can I protect my children if I am detained by ICE?',
      description: `To protect your children: create a family emergency plan designating who will care for them, prepare necessary documents (school records, medical information, identification), give trusted contacts power of attorney for educational and medical decisions, ensure children know their rights and emergency contacts, consider creating a 'know your rights' card for older children, and consult with an immigration attorney to establish legal protections in advance.`,
    },
    {
      title: 'What is cancellation of removal?',
      description: `Cancellation of removal is deportation defense available in immigration court for non-permanent residents who have been in the US continuously for 10+ years, demonstrate good moral character, show exceptional and extremely unusual hardship to US citizen or permanent resident spouse, child, or parent if removed, and meet other specific requirements. It results in permanent residence if granted. This is a complex process requiring experienced legal representation.`,
    },
    {
      title: 'Can I get a work permit while my case is pending?',
      description: `Work authorization depends on your case type: asylum applicants can apply 150 days after filing (with no delays caused by them), DACA recipients receive work permits as part of their approval, U visa applicants may be eligible if they're helpful to law enforcement, T visa applicants can receive work authorization, and VAWA self-petitioners may qualify. Adjustment of status applicants can apply once their case is filed. Each category has specific requirements and timelines.`,
    },
    {
      title: 'What happens if my immigration application is denied?',
      description: `If your application is denied: review the denial notice carefully for specific reasons, determine if you can appeal or file a motion to reopen/reconsider, assess alternative legal options, consult with an experienced immigration attorney immediately, be aware of deadlines for appeals (usually 30 days), and avoid falling out of status if possible. Many denials can be overcome with proper legal strategy and representation. Don't give up - options may still be available.`,
    },
  ],
};

const faqCallToAction = {
  id: 'faq-cta',
  hasBackground: true,
  title: 'Still Have Questions?',
  subtitle: 'Every immigration case is unique. Get personalized answers and expert legal guidance for your specific situation.',
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

export default function FAQPage() {
  return (
    <>
      <Hero {...faqHero} />
      <FAQs {...faqsData} />
      <CallToAction2 {...faqCallToAction} />
    </>
  );
}
