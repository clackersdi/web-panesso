'use client';

import React from 'react';
import Container from '../Container';
import { siteContent } from '@/lib/content';

export default function Footer() {
  const footer = siteContent.footer;

  return (
    <footer className="w-full bg-panesso-black text-panesso-white border-t border-panesso-dark-gray">
      <Container className="py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="font-alexandria font-bold text-xl mb-2">
              {footer.logo}
            </h3>
            <p className="font-nunito text-panesso-light-gray text-sm leading-relaxed">
              {footer.tagline}
            </p>
          </div>

          {/* Firma Links */}
          <div>
            <h4 className="font-alexandria font-bold text-lg mb-6">
              {footer.sections.firma.title}
            </h4>
            <ul className="space-y-3">
              {footer.sections.firma.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="font-nunito text-panesso-light-gray hover:text-panesso-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-alexandria font-bold text-lg mb-6">
              {footer.sections.contacto.title}
            </h4>
            <div className="space-y-4 font-nunito text-panesso-light-gray text-sm">
              <p>
                {footer.sections.contacto.address}
                <br />
                {footer.sections.contacto.city}
              </p>
              <p>
                <a
                  href={`tel:${footer.sections.contacto.phone}`}
                  className="hover:text-panesso-white transition-colors"
                >
                  {footer.sections.contacto.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${footer.sections.contacto.email}`}
                  className="hover:text-panesso-white transition-colors break-all"
                >
                  {footer.sections.contacto.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        {footer.social && footer.social.length > 0 && (
          <div className="mb-8 pb-8 border-b border-panesso-dark-gray">
            <div className="flex gap-6">
              {footer.social.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="font-nunito text-panesso-light-gray hover:text-panesso-white transition-colors text-sm"
                  title={social.platform}
                >
                  {social.platform}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Copyright */}
        <div className="text-center">
          <p className="font-nunito text-panesso-medium-gray text-sm">
            {footer.copyright}
          </p>
        </div>
      </Container>
    </footer>
  );
}
