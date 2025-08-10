import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import { LanguageSwitcher } from './LanguageSwitcher'

const navItems = [
  { id: 'about', key: 'about' },
  { id: 'dest', key: 'destinations' },
  { id: 'why', key: 'whyUs' },
  { id: 'testi', key: 'testimonials' },
  { id: 'certificate', key: 'certificate' },
]

export function NavBar() {
  const [open, setOpen] = useState(false)
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="container">
        <div className="mt-6 rounded-full glass px-5 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12L12 3L21 12" stroke="#2bc1ff" strokeWidth="2"/>
              <path d="M5 10V21H19V10" stroke="#2bc1ff" strokeWidth="2"/>
            </svg>
            <span className="font-bold tracking-wider">TRAP TOUR</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((i) => (
              <a key={i.id} href={`#${i.id}`} className="text-white/80 hover:text-white transition-colors">
                {t.nav[i.key as keyof typeof t.nav]}
              </a>
            ))}
            <a href="#cta" className="px-4 py-2 rounded-full bg-brand-500 hover:bg-brand-400 transition-colors">
              {t.nav.contact}
            </a>
            <LanguageSwitcher />
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button onClick={() => setOpen((s) => !s)} className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10">
              <span className="sr-only">Menu</span>
              <div className={clsx('w-5 h-0.5 bg-white transition-all', open && 'rotate-45 translate-y-0.5')}></div>
              <div className={clsx('w-5 h-0.5 bg-white mt-1 transition-all', open && '-rotate-45 -translate-y-0.5')}></div>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="container">
              <div className="glass mt-2 rounded-3xl p-4 flex flex-col gap-2">
                {navItems.map((i) => (
                  <a key={i.id} href={`#${i.id}`} className="py-2 px-3 rounded-xl hover:bg-white/5">
                    {t.nav[i.key as keyof typeof t.nav]}
                  </a>
                ))}
                <a href="#cta" className="py-2 px-3 rounded-xl bg-brand-500 text-center">
                  {t.nav.contact}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}


