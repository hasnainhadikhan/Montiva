import React, { useState } from "react";
import {
  ShoppingCart,
  Menu,
  X,
  Search,
  User,
  Droplets,
  ChevronDown
} from "lucide-react";

import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const Navigation = ({
  scrolled,
  mobileMenuOpen,
  setMobileMenuOpen,
  currentPage,
  onPageChange
}) => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const { getCartCount, setIsCartOpen } = useCart();
  const { setIsAuthModalOpen } = useAuth();

  const navItems = [
    { name: "Home", page: "home" },
    {
      name: "Shop",
      page: "shop",
      dropdown: [
        { name: "All Products", page: "shop" },
        { name: "New Arrivals", page: "shop" },
        { name: "Bestsellers", page: "shop" },
        { name: "Sale", page: "shop" }
      ]
    },
    { name: "Subscribe", page: "subscribe" },
    { name: "About", page: "about" },
    { name: "Where to Buy", page: "wheretobuy" }
  ];

  const handleNavClick = (page) => {
    onPageChange(page);
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleCartClick = () => {
    setIsCartOpen(true);
  };

  const handleAuthClick = () => {
    setIsAuthModalOpen(true);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-lg"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            <Droplets className="w-8 h-8 text-cyan-500" />
            <h1 className="text-3xl font-bold">
              <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                MONTIVA
              </span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.dropdown && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleNavClick(item.page)}
                  className={`flex items-center space-x-1 px-4 py-2 rounded-lg font-medium transition ${
                    currentPage === item.page
                      ? "text-cyan-600 bg-cyan-50"
                      : "text-gray-700 hover:text-cyan-600 hover:bg-gray-50"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.dropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Dropdown */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-fade-in">
                    {item.dropdown.map((drop) => (
                      <button
                        key={drop.name}
                        onClick={() => handleNavClick(drop.page)}
                        className="block w-full text-left px-4 py-2.5 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600"
                      >
                        {drop.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-2">

            {/* User */}
            <button
              onClick={handleAuthClick}
              className="p-2.5 hover:bg-gray-100 rounded-full transition"
              title="Login / Signup"
            >
              <User className="w-5 h-5 text-gray-700 hover:text-cyan-600" />
            </button>

            {/* Cart */}
            <button
              onClick={handleCartClick}
              className="relative p-2.5 hover:bg-gray-100 rounded-full transition"
            >
              <ShoppingCart className="w-5 h-5 text-gray-700 hover:text-cyan-600" />
              {getCartCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold">
                  {getCartCount()}
                </span>
              )}
            </button>

            {/* Mobile Menu */}
            <button
              className="lg:hidden p-2.5 hover:bg-gray-100 rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t bg-white shadow-xl animate-slide-down">
          <nav className="px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.page)}
                className="w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                {item.name}
              </button>
            ))}

            <div className="pt-4 border-t space-y-3">
              <button
                onClick={handleAuthClick}
                className="flex items-center space-x-3 w-full px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <User className="w-5 h-5" />
                <span>Login / Signup</span>
              </button>

              <button
                onClick={handleCartClick}
                className="flex items-center space-x-3 w-full px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Cart ({getCartCount()})</span>
              </button>
            </div>
          </nav>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Navigation;
