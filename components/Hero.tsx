import Image from 'next/image'

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
}
