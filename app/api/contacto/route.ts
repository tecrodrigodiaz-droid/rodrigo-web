import { createClient } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const supabase = createClient(
  'https://pbwommsqhebzeezmfwov.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBid29tbXNxaGViemVlem1md292Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkyODg1NjksImV4cCI6MjA5NDg2NDU2OX0.N0n73IJLsf3gw4rZQ8QRdo4hBhr9TxCqTG_yPbonfbQ'
)

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

    const { error: supabaseError } = await supabase
      .from('solicitudes')
      .insert([{
        nombre,
        telefono,
        servicio,
        municipio: municipio || null,
        descripcion: descripcion || null,
        created_at: new Date().toISOString(),
      }])

    if (supabaseError) {
      console.error('Error Supabase:', supabaseError)
      return NextResponse.json(
        { error: 'Error al guardar la solicitud' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { ok: true, mensaje: 'Solicitud recibida correctamente' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error general:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}
