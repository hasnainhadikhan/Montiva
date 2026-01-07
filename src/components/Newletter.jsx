// Newsletter Component (Montiva Style)
import React, { useState } from "react";

const Newsletter = ({ showToast }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast(`Thanks for joining Montiva! Updates will be sent to ${email}`);
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-cyan-500 via-blue-300 to-blue-600 py-24 px-6 text-center">
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

      <div className="relative max-w-2xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight">
          Stay Hydrated. Stay Inspired.
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-black mb-10 leading-relaxed">
          Join the Montiva community for wellness tips, exclusive offers, and
          early access to new products.
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
            className="flex-1 px-6 py-4 text-base outline-none bg-white text-gray-900 placeholder-gray-400 focus:ring-4 focus:ring-cyan-300 transition"
          />

          <button
            type="submit"
                    className="bg-pink-500 hover:bg-pink-600 text-black font-semibold py-4 px-8  transition-all duration-300 shadow-md hover:shadow-lg"

          >
            Subscribe
          </button>
        </form>

        {/* Trust note */}
        <p className="text-sm text-black mt-6">
          💧 No spam. Just clean hydration inspiration.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
