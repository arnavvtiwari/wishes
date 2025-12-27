import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import LandingPage from './components/landing/LandingPage'
import AppPage from './components/app/AppPages'
import About from './components/about/About'
import Gallery from './components/gallery/Gallery'
import LoginForm from './components/login/Login'
import Questionnaire from './components/quiz/Quiz'
import { AuthProvider, useAuth } from './components/auth/Auth';
import Photos from './components/photos/Photos'
import Fun from './components/fun-corner/Fun'
import Time from './components/time/Time'
import Meter from './components/time/Meter'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/app"
            element={
              <ProtectedRoute>
                <AppPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/gallery"
            element={
              <ProtectedRoute>
                <Gallery />
              </ProtectedRoute>
            }
          />
          <Route
            path="/quiz"
            element={
              <ProtectedRoute>
                <Questionnaire />
              </ProtectedRoute>
            }
          />
          <Route
            path="/photos"
            element={
              <ProtectedRoute>
                <Photos />
              </ProtectedRoute>
            }
          />
          <Route
            path="/fun"
            element={
              <ProtectedRoute>
                <Fun />
              </ProtectedRoute>
            }
          />
          <Route
            path="/fun/count"
            element={
              <ProtectedRoute>
                <Time />
              </ProtectedRoute>
            }
          />
          <Route
            path="/fun/meter"
            element={
              <ProtectedRoute>
                <Meter />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

// const ProtectedRoute = ({ children }) => {
//   const targetDate = new Date('2024-04-28T00:00:00')
//   const currentDate = new Date()
  
//   return currentDate >= targetDate ? children : <Navigate to="/" replace />
// }

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user || user.username !== 'Pumpkin') {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default App