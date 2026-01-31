"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface NewsItem {
  tag: string;
  date: string;
  title: string;
}

const newsData: NewsItem[] = [
  {
    tag: "IN THE NEWS",
    date: "DECEMBER 16, 2025",
    title: "Avery Sheffield Joins CNBC’s Closing Bell to Discuss Valuations, Market Rotation and Opportunities for Investors",
  },
  {
    tag: "IN THE NEWS",
    date: "DECEMBER 12, 2025",
    title: "Greg Fleming Discusses Fed Policy, AI, and US Economic Momentum on Bloomberg’s The Pulse",
  },
  {
    tag: "IN THE NEWS",
    date: "DECEMBER 08, 2025",
    title: "Rockefeller Capital Management Appoints Dr. Lena Mass-Cresnik as Head of AI Strategy",
  },
  {
    tag: "IN THE NEWS",
    date: "DECEMBER 04, 2025",
    title: "Alex Petrone Discusses Why Active Management Matters in Today’s Muni Market on Bloomberg’s Open Interest",
  },
  {
    tag: "IN THE NEWS",
    date: "NOVEMBER 28, 2025",
    title: "Rockefeller Capital Management Secures Backing from Distinguished Investors – Featured in CNBC",
  },
  {
    tag: "IN THE NEWS",
    date: "NOVEMBER 24, 2025",
    title: "Greg Fleming on The Master Investor Podcast – Perspectives on Leadership, Growth and Markets",
  },
  {
    tag: "IN THE NEWS",
    date: "NOVEMBER 20, 2025",
    title: "From Exclusive Access to Extraordinary Growth – Rockefeller Private Advisor Neil Rubinstein on The Diamond Podcast",
  },
  {
    tag: "IN THE NEWS",
    date: "NOVEMBER 15, 2025",
    title: "Rockefeller Capital Management Welcomes New Distinguished Families and Investors to Support Next Phase of Growth",
  },
];

const MediaReplay: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % newsData.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative w-full bg-[#F5F3ED] py-[120px] overflow-hidden">
      {/* Decorative Assets */}
      <div className="absolute top-[80px] left-[10%] opacity-80 pointer-events-none">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6af9b26c-8ed3-40f3-9e42-9cb554431e81-rockco-com/assets/images/Media-Replay-7.webp"
          alt="Decorative crest"
          width={80}
          height={80}
          className="object-contain"
        />
      </div>

      <div className="container relative mx-auto px-8 max-w-[1440px]">
        {/* Background Decorative Text */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none z-0"
          style={{ whiteSpace: 'nowrap' }}
        >
          <span className="text-[120px] font-serif uppercase tracking-[0.2em] text-[#E5E2D9] opacity-50">
            MEDIA REPLAY
          </span>
        </div>

        {/* Floating "R." Watermarks */}
        <div className="absolute left-[2%] bottom-[20%] font-serif text-[48px] text-[#E5E2D9] opacity-60">R.</div>
        <div className="absolute right-[20%] bottom-[15%] font-serif text-[48px] text-[#E5E2D9] opacity-60">R.</div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="w-full max-w-[800px] text-center min-h-[320px] flex flex-col justify-center">
            {newsData.map((item, index) => (
              <div
                key={index}
                className={`transition-all duration-1000 ease-in-out transform ${
                  index === activeIndex 
                    ? "opacity-100 translate-y-0 relative block" 
                    : "opacity-0 translate-y-8 absolute hidden"
                }`}
              >
                <div className="mb-6 flex flex-col items-center">
                   <span className="text-[11px] font-bold tracking-[0.2em] text-[#1A1A1A] uppercase font-sans">
                    {item.tag} — {item.date}
                  </span>
                  <div className="h-[1px] w-12 bg-[#B0A184] mt-3"></div>
                </div>
                
                <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-serif leading-[1.15] text-[#1A1A1A] px-4">
                  {item.title}
                </h2>
              </div>
            ))}
          </div>

          {/* Carousel Pagination Dots */}
          <div className="mt-16 flex space-x-3">
            {newsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? "bg-[#002C3D] scale-125" 
                    : "bg-[#B0A184]/40 hover:bg-[#B0A184]"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Side Peak Previews (Optional visual cues for the carousel) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[150px] opacity-20 hidden lg:block">
        <div className="border-l border-[#B0A184] h-[200px] flex flex-col justify-center pl-6">
           <span className="text-[10px] tracking-widest text-primary uppercase font-bold mb-2">IN THE NEWS</span>
           <div className="text-[14px] font-serif line-clamp-3">
             {newsData[(activeIndex - 1 + newsData.length) % newsData.length].title}
           </div>
        </div>
      </div>
      
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[150px] opacity-20 hidden lg:block">
        <div className="border-r border-[#B0A184] h-[200px] flex flex-col justify-center pr-6 text-right">
           <span className="text-[10px] tracking-widest text-primary uppercase font-bold mb-2">IN THE NEWS</span>
           <div className="text-[14px] font-serif line-clamp-3">
             {newsData[(activeIndex + 1) % newsData.length].title}
           </div>
        </div>
      </div>
    </section>
  );
};

export default MediaReplay;