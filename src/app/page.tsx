import Navbar from '@/components/sections/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import LocationMapSection from '@/components/sections/LocationMapSection';
import PartnersSection from '@/components/sections/PartnersSection';
import CTASection from '@/components/sections/CTASection';
import ContactFormSection from '@/components/sections/ContactFormSection';
import Footer from '@/components/sections/Footer';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <LocationMapSection />
      <PartnersSection />
      <CTASection />
      <ContactFormSection />
      <Footer />
      <FloatingWhatsAppButton />
    </main>
  );
}
