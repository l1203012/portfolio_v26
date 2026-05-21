import { HashRouter, Routes, Route } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Work } from './pages/Work'

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-bone text-ink selection:bg-accent selection:text-bone">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}
