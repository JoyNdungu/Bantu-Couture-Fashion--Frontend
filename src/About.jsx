
import shop from "./assets/shop.jpg";
import CEO from "./assets/CEO.jpg";
import logo from "./assets/logo.png";
const About = () => {
  return (
    <div className="flex flex-col bg-gray-950 text-white min-h-screen w-full px-6 md:px-18 lg:px-32 py-12">

      {/* ABOUT SECTION */}
      <div className="flex flex-col lg:flex-row gap-10 ">

        {/* TEXT */}
        <div className="flex flex-col items-center justify-center w-full lg:w-3/4 mt-16 text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-dancing mb-6">
            About Us
          </h1>

          <p className="text-base md:text-lg max-w-2xl">
            At BCF, we believe that fashion is more than just clothing – it’s an expression of identity.

            Our journey began with a passion for African elegance, blending timeless designs with modern comfort. Every piece in our collection is thoughtfully crafted to celebrate heritage, individuality, and confidence.

            From the intricate patterns of our kaftans to the bold styles of our African wear, each garment tells a story.
            <br /><br />
            A story of culture, sophistication, and style. We are dedicated to creating fashion that empowers you to feel your best, every day.
          </p>

          <p className="text-orange-800 mt-4 font-serif text-base text-2xl md:text-2xl  sm:text-2xl mt-6">
          We can make custom based designs with the material you want
          </p>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center lg:justify-end w-full lg:w-1/4 mt-10 lg:mt-20">
          <img
            src={shop}
            alt="BCF"
            className="w-[260px] md:w-[320px] lg:w-[350px] h-[350px] md:h-[420px] lg:h-[450px] rounded-xl object-cover shadow-lg"
          />
        </div>

      </div>

      {/* CEO TITLE */}
      <h2 className="text-4xl md:text-5xl font-bold font-serif mb-4 mt-16 flex justify-center border-t border-gray-700 pt-8">
        CEO
      </h2>

      {/* CEO SECTION */}
      <div className="flex flex-col lg:flex-row gap-10 items-center w-full mt-12 pb-20">

        {/* CEO IMAGE */}
        <div className="w-full lg:w-1/2">
          <img
            src={logo}
            alt="CEO"
            className="w-full max-w-lg mx-auto object-cover rounded-xl shadow-lg "
          />
        </div>

        {/* CEO TEXT */}
        <div className="w-full lg:w-1/2 flex flex-col pt-6 lg:pt-0 lg:pl-8 text-center lg:text-left">

          <p className="text-6xl md:text-6xl font-dancing mb-8 text-orange-400">
            Mdm.CEO
          </p>

          <p className="text-gray-300 leading-relaxed">
            *** has always believed in the power of fashion as a form of expression.
            With years of experience in design and a deep appreciation for African heritage,
            she leads Bantu Couture Fashion with passion, creativity, and a commitment to empowering every
            individual through style.
          </p>

        </div>

      </div>
      

    </div>
  );
};

export default About;