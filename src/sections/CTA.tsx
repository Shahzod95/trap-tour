import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

export function CTA() {
  const { language } = useLanguage()
  const t = translations[language]

  const officeInfo = {
    uz: {
      title: 'Ofis ma\'lumotlari',
      address: {
        title: 'Ofis manzili',
        value: 'Toshkent sh., Yakkasaroy t., Shohjahon MFY, Shoxjahon ko\'chasi, 4-A'
      },
      phone: {
        title: 'Telefon',
        value: '+998 99 177 24 44'
      },
      hours: {
        title: 'Ish vaqti',
        value: 'Dushanba - Shanba: 09:00 - 18:00'
      }
    },
    ru: {
      title: 'Информация об офисе',
      address: {
        title: 'Адрес офиса',
        value: 'г. Ташкент, Яккасарайский р-н, МФЯ Шохжахон, ул. Шохжахон, 4-А'
      },
      phone: {
        title: 'Телефон',
        value: '+998 99 177 24 44'
      },
      hours: {
        title: 'Время работы',
        value: 'Понедельник - Суббота: 09:00 - 18:00'
      }
    },
    en: {
      title: 'Office Information',
      address: {
        title: 'Office Address',
        value: 'Tashkent, Yakkasaroy district, Shohjahon MFY, Shoxjahon street, 4-A'
      },
      phone: {
        title: 'Phone',
        value: '+998 99 177 24 44'
      },
      hours: {
        title: 'Working Hours',
        value: 'Monday - Saturday: 09:00 - 18:00'
      }
    }
  }

  const contactForm = {
    uz: {
      title: 'Sayohatni birgalikda rejalashtiramizmi?',
      description: 'Kontaktlaringizni qoldiring — menejerimiz 10 daqiqada bog\'lanadi.',
      name: 'Ism',
      phone: 'Telefon',
      submit: 'Yuborish'
    },
    ru: {
      title: 'Спланируем путешествие вместе?',
      description: 'Оставьте свои контакты — наш менеджер свяжется в течение 10 минут.',
      name: 'Имя',
      phone: 'Телефон',
      submit: 'Отправить'
    },
    en: {
      title: 'Let\'s plan the trip together?',
      description: 'Leave your contacts — our manager will contact you within 10 minutes.',
      name: 'Name',
      phone: 'Phone',
      submit: 'Send'
    }
  }

  const info = officeInfo[language]
  const form = contactForm[language]

  return (
    <section id="cta" className="relative py-24">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Ofis ma'lumotlari */}
          <div className="glass rounded-3xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">{info.title}</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 grid place-items-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">{info.address.title}</div>
                  <div className="text-white/70">{info.address.value}</div>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 grid place-items-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">{info.phone.title}</div>
                  <a href="tel:+998991772444" className="text-white/70">{info.phone.value}</a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-500/20 grid place-items-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                    <polyline points="12,6 12,12 16,14" stroke="currentColor" strokeWidth="2" fill="none"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">{info.hours.title}</div>
                  <div className="text-white/70">{info.hours.value}</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Kontakt formasi */}
          <div className="glass rounded-3xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">{form.title}</h3>
            <p className="text-white/70 mb-6">{form.description}</p>
            <form className="space-y-4">
              <input required placeholder={form.name} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-brand-400" />
              <input required type="tel" placeholder={form.phone} className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-brand-400" />
              <button className="w-full px-6 py-3 rounded-xl bg-brand-500 hover:bg-brand-400 transition-colors">{form.submit}</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}


