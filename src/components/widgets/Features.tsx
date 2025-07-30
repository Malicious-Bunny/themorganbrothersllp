import { FeaturesProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import CTA from '../common/CTA';

const Features = ({ id, header, items, columns = 3, hasBackground = false }: FeaturesProps) => (
  <WidgetWrapper
    id={id ? id : ''}
    hasBackground={hasBackground}
    containerClass="section-spacing container-custom"
  >
    {header && (
      <div className="text-center max-w-4xl mx-auto mb-16">
        <Headline
          header={header}
          titleClass="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-warm-900 mb-6 tracking-tight"
          subtitleClass="text-lg md:text-xl text-neutral-warm-600 leading-relaxed"
        />
      </div>
    )}

    {items && (
      <div className={`feature-grid ${
        columns === 4
          ? 'lg:grid-cols-4 md:grid-cols-2'
          : columns === 2
          ? 'md:grid-cols-2'
          : 'lg:grid-cols-3 md:grid-cols-2'
      } gap-8 lg:gap-12`}>
        {items.map(({ title, description, callToAction }, index) => (
          <div
            key={id ? `feature-${id}-${index}` : `feature-${index}`}
            className="feature-card group"
          >
            {/* Content Section - Professional Typography */}
            <div className="space-y-4">
              {title && (
                <h3 className="text-xl md:text-2xl font-bold text-neutral-warm-900 leading-tight">
                  {title}
                </h3>
              )}

              {description && (
                <p className="text-neutral-warm-600 leading-relaxed">
                  {description}
                </p>
              )}

              {callToAction && (
                <div className="pt-4">
                  <CTA
                    callToAction={callToAction}
                    linkClass="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors duration-200"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    )}
  </WidgetWrapper>
);

export default Features;
