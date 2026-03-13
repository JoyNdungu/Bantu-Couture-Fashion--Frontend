import { useState } from "react";
import { Link } from "react-router-dom";
import BCFlogo from "./assets/BCFlogo.png";
import logo from "./assets/logo.png"

const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return(
<nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md flex items-center justify-between px-6 py-4 font-bold font-serif ">
<div className="flex items-center gap-3">

  <img
    src={logo}
    alt="Bantu Couture Fashion Logo"
    className="h-14 w-auto rounded-full object-cover shadow-lg"
  />

  <div className="flex flex-col leading-tight">
    
    <h1 className="text-white text-2xl font-semibold tracking-wide">
      Bantu Couture Fashion
    </h1>

    <p className="text-white/75 text-lg font-dancing ml-6">
      Luxury Inspired by Tradition
    </p>

  </div>

</div>
 <h2 className="absolute text-[200px] font-serif text-white/5 top-2 left-10 pointer-events-none md:mr-5 sm:mr-7 lg:text-center">
BCF
</h2>
<div
className="md:hidden text-white text-3xl cursor-pointer z-50 hover:text-orange-600 transition"
onClick={() =>setMenuOpen(!menuOpen)}> ☰
</div>

{/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 justify-between">
          {["Home",  "Collection", "About", "Contact"].map((item, index) => (
            <Link
              key={index}
              to={`/${item.toLowerCase()}`}
              className="relative text-white group hover:text-orange-600 mx-2"
            >
              {item}
              <span className="absolute left-0 bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full bg-gray-200"></span>
            </Link>
            
          ))}
        </div>

    
{/* Mobile Menu */}

{menuOpen && (
<div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center gap-6 py-8 md:hidden">
  {["Home",  "Collection", "About", "Contact "].map((item, index) => (
  <Link
  key={index}
to={`/${item.toLowerCase()}`}
className="relative text-white group hover:text-orange-600 mx-2"
onClick={() => setMenuOpen(false)}>
  {item}
<span className="absolute left-0 bottom-1 w-0 h-[2px] transition-all duration-300 group-hover:w-full bg-gray-200"></span>
</Link>
 ))}
</div>

  )}  
</nav>

  );
};
export default Header;