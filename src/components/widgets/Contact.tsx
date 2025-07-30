import Form from '../common/Form';
import Headline from '../common/Headline';
import { ContactProps } from '~/shared/types';
import WidgetWrapper from '../common/WidgetWrapper';

const Contact = ({ header, content, items, form, id, hasBackground = false }: ContactProps) => (
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

    <div className={`grid ${!content && !items ? 'lg:grid-cols-1 max-w-3xl mx-auto' : 'lg:grid-cols-2'} gap-16 lg:gap-20 items-start`}>
      {/* Contact Information */}
      {(content || items) && (
        <div className="space-y-8">
          {content && (
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-neutral-warm-600 leading-relaxed">{content}</p>
            </div>
          )}

          {items && (
            <div className="space-y-8">
              {items.map(({ title, description, icon: Icon }, index) => (
                <div key={`contact-item-${index}`} className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-primary-100 text-primary-800 rounded-2xl flex items-center justify-center">
                      {Icon && <Icon className="w-7 h-7" />}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-neutral-warm-900">{title}</h3>
                    {typeof description === 'string' ? (
                      <p className="text-neutral-warm-600 text-lg leading-relaxed">
                        {description}
                      </p>
                    ) : (
                      description &&
                      description.map((desc, descIndex) => (
                        <p key={`description-${descIndex}`} className="text-neutral-warm-600 text-lg leading-relaxed">
                          {desc}
                        </p>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Contact Form */}
      <div className="w-full">
        <div className="card p-8 lg:p-10">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-neutral-warm-900 mb-3">Get in Touch</h3>
            <p className="text-neutral-warm-600 text-lg">
              Ready to start your immigration journey? Contact us for a consultation.
            </p>
          </div>
          <Form
            {...form}
            containerClass="space-y-6"
            btnPosition="left"
            btnClass="btn btn-primary w-full sm:w-auto px-8 py-4 text-base font-semibold"
          />
        </div>
      </div>
    </div>
  </WidgetWrapper>
);

export default Contact;
