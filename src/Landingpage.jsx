import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import promoVideo1 from "./assets/promoVideo1.mp4";
import WWear from "./assets/WWear.jpg";
import MAfricanWear6 from "./assets/MAfricanWear6.jpg";

import Typewriter from "./Typewriter";


const Landingpage = () => {
 
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-950 overflow-hidden ">

  

{/*body`*/}
<div className="grid grid-cols-1 lg:grid-cols-10 min-h-screen w-full relative">

{/*text section*/}

<div className="lg:col-span-4 flex flex-col justify-center px-10 md:px-16 py-20 relative z-10">

<h1 className="text-6xl md:text-8xl font-serif leading-[1.1] mb-8 text-[#f2eee3]">Discover your style</h1>

<p className="text-gray-400 mt-6 max-w-md">Elegant African Fashion designed for confidence and comfort.</p>

<Link to="/collection">
<button className="mt-8 w-fit px-6 py-3 bg-orange-600 hover:bg-orange-700 transition text-white font-bold rounded-lg"
>
Explore Collection</button>
</Link>
</div>


{/*image 1 section*/}
<div className="lg:col-span-3 flex items-center justify-center text-white relative p-6 border-l border-[#f2eee3]/20 group">
  
 <motion.img
  src={WWear}
  alt="Women Afican Wear"
  className="w-full max-w-sm aspect-[3/4] object-cover rounded-lg shadow-xl group-hover:scale-105 transition-transform duration-500"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8     
  }}
  
/>
 {/* Hover Overlay */}
  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
    <p className="text-orange-400 font-bold text-lg md:text-xl">Women Afican Wear</p>
  </div>
</div>




{/*image 2 section*/}
<div className="lg:col-span-3 flex items-end justify-center relative p-6 group">
 
<motion.img
  src={MAfricanWear6}
  alt="Men African Wear"
  className="w-full max-w-sm aspect-[3/4] object-cover rounded-lg shadow-xl group-hover:scale-105 transition-transform duration-500"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  animate={{ y: [0, -10, 0] }}
  transition={{
    duration: 6,
      }}
/>
 {/* Hover Overlay */}
  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg">
    <p className="text-orange-400 font-bold text-lg md:text-xl">Men African Wear</p>
  </div>
</div>

</div>

<div className="py-32 bg-gray-950 flex flex-col items-center justify-center text-center px-6">
  <h2 className="text-9xl md:text-6xl font-dancing text-orange-600">BCF</h2><br/>
  <Typewriter
    texts={[
      "More than fashion.",
      "A statement of identity.",
      "Elegance that speaks."
    ]}
    typingSpeed={100}
    pause={1500}
  />
</div>


<div className="w-full min-h-[800px] md:min-h-[80vh] relative overflow-hidden bg-black border-y border-gray-900 aspect-video">

  <video
    src={promoVideo1}
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover opacity-70 scale-110 animate-[zoom_20s_linear_infinite]"
  />



  {/* dark overlay */}
  <div className="absolute inset-0 bg-black/40"></div>

  {/* text on video */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">

    <h2 className="text-4xl md:text-6xl font-serif text-[#f2eee3]">
      Timeless African Elegance
    </h2>

    <p className="text-gray-300 mt-4 max-w-xl">
      Discover fashion crafted for confidence, culture, and comfort.
    </p>

    <Link to="/collection">
      <button className="mt-6 px-8 py-3 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition">
        Shop Now
      </button>
    </Link>

  </div>
</div>

<div className="py-24 bg-black text-center px-10 md:px-16">

<h2 className="text-4xl font-serif text-[#f2eee3] mb-8">
Our Story
</h2>

<p className="max-w-3xl mx-auto text-gray-400">
Elegant African fashion crafted for confidence, comfort and timeless beauty.
</p>

<Link to="/about" className="text-orange-600 mt-6 inline-block">
Read More →
</Link>

</div>
<div className="py-24 bg-gray-950 text-center">

<h2 className="text-4xl font-serif text-[#f2eee3] mb-6">
Visit Us
</h2>

<p className="text-gray-400 mb-8">
Experience elegance in person at our boutique.
</p>

<Link to="/contact">
<button className="px-8 py-3 border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white transition">
Contact Us
</button>
</Link>

</div>
</div>
  )
   
}

export default Landingpage;