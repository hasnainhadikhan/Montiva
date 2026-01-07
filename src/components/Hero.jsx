       
import React, { useState, useEffect } from 'react';
import { ChevronRight, Droplet, Shield, Sparkles, Play } from 'lucide-react';

const MontivaHeroSection = () => {
  const [ setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-cyan-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-delayed"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15 animate-float-slow"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh] mt-[-144px]">
          
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in-up mt-14">
            {/* Main Heading */}
            <h1 className="text-6xl  md:text-7xl lg:text-7xl font-serif font-bold leading-tight mt-10">
              <span className="block text-white">Stay</span>
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent animate-gradient">
                Hydrated
              </span>
              <span className="block text-white">In Style</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-lg text-gray-300 leading-relaxed max-w-lg">
              Premium insulated water bottles that keep your drinks <span className="text-blue-400 font-semibold">ice cold for 24 hours</span> or <span className="text-orange-400 font-semibold">hot for 12 hours</span>. Engineered for perfection, designed for life.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <Droplet className="w-4 h-4" />, text: '24hr Cold' },
                { icon: <Shield className="w-4 h-4" />, text: 'BPA Free' },
                { icon: <Sparkles className="w-4 h-4" />, text: 'Lifetime Warranty' }
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300">
                  <span className="text-cyan-400">{feature.icon}</span>
                  <span className="text-white text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button         className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-8  transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Shop Collection
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

          
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-8 pt-8 border-t border-white/10">
           
            </div>
          </div>

          {/* Right Column - Abstract Visual */}
          <div className="relative animate-fade-in-right">
            {/* Large Glowing Circle */}
            <div className="relative w-full max-w-lg mx-auto aspect-square">
              {/* Main Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-cyan-400 to-teal-500 rounded-full blur-3xl opacity-40 animate-pulse-slow"></div>
              
              {/* Rotating Rings */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute inset-8 border-2 border-blue-400/30 rounded-full"></div>
                <div className="absolute inset-16 border-2 border-cyan-400/20 rounded-full"></div>
              </div>
              
              {/* Counter Rotating Ring */}
              <div className="absolute inset-0 animate-spin-reverse">
                <div className="absolute inset-24 border-2 border-teal-400/20 rounded-full"></div>
              </div>

              {/* Center Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-32 h-32 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center shadow-2xl">
                  <Droplet className="w-16 h-16 text-white animate-float-gentle" />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full blur-xl opacity-50"></div>
                </div>
              </div>

              {/* Orbiting Elements */}
              <div className="absolute inset-0 animate-orbit">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-lg"></div>
              </div>
              <div className="absolute inset-0 animate-orbit-delayed">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-400 rounded-full shadow-lg"></div>
              </div>
              <div className="absolute inset-0 animate-orbit-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-5 bg-teal-500 rounded-full shadow-lg"></div>
              </div>
            </div>

            {/* Floating Feature Cards */}
            <div className="absolute top-10 -left-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl animate-float-card">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Droplet className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold">24 Hours</div>
                  <div className="text-gray-400 text-sm">Ice Cold</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 -right-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl animate-float-card-delayed">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold">Lifetime</div>
                  <div className="text-gray-400 text-sm">Warranty</div>
                </div>
              </div>
            </div>

            <div className="absolute top-1/2 -right-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl animate-float-card">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-bold">Premium</div>
                  <div className="text-gray-400 text-sm">Quality</div>
                </div>
              </div>
            </div>

            {/* Stats Display */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-3 shadow-2xl">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">500K</div>
                  <div className="text-xs text-gray-400">Bottles Sold</div>
                </div>
                <div className="w-px h-8 bg-white/20"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">60+</div>
                  <div className="text-xs text-gray-400">Countries</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes orbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes orbit-delayed {
          from { transform: rotate(120deg); }
          to { transform: rotate(480deg); }
        }

        @keyframes orbit-slow {
          from { transform: rotate(240deg); }
          to { transform: rotate(600deg); }
        }

        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 15s linear infinite;
        }

        .animate-orbit {
          animation: orbit 8s linear infinite;
        }

        .animate-orbit-delayed {
          animation: orbit-delayed 10s linear infinite;
        }

        .animate-orbit-slow {
          animation: orbit-slow 12s linear infinite;
        }

        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-right {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(-40px, 30px) scale(1.15); }
          66% { transform: translate(30px, -25px) scale(0.85); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(25px, 25px) scale(1.05); }
        }

        @keyframes float-particle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes float-card {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @keyframes float-card-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.5; }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(12px); opacity: 0; }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out;
        }

        .animate-fade-in-right {
          animation: fade-in-right 1s ease-out 0.3s both;
        }

        .animate-float {
          animation: float 15s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 18s ease-in-out infinite;
          animation-delay: 2s;
        }

        .animate-float-slow {
          animation: float-slow 20s ease-in-out infinite;
          animation-delay: 4s;
        }

        .animate-float-card {
          animation: float-card 4s ease-in-out infinite;
        }

        .animate-float-card-delayed {
          animation: float-card-delayed 5s ease-in-out infinite;
          animation-delay: 1s;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default MontivaHeroSection;