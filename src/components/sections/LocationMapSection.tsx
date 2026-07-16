'use client';

import React from 'react';
import Container from '../Container';
import { siteContent } from '@/lib/content';

export default function LocationMapSection() {
  const address = siteContent.footer.sections.contacto;
  const mapQuery = encodeURIComponent(`${address.address}, ${address.city}`);
  const mapSrc = `https://www.google.com/maps?q=${mapQuery}&output=embed`;

  return (
    <section id="ubicacion" className="w-full py-20 bg-panesso-black text-panesso-white">
      <Container>
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="font-alexandria font-bold text-4xl sm:text-5xl lg:text-5xl mb-4">
            Ubicación
          </h2>
          <div className="w-16 h-px bg-panesso-medium-gray mx-auto" />
        </div>

        {/* Address */}
        <div className="flex items-center justify-center gap-3 mb-8 font-nunito text-sm sm:text-base text-panesso-light-gray">
          <svg
            className="w-5 h-5 text-panesso-white flex-shrink-0"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <p>
            {address.address} — {address.city}
          </p>
        </div>

        {/* Map */}
        <div className="border border-white/15 overflow-hidden">
          <iframe
            src={mapSrc}
            title="Ubicación Panesso Mercado Abogados"
            className="w-full h-96 grayscale contrast-125"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </Container>
    </section>
  );
}
