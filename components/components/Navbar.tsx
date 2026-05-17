'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Logo from './Logo'

const links = [
  { href: '/#servicios', label: 'Servicios' },
  { href: '/#tarifas', label: 'Tarifas' },
  { href: '/#nosotros', label: 'Nosotros' },
  { href: '/#resenas', label: 'Reseñas' },
  { href: '/#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0b1929]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-3">
            <Logo className="h-10 w-10" />
            <span className="text-white font-bold text-lg hidden sm:block">
              Rodrigo M. Díaz
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-gray-300 hover:text-[#e85d00] transition-colors text-sm font-medium"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#contacto"
              className="bg-[#e85d00] hover:bg-[#cc5200] text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
            >
              Solicitar visita
            </Link>
          </nav>

          {/* Mobile burger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setOpen(!open)}
            aria-label="Menú"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-white transition-all ${open ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-white transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-[#0b1929]/98 border-t border-white/10 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="block px-4 py-3 text-gray-300 hover:text-[#e85d00] transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <div className="px-4 pt-2">
              <Link
                href="/#contacto"
                className="block bg-[#e85d00] text-white text-center px-5 py-3 rounded-lg font-semibold"
                onClick={() => setOpen(false)}
              >
                Solicitar visita
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
