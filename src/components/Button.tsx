'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outlined';
  className?: string;
  onClick?: () => void;
  href?: string;
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  onClick,
  href,
}: ButtonProps) {
  const baseStyles =
    'px-8 py-3 font-semibold text-sm uppercase tracking-widest transition-all duration-300 ease-in-out inline-flex items-center justify-center';

  const variants = {
    primary:
      'bg-panesso-white text-panesso-black hover:bg-panesso-light-gray',
    secondary:
      'border border-panesso-medium-gray text-panesso-light-gray hover:border-panesso-white hover:text-panesso-white',
    outlined:
      'border border-panesso-white text-panesso-white hover:bg-panesso-white hover:text-panesso-black',
  };

  const combinedClass = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClass}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClass}>
      {children}
    </button>
  );
}
