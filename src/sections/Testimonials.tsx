import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Dilnoza A.',
    text: 'Dubayga sayohat ajoyib o‘tdi! Hujjatlar va mehmonxona bo‘yicha hammasi juda tez hal bo‘ldi.',
  },
  {
    name: 'Sardor T.',
    text: 'TRAP TOUR jamoasi professional. Narxlar hamyonbop, xizmat sifati yuqori.',
  },
  {
    name: 'Madina R.',
    text: 'Istanbulga oilaviy sayohatimizni puxta rejalashtirishdi, juda mamnunmiz!',
  },
]

export function Testimonials() {
  return (
    <section id="testi" className="relative py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Mijozlar fikri</h2>
          <p className="text-white/70 mt-2">Biz haqimizda iliq so‘zlar</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="glass p-6 rounded-3xl">
              <div className="font-semibold">{t.name}</div>
              <p className="text-white/70 mt-2">{t.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


