'use client'

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
}
