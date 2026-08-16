import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import Container from '@/components/Container';

export const metadata = {
  title: 'Política de Tratamiento de Datos Personales | PANESSO MERCADO ABOGADOS',
  description: 'Política de tratamiento de datos personales de PANESSO MERCADO ABOGADOS',
};

const politicaContent = `POLÍTICA DE TRATAMIENTO DE DATOS PERSONALES

PANESSO MERCADO S.A.S.

1. Objeto

La presente Política de Tratamiento de Datos Personales (la "Política") establece los lineamientos conforme a los cuales PANESSO MERCADO S.A.S. (la "Firma") trata los datos personales de los cuales es responsable, en cumplimiento de los artículos 15 y 20 de la Constitución Política, la Ley 1581 de 2012, el Decreto 1074 de 2015 y las demás normas que los desarrollen, modifiquen o complementen.

2. Responsable del Tratamiento

PANESSO MERCADO S.A.S., identificada con NIT 901.606.069-8, con domicilio en Bogotá D.C., Calle 95 No. 15-33, Oficina 204, es responsable del tratamiento de los datos personales recopilados por medio de los formularios de contacto y comunicaciones relacionadas con la prestación de servicios jurídicos.

3. Autoridad de Supervisión

La Superintendencia de Industria y Comercio es la autoridad de supervisión en lo relacionado con el cumplimiento de la presente Política.

4. Principios

El tratamiento de datos personales realizado por la Firma se regirá por los siguientes principios:

a) Legalidad: El tratamiento se realizará conforme a lo dispuesto en la Ley 1581 de 2012 y demás normas aplicables.

b) Finalidad: El tratamiento tendrá una finalidad legítima de acuerdo con la Constitución Política y la ley.

c) Libertad: El tratamiento se realiza con consentimiento del titular o en razón de una obligación legal.

d) Veracidad o Calidad: La información será veraz, exacta, actualizada, completa y comprensible.

e) Transparencia: Garantiza el derecho del titular a obtener del responsable del tratamiento información acerca de la existencia de datos que le conciernan.

f) Accesibilidad: Garantiza el derecho del titular a conocer, actualizar y rectificar sus datos personales.

g) Circulación Restringida: El tratamiento de datos se circunscribe a los órganos, entidades o personas autorizadas por la ley o por el titular.

h) Seguridad: La información se protege mediante medidas técnicas, humanas y administrativas que garanticen su seguridad.

i) Confidencialidad: Todas las personas que intervengan en el tratamiento de datos personales están obligadas a garantizar la reserva de la información.

5. Datos Personales Recopilados

La Firma recopila los siguientes datos personales a través de su sitio web:

- Nombre completo
- Correo electrónico
- Teléfono/Celular
- Información relacionada con servicios legales solicitados
- Mensajes y comunicaciones de los usuarios

6. Finalidades del Tratamiento

Los datos personales serán utilizados para:

a) Responder consultas y solicitudes de información
b) Prestar servicios de asesoría legal
c) Mantener comunicación con clientes y prospectos
d) Cumplir obligaciones legales y contractuales
e) Mejorar la calidad de los servicios ofrecidos
f) Enviar información sobre servicios y novedades de la Firma (solo con consentimiento previo)

7. Derechos de los Titulares

Los titulares de datos personales tienen los siguientes derechos:

a) Acceso: Solicitar y obtener información sobre si sus datos están siendo tratados.

b) Rectificación: Solicitar la corrección de datos personales que sean inexactos.

c) Supresión: Solicitar la eliminación de sus datos personales, salvo cuando exista una obligación legal de conservarlos.

d) Revocación del Consentimiento: Retirar el consentimiento otorgado para el tratamiento de sus datos.

e) Presentar Reclamaciones: Presentar quejas ante la Superintendencia de Industria y Comercio.

8. Ejercicio de Derechos

Los titulares pueden ejercer sus derechos dirigiéndose a:

Correo electrónico: notificaciones@panessomercado.com
Dirección: Calle 95 No. 15-33, Oficina 204, Bogotá D.C.

Las solicitudes serán respondidas dentro de un término de 10 días hábiles.

9. Transferencias de Datos

Los datos personales no serán transferidos a terceros sin consentimiento previo del titular, excepto cuando:

a) Sea necesario para cumplir una obligación legal
b) Sea en interés del titular
c) Sea autorizado por la ley

10. Seguridad de Datos

La Firma implementa medidas técnicas, humanas y administrativas para proteger los datos personales contra acceso no autorizado, alteración, uso ilícito o pérdida.

11. Cookies y Tecnologías de Rastreo

El sitio web puede utilizar cookies y otras tecnologías de rastreo para mejorar la experiencia del usuario. Los usuarios pueden configurar sus navegadores para rechazar cookies.

12. Cambios a la Política

La Firma se reserva el derecho de modificar esta Política en cualquier momento. Los cambios serán comunicados a través del sitio web.

13. Vigencia

La presente Política entra en vigor a partir de su publicación en el sitio web.`;

export default function PoliticaTratamientoDatos() {
  return (
    <main>
      <Navbar />
      <section className="w-full py-20 bg-panesso-black text-panesso-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h1 className="font-alexandria font-bold text-4xl sm:text-5xl mb-6">
                Política de Tratamiento de Datos Personales
              </h1>
              <div className="w-16 h-px bg-panesso-medium-gray" />
            </div>

            <div className="font-nunito text-panesso-light-gray leading-relaxed space-y-6 text-sm sm:text-base">
              {politicaContent.split('\n\n').map((paragraph, idx) => (
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
