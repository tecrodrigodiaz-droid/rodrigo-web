const tarifas = [
  {
    label: 'Horario habitual',
    precio: '55 €',
    detalle: 'Lunes a viernes · 08:00–20:00',
    color: 'border-white/10',
  },
  {
    label: 'Fines de semana y festivos',
    precio: '95 €',
    detalle: 'Sábados, domingos y festivos',
    color: 'border-[#e85d00]/40',
    destacado: true,
  },
  {
    label: 'Urgencia fuera de horario',
    precio: '135 €',
    detalle: 'Atención inmediata · Prioridad 1',
    color: 'border-white/10',
  },
]

export default function Tarifas() {
  return (
    <section id="tarifas" className="py-20 bg-[#080f1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Tarifas de visita</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Precio por visita + IVA. Transparencia total desde el primer momento.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {tarifas.map((t) => (
            <div
              key={t.label}
              className={`bg-[#0d2040] border-2 ${t.color} rounded-xl p-8 text-center ${t.destacado ? 'ring-1 ring-[#e85d00]/30' : ''}`}
            >
              <p className="text-gray-400 text-sm mb-3">{t.label}</p>
              <p className="text-4xl font-bold text-white mb-1">{t.precio}</p>
              <p className="text-xs text-[#e85d00] font-medium mb-4">+ IVA</p>
              <p className="text-gray-500 text-xs">{t.detalle}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 text-xs mt-8">
          El precio de visita no incluye materiales ni mano de obra adicional · Presupuesto detallado antes de iniciar cualquier trabajo
        </p>
      </div>
    </section>
  )
}
