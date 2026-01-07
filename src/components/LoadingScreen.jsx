import React, { useState, useEffect, useRef } from 'react';
// Loading Screen Component
const LoadingScreen = ({ isLoading }) => {
  if (!isLoading) return null;
  
  return (
    <div className="fixed inset-0 bg-black flex flex-col justify-center items-center z-[10001] transition-opacity duration-500">
      <div className="w-15 h-15 border-4 border-purple-300 border-t-purple-500 rounded-full animate-spin" />
      <div className="mt-5 text-lg text-purple-500">Loading NextGen...</div>
    </div>
  );
};
export default LoadingScreen;