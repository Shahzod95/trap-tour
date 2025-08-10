import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

export function WhyUs() {
  const { language } = useLanguage()
  const t = translations[language]

  const features = {
    uz: [
      {
        title: 'To\'liq xizmatlar',
        desc: 'Viza, chipta, transfer, sug\'urta va ekskursiyalar — barchasi bir joyda',
      },
      {
        title: 'Tezkor javob',
        desc: 'So\'rovnomalarga zudlik bilan qaytamiz va variantlarni taqdim etamiz',
      },
      {
        title: 'Kafolatlangan sifat',
        desc: 'Hamkorlarimiz bilan barqaror xizmat va qulay narxlar',
      },
      {
        title: 'Shaxsiy menejer',
        desc: 'Jarayon davomida siz bilan aloqada bo\'ladigan kurator',
      },
    ],
    ru: [
      {
        title: 'Полный спектр услуг',
        desc: 'Виза, билеты, трансфер, страховка и экскурсии — все в одном месте',
      },
      {
        title: 'Быстрый ответ',
        desc: 'Быстро отвечаем на запросы и предоставляем варианты',
      },
      {
        title: 'Гарантированное качество',
        desc: 'Стабильный сервис и удобные цены с нашими партнерами',
      },
      {
        title: 'Персональный менеджер',
        desc: 'Куратор, который будет на связи с вами на протяжении всего процесса',
      },
    ],
    en: [
      {
        title: 'Full Services',
        desc: 'Visa, tickets, transfer, insurance and excursions — all in one place',
      },
      {
        title: 'Quick Response',
        desc: 'We quickly respond to requests and provide options',
      },
      {
        title: 'Guaranteed Quality',
        desc: 'Stable service and convenient prices with our partners',
      },
      {
        title: 'Personal Manager',
        desc: 'A curator who will be in touch with you throughout the process',
      },
    ]
  }

  const subtitle = {
    uz: 'Ishonchli hamkor va qulay xizmatlar majmuasi',
    ru: 'Надежный партнер и удобный комплекс услуг',
    en: 'Reliable partner and convenient service complex'
  }

  return (
    <section id="why" className="relative py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">{t.whyUs.title}</h2>
          <p className="text-white/70 mt-2">{subtitle[language]}</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {features[language].map((f, i) => (
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


