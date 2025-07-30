import { Badge } from "~/components/ui/badge";
import { IconArrowRight } from '@tabler/icons-react';
import Image from 'next/image';

interface ServiceItemProps {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  href: string;
  price: string;
  badge?: string;
}

function ServiceItem({ title, description, image, href, price, badge = "Service" }: ServiceItemProps) {
  return (
    <div className="w-full group">
      <div className="card h-full flex flex-col overflow-hidden group-hover:shadow-large transition-all duration-300">
        {/* Image Section */}
        <div className="relative h-56 w-full overflow-hidden bg-neutral-warm-100">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className="p-8 flex flex-col h-full">
          {/* Header with Badge and Price */}
          <div className="flex items-center justify-between mb-6">
            <Badge
              variant="outline"
              className="bg-primary-50 text-primary-800 border-primary-200 font-medium px-3 py-1"
            >
              {badge}
            </Badge>
            <div className="text-right">
              <span className="text-xl font-bold text-primary-900">{price}</span>
            </div>
          </div>

          {/* Title and Description */}
          <div className="flex-grow space-y-4">
            <h3 className="text-2xl font-bold text-neutral-warm-900 leading-tight group-hover:text-primary-800 transition-colors duration-200">
              {title}
            </h3>
            <p className="text-neutral-warm-600 leading-relaxed text-base">
              {description}
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-8 pt-6 border-t border-neutral-warm-100">
            <a
              href={href}
              className="inline-flex items-center gap-2 text-primary-700 hover:text-primary-800 font-semibold text-base transition-colors duration-200 group/cta"
            >
              Learn More
              <IconArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform duration-200" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ServiceItem };
