import Navigation from '../navigation/Navigation'
const AppPage = () => {
  return (
    <>
      < Navigation />
      <div className="bg-white/80 backdrop-blur-sm border border-lavender-300/50 rounded-2xl p-8 shadow-xl relative overflow-hidden mt-10">
        {/* Decorative corner elements */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-lavender-300 rounded-tl-2xl"></div>
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-lavender-300 rounded-br-2xl"></div>


        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl text-lavender-800 font-light mb-6 tracking-wide">
            Heart felt apollogies
          </h2>

          <div className="relative py-2 mb-8">
            <div className="absolute left-0 top-1/2 w-1/4 h-0.5 bg-lavender-300 transform -translate-y-1/2"></div>
            <div className="absolute right-0 top-1/2 w-1/4 h-0.5 bg-lavender-300 transform -translate-y-1/2"></div>
            <div className="text-lavender-500 text-4xl mx-auto w-max">❦</div>
          </div>

          <div className="bg-lavender-50/50 p-6 rounded-xl mb-8 border border-lavender-200">
            <p className="text-xl text-lavender-700 leading-relaxed font-serif italic">
              "Hello babyyy🐥....I'm so sorry for what I made you feel in the past two months, ik I have not been a good partner all these days....maine aisa kuch bhi nhi kiya itne dino me ki tumhe accha lage mere saath rehne me and ik it's all my fault, I thank you for being patient all these days....I just want you to know that I love you the most and you are the most precious person in my life. I am so sorry for all the pain I caused, idk mujhe kya ho gya tha I took this relationship and you for granted. You are way too special for me and I know you deserve someone way better than me, you've been the best person to be with....you are the ideal partner but I have been no where near that. But I promise that I will change myself and make you feel the same like I used to before, ik tumhe aisa lagta hai ki maine jo bhi promises kiye the sb jhoot the and mai ab badal gya hu pr aisa kuch bhi nhi hai....you will always be my top priority, there nothing more important for me....your happiness matters the most to me and I really mean it. Ye sb jo bhi hua ye sb bs ek phase tha meri life ka jisme mujhe nhi samajh aya ki mai kya karu aur mai apni cheezo me zada hi busy ho gya tha....itna ki maine kuch kiya hi nhi tumhare liye itne dino me aut ab mujhe samajh aata ki what it made you feel....it was all my fault and I am really really sorry you had to go through all that and I assure you that all this will change because you and I are permanent and all these problems will come and go.....Ik jo bhi hua wo sb meri galti thi and mujhe dhyan dena chahiye tha iss relationship me....I'm really sorry pumpkin I hope you forgive me and things become like they were. I really love you pumpkin❤️"
            </p>
          </div>

          <div className="border-t border-lavender-200 pt-6 relative">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-lavender-100 px-4 text-lavender-500">
              ❦
            </div>
            <p className="text-lg text-lavender-600 italic">
              "The greatest apology is changed behavior."
            </p>
            <p className="text-lavender-500 mt-1">- Pineapple</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppPage
