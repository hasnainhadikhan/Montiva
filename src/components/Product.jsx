
import  AboutImage from '../Images/Aboutimage.jpg';
import {  Sparkles } from 'lucide-react';

function Product() {
  return (
    <div className="builder-block">
      <section className="bg-blue-50 backdrop-blur-sm py-2">
        <div className="container mx-auto px-12 flex flex-col lg:flex-row items-center gap-16">
  {/* Text Section */}
  <div className="flex-1 text-center lg:text-left  py-4 px-8 ">
    <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif   font-bold mb-4 text-gray-900 leading-tight">
      Elevate your<br/> holiday <br/> gatherings
    </h2>
    <p className=" text-gray-700  font-monospace  mb-8">
      Stock up this holiday season with the <span className="font-semibold font text-blue-600">soft, smooth taste</span><br/> of Earth’s Finest Water.
    </p>

    {/* Button */}
    <div className="flex justify-center lg:justify-start">
      <a
        href="/product-landing"
        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-8  transition-all duration-300 shadow-md hover:shadow-lg"
      >
        <span className="inline-block transform transition-transform duration-300 group-hover:scale-105">
          Shop Now
        </span>
      </a>
    </div>
  </div>


{/* Image Section */}
<div className="flex-1 mr-0 lg:mr-16 flex justify-center">
  <div className="relative animate-fade-in-up">
    {/* Image */}
    <img
      src={AboutImage}
      className="w-[515px] h-[530px] "
      loading="lazy"
      alt="About"
    />

    {/* Badge Overlay */}
    <div className="absolute top-120 left-58 inline-flex items-center gap-2 px-4 py-2 
                    bg-blue-500/10 backdrop-blur-xl border border-blue-400/20 
                    rounded-full">
      <Sparkles className="w-4 h-4 text-blue-400" />
      <span className="text-blue-300 text-sm font-medium">
        Premium Hydration Since 2020
      </span>
    </div>
  </div>
</div>
        </div>
            <br />      <br />         <br />      <br />         <br />      <br />
      </section>

    </div>
  );
}

export default Product;
