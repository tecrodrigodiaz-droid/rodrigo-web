import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-[#050c16] border-t border-[#e85d0022] pt-10 pb-6">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">

          {/* MARCA */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <Logo size={28} />
              <span className="text-[13px] font-bold text-[#f0f4f8]">Rodrigo M. Díaz</span>
            </div>
            <p className="text-[11px] text-[#5c7a94] leading-relaxed">
              Electrotecnia · Iluminación<br />
              Tu electricista de confianza<br />
              Comunitat Valenciana · España
            </p>
          </div>

          {/* SERVICIOS */}
          <div>
            <h4 className="text-[11px] font-bold text-[#f0f4f8] uppercase tracking-wider mb-3">
              Servicios
            </h4>
            <ul className="space-y-1.5">
              {['⚡ Instalaciones eléctricas', '💡 Luminotecnia LED', '🔧 Mantenimiento', '🏗️ Reformas', '🚨 Urgencias'].map(s => (
                <li key={s} className="text-[11px] text-[#5c7a94]">{s}</li>
              ))}
            </ul>
          </div>

          {/* COBERTURA */}
          <div>
            <h4 className="text-[11px] font-bold text-[#f0f4f8] uppercase tracking-wider mb-3">
              Cobertura
            </h4>
            <ul className="space-y-1.5">
              {['📍 Valencia ciudad', '📍 Área metropolitana', '📍 Comunitat Valenciana'].map(s => (
                <li key={s} className="text-[11px] text-[#5c7a94]">{s}</li>
              ))}
            </ul>
          </div>

          {/* LEGAL */}
          <div>
            <h4 className="text-[11px] font-bold text-[#f0f4f8] uppercase tracking-wider mb-3">
              Legal
            </h4>
            <ul className="space-y-1.5">
              {['📄 Aviso legal', '🔒 Privacidad', '🍪 Cookies'].map(s => (
                <li key={s} className="text-[11px] text-[#5c7a94]">{s}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/5 pt-5 flex flex-col sm:flex-row justify-between gap-2">
          <span className="text-[10px] text-[#5c7a94]">
            © 2025 Rodrigo M. Díaz · Electrotecnia e Iluminación
          </span>
          <span className="text-[10px] text-[#5c7a94]">
            Comunitat Valenciana · España
          </span>
        </div>

      </div>
    </footer>
  )
}
