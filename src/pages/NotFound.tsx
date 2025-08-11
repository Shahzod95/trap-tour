import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

export function NotFound() {
  const { language } = useLanguage()
  const t = translations[language]

  const content = {
    uz: {
      title: '404 - Sahifa topilmadi',
      subtitle: 'Kechirasiz, qidirayotgan sahifa mavjud emas',
      description: 'Sahifa o\'chirilgan, nomi o\'zgartirilgan yoki vaqtincha mavjud emas bo\'lishi mumkin.',
      backHome: 'Bosh sahifaga qaytish',
      contactUs: 'Biz bilan bog\'laning'
    },
    ru: {
      title: '404 - Страница не найдена',
      subtitle: 'Извините, запрашиваемая страница не существует',
      description: 'Страница могла быть удалена, переименована или временно недоступна.',
      backHome: 'Вернуться на главную',
      contactUs: 'Связаться с нами'
    },
    en: {
      title: '404 - Page Not Found',
      subtitle: 'Sorry, the page you are looking for does not exist',
      description: 'The page might have been deleted, renamed, or temporarily unavailable.',
      backHome: 'Back to Home',
      contactUs: 'Contact Us'
    }
  }

  const currentContent = content[language]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 flex items-center justify-center">
      <div className="container px-4">
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Animation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-cyan-400 mb-4">
              404
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-400 to-cyan-400 mx-auto rounded-full"></div>
          </motion.div>

          {/* Title and Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{currentContent.title}</h1>
            <p className="text-xl text-white/70 mb-4">{currentContent.subtitle}</p>
            <p className="text-white/60">{currentContent.description}</p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/"
              className="px-8 py-3 rounded-full bg-brand-500 hover:bg-brand-400 transition-colors font-medium"
            >
              {currentContent.backHome}
            </Link>
            <Link
              to="/#cta"
              className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-colors font-medium"
            >
              {currentContent.contactUs}
            </Link>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto"
          >
            {(() => {
              const stats = {
                uz: [
                  ['5000+', 'Mamnun mijoz'],
                  ['120+', 'Hamkor mehmonxona'],
                  ['15+', 'Yillik tajriba'],
                ],
                ru: [
                  ['5000+', 'Довольных клиентов'],
                  ['120+', 'Партнерских отелей'],
                  ['15+', 'Лет опыта'],
                ],
                en: [
                  ['5000+', 'Happy Clients'],
                  ['120+', 'Partner Hotels'],
                  ['15+', 'Years Experience'],
                ]
              }
              return stats[language].map(([k, v]) => (
                <div key={k} className="glass rounded-2xl p-4">
                  <div className="text-2xl font-bold text-brand-300">{k}</div>
                  <div className="text-white/70 text-sm">{v}</div>
                </div>
              ))
            })()}
          </motion.div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="gradient-spot top-[-10%] left-[-10%] w-[40rem] h-[40rem] rounded-full bg-brand-500/20 absolute pointer-events-none" />
      <div className="gradient-spot bottom-[-10%] right-[-10%] w-[35rem] h-[35rem] rounded-full bg-cyan-500/20 absolute pointer-events-none" />
    </div>
  )
}
