'use client';

import React, { useState, useEffect } from 'react';
import Container from '../Container';
import Button from '../Button';
import { siteContent } from '@/lib/content';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full transition-all duration-300 z-50 ${
        isSticky
          ? 'fixed top-0 bg-panesso-black border-b border-panesso-dark-gray shadow-lg'
          : 'bg-panesso-black'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-2">
          {/* Logo Text */}
          <div className="flex-shrink-0">
            <a href="#" className="flex flex-col items-start gap-1">
              <span className="font-alexandria font-bold text-xl text-panesso-white leading-tight">
                PANESSO MERCADO
              </span>
              <span className="font-nunito text-xs text-panesso-light-gray font-semibold tracking-widest">
                Abogados
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {siteContent.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-panesso-light-gray font-nunito text-xs uppercase tracking-widest hover:text-panesso-white transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outlined" href="#contacto">Agenda tu consulta</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-panesso-white hover:text-panesso-light-gray transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-panesso-dark-gray pb-4 animate-fade-in">
            {siteContent.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-panesso-white font-nunito text-sm hover:bg-panesso-medium-gray transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 py-2">
              <Button variant="outlined" className="w-full" href="#contacto">
                Agenda tu consulta
              </Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
