import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useAuth } from "../auth/Auth";

const TimeUnit = ({ value, label }) => (
    <div className="bg-lavender-100 p-6 rounded-lg shadow-lg">
      <div className="text-6xl font-bold text-lavender-700 mb-2">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-xl text-lavender-900">{label}</div>
    </div>
)

const CountdownTimer = () => {
  const { login } = useAuth();
    const navigate = useNavigate()
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())
    const [showHearts, setShowHearts] = useState(false)
  
    useEffect(() => {
      const timer = setInterval(() => {
        const newTimeLeft = calculateTimeLeft()
        setTimeLeft(newTimeLeft)
        
        // Check if countdown just finished
        if (Object.values(newTimeLeft).every(val => val <= 0)) {
          setShowHearts(true)
          login("pumpkin@30")
          setTimeout(() => navigate('/app', { replace: true }), 3000) // Redirect after animation
        }
      }, 1000)
  
      return () => clearInterval(timer)
    }, [navigate])

  function calculateTimeLeft() {
    // Set target date to April 28 of the CURRENT YEAR at midnight
    const currentYear = new Date().getFullYear()
    const targetDate = new Date(currentYear, 1, 28) 
    const now = new Date()
    const difference = targetDate - now

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  }

  // Don't render if countdown is over (will redirect)
  const Heart = ({ style }) => (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ 
        scale: [0, 1, 1, 0],
        opacity: [0, 1, 1, 0],
        y: [-20, -100, -200],
        x: style.x
      }}
      transition={{
        duration: 2.5,
        ease: "easeOut",
        times: [0, 0.2, 0.8, 1]
      }}
      className="absolute text-4xl text-lavender-500"
      style={{ left: `${style.left}%` }}
    >
      ❤️
    </motion.div>
  )

  return (
    <div className="text-center space-y-8 relative min-h-[400px]">
      {!showHearts ? (
        <>
          <h1 className="text-5xl font-light text-lavender-900 mb-8">
            Our Special Day Begins In...
          </h1>
          <div className="flex justify-center gap-6">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
          </div>
        </>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className="text-6xl text-lavender-700"
          >
            It's Time! 🎉
          </motion.div>
        </div>
      )}

      <AnimatePresence>
        {showHearts && (
          <>
            {[...Array(15)].map((_, i) => (
              <Heart 
                key={i}
                style={{
                  left: Math.random() * 100,
                  x: (Math.random() - 0.5) * 100
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </div>
  )
}


export default CountdownTimer