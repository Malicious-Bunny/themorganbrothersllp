import type { Metadata } from 'next';

import { SITE } from '~/config.js';

import Hero from '~/components/widgets/Hero';
import SocialProof from '~/components/widgets/SocialProof';
import Features from '~/components/widgets/Features';
import Services from '~/components/widgets/Services';
import Content from '~/components/widgets/Content';
import Steps from '~/components/widgets/Steps';
import FAQs2 from '~/components/widgets/FAQs2';

import Team from '~/components/widgets/Team';
import CallToAction2 from '~/components/widgets/CallToAction2';
import Contact from '~/components/widgets/Contact';
import {
  callToAction2Home,
  contactHome,
  contentHomeOne,
  contentHomeTwo,
  faqs2Home,

  heroHome,
  servicesHome,
  socialProofHome,
  stepsHome,
  teamHome,
} from '~/shared/data/pages/home.data';

export const metadata: Metadata = {
  title: SITE.title,
};

export default function Page() {
  return (
    <>
      <Hero {...heroHome} />
      <SocialProof {...socialProofHome} />
      <Content {...contentHomeOne} />
      <Content {...contentHomeTwo} />
      <Services {...servicesHome} />
      <Steps {...stepsHome} />
      <FAQs2 {...faqs2Home} />
      <Team {...teamHome} />
      <Contact {...contactHome} />
      <CallToAction2 {...callToAction2Home} />
    </>
  );
}
