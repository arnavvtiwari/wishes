import React, { useState } from "react";
import Navigation from "../navigation/Navigation";

const Meter = () => {
  const [compatibility, setCompatibility] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [loadingTextIndex, setLoadingTextIndex] = useState(0);

  const loadingMessages = [
    "Analyzing your connection...",
    "Calculating the chemistry...",
    "Measuring your bond...",
    "Reading the love signals...",
    "Computing compatibility...",
  ];
  const calculateCompatibility = () => {
    setIsCalculating(true);
    setCompatibility(null);
    setLoadingTextIndex(0);

    const textInterval = setInterval(() => {
      setLoadingTextIndex((prev) => (prev + 1) % loadingMessages.length);
    }, 1000);
    
    setTimeout(() => {
      clearInterval(textInterval);
      const score = Math.floor(Math.random() * 11) + 90; // Random score between 80-100
      setCompatibility(score);
      setIsCalculating(false);
    }, 5000 + Math.random() * 3000); // Simulate 5-8 seconds calculation time
  };

  const getCompatibilityMessage = (score) => {
    if (score >= 95) return "Perfect Match! 💕";
    if (score >= 90) return "Amazing Connection! 💖";
    if (score >= 85) return "Great Chemistry! 💗";
    return "Keep Growing Together! 💝";
  };

  const getColorClass = (score) => {
    if (score >= 90) return "text-pink-600";
    if (score >= 80) return "text-purple-600";
    if (score >= 70) return "text-indigo-600";
    return "text-blue-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Navigation />
      <div className="flex flex-col items-center justify-center p-8 mt-12">
        <span className="font-mono text-2xl mb-2 text-center">
          Click on the button to know our compatibility
        </span>
        <span className="font-mono text-md mb-8 text-center">
          We utilize special algorithm to calculate compatibility to ensure 100% accuracy
        </span>


        <button
          onClick={calculateCompatibility}
          disabled={isCalculating}
          className="bg-gradient-to-r from-pink-500 to-lavender-700 text-white font-mono font-semibold 
                         px-8 py-4 rounded-full shadow-lg hover:shadow-2xl 
                         transform hover:scale-105 transition-all duration-300
                         disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isCalculating ? "Calculating..." : "Calculate Compatibility"}
        </button>

        {isCalculating && (
          <div className="mt-12 flex flex-col items-center">
            <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="font-mono text-gray-600 mt-4 transition-opacity duration-300">
              {loadingMessages[loadingTextIndex]}
            </span>
          </div>
        )}

        {compatibility !== null && !isCalculating && (
          <div className="mt-12 flex flex-col items-center">
            <div className="relative w-64 h-64 flex items-center justify-center">
              {/* Outer circle */}
              <div className="absolute w-full h-full rounded-full border-8 border-gray-200"></div>

              {/* Progress circle */}
              <svg className="absolute w-full h-full transform -rotate-90">
                <circle
                  cx="128"
                  cy="128"
                  r="120"
                  stroke="url(#gradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 120}`}
                  strokeDashoffset={`${
                    2 * Math.PI * 120 * (1 - compatibility / 100)
                  }`}
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Score text */}
              <div className="flex flex-col items-center z-10">
                <span
                  className={`text-6xl font-bold ${getColorClass(
                    compatibility
                  )}`}
                >
                  {compatibility}%
                </span>
              </div>
            </div>

            <span
              className={`font-mono text-3xl font-bold mt-6 ${getColorClass(
                compatibility
              )}`}
            >
              {getCompatibilityMessage(compatibility)}
            </span>

            <button
              onClick={calculateCompatibility}
              className="mt-8 bg-white text-purple-600 font-mono font-semibold 
                                 px-6 py-3 rounded-full shadow-md hover:shadow-lg 
                                 transform hover:scale-105 transition-all duration-300 border-2 border-purple-200"
            >
              Calculate Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Meter;
