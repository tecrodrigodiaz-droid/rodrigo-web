import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const supabase = createClient(
  'https://pbwommsqhebzeezmfwov.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBid29tbXNxaGViemVlem1md292Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyODg1NjksImV4cCI6MjA5NDg2NDU2OX0.N0n73IJLsf3gw4rZQ8QRdo4hBhr9TxCqTG_yPbonfbQ'
)
const resend = new Resend(process.env.RESEND_API_KEY!)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre, telefono, servicio, municipio, descripcion } = body

    if (!nombre || !telefono || !servicio) {
      return NextResponse.json(
        { error: 'Nombre, teléfono y servicio son obligatorios' },
        { status: 400 }
      )
    }

    await supabase.from('solicitudes').insert([{
      nombre, telefono, servicio,
      municipio: municipio || null,
      descripcion: descripcion || null,
      created_at: new Date().toISOString(),
    }])

    await resend.emails.send({
      from: 'Voltia Electricidad <noreply@voltiaelectricidad.es>',
      to: 'rodrigodiazelectricista@gmail.com',
      subject: `Nueva solicitud de ${nombre} — ${servicio}`,
      html: `<div style="font-family:sans-serif;max-width:560px;margin:0 auto;">
        <div style="background:#e85d00;padding:20px 24px;border-radius:8px 8px 0 0;">
          <h2 style="color:#fff;margin:0;">⚡ Nueva solicitud de visita</h2>
        </div>
        <div style="background:#f9f9f9;padding:24px;border-radius:0 0 8px 8px;">
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>
          <p><strong>Servicio:</strong> ${servicio}</p>
          <p><strong>Municipio:</strong> ${municipio || 'No indicado'}</p>
          <p><strong>Descripción:</stro
