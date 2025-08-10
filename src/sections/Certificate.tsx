import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

// PDF fayl public ichida bo'lishi kerak: public/assets/doc/certificate.pdf
const pdfPath = '../assets/doc/certificate.pdf'
import certificate from '../assets/sertifikat.jpg'

export function Certificate() {
  const { language } = useLanguage()
  const t = translations[language]

  const subtitle = {
    uz: 'TRAP TOUR agentligining rasmiy sertifikati',
    ru: 'Официальный сертификат агентства TRAP TOUR',
    en: 'Official certificate of TRAP TOUR agency'
  }

  return (
    <section id="certificate" className="relative py-24">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">{t.certificate.title}</h2>
          <p className="text-white/70 mt-2">{subtitle[language]}</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10"
        >
            <div className='flex justify-center items-center'>
                <img src={certificate} alt="certificate" className='w-1/2 h-full object-cover rounded-md' />
            </div>
        </motion.div>
      </div>
    </section>
  )
}


