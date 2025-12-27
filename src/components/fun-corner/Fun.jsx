import React from 'react'
import Navigation from '../navigation/Navigation'
import meter from '../../assets/meter.svg'
import clock from '../../assets/clock.png'
import { useNavigate } from 'react-router-dom'

const Fun = () => {
    const navigate = useNavigate();
  return (
    <div>
      <Navigation />
      <div className="h-full bg-lavender-50 flex flex-col gap-2">
        <div className="flex items-center justify-center mt-2">
          <span className="text-3xl text-lavender-900 font-light mb-6 tracking-wide">
            This is a Fun Corner!
          </span>
        </div>
        <div className="flex flex-col w-3/4 justify-center mx-auto">
          <div className="flex items-center bg-lavender-100 h-25 p-2 gap-4 m-4 rounded-lg shadow-md hover:shadow-2xl"
          onClick={()=>navigate('meter')}>
            <div className="bg-white">
              <img src={meter} alt="meter" className="w-20 h-20" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-2xl font-mono font-semibold">
                Compatibility Meter
              </span>
              <span className="font-mono font-thin">
                Measure our compatibility in a fun way!
              </span>
            </div>
          </div>
          <div className="flex items-center bg-lavender-100 h-25 p-2 gap-4 m-4 rounded-lg shadow-md hover:shadow-2xl"
          onClick={()=>navigate('count')}>
            <div className="bg-white">
              <img src={clock} alt="clock" className="w-20 h-20" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-2xl font-mono font-semibold">
                Let's Count
              </span>
              <span className="font-mono font-thin">Days of togetherness!</span>
            </div>
          </div>
              <div
                className="absolute top-3/4 left-1/2 flex items-center justify-center
                      opacity-100 group-hover:opacity-100
                      transition-opacity duration-300 z-20"
              >
                <span className="bg-lavender-900/60 text-white px-3 py-1 rounded-md text-md font-medium">
                  Coming Soon!!!
                </span>
              </div>
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="relative group flex items-center bg-lavender-100 h-25 p-2 gap-4 m-4 rounded-lg shadow-md blur-md"
            >
              <div className="bg-white">
                <img src={meter} alt="meter" className="w-20 h-20" />
              </div>
              <div className="flex flex-col items-start">
                <span className="text-2xl font-mono font-semibold">
                  Fun Activity {i + 1}
                </span>
                <span className="font-mono font-thin">
                  Description for fun activity {i + 1}.
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Fun