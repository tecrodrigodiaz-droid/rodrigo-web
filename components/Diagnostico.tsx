const pasos = [
  {
    num: '01',
    title: 'Solicitud de visita',
    desc: 'Contactas por teléfono o formulario. Te respondo en el menor tiempo posible.',
  },
  {
    num: '02',
    title: 'Diagnóstico en sitio',
    desc: 'Visita técnica con equipamiento profesional. Identifico el problema real.',
  },
  {
    num: '03',
    title: 'Presupuesto cerrado',
    desc: 'Precio claro antes de empezar. Sin sorpresas ni costes ocultos.',
  },
  {
    num: '04',
    title: 'Ejecución y garantía',
    desc: 'Trabajo conforme al REBT. Limpieza de zona y documentación si se requiere.',
  },
]

export default function Diagnostico() {
  return (
    <section id="diagnostico" className="py-20 bg-[#080f1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Cómo trabajo
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Un proceso claro y sin complicaciones para que sepas qué esperar en cada momento.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pasos.map((p) => (
            <div key={p.num} className="relative bg-[#0d2040] border border-white/5 rounded-xl p-6">
              <div className="text-4xl font-bold text-[#e85d00]/20 mb-4">{p.num}</div>
              <h3 className="text-white font-semibold text-sm mb-2">{p.title}</h3>
              <p className="text-gray-400 text-xs leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
