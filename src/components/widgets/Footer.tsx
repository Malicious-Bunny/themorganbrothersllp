import { footerData } from '~/shared/data/global.data';
import Logo from '../atoms/Logo';

const Footer = () => {
  const { title, links, columns, socials, footNote } = footerData;

  return (
    <footer className="bg-primary-900 text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <div className="text-white">
                  <Logo />
                </div>
              </div>
              <p className="text-primary-100 text-lg leading-relaxed mb-8">
                Expert immigration attorneys helping undocumented immigrants secure their legal status with compassionate, professional service.
              </p>

              {/* Social Links */}
              {socials && socials.length > 0 && (
                <div className="flex space-x-4">
                  {socials.map(({ label, icon: Icon, href }, index) => (
                    <a
                      key={`social-${index}`}
                      className="w-10 h-10 bg-primary-800 hover:bg-primary-700 rounded-lg flex items-center justify-center text-primary-100 hover:text-white transition-colors duration-200"
                      aria-label={label}
                      href={href}
                    >
                      {Icon && <Icon className="w-5 h-5" />}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Footer Columns */}
            {columns.map(({ title, links }, index) => (
              <div key={`footer-column-${index}`} className="lg:col-span-1">
                <h3 className="text-xl font-bold text-white mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links &&
                    links.map(({ label, href }, linkIndex) => (
                      <li key={`footer-link-${linkIndex}`}>
                        <a
                          className="text-primary-100 hover:text-white transition-colors duration-200 text-base font-medium"
                          href={href}
                        >
                          {label}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-800 py-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* Copyright and Legal Links */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="text-primary-100 text-base">
                {footNote}
              </div>
              {links && links.length > 0 && (
                <div className="flex items-center space-x-6">
                  {links.map(({ label, href }, index) => (
                    <a
                      key={`bottom-link-${index}`}
                      className="text-primary-200 hover:text-white transition-colors duration-200 text-sm font-medium"
                      href={href}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Back to Top */}
            <div>
              <a
                href="#header"
                className="inline-flex items-center text-primary-200 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Back to Top
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
