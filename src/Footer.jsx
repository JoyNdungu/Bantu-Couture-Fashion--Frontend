// Footer.jsx
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-6 text-center ">
<div className="flex flex-col mr-5 ml-5 items-center justify-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-lg font-serif">
<div className="flex flex-row items-center gap-2 ">
  <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 mx-2">
    <FaInstagram />
  </a>
  <a href="" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 mx-2">
    <FaTiktok/>
  </a>
<a href="https://www.twitter.com/yourbrand" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 mx-2">
  <FaTwitter />
</a>

</div>
<div className="flex flex-row items-center gap-2 ">
<Link to="/about" className="hover:text-orange-600 mx-2">
About Us
</Link>
<Link to="/contact" className="hover:text-orange-600 mx-2">
Contact
</Link>
</div>
<div className="flex flex-row items-center gap-2  ">
 <p className="flex items-center gap-2">
  📍
  <a
    href=""
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-orange-500"
  >
   Larisa, Kenya 
  </a>
</p>
</div>

<div className="flex flex-row items-center gap-2 text-sm font-bold text-orange-600">
<p>©{new Date().getFullYear()} BCF. All rights reserved.</p>
</div>
  </div>
      
    </footer>
  );
};

export default Footer;