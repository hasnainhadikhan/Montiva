import React, { useEffect, useState } from "react";

/* Components */
import LoadingScreen from "./components/LoadingScreen";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Product from "./components/Product.jsx";
import VideoSection from "./components/VideoSection";
import Team from "./components/TeamSection";
import Testimonials from "./components/Testimonials";
import Stats from "./components/Stats";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newletter";
import Footer from "./components/Footer";
import ContactModal from "./components/ContactModal";
import ScrollToTop from "./components/ScrollToTop";
import Toast from "./components/Toast";
import CartSidebar from "./components/CartSidebar";
import LoginSignup from "./Pages/LoginSignup";

/* Pages */
import ShopPage from "./Pages/ShopPage";
import SubscribePage from "./Pages/SubscribePage";
import About from "./Pages/About";
import WheretoBuy from "./Pages/WheretoBuy";

/* Context */
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

export default function App() {
  /* State */
  const [isLoading, setIsLoading] = useState(true);
  const [ setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isDark] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");

  /* Loading + Scroll Logic */
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);

    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setProgress((winScroll / height) * 100);
      setScrolled(window.scrollY > 50);
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* Toast */
  const showToast = (message) => {
    setToastMessage(message);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3000);
  };

  /* Handlers */
  const handleCTAClick = () => setModalOpen(true);

  // const handleThemeToggle = () => {
  //   setIsDark((prev) => !prev);
  //   showToast(`Switched to ${isDark ? "light" : "dark"} mode`);
  // };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* Render Dynamic Page Content */
  const renderPageContent = () => {
    switch (currentPage) {
      case "shop":
        return <ShopPage onCTAClick={handleCTAClick} showToast={showToast} />;
      case "subscribe":
        return <SubscribePage showToast={showToast} />;
      case "about":
        return <About />;
      case "wheretobuy":
        return <WheretoBuy showToast={showToast} />;
      case "home":
      default:
        return (
          <>
            <Hero onCTAClick={handleCTAClick} />
            <Features />
            <Product onServiceClick={handleCTAClick} />
            <Team />
            <VideoSection showToast={showToast} />
            <Testimonials />
            <Stats />
            <FAQ />
            <Newsletter showToast={showToast} />
          </>
        );
    }
  };

  return (
    <AuthProvider>
      <CartProvider>
        <div
          className={
            isDark ? "bg-black text-white min-h-screen" : "bg-gray-100 text-black min-h-screen"
          }
        >
          {/* Global Animations */}
          <style>{`
            @keyframes fadeInUp { from { opacity:0; transform: translateY(50px);} to { opacity:1; transform:translateY(0); } }
            @keyframes float { 0%,100%{transform:translateY(0) translateX(0);}33%{transform:translateY(-30px) translateX(30px);}66%{transform:translateY(20px) translateX(-20px);} }
            @keyframes slideUp { from{opacity:0; transform:translateY(40px);} to{opacity:1; transform:translateY(0);} }
            @keyframes fadeIn { from{opacity:0;} to{opacity:1;} }
            .animate-fadeInUp { animation: fadeInUp 1s ease; }
            .animate-float { animation: float 20s infinite ease-in-out; }
            .animate-slideUp { animation: slideUp 0.3s ease; }
            .animate-fadeIn { animation: fadeIn 0.5s ease; }
          `}</style>

          {/* UI */}
          <LoadingScreen isLoading={isLoading} />

          <Navigation
            scrolled={scrolled}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />

          <div className="animate-fadeIn">{renderPageContent()}</div>

          <Footer />
          <CartSidebar />
          <ScrollToTop isVisible={showScrollTop} />

          <ContactModal
            isOpen={modalOpen}
            onClose={() => setModalOpen(false)}
            showToast={showToast}
          />

          <LoginSignup /> {/* Open/close handled inside AuthContext */}

          <Toast message={toastMessage} isVisible={toastVisible} />
        </div>
      </CartProvider>
    </AuthProvider>
  );
}
