const checks = [
  {
    color: 'green', icon: '🌱', title: 'Chequeo de Eficiencia Energética',
    desc: 'Analizamos el consumo real y te decimos exactamente dónde estás perdiendo dinero en la factura.',
    items: ['Auditoría de consumo por circuito', 'Evaluación iluminación actual vs LED', 'Revisión tarifa contratada vs consumo real', 'Propuesta de mejora con ahorro estimado'],
    tag: '📄 Informe con calificación energética',
  },
  {
    color: 'red', icon: '⚠️', title: 'Detección de Fugas de Corriente',
    desc: 'Localización precisa de fugas activas y verificación del estado del aislamiento de la instalación.',
    items: ['Medición de corriente de fuga por línea', 'Test de resistencia de aislamiento', 'Verificación de diferencial y tierra', 'Registro fotográfico de hallazgos'],
    tag: '🔍 Localización exacta del fallo',
  },
  {
    color: 'blue', icon: '🔧', title: 'Acondicionamiento de Líneas',
    desc: 'Revisamos y adecuamos cada línea al REBT vigente. Instalaciones antiguas son un riesgo.',
    items: ['Comprobación de sección de cable', 'Detección de empalmes deficientes', 'Verificación de protecciones adecuadas', 'Adecuación a electrificación básica/elevada'],
    tag: '📐 Cumplimiento ITC-BT-25',
  },
  {
    color: 'yellow', icon: '📊', title: 'Chequeo de Consumos',
    desc: '¿La factura sube sin motivo? Medimos el consumo real de cada línea para darte el diagnóstico exacto.',
    items: ['Medición por fase con pinza amperimétrica', 'Identificación de consumos fantasma', 'Comparativa potencia contratada vs real', 'Detección de desequilibrios entre fases'],
    tag: '💡 Ahorro medio identificado: 25–40 €/mes',
  },
]

const colorMap: Record<string, { bar: string; ico: string; tag: string; check: string }> = {
  green:  { bar: 'bg-[#4ecb7a]', ico: 'bg-[#4ecb7a1a]', tag: 'bg-[#4ecb7a1a] border-[#4ecb7a33] text-[#4ecb7a]', check: 'text-[#4ecb7a]' },
  red:    { bar: 'bg-[#e84040]', ico: 'bg-[#e840401a]', tag: 'bg-[#e840401a] border-[#e8404033] text-[#e84040]', check: 'text-[#e84040]' },
  blue:   { bar: 'bg-[#3b9ede]', ico: 'bg-[#3b9ede1a]', tag: 'bg-[#3b9ede1a] border-[#3b9ede33] text-[#3b9ede]', check: 'text-[#3b9ede]' },
  yellow: { bar: 'bg-[#f5c518]', ico: 'bg-[#f5c5181a]', tag: 'bg-[#f5c5181a] border-[#f5c51833] text-[#f5c518]', check: 'text-[#f5c518]' },
}

export default function Diagnostico() {
  return (
    <section id="diagnostico" className="py-20 bg-[#0f2035]">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 bg-[#e85d001a] border border-[#e85d0033] rounded-full px-4 py-1.5 text-xs text-[#ff7a20] font-semibold mb-4">
            🔍 Servicio especializado
          </span>
          <h2 className="text-3xl font-bold mb-3">
            Diagnóstico <span className="text-[#e85d00]">Eléctrico del Hogar</span>
          </h2>
          <div className="w-11 h-0.5 bg-[#e85d00] rounded mx-auto mb-4" />
          <p className="text-[#94a8bc] text-sm max-w-md mx-auto">
            Revisión técnica completa · Informe PDF con registro fotográfico · Sin compromiso
          </p>
        </div>

        {/* GRID 2x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          {checks.map((c) => {
            const col = colorMap[c.color]
            return (
              <div
                key={c.title}
                className="bg-[#112030] border border-white/6 rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_8px_24px_rgba(0,0,0,0.3)]"
              >
                <div className={`h-0.5 ${col.bar}`} />
                <div className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-9 h-9 rounded-lg ${col.ico} flex items-center justify-center text-lg flex-shrink-0`}>
                      {c.icon}
                    </div>
                    <h3 className="text-[13px] font-bold text-[#f0f4f8] leading-tight">{c.title}</h3>
                  </div>
                  <p className="text-[11px] text-[#94a8bc] leading-relaxed mb-3">{c.desc}</p>
                  <ul className="space-y-1.5 mb-4">
                    {c.items.map(item => (
                      <li key={item} className="flex items-start gap-2 text-[10px] text-[#94a8bc]">
                        <span className={`${col.check} font-bold text-[9px] mt-0.5 flex-shrink-0`}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <span className={`inline-flex items-center border rounded-md px-3 py-1 text-[10px] font-bold ${col.tag}`}>
                    {c.tag}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* BANNER INFORME */}
        <div className="bg-[#e85d000d] border border-[#e85d0033] rounded-xl p-5 flex gap-4 items-start">
          <div className="text-3xl flex-shrink-0">📋</div>
          <div>
            <h4 className="text-[15px] font-bold text-[#f0f4f8] mb-2">
              Diagnóstico Eléctrico Completo del Hogar
            </h4>
            <p className="text-[12px] text-[#94a8bc] leading-relaxed mb-3">
              Al finalizar la visita recibes un informe PDF profesional con registro
              fotográfico, hallazgos y presupuesto de corrección. Todo documentado y
              enviado a tu email.
            </p>
            <div className="flex flex-wrap gap-2">
              {['📄 Informe PDF', '📸 Registro fotográfico', '📧 Enviado a tu email', '🗂️ Sin compromiso'].map(t => (
                <span key={t} className="bg-[#e85d001a] border border-[#e85d0022] rounded px-2.5 py-1 text-[10px] text-[#ff7a20] font-semibold">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
