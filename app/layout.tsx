import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Electricista Valencia | Rodrigo M. Díaz · Electrotecnia e Iluminación',
  description:
    'Electricista de confianza en Valencia y Comunitat Valenciana. Más de 20 años de experiencia en instalaciones eléctricas, luminotecnia LED y mantenimiento. Presupuesto sin compromiso.',
  keywords: [
    'electricista Valencia',
    'electricista Comunitat Valenciana',
    'instalaciones eléctricas Valencia',
    'luminotecnia Valencia',
    'iluminación LED Valencia',
    'mantenimiento eléctrico Valencia',
    'urgencias eléctricas Valencia',
    'diagnóstico eléctrico hogar Valencia',
    'electricista de confianza Valencia',
    'reforma eléctrica Valencia',
  ],
  authors: [{ name: 'Rodrigo M. Díaz' }],
  creator: 'Rodrigo M. Díaz · Electrotecnia e Iluminación',
  openGraph: {
    title: 'Electricista Valencia · Rodrigo M. Díaz | Electrotecnia e Iluminación',
    description:
      'Más de 20 años de experiencia. Instalaciones eléctricas, luminotecnia y mantenimiento en la Comunitat Valenciana. Transparencia total en cada trabajo.',
    locale: 'es_ES',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
