import type { Metadata } from 'next';
import { Alexandria, Nunito } from 'next/font/google';
import SchemaOrg from '@/components/SchemaOrg';
import './globals.css';

const alexandria = Alexandria({
  subsets: ['latin'],
  variable: '--font-alexandria',
  weight: ['100', '300', '400', '500', '700', '900'],
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'PANESSO MERCADO ABOGADOS | Asesoría Legal en Bogotá | Derecho Corporativo',
  description:
    'Asesoría legal integral en Bogotá D.C. Especializados en derecho corporativo, familia, laboral y comercial. Consultoría jurídica para empresas y personas naturales. Contacta nuestros abogados expertos.',
  keywords: [
    'abogados en Bogotá',
    'asesoría legal',
    'derecho corporativo',
    'derecho de familia',
    'derecho comercial',
    'derecho laboral',
    'consultoría legal',
    'servicios legales Bogotá',
    'litigio corporativo',
    'asesor legal empresarial',
    'abogados especialistas',
    'derecho de la competencia',
    'privacidad y datos',
    'derecho tributario',
    'PANESSO MERCADO',
  ],
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://panessomercado.com',
    siteName: 'PANESSO MERCADO ABOGADOS',
    title: 'PANESSO MERCADO ABOGADOS | Asesoría Legal en Bogotá',
    description: 'Asesoría legal integral con especialización en derecho corporativo, familiar y comercial. Abogados expertos en Bogotá D.C.',
    images: [
      {
        url: 'https://panessomercado.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PANESSO MERCADO ABOGADOS - Asesoría Legal en Bogotá',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PANESSO MERCADO ABOGADOS | Asesoría Legal',
    description: 'Servicios legales integrales en Bogotá. Derecho corporativo, familia, laboral y comercial.',
    creator: '@panessomercado',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: 'https://panessomercado.com',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${alexandria.variable} ${nunito.variable}`}>
      <head>
        <SchemaOrg />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
