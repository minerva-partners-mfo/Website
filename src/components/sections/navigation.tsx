"use client";

import React from 'react';
import { Search } from 'lucide-react';

const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#F5F3ED] border-b border-[#B0A184]/30">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-12 h-[100px] flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <a href="/" className="block" aria-label="Rockefeller Capital Management Home">
            <div className="flex flex-col">
              <span className="text-[1.5rem] tracking-[0.25em] font-serif uppercase text-[#1A1A1A] leading-none">
                Rockefeller
              </span>
              <span className="text-[0.5625rem] tracking-[0.45em] font-sans font-bold uppercase text-[#B0A184] mt-1 ml-0.5">
                Capital Management
              </span>
            </div>
          </a>
        </div>

        {/* Navigation Items */}
        <nav className="hidden xl:flex items-center gap-x-8">
          {[
            { name: 'Wealth Management', href: '#' },
            { name: 'Asset Management', href: '#' },
            { name: 'Investment Banking', href: '#' },
            { name: 'Our Promise', href: '#' },
            { name: 'News', href: '#' },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[13px] font-semibold uppercase tracking-[0.1em] text-[#1A1A1A] hover:text-[#B0A184] transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Utilities Section */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="group relative inline-block focus:outline-none"
          >
            <div className="bracket-corners border border-[#B0A184] px-6 py-2">
              <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[#1A1A1A] group-hover:text-[#B0A184] transition-colors duration-300">
                Client Login
              </span>
            </div>
            {/* Custom bracket corners handled via Tailwind & CSS in globals */}
            <style jsx>{`
              .bracket-corners {
                position: relative;
                padding: 0.6rem 1.8rem;
              }
              .bracket-corners::before,
              .bracket-corners::after {
                content: '';
                position: absolute;
                width: 6px;
                height: 100%;
                border: 1px solid #B0A184;
                top: 0;
              }
              .bracket-corners::before {
                left: -1px;
                border-right: 0;
              }
              .bracket-corners::after {
                right: -1px;
                border-left: 0;
              }
            `}</style>
          </a>

          <button 
            className="text-[#1A1A1A] hover:text-[#B0A184] transition-colors duration-300"
            aria-label="Search"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>
          
          {/* Mobile Menu Icon (Visible on small screens) */}
          <button className="xl:hidden flex flex-col gap-1.5 p-1" aria-label="Toggle Menu">
            <span className="w-6 h-0.5 bg-[#1A1A1A]"></span>
            <span className="w-6 h-0.5 bg-[#1A1A1A]"></span>
            <span className="w-6 h-0.5 bg-[#1A1A1A]"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation;