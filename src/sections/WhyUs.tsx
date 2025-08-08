import { motion } from 'framer-motion'

const features = [
  {
    title: 'To‘liq xizmatlar',
    desc: 'Viza, chipta, transfer, sug‘urta va ekskursiyalar — barchasi bir joyda',
  },
  {
    title: 'Tezkor javob',
    desc: 'So‘rovnomalarga zudlik bilan qaytamiz va variantlarni taqdim etamiz',
  },
  {
    title: 'Kafolatlangan sifat',
    desc: 'Hamkorlarimiz bilan barqaror xizmat va qulay narxlar',
  },
  {
    title: 'Shaxsiy menejer',
    desc: 'Jarayon davomida siz bilan aloqada bo‘ladigan kurator',
  },
]

export function WhyUs() {
  return (
    <section id="why" className="relative py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Nega TRAP TOUR?</h2>
          <p className="text-white/70 mt-2">Ishonchli hamkor va qulay xizmatlar majmuasi</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass p-6 rounded-3xl">
              <div className="text-lg font-semibold">{f.title}</div>
              <p className="text-white/70 mt-1">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


