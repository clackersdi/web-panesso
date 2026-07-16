'use client';

import React from 'react';

export default function FloatingWhatsAppButton() {
  const whatsappNumber = '573133900829';
  const message = 'Hola, me gustaría agendar una consulta con Panesso Mercado Abogados.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 flex items-center justify-center w-14 h-14 bg-panesso-white hover:bg-panesso-light-gray rounded-full shadow-lg transition-all duration-300"
      title="Contactar por WhatsApp"
    >
      <svg
        className="w-8 h-8 text-panesso-black"
        fill="currentColor"
        viewBox="0 0 256 256"
      >
        <path d="M128,12A116,116,0,0,0,37.73,224.73l-8,2.67a12,12,0,0,0-8.73,14.6l2.67,8a12,12,0,0,0,14.6,8.73l8-2.67A116,116,0,1,0,128,12Zm0,216a104,104,0,0,1-41.08-8.16l-2.92,1a8,8,0,0,1-9.76-5.84l-1.78-5.34a8,8,0,0,1,5.84-9.76l2.92-1a104,104,0,1,1,46,17.06Zm56-92a28,28,0,0,1-32,27.82,8,8,0,0,1-6.13-3.72l-20.4-27.2A40,40,0,0,1,140,68a8,8,0,0,1,13.56,7.29l7.51,41.28a8,8,0,0,1-2.84,7.89l-20.9,18a8,8,0,0,1-5.49,1.88,36,36,0,0,0,32.16,20,8,8,0,0,1,0,16Z" />
      </svg>
    </a>
  );
}
