
import Link from "next/link";
import { Mail,DraftingCompass , X} from "lucide-react";
import { Instagram } from 'lucide-react';
import { Youtube } from 'lucide-react';


const Footer = () => {
  return (
    <footer className="flex justify-between items-center px-6 py-4 bg-transparent backdrop-blur-md border-t border-gray-300">
      {/* Left Section - Navigation Links */}
      <div className="flex items-center gap-4 text-gray-500 text-sm">
        <span className="text-purple-500">✦</span>
        <Link href="#" className="hover:text-gray-700 transition">
          What's New
        </Link>
        <Link href="#" className="hover:text-gray-700 transition">
          Discover
        </Link>
        <Link href="#" className="hover:text-gray-700 transition">
          Pricing
        </Link>
        <Link href="#" className="hover:text-gray-700 transition">
          Help
        </Link>
      </div>

      {/* Center Section - Branding */}
      <div className="text-sm text-gray-500">
        <span className="text-blue-500 hover:underline cursor-pointer">Host</span> your event with{" "}
        <span className="text-orange-500 font-medium">Campus code↗</span>
      </div>

      {/* Right Section - Social Icons */}
      <div className="flex items-center gap-4 text-gray-500">
        <Link href="campuscodein@gmail.com"><Mail className="w-5 h-5 hover:text-gray-700 cursor-pointer" /></Link>
        <Link href=""><DraftingCompass  className="w-5 h-5 hover:text-gray-700 cursor-pointer"  /></Link>
        <Link href=""> <X className="w-5 h-5 hover:text-gray-700 cursor-pointer" /></Link>
        <Link href=""> <Instagram className="w-5 h-5 hover:text-gray-700 cursor-pointer" /></Link>
        <Link href="https://www.youtube.com/@campuscodein"> <Youtube className="w-5 h-5 hover:text-gray-700 cursor-pointer" /></Link>
       
       
        
      </div>
    </footer>
  );
};

export default Footer;
