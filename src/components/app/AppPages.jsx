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
    <h2 className="text-3xl text-lavender-800 font-light mb-6 tracking-wide">
      A Heartfelt Apology
    </h2>
    
    <div className="relative py-2 mb-8">
      <div className="absolute left-0 top-1/2 w-1/4 h-0.5 bg-lavender-300 transform -translate-y-1/2"></div>
      <div className="absolute right-0 top-1/2 w-1/4 h-0.5 bg-lavender-300 transform -translate-y-1/2"></div>
      <div className="text-lavender-500 text-4xl mx-auto w-max">❦</div>
    </div>
    
    <div className="bg-lavender-50/50 p-6 rounded-xl mb-8 border border-lavender-200">
      <p className="text-xl text-lavender-700 leading-relaxed font-serif italic">
        "My dearest Pumpkin,<br />
        I'm truly sorry for any pain I've caused. You mean the world to me, 
        and I never want to see you sad. Please know that every moment 
        without your smile feels incomplete."
      </p>
    </div>
    
    <div className="border-t border-lavender-200 pt-6 relative">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-lavender-100 px-4 text-lavender-500">
        ❦
      </div>
      <p className="text-lg text-lavender-600 italic">
        "The greatest apology is changed behavior."
      </p>
      <p className="text-lavender-500 mt-1">- Unknown</p>
    </div>
  </div>
</div>
      </>
    )
  }
  
  export default AppPage
