import React from 'react';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Rockefeller Global Family Office',
      href: 'https://www.rockco.com/rockefeller-global-family-office/',
    },
    {
      title: 'Rockefeller Asset Management',
      href: 'https://www.rockco.com/rockefeller-asset-management/',
    },
    {
      title: 'Rockefeller Global Investment Banking',
      href: 'https://www.rockco.com/rockefeller-global-investment-banking/',
    },
    {
      title: 'About Rockefeller Capital Management',
      href: 'https://www.rockco.com/about-rcm/',
    },
    {
      title: 'Office Locations',
      href: 'https://www.rockco.com/about-rcm/locations/',
    },
    {
      title: 'Media Center',
      href: 'https://www.rockco.com/news/',
    },
    {
      title: 'Terms of Use',
      href: 'https://www.rockco.com/terms-of-use/',
    },
    {
      title: 'Careers',
      href: 'https://careers.rockco.com/careers-home/jobs',
    },
    {
      title: 'Rockefeller Digital Login',
      href: 'https://rockefellerdigital.com/',
    },
    {
      title: 'Cybersecurity',
      href: 'https://www.rockco.com/cyber-security/',
    },
    {
      title: 'Legal Disclosures',
      href: 'https://www.rockco.com/legal-disclosures/',
    },
    {
      title: 'Regulatory Disclosures',
      href: 'https://www.rockco.com/regulatory-disclosures/',
    },
    {
      title: 'Privacy Policy',
      href: 'https://rcmbrand.rockco.com/RCM_Online_Privacy_Policy.pdf',
    },
  ];

  // Split links into two columns for the desktop layout match
  const leftColumn = footerLinks.slice(0, 7);
  const rightColumn = footerLinks.slice(7);

  return (
    <footer className="bg-[#002C3D] text-[#F5F3ED] pt-[100px] pb-[60px] relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-8 md:px-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-12 items-start">
          {/* Links Section */}
          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
            <div className="flex flex-col space-y-[14px]">
              {leftColumn.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="text-[15px] font-sans font-normal hover:text-[#B0A184] transition-colors duration-300 tracking-wide"
                >
                  {link.title}
                </a>
              ))}
            </div>
            <div className="flex flex-col space-y-[14px]">
              {rightColumn.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="text-[15px] font-sans font-normal hover:text-[#B0A184] transition-colors duration-300 tracking-wide"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>

          {/* Large Stylized "R." Mark - Handled as a watermark-style graphic */}
          <div className="hidden md:flex md:col-span-4 justify-end items-end relative h-full min-h-[300px]">
            <div className="absolute -bottom-12 right-0 select-none pointer-events-none opacity-40">
              <svg width="280" height="340" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  d="M20 100V20C20 20 45 15 60 15C75 15 85 25 85 40C85 55 75 65 60 65H40M40 65L75 100" 
                  stroke="#B0A184" 
                  strokeWidth="1.5"
                  className="opacity-70"
                />
                <circle cx="92" cy="100" r="5" fill="#B0A184" className="opacity-70" />
                <path 
                  d="M15 100V20M15 20C15 20 40 10 60 10C80 10 90 25 90 43C90 60 80 70 60 70H15M60 70L85 100" 
                  stroke="#B0A184" 
                  strokeWidth="0.5"
                  className="opacity-40"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Social */}
        <div className="mt-[80px] pt-8 border-t border-[#B0A184]/20 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-[13px] font-sans tracking-wide text-[#F5F3ED]/80">
            Copyright © {currentYear} Rockefeller Capital Management. All Rights Reserved.
          </div>

          <div className="flex items-center space-x-6">
            <a 
              href="https://www.linkedin.com/company/rockefeller-capital-management/" 
              className="hover:opacity-70 transition-opacity"
              aria-label="LinkedIn"
            >
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6af9b26c-8ed3-40f3-9e42-9cb554431e81-rockco-com/assets/svgs/icon-linkedin-2.svg" 
                alt="LinkedIn" 
                width={20} 
                height={20}
                className="invert"
              />
            </a>
            <a 
              href="https://www.instagram.com/rockefellercapitalmanagement/?hl=en" 
              className="hover:opacity-70 transition-opacity"
              aria-label="Instagram"
            >
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6af9b26c-8ed3-40f3-9e42-9cb554431e81-rockco-com/assets/svgs/icon-ig-3.svg" 
                alt="Instagram" 
                width={20} 
                height={20}
                className="invert"
              />
            </a>
            <a 
              href="https://www.youtube.com/channel/UCbbJmcLqOxc9rNZ1MkDuU7w" 
              className="hover:opacity-70 transition-opacity"
              aria-label="YouTube"
            >
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6af9b26c-8ed3-40f3-9e42-9cb554431e81-rockco-com/assets/svgs/icon-yt-4.svg" 
                alt="YouTube" 
                width={24} 
                height={16}
                className="invert"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;