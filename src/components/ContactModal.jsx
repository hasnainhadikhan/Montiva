// Contact Modal Component
import React, { useState } from 'react';
const ContactModal = ({ isOpen, onClose, showToast }) => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast("Thank you for your message! We'll get back to you soon.");
    onClose();
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-[10000] flex justify-center items-center animate-fadeIn" onClick={onClose}>
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-10 rounded-3xl max-w-lg w-[90%] relative animate-slideUp" onClick={(e) => e.stopPropagation()}>
        <span 
          className="absolute top-5 right-5 text-3xl cursor-pointer text-white transition-transform hover:rotate-90"
          onClick={onClose}
        >
          ×
        </span>
        <h3 className="text-3xl mb-5 bg-gradient-to-r from-purple-500 to-purple-700 bg-clip-text text-transparent">
          Get In Touch
        </h3>
        <p className="text-white/80 mb-5">Let's discuss how we can help transform your business</p>
        <form onSubmit={handleSubmit} className="grid gap-5">
          <div className="flex flex-col gap-2">
            <label className="text-white/90 text-sm">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="p-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm outline-none transition-all focus:border-purple-500 focus:bg-white/15"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white/90 text-sm">Email</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="p-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm outline-none transition-all focus:border-purple-500 focus:bg-white/15"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white/90 text-sm">Phone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({...formData, phone: e.target.value})}
              className="p-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm outline-none transition-all focus:border-purple-500 focus:bg-white/15"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-white/90 text-sm">Message</label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="p-3 bg-white/10 border border-white/20 rounded-xl text-white text-sm outline-none resize-y min-h-[120px] transition-all focus:border-purple-500 focus:bg-white/15"
              required
            />
          </div>
          <button
            type="submit"
            className="p-4 bg-gradient-to-br from-purple-500 to-purple-800 text-white border-none rounded-xl text-base font-semibold cursor-pointer transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/50"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};
export default ContactModal;