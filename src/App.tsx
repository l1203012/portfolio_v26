import { HashRouter, Routes, Route } from 'react-router-dom'
import { TopoBackground } from './components/TopoBackground'
import { Home } from './pages/Home'
import { Work } from './pages/Work'

export default function App() {
  return (
    <HashRouter>
      <TopoBackground />
      <div className="min-h-screen text-ink selection:bg-accent selection:text-bone">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  )
}
