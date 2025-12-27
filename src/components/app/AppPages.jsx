import Navigation from '../navigation/Navigation'
const AppPage = () => {
    return (
    <>
    < Navigation/>
    <div className="bg-white/80 backdrop-blur-sm border border-lavender-300/50 rounded-2xl p-8 shadow-xl relative overflow-hidden mt-10">
  {/* Decorative corner elements */}
  <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-lavender-300 rounded-tl-2xl"></div>
  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-lavender-300 rounded-br-2xl"></div>
  
  
  <div className="text-center max-w-2xl mx-auto">
    <h2 className="text-3xl text-lavender-800 font-light mb-6 tracking-wide font-mono">
      It's been 10 Months!
    </h2>
    
    <div className="relative py-2 mb-8">
      <div className="absolute left-0 top-1/2 w-1/4 h-0.5 bg-lavender-300 transform -translate-y-1/2"></div>
      <div className="absolute right-0 top-1/2 w-1/4 h-0.5 bg-lavender-300 transform -translate-y-1/2"></div>
      <div className="text-lavender-500 text-4xl mx-auto w-max">❦</div>
    </div>
    
    <div className="bg-lavender-50/50 p-6 rounded-xl mb-8 border border-lavender-200">
      <p className="text-xl text-lavender-700 leading-relaxed font-serif italic">
        "Happy 10 Months my Cutie Pumpkin,<br />
        I can't believe how quickly time has flown. Every moment with you feels like a beautiful dream come true. Everything about you is so perfect that I want nothing to ever change. Thank you for being with me through all this time, ik it was a tough journey and a long one but we finally made it. I can't believe how your presence has really changed every thing in my life. You are the El to my Mike, the superhero I always wished for. Here's to many more months and years of love, laughter, and unforgettable memories together. I promise we will finish Stranger Things once we meet🐥.<br /> I LOVE YOU PALLAVI"
      </p>
    </div>
    
    <div className="border-t border-lavender-200 pt-6 relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-lavender-100 px-4 text-lavender-500">
        ❦
      </div>
      <p className="text-lg text-lavender-600 italic">
        "Happy 10 Months Pumpkin."
      </p>
      <p className="text-lavender-500 mt-1">- Raizada</p>
    </div>
  </div>
</div>
      </>
    )
  }
  
  export default AppPage
