import Navbar from '@/components/sections/Navbar';
import PracticeAreasSection from '@/components/sections/PracticeAreasSection';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';

export const metadata = {
  title: 'Servicios | PANESSO MERCADO ABOGADOS',
  description:
    'Conozca nuestras áreas de práctica: derecho de la competencia, protección de datos, derecho del consumo, familia, corporativo, laboral y más.',
};

export default function ServiciosPage() {
  return (
    <main>
      <Navbar />
      <PracticeAreasSection />
      <CTASection />
      <Footer />
      <FloatingWhatsAppButton />
    </main>
  );
}
