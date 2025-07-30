import Headline from '../common/Headline';
import Collapse from '../common/Collapse';
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { FAQsProps, Item } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const FAQs2 = ({ header, items, id, hasBackground = false }: FAQsProps) => (
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

    <div className="max-w-4xl mx-auto">
      <Collapse
        items={items as Item[]}
        classCollapseItem="faq-item mb-4 last:mb-0"
        iconUp={<IconChevronUp className="h-5 w-5 text-primary-700 transition-colors duration-200" />}
        iconDown={<IconChevronDown className="h-5 w-5 text-primary-700 transition-colors duration-200" />}
      />
    </div>
  </WidgetWrapper>
);

export default FAQs2;
