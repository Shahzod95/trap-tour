import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

export function Footer() {
  const { language } = useLanguage()
  const t = translations[language]

  const footerText = {
    uz: 'Telegram:',
    ru: 'Telegram:',
    en: 'Telegram:'
  }

  return (
    <footer className="relative py-12 text-white/70">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-white">
          <span className="font-bold">TRAP TOUR</span>
          <span className="text-white/50">© {new Date().getFullYear()}</span>
        </div>
        <div className="text-sm">{footerText[language]} <a className="text-brand-400" href="https://t.me/" target="_blank" rel="noreferrer">@trap_tour</a></div>
      </div>
    </footer>
  )
}


