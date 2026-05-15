export default function Contacto() {
  return (
    <section id="contacto" className="py-20 bg-[#0f2035]">
      <div className="max-w-md mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-[#e85d001a] border border-[#e85d0033] rounded-full px-4 py-1.5 text-xs text-[#ff7a20] font-semibold mb-4">
            📞 Hablemos
          </span>
          <h2 className="text-3xl font-bold mb-3">
            Ponte en <span className="text-[#e85d00]">contacto</span>
          </h2>
          <div className="w-11 h-0.5 bg-[#e85d00] rounded mx-auto mb-4" />
          <p className="text-[#94a8bc] text-sm">
            Te atendemos directamente · sin formularios · sin esperas
          </p>
        </div>

        {/* TARJETA */}
        <div className="bg-[#112030] border border-[#e85d0022] rounded-xl p-7 text-center">
          <h3 className="text-lg font-bold text-[#f0f4f8] mb-3">
            ¿Cómo prefieres contactar?
          </h3>
          <p className="text-[13px] text-[#94a8bc] mb-6 leading-relaxed">
            Cuéntanos tu caso y te damos respuesta rápida y personalizada.
            Sin intermediarios.
          </p>

          <div className="flex flex-col gap-3">
            {/* WhatsApp */}
            <a
              href="https://wa.me/34XXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25d366] hover:bg-[#1eb858] text-white font-bold py-4 px-6 rounded-xl text-[14px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_5px_20px_rgba(37,211,102,0.3)]"
            >
              💬 WhatsApp — mensaje directo
            </a>

            {/* Teléfono */}
            <a
              href="tel:+34XXXXXXXXX"
              className="flex items-center justify-center gap-3 bg-[#e85d00] hover:bg-[#ff7a20] text-white font-bold py-4 px-6 rounded-xl text-[14px] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_5px_20px_rgba(232,93,0,0.3)]"
            >
              📞 Llamar ahora
            </a>

            {/* Email */}
            <a
              href="mailto:info@rodrigodiazelectrico.es"
              className="flex items-center justify-center gap-3 bg-transparent border border-white/18 hover:border-[#e85d00] hover:text-[#e85d00] text-[#f0f4f8] font-semibold py-4 px-6 rounded-xl text-[14px] transition-all duration-200"
            >
              ✉️ Enviar email
            </a>
          </div>

          {/* ZONA */}
          <p className="text-[11px] text-[#5c7a94] mt-5">
            📍 Comunitat Valenciana · Valencia y área metropolitana
          </p>
        </div>

      </div>
    </section>
  )
}
