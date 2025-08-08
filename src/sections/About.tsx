import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="relative py-24 bg-slate-950">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold">Biz haqimizda</h2>
            <p className="mt-4 text-white/70">
              TRAP TOUR — 2025 yildan beri yuzlab sayohatchilarga orzu-qilingan taʼtilini taqdim etib kelayotgan agentlik. Biz siz uchun vizalar, aviachipta, transfer va sug‘urtalarni kompleks tarzda tashkil qilamiz.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {[
                ['24/7 qo‘llab-quvvatlash', 'Har doim yoningizda'],
                ['Moslashuvchan to‘lov', 'Qulay va xavfsiz'],
                ['Eng yaxshi narx', 'Hamkor tarmog‘i bilan'],
                ['Individual yondashuv', 'Siz uchun maxsus'],
              ].map(([title, sub]) => (
                <div key={title} className="glass p-4 rounded-2xl">
                  <div className="font-semibold">{title}</div>
                  <div className="text-white/60 text-sm">{sub}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="aspect-[4/3] rounded-3xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1889&auto=format&fit=crop" alt="About TRAP TOUR" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


