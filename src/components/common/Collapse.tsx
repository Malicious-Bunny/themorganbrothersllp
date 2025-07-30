'use client';

import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import useCollapse from '~/hooks/useCollapse';
import { CollapseProps } from '~/shared/types';

const Collapse = ({ items, classCollapseItem, iconUp, iconDown }: CollapseProps) => {
  const { activeIndex, handleSetIndex } = useCollapse();

  return (
    <div className="space-y-4">
      {items.map(({ title, description }, index) => (
        <div
          key={`accordion-${index}`}
          className={classCollapseItem}
        >
          <button
            onClick={() => handleSetIndex(index)}
            className="w-full flex justify-between items-center p-6 text-left hover:bg-neutral-warm-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-xl"
            id={`accordion__heading-${index}`}
            aria-expanded={activeIndex === index}
            aria-controls={`accordion__panel-${index}`}
            style={{ WebkitTapHighlightColor: 'transparent' }}
          >
            <h3 className="text-lg font-semibold text-neutral-warm-900 pr-4">{title}</h3>
            <div className="flex-shrink-0">
              {iconDown && iconUp ? (
                activeIndex === index ? (
                  iconUp
                ) : (
                  iconDown
                )
              ) : activeIndex === index ? (
                <IconChevronUp className="h-5 w-5 text-primary-700" />
              ) : (
                <IconChevronDown className="h-5 w-5 text-primary-700" />
              )}
            </div>
          </button>
          {activeIndex === index && (
            <div
              className="px-6 pb-6 transition-all duration-200"
              aria-labelledby={`accordion__heading-${index}`}
              id={`accordion__panel-${index}`}
            >
              <p className="text-neutral-warm-600 leading-relaxed">{description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Collapse;
