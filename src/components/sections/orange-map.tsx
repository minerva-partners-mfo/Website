import React from 'react';
import Image from 'next/image';

/**
 * OrangeMap Component
 * 
 * Clones the large horizontal transition section featuring an orange-tinted
 * historical map background overlaying the content.
 * 
 * Based on high-level design: Pre-Footer (Inspired Future), #C2512F.
 */

const OrangeMap = () => {
  // Using the specific asset provided for this section
  const mapImageUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6af9b26c-8ed3-40f3-9e42-9cb554431e81-rockco-com/assets/images/cb05-bg-11.webp";

  return (
    <section 
      className="relative w-full overflow-hidden"
      style={{
        height: '420px', // Exact height from visual analysis of screenshots
        backgroundColor: '#C2512F', // --color-heritage-orange / Footer Accent hex
      }}
    >
      {/* 
        The background image is an orange-tinted historical map.
        In the original, it's often a blend of a texture and an image.
        We'll use standard image positioning to match the visual reference.
      */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={mapImageUrl}
          alt="Historical map background"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-60 mix-blend-multiply"
          style={{
            objectPosition: 'center',
          }}
        />
        
        {/* Subtle gradient overlay to match the deep burnt orange feel */}
        <div 
          className="absolute inset-0" 
          style={{
            background: 'linear-gradient(rgba(194, 81, 47, 0.4), rgba(194, 81, 47, 0.4))',
          }}
        />
      </div>

      <div className="container relative h-full flex items-center justify-center">
        {/* 
          This section serves as a visual transition to the footer.
          Content-wise from the scraped data: "We're inspired that you're here. Explore a network of opportunities not commonly found elsewhere." 
          is associated with this pre-footer context in the visual flow.
        */}
        <div className="max-w-[800px] text-center px-4">
          <h2 
            className="text-[#F5F3ED] font-serif leading-[1.1] mb-6"
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)', // Large elegant heading
              fontWeight: 400,
            }}
          >
            We&apos;re inspired that you&apos;re here.
          </h2>
          <p 
            className="text-[#F5F3ED] font-sans font-light tracking-wide opacity-90"
            style={{
              fontSize: '1.125rem', // 18px
              lineHeight: '1.6',
            }}
          >
            Explore a network of opportunities not commonly found elsewhere.
          </p>
        </div>
      </div>

      {/* Subtle border at the top and bottom to delineate from other sections */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-black/10" />
    </section>
  );
};

export default OrangeMap;