export function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="container">
        <div className="glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-2xl md:text-3xl font-bold">Sayohatni birgalikda rejalashtiramizmi?</h3>
            <p className="text-white/70 mt-2">Kontaktlaringizni qoldiring — menejerimiz 10 daqiqada bog‘lanadi.</p>
          </div>
          <form className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
            <input required placeholder="Ism" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-brand-400" />
            <input required type="tel" placeholder="Telefon" className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-brand-400" />
            <button className="px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-400">Yuborish</button>
          </form>
        </div>
      </div>
    </section>
  )
}


