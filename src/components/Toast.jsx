// Toast Notification
const Toast = ({ message, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-br from-purple-500 to-purple-800 px-10 py-5 rounded-full text-white font-semibold shadow-lg shadow-purple-500/50 z-[9999] animate-slideUp">
      {message}
    </div>
  );
};

export default Toast;