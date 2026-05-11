import Image from 'next/image'

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
}
