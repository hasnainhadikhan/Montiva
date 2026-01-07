// // pages/AboutPage.jsx
// const About = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-20">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h1 className="text-5xl font-bold text-center mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
//           About Montiva
//         </h1>
//         <div className="bg-white rounded-2xl shadow-lg p-12 space-y-6 text-gray-700 text-lg leading-relaxed">
//           <p>
//             Founded in 2020, Montiva was born from a simple idea: everyone deserves access to premium hydration solutions that enhance their daily lives.
//           </p>
//           <p>
//             Our mission is to revolutionize the way people think about hydration. We combine cutting-edge technology with sustainable practices to create products that are not only effective but also environmentally responsible.
//           </p>
//           <p>
//             With over 1 million satisfied customers worldwide, we're proud to be leading the hydration revolution. Every bottle is crafted with care, tested rigorously, and designed to make hydration effortless.
//           </p>
//           <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl mt-8">
//             <h2 className="text-2xl font-bold mb-4 text-cyan-600">Our Values</h2>
//             <ul className="space-y-2">
//               <li>🌊 <strong>Quality First:</strong> Premium materials and rigorous testing</li>
//               <li>🌱 <strong>Sustainability:</strong> Eco-friendly practices at every step</li>
//               <li>💙 <strong>Customer Focus:</strong> Your satisfaction is our priority</li>
//               <li>🚀 <strong>Innovation:</strong> Constantly pushing boundaries</li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default About;
import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Heart, Leaf, Zap, Shield } from 'lucide-react';

const About = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => [...new Set([...prev, index])]);
          }
        },
        { threshold: 0.2 }
      );
      
      if (ref) observer.observe(ref);
      return observer;
    });

    return () => observers.forEach(observer => observer.disconnect());
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-cyan-50 to-white">
      {/* Hero Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
            About Montiva
          </h1>
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Founded in 2020, Montiva was born from a simple idea: everyone deserves access to premium hydration solutions that enhance their daily lives.
            </p>
            <p>
              Our mission is to revolutionize the way people think about hydration. We combine cutting-edge technology with sustainable practices to create products that are not only effective but also environmentally responsible.
            </p>
            <p>
              With over 1 million satisfied customers worldwide, we're proud to be leading the hydration revolution. Every bottle is crafted with care, tested rigorously, and designed to make hydration effortless.
            </p>
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl mt-8">
              <h2 className="text-2xl font-bold mb-4 text-cyan-600">Our Values</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-2xl">🌊</span>
                  <span><strong>Quality First:</strong> Premium materials and rigorous testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl">🌱</span>
                  <span><strong>Sustainability:</strong> Eco-friendly practices at every step</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl">💙</span>
                  <span><strong>Customer Focus:</strong> Your satisfaction is our priority</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-2xl">🚀</span>
                  <span><strong>Innovation:</strong> Constantly pushing boundaries</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Our Story (Image Left, Text Right) */}
      <section 
        ref={el => sectionRefs.current[0] = el}
        className="py-20 px-4 bg-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            visibleSections.includes(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&h=600&fit=crop" 
                  alt="Montiva Story" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
                <Heart className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600 font-semibold text-sm">Our Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Where It All Began
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                In 2020, our founders noticed a gap in the market: people wanted high-quality, sustainable water bottles that didn't compromise on design or performance. What started as a small team of passionate designers and engineers has grown into a global movement.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Every Montiva bottle tells a story of innovation, craftsmanship, and commitment to excellence. From our first prototype to our latest designs, we've never stopped improving, listening to our customers, and pushing the boundaries of what's possible.
              </p>
              <div className="flex gap-4 pt-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                  <Users className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-gray-700">1M+ Users</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
                  <Award className="w-5 h-5 text-cyan-600" />
                  <span className="font-semibold text-gray-700">50+ Awards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Sustainability (Text Left, Image Right) */}
      <section 
        ref={el => sectionRefs.current[1] = el}
        className="py-20 px-4 bg-gradient-to-br from-green-50 to-emerald-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            visibleSections.includes(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Text */}
            <div className="space-y-6 order-2 md:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 rounded-full">
                <Leaf className="w-4 h-4 text-green-600" />
                <span className="text-green-600 font-semibold text-sm">Sustainability</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Our Planet, Our Priority
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Montiva, sustainability isn't just a buzzword—it's at the core of everything we do. We believe that premium products and environmental responsibility go hand in hand.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">100% Recyclable Materials</h3>
                    <p className="text-gray-600 text-sm">Every component is designed for circularity and minimal environmental impact.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Carbon Neutral Shipping</h3>
                    <p className="text-gray-600 text-sm">All deliveries offset through verified environmental programs.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative group order-1 md:order-2">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop" 
                  alt="Sustainability" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Innovation (Image Left, Text Right with Stats) */}
      <section 
        ref={el => sectionRefs.current[2] = el}
        className="py-20 px-4 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className={`grid md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            visibleSections.includes(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* Image with Overlay Stats */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1523362628745-0c100150b504?w=800&h=600&fit=crop" 
                  alt="Innovation" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                
                {/* Floating Stats Cards */}
                <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4">
                    <div className="text-3xl font-bold text-white">24hrs</div>
                    <div className="text-sm text-gray-300">Cold Retention</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl p-4">
                    <div className="text-3xl font-bold text-white">12hrs</div>
                    <div className="text-sm text-gray-300">Hot Retention</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-xl border border-blue-400/30 rounded-full">
                <Zap className="w-4 h-4 text-blue-400" />
                <span className="text-blue-300 font-semibold text-sm">Innovation</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">
                Engineering Excellence
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Our triple-layer vacuum insulation technology isn't just industry-leading—it's revolutionary. Years of research and development have resulted in bottles that outperform anything else on the market.
              </p>
              
              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { icon: <Shield className="w-6 h-6" />, label: 'BPA Free', color: 'from-blue-500 to-cyan-500' },
                  { icon: <Zap className="w-6 h-6" />, label: 'Leak Proof', color: 'from-cyan-500 to-teal-500' },
                  { icon: <Award className="w-6 h-6" />, label: 'Certified', color: 'from-teal-500 to-green-500' },
                  { icon: <Heart className="w-6 h-6" />, label: 'Premium', color: 'from-purple-500 to-pink-500' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300">
                    <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center`}>
                      {item.icon}
                    </div>
                    <span className="font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>

              <button         className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-8  transition-all duration-300 shadow-md hover:shadow-lg"
>
                Explore Technology
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold">Join the Montiva Family</h2>
          <p className="text-xl text-blue-100">
            Experience the difference that premium hydration makes in your daily life.
          </p>
          <button         className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-8  transition-all duration-300 shadow-md hover:shadow-lg"
>
            Shop Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;