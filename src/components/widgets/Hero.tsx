import Image from 'next/image';
import { HeroProps } from '~/shared/types';
import CTA from '../common/CTA';

const Hero = ({ title, subtitle, tagline, callToAction, callToAction2, image }: HeroProps) => {
  return (
    <section id="heroOne" className="professional-section gradient-bg dark:bg-gradient-to-br dark:from-amoled-black dark:to-amoled-950">
      <div className="container-custom">
        <div className="relative">
          {/* Hero Content */}
          <div className="text-center max-w-5xl mx-auto">
            {tagline && (
              <div className="mb-8">
                <span className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold bg-primary-50 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300 border border-primary-200 dark:border-primary-800">
                  {tagline}
                </span>
              </div>
            )}

            {title && (
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-neutral-warm-900 dark:text-amoled-50 mb-10 leading-tight">
                {title}
              </h1>
            )}

            <div className="max-w-4xl mx-auto mb-12">
              {subtitle && (
                <p className="text-xl md:text-2xl leading-relaxed text-neutral-warm-600 dark:text-amoled-300 font-normal">
                  {subtitle}
                </p>
              )}
            </div>

            {/* CTA Buttons - LawTrades Style */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              {callToAction && (
                <CTA
                  callToAction={callToAction}
                  linkClass="btn-lawtrades btn-lawtrades-primary px-8 py-4 text-base shadow-medium hover:shadow-large"
                />
              )}
              {callToAction2 && (
                <CTA
                  callToAction={callToAction2}
                  linkClass="btn-lawtrades btn-lawtrades-secondary px-8 py-4 text-base"
                />
              )}
            </div>
          </div>

          {/* Hero Image */}
          {image && (
            <div className="relative max-w-6xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden shadow-large bg-neutral-warm-100">
                <Image
                  className="w-full h-auto"
                  src={image.src}
                  alt={image.alt}
                  width={1200}
                  height={720}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                  loading="eager"
                  priority
                />
                {/* Subtle overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
              </div>

              {/* Background decoration */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-primary-100 rounded-2xl -z-10 opacity-40"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary-50 rounded-2xl -z-20 opacity-60"></div>
            </div>
          )}

          {/* Background decorative elements */}
          <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary-50 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-3/4 right-0 w-96 h-96 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
