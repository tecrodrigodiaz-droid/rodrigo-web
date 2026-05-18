const resenas = [
  {
    nombre: 'María G.',
    texto: 'Rodrigo solucionó en una hora lo que otro electricista no pudo en tres visitas. Muy profesional y precio justo.',
    stars: 5,
  },
  {
    nombre: 'Carlos M.',
    texto: 'Instalación de luminarias LED en todo el local. Trabajo impecable, puntual y con presupuesto cerrado desde el inicio.',
    stars: 5,
  },
  {
    nombre: 'Ana P.',
    texto: 'Lo contacté por una urgencia un sábado. Llegó rápido, explicó el problema con claridad y lo dejó todo perfecto.',
    stars: 5,
  },
  {
    nombre: 'Josep R.',
    texto: 'Revisión completa de la instalación de mi vivienda antigua. Informe detallado y trabajo de calidad. Lo recomiendo.',
    stars: 5,
  },
]

export default function Resenas() {
  return (
    <section id="resenas" className="py-20 bg-[#080f1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Lo que dicen los clientes</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            La confianza se construye trabajo a trabajo.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resenas.map((r) => (
            <div key={r.nombre} className="bg-[#0d2040] border border-white/5 rounded-xl p-6">
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <span key={i} className="text-[#e85d00] text-sm">★</span>
                ))}
              </div>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">"{r.texto}"</p>
              <p className="text-gray-500 text-xs font-medium">— {r.nombre}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
