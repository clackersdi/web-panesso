import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { siteContent } from '@/lib/content';

export async function POST(request: Request) {
  const { nombre, email, celular, area, mensaje, authorized } = await request.json();

  if (!authorized) {
    return NextResponse.json(
      { error: 'Debe autorizar el tratamiento de datos personales.' },
      { status: 400 }
    );
  }

  if (!nombre || !email || !celular) {
    return NextResponse.json(
      { error: 'Nombre, correo y celular son obligatorios.' },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY no configurada. No se pudo enviar el correo.');
    return NextResponse.json(
      { error: 'El servicio de envío de correos no está configurado.' },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: 'Formulario Panesso Mercado <notificaciones@panessomercado.com>',
      to: siteContent.form.recipientEmails,
      replyTo: email,
      subject: `Nueva solicitud de consulta - ${nombre}`,
      text: `Nombre: ${nombre}
Correo: ${email}
Celular: ${celular}
Área de práctica: ${area || 'No especificada'}

Mensaje:
${mensaje || '(sin mensaje)'}`,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error enviando el formulario de contacto:', error);
    return NextResponse.json(
      { error: 'No se pudo enviar la solicitud. Intente nuevamente más tarde.' },
      { status: 500 }
    );
  }
}
