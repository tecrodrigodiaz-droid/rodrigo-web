'use client'
import { useState } from 'react'

export default function Contacto() {
  const [enviado, setEnviado] = useState(false)
  const [cargando, setCargando] = useState(false)
  const [form, setForm] = useState({ nombre: '', telefono: '', direccion: '', mensaje: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setCargando(true)
    try {
      await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setEnviado(true)
    } catch {
      alert('Error al enviar. Inténtalo de nuevo.')
    } finally {
      setCargando(false)
    }
  }

  return (
    <section id="contacto" className="py-20 bg-[#0b1929]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Solicita tu visita</h2>
            <p className="text-gray-400 leading-relaxed mb-8">Cuéntanos qué necesitáis y os respondemos a la mayor brevedad. Sin compromiso — primero hablamos, luego presupuestamos.</p>
            <div className="space-y-4">
              {[
                { icon: '📞', label: 'Teléfono / WhatsApp', val: 'Disponible en horario habitual' },
                { icon: '📍', label: 'Zona de trabajo', val: 'Valencia y Comunitat Valenciana' },
                { icon: '🕐', label: 'Horario habitual', val: 'Lunes a viernes · 08:00–20:00' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <p className="text-white font-medium text-sm">{item.label}</p>
                    <p className="text-gray-400 text-sm">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#0d2040] border border-white/5 rounded-xl p-8">
            {enviado ? (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-white font-bold text-xl mb-2">Mensaje recibido</h3>
                <p className="text-gray-400 text-sm">Os contactaremos a la mayor brevedad. Gracias por confiar en nuestro trabajo.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-gray-400 text-sm mb-1.5">Nombre</label>
                  <input type="text" required value={form.nombre} onChange={(e) => setForm({ ...form, nombre: e.target.value })} className="w-full bg-[#0b1929] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e85d00]/50" placeholder="Tu nombre" />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1.5">Teléfono</label>
                  <input type="tel" required value={form.telefono} onChange={(e) => setForm({ ...form, telefono: e.target.value })} className="w-full bg-[#0b1929] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e85d00]/50" placeholder="600 000 000" />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1.5">Dirección</label>
                  <input type="text" value={form.direccion} onChange={(e) => setForm({ ...form, direccion: e.target.value })} className="w-full bg-[#0b1929] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e85d00]/50" placeholder="Calle, número, municipio" />
                </div>
                <div>
                  <label className="block text-gray-400 text-sm mb-1.5">¿Qué necesitáis?</label>
                  <textarea required rows={4} value={form.mensaje} onChange={(e) => setForm({ ...form, mensaje: e.target.value })} className="w-full bg-[#0b1929] border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#e85d00]/50 resize-none" placeholder="Describid brevemente el trabajo o avería..." />
                </div>
                <button type="submit" disabled={cargando} className="w-full bg-[#e85d00] hover:bg-[#cc5200] disabled:opacity-50 text-white py-3 rounded-lg font-semibold transition-colors">
                  {cargando ? 'Enviando...' : 'Enviar solicitud'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
