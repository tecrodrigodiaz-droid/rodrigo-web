import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, telefono, servicio, municipio, descripcion } = body;

    if (!nombre || !telefono) {
      return NextResponse.json({ error: 'Faltan datos obligatorios' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'rodrigodiazelectricista@gmail.com',
      subject: `Nueva solicitud de ${nombre}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#0b1929;padding:24px;border-radius:8px 8px 0 0;">
            <h2 style="color:#e85d00;margin:0;">Nueva solicitud de presupuesto</h2>
          </div>
          <div style="background:#f9f9f9;padding:24px;border-radius:0 0 8px 8px;">
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Servicio:</strong> ${servicio}</p>
            <p><strong>Municipio:</strong> ${municipio || 'No indicado'}</p>
            <p><strong>Descripcion:</strong> ${descripcion || 'No indicada'}</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error enviando email:', error);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}
