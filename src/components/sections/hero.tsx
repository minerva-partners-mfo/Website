import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[900px] overflow-hidden bg-[#F5F3ED] flex items-center pt-24 pb-20">
      {/* Background Dots Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage: 'radial-gradient(#B0A184 1.5px, transparent 0.5px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(circle at 50% 50%, black, transparent 80%)'
        }}
      />

      <div className="container relative z-10 mx-auto px-8 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Text Content */}
        <div className="max-w-2xl pt-12">
          {/* Decorative Vertical Line & Thistle */}
          <div className="absolute left-[-40px] top-0 bottom-0 hidden lg:block">
            <div className="w-[1px] h-full bg-[#B0A184]/40 relative">
              <div className="absolute top-[10%] left-1/2 -translate-x-1/2">
                 <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 40V0M12 0L8 10M12 0L16 10" stroke="#B0A184" strokeWidth="1" />
                    <circle cx="12" cy="15" r="3" fill="#B0A184" />
                 </svg>
              </div>
            </div>
          </div>

          <div className="relative">
             <h1 className="text-hero font-serif leading-[1.05] mb-8">
               Expect <span className="italic font-light">the</span><br />
               <span className="ml-[15%]">Exceptional</span>
             </h1>
          </div>

          <p className="font-sans text-[1.125rem] lg:text-[1.25rem] font-light leading-relaxed text-[#1A1A1A] mb-12 max-w-lg">
            We seek to deliver the unique promise of the Rockefeller family legacy to distinguished individuals, families, and institutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="/about-rcm/" 
              className="bracket-corners group inline-block"
            >
              <span className="text-button text-heritage-gold transition-colors duration-300">
                Who We Are
              </span>
            </a>
            <a 
              href="/about-rcm/contact/" 
              className="bracket-corners group inline-block"
            >
              <span className="text-button text-heritage-gold transition-colors duration-300">
                Request An Introduction
              </span>
            </a>
          </div>
        </div>

        {/* Right Side: Image Collage */}
        <div className="relative h-[650px] w-full flex items-center justify-center">
          {/* Historical Layer - John D. Rockefeller (Black and White) */}
          <div className="absolute top-[10%] left-[5%] w-[65%] aspect-[4/5] z-10 shadow-2xl">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6af9b26c-8ed3-40f3-9e42-9cb554431e81-rockco-com/assets/images/rockefeller-2.webp"
              alt="John D. Rockefeller at desk"
              fill
              className="object-cover grayscale"
              priority
            />
          </div>

          {/* Contemporary Layer - Modern Professional (Color) */}
          <div className="absolute top-[5%] right-0 w-[60%] aspect-[4/3] z-20 shadow-2xl border-r-[24px] border-b-[24px] border-[#2A3E31]">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6af9b26c-8ed3-40f3-9e42-9cb554431e81-rockco-com/assets/images/abby-rockefeller-3.webp"
              alt="Modern Rockefeller Professional"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Signature SVG Overlay */}
          <div className="absolute bottom-[15%] left-[10%] z-30 opacity-40 pointer-events-none">
             <svg width="400" height="150" viewBox="0 0 400 150" fill="none" className="stroke-heritage-gold/60">
                {/* Simplified signature simulation path */}
                <path d="M50,100 C80,80 120,40 180,60 C240,80 280,30 320,50 C360,70 380,90 350,110" strokeWidth="0.5" />
                <path d="M40,110 C70,100 110,120 160,110 C210,100 250,130 310,120" strokeWidth="0.5" />
             </svg>
          </div>

          {/* Secondary Collage Image (Overlap Bottom) */}
          <div className="absolute bottom-[5%] right-[10%] w-[35%] aspect-square z-10 opacity-30">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6af9b26c-8ed3-40f3-9e42-9cb554431e81-rockco-com/assets/images/cb02-mist-overlay_2x-1.webp"
              alt="Texture overlay"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>

      {/* Scroll indicator or accent line */}
      <div className="absolute bottom-12 left-20 hidden lg:block">
        <div className="flex items-center gap-4 text-heritage-gold/60">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold rotate-90 origin-left ml-4">Scroll</span>
            <div className="w-px h-20 bg-gradient-to-b from-[#B0A184] to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;