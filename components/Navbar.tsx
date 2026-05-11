export default function Contacto() {
  return (
    <section id="contacto" className="py-20 bg-[#0f2035]">
      <div className="max-w-md mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-[#e85d001a] border border-[#e85d0033] rounded-full px-4 py-1.5 text-xs text-[#ff7a20] font-semibold mb-4">
            📞 Hablemos
          </span>
          <h2 className="text-3xl font-bold mb-3">
            Ponte en <span className="text-[#e85d00]">contacto</span>
          </h2>
          <div className="w-11 h-0.5 bg-[#e85d00] rounded mx-auto mb-4" />
          <p className="text-[#94a8bc] text-sm">
            Te atendemos directamente · sin formularios · sin esperas
          </p>
        </div>

        {/* TARJETA */}
        <div className="bg-[#112030] border border-[#e85d0022] rounded-xl p-7 text-center">
          <h3 className="text-lg font-bold text-[#f0f4f8] mb-3">
            ¿Cómo prefieres contactar?
          </h3>
          <p className="text-[13px] text-[#94a8bc] mb-6 leading-relaxed">
            Cuéntanos tu caso y te damos respuesta rápida y personalizada.
            Sin intermediarios.
          </p>

          <div className="flex flex-col gap-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/34XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25d366] hover:bg-[#1eb858] text-white font-bold py-4 px-6 rounded-xl text-[14px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_5px_20px_rgba(37,211,102,0.3)]"
            >
              💬 WhatsApp — mensaje directo
            </a>

            {/* Teléfono */}
            <a
              href="tel:+34XXXXXXXXX"
              className="flex items-center justify-center gap-3 bg-[#e85d00] hover:bg-[#ff7a20] text-white font-bold py-4 px-6 rounded-xl text-[14px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_5px_20px_rgba(232,93,0,0.3)]"
            >
              📞 Llamar ahora
            </a>

            {/* Email */}
            <a
              href="mailto:info@rodrigodiazelectrico.es"
              className="flex items-center justify-center gap-3 bg-transparent border border-white/18 hover:border-[#e85d00] hover:text-[#e85d00] text-[#f0f4f8] font-semibold py-4 px-6 rounded-xl text-[14px] transition-all duration-200"
            >
              ✉️ Enviar email
            </a>
          </div>

          {/* ZONA */}
          <p className="text-[11px] text-[#5c7a94] mt-5">
            📍 Comunitat Valenciana · Valencia y área metropolitana
          </p>
        </div>

      </div>
    </section>
  )
}
const checks = [
  {
    color: 'green', icon: '🌱', title: 'Chequeo de Eficiencia Energética',
    desc: 'Analizamos el consumo real y te decimos exactamente dónde estás perdiendo dinero en la factura.',
    items: ['Auditoría de consumo por circuito', 'Evaluación iluminación actual vs LED', 'Revisión tarifa contratada vs consumo real', 'Propuesta de mejora con ahorro estimado'],
    tag: '📄 Informe con calificación energética',
  },
  {
    color: 'red', icon: '⚠️', title: 'Detección de Fugas de Corriente',
    desc: 'Localización precisa de fugas activas y verificación del estado del aislamiento de la instalación.',
    items: ['Medición de corriente de fuga por línea', 'Test de resistencia de aislamiento', 'Verificación de diferencial y tierra', 'Registro fotográfico de hallazgos'],
    tag: '🔍 Localización exacta del fallo',
  },
  {
    color: 'blue', icon: '🔧', title: 'Acondicionamiento de Líneas',
    desc: 'Revisamos y adecuamos cada línea al REBT vigente. Instalaciones antiguas son un riesgo.',
    items: ['Comprobación de sección de cable', 'Detección de empalmes deficientes', 'Verificación de protecciones adecuadas', 'Adecuación a electrificación básica/elevada'],
    tag: '📐 Cumplimiento ITC-BT-25',
  },
  {
    color: 'yellow', icon: '📊', title: 'Chequeo de Consumos',
    desc: '¿La factura sube sin motivo? Medimos el consumo real de cada línea para darte el diagnóstico exacto.',
    items: ['Medición por fase con pinza amperimétrica', 'Identificación de consumos fantasma', 'Comparativa potencia contratada vs real', 'Detección de desequilibrios entre fases'],
    tag: '💡 Ahorro medio identificado: 25–40 €/mes',
  },
]

const colorMap: Record<string, { bar: string; ico: string; tag: string; check: string }> = {
  green:  { bar: 'bg-[#4ecb7a]', ico: 'bg-[#4ecb7a1a]', tag: 'bg-[#4ecb7a1a] border-[#4ecb7a33] text-[#4ecb7a]', check: 'text-[#4ecb7a]' },
  red:    { bar: 'bg-[#e84040]', ico: 'bg-[#e840401a]', tag: 'bg-[#e840401a] border-[#e8404033] text-[#e84040]', check: 'text-[#e84040]' },
  blue:   { bar: 'bg-[#3b9ede]', ico: 'bg-[#3b9ede1a]', tag: 'bg-[#3b9ede1a] border-[#3b9ede33] text-[#3b9ede]', check: 'text-[#3b9ede]' },
  yellow: { bar: 'bg-[#f5c518]', ico: 'bg-[#f5c5181a]', tag: 'bg-[#f5c5181a] border-[#f5c51833] text-[#f5c518]', check: 'text-[#f5c518]' },
}

export default function Diagnostico() {
  return (
    <section id="diagnostico" className="py-20 bg-[#0f2035]">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-[#e85d001a] border border-[#e85d0033] rounded-full px-4 py-1.5 text-xs text-[#ff7a20] font-semibold mb-4">
            🔍 Servicio especializado
          </span>
          <h2 className="text-3xl font-bold mb-3">
            Diagnóstico <span className="text-[#e85d00]">Eléctrico del Hogar</span>
          </h2>
          <div className="w-11 h-0.5 bg-[#e85d00] rounded mx-auto mb-4" />
          <p className="text-[#94a8bc] text-sm max-w-md mx-auto">
            Revisión técnica completa · Informe PDF con registro fotográfico · Sin compromiso
          </p>
        </div>

        {/* GRID 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {checks.map((c) => {
            const col = colorMap[c.color]
            return (
              <div
                key={c.title}
                className="bg-[#112030] border border-white/6 rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
              >
                <div className={`h-0.5 ${col.bar}`} />
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-9 h-9 rounded-lg ${col.ico} flex items-center justify-center text-lg flex-shrink-0`}>
                      {c.icon}
                    </div>
                    <h3 className="text-[13px] font-bold text-[#f0f4f8] leading-tight">{c.title}</h3>
                  </div>
                  <p className="text-[11px] text-[#94a8bc] leading-relaxed mb-3">{c.desc}</p>
                  <ul className="space-y-1.5 mb-4">
                    {c.items.map(item => (
                      <li key={item} className="flex items-start gap-2 text-[10px] text-[#94a8bc]">
                        <span className={`${col.check} font-bold text-[9px] mt-0.5 flex-shrink-0`}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className={`inline-flex items-center border rounded-md px-3 py-1 text-[10px] font-bold ${col.tag}`}>
                    {c.tag}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* BANNER INFORME */}
        <div className="bg-[#e85d000d] border border-[#e85d0033] rounded-xl p-5 flex gap-4 items-start">
          <div className="text-3xl flex-shrink-0">📋</div>
          <div>
            <h4 className="text-[15px] font-bold text-[#f0f4f8] mb-2">
              Diagnóstico Eléctrico Completo del Hogar
            </h4>
            <p className="text-[12px] text-[#94a8bc] leading-relaxed mb-3">
              Al finalizar la visita recibes un informe PDF profesional con registro
              fotográfico, hallazgos y presupuesto de corrección. Todo documentado y
              enviado a tu email.
            </p>
            <div className="flex flex-wrap gap-2">
              {['📄 Informe PDF', '📸 Registro fotográfico', '📧 Enviado a tu email', '🗂️ Sin compromiso'].map(t => (
                <span key={t} className="bg-[#e85d001a] border border-[#e85d0022] rounded px-2.5 py-1 text-[10px] text-[#ff7a20] font-semibold">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-[#050c16] border-t border-[#e85d0022] pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">

          {/* MARCA */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <Logo size={28} />
              <span className="text-[13px] font-bold text-[#f0f4f8]">Rodrigo M. Díaz</span>
            </div>
            <p className="text-[11px] text-[#5c7a94] leading-relaxed">
              Electrotecnia · Iluminación<br />
              Tu electricista de confianza<br />
              Comunitat Valenciana · España
            </p>
          </div>

          {/* SERVICIOS */}
          <div>
            <h4 className="text-[11px] font-bold text-[#f0f4f8] uppercase tracking-wider mb-3">
              Servicios
            </h4>
            <ul className="space-y-1.5">
              {['⚡ Instalaciones eléctricas', '💡 Luminotecnia LED', '🔧 Mantenimiento', '🏗️ Reformas', '🚨 Urgencias'].map(s => (
                <li key={s} className="text-[11px] text-[#5c7a94]">{s}</li>
              ))}
            </ul>
          </div>

          {/* COBERTURA */}
          <div>
            <h4 className="text-[11px] font-bold text-[#f0f4f8] uppercase tracking-wider mb-3">
              Cobertura
            </h4>
            <ul className="space-y-1.5">
              {['📍 Valencia ciudad', '📍 Área metropolitana', '📍 Comunitat Valenciana'].map(s => (
                <li key={s} className="text-[11px] text-[#5c7a94]">{s}</li>
              ))}
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="text-[11px] font-bold text-[#f0f4f8] uppercase tracking-wider mb-3">
              Legal
            </h4>
            <ul className="space-y-1.5">
              {['📄 Aviso legal', '🔒 Privacidad', '🍪 Cookies'].map(s => (
                <li key={s} className="text-[11px] text-[#5c7a94]">{s}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/5 pt-5 flex flex-col sm:flex-row justify-between gap-2">
          <span className="text-[10px] text-[#5c7a94]">
            © 2025 Rodrigo M. Díaz · Electrotecnia e Iluminación
          </span>
          <span className="text-[10px] text-[#5c7a94]">
            Comunitat Valenciana · España
          </span>
        </div>

      </div>
    </footer>
  )
}import Image from 'next/image'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* FONDO */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=80"
          alt="Instalación eléctrica profesional"
          fill
          className="object-cover opacity-25"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050d16]/97 via-[#050d16]/80 to-[#050d16]/30" />
      </div>

      {/* GLOW naranja decorativo */}
      <div className="absolute top-[10%] right-[12%] w-72 h-72 rounded-full bg-[radial-gradient(circle,rgba(232,93,0,0.18)_0%,transparent_70%)] animate-glow z-0 pointer-events-none" />

      {/* CONTENIDO */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 w-full">
        <div className="max-w-xl">

          <div className="inline-flex items-center gap-2 bg-[#e85d001a] border border-[#e85d0055] rounded-full px-4 py-1.5 text-xs text-[#ff7a20] font-semibold mb-5 animate-fade-up">
            ⚡ Tu electricista de confianza
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 animate-fade-up delay-100">
            Instalaciones eléctricas<br />
            e{' '}
            <span className="text-[#e85d00]">iluminación profesional</span>
          </h1>

          <p className="text-[#94a8bc] text-base leading-relaxed mb-3 max-w-lg animate-fade-up delay-200">
            Más de 20 años de experiencia en instalaciones eléctricas,
            luminotecnia y mantenimiento en la Comunitat Valenciana.
          </p>

          <div className="flex items-center gap-2 text-sm text-[#5c7a94] mb-8 animate-fade-up delay-200">
            📍 Comunitat Valenciana · España
          </div>

          <div className="flex gap-3 flex-wrap animate-fade-up delay-300">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 bg-[#e85d00] hover:bg-[#ff7a20] text-white font-bold px-6 py-3.5 rounded-lg text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_24px_rgba(232,93,0,0.35)]"
            >
              📞 Contactar ahora
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 bg-transparent border border-white/20 hover:border-[#e85d00] hover:text-[#e85d00] text-white font-semibold px-6 py-3.5 rounded-lg text-sm transition-all duration-200"
            >
              Ver servicios →
            </a>
          </div>

          {/* STATS */}
          <div className="flex gap-8 mt-10 pt-8 border-t border-white/8 animate-fade-up delay-400">
            {[
              { num: '20+',   label: 'Años exp.' },
              { num: '100%',  label: 'Transparente' },
              { num: '★ 5.0', label: 'Valoración' },
            ].map(s => (
              <div key={s.label}>
                <strong className="block text-2xl font-extrabold text-[#e85d00]">{s.num}</strong>
                <span className="text-[10px] text-[#5c7a94] uppercase tracking-wider">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FOTO STRIP */}
      <div className="absolute bottom-0 right-0 hidden lg:grid grid-cols-3 gap-3 w-[420px] p-5 z-10">
        {[
          { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80', title: '💡 Iluminación residencial', sub: 'Ambiente y eficiencia LED' },
          { src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80', title: '⚡ Cuadros eléctricos', sub: 'Instalación y renovación' },
          { src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80', title: '🌱 Eficiencia', sub: 'Ahorro en tu factura' },
        ].map(photo => (
          <div key={photo.title} className="rounded-xl overflow-hidden h-28 relative bg-[#0d1e2e] group">
            <Image src={photo.src} alt={photo.title} fill className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-400" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050d16]/90 to-transparent" />
            <div className="absolute bottom-2 left-2.5 right-2">
              <p className="text-[11px] font-bold text-white leading-tight">{photo.title}</p>
              <p className="text-[9px] text-white/60">{photo.sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* FOTO STRIP MOBILE */}
      <div className="lg:hidden absolute bottom-0 left-0 right-0 grid grid-cols-3 gap-2 px-4 pb-4 z-10">
        {[
          { src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80', title: '💡 Iluminación' },
          { src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80', title: '⚡ Cuadros' },
          { src: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&q=80', title: '🌱 Eficiencia' },
        ].map(photo => (
          <div key={photo.title} className="rounded-lg overflow-hidden h-20 relative bg-[#0d1e2e]">
            <Image src={photo.src} alt={photo.title} fill className="object-cover opacity-70" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050d16]/90 to-transparent" />
            <p className="absolute bottom-1.5 left-2 text-[10px] font-bold text-white">{photo.title}</p>
          </div>
        ))}
      </div>

    </section>
  )
}export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size * 1.1}
      viewBox="0 0 34 38"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Logo Rodrigo M. Díaz Electrotecnia"
    >
      {/* Cuerpo exterior de la bombilla — azul marino */}
      <circle cx="17" cy="14" r="13" fill="#1a3a6e" />
      {/* Círculo interior turquesa */}
      <circle cx="17" cy="14" r="9" fill="#3dbfb8" />
      {/* M + rayo blanco */}
      <polyline
        points="11,18 13.5,9 17,14.5 20.5,9 23,18"
        fill="none"
        stroke="white"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Base de la bombilla */}
      <rect x="13"   y="27"  width="8"  height="3"   rx="1.5" fill="#1a3a6e" />
      <rect x="12"   y="31"  width="10" height="2.5" rx="1.2" fill="#162d58" />
      <rect x="13.5" y="34"  width="7"  height="2"   rx="1"   fill="#1a3a6e" />
      {/* Conector inferior */}
      <rect x="14" y="26" width="6" height="2" fill="#0f2035" />
    </svg>
  )
}'use client'

import { useState, useEffect } from 'react'
import Logo from './Logo'

const links = [
  { label: 'Inicio',      href: '#inicio' },
  { label: 'Servicios',   href: '#servicios' },
  { label: 'Diagnóstico', href: '#diagnostico' },
  { label: 'Nosotros',    href: '#nosotros' },
  { label: 'Reseñas',     href: '#resenas' },
  { label: 'Tarifas',     href: '#tarifas' },
  { label: 'Contacto',    href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]     = useState('#inicio')
  const [open, setOpen]         = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      // Detectar sección activa
      const sections = links.map(l => l.href.slice(1))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${id}`)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href: string) => {
    setOpen(false)
    const el = document.getElementById(href.slice(1))
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0b1929]/98 border-b border-[#e85d0033] shadow-[0_4px_24px_rgba(0,0,0,0.4)]'
          : 'bg-[#0b1929]/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between gap-4">

        {/* LOGO */}
        <button
          onClick={() => scrollTo('#inicio')}
          className="flex items-center gap-2.5 flex-shrink-0"
        >
          <Logo size={32} />
          <div className="text-left">
            <div className="text-sm font-bold text-[#f0f4f8] leading-tight">
              Rodrigo M. Díaz
            </div>
            <div className="text-[9px] text-[#e85d00] font-normal tracking-wide">
              Electrotecnia · Iluminación
            </div>
          </div>
        </button>

        {/* LINKS DESKTOP */}
        <div className="hidden md:flex items-center gap-0.5">
          {links.map(link => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className={`text-[11px] px-2.5 py-1.5 rounded-md transition-all duration-200 ${
                active === link.href
                  ? 'text-[#f0f4f8] bg-[#e85d001a]'
                  : 'text-[#5c7a94] hover:text-[#f0f4f8] hover:bg-[#e85d000d]'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollTo('#contacto')}
          className="hidden md:flex items-center gap-2 bg-[#e85d00] hover:bg-[#ff7a20] text-white text-xs font-bold px-3.5 py-2 rounded-lg transition-all duration-200 hover:-translate-y-px flex-shrink-0"
        >
          📞 Contactar
        </button>

        {/* HAMBURGER MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menú"
        >
          <span className={`block w-5 h-0.5 bg-[#f0f4f8] transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-[#f0f4f8] transition-all ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-[#f0f4f8] transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* MENÚ MOBILE */}
      {open && (
        <div className="md:hidden bg-[#0b1929] border-t border-[#e85d0022] px-4 py-3 flex flex-col gap-1">
          {links.map(link => (
            <button
              key={link.href}
              onClick={() => scrollTo(link.href)}
              className="text-left text-sm text-[#94a8bc] hover:text-[#f0f4f8] py-2.5 px-3 rounded-lg hover:bg-[#e85d000d] transition-all"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo('#contacto')}
            className="mt-2 bg-[#e85d00] text-white text-sm font-bold py-3 rounded-lg"
          >
            📞 Contactar ahora
          </button>
        </div>
      )}
    </nav>
  )
}const razones = [
  { icon: '🔍', title: 'Diagnóstico donde otros no ven', desc: '20 años de casuística real. Identificamos el problema con precisión — menos tiempo en obra, menos coste para ti.', pill: 'Instrumentación profesional', color: 'g' },
  { icon: '📸', title: 'Registro fotográfico siempre', desc: 'Fotos del estado antes y después de cada trabajo. Queda constancia de todo lo realizado en cada intervención.', pill: 'Transparencia total', color: 'b' },
  { icon: '📄', title: 'Presupuesto cerrado siempre', desc: 'Precio acordado antes de empezar, por escrito. Sin sorpresas al finalizar — lo acordado es lo que pagas.', pill: 'Sin letra pequeña', color: 'o' },
  { icon: '💡', title: 'Especialistas en iluminación eficiente', desc: 'Formación específica en luminotecnia en España. La luz correcta en cada espacio mejora el confort y reduce la factura.', pill: 'Especialidad diferencial', color: 'g' },
  { icon: '🗂️', title: 'Historial completo de tu vivienda', desc: 'Cada intervención queda registrada. En la próxima visita sabemos exactamente qué se hizo y qué queda pendiente.', pill: 'Memoria técnica digital', color: 'b' },
  { icon: '🤝', title: 'Trato directo · Sin intermediarios', desc: 'Hablas siempre con la misma persona. Atención personalizada con el rigor técnico de un profesional cualificado.', pill: 'Confianza y proximidad', color: 'o' },
]

const pillClass: Record<string, string> = {
  g: 'bg-[#4ecb7a0d] border-[#4ecb7a22] text-[#4ecb7a]',
  b: 'bg-[#3b9ede0d] border-[#3b9ede22] text-[#3b9ede]',
  o: 'bg-[#e85d000d] border-[#e85d0022] text-[#ff7a20]',
}

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-20 bg-[#0b1929]">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-[#e85d001a] border border-[#e85d0033] rounded-full px-4 py-1.5 text-xs text-[#ff7a20] font-semibold mb-4">
            ⭐ La diferencia que se nota
          </span>
          <h2 className="text-3xl font-bold mb-3">
            Por qué <span className="text-[#e85d00]">elegirnos</span>
          </h2>
          <div className="w-11 h-0.5 bg-[#e85d00] rounded mx-auto mb-4" />
          <p className="text-[#94a8bc] text-sm">
            Experiencia real en cada instalación · transparencia total en cada trabajo
          </p>
        </div>

        {/* BLOQUE 20 AÑOS */}
        <div className="bg-[#112030] border border-[#e85d0022] rounded-xl p-6 flex gap-6 items-center mb-6">
          <div className="text-center flex-shrink-0">
            <strong className="block text-6xl font-black text-[#e85d00] leading-none">20+</strong>
            <span className="text-[10px] text-[#5c7a94] uppercase tracking-widest block mt-1">
              años de<br />experiencia
            </span>
          </div>
          <div className="w-px bg-white/8 self-stretch flex-shrink-0" />
          <div>
            <h3 className="text-lg font-bold text-[#f0f4f8] mb-2 leading-tight">
              Lo que no se aprende<br />
              en ningún <span className="text-[#e85d00]">curso</span>
            </h3>
            <p className="text-[12px] text-[#94a8bc] leading-relaxed">
              Dos décadas resolviendo instalaciones complejas y averías difíciles.
              La experiencia acumulada es el activo que ninguna tecnología puede
              reemplazar — y la ponemos al servicio del cliente en cada trabajo.
            </p>
          </div>
        </div>

        {/* GRID RAZONES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {razones.map(r => (
            <div
              key={r.title}
              className="bg-[#112030] border border-white/6 rounded-xl p-4 hover:border-[#e85d0033] hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#e85d001a] flex items-center justify-center text-lg flex-shrink-0">
                  {r.icon}
                </div>
                <h4 className="text-[13px] font-bold text-[#f0f4f8] leading-tight">{r.title}</h4>
              </div>
              <p className="text-[11px] text-[#94a8bc] leading-relaxed mb-3">{r.desc}</p>
              <span className={`inline-block border rounded-md px-2.5 py-1 text-[10px] font-semibold ${pillClass[r.color]}`}>
                {r.pill}
              </span>
            </div>
          ))}
        </div>

        {/* STRIP LO QUE INCLUYE */}
        <div className="bg-[#0b1929]/70 border border-white/6 rounded-xl p-5">
          <p className="text-[11px] font-bold text-[#5c7a94] uppercase tracking-widest mb-4">
            ✅ Lo que incluye cada trabajo
          </p>
          <div className="grid grid-cols-3 gap-3">
            {[
              { em: '📸', label: 'Fotos\nantes/después' },
              { em: '📄', label: 'Presupuesto\npor escrito' },
              { em: '📋', label: 'Informe PDF\nal finalizar' },
            ].map(item => (
              <div key={item.em} className="text-center py-4 bg-[#112030] rounded-lg border border-white/5">
                <span className="block text-xl mb-2">{item.em}</span>
                <span className="text-[9px] text-[#5c7a94] whitespace-pre-line leading-relaxed">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}export default function Resenas() {
  return (
    <section id="resenas" className="py-20 bg-[#0f2035]">
      <div className="max-w-2xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-[#e85d001a] border border-[#e85d0033] rounded-full px-4 py-1.5 text-xs text-[#ff7a20] font-semibold mb-4">
            💬 Clientes reales
          </span>
          <h2 className="text-3xl font-bold mb-3">
            Lo que dicen <span className="text-[#e85d00]">nuestros clientes</span>
          </h2>
          <div className="w-11 h-0.5 bg-[#e85d00] rounded mx-auto mb-4" />
          <p className="text-[#94a8bc] text-sm">
            Reseñas reales de clientes de la Comunitat Valenciana
          </p>
        </div>

        {/* RESEÑA REAL */}
        <div className="bg-[#112030] border border-[#e85d0022] rounded-xl p-6 mb-5">
          <div className="text-[#f5a623] text-xl mb-3">★★★★★</div>
          <p className="text-[14px] text-[#f0f4f8] leading-relaxed italic mb-5">
            <span className="text-3xl text-[#e85d00] leading-none align-[-10px] mr-1">"</span>
            Hemos contactado con Rodrigo a través de tienes sal para que nos ayudará
            con un problema que teníamos y hemos quedado muy satisfechos con su
            profesionalidad, trato y tarifa. Si alguien necesita un electricista que
            no dude en contactar con él.
          </p>
          <div className="flex items-center gap-3 pt-4 border-t border-white/6">
            <div className="w-9 h-9 rounded-full bg-[#e85d0022] flex items-center justify-center text-sm font-bold text-[#e85d00]">
              C
            </div>
            <div>
              <strong className="block text-[12px] text-[#f0f4f8]">Cliente verificado</strong>
              <span className="text-[11px] text-[#5c7a94]">Comunitat Valenciana · Reseña real</span>
            </div>
          </div>
        </div>

        {/* CTA RESEÑA */}
        <div className="bg-gradient-to-br from-[#e85d000d] to-[#e85d0005] border border-[#e85d0025] rounded-xl p-6 text-center">
          <h4 className="text-[15px] font-bold text-[#f0f4f8] mb-3">
            💬 Deja tu reseña y opinión sobre nuestro trabajo
          </h4>
          <p className="text-[12px] text-[#94a8bc] leading-relaxed max-w-sm mx-auto">
            Tu comentario nos ayudará a ser mejores y a seguir brindando un
            servicio de calidad. Cada opinión cuenta y la leemos personalmente.
          </p>
        </div>

      </div>
    </section>
  )
}import Image from 'next/image'

const servicios = [
  {
    icon: '💡',
    title: 'Luminotecnia e iluminación',
    desc: 'Proyectos de iluminación decorativa, funcional y eficiente. Selección de temperatura de color según el espacio — zonas de descanso, trabajo o ambiente. LED y sistemas personalizados.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80',
    featured: true,
  },
  {
    icon: '⚡',
    title: 'Instalaciones eléctricas',
    desc: 'Instalaciones nuevas y reformas en viviendas, locales y comunidades. Adecuación al REBT vigente en cada proyecto.',
    img: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=500&q=80',
  },
  {
    icon: '🔧',
    title: 'Mantenimiento preventivo',
    desc: 'Revisión periódica de tu instalación. Detección temprana de fallos antes de que se conviertan en averías o riesgos reales.',
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&q=80',
  },
  {
    icon: '🏗️',
    title: 'Reformas eléctricas',
    desc: 'Actualización y ampliación de instalaciones. Cuadros eléctricos, nuevos circuitos, tomas de corriente y puntos de luz.',
    img: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&q=80',
  },
  {
    icon: '🌱',
    title: 'Eficiencia energética',
    desc: 'Auditoría de consumo, sustitución LED y diagnóstico de factura. Ahorro real y documentado en tu hogar o negocio.',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=500&q=80',
  },
  {
    icon: '🚨',
    title: 'Urgencias',
    desc: 'Atención prioritaria cuando lo necesitas. Prioridad 1 de agenda — una urgencia eléctrica no puede esperar.',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80',
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 bg-[#0b1929]">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-[#e85d001a] border border-[#e85d0033] rounded-full px-4 py-1.5 text-xs text-[#ff7a20] font-semibold mb-4">
            ⚡ Qué hacemos
          </span>
          <h2 className="text-3xl font-bold mb-3">
            Nuestros <span className="text-[#e85d00]">servicios</span>
          </h2>
          <div className="w-11 h-0.5 bg-[#e85d00] rounded mx-auto mb-4" />
          <p className="text-[#94a8bc] text-sm max-w-lg mx-auto">
            Instalaciones · iluminación · mantenimiento · reformas · urgencias
            en toda la Comunitat Valenciana
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {servicios.map((srv) => (
            <div
              key={srv.title}
              className={`group bg-[#112030] rounded-xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] ${
                srv.featured
                  ? 'border-[#e85d0066] bg-gradient-to-br from-[#e85d000d] to-[#112030]'
                  : 'border-white/6 hover:border-[#e85d0044]'
              }`}
            >
              {/* IMAGEN */}
              <div className="relative h-36 overflow-hidden bg-[#0d1e2e]">
                <Image
                  src={srv.img}
                  alt={srv.title}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                />
                {srv.featured && (
                  <div className="absolute top-3 right-3 bg-[#e85d00] text-white text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Especialidad
                  </div>
                )}
              </div>

              {/* BODY */}
              <div className="p-5">
                <div className="text-2xl mb-2.5">{srv.icon}</div>
                <h3 className="text-sm font-bold text-[#f0f4f8] mb-2">{srv.title}</h3>
                <p className="text-[11px] text-[#94a8bc] leading-relaxed">{srv.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}const urgencias = [
  {
    color: 'green', icon: '☀️', label: 'Horario normal',
    when: 'Lunes a viernes\n08:00 – 20:00 h', price: '55',
  },
  {
    color: 'blue', icon: '📅', label: 'Sábados y festivos',
    when: 'Sábados y festivos\n08:00 – 20:00 h', price: '95',
  },
  {
    color: 'orange', icon: '🚨', label: 'Urgencia',
    when: 'Atención inmediata\nPrioridad 1 de agenda', price: '135', prio: true,
  },
]

const serviciosTabla = [
  { name: 'Pequeña avería', badge: '+ frecuente', badgeColor: 'o', desc: 'Diagnóstico + reparación in situ', price: '55 €' },
  { name: 'Cambio de cuadro eléctrico', desc: 'Material + instalación + pruebas', price: '350 €' },
  { name: 'Iluminación LED', badge: 'Especialidad', badgeColor: 'g', desc: 'Proyecto + suministro + montaje', price: 'Consultar' },
  { name: 'Toma de corriente / punto de luz', desc: 'Apertura, cableado, acabado', price: '65 €' },
  { name: 'Mantenimiento preventivo anual', desc: 'Revisión completa + informe PDF', price: '90 €' },
]

const urgColor: Record<string, string> = {
  green:  'border-[#4ecb7a33] before:bg-[#4ecb7a]',
  blue:   'border-white/7',
  orange: 'border-[#e85d0066] bg-[#e85d0008]',
}
const lblColor: Record<string, string> = {
  green: 'text-[#4ecb7a]', blue: 'text-[#3b9ede]', orange: 'text-[#e85d00]',
}
const badgeColor: Record<string, string> = {
  o: 'bg-[#e85d001a] border-[#e85d0022] text-[#ff7a20]',
  g: 'bg-[#4ecb7a1a] border-[#4ecb7a22] text-[#4ecb7a]',
}

export default function Tarifas() {
  return (
    <section id="tarifas" className="py-20 bg-[#0b1929]">
      <div className="max-w-4xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-[#e85d001a] border border-[#e85d0033] rounded-full px-4 py-1.5 text-xs text-[#ff7a20] font-semibold mb-4">
            💶 Sin sorpresas
          </span>
          <h2 className="text-3xl font-bold mb-3">
            Tarifas <span className="text-[#e85d00]">orientativas</span>
          </h2>
          <div className="w-11 h-0.5 bg-[#e85d00] rounded mx-auto mb-4" />
          <p className="text-[#94a8bc] text-sm">
            Presupuesto cerrado por escrito antes de empezar cualquier trabajo
          </p>
        </div>

        {/* DISCLAIMER */}
        <div className="bg-[#3b9ede0d] border border-[#3b9ede22] rounded-lg px-4 py-3 text-[12px] text-[#94a8bc] mb-6">
          ℹ️&nbsp; <strong className="text-[#3b9ede]">Precios orientativos.</strong> El coste
          final depende de la complejidad y materiales. Antes de comenzar recibirás un{' '}
          <strong className="text-[#3b9ede]">presupuesto cerrado y por escrito</strong>.
        </div>

        {/* URGENCIAS */}
        <p className="text-[11px] font-bold text-[#5c7a94] uppercase tracking-widest mb-3 pb-2 border-b border-white/6">
          🚨 En caso de urgencia — tarifas de visita
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {urgencias.map(u => (
            <div
              key={u.label}
              className={`relative bg-[#112030] border rounded-xl p-5 text-center overflow-hidden ${urgColor[u.color]}`}
            >
              {/* top bar */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 ${
                u.color === 'green' ? 'bg-[#4ecb7a]' :
                u.color === 'blue'  ? 'bg-[#3b9ede]' : 'bg-[#e85d00]'
              }`} />
              <div className="text-xl mb-2">{u.icon}</div>
              <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${lblColor[u.color]}`}>
                {u.label}
              </div>
              <div className="text-[11px] text-[#5c7a94] mb-3 whitespace-pre-line leading-relaxed">
                {u.when}
              </div>
              <div className="text-3xl font-black text-[#f0f4f8]">
                <sup className="text-sm font-semibold align-top mt-1">€</sup>{u.price}
              </div>
              <div className="text-[10px] text-[#5c7a94] mt-1">visita + IVA 21%</div>
              {u.prio && (
                <div className="inline-flex items-center gap-1 mt-2 bg-[#e85d001a] border border-[#e85d0044] rounded-full px-2.5 py-1 text-[9px] font-bold text-[#ff7a20]">
                  🔴 Prioridad 1
                </div>
              )}
            </div>
          ))}
        </div>

        {/* TABLA */}
        <table className="w-full border-collapse mb-5">
          <thead>
            <tr className="border-b border-white/8">
              <th className="text-left text-[10px] font-bold text-[#5c7a94] uppercase tracking-widest py-2 px-2">Servicio</th>
              <th className="text-left text-[10px] font-bold text-[#5c7a94] uppercase tracking-widest py-2 px-2 hidden sm:table-cell">Incluye</th>
              <th className="text-right text-[10px] font-bold text-[#5c7a94] uppercase tracking-widest py-2 px-2">Desde</th>
            </tr>
          </thead>
          <tbody>
            {serviciosTabla.map(srv => (
              <tr key={srv.name} className="border-b border-white/4 hover:bg-white/1 transition-colors">
                <td className="py-2.5 px-2 text-[11px] text-[#f0f4f8] font-medium">
                  {srv.name}
                  {srv.badge && (
                    <span className={`inline-block ml-2 border rounded px-1.5 py-0.5 text-[9px] font-bold ${badgeColor[srv.badgeColor!]}`}>
                      {srv.badge}
                    </span>
                  )}
                </td>
                <td className="py-2.5 px-2 text-[10px] text-[#5c7a94] hidden sm:table-cell">{srv.desc}</td>
                <td className="py-2.5 px-2 text-right">
                  <span className="text-[10px] text-[#5c7a94] block">desde</span>
                  <span className="text-[13px] font-bold text-[#e85d00]">{srv.price}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* DIAGNÓSTICO */}
        <div className="bg-[#e85d000d] border border-[#e85d0033] rounded-xl p-4 flex gap-3 items-start mb-3">
          <span className="text-2xl flex-shrink-0 mt-0.5">🔍</span>
          <div>
            <h4 className="text-[13px] font-bold text-[#f0f4f8] mb-1.5">
              Diagnóstico Eléctrico Completo del Hogar
            </h4>
            <p className="text-[11px] text-[#94a8bc] leading-relaxed mb-2">
              Revisión técnica presencial completa · Informe PDF con registro
              fotográfico · Presupuesto de corrección incluido.
            </p>
            <span className="inline-block bg-[#f5c5181a] border border-[#f5c51833] text-[#f5c518] text-[10px] font-semibold rounded px-2.5 py-1">
              ⚠️ Los costes de reparación serán adicionales a la visita de diagnóstico
            </span>
          </div>
        </div>

        <p className="text-center text-[11px] text-[#5c7a94]">
          * IVA 21% no incluido · Precios orientativos sujetos a valoración in situ
        </p>

      </div>
    </section>
  )
}








