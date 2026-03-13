import { useState } from "react";

import CAfricanWear from "./assets/CAfricanWear.jpg";
import CAfricanWear1 from "./assets/CAfricanWear1.jpg";
import CAfricanWear2 from "./assets/CAfricanWear2.jpg";
import CAfricanWear3 from "./assets/CAfricanWear3.jpg";

import CoupleAfricanWear from "./assets/CoupleAfricanWear.jpg";
import CoupleAfricanWear1 from "./assets/CoupleAfricanWear1.jpg";
import CoupleAfricanWear2 from "./assets/CoupleAfricanWear2.jpg";
import CoupleAfricanWear3 from "./assets/CoupleAfricanWear3.jpg";
import CoupleAfricanWear4 from "./assets/CoupleAfricanWear4.jpg";

import MAfricanWear from "./assets/MAfricanWear.jpg";
import MAfricanWear1 from "./assets/MAfricanWear1.jpg";
import MAfricanWear2 from "./assets/MAfricanWear2.jpg";
import MAfricanWear3 from "./assets/MAfricanWear3.jpg";
import MAfricanWear4 from "./assets/MAfricanWear4.jpg";
import MAfricanWear5 from "./assets/MAfricanWear5.jpg";
import MAfricanWear6 from "./assets/MAfricanWear6.jpg";

import WAfricanWear from "./assets/WAfricanWear.jpg";
import WAfricanWear1 from "./assets/WAfricanWear1.jpg";
import WAfricanWear2 from "./assets/WAfricanWear2.jpg";
import WAfricanWear3 from "./assets/WAfricanWear3.jpg";
import WAfricanWear4 from "./assets/WAfricanWear4.jpg";
import WAfricanWear5 from "./assets/WAfricanWear5.jpg";

import AfricanPattern from "./assets/AfricanPattern.jpg";
import BCFlogo from "./assets/BCFlogo.png";

const Collection = () => {

  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Women", "Men", "Children", "Couple"];

  const images = [

    { src: WAfricanWear, title: "Classic Ladies Wear", category: "Women", badge: "New", price: "Ksh 4,500" },
    { src: WAfricanWear1, title: "African Wear Elegant", category: "Women", badge: "", price: "Ksh 4,500" },
    { src: WAfricanWear2, title: "Ladies Wear Elegant", category: "Women", badge: "Hot", price: "Ksh 5,200" },
    { src: WAfricanWear3, title: "Classic Ladies Wear", category: "Women", badge: "Hot", price: "Ksh 3,900" },
    { src: WAfricanWear4, title: "Premium Ladies Luxe", category: "Women", badge: "", price: "Ksh 3,800" },
    { src: WAfricanWear5, title: "Premium Ladies Wear", category: "Women", badge: "", price: "Ksh 3,500" },

    { src: MAfricanWear, title: "Premium Men Luxe", category: "Men", badge: "", price: "Ksh 5,500" },
    { src: MAfricanWear1, title: "Royal Men Shirts", category: "Men", badge: "New", price: "Ksh 4,800" },
    { src: MAfricanWear2, title: "Premium Men Wear", category: "Men", badge: "", price: "Ksh 5,000" },
    { src: MAfricanWear3, title: "African Wear Premium", category: "Men", badge: "New", price: "Ksh 5,000" },
    { src: MAfricanWear4, title: "Elegant Men Wear", category: "Men", badge: "Hot", price: "Ksh 5,400" },
    { src: MAfricanWear5, title: "African Wear Royal", category: "Men", badge: "Hot", price: "Ksh 4,800" },
    { src: MAfricanWear6, title: "Men Luxury Wear", category: "Men", badge: "New", price: "Ksh 5,600" },

    { src: CAfricanWear, title: "Children Deluxe", category: "Children", badge: "", price: "Ksh 5,200" },
    { src: CAfricanWear1, title: "Children Deluxe", category: "Children", badge: "", price: "Ksh 5,200" },
    { src: CAfricanWear2, title: "Children Deluxe", category: "Children", badge: "", price: "Ksh 5,200" },
    { src: CAfricanWear3, title: "Children Deluxe", category: "Children", badge: "", price: "Ksh 5,200" },

    { src: CoupleAfricanWear, title: "Couple Signature Deluxe", category: "Couple", badge: "", price: "Ksh 5,200" },
    { src: CoupleAfricanWear1, title: "Couple Luxury Deluxe", category: "Couple", badge: "", price: "Ksh 5,200" },
    { src: CoupleAfricanWear2, title: "Couple Premium Deluxe", category: "Couple", badge: "", price: "Ksh 5,200" },
    { src: CoupleAfricanWear3, title: "Couple African Deluxe", category: "Couple", badge: "", price: "Ksh 5,200" },
    { src: CoupleAfricanWear4, title: "Couple Premium Wear", category: "Couple", badge: "", price: "Ksh 5,200" },

  ];

  const filteredImages = images.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category === activeCategory;
  });

  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-950 overflow-hidden">

      {/* Banner */}
      <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden mb-10">
        <img
          src={BCFlogo}
          alt="Collection Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <div className="flex flex-col text-6xl text-[#f2eee3] justify-center items-center py-10  sm:ml-10 md:ml-10 ">
        <h2 className="text-6xl font-dancing">Explore Our Collection</h2>
      </div>

      {/* Categories */}
      <div className="flex flex-row text-white justify-center items-center gap-10 py-4 cursor-pointer text-lg font-serif sm:ml-10 md:ml-10 ">

        {categories.map((category, index) => (

          <p
            key={index}
            onClick={() => setActiveCategory(category)}
         className={`relative cursor-pointer transition-colors hover:text-orange-400
after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0
after:bg-orange-400 after:transition-all after:duration-300
hover:after:w-full
${activeCategory === category ? "text-orange-400 font-bold after:w-full" : ""}`}
          >
            {category}
          </p>

        ))}

      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-6 md:px-10 py-10 gap-6 bg-gray-950 justify-items-center">

        {filteredImages.map((item, index) => (

          <div
            key={index}
            className="w-[250px] sm:w-[280px] md:w-[300px] lg:w-[320px] h-[350px] sm:h-[380px] md:h-[400px] lg:h-[450px] rounded-xl overflow-hidden relative group"
          >

            {/* Image */}
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition duration-300"></div>

            {/* Text */}
            <div className="absolute bottom-4 left-4 text-white">

              <h3 className="text-lg font-bold">{item.title}</h3>

              <p className="text-gray-300 text-sm mt-1 font-medium">
                {item.price}
              </p>

              {item.badge && (
                <span className="text-xs bg-orange-600 px-2 py-1 rounded mt-2 inline-block shadow-lg">
                  {item.badge}
                </span>
              )}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Collection;