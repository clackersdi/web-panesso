'use client';

import React from 'react';
import Container from '../Container';
import Card from '../Card';
import { siteContent } from '@/lib/content';

export default function TestimonialsSection() {
  return (
    <section className="w-full py-20 lg:py-32 bg-panesso-white text-panesso-black">
      <Container>
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="font-alexandria font-bold text-4xl sm:text-5xl lg:text-5xl mb-4">
            Reconocimientos
          </h2>
          <div className="w-16 h-px bg-panesso-dark-gray mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteContent.testimonials.map((testimonial, index) => (
            <Card key={index} variant="hover" className="border-panesso-light-gray hover:border-panesso-dark-gray">
              <div className="mb-4">
                <p className="font-nunito text-lg leading-relaxed text-panesso-black mb-6">
                  "{testimonial.quote}"
                </p>
                <div className="pt-4 border-t border-panesso-light-gray">
                  <p className="font-alexandria font-bold text-sm text-panesso-dark-gray mb-1">
                    {testimonial.source}
                  </p>
                  <p className="font-nunito text-sm text-panesso-medium-gray">
                    {testimonial.author}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
