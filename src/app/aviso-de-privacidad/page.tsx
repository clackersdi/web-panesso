import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import Container from '@/components/Container';

export const metadata = {
  title: 'Aviso de Privacidad | PANESSO MERCADO ABOGADOS',
  description: 'Aviso de privacidad de PANESSO MERCADO ABOGADOS',
};

const avisoContent = `AVISO DE PRIVACIDAD

PANESSO MERCADO S.A.S., identificada con NIT 901.606.069-8, con domicilio en Bogotá D.C. (Calle 95 No. 15-33, Oficina 204; correo electrónico notificaciones@panessomercado.com), en calidad de responsable del tratamiento, informa que trata datos personales, incluida su recolección, almacenamiento, uso, circulación, actualización, transmisión, transferencia y supresión, para las siguientes finalidades: (i) prestar servicios jurídicos y ejercer la representación de sus clientes en procedimientos administrativos, judiciales, extrajudiciales o arbitrales; (ii) verificar la existencia de conflictos de interés con carácter previo a la aceptación de un asunto; (iii) gestionar la relación profesional y contractual con clientes y proveedores; (iv) facturar y cumplir obligaciones contables, tributarias y de reporte; (v) adelantar la debida diligencia para la vinculación de clientes y proveedores, incluida la consulta en listas restrictivas; (vi) atender requerimientos de autoridades administrativas o judiciales; (vii) enviar comunicaciones sobre publicaciones, eventos y servicios de la firma; y (viii) mantener el archivo y la gestión documental de la firma.

El titular de los datos personales tiene derecho a: conocer, actualizar y rectificar sus datos; solicitar prueba de la autorización otorgada, salvo las excepciones legales; ser informado, previa solicitud, del uso dado a sus datos; presentar quejas ante la Superintendencia de Industria y Comercio por infracciones al régimen de protección de datos personales, una vez agotado el trámite de consulta o reclamo ante la firma; revocar la autorización y/o solicitar la supresión de los datos cuando no exista un deber legal o contractual que imponga su conservación; y acceder en forma gratuita a sus datos personales que hayan sido objeto de tratamiento.

La Política de Tratamiento de Datos Personales, que contiene los procedimientos para el ejercicio de los derechos de los titulares y sus eventuales modificaciones, está disponible en https://panessomercado.com/. Las consultas y los reclamos pueden dirigirse al correo electrónico notificaciones@panessomercado.com.`;

export default function AvisoPrivacidad() {
  return (
    <main>
      <Navbar />
      <section className="w-full py-20 bg-panesso-black text-panesso-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h1 className="font-alexandria font-bold text-4xl sm:text-5xl mb-6">
                Aviso de Privacidad
              </h1>
              <div className="w-16 h-px bg-panesso-medium-gray" />
            </div>

            <div className="font-nunito text-panesso-light-gray leading-relaxed space-y-6 text-sm sm:text-base">
              {avisoContent.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="whitespace-pre-wrap">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Container>
      </section>
      <Footer />
      <FloatingWhatsAppButton />
    </main>
  );
}
