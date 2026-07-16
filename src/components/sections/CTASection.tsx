'use client';

import React from 'react';
import Container from '../Container';
import Button from '../Button';
import { siteContent } from '@/lib/content';

export default function CTASection() {
  return (
    <section className="w-full py-20 lg:py-32 bg-panesso-black text-panesso-white">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-alexandria font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            {siteContent.cta.heading}
          </h2>

          <p className="font-nunito text-lg sm:text-xl text-panesso-light-gray mb-10 leading-relaxed">
            {siteContent.cta.description}
          </p>

          <Button variant="outlined" className="px-12 py-4 text-lg" href="/#contacto">
            {siteContent.cta.buttonText}
          </Button>
        </div>
      </Container>
    </section>
  );
}
