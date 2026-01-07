import React from "react";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin, Droplet, Heart } from "lucide-react";

const Footer = () => {
  const shopLinks = ["All Products", "Best Sellers", "New Arrivals", "Gift Cards"];
  const companyLinks = ["About Us", "Sustainability", "Careers", "Press Kit"];
  const supportLinks = ["Contact Us", "Shipping Info", "Returns", "FAQ", "Warranty"];

  return (
    <footer className = "  relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      
      {/* Decorative water droplets */}
      <div className="absolute top-10 right-20 text-blue-400/10">
        <Droplet className="w-32 h-32" />
      </div>
      <div className="absolute bottom-20 left-10 text-cyan-400/10">
        <Droplet className="w-24 h-24" />
      </div>

      <div className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              MONTIVA
            </h3>
            <p className="text-blue-100 leading-relaxed mb-6">
              Premium insulated water bottles designed for your active lifestyle. Stay hydrated, stay sustainable, stay Montiva.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 mb-6">
              {[
                { icon: <Facebook className="w-5 h-5" />, color: "from-blue-500 to-blue-600" },
                { icon: <Instagram className="w-5 h-5" />, color: "from-pink-500 to-purple-600" },
                { icon: <Twitter className="w-5 h-5" />, color: "from-cyan-500 to-blue-500" },
                { icon: <Linkedin className="w-5 h-5" />, color: "from-blue-600 to-cyan-600" }
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  className={`w-11 h-11 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center text-white transition-all hover:-translate-y-1 hover:shadow-xl transform hover:scale-110 duration-300`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

            {/* Newsletter mini */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20">
              <p className="text-white text-sm font-semibold mb-2">💧 Stay Updated</p>
              <p className="text-blue-200 text-xs">Subscribe for exclusive offers and hydration tips</p>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              Shop
            </h3>
            <ul className="space-y-3">
              {shopLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-blue-200 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-3 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              Company
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-blue-200 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-3 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              Support
            </h3>
            <ul className="space-y-3 mb-6">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={`#${link.toLowerCase().replace(" ", "-")}`}
                    className="text-blue-200 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-cyan-400 group-hover:w-3 transition-all duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href="mailto:hello@montiva.com" className="flex items-center gap-2 text-blue-200 hover:text-cyan-400 transition-colors text-sm">
                <Mail className="w-4 h-4" />
                hello@montiva.com
              </a>
              <a href="tel:+18001234567" className="flex items-center gap-2 text-blue-200 hover:text-cyan-400 transition-colors text-sm">
                <Phone className="w-4 h-4" />
                1-800-MONTIVA
              </a>
              <div className="flex items-start gap-2 text-blue-200 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Hydration Blvd<br />San Francisco, CA 94105</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: "🌱", label: "100% Eco-Friendly", desc: "Sustainable Materials" },
                { icon: "🛡️", label: "Lifetime Warranty", desc: "Quality Guaranteed" },
                { icon: "🚚", label: "Free Shipping", desc: "Orders Over $50" },
                { icon: "♻️", label: "Carbon Neutral", desc: "Certified Program" }
              ].map((badge, i) => (
                <div key={i} className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="text-3xl mb-2">{badge.icon}</div>
                  <div className="text-white font-semibold text-sm mb-1">{badge.label}</div>
                  <div className="text-blue-200 text-xs">{badge.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-blue-200 text-sm flex items-center gap-2">
              © 2026 Montiva. Made with <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" /> for hydration lovers
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-blue-200 hover:text-cyan-400 transition-colors">Privacy Policy</a>
              <a href="#" className="text-blue-200 hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="#" className="text-blue-200 hover:text-cyan-400 transition-colors">Cookies</a>
              <a href="#" className="text-blue-200 hover:text-cyan-400 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;