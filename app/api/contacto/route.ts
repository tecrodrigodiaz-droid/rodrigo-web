import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, telefono, servicio, municipio, descripcion } = body;

    if (!nombre || !telefono) {
      return NextResponse.json({ error: 'Faltan datos' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'rodrigodiazelectricista@gmail.com',
      subject: 'Nueva solicitud web',
      html: '<p>Nombre: ' + nombre + '</p><p>Telefono: ' + telefono + '</p><p>Servicio: ' + servicio + '</p><p>Municipio: ' + (municipio || 'No indicado') + '</p><p>Descripcion: ' + (descripcion || 'No indicada') + '</p>',
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}
