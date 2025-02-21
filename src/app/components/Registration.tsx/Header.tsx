"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleString());
    };

    updateTime(); // Initial call
    const interval = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-transparent backdrop-blur-md">
      {/* Left Section - CAMPUS CODE Logo */}
      <div className="flex flex-col text-1xl font-bold select-none space-y-2">
        {/* CAMPUS */}
        <div className="flex space-x-2">
          <span className="text-[#223b40] hover:animate-pulse">C</span>
          <span className="text-[#1d786d] hover:animate-bounce">🏛️</span>
          <span className="text-[#223b40] hover:animate-spin">M</span>
          <span className="text-[#e2a23b] hover:animate-pulse">P</span>
          <span className="text-[#1d786d] hover:animate-bounce">U</span>
          <span className="text-[#e2a23b] hover:animate-pulse">S</span>
        </div>

        {/* CODE (Below CAMPUS) */}
        <div className="flex space-x-2 px-4">
          <span className="text-[#e2a23b] hover:animate-pulse">C</span>
          <span className="text-[#1d786d] hover:animate-spin">O</span>
          <span className="text-[#223b40] hover:animate-bounce">D</span>
          <span className="text-[#e2a23b] hover:animate-pulse">E</span>
        </div>
      </div>

      {/* Right Section - Time & Buttons */}
      <div className="flex items-center gap-8">
        {/* Current Date & Time */}
        <div className="text-gray-700 font-medium">{currentTime}</div>

        {/* Explore Event Button */}
        <Link href="#">
          <span className="text-blue-600 font-semibold flex items-center hover:text-blue-800 transition">
            Explore Event <span className="ml-1 ">↗</span>
          </span>
        </Link>

        {/* Sign In Button */}
        <Link href="#">
          <button className="px-4 py-2 border border-black text-black rounded-md hover:bg-black hover:text-white transition">
            Sign In
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
