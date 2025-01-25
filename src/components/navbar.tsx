import React from "react";
import { Search, Mail, Menu } from "lucide-react";
import logo from "../images/logo.png";
import Image from "next/image";
import { NavbarProps } from "@/types";

const Navbar: React.FC<NavbarProps> = ({
  onMenuClick,
  onSearchClick,
  onMailClick,
}) => {
  return (
    <nav className="px-10 py-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image src={logo} alt="Jamb" />
        </div>

        {/* Right Navigation Icons */}
        <div className="flex items-center gap-2 md:gap-1 ">
          <button
            onClick={onSearchClick}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Search"
          >
            <Search className="w-8 h-8 text-[#9C9C9D]" />
          </button>

          <button
            onClick={onMailClick}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors "
            aria-label="Mail"
          >
            <Mail className="w-8 h-8 text-[#9C9C9D]" />
          </button>

          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
            aria-label="Menu"
          >
            <Menu className="w-8 h-8 text-[#9C9C9D]" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
