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
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
      {/* Left Section - Lu.ma Logo */}
      <div className="text-xl font-bold">Lu.ma</div>

      {/* Center - Current Date & Time */}
      <div className="text-gray-700 font-medium">{currentTime}</div>

      {/* Right Section - Buttons */}
      <div className="flex gap-6">
        {/* Explore Event Button */}
        <Link href="#">
          <span className="text-blue-600 font-semibold flex items-center hover:text-blue-800 transition">
            Explore Event <span className="ml-1 rotate-45">↗</span>
          </span>
        </Link>

        {/* Sign In Button */}
        
      </div>
    </header>
  );
};

export default Header;
