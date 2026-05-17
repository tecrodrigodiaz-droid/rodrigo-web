const urgencias = [
  {
    color: 'green', icon: '☀️', label: 'Horario normal',
    when: 'Lunes a viernes\n08:00 – 20:00 h', price: '55',
  },
  {
    color: 'blue', icon: '📅', label: 'Sábados y festivos',
    when: 'Sábados y festivos\n08:00 – 20:00 h', price: '95',
  },
  {
    color: 'orange', icon: '🚨', label: 'Urgencia',
    when: 'Atención inmediata\nPrioridad 1 de agenda', price: '135', prio: true,
  },
]

const serviciosTabla = [
  { name: 'Pequeña avería', badge: '+ frecuente', badgeColor: 'o', desc: 'Diagnóstico + reparación in situ', price: '55 €' },
  { name: 'Cambio de cuadro eléctrico', desc: 'Material + instalación + pruebas', price: '350 €' },
  { name: 'Iluminación LED', badge: 'Especialidad', badgeColor: 'g', desc: 'Proyecto + suministro + montaje', price: 'Consultar' },
  { name: 'Toma de corriente / punto de luz', desc: 'Apertura, cableado, acabado', price: '65 €' },
  { name: 'Mantenimiento preventivo anual', desc: 'Revisión completa + informe PDF', price: '90 €' },
]

const urgColor: Record<string, string> = {
  green:  'border-[#4ecb7a33] before:bg-[#4ecb7a]',
  blue:   'border-white/7',
  orange: 'border-[#e85d0066] bg-[#e85d0008]',
}
const lblColor: Record<string, string> = {
  green: 'text-[#4ecb7a]', blue: 'text-[#3b9ede]', orange: 'text-[#e85d00]',
}
const badgeColor: Record<string, string> = {
  o: 'bg-[#e85d001a] border-[#e85d0022] text-[#ff7a20]',
  g: 'bg-[#4ecb7a1a] border-[#4ecb7a22] text-[#4ecb7a]',
}

export default function Tarifas() {
  return (
    <section id="tarifas" className="py-20 bg-[#0b1929]">
      <div className="max-w-4xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-[#e85d001a] border border-[#e85d0033] rounded-full px-4 py-1.5 text-xs text-[#ff7a20] font-semibold mb-4">
            💶 Sin sorpresas
          </span>
          <h2 className="text-3xl font-bold mb-3">
            Tarifas <span className="text-[#e85d00]">orientativas</span>
          </h2>
          <div className="w-11 h-0.5 bg-[#e85d00] rounded mx-auto mb-4" />
          <p className="text-[#94a8bc] text-sm">
            Presupuesto cerrado por escrito antes de empezar cualquier trabajo
          </p>
        </div>

        {/* DISCLAIMER */}
        <div className="bg-[#3b9ede0d] border border-[#3b9ede22] rounded-lg px-4 py-3 text-[12px] text-[#94a8bc] mb-6">
          ℹ️&nbsp; <strong className="text-[#3b9ede]">Precios orientativos.</strong> El coste
          final depende de la complejidad y materiales. Antes de comenzar recibirás un{' '}
          <strong className="text-[#3b9ede]">presupuesto cerrado y por escrito</strong>.
        </div>

        {/* URGENCIAS */}
        <p className="text-[11px] font-bold text-[#5c7a94] uppercase tracking-widest mb-3 pb-2 border-b border-white/6">
          🚨 En caso de urgencia — tarifas de visita
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {urgencias.map(u => (
            <div
              key={u.label}
              className={`relative bg-[#112030] border rounded-xl p-5 text-center overflow-hidden ${urgColor[u.color]}`}
            >
              {/* top bar */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 ${
                u.color === 'green' ? 'bg-[#4ecb7a]' :
                u.color === 'blue'  ? 'bg-[#3b9ede]' : 'bg-[#e85d00]'
              }`} />
              <div className="text-xl mb-2">{u.icon}</div>
              <div className={`text-[10px] font-bold uppercase tracking-widest mb-1 ${lblColor[u.color]}`}>
                {u.label}
              </div>
              <div className="text-[11px] text-[#5c7a94] mb-3 whitespace-pre-line leading-relaxed">
                {u.when}
              </div>
              <div className="text-3xl font-black text-[#f0f4f8]">
                <sup className="text-sm font-semibold align-top mt-1">€</sup>{u.price}
              </div>
              <div className="text-[10px] text-[#5c7a94] mt-1">visita + IVA 21%</div>
              {u.prio && (
                <div className="inline-flex items-center gap-1 mt-2 bg-[#e85d001a] border border-[#e85d0044] rounded-full px-2.5 py-1 text-[9px] font-bold text-[#ff7a20]">
                  🔴 Prioridad 1
                </div>
              )}
            </div>
          ))}
        </div>

        {/* TABLA */}
        <table className="w-full border-collapse mb-5">
          <thead>
            <tr className="border-b border-white/8">
              <th className="text-left text-[10px] font-bold text-[#5c7a94] uppercase tracking-widest py-2 px-2">Servicio</th>
              <th className="text-left text-[10px] font-bold text-[#5c7a94] uppercase tracking-widest py-2 px-2 hidden sm:table-cell">Incluye</th>
              <th className="text-right text-[10px] font-bold text-[#5c7a94] uppercase tracking-widest py-2 px-2">Desde</th>
            </tr>
          </thead>
          <tbody>
            {serviciosTabla.map(srv => (
              <tr key={srv.name} className="border-b border-white/4 hover:bg-white/1 transition-colors">
                <td className="py-2.5 px-2 text-[11px] text-[#f0f4f8] font-medium">
                  {srv.name}
                  {srv.badge && (
                    <span className={`inline-block ml-2 border rounded px-1.5 py-0.5 text-[9px] font-bold ${badgeColor[srv.badgeColor!]}`}>
                      {srv.badge}
                    </span>
                  )}
                </td>
                <td className="py-2.5 px-2 text-[10px] text-[#5c7a94] hidden sm:table-cell">{srv.desc}</td>
                <td className="py-2.5 px-2 text-right">
                  <span className="text-[10px] text-[#5c7a94] block">desde</span>
                  <span className="text-[13px] font-bold text-[#e85d00]">{srv.price}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* DIAGNÓSTICO */}
        <div className="bg-[#e85d000d] border border-[#e85d0033] rounded-xl p-4 flex gap-3 items-start mb-3">
          <span className="text-2xl flex-shrink-0 mt-0.5">🔍</span>
          <div>
            <h4 className="text-[13px] font-bold text-[#f0f4f8] mb-1.5">
              Diagnóstico Eléctrico Completo del Hogar
            </h4>
            <p className="text-[11px] text-[#94a8bc] leading-relaxed mb-2">
              Revisión técnica presencial completa · Informe PDF con registro
              fotográfico · Presupuesto de corrección incluido.
            </p>
            <span className="inline-block bg-[#f5c5181a] border border-[#f5c51833] text-[#f5c518] text-[10px] font-semibold rounded px-2.5 py-1">
              ⚠️ Los costes de reparación serán adicionales a la visita de diagnóstico
            </span>
          </div>
        </div>

        <p className="text-center text-[11px] text-[#5c7a94]">
          * IVA 21% no incluido · Precios orientativos sujetos a valoración in situ
        </p>

      </div>
    </section>
  )
}
