import { ServiceItem } from '~/components/ui/service-item';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import { FeaturesProps } from '~/shared/types';

const Services = ({ id, header, items, hasBackground = false }: FeaturesProps) => (
  <WidgetWrapper
    id={id ? id : ''}
    hasBackground={hasBackground}
    containerClass="section-spacing container-custom"
  >
    {header && (
      <div className="text-center max-w-4xl mx-auto mb-16">
        <Headline
          header={header}
          titleClass="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-warm-900 mb-6"
          subtitleClass="text-xl text-neutral-warm-600 leading-relaxed"
        />
      </div>
    )}

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
      {items?.map((service, index) => (
        <ServiceItem
          key={index}
          title={service.title as string}
          description={Array.isArray(service.description) ? service.description.join(' ') : (service.description as string)}
          image={(service as any).image || {
            src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            alt: service.title as string
          }}
          href={service.callToAction?.href || '#'}
          price={(service as any).price || 'Contact Us'}
          badge="Immigration Law"
        />
      ))}
    </div>
  </WidgetWrapper>
);

export default Services;
