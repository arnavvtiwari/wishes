import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './components/landing/LandingPage'
import AppPage from './components/app/AppPages'
import About from './components/about/About'
import Gallery from './components/gallery/Gallery'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/app" element={<ProtectedRoute><AppPage /></ProtectedRoute>} />
        <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
        <Route path="/gallery" element={<ProtectedRoute><Gallery /></ProtectedRoute>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}

const ProtectedRoute = ({ children }) => {
  const targetDate = new Date('2024-04-28T00:00:00')
  const currentDate = new Date()
  
  return currentDate >= targetDate ? children : <Navigate to="/" replace />
}

export default App