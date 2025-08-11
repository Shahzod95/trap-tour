import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

import payme from '../assets/payme.png'
import click from '../assets/click.png'

export function Payments() {
  const { language } = useLanguage()
  const t = translations[language]

  const payments = {
    uz: [
      {
        name: 'Payme',
        color: 'from-emerald-400 to-emerald-600',
        bg: 'bg-white',
        logo: payme,
        desc: 'Payme orqali tez va xavfsiz to\'lov. Humo/UZCARD/VISA kartalarini qo\'llab-quvvatlaydi.',
        cta: 'Payme bilan to\'lash',
      },
      {
        name: 'Click',
        color: 'from-sky-400 to-sky-600',
        bg: 'bg-white',
        logo: click,
        desc: 'Click ilovasi orqali qulay to\'lov: one-click va QR yordamida.',
        cta: 'Click bilan to\'lash',
      },
    ],
    ru: [
      {
        name: 'Payme',
        color: 'from-emerald-400 to-emerald-600',
        bg: 'bg-white',
        logo: payme,
        desc: 'Быстрый и безопасный платеж через Payme. Поддерживает карты Humo/UZCARD/VISA.',
        cta: 'Оплатить через Payme',
      },
      {
        name: 'Click',
        color: 'from-sky-400 to-sky-600',
        bg: 'bg-white',
        logo: click,
        desc: 'Удобный платеж через приложение Click: one-click и QR-код.',
        cta: 'Оплатить через Click',
      },
    ],
    en: [
      {
        name: 'Payme',
        color: 'from-emerald-400 to-emerald-600',
        bg: 'bg-white',
        logo: payme,
        desc: 'Fast and secure payment through Payme. Supports Humo/UZCARD/VISA cards.',
        cta: 'Pay with Payme',
      },
      {
        name: 'Click',
        color: 'from-sky-400 to-sky-600',
        bg: 'bg-white',
        logo: click,
        desc: 'Convenient payment through Click app: one-click and QR code.',
        cta: 'Pay with Click',
      },
    ]
  }

  const headerTitle = {
    uz: "To'lov usullari",
    ru: 'Способы оплаты',
    en: 'Payment methods'
  }

  const subtitle = {
    uz: 'Payme va Click orqali onlayn to\'lov qiling',
    ru: 'Оплачивайте онлайн через Payme и Click',
    en: 'Pay online through Payme and Click'
  }

  return (
    <section id="payments" className="relative py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">{headerTitle[language]}</h2>
          <p className="text-white/70 mt-2">{subtitle[language]}</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {payments[language].map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass rounded-3xl p-6 flex items-center gap-5"
            >
              <div className={`w-14 h-14 rounded-2xl ${p.bg} grid place-items-center`}><img src={p.logo} alt={p.name} className="w-16 h-10" /></div>
              <div className="flex-1">
                <div className="text-lg font-semibold">{p.name}</div>
                <p className="text-white/70 text-sm mt-1">{p.desc}</p>
                <a
                  href="#cta"
                  className={`inline-block mt-4 px-4 py-2 rounded-xl text-sm bg-gradient-to-r ${p.color}`}
                >
                  {p.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


