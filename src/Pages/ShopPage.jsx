import React, { useState } from 'react';
import { ChevronDown, ShoppingCart, Eye } from 'lucide-react';
import { useCart } from '../context/CartContext';
import Newsletter from '../components/Newletter';

// Import your product images
import image330ml from '../Images/image330mll.jpg';
import image500ml from '../Images/imageone.png';
import image700ml from '../Images/imageone.png';
import image700mlSports from '../Images/imagefive.jpg';
import image1L from '../Images/image1l.jpg';
import image1_5L from '../Images/Image1.2l.jpg';

const products = [
  {
    id: 1,
    size: '330mL',
    tagline: 'Events, Offices, & Kid-Friendly',
    price: '$34.00',
    caseInfo: '(Case of 24)',
    image: image330ml,
    href: '/products/fiji-water-330ml-case-of-24',
    badge: null
  },
  {
    id: 2,
    size: '500mL',
    tagline: 'Everyday Hydration',
    price: '$40.00',
    caseInfo: '(Case of 24)',
    image: image500ml,
    href: '/products/fiji-water-500-ml-case-of-24',
    badge: {
      text: 'BEST SELLER',
      color: 'from-yellow-400 to-orange-500'
    }
  },
  {
    id: 3,
    size: '700mL',
    tagline: 'On-the-Go Hydration',
    price: '$34.00',
    caseInfo: '(Case of 12)',
    image: image700ml,
    href: '/products/fiji-water-700-ml-case-of-12',
    badge: null
  },
  {
    id: 4,
    size: '700mL',
    tagline: 'Active Lifestyle',
    price: '$36.00',
    caseInfo: '(Case of 12)',
    image: image700mlSports,
    href: '/products/fiji-water-700-ml-case-of-12-sports-cap',
    badge: {
      text: 'SPORTS CAP',
      color: 'from-blue-400 to-cyan-500'
    }
  },
  {
    id: 5,
    size: '1.0L',
    tagline: 'Traveling & General Hydration',
    price: '$40.00',
    caseInfo: '(Case of 12)',
    image: image1L,
    href: '/products/fiji-water-1l-case-of-12',
    badge: null
  },
  {
    id: 6,
    size: '1.5L',
    tagline: 'Ongoing Hydration',
    price: '$50.00',
    caseInfo: '(Case of 12)',
    image: image1_5L,
    href: '/products/fiji-water-1-5l-case-of-12',
    badge: null
  }
];

const ShopCollection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const { addToCart, setIsCartOpen, getCartCount } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    // Optional: Show a toast notification
    console.log('Added to cart:', product);
  };

  const scrollToBottom = () => {
    const scrollBottom = document.querySelector('[data-scroll-bottom]');
    if (scrollBottom) {
      scrollBottom.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Fixed Floating Cart Button */}
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

      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16 px-4">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <div className="inline-block mb-4">
            <button
              onClick={scrollToBottom}
              className="group flex flex-col items-center justify-center"
              aria-label="scroll to bottom of product list"
            >
              <div className="relative">
                <ChevronDown className="w-10 h-10 text-blue-600 animate-bounce transition-transform group-hover:scale-110" />
              </div>
            </button>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
            Shop Our Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover Earth's Finest Water in every size
          </p>
        </div>

        {/* Product Grid */}
        <div className="max-w-7xl mx-auto">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center">
            {products.map((product) => (
              <li
                key={product.id}
                className="w-full max-w-sm group"
                onMouseEnter={() => setHoveredCard(product.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="relative bg-white rounded-3xl overflow-visible transition-all duration-500 hover:shadow-2xl border-2 border-blue-100 hover:border-blue-300">
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute -top-4 -right-4 z-20">
                      <div className={`bg-gradient-to-r ${product.badge.color} text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-300`}>
                        {product.badge.text}
                      </div>
                    </div>
                  )}

                  {/* Product Image Container - Transparent Background */}
                  <div className="relative p-8 bg-transparent">
                    <a
                      href={product.href}
                      className="block relative"
                    >
                      <div className="relative transition-transform duration-500 group-hover:scale-105">
                        <img
                          src={product.image}
                          alt={`Water ${product.size}`}
                          className="w-full h-auto max-h-[400px] object-contain mx-auto drop-shadow-2xl"
                        />
                        
                        {/* Animated Ripple Effect on Hover */}
                        {hoveredCard === product.id && (
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-32 h-32 bg-blue-400 rounded-full opacity-20 animate-ping"></div>
                          </div>
                        )}
                      </div>
                    </a>
                  </div>

                  {/* Floating Action Buttons */}
                  <div className={`absolute top-1/2 right-4 transform -translate-y-1/2 flex flex-col gap-2 transition-all duration-300 ${hoveredCard === product.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                    <button
                      className="p-3 bg-white rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition-all duration-300 border-2 border-blue-200"
                      aria-label="Quick view"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110"
                      aria-label="Add to cart"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 pt-2 bg-gradient-to-b from-transparent to-blue-50/50">
                    {/* Size */}
                    <h3 className="text-3xl font-extrabold text-gray-800 mb-1 group-hover:text-blue-600 transition-colors">
                      <a href={product.href}>
                        {product.size}
                      </a>
                    </h3>
                    
                    {/* Tagline */}
                    <p className="text-sm text-gray-500 mb-3 italic">
                      {product.tagline}
                    </p>

                    {/* Divider */}
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full mb-4 group-hover:w-full transition-all duration-500"></div>
                    
                    {/* Price */}
                    <div className="flex items-baseline justify-between mb-4">
                      <span className="text-3xl font-bold text-gray-900">{product.price}</span>
                      <span className="text-sm text-gray-500">{product.caseInfo}</span>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-xl hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group/btn"
                    >
                      <ShoppingCart className="w-5 h-5 group-hover/btn:animate-bounce" />
                      <span>Add to Cart</span>
                    </button>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="h-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 group-hover:from-blue-600 group-hover:via-cyan-500 group-hover:to-blue-600 transition-all duration-500"></div>
                </div>
              </li>
            ))}
          </ul>
        </div>

     
      
      </section>
      
      <Newsletter />
    </>
  );
};

export default ShopCollection;