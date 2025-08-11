import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </LanguageProvider>
  )
}