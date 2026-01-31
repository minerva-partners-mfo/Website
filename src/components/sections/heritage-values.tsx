import React from 'react';
import Image from 'next/image';

const HeritageValues = () => {
  return (
    <section className="bg-[#002C3D] text-[#F5F3ED] py-[120px] overflow-hidden relative">
      <div className="container mx-auto max-w-[1440px] px-8 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
          
          {/* Left Column: Image Collage & Main Intro */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 w-full aspect-[4/5] md:aspect-[1.2/1] lg:aspect-[4/5] max-w-[600px]">
              {/* Background Decorative Element / Overlay Image */}
              <div className="absolute top-0 left-0 w-[80%] h-[70%] z-0 translate-x-[-10%] translate-y-[-10%] opacity-40">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6af9b26c-8ed3-40f3-9e42-9cb554431e81-rockco-com/assets/images/background-art-5.webp"
                  alt="Decorative heritage background"
                  fill
                  className="object-cover grayscale"
                />
              </div>

              {/* Primary Historical Image */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[85%] z-10 shadow-2xl">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6af9b26c-8ed3-40f3-9e42-9cb554431e81-rockco-com/assets/images/rockefeller-capital-management-historic-john-d-roc-6.webp"
                  alt="In Good Company - Historical Rockefeller Photography"
                  fill
                  className="object-cover grayscale mix-blend-luminosity border border-white/10"
                />
                
                {/* Content Box Overlapping Image */}
                <div className="absolute -bottom-12 -right-12 md:right-[-60px] bg-[#004B63]/90 backdrop-blur-sm p-8 md:p-12 max-w-[380px] border-l border-t border-[#B0A184]/30 z-20">
                  <h2 className="font-serif text-[40px] md:text-[54px] leading-[1] mb-6 font-light">
                    In Good Company
                  </h2>
                  <p className="font-sans text-[16px] md:text-[18px] leading-[1.6] font-light text-[#F5F3ED]/80">
                    We have always distinguished ourselves by doing things not only well, but differently. We seek to deliver the future of financial services to our clients, made possible by our historic success.
                  </p>
                  
                  {/* Decorative Icon below text */}
                  <div className="mt-8">
                     <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-60">
                        <path d="M12 0L14.5 5H9.5L12 0Z" fill="#B0A184"/>
                        <path d="M12 5V35" stroke="#B0A184" strokeWidth="1"/>
                        <circle cx="12" cy="37" r="2" fill="#B0A184"/>
                     </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Values Grid */}
          <div className="lg:col-span-6 pt-12 lg:pt-0">
            <div className="space-y-24">
              
              {/* Value 1: What We Believe In */}
              <div className="max-w-md">
                <h3 className="font-serif text-[36px] md:text-[42px] mb-6 font-normal">
                  What We Believe In
                </h3>
                <p className="font-sans text-[18px] leading-[1.7] text-[#F5F3ED]/70 mb-8 font-light italic">
                  Our principles have been shaped by over 140 years working alongside members of the Rockefeller family. Today, those principles guide our growth.
                </p>
                <a 
                  href="#" 
                  className="inline-flex items-center text-[11px] font-bold uppercase tracking-[0.2em] text-[#B0A184] hover:text-white transition-colors group"
                >
                  Our Values 
                  <span className="ml-3 transform group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

              {/* Grid for Heritage and Future */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                
                {/* Value 2: A Distinct Heritage */}
                <div>
                  <h4 className="font-serif text-[28px] md:text-[32px] mb-4 font-normal">
                    A Distinct Heritage
                  </h4>
                  <p className="font-sans text-[15px] leading-[1.6] text-[#F5F3ED]/60 mb-6 font-light">
                    Our history is filled with moments that define us; not because of the past, but because of what they mean for our future.
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#B0A184] hover:text-white transition-colors group"
                  >
                    Our History 
                    <span className="ml-3 transform group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>

                {/* Value 3: An Inspired Future */}
                <div>
                  <h4 className="font-serif text-[28px] md:text-[32px] mb-4 font-normal">
                    An Inspired Future
                  </h4>
                  <p className="font-sans text-[15px] leading-[1.6] text-[#F5F3ED]/60 mb-6 font-light">
                    We&rsquo;re nothing without our people. Our experienced and talented team approaches each challenge with energy, creativity, and care.
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#B0A184] hover:text-white transition-colors group"
                  >
                    Our People 
                    <span className="ml-3 transform group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Large Watermark Background Elements */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] select-none">
         <div className="font-serif text-[400px] leading-none text-[#F5F3ED] border-[1px] border-[#F5F3ED] rounded-full w-[600px] h-[600px] flex items-center justify-center translate-x-1/2">
            SINCE 1882
         </div>
      </div>
    </section>
  );
};

export default HeritageValues;