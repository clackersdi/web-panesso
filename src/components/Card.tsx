'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'hover';
}

export default function Card({
  children,
  className = '',
  variant = 'default',
}: CardProps) {
  const baseStyles = 'p-6 transition-all duration-300 ease-in-out';
  const variants = {
    default: 'bg-panesso-white text-panesso-black',
    hover:
      'bg-transparent border border-panesso-dark-gray hover:border-panesso-light-gray cursor-pointer',
  };

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
}
