import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

export function About() {
  const { language } = useLanguage()
  const t = translations[language]

  const features = {
    uz: [
      ['24/7 qo\'llab-quvvatlash', 'Har doim yoningizda'],
      ['Moslashuvchan to\'lov', 'Qulay va xavfsiz'],
      ['Eng yaxshi narx', 'Hamkor tarmog\'i bilan'],
      ['Individual yondashuv', 'Siz uchun maxsus'],
    ],
    ru: [
      ['24/7 поддержка', 'Всегда рядом'],
      ['Гибкая оплата', 'Удобно и безопасно'],
      ['Лучшие цены', 'С партнерской сетью'],
      ['Индивидуальный подход', 'Специально для вас'],
    ],
    en: [
      ['24/7 Support', 'Always by your side'],
      ['Flexible Payment', 'Convenient and secure'],
      ['Best Prices', 'With partner network'],
      ['Individual Approach', 'Specially for you'],
    ]
  }

  const description = {
    uz: 'TRAP TOUR — 2025 yildan beri yuzlab sayohatchilarga orzu-qilingan taʼtilini taqdim etib kelayotgan agentlik. Biz siz uchun vizalar, aviachipta, transfer va sug\'urtalarni kompleks tarzda tashkil qilamiz.',
    ru: 'TRAP TOUR — агентство, которое с 2025 года предоставляет сотням путешественников их желанный отпуск. Мы комплексно организуем для вас визы, авиабилеты, трансферы и страховки.',
    en: 'TRAP TOUR — an agency that has been providing hundreds of travelers with their dream vacation since 2025. We comprehensively organize visas, air tickets, transfers and insurance for you.'
  }

  return (
    <section id="about" className="relative py-24 bg-slate-950">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold">{t.about.title}</h2>
            <p className="mt-4 text-white/70">
              {description[language]}
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {features[language].map(([title, sub]) => (
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


