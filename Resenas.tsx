export default function Resenas() {
  return (
    <section id="resenas" className="py-20 bg-[#0f2035]">
      <div className="max-w-2xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 bg-[#e85d001a] border border-[#e85d0033] rounded-full px-4 py-1.5 text-xs text-[#ff7a20] font-semibold mb-4">
            💬 Clientes reales
          </span>
          <h2 className="text-3xl font-bold mb-3">
            Lo que dicen <span className="text-[#e85d00]">nuestros clientes</span>
          </h2>
          <div className="w-11 h-0.5 bg-[#e85d00] rounded mx-auto mb-4" />
          <p className="text-[#94a8bc] text-sm">
            Reseñas reales de clientes de la Comunitat Valenciana
          </p>
        </div>

        {/* RESEÑA REAL */}
        <div className="bg-[#112030] border border-[#e85d0022] rounded-xl p-6 mb-5">
          <div className="text-[#f5a623] text-xl mb-3">★★★★★</div>
          <p className="text-[14px] text-[#f0f4f8] leading-relaxed italic mb-5">
            <span className="text-3xl text-[#e85d00] leading-none align-[-10px] mr-1">"</span>
            Hemos contactado con Rodrigo a través de tienes sal para que nos ayudará
            con un problema que teníamos y hemos quedado muy satisfechos con su
            profesionalidad, trato y tarifa. Si alguien necesita un electricista que
            no dude en contactar con él.
          </p>
          <div className="flex items-center gap-3 pt-4 border-t border-white/6">
            <div className="w-9 h-9 rounded-full bg-[#e85d0022] flex items-center justify-center text-sm font-bold text-[#e85d00]">
              C
            </div>
            <div>
              <strong className="block text-[12px] text-[#f0f4f8]">Cliente verificado</strong>
              <span className="text-[11px] text-[#5c7a94]">Comunitat Valenciana · Reseña real</span>
            </div>
          </div>
        </div>

        {/* CTA RESEÑA */}
        <div className="bg-gradient-to-br from-[#e85d000d] to-[#e85d0005] border border-[#e85d0025] rounded-xl p-6 text-center">
          <h4 className="text-[15px] font-bold text-[#f0f4f8] mb-3">
            💬 Deja tu reseña y opinión sobre nuestro trabajo
          </h4>
          <p className="text-[12px] text-[#94a8bc] leading-relaxed max-w-sm mx-auto">
            Tu comentario nos ayudará a ser mejores y a seguir brindando un
            servicio de calidad. Cada opinión cuenta y la leemos personalmente.
          </p>
        </div>

      </div>
    </section>
  )
}
