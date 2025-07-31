import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar1 } from './components/ui/navbar-1'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <div className="h-screen bg-gradient-to-br from-boomerang-black via-boomerang-navy to-boomerang-blue relative overflow-hidden">
        <Navbar1 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
