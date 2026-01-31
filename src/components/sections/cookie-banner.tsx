"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

/**
 * CookieBanner Component
 * 
 * A floating cookie consent banner appearing at the bottom left with institutional styling.
 * Adheres to "Modern Financial Heritage" design system.
 */
export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isPreferenceModalOpen, setIsPreferenceModalOpen] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);

  useEffect(() => {
    // Show banner after a short delay for smooth entry
    const timer = setTimeout(() => {
      const consent = localStorage.getItem("rcm-cookie-consent");
      if (!consent) {
        setIsVisible(true);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleCustomizeClick = () => {
    setIsPreferenceModalOpen(true);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("rcm-cookie-consent", "customized");
    setIsPreferenceModalOpen(false);
    setIsVisible(false);
  };

  const handleCancelSettings = () => {
    setIsPreferenceModalOpen(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Main Floating Banner */}
      <div 
        className="fixed bottom-10 left-10 z-[100] w-full max-w-[340px] bg-white border border-[#B0A184] shadow-sm animate-in fade-in slide-in-from-bottom-4 duration-500"
        role="region"
        aria-label="Cookie Consent"
      >
        <div className="relative p-6">
          {/* Close Button */}
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 p-1 hover:opacity-70 transition-opacity"
            aria-label="Close"
          >
            <img 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6af9b26c-8ed3-40f3-9e42-9cb554431e81-rockco-com/assets/svgs/close-1.svg" 
              alt="Close" 
              className="w-3 h-3"
            />
          </button>

          {/* Content */}
          <div className="space-y-4">
            <p className="text-[13px] leading-[1.6] text-[#666666] font-sans font-light">
              We use cookies to provide website functionality, to analyze our traffic and to personalize content. For further information, please see our{" "}
              <a 
                href="https://rcmbrand.rockco.com/RCM_Online_Privacy_Policy.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#002C3D] underline underline-offset-2 hover:text-[#B0A184] transition-colors"
                aria-label="Online Privacy Policy."
              >
                Online Privacy Policy.
              </a>
            </p>

            <div className="pt-2">
              <button 
                onClick={handleCustomizeClick}
                className="w-full border border-[#002C3D] text-[#002C3D] py-3 text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-[#002C3D] hover:text-white transition-all duration-300"
              >
                Customize Cookie Preferences
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Preference Center Modal */}
      {isPreferenceModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
            onClick={handleCancelSettings}
          />
          
          {/* Modal Container */}
          <div className="relative w-full max-w-[560px] bg-[#F5F3ED] shadow-2xl border border-[#B0A184] animate-in zoom-in-95 duration-300">
            <div className="p-10">
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-[32px] font-display text-[#1A1A1A] leading-tight">
                  Opt-out Preferences
                </h2>
                <button 
                  onClick={handleCancelSettings}
                  className="p-2 hover:opacity-70 transition-opacity"
                  aria-label="Close"
                >
                   <img 
                    src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/6af9b26c-8ed3-40f3-9e42-9cb554431e81-rockco-com/assets/svgs/close-1.svg" 
                    alt="Close" 
                    className="w-4 h-4"
                  />
                </button>
              </div>

              <div className="space-y-6">
                <p className="text-[16px] leading-[1.6] text-[#666666] font-sans font-light">
                  We use third-party cookies that help us analyze how you use this website, store your preferences, and provide the content and advertisements that are relevant to you. However, you can opt out of these cookies by checking "Customize Cookie Preferences" and clicking the "Save My Preferences" button. Once you opt out, you can opt in again at any time by unchecking "Customize Cookie Preferences" and clicking the "Save My Preferences" button.
                </p>

                <div className="border-t border-[#B0A184]/30 pt-6">
                  <div className="flex items-center gap-4">
                    <div className="relative flex items-center h-5">
                      <input
                        id="ckyCCPAOptOut"
                        type="checkbox"
                        checked={isCustomizing}
                        onChange={(e) => setIsCustomizing(e.target.checked)}
                        className="w-5 h-5 border border-[#B0A184] rounded-none bg-transparent appearance-none checked:bg-[#002C3D] cursor-pointer relative after:content-[''] after:absolute after:hidden checked:after:block after:left-[6px] after:top-[2px] after:w-[6px] after:h-[10px] after:border-white after:border-r-2 after:border-b-2 after:rotate-45"
                      />
                    </div>
                    <label 
                      htmlFor="ckyCCPAOptOut" 
                      className="text-[15px] font-semibold text-[#1A1A1A] cursor-pointer"
                    >
                      Customize Cookie Preferences
                    </label>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button 
                    onClick={handleCancelSettings}
                    className="flex-1 py-4 text-[11px] font-bold uppercase tracking-[0.15em] border border-[#B0A184] text-[#1A1A1A] hover:bg-[#E5E2D9] transition-colors"
                  >
                    CANCEL
                  </button>
                  <button 
                    onClick={handleSavePreferences}
                    className="flex-1 py-4 text-[11px] font-bold uppercase tracking-[0.15em] bg-[#002C3D] text-white hover:bg-[#001D29] transition-colors"
                  >
                    SAVE MY PREFERENCES
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}