import React from "react";
import CTA from "../Images/cta.jpg";
import { Zap, Truck, Gift, Sparkles } from "lucide-react";

function SubscribeSection({ height = 615 }) { // <-- default height
  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.builder.io/api/v1/image/assets%2F5c6ffc8bf83440feb9aec3e4598c016e%2F53cd3858db7d4006aa2f33d075ffbef5?format=jpeg&w=1440')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative w-full flex justify-center">
          <img
            src={CTA}
            alt="Bottle Illustration"
            className={`w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-4xl`}
            style={{ height: `${height}px` }} // <-- dynamic height
          />

          {/* Badge Overlay */}
          <div className="absolute top-204 left-4 md:top-140 md:left-86 inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/20 backdrop-blur-xl border border-blue-400/20 rounded-full">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white text-xs md:text-sm font-medium">
              Premium Montiva Packaging
            </span>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center text-center lg:text-left space-y-6">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mx-auto lg:mx-0">
            <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span className="text-sm font-semibold">Limited Time Offer</span>
          </div>

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold font-serif leading-tight">
            <span className="block animate-fade-in-up">SUBSCRIBE</span>
            <span className="block animate-fade-in-up delay-100">AND</span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient animate-fade-in-up delay-200">
              SAVE
            </span>
          </h2>

          {/* Benefits */}
          <div className="space-y-3 md:space-y-4">
            <div className="flex items-center space-x-3 animate-slide-in-right delay-400 justify-center lg:justify-start">
              <div className="bg-cyan-500/20 p-2 rounded-lg">
                <Truck className="w-5 h-5 text-cyan-400" />
              </div>
              <span className="text-sm md:text-base">Free shipping on all subscription orders</span>
            </div>

            <div className="flex items-center space-x-3 animate-slide-in-right delay-500 justify-center lg:justify-start">
              <div className="bg-blue-500/20 p-2 rounded-lg">
                <Gift className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-sm md:text-base">Exclusive member discounts & early access</span>
            </div>

            <div className="flex items-center space-x-3 animate-slide-in-right delay-600 justify-center lg:justify-start">
              <div className="bg-purple-500/20 p-2 rounded-lg">
                <Zap className="w-5 h-5 text-purple-400" />
              </div>
              <span className="text-sm md:text-base">Pause or cancel anytime</span>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-6 animate-fade-in-up delay-700">
            <a
              href="/subscribe#wizard"
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 md:py-4 px-6 md:px-8  transition-all duration-300 shadow-md hover:shadow-lg inline-block"
            >
              <span className="text-lg md:text-xl">Subscribe Now</span>
            </a>
            <p className="text-xs md:text-sm text-gray-300 mt-4 md:mt-6">
              🎉 Join 10,000+ subscribers saving on every order
            </p>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px);} to {opacity:1; transform: translateY(0);} }
        @keyframes slide-in-right { from { opacity: 0; transform: translateX(-20px);} to {opacity:1; transform: translateX(0);} }
        @keyframes gradient { 0%,100%{background-position:0% 50%;} 50%{background-position:100% 50%;} }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out forwards; }
        .animate-gradient { background-size: 200% auto; animation: gradient 3s ease infinite; }
        .delay-100 { animation-delay:0.1s; }
        .delay-200 { animation-delay:0.2s; }
        .delay-300 { animation-delay:0.3s; }
        .delay-400 { animation-delay:0.4s; }
        .delay-500 { animation-delay:0.5s; }
        .delay-600 { animation-delay:0.6s; }
        .delay-700 { animation-delay:0.7s; }
      `}</style>
    </div>
  );
}

export default SubscribeSection;
