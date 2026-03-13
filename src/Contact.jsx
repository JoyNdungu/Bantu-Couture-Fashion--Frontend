import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaTwitter ,FaFacebook, FaTiktok } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex flex-col bg-gray-950 text-white min-h-screen w-full px-6 md:px-12 py-16">

      {/* PAGE TITLE */}
      <div className="text-center mb-16 md:mt-18 ">
        <h1 className="text-5xl md:text-7xl font-dancing mb-6">Contact Us</h1>

        <p className="text-gray-300 max-w-2xl mx-auto">
          We'd love to hear from you. Whether you want to place a custom order,
          ask about our collections, or learn more about BCF, feel free to reach out.
        </p>
      </div>


      {/* CONTACT SECTION */}
      <div className="flex flex-col lg:flex-row gap-12 w-full">

        {/* CONTACT INFO */}
        <div className="flex flex-col gap-8 w-full lg:w-1/2">

          <h2 className="text-3xl font-semibold text-orange-400">Get In Touch</h2>

          <div className="flex items-center gap-4">
            <FaPhoneAlt className="text-orange-400 text-xl"/>
            <p>+254 700 000 000</p>
          </div>

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-orange-400 text-xl"/>
            <p>bantucourturefashion@gmail.com</p>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-orange-400 text-xl"/>
            <a
    href=""
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-orange-500"
  >
    Larisa, Kenya
  </a>
          </div>

          <div className="text-gray-300">
            <p className="font-semibold">Business Hours</p>
            <p>Monday – Saturday</p>
            <p>8:00 AM – 7:00 PM</p>
          </div>


          {/* SOCIAL MEDIA */}
          <div className="flex gap-6 mt-6 text-2xl">

            <a href="https://www.instagram.com/boshchicfashions/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 mx-2">
    <FaInstagram />
  </a>
  <a href="https://www.tiktok.com/@boshchicfashion?_t=8qn0Wootbkc&_r=1&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnVesWcBwIfGfE57QPzkAE1Zmc7JmHP8tf2zd5caCuw9-YWjDI0sxm0w0YOYY_aem_ZtoGEyFXXyli71kVxbAaCw" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 mx-2">
    <FaTiktok/>
  </a>
<a href="https://www.twitter.com/yourbrand" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 mx-2">
  <FaTwitter />
</a>

          </div>

        </div>


        {/* CONTACT FORM */}
        <div className="w-full lg:w-1/2">

          <form className="flex flex-col gap-6">

            <input
              type="text"
              placeholder="Your Name"
              className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-400"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-400"
            />

            <textarea
              rows="5"
              placeholder="Tell us about your order or question..."
              className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-400"
            ></textarea>

            <button
              className="bg-orange-600 hover:bg-orange-500 transition rounded-lg py-3 font-semibold"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>


      {/* CUSTOM ORDERS SECTION */}
      <div className="mt-20 border-t border-gray-700 pt-10 text-center">

        <h2 className="text-4xl font-dancing mb-6 text-orange-400">
          Custom Designs
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto">
          Looking for a unique outfit? BCF offers custom-made designs tailored
          to your style and fabric preference. Send us a message with your idea
          and we will help bring your vision to life.
        </p>

      </div>

    </div>
  );
};

export default Contact;