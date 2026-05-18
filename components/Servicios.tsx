const servicios = [
  {
    icon: '⚡',
    title: 'Instalaciones Eléctricas',
    desc: 'Instalaciones nuevas y reformas completas conforme al REBT. Viviendas, locales y oficinas.',
  },
  {
    icon: '💡',
    title: 'Luminotecnia LED',
    desc: 'Diseño e instalación de sistemas de iluminación eficiente. Ahorro energético real y medible.',
  },
  {
    icon: '🔧',
    title: 'Mantenimiento',
    desc: 'Revisiones periódicas, detección de averías y reparaciones. Prevención antes que corrección.',
  },
  {
    icon: '🏠',
    title: 'Reformas Integrales',
    desc: 'Adecuación eléctrica en reformas de vivienda. Coordinación con otros gremios.',
  },
  {
    icon: '🔍',
    title: 'Diagnóstico Técnico',
    desc: 'Análisis de instalaciones existentes. Informe de estado y recomendaciones de mejora.',
  },
  {
    icon: '🚨',
    title: 'Urgencias',
    desc: 'Atención prioritaria para averías urgentes. Disponibilidad fuera de horario con tarifa especial.',
  },
]

export default function Servicios() {
  return (
    <section id="servicios" className="py-20 bg-[#0b1929]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Servicios</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Soluciones eléctricas profesionales para particulares y empresas en la Comunitat Valenciana.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((s) => (
            <div key={s.title} className="bg-[#0d2040] border border-white/5 rounded-xl p-6 hover:border-[#e85d00]/30 transition-colors">
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
