import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, telefono, mensaje } = body;

    if (!nombre || !telefono) {
      return NextResponse.json({ error: 'Faltan datos' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'rodrigodiazelectricista@gmail.com',
      subject: 'Nueva solicitud de ' + nombre,
      html: '<p><strong>Nombre:</strong> ' + nombre + '</p><p><strong>Telefono:</strong> ' + telefono + '</p><p><strong>Mensaje:</strong> ' + (mensaje || 'No indicado') + '</p>',
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}
