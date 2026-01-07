import React, { useEffect, useRef, useState } from 'react';

const AboutUsSection = () => {
  const canvasRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
        this.opacity = Math.random() * 0.3 + 0.1;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }
      draw() {
        ctx.fillStyle = `rgba(59, 130, 246, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < 60; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const imageSrc =
    "https://cdn.builder.io/api/v1/image/assets%2F5c6ffc8bf83440feb9aec3e4598c016e%2F16a52be1cf6d447aa4b43523ed096e4d";

  // Spacers config
  const spacers = Array.from({ length: 15 });


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

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.speedY = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.4 + 0.2;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }
      draw() {
        ctx.fillStyle = `rgba(96, 165, 250, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < 80; i++) particles.push(new Particle());

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[j].x - particle.x;
          const dy = particles[j].y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.strokeStyle = `rgba(96, 165, 250, ${0.15 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);
  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 md:py-20 lg:py-24 overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-blue-100"
      data-testid="about-us-section"
    >
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Spacer Background */}
      {spacers.map((_, index) => (
        <span
          key={index}
          className="absolute block w-[2px] h-[100%] bg-white/50 animate-slideY"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            '--mobile-padding': '0rem',
            '--tablet-padding': '0rem',
            '--desktop-padding': '1.5rem',
          }}
        />
      ))}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-4">
              <span
                className="inline-block text-sm md:text-base font-semibold text-blue-600 uppercase tracking-widest"
                data-testid="textblock__heading--preheader"
              >
                About Us
              </span>
            </div>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
              data-testid="textblock__heading"
            >
              <span data-testid="textblock__heading--headline">
                Earth's Finest Water
              </span>
            </h2>

            <div
              data-testid="textblock__body"
              className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto"
            >
              <p>
                Discover the journey from pristine clouds above Fiji to the ancient artesian aquifer deep beneath the surface. It's not just water, it's FIJI Water.
              </p>
            </div>

            <div
              className={`transition-all duration-1000 delay-300`}
              data-testid="button-list"
            >
              <a
                data-testid="button-list__element"
                className="inline-block px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-700 hover:from-blue-800 hover:to-blue-600 text-white font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
                href="/about-us"
              >
                <span>Discover Our Story</span>
              </a>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="flex justify-center items-center min-h-screen mt-20">
          {[1].map((_, index) => (
            <div
              key={index}
              className="relative w-[1900px] h-[800px] overflow-hidden shadow-lg"
            >
              <img
                className="w-full h-full object-cover"
                src={imageSrc}
                alt=""
                loading="lazy"
                data-testid="embed-youtube-player__youtube-image"
              />

              <button
                className="absolute inset-0 flex items-center justify-center p-0"
                id="m9fgdMUTWz0--watch-button-mobile"
                data-testid="embed-youtube-player__play-button--mobile"
              >
                <span className="bg-black/70 text-white px-6 py-3 rounded-md text-lg font-semibold transition transform duration-300 ease-in-out hover:scale-105 hover:bg-black/80">
                  Watch video
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind animation for spacers */}
      <style>
        {`
          @keyframes slideY {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
          }
          .animate-slideY {
            animation: slideY 10s linear infinite;
          }
        `}
      </style>
      <br/><br/>
  
 <section 
      ref={sectionRef}
      className="relative py-20 px-6  overflow-hidden"
      data-testid="textblock"
    >
      {/* Animated Particle Canvas */}

      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div 
          className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          
          {/* Left Column: Heading */}
          <div className="text-left">
            <h2 
              className="text-5xl md:text-6xl ml-20  text-blue-400"
              data-testid="textblock__heading"
            >
              <span   className="text-4xl md:text-5xl lg:text-6xl font-serif   font-bold mb-4 text-gray-900 leading-tight">

                More <br/> than Water
              </span>
            </h2>
          </div>

          {/* Right Column: Paragraph + Button */}
          <div className="text-left ml-[-100px]">
            <div 
              data-testid="textblock__body" 
              className="mb-6"
            >
              <p className="text-sm md:text-lg text-gray-700 leading-relaxed">
From a sustainable manufacturing facility to more than 60 countries across the globe, Montiva has been bringing premium insulated water bottles to the world since 2020. Along the way, our philanthropic efforts have focused on reducing plastic waste, supporting clean water initiatives, and protecting the unique planet we all call home.              </p>
            </div>
            <div data-testid="button-list">
              <a 
                data-testid="button-list__element" 
        className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-4 px-8  transition-all duration-300 shadow-md hover:shadow-lg"
                href="/sustainability"
              >
                <span>Understand Our Impact</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-40px, 30px) scale(1.15);
          }
          66% {
            transform: translate(30px, -25px) scale(0.85);
          }
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(25px, 25px) scale(1.05);
          }
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
      `}</style>
    </section>
    </section>
  );
};

export default AboutUsSection;
