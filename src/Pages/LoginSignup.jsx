import React, { useState } from "react";
import {
  X,
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  LogIn,
  UserPlus
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

const LoginSignup = () => {
  const { isAuthModalOpen, setIsAuthModalOpen } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  if (!isAuthModalOpen) return null;

 return (
  <>
    {/* Overlay */}
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
      onClick={() => setIsAuthModalOpen(false)}
    />

    {/* Modal */}
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 w-full max-w-md rounded-3xl shadow-2xl animate-scale-in text-gray-100">

        {/* Header */}
        <div className="relative p-6 border-b border-gray-800">
          <button
            onClick={() => setIsAuthModalOpen(false)}
            className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-800"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>

          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
              {isLogin ? (
                <LogIn className="w-8 h-8 text-white" />
              ) : (
                <UserPlus className="w-8 h-8 text-white" />
              )}
            </div>
          </div>

          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="text-center text-gray-400 mt-2">
            {isLogin ? "Sign in to continue" : "Sign up to get started"}
          </p>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">

          {!isLogin && (
            <div>
              <label className="text-sm font-semibold text-gray-300">
                Full Name
              </label>
              <div className="relative mt-2">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  className="w-full pl-11 py-3 bg-gray-800 border border-gray-700 rounded-xl outline-none text-gray-100
                  focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  placeholder="John Doe"
                />
              </div>
            </div>
          )}

          <div>
            <label className="text-sm font-semibold text-gray-300">
              Email
            </label>
            <div className="relative mt-2">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                className="w-full pl-11 py-3 bg-gray-800 border border-gray-700 rounded-xl outline-none text-gray-100
                focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                placeholder="you@example.com"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-300">
              Password
            </label>
            <div className="relative mt-2">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type={showPassword ? "text" : "password"}
                className="w-full pl-11 pr-12 py-3 bg-gray-800 border border-gray-700 rounded-xl outline-none text-gray-100
                focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-200"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>
          </div>

          {!isLogin && (
            <div>
              <label className="text-sm font-semibold text-gray-300">
                Confirm Password
              </label>
              <div className="relative mt-2">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input
                  className="w-full pl-11 py-3 bg-gray-800 border border-gray-700 rounded-xl outline-none text-gray-100
                  focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                  placeholder="••••••••"
                />
              </div>
            </div>
          )}

          <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:opacity-90 transition">
            {isLogin ? "Sign In" : "Create Account"}
          </button>

          <p className="text-center text-gray-400">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-cyan-400 font-bold hover:underline"
            >
              {isLogin ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>
      </div>
    </div>

    <style jsx>{`
      @keyframes scale-in {
        from { opacity: 0; transform: scale(0.9); }
        to { opacity: 1; transform: scale(1); }
      }
      .animate-scale-in {
        animation: scale-in 0.2s ease-out;
      }
    `}</style>
  </>
);
};
export default LoginSignup;