import React, { useState, useEffect, useRef } from 'react';
import { Mountain, Zap, Droplet, Scale, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Image from '../Images/imageone.png';
import two from '../Images/image550ml.jpg';
import three from '../Images/image330mll.jpg';
import four from '../Images/image12l.jpg'
import five from '../Images/imagefive.jpg';
import six from '../Images/image1l.jpg';

const products = [
  {
    id: 1,
    size: '330mL',
    tagline: 'Events, Offices, & Kid-Friendly',
    price: '$34.00',
    caseInfo: '(Case of 24)',
    image: three,
    thumb: three
  },
  {
    id: 2,
    size: '500mL',
    tagline: 'Everyday Hydration',
    price: '$40.00',
    caseInfo: '(Case of 24)',
    image: two,
    thumb: two
  },
  {
    id: 3,
    size: '700mL',
    tagline: 'On-the-Go Hydration',
    price: '$34.00',
    caseInfo: '(Case of 12)',
    image: Image,
    thumb: Image
  },
  {
    id: 4,
    size: '1.0L',
    tagline: 'Traveling & General Hydration',
    price: '$40.00',
    caseInfo: '(Case of 12)',
    image: six,
    thumb: six
  },
  {
    id: 5,
    size: '1.5L',
    tagline: 'Ongoing Hydration',
    price: '$50.00',
    caseInfo: '(Case of 12)',
    image: four,
    thumb: four
  },
  {
    id: 6,
    size: '700mL',
    tagline: 'Active Lifestyle',
    price: '$36.00',
    caseInfo: '(Case of 12)',
    image: five,
    thumb: five
  }
];

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(1);
  const sectionRef = useRef(null);
  const { addToCart, setIsCartOpen, getCartCount } = useCart();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Mountain className="w-10 h-10 md:w-12 md:h-12" />,
      title: 'FROM THE ISLANDS OF FIJI',
      delay: '0.1s'
    },
    {
      icon: <Zap className="w-10 h-10 md:w-12 md:h-12" />,
      title: '100% Natural Electrolytes',
      delay: '0.2s'
    },
    {
      icon: <Droplet className="w-10 h-10 md:w-12 md:h-12" />,
      title: 'Soft, Smooth Taste',
      delay: '0.3s'
    },
    {
      icon: <Scale className="w-10 h-10 md:w-12 md:h-12" />,
      title: 'Perfectly Balanced 7.7 pH',
      delay: '0.4s'
    }
  ];

  const handleAddToCart = () => {
    const activeProduct = products[activeIndex];
    addToCart(activeProduct);
  };

  const handleViewProduct = () => {
    // Navigate to product detail or open cart
    setIsCartOpen(true);
  };

  return (
    <>
      {/* Floating Cart Button */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="fixed top-24 right-6 z-30 bg-gradient-to-r from-blue-600 to-cyan-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 group"
        aria-label="Open shopping cart"
      >
        <ShoppingCart className="w-6 h-6 group-hover:animate-bounce" />
        {getCartCount() > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
            {getCartCount()}
          </span>
        )}
      </button>

      <section
        ref={sectionRef}
        className="w-full py-16 bg-gradient-to-b from-white via-cyan-100 to-blue-50 bg-[length:60%_100%] bg-[position:center]"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group rounded-3xl p-6 md:p-8 bg-white/70 backdrop-blur-md border-2 border-blue-200 shadow-sm transition-all duration-700 transform
                  ${isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'}
                  hover:shadow-xl hover:-translate-y-2`}
                style={{ transitionDelay: isVisible ? feature.delay : '0s' }}
              >
                {/* Icon Wrapper */}
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-300 to-blue-200 flex items-center justify-center text-black shadow-lg transition-transform duration-300 group-hover:scale-110 border-2 border-blue-300">
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <p className="text-center text-sm md:text-base font-semibold text-gray-800 uppercase tracking-wide">
                  {feature.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="min-h-screen">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-gray-900 text-center mt-20">
            Shop Earth's Finest Water
          </h1>
          <div className="container mx-auto px-4 py-12 mt-[-10px]">
            {/* Carousel Container */}
            <div className="max-w-12xl mx-auto">
              <br/>
              <br/>
              {/* Main Product Display */}
              <div className="relative mb-8">
                <div className="flex items-center justify-center gap-4 overflow-hidden">
                  {/* Products Display */}
                  <div className="flex items-center justify-center gap-2 md:gap-4 w-full h-auto px-16">
                    {products.map((product, idx) => {
                      const offset = idx - activeIndex;
                      const isActive = idx === activeIndex;
                      
                      return (
                        <div
                          key={product.id}
                          className={`transition-all w-100 duration-500 cursor-pointer ${
                            isActive
                              ? 'scale-110 z-20 opacity-100'
                              : Math.abs(offset) === 1
                              ? 'scale-90 z-10 opacity-60'
                              : 'scale-75 opacity-60'
                          } ${Math.abs(offset) > 2 ? 'hidden md:block' : ''}`}
                          onClick={() => setActiveIndex(idx)}
                          style={{
                            transform: `translateX(${offset * -30}px)`,
                          }}
                        >
                          <div className="relative overflow-hidden">
                            <div className="relative p-4">
                              <img
                                src={product.image}
                                alt={product.size}
                                className="w-62 md:w-60 h-auto mx-auto"
                              />
                            </div>
                            <div className="p-4 text-center">
                              <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-1">
                                {product.size}
                              </h3>
                              <p className="text-xs md:text-sm text-gray-600">
                                {product.tagline}
                                <br/>
                                <br/>
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Active Product Info */}
              <div className="text-center mb-6">
                <p className="text-2xl font-bold text-blue-900 mb-2">
                  {products[activeIndex].price}
                </p>
                <p className="text-sm text-gray-600">
                  {products[activeIndex].caseInfo}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                <button 
                  onClick={handleAddToCart}
                  className="px-8 py-3 bg-blue-900 text-white font-semibold rounded-full hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2 group transform hover:scale-105"
                >
                  <ShoppingCart className="w-5 h-5 group-hover:animate-bounce" />
                  Add to cart
                </button>
                <button 
                  onClick={handleViewProduct}
                  className="px-8 py-3 bg-white text-blue-900 font-semibold rounded-full border-2 border-blue-900 hover:bg-blue-50 transition-colors"
                >
                  View Cart
                </button>
              </div>

              {/* Thumbnail Navigation */}
              <div className="flex justify-center items-end gap-3 flex-wrap">
                {products.map((product, idx) => (
                  <button
                    key={product.id}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative transition-all ${
                      idx === activeIndex
                        ? 'scale-110 opacity-100'
                        : 'opacity-60 hover:opacity-80'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  >
                    <div className="p-2 flex flex-col items-center">
                      <img
                        src={product.thumb}
                        alt={product.size}
                        className="w-10 h-auto object-contain"
                      />
                      <p className="text-xs font-semibold text-blue-900 text-center mt-1 whitespace-nowrap">
                        {product.size}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;