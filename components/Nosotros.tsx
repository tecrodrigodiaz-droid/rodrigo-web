const valores = [
  { icon: '🎓', title: '+20 años de experiencia', desc: 'Formación en Uruguay y especialización en luminotecnia en España.' },
  { icon: '🔬', title: 'Diagnóstico preciso', desc: 'Equipamiento profesional para identificar el problema real, no el síntoma.' },
  { icon: '📋', title: 'Presupuesto claro', desc: 'Precio cerrado antes de empezar. Sin sorpresas al finalizar el trabajo.' },
  { icon: '✅', title: 'Trabajo garantizado', desc: 'Cada instalación cumple el REBT. Documentación técnica si se requiere.' },
]

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-20 bg-[#0b1929]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Electricista profesional<br />
              <span className="text-[#e85d00]">en quien confiar</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Soy Rodrigo M. Díaz, electricista con más de 20 años de experiencia en instalaciones
              eléctricas y luminotecnia. Trabajo en la Comunitat Valenciana con el compromiso de
              hacer las cosas bien a la primera.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Mi diferencial no es la tecnología — es el criterio técnico acumulado en dos décadas
              resolviendo problemas reales. Cada visita incluye diagnóstico honesto y solución duradera.
            </p>
            <a href="#contacto" className="inline-block bg-[#e85d00] hover:bg-[#cc5200] text-white px-7 py-3 rounded-lg font-semibold transition-colors">
              Contactar ahora
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {valores.map((v) => (
              <div key={v.title} className="bg-[#0d2040] border border-white/5 rounded-xl p-5">
                <div className="text-2xl mb-3">{v.icon}</div>
                <h3 className="text-white font-semibold text-sm mb-2">{v.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
