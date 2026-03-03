import React from 'react';
import { MoveRight } from 'lucide-react';

/**
 * DistinctSolutions Section
 * 
 * This component replicates the "Distinct Solutions, Personal Service" section
 * featuring a two-column introductory layout and three color-coded service cards.
 * 
 * Colors from high-level design:
 * - Wealth Management: Sage (#8E9F92)
 * - Asset Management: Rust (#C19985)
 * - Investment Banking: Teal (#87A0A1)
 */

const ServiceCard = ({ 
  title, 
  description, 
  footer, 
  bgColor, 
  href 
}: { 
  title: string; 
  description: string; 
  footer: string; 
  bgColor: string;
  href: string;
}) => {
  return (
    <a 
      href={href}
      className="group relative flex flex-col justify-between p-[40px] h-[520px] transition-all duration-500 ease-in-out hover:brightness-105"
      style={{ backgroundColor: bgColor }}
    >
      <div>
        <h3 className="font-display text-[42px] leading-[1.1] text-primary mb-10">
          {title}
        </h3>
        <p className="font-sans text-[16px] leading-[1.6] text-primary/80 font-light max-w-[280px]">
          {description}
        </p>
      </div>
      
      <div className="flex items-center justify-between border-t border-primary/20 pt-6">
        <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-primary">
          {footer}
        </span>
        <MoveRight className="w-5 h-5 text-primary transform transition-transform duration-300 group-hover:translate-x-2" strokeWidth={1} />
      </div>
    </a>
  );
};

const DistinctSolutions = () => {
  return (
    <section className="bg-heritage-parchment py-[120px]">
      <div className="container mx-auto max-w-[1440px]">
        {/* Top Content: Grid 2-col */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-[100px] items-start">
          <div className="relative">
             {/* Decorative 'R' watermark mentioned in design for this area */}
             <span className="absolute -top-12 left-20 font-display text-[24px] opacity-20 text-heritage-gold">R.</span>
            <h2 className="font-display text-[64px] leading-[1.05] text-primary max-w-[600px]">
              Distinct Solutions,<br />Personal Service
            </h2>
          </div>
          
          <div className="pt-4">
            <p className="font-sans text-[18px] leading-[1.7] text-[#666] font-light max-w-[560px]">
              We serve families and individuals, institutional investors, and corporations across a 
              wide range of needs and objectives. We continue to learn from our heritage and seek out 
              new and innovative ways of working, using our past success to help us continue 
              pioneering the future of financial services.
            </p>
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          <ServiceCard
            title="Wealth Management"
            description="Individualized service at every stage of wealth combined with the legacy that has guided members of the Rockefeller family for more than seven generations."
            footer="Rockefeller Global Family Office"
            bgColor="#8E9F92" // Sage
            href="https://www.rockco.com/rockefeller-global-family-office/"
          />
          
          <ServiceCard
            title="Asset Management"
            description="Seeking to generate insights and outcomes not commonly found in the investment community to serve institutions, financial professionals, and other institutionally-minded investors."
            footer="Rockefeller Asset Management"
            bgColor="#C19985" // Rust
            href="https://www.rockco.com/rockefeller-asset-management/"
          />
          
          <ServiceCard
            title="Investment Banking"
            description="Independent, strategic business advice and guidance for private and public companies through a team of senior investment bankers with a commitment to integrity."
            footer="Rockefeller Global Investment Banking"
            bgColor="#87A0A1" // Teal
            href="https://www.rockco.com/rockefeller-global-investment-banking/"
          />
        </div>
      </div>
    </section>
  );
};

export default DistinctSolutions;