import { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

const languages = [
  { code: 'uz', name: 'O\'zbekcha', flag: '🇺🇿' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'en', name: 'English', flag: '🇺🇸' }
] as const

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleLanguageSelect = (langCode: string) => {
    setLanguage(langCode as 'uz' | 'ru' | 'en')
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button 
        onClick={handleToggle}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        <span className="text-lg">
          {languages.find(lang => lang.code === language)?.flag}
        </span>
        <span className="hidden sm:block text-sm font-medium">
          {languages.find(lang => lang.code === language)?.code.toUpperCase()}
        </span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white/30 backdrop-blur-lg rounded-2xl p-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-xl text-left transition-colors ${
                language === lang.code 
                  ? 'bg-brand-500 text-white' 
                  : 'hover:bg-white/10 text-white/80 hover:text-white'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm font-medium">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
