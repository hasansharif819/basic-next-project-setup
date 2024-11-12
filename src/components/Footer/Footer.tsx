'use client';

import React from 'react';
import Link from 'next/link';
import { nanoid } from 'nanoid';
import { usePathname } from 'next/navigation';
import logo from '../../assets/images/amar_bazar_white.webp';
import Image from 'next/image';

export const Footer: React.FC = () => {
  const pathname = usePathname();

  // Static footer data
  const footer = {
    about: 'Website description goes here. Explain your business, your mission, and anything you want your visitors to know about.',
    footerLogo: '@/assets/images/amar_bazar_white.webp', 
    copyright: 'All rights reserved by Waywise Global',
  };

  // Static nav items data
  const navItems = [
    {
      navTitle: 'Company',
      navItems: [
        { link: { label: 'About Us', url: '/about' } },
        { link: { label: 'Careers', url: '/careers' } },
        { link: { label: 'Blog', url: '/blog' } },
      ],
    },
    {
      navTitle: 'Resources',
      navItems: [
        { link: { label: 'Documentation', url: '/docs' } },
        { link: { label: 'Support', url: '/support' } },
        { link: { label: 'Contact Us', url: '/contact' } },
      ],
    },
    {
      navTitle: 'Social',
      navItems: [
        { link: { label: 'Facebook', url: 'https://facebook.com' } },
        { link: { label: 'Twitter', url: 'https://twitter.com' } },
        { link: { label: 'LinkedIn', url: 'https://linkedin.com' } },
      ],
    },
  ];

  return (
    <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
      <div className="absolute w-full h-full left-0 top-0 -z-10 bg-gradient-to-t from-white/10 via-white/50 to-white dark:from-dark/10 dark:via-dark/50 dark:to-dark"></div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          {/* Footer Left: About and Social Links */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link href="/" className="mb-8 inline-block">
                <Image src={logo} alt="Logo" width={256} height={64} />
              </Link>
              <p className="mb-9 text-base leading-relaxed text-black dark:text-white">{footer.about}</p>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-8/12 xl:w-7/12">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
              {navItems.map((navItem, index) => (
                <nav key={index} className="col-span-1">
                  <h2 className="mb-6 md:mb-10 text-xl font-medium text-black dark:text-white">{navItem.navTitle}</h2>
                  <ul className="list-none m-0 p-0">
                    {navItem.navItems.map((linkItem) => (
                      <li key={nanoid()} className="mb-2 leading-6">
                        <Link
                          href={linkItem.link.url}
                          className="inline-block text-base text-black duration-300 hover:text-primary dark:text-gray-300 dark:hover:text-primary"
                        >
                          {linkItem.link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#f7f9ff93] to-transparent dark:via-[#f7f9ff93]"></div>
        <div className="py-8">
          <div className="text-center text-base text-black dark:text-white">
            <span className="text-lg font-light">©</span> {new Date().getFullYear()} {footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
};
