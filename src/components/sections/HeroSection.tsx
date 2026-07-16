'use client';

import React, { useEffect, useState } from 'react';
import { siteContent } from '@/lib/content';

export default function HeroSection() {
  const [currentHeadingIndex, setCurrentHeadingIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Mostrar contenido después de 1 segundo
    const showTimer = setTimeout(() => {
      setShowContent(true);
    }, 1000);

    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!showContent) return;

    const interval = setInterval(() => {
      setFadeOut(true);
      setTimeout(() => {
        setCurrentHeadingIndex((prev) => (prev + 1) % siteContent.hero.headings.length);
        setFadeOut(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [showContent]);

  const address = siteContent.footer.sections.contacto;

  return (
    <section id="inicio" className="relative w-auto bg-black text-panesso-white overflow-hidden py-12">
      {/* Subtle diagonal gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/3 via-transparent to-white/2 pointer-events-none" />

      {/* Content Grid Layout */}
      <div className="relative z-10 flex flex-col justify-start p-8 md:p-12 pt-16">
        {/* Top Left Heading */}
        <div
          className={`transition-opacity duration-1000 mb-4 ${
            showContent ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h1
            className={`font-alexandria font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight transition-opacity duration-500 text-left text-panesso-white max-w-xl ${
              fadeOut ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {siteContent.hero.headings[currentHeadingIndex]}
          </h1>
        </div>

        {/* Bottom Section with Subtitle, CTA and Address */}
        <div
          className={`transition-opacity duration-1000 ${
            showContent ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Subtitle and Address Row */}
          <div className="mb-6">
            {/* Subtitle */}
            <div>
              <p className="font-nunito text-sm sm:text-base text-panesso-white leading-relaxed text-justify max-w-2xl">
                {siteContent.hero.subtitle}
              </p>
            </div>
          </div>

          {/* CTA Button - Left Aligned */}
          <a
            href="#contacto"
            className="inline-block px-8 py-3 border border-panesso-white text-panesso-white font-nunito font-semibold text-sm uppercase tracking-widest hover:bg-panesso-white hover:text-black transition-colors duration-300"
          >
            {siteContent.hero.cta}
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg
          className="w-6 h-6 text-panesso-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
