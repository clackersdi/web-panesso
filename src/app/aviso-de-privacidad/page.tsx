import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import FloatingWhatsAppButton from '@/components/FloatingWhatsAppButton';
import Container from '@/components/Container';

export const metadata = {
  title: 'Aviso de Privacidad | PANESSO MERCADO ABOGADOS',
  description: 'Aviso de privacidad de PANESSO MERCADO ABOGADOS',
};

const avisoContent = `AVISO DE PRIVACIDAD

PANESSO MERCADO S.A.S., identificada con NIT 901.606.069-8, con domicilio en Bogotá D.C. (Calle 95 No. 15-33, Oficina 204; correo electrónico notificaciones@panessomercado.com), en calidad de responsable del tratamiento, informa que trata datos personales, incluida su recolección, almacenamiento, uso, circulación, actualización, transmisión, transferencia y supresión, para las siguientes finalidades:

(i) Prestar servicios jurídicos y ejercer la representación de sus clientes;
(ii) Enviar comunicaciones comerciales relacionadas con servicios legales;
(iii) Cumplir obligaciones legales, contractuales y reglamentarias;
(iv) Elaboración de estadísticas y análisis internos;
(v) Verificación de identidad y prevención de fraude;
(vi) Mejora continua de servicios y experiencia del usuario.

DERECHOS DE LOS TITULARES DE DATOS

Como titular de datos personales, usted tiene derecho a:

1. Acceder a sus datos personales y conocer cómo están siendo tratados.
2. Solicitar la corrección, actualización o rectificación de sus datos cuando sea pertinente.
3. Solicitar la supresión de sus datos personales cuando ya no sean necesarios para las finalidades autorizado o cuando se haya revocado el consentimiento.
4. Revocar el consentimiento otorgado para el tratamiento de sus datos personales.
5. Solicitar información sobre a qué terceros se han transferido sus datos.
6. Presentar reclamaciones ante la Superintendencia de Industria y Comercio en caso de incumplimiento de esta política.

TITULAR DE DATOS MENORES DE EDAD

Cuando se recopilen datos de menores de edad, estos serán utilizados únicamente para la prestación de servicios jurídicos con la autorización del acudiente o representante legal.

PROCEDIMIENTO PARA EJERCER DERECHOS

Para ejercer sus derechos como titular de datos personales, puede dirigirse a PANESSO MERCADO S.A.S. mediante:

Correo Electrónico: notificaciones@panessomercado.com
Dirección: Calle 95 No. 15-33, Oficina 204, Bogotá D.C., Colombia
Teléfono: (+57) 313 3900829

Las solicitudes serán tramitadas dentro de un término de diez (10) días hábiles contados a partir de su recepción.

MEDIDAS DE SEGURIDAD

PANESSO MERCADO S.A.S. implementa medidas técnicas, administrativas y organizacionales para proteger los datos personales contra:

- Acceso no autorizado
- Alteración, pérdida o destrucción
- Uso, difusión o tratamiento no autorizado
- Cualquier otra forma de ilícito tratamiento

CAMBIOS AL AVISO DE PRIVACIDAD

PANESSO MERCADO S.A.S. podrá actualizar el presente Aviso de Privacidad en cualquier momento. Los cambios significativos serán publicados en este sitio web. Se recomienda revisar periódicamente este aviso para mantenerse informado sobre la forma en que protegemos sus datos.

TRANSFERENCIAS INTERNACIONALES

En caso de que sus datos personales sean transferidos a otros países, PANESSO MERCADO S.A.S. garantizará que dichas transferencias cumplan con la legislación aplicable en materia de protección de datos personales.

COOKIES Y TECNOLOGÍAS SIMILARES

El sitio web de PANESSO MERCADO S.A.S. puede utilizar cookies y otras tecnologías de seguimiento para:

- Mejorar la experiencia de navegación
- Recopilar información sobre el uso del sitio
- Personalizar contenido

El usuario puede configurar su navegador para rechazar cookies o recibir notificaciones cuando se intente instalar una.

INFORMACIÓN DE CONTACTO DEL RESPONSABLE

Para cualquier inquietud relacionada con el tratamiento de sus datos personales o el presente Aviso de Privacidad, puede contactarnos a:

PANESSO MERCADO S.A.S.
NIT: 901.606.069-8
Dirección: Calle 95 No. 15-33, Oficina 204, Bogotá D.C., Colombia
Correo Electrónico: notificaciones@panessomercado.com
Teléfono: (+57) 313 3900829

Autoridad de Supervisión: Superintendencia de Industria y Comercio (SIC)

VIGENCIA

El presente Aviso de Privacidad entra en vigencia a partir de su publicación en el sitio web de PANESSO MERCADO S.A.S.`;

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
