import React from 'react'
import Navigation from '../navigation/Navigation'

const About = () => {
  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-lavender-100 p-8">
        <h1 className="text-4xl text-lavender-900 mb-8">About Us</h1>
        <div className="space-y-4">
          {/* Add your about content here */}
          <p>About us content goes here.</p>
        </div>
      </div>
    </>
  )
}

export default About
