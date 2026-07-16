'use client';

import React, { useState } from 'react';
import Container from '../Container';
import Card from '../Card';
import { siteContent } from '@/lib/content';

export default function PracticeAreasSection() {
  const [activeAreaId, setActiveAreaId] = useState(1);
  const activeArea = siteContent.practiceAreas.find((area) => area.id === activeAreaId);

  return (
    <section id="areas" className="w-full py-20 lg:py-32 bg-panesso-black text-panesso-white">
      <Container>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-alexandria font-bold text-4xl sm:text-5xl lg:text-5xl mb-4">
            Áreas de Práctica
          </h2>
          <div className="w-16 h-px bg-panesso-medium-gray mx-auto mb-6" />
          <p className="font-nunito text-panesso-light-gray text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Desde la prevención hasta la resolución de conflictos, ofrecemos servicios legales con un enfoque estratégico, cercano y personalizado. Descubre cómo podemos acompañarte en las diferentes áreas del derecho.
          </p>
        </div>

        {/* Practice Areas Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-12">
          {siteContent.practiceAreas.map((area) => (
            <button
              key={area.id}
              onClick={() => setActiveAreaId(area.id)}
              className={`py-4 px-3 font-nunito font-semibold text-sm transition-all duration-300 border ${
                activeAreaId === area.id
                  ? 'bg-panesso-white text-panesso-black border-panesso-white'
                  : 'bg-white/5 text-panesso-light-gray border-white/15 hover:bg-white/15 hover:border-white/40 hover:text-panesso-white'
              }`}
            >
              {area.title}
            </button>
          ))}
        </div>

        {/* Active Area Content */}
        {activeArea && (
          <div
            className="p-10 animate-fade-in relative overflow-hidden border border-panesso-dark-gray bg-transparent"
          >
            <div className="relative z-10">
              <div className="mb-8">
                <div className="flex-1">
                  <h3 className="font-alexandria font-bold text-3xl mb-4 text-panesso-white">
                    {activeArea.title}
                  </h3>
                  <p className="font-nunito text-lg text-panesso-light-gray leading-relaxed">
                    {activeArea.description}
                  </p>
                </div>
              </div>

              {/* Services List */}
              {activeArea.services && activeArea.services.length > 0 && (
                <div className="border-t border-panesso-dark-gray pt-8">
                  <h4 className="font-alexandria font-bold text-xl mb-6 text-panesso-white">
                    Nuestros Servicios
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeArea.services.map((service, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 font-nunito text-panesso-light-gray"
                      >
                        <span className="text-panesso-white font-bold mt-1">✓</span>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
