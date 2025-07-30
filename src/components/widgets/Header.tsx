'use client';

import { useRef, useState } from 'react';
import { IconRss } from '@tabler/icons-react';
import { useOnClickOutside } from '~/hooks/useOnClickOutside';
import Link from 'next/link';
import Logo from '~/components/atoms/Logo';
import ToggleMenu from '../atoms/ToggleMenu';
import { headerData } from '~/shared/data/global.data';
import CTA from '../common/CTA';
import { CallToActionType } from '~/shared/types';

const Header = () => {
  const { links, actions, isSticky, showToggleTheme, showRssFeed, position } = headerData;

  const desktopRef = useRef(null);
  const mobileRef = useRef(null);

  const initialDropdownState =
    links?.map(() => false) || [];

  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean[]>(initialDropdownState);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState<boolean[]>(initialDropdownState);
  const [isToggleMenuOpen, setIsToggleMenuOpen] = useState<boolean>(false);

  const handleDesktopDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues.forEach((value, i) => {
        if (value === true) {
          newValues[i] = false;
        } else {
          newValues[i] = i === index;
        }
      });
      return newValues;
    });
  };

  const handleMobileDropdownOnClick = (index: number) => {
    setIsMobileDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues[index] = !newValues[index]; // Toggle only the clicked dropdown
      return newValues;
    });
  };

  const handleCloseDropdownOnClick = (index: number) => {
    setIsDropdownOpen((prevValues) => {
      const newValues = [...(prevValues as boolean[])];
      newValues[index] = false;
      return newValues;
    });
  };

  const handleToggleMenuOnClick = () => {
    setIsToggleMenuOpen(!isToggleMenuOpen);
    // Reset mobile dropdown states when closing menu
    if (isToggleMenuOpen) {
      setIsMobileDropdownOpen(initialDropdownState);
    }
  };

  // New function to handle mobile link clicks
  const handleMobileLinkClick = () => {
    // Close the mobile menu and reset all dropdown states
    setIsToggleMenuOpen(false);
    setIsMobileDropdownOpen(initialDropdownState);
  };

  // Handle click outside for desktop dropdowns
  useOnClickOutside(desktopRef, () => {
    setIsDropdownOpen(initialDropdownState);
  });

  // Handle click outside for mobile menu
  useOnClickOutside(mobileRef, () => {
    if (isToggleMenuOpen) {
      setIsToggleMenuOpen(false);
      setIsMobileDropdownOpen(initialDropdownState);
    }
  });

  return (
    <header
      className={`top-0 z-40 mx-auto w-full flex-none bg-white/95 backdrop-blur-sm border-b border-neutral-warm-100 transition-all duration-200 ease-in-out ${
        isSticky ? 'sticky' : 'relative'
      }`}
      id="header"
    >
      <div className="container-custom">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link
              className="flex items-center hover:opacity-80 transition-opacity duration-200"
              href="/"
              onClick={() =>
                isToggleMenuOpen ? handleToggleMenuOnClick() : setIsDropdownOpen(initialDropdownState)
              }
            >
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:block"
            aria-label="Main navigation"
          >
            <ul
              ref={desktopRef}
              className="flex items-center space-x-8"
            >
              {links &&
                links.map(({ label, href, icon: Icon, links }, index) => (
                  <li key={`item-link-${index}`} className="relative group">
                    {links && links.length ? (
                      <>
                        <button
                          className="nav-link flex items-center py-2 text-base font-medium transition-colors duration-200 hover:text-primary-800"
                          onClick={() => handleDesktopDropdownOnClick(index)}
                        >
                          {label}
                          {Icon && (
                            <Icon
                              className={`${
                                isDropdownOpen[index] ? 'rotate-180' : ''
                              } ml-1 h-4 w-4 transition-transform duration-200`}
                            />
                          )}
                        </button>
                        <ul
                          className={`${
                            isDropdownOpen[index] ? 'block' : 'hidden'
                          } absolute top-full left-0 min-w-[240px] bg-white border border-neutral-warm-200 rounded-xl shadow-large backdrop-blur-sm bg-white/95 py-3 z-50`}
                          style={{ WebkitBackfaceVisibility: 'hidden' }}
                        >
                          {links.map(({ label: label2, href: href2 }, index2) => (
                            <li key={`item-link-${index2}`}>
                              <Link
                                className="block py-2 px-6 text-neutral-warm-700 hover:text-primary-800 hover:bg-neutral-warm-50 text-sm font-medium transition-colors duration-200 first:rounded-t-lg last:rounded-b-lg"
                                href={href2 as string}
                                onClick={() => handleCloseDropdownOnClick(index)}
                              >
                                {label2}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <Link
                        className="nav-link block py-2 text-base font-medium transition-colors duration-200"
                        href={href as string}
                        onClick={() => setIsDropdownOpen(initialDropdownState)}
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
            </ul>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <ToggleMenu handleToggleMenuOnClick={handleToggleMenuOnClick} isToggleMenuOpen={isToggleMenuOpen} />
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              {showRssFeed && (
                <Link
                  className="p-2 text-neutral-warm-600 hover:text-primary-800 transition-colors duration-200"
                  aria-label="RSS Feed"
                  href=""
                >
                  <IconRss className="h-5 w-5" />
                </Link>
              )}
              {actions && actions.length > 0 && (
                <div className="flex items-center space-x-3">
                  {actions.map((callToAction, index) => (
                    <CTA
                      key={`item-action-${index}`}
                      callToAction={callToAction as CallToActionType}
                      linkClass="btn btn-primary px-6 py-3 text-sm font-semibold"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Separate from desktop nav */}
      {isToggleMenuOpen && (
        <div
          ref={mobileRef}
          className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-sm border-b border-neutral-warm-100 z-50"
        >
          <nav aria-label="Mobile navigation" className="container-custom">
            <ul className="flex flex-col py-4">
              {links &&
                links.map(({ label, href, icon: Icon, links }, index) => (
                  <li key={`mobile-item-link-${index}`} className="border-b border-neutral-warm-100 last:border-b-0">
                    {links && links.length ? (
                      <>
                        <button
                          className="nav-link flex items-center justify-between w-full py-4 text-base font-medium transition-colors duration-200 hover:text-primary-800"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            handleMobileDropdownOnClick(index);
                          }}
                        >
                          {label}
                          {Icon && (
                            <Icon
                              className={`${
                                (isMobileDropdownOpen && isMobileDropdownOpen[index]) ? 'rotate-180' : ''
                              } h-4 w-4 transition-transform duration-200`}
                            />
                          )}
                        </button>
                        {(isMobileDropdownOpen && isMobileDropdownOpen[index]) && (
                          <ul className="pb-4 bg-neutral-warm-25">
                            {links.map(({ label: label2, href: href2 }, index2) => (
                              <li key={`mobile-item-link-${index2}`}>
                                <Link
                                  className="block py-3 px-6 text-neutral-warm-700 hover:text-primary-800 hover:bg-neutral-warm-50 text-sm font-medium transition-colors duration-200 border-l-2 border-primary-200"
                                  href={href2 as string}
                                  onClick={handleMobileLinkClick}
                                >
                                  {label2}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <Link
                        className="nav-link block py-4 text-base font-medium transition-colors duration-200"
                        href={href as string}
                        onClick={handleMobileLinkClick}
                      >
                        {label}
                      </Link>
                    )}
                  </li>
                ))}
            </ul>

            {/* Mobile Actions */}
            <div className="border-t border-neutral-warm-100 pt-4 pb-4">
              <div className="flex items-center justify-center">
                {actions && actions.length > 0 && (
                  <div className="flex space-x-3">
                    {actions.map((callToAction, index) => (
                      <CTA
                        key={`mobile-item-action-${index}`}
                        callToAction={callToAction as CallToActionType}
                        linkClass="btn btn-primary px-6 py-3 text-sm font-semibold"
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
