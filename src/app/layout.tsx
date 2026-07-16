import type { Metadata } from 'next';
import { Alexandria, Nunito } from 'next/font/google';
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
  title: 'PANESSO MERCADO ABOGADOS | Asesoría Legal Integral',
  description:
    'Experiencia, tecnología y visión estratégica en asesoría legal corporativa, laboral, tributaria y más.',
  icons: {
    icon: '/favicon.ico',
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
      <body>
        {children}
      </body>
    </html>
  );
}
