import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  'https://pbwommsqhebzeezmfwov.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBid29tbXNxaGViemVlem1md292Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyODg1NjksImV4cCI6MjA5NDg2NDU2OX0.N0n73IJLsf3gw4rZQ8QRdo4hBhr9TxCqTG_yPbonfbQ'
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, telefono, direccion, mensaje } = body;

    if (!nombre || !telefono) {
      return NextResponse.json({ error: 'Faltan datos' }, { status: 400 });
    }

    await supabase.from('solicitudes').insert({
      nombre,
      telefono,
      descripcion: mensaje,
      municipio: direccion || '',
      estado: 'nueva',
    });

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'rodrigodiazelectricista@gmail.com',
      subject: 'Nueva solicitud de ' + nombre,
      html: '<p><strong>Nombre:</strong> ' + nombre + '</p><p><strong>Telefono:</strong> ' + telefono + '</p><p><strong>Direccion:</strong> ' + (direccion || 'No indicada') + '</p><p><strong>Mensaje:</strong> ' + (mensaje || 'No indicado') + '</p>',
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error interno' }, { status: 500 });
  }
}
