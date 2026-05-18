import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  const { nombre, telefono, mensaje } = await request.json()

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'rodrigodiazelectricista@gmail.com',
    subject: `Nueva solicitud de visita — ${nombre}`,
    html: `
      <h2>Nueva solicitud de visita desde la web</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Mensaje:</strong> ${mensaje}</p>
    `,
  })

  return NextResponse.json({ ok: true })
}
