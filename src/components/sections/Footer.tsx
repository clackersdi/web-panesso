'use client';

import React from 'react';
import Container from '../Container';
import { siteContent } from '@/lib/content';
import { getCurrentYear } from '@/lib/utils';

export default function Footer() {
  const footer = siteContent.footer;

  return (
    <footer className="w-full bg-panesso-black text-panesso-white border-t border-panesso-dark-gray">
      <Container className="py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <h3 className="font-alexandria font-bold text-xl mb-4">
              {footer.logo}
            </h3>
            <div className="space-y-3 font-nunito text-panesso-light-gray text-sm">
              <p>
                <span className="font-semibold">Razón Social:</span><br />
                {siteContent.company.legalName}
              </p>
              <p>
                <span className="font-semibold">NIT:</span><br />
                {siteContent.company.nit}
              </p>
            </div>
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

          {/* Legal Links */}
          <div>
            <h4 className="font-alexandria font-bold text-lg mb-6">
              {footer.sections.legal.title}
            </h4>
            <ul className="space-y-3">
              {footer.sections.legal.links.map((link, index) => (
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
                <span className="font-semibold">Dirección:</span><br />
                {footer.sections.contacto.address}<br />
                {footer.sections.contacto.city}
              </p>
              <p>
                <span className="font-semibold">Teléfono:</span><br />
                <a
                  href={`tel:${footer.sections.contacto.phone}`}
                  className="hover:text-panesso-white transition-colors"
                >
                  {footer.sections.contacto.phone}
                </a>
              </p>
              <p>
                <span className="font-semibold">Email:</span><br />
                <a
                  href={`mailto:${footer.sections.contacto.email}`}
                  className="hover:text-panesso-white transition-colors break-all"
                >
                  {footer.sections.contacto.email}
                </a>
              </p>
              {siteContent.company.linkedin && (
                <p>
                  <a
                    href={siteContent.company.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-panesso-white hover:text-panesso-light-gray underline transition-colors inline-flex items-center gap-2"
                  >
                    <span>LinkedIn</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                    </svg>
                  </a>
                </p>
              )}
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
            © {getCurrentYear()} Panesso Mercado Abogados. Todos los derechos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
