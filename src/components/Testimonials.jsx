import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

function TestimonialsSection() {
  const testimonials = [
    {
      text: "This bottle completely changed how I stay hydrated. Stylish, durable, and easy to carry everywhere.",
      name: "Sarah Johnson",
      role: "Fitness Enthusiast",
    },
    {
      text: "I love the sleek design and insulation. My water stays cold all day long.",
      name: "Michael Lee",
      role: "Product Designer",
    },
    {
      text: "Best bottle I've ever owned. Worth every penny and the subscription makes it effortless.",
      name: "Emily Carter",
      role: "Outdoor Adventurer",
    },
  ];

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeTestimonial]);

  const handleNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handlePrev = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const handleDotClick = (index) => {
    if (!isAnimating && index !== activeTestimonial) {
      setIsAnimating(true);
      setActiveTestimonial(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <section
      id="reviews"
      className="py-20 px-6 bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-100 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 bg-clip-text text-transparent animate-gradient">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 font-medium">Join thousands of happy Montiva users</p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-16 relative overflow-hidden border border-white/20">
            {/* Decorative gradient overlay */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"></div>
            
            {/* Large quote mark */}
            <div className="absolute top-8 left-8 text-blue-600/10 text-9xl leading-none font-serif">
              "
            </div>

            {/* Navigation arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-110 z-20"
              disabled={isAnimating}
            >
              <ChevronLeft className="w-6 h-6 text-blue-600" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-110 z-20"
              disabled={isAnimating}
            >
              <ChevronRight className="w-6 h-6 text-blue-600" />
            </button>

            {/* Testimonial content */}
            <div className="relative min-h-[200px]">
              {testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className={`transition-all duration-500 ease-in-out ${
                    activeTestimonial === i
                      ? "opacity-100 relative transform translate-x-0"
                      : "opacity-0 absolute inset-0 p-8 md:p-16 transform translate-x-4"
                  }`}
                >
                  {/* Star rating */}
                  <div className="flex gap-1 mb-6 justify-center">
                    {[...Array(5)].map((_, j) => (
                      <Star
                        key={j}
                        className="w-6 h-6 text-yellow-400 fill-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="text-2xl md:text-3xl text-gray-800 mb-8 leading-relaxed text-center font-medium italic">
                    "{testimonial.text}"
                  </p>

                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                      {testimonial.name[0]}
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900 text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-600">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  disabled={isAnimating}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    activeTestimonial === i
                      ? "bg-gradient-to-r from-blue-600 to-cyan-500 w-12 shadow-lg"
                      : "bg-gray-300 w-3 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Small Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { 
              stars: 5, 
              review: "Perfect for my morning runs! The grip is amazing and it never leaks.", 
              name: "Alex M.",
              color: "from-blue-500 to-cyan-500"
            },
            {
              stars: 5,
              review: "Sleek design, amazing quality. Best investment for my daily routine.",
              name: "Jordan K.",
              color: "from-purple-500 to-pink-500"
            },
            {
              stars: 5,
              review: "My favorite purchase this year. Keeps drinks cold for the entire day!",
              name: "Taylor R.",
              color: "from-orange-500 to-red-500"
            },
          ].map((review, i) => (
            <div
              key={i}
              className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20 group"
            >
              {/* Star rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.stars)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-5 h-5 text-yellow-400 fill-yellow-400 transform group-hover:scale-110 transition-transform duration-200"
                    style={{ transitionDelay: `${j * 50}ms` }}
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                "{review.review}"
              </p>
              
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                <div className={`w-10 h-10 bg-gradient-to-r ${review.color} rounded-full flex items-center justify-center text-white font-bold shadow-md`}>
                  {review.name[0]}
                </div>
                <p className="text-gray-900 font-semibold">
                  {review.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}

export default TestimonialsSection;