import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

export function Testimonials() {
  const { language } = useLanguage()
  const t = translations[language]

  const testimonials = {
    uz: [
      {
        name: 'Dilnoza A.',
        text: 'Dubayga sayohat ajoyib o\'tdi! Hujjatlar va mehmonxona bo\'yicha hammasi juda tez hal bo\'ldi.',
      },
      {
        name: 'Sardor T.',
        text: 'TRAP TOUR jamoasi professional. Narxlar hamyonbop, xizmat sifati yuqori.',
      },
      {
        name: 'Madina R.',
        text: 'Istanbulga oilaviy sayohatimizni puxta rejalashtirishdi, juda mamnunmiz!',
      },
    ],
    ru: [
      {
        name: 'Дилноза А.',
        text: 'Поездка в Дубай прошла отлично! Все документы и отель были решены очень быстро.',
      },
      {
        name: 'Сардор Т.',
        text: 'Команда TRAP TOUR профессиональная. Цены доступные, качество сервиса высокое.',
      },
      {
        name: 'Мадина Р.',
        text: 'Наше семейное путешествие в Стамбул было тщательно спланировано, очень довольны!',
      },
    ],
    en: [
      {
        name: 'Dilnoza A.',
        text: 'The trip to Dubai was amazing! All documents and hotel were resolved very quickly.',
      },
      {
        name: 'Sardor T.',
        text: 'TRAP TOUR team is professional. Prices are affordable, service quality is high.',
      },
      {
        name: 'Madina R.',
        text: 'Our family trip to Istanbul was thoroughly planned, very satisfied!',
      },
    ]
  }

  const subtitle = {
    uz: 'Biz haqimizda iliq so\'zlar',
    ru: 'Теплые слова о нас',
    en: 'Warm words about us'
  }

  return (
    <section id="testi" className="relative py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">{t.testimonials.title}</h2>
          <p className="text-white/70 mt-2">{subtitle[language]}</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials[language].map((t, i) => (
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


