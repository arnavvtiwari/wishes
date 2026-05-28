import React from 'react'
import { motion } from 'framer-motion'
import Navigation from '../navigation/Navigation'

// Sample image imports (replace with your actual images)
import img1 from '../images/c7.jpg'
import img2 from '../uploads/anniversary_4.jpg'
import img3 from '../images/c10.jpg'
import img4 from '../images/c11.jpg'
import img5 from '../uploads/anniversary_3.jpg'
import img6 from '../images/c13.jpg'
import img7 from '../uploads/khalsang_2.jpg'
import img8 from '../images/c15.jpg'
import img9 from '../images/c16.jpg'
import img10 from '../uploads/c17.jpg'


const Gallery = () => {
  // Image positions with slight randomness
  const imagePositions = [
    { row: 0, col: 0.5, rotate: -2, delay: 0.1 },
    { row: 0.5, col: 1, rotate: 1, delay: 0.3 },
    { row: 1, col: 1.5, rotate: -1, delay: 0.5 },
    { row: 0.13, col: 1.75, rotate: 2, delay: 0.7 },
    { row: 1.3, col: 2.9, rotate: -3, delay: 0.9 },
    { row: 1.26, col: 2.15, rotate: 0, delay: .1 },
    { row: 0.68, col: 2.55, rotate: 90, delay: 1.3 },
    { row: 1.3, col: 0.75, rotate: -96, delay: 1.5 },
    { row: 0.001, col: 2.59, rotate: -3, delay: 1.7 },
    { row: 1.75, col: 1.59, rotate: 3, delay: 0.7 },
    // ... define positions for all 17 images
    // Add more with different rows/cols and rotations
  ]

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-lavender-100 p-8 overflow-hidden">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl text-lavender-900 mb-12 text-center font-light"
        >
          Us Together
        </motion.h1>

        <div className="relative h-[150vh] w-full">
          {[img1, img2, img3, img4, img5, img6, img7, img8, img9, img10].map((img, index) => {
            const pos = imagePositions[index % imagePositions.length]
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: pos.delay, 
                  duration: 0.7,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ scale: 1.05, zIndex: 10 }}
                className={`absolute w-64 h-64 rounded-lg shadow-xl overflow-hidden 
                  ${index % 3 === 0 ? 'border-2 border-lavender-300' : ''}`}
                style={{
                  top: `${pos.row * 25}%`,
                  left: `${pos.col * 25}%`,
                  rotate: `${pos.rotate}deg`,
                }}
              >
                <img 
                  src={img} 
                  alt={`Memory ${index + 1}`} 
                  className="w-full h-full object-cover transition-all duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lavender-900/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-white font-light text-sm">
                    U & Me 💕
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Floating hearts decoration */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -100],
                x: [0, (Math.random() - 0.5) * 100],
                opacity: [0.7, 0],
              }}
              transition={{
                duration: 15 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute text-lavender-300 text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              ❤️
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Gallery
