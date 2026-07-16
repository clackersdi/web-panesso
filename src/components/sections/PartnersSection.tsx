'use client';

import React, { useState } from 'react';
import Container from '../Container';
import Card from '../Card';
import PartnerModal from '../PartnerModal';
import { siteContent } from '@/lib/content';

export default function PartnersSection() {
  const [selectedPartner, setSelectedPartner] = useState<any>(null);

  return (
    <section id="socios" className="w-full py-32 lg:py-40 bg-panesso-black text-panesso-white">
      <Container>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-alexandria font-bold text-4xl sm:text-5xl lg:text-5xl mb-4">
            Nosotros
          </h2>
          <div className="w-16 h-px bg-panesso-medium-gray mx-auto" />
        </div>

        {/* Partners Grid */}
        <div className="flex justify-center gap-12 mb-12 flex-wrap">
          {siteContent.partners.map((partner) => (
            <button
              key={partner.id}
              onClick={() => setSelectedPartner(partner)}
              className="cursor-pointer w-full max-w-xs text-left"
            >
              <Card variant="hover">
              {/* Partner Image */}
              <div className="mb-6 h-auto overflow-hidden flex items-center justify-center">
                <img
                  src={partner.image}
                  alt={partner.name}
                  className="w-full h-auto"
                />
              </div>

              {/* Partner Info */}
              <h3 className="font-alexandria font-bold text-xl mb-2 text-panesso-white">
                {partner.name}
              </h3>
              <p className="font-nunito text-sm text-panesso-light-gray mb-3">
                {partner.title}
              </p>
              <p className="font-nunito text-sm leading-relaxed text-panesso-light-gray">
                {partner.specialties}
              </p>
              </Card>
            </button>
          ))}
        </div>

        {/* Partner Modal */}
        <PartnerModal
          partner={selectedPartner}
          isOpen={!!selectedPartner}
          onClose={() => setSelectedPartner(null)}
        />
      </Container>
    </section>
  );
}
