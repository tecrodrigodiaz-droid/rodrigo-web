const razones = [
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
}
