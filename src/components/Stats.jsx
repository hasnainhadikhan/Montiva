import React, { useState, useEffect, useRef } from 'react';
import { Users, Award, TrendingUp, ShoppingBag } from 'lucide-react';

const MontivaStats = () => {
  const [counts, setCounts] = useState({ customers: 0, rating: 0, bottles: 0, awards: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const statsRef = useRef(null);
  const timersRef = useRef([]);

  const stats = [
    { 
      label: 'Happy Customers', 
      target: 100000, 
      key: 'customers',
      suffix: '+',
      icon: <Users className="w-12 h-12" />,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      label: 'Customer Rating', 
      target: 4.9, 
      key: 'rating',
      suffix: '/5',
      decimals: 1,
      icon: <Award className="w-12 h-12" />,
      color: 'from-cyan-500 to-teal-500'
    },
    { 
      label: 'Bottles Sold', 
      target: 500000, 
      key: 'bottles',
      suffix: '+',
      icon: <ShoppingBag className="w-12 h-12" />,
      color: 'from-teal-500 to-green-500'
    },
    { 
      label: 'Design Awards', 
      target: 50, 
      key: 'awards',
      suffix: '+',
      icon: <TrendingUp className="w-12 h-12" />,
      color: 'from-green-500 to-emerald-500'
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Section is visible - start animation
          setIsVisible(true);
          
          // Clear any existing timers
          timersRef.current.forEach(timer => clearInterval(timer));
          timersRef.current = [];
          
          // Reset counts to 0
          setCounts({ customers: 0, rating: 0, bottles: 0, awards: 0 });
          
          // Start counting animation
          stats.forEach(stat => {
            let current = 0;
            const duration = 2000; // 2 seconds
            const steps = 60;
            const increment = stat.target / steps;
            const stepDuration = duration / steps;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.target) {
                setCounts(prev => ({ 
                  ...prev, 
                  [stat.key]: stat.decimals ? stat.target.toFixed(stat.decimals) : stat.target 
                }));
                clearInterval(timer);
              } else {
                setCounts(prev => ({ 
                  ...prev, 
                  [stat.key]: stat.decimals ? current.toFixed(stat.decimals) : Math.floor(current) 
                }));
              }
            }, stepDuration);
            
            timersRef.current.push(timer);
          });
        } else {
          // Section is not visible - reset
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    
    return () => {
      // Cleanup timers on unmount
      timersRef.current.forEach(timer => clearInterval(timer));
      observer.disconnect();
    };
  }, []);

  const formatNumber = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1) + 'M';
    if (num >= 1000) return (num / 1000).toFixed(0) + 'K';
    return num;
  };

  return (
    <section 
      ref={statsRef} 
      className="bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 py-20 px-6 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse animation-delay-2000"></div>
      
      {/* Decorative lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-blue-200">
            Numbers that speak for our quality and commitment
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.key} 
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} mb-6 shadow-lg transform group-hover:rotate-12 transition-transform duration-500`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>

                {/* Number with Counter Animation */}
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 tabular-nums tracking-tight`}>
                  <span className="inline-block min-w-[120px]">
                    {stat.key === 'customers' || stat.key === 'bottles' 
                      ? formatNumber(counts[stat.key]) 
                      : counts[stat.key]}
                    {stat.suffix}
                  </span>
                </div>

                {/* Label */}
                <div className="text-blue-100 font-medium text-sm md:text-base">
                  {stat.label}
                </div>

                {/* Glow effect on hover */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 -z-10`}></div>
              </div>
            </div>
          ))}
        </div>

      
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default MontivaStats;