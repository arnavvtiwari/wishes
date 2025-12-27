import React, { useEffect, useState } from 'react'
import Navigation from '../navigation/Navigation'

const Time = () => {

    const [now, setNow] = useState(new Date());

    useEffect(() => {
      // Update the state every 1 second
      const interval = setInterval(() => setNow(new Date()), 1000);
      return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    const diffInMs = now - new Date("2025-02-28T23:53:00");

    // Calculations
    const totalDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const totalHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const totalMinutes = Math.floor(diffInMs / (1000 * 60));
    const totalSeconds = Math.floor(diffInMs / 1000);

  return (
    <div>
      <Navigation />
      <div>
        <h1 className="text-3xl text-lavender-800 font-light mb-6 tracking-wide text-center mt-10">
          Days Since We Are Together
        </h1>
        <div className="text-center text-lavender-600 text-5xl font-mono">
          {totalDays.toLocaleString("en-IN")} days
        </div>
        <h1 className="text-2xl text-lavender-800 font-light mb-6 tracking-wide text-center mt-10">
          Hours Since We Are Together
        </h1>
        <div>
          <div className="text-center text-lavender-600 text-5xl font-mono">
            {totalHours.toLocaleString("en-IN")} hours
          </div>
        </div>
        <h1 className="text-xl text-lavender-800 font-light mb-6 tracking-wide text-center mt-10">
          Minutes Since We Are Together
        </h1>
        <div className="text-center text-lavender-600 text-5xl font-mono">
          {totalMinutes.toLocaleString("en-IN")} minutes
        </div>
        <h1 className="text-xl text-lavender-800 font-light mb-6 tracking-wide text-center mt-10">
          Seconds Since We Are Together
        </h1>
        <div className="text-center text-lavender-600 text-5xl font-mono">
          {totalSeconds.toLocaleString("en-IN")} seconds
        </div>
      </div>
    </div>
  );
}

export default Time