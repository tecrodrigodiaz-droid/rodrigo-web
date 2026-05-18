import Image from 'next/image'

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1929] via-[#0d2040] to-[#0b1929]" />
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'radial-gradient(circle, #e85d00 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-[#e85d00]/10 border border-[#e85d00]/30 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#e85d00] animate-pulse" />
            <span className="text-[#e85d00] text-sm font-medium">+20 años de experiencia · Valencia</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Tu electricista<br />
            <span className="text-[#e85d00]">de confianza</span><br />
            en Valencia
          </h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
            Instalaciones eléctricas, luminotecnia LED y mantenimiento profesional.
            Diagnóstico preciso, trabajo limpio y presupuesto claro.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contacto"
              className="bg-[#e85d00] hover:bg-[#cc5200] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center">
              Solicitar visita
            </a>
            <a href="#servicios"
              className="border border-white/20 hover:border-[#e85d00]/50 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center">
              Ver servicios
            </a>
          </div>
          <div className="flex items-center gap-8 mt-12 pt-8 border-t border-white/10">
            {[
              { num: '+20', label: 'Años de experiencia' },
              { num: '+500', label: 'Clientes satisfechos' },
              { num: '100%', label: 'Garantía en trabajos' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl font-bold text-[#e85d00]">{s.num}</div>
                <div className="text-xs text-gray-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
