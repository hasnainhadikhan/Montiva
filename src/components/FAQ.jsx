import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

// FAQ Item Component
const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4 group">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg"
      >
        <span className="text-left text-lg font-semibold text-gray-900 pr-8">
          {question}
        </span>
        <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center transition-transform duration-300 shadow-md ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? (
            <Minus className="w-5 h-5 text-white" />
          ) : (
            <Plus className="w-5 h-5 text-white" />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border-2 border-blue-100">
          <p className="text-gray-700 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
};

// Main FAQ Component
const MontivaFAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { 
      question: "What makes Montiva bottles different?", 
      answer: "Montiva bottles feature triple-layer vacuum insulation technology that keeps drinks cold for 24 hours and hot for 12 hours. Made from premium 18/8 stainless steel, they're 100% BPA-free, leak-proof, and designed with a sleek modern aesthetic. Plus, our bottles are eco-friendly and come with a lifetime warranty." 
    },
    { 
      question: "How do I clean my Montiva bottle?", 
      answer: "For daily cleaning, simply hand wash with warm soapy water and let air dry. For deep cleaning, use a bottle brush and a mixture of baking soda and water. Avoid using bleach or chlorine-based cleaners. The bottle is dishwasher safe on the top rack, but hand washing is recommended to maintain the exterior finish." 
    },
    { 
      question: "What is your return and warranty policy?", 
      answer: "We offer a 30-day money-back guarantee if you're not completely satisfied. All Montiva bottles come with a lifetime warranty against manufacturing defects. If you experience any issues with your bottle, contact our customer service team and we'll replace it free of charge." 
    },
    { 
      question: "Are Montiva bottles safe for hot beverages?", 
      answer: "Yes! Our bottles are specifically designed for both hot and cold beverages. The double-wall vacuum insulation keeps the exterior cool to touch even when filled with boiling liquids. However, always use caution when opening bottles with hot contents to avoid steam burns." 
    },
    { 
      question: "Do you offer custom engraving or bulk orders?", 
      answer: "Absolutely! We offer custom laser engraving for personalized bottles and special corporate bulk orders for businesses, events, and organizations. Contact our team for pricing and minimum order quantities. Custom orders typically ship within 2-3 weeks." 
    },
    { 
      question: "What sizes are available?", 
      answer: "Montiva bottles come in multiple sizes to fit your lifestyle: 16oz Mini (perfect for kids and short trips), 24oz Classic (ideal for daily use), 32oz Sport (great for workouts), and 40oz Elite (for all-day hydration). All sizes feature the same premium insulation technology." 
    },
  ];

  return (
    <section id="faq" className="py-20 px-6 bg-gradient-to-br from-blue-50 via-cyan-50 to-slate-100 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 text-blue-200/30">
        <HelpCircle className="w-64 h-64" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
         
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
       
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              {...faq}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default MontivaFAQ;
