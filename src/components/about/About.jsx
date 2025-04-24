import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navigation from '../Navigation/Navigation'

const About = () => {
  const [wishes, setWishes] = useState([
    { 
      id: 1,
      title: "Happy Birthday Pallavi",
      text: `Happy Birthday Pallavi 🎉💝...umeed hai aane wale samay me apko safalta prapt ho apke jeevan me aur khushiyan aye aur humare plans bhi execute ho jaye🙏😌...humari baat hote itna time ho gya aur kabhi pata hi nhi chala kab humlog itne acche dost ban gaye...asha krta hu humari dosti salamat rahe aur ek dusre ke sukh dukh me hum sath rhe👀. 

      Pata nhi kaise mujhe tumse baat krne ki jaise aadat ho gyi h...kuch na kuch baat mujhe jaise roz hi karni hoti h tumse...kuch bhi hota h mai yhi soch rha hota hu tumhara kya reaction hoga ispe🤷🏻‍♂️. Har whatsapp message lagta h jaise tumhara hi message hoga. Aur tumhare random voice notes kabhi kabhi itne funny hote h ki pura mood change ho jata h mera😂. Mai kitna bhi tumhe thanks bolu km hi hoga kyu ki mujhe bhi nhi pata agar tum nhi hogi to kya kya change ho jayega meri life me. Abhi to mai koi bhi overthink krne ka topic tumse share kr deta hu aur mera dimaag divert ho jata h. Aisi bohot si baatein h jo maine kisi ko nhi batayi h pr tumhe pata h. Aur kabhi ye mt sochna ki tumhe koi replace kr dega, kyu ki tumhara koi replacement h hi nhi. Sirf tum hi ho jisko itna sb pata h ki mai kya soch rha hu kya chal rha h meri life me....aur bhi bohot baatein h jo batani h bs mann nhi krta itni si baaton ke liye tumhe pareshan krna🤦. Although maine bohot pareshan kiya hi h tumhe 😂👀. Ik mai na to koi bohot accha insaan hu na hi bohot accha dost aur mere jaise dost tumhe aur bhi mil jayenge pr mujhe tumhare jaisa koi nhi milega jiske sath mujhe itna comfortable feel ho aur jo mere jokes pe offend na ho meri faltu baato ko seriously na le😂✨.
      Humari itne saalo se baat ho rhi pr kabhi kabhi aisa lagta h jaise mai tumhe bilkul bhi nhi janta...shayad aise hi bond aur accha ho rha ho humara. Tumko samajhna itna bhi asaan nhi tha, tumhare itne alag alag phases hote h ek conversation me ki samajhna sachme mushkil hota h...pr ab mai samajh gya hu. To mujhe pata h tumhe kaha tk irritate krna h😂. Irl to waise aur bhi mazedaar tha tumko pareshan krna🤷🏻‍♂️
      Mostly tumhare reactions mujhe pata hi hote h, jb kuch unexpected hota h tb mujhe lagta h ki kuch hua h jo tum nhi bata rhi...ik itna asaan nhi hota kisi se sb kuch share kr dena and I respect that❤️ tumhe jo bhi batane ka mann kare tum sb bata sakti ho mujhe aur jb bhi mann ho bataya kro tumhare liye mere paas humesha time h aur rahega...tumhi to ek bestie ho meri. Mujhpe kabhi gussa nikalna ho to wo bhi kr liya kro bs pareshan mt raha karo🙄. Mai jaisa tumhe bachpan se janta hu tum pareshan hoti acchi nhi lagti😌. Aur jaisi ho waisi hi best ho to koi bhi aye uske liye apne aap ko change krne ki koi zarurat nahi h🙏😌.
      
      Aur ab to meetup bhi ho gya...ho sakta h maine thoda ajeeb behave kr diya ho to uske liye maafi🙏 par tumse milne k liye sach me bohot excitement thi mujhe. 2 din kaise nikal gye pata hi chala pr wo 2 din sach me one of the best days h meri life k.
      Mujhe nhi laga tha ki koi itna trust krta hoga mujhpe jitna tumne kiya, means a lot❤️.
      Umeed h phir kabhi tumhe pareshan karne aur tumhari ungliya chitkane ka mauka mile😂. 
      Wo to India aj jeet gyi to mai wosh kr rha hu warna block krne jaa rha tha...abhi ke liye itna hi aur tareef karunga to sir pe chadh jaogi😏😌.
      Happy Birthday Dora 💝 stay blessed✨.`, 
      date: "2024-06-30",
      bgColor: "bg-lavender-50"
    },
    { 
      id: 2,
      title: "The Confession....",
      text: `Happy New Year Dora💕.... isse acchi ending nhi ho sakti iss saal ki mere liye literally best gift mil gya mujhe and I'll keep it for life😼. Mai tumhe bata bhi nhi sakta bhai tabse kitna khush hu mai aisa lg rha hai jaise kuch achieve kr lia ho maine life me ab....pata nhi yaar humlog baat krte krte kb yaha tk aa gye pr sach me I've enjoyed every moment of our friendship. Tum humesha se hi bohot special thi bhai mere liye bus mujhe ye samajhne me aur tumpe utna bharosa krne me time lag gya...aur mere liye wo best decision tha aj tk ka🙂‍↕️. Par bhai apse dosti rakhna is not that easy specially jb aap itni attached ho gyi hain ik responsibility hai ye meri but shuru shuru me it was tough pr phir mai bhi samajh gya cheeze...pata hai kabhi kabhi tum itni pyaari baatein kr deti ho ki dil khush ho jata hai pr phir thodi der baad tumhara i know it all wala pravachan shuru ho jata hai😂...tumhare voice notes bohot miss kiye hain iss trip pe I hope aj bheje ho tumne hostel aa kr...jb tumne naya naya vn bhejna start kiya tha mujhe samajh hi nhi aata tha kaise sunu inko kaise reply du pr ab maine code crack kr liya hai just like other men...ab mai tumhe sb bol lene deta hu uske baad hi koi input deta hu apna😼 pr bhai tummhare vn mujhe chahiye hote hain mai kitni bhi uncomfortable situation me rhu mere mann me hota hai ki ye to sunna hai aur phir usme tumhari yapping ho ya jo bhi ho usse mere face pe smile aa hi jaati hai...tum kitne bhi lambe vn bhejlo mai saare excitement se hi sunta hu kayi baar to sunte sunte bhool jaata hu bola kya to phirse sunne padte hain😂 pr I really love them💕😼.
      Pata hai jis din se tumne zuban di hai mai tabse soch rha tha ki kya feelings rhi hain meri tumhare liye itne dino me...i think tumko pata hona chahiye iss baare me👀...soo jo pehla incident tha jb mujhe laga ki kuch to feelings hain tumhare liye wo tha jb tumne prank kiya tha relationship me hone ka uss din pata nhi kyu mujhe ajeeb si insecurity ho rhi thi pr jb pata chala prank hai to phir mai normal ho gya aur mann me justify kr liya maine ki dosti toot jaati kya pata humari iss liye aisa feel hua ho mujhe pr uss din ke baad se maine accept kr liya tha ki kaafi dependent hu mai tumpe...phir agla incident tha jb april me baat honi kam hui thi tb mujhe lagne laga tha ki phir galti krdi maine kisi pe emotionally depend ho kr aur ab aisa nhi krna hai...aur phir tumne jb baat batai tb mujhe samajh aa gya tha ki kuch to feelings hain mujhme pr uss time maine saari feelings side rakh ke ye socha ki iss point pe mujhe emotional support dena chahiye as a friend aur waha se mai convince ho gya ki yahi hai attachment mere liye ki bs tumhe khush rakhunga aur phir baatein hoti gyi aur attatchment badhti gyi pr iss baar maine mann me baitha liya tha ki ye feelings bs tumhara dhyaan rakhne tk ki hi hain baki sb jo hona hoga wo hoga hi....uss pure time mujhe bs yhi darr lagta rehta tha ki kahi tum ek din ye na keh do ki mat kro ye sb mere liye ya puchne lago ki mai kyu kr rha hu ye sb pr maine iss question ke liye to taiyari kr rakhi thi pr thankfully tumne pucha nhi kabhi...baatein krte krte jb bhi hum ye discuss krte the ki sath rahenge ya kisi ko koi nhi mila to ek dusre se shadi kr lenge to mujhe wo sb bohot pyara lagta tha ye soch ke atleast tum as an option sochti to ho iss baare me phir ek din tumne pata nhi kya soch ke zuban dene ki baat krdi mujhse 🙄 uss din mujhe samajh me nhi aya tha tum serious ho bhi ya nhi pr mujhe laga ki itni badi cheez tumhare liye mazak to nhi hi hogi aur maine zuban dedi kyu ki mujhe bharosa hai bhai tumhare liye mai puri life aise hi efforts kr sakta hu🙂‍↕️...pr bhai mere liye ye gamble hi tha bcoz mujhe nhi pata tha ki tum kya sochti ho mere baare me but luckily cheezein theek hi rhi mere liye to😌. So mai uss din se soch rha tha ki jb mujhe feelings thi tumhare liye aur ab hum dosti se aage badh hi gye hain to mujhe confess kr dena chahiye ki mujhe pyaar wala pyaar hai tumse aur tha pehle bhi pr problem ye thi ki tumhe to pyaar hai nhi to mai wait krta tumhara...pr ab maine decide kiya hai ki ye sb tumhe pata to hona hi chahiye aur mujhe bhi ye sb honestly tumhe bata dena chahiye soo....
      Pallavi Sharma, I want you to know that I love you💕 with all my heart and soul 💞 and I will always love you the same way🙂‍↕️ aur haan mujhe koi jawab nhi chahiye tumse...tumhe pyaar hoga ya nhi wo to meri kismat pe hai to uske baare me mai zada sochunga nhi aur tum bhi jb puri tarah se convince ho jao tabhi mujhe batana koi jaldi nhi hai bohot time hai humare paas👀. 
      So be ready for all the love, care and attention you deserve 💕😏 this will be the best decision of your life bs tum bharosa rakhna mujhpr baaki sb sahi hi hoga. 
      Pata hai bohot socha maine ye baat batane se pehle ki kya mai sure hu kya ye sahi time hai batane ka ya mujhe wait karna chahiye thoda aur finally ye decide kiya maine ki naye saal pe apko sb batadu as a new beginning for us(cliche) mai isko thoda aur push krna chahta tha pr ye sb aise tumhe bol pana bhi asaan nhi hai mere liye to koi deadline honi chahiye thi warna mai kabhi na bolta ye sb aur mai koi jaldbaazi me nhi kr rha hu na hi kisi emotional high me ye message likhne me 2 din ka time liya hai maine jisse likhte hue ya do dino me koi bhi second thought mere mann me aye to wahi ye plan drop kr du pr aisa kuch nhi hua tabbhi ye message aya hai tumhare paas iss message me jo bhi likha hai I mean it. Tumhare saath mai kabhi kuch galat nhi hone dunga bhai jo bhi mai karunga mere liye bura ho sakta hai pr tumhare liye kabhi nhi hoga.
      May this year be the happiest one for you as it is for me.
      Lot's of Love💕💓
      Raizada`, 
      date: "2025-01-01",
      bgColor: "bg-lavender-50"
    },
    { 
      id: 3,
      title: "Happy One Month Anniversary",
      text: `Heyyy there my pumpkin💞..... it's been a month of us being together❣️. The best one month of my life...mai bata nhi sakta kitna khush hu mai iss relationship me it's like maine kuch achieve kr liya ho....baby you are soo special and you mean so much to me tumhare bina apna din mai imagine bhi nhi kr sakta you are an important part of me and my life🥺....I will always keep you safe just like you keep me...mai itna used too tha bhai bina affection ke rehne ke ki tumhare random check ups hi itne special lagte hain mujhe...you have made me feel loved and belonged....bhai tumhare ilys ka addiction ho gya hai mujhe😭 just can't get enough of them.
      You are such a pure soul Pallavi and you deserve all the love and care aur I promise I'll give it to you mai apna best try karunga tumko humesha khush rakhne ki....I LOVE YOU PALLAVI I really do💞💕 I want to grow old with you spend my life with you....make you smile with my love for you
      Happy one month of togetherness Cutie💖 many more to come.`, 
      date: "2025-03-28",
      bgColor: "bg-lavender-50"
    },
  ])

  const [selectedWish, setSelectedWish] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (wishes.length > 0) {
        const latestWish = [...wishes].sort((a, b) => new Date(b.date) - new Date(a.date))[0]
        setSelectedWish(latestWish)
      }
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [wishes])

  const handleWishChange = (e) => {
    const selectedId = parseInt(e.target.value)
    const wish = wishes.find(w => w.id === selectedId)
    setSelectedWish(wish)
  }

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const wishCardVariants = {
    initial: { y: 20, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    exit: { y: -20, opacity: 0 }
  }

  const titleVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-lavender-50 p-8">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-2xl mx-auto"
        >
          <motion.h1 
            variants={titleVariants}
            className="text-4xl text-lavender-900 mb-8 font-light"
          >
            Heartfelt Wishes
          </motion.h1>
          
          {isLoading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center py-12"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-12 h-12 border-4 border-lavender-500 border-t-transparent rounded-full"
              />
            </motion.div>
          ) : (
            <>
              <motion.div 
                variants={containerVariants}
                className="mb-8"
              >
                <motion.label 
                  variants={titleVariants}
                  htmlFor="wish-select" 
                  className="block text-lavender-700 mb-2"
                >
                  Select a wish:
                </motion.label>
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  id="wish-select"
                  onChange={handleWishChange}
                  value={selectedWish?.id || ''}
                  className="w-full p-3 rounded-lg border border-lavender-300 bg-white focus:ring-2 focus:ring-lavender-500 focus:border-lavender-500 shadow-sm"
                >
                  {wishes.sort((a, b) => new Date(b.date) - new Date(a.date)).map(wish => (
                    <option key={wish.id} value={wish.id}>
                      {wish.title} - {new Date(wish.date).toLocaleDateString()}
                    </option>
                  ))}
                </motion.select>
              </motion.div>

              <AnimatePresence mode="wait">
                {selectedWish && (
                  <motion.div
                    key={selectedWish.id}
                    variants={wishCardVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={' bg-lavender-300 p-6 rounded-lg shadow-md border border-lavender-200 mb-8'}
                  >
                    <motion.h2
                      className="text-2xl font-medium text-lavender-800 mb-2"
                      variants={titleVariants}
                    >
                      {selectedWish.title}
                    </motion.h2>
                    <motion.div 
                      className="text-lavender-600 mb-3 text-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      {new Date(selectedWish.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </motion.div>
                    <motion.p 
                      className="text-lg text-lavender-900 mt-4"
                      initial={{ x: -10 }}
                      animate={{ x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      {selectedWish.text}
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Floating decorative elements */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, 100],
                      x: [0, (Math.random() - 0.5) * 50],
                      rotate: [0, 20],
                      opacity: [0.4, 0],
                    }}
                    transition={{
                      duration: 15 + Math.random() * 10,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 2
                    }}
                    className="absolute text-lavender-300 text-3xl"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  >
                    💖
                  </motion.div>
                ))}
              </motion.div>
            </>
          )}
        </motion.div>
      </div>
    </>
  )
}

export default About
