// Scroll to Top Button
const ScrollToTop = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-800 rounded-full flex items-center justify-center cursor-pointer shadow-lg shadow-purple-500/40 text-2xl hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/60 transition-all z-[999]"
    >
      ↑
    </div>
  );
};
export default ScrollToTop;