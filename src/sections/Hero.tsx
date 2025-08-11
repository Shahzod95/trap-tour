import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

export function Hero() {
  const { language } = useLanguage()
  const t = translations[language]

  const stats = {
    uz: [
      ['5000+', 'Mamnun mijoz'],
      ['120+', 'Hamkor mehmonxona'],
      ['1+', 'Yillik tajriba'],
    ],
    ru: [
      ['5000+', 'Довольных клиентов'],
      ['120+', 'Партнерских отелей'],
      ['1+', 'Лет опыта'],
    ],
    en: [
      ['5000+', 'Happy Clients'],
      ['120+', 'Partner Hotels'],
      ['1+', 'Years Experience'],
    ]
  }

  const popularDestinations = {
    uz: 'Mashhur yo\'nalishlar: Istanbul • Dubay • Antalya',
    ru: 'Популярные направления: Стамбул • Дубай • Анталья',
    en: 'Popular destinations: Istanbul • Dubai • Antalya'
  }

  const description = {
    uz: 'Istanbul, Dubay, Sharm El-Sheyx, Bangkok va boshqa mashhur yo\'nalishlar. Vizalar, aviachipta va mehmonxonalarni bizga ishonib topshiring.',
    ru: 'Стамбул, Дубай, Шарм-эль-Шейх, Бангкок и другие популярные направления. Доверьте нам визы, авиабилеты и отели.',
    en: 'Istanbul, Dubai, Sharm El-Sheikh, Bangkok and other popular destinations. Trust us with visas, air tickets and hotels.'
  }

  return (
    <section className="relative min-h-[100svh] overflow-hidden grid-overlay">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
      <div className="gradient-spot top-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-brand-500/40" />
      <div className="gradient-spot bottom-[-10%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-cyan-500/40" />

      <div className="container relative pt-36 pb-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-extrabold tracking-tight"
            >
              {t.hero.title}
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-400">TRAP TOUR</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="mt-4 text-white/70 text-lg"
            >
              {description[language]}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#dest" className="px-6 py-3 rounded-full bg-brand-500 hover:bg-brand-400">
                {t.nav.destinations}
              </a>
              <a href="#cta" className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/5">
                {t.nav.contact}
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-10 grid grid-cols-3 gap-6 text-center"
            >
              {stats[language].map(([k, v]) => (
                <div key={k} className="glass rounded-2xl p-4">
                  <div className="text-2xl font-bold text-brand-300">{k}</div>
                  <div className="text-white/70 text-sm">{v}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] glass overflow-hidden">
              <img src="https://i.pinimg.com/736x/32/0b/7f/320b7ff2e4b806c3e4ecabaa1b20430f.jpg" alt="Travel collage" className="w-full h-full object-cover" />
            </div>
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="absolute -left-6 -bottom-6 p-4 rounded-2xl glass"
            >
              {popularDestinations[language]}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


