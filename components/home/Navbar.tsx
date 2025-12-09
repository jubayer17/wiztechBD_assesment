"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-10 py-4 bg-white border-b relative">
            {/* Left - Logo */}
            <Link href="/" className="flex items-center gap-2 z-50">
                <Image
                    src="/Navbar-cmp-logo.png"
                    width={140}
                    height={140}
                    alt="WiztecBD"
                    className="w-[140px] h-auto sm:w-[160px] lg:w-[200px] object-contain"
                />
            </Link>

            {/* Hamburger Menu Button */}
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden z-50 p-2 text-gray-700 hover:text-[#8B1538]"
            >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Center - Navigation Links */}
            <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row items-center gap-4 lg:gap-8 absolute lg:relative top-full lg:top-0 left-0 right-0 lg:left-auto lg:right-auto w-full lg:w-auto bg-white lg:bg-transparent px-8 py-6 lg:p-0 shadow-xl lg:shadow-none z-40 border-t lg:border-t-0 rounded-b-2xl lg:rounded-none`}>
                <Link href="/buy" className="text-gray-700 hover:text-[#8B1538] font-medium text-base transition-all duration-300 hover:scale-105 relative w-full lg:w-auto text-center py-3 lg:py-0 hover:bg-gray-50 lg:hover:bg-transparent rounded-lg lg:rounded-none after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8B1538] after:transition-all after:duration-300 lg:hover:after:w-full">
                    Buy
                </Link>
                <Link href="/rent" className="text-gray-700 hover:text-[#8B1538] font-medium text-base transition-all duration-300 hover:scale-105 relative w-full lg:w-auto text-center py-3 lg:py-0 hover:bg-gray-50 lg:hover:bg-transparent rounded-lg lg:rounded-none after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8B1538] after:transition-all after:duration-300 lg:hover:after:w-full">
                    Rent
                </Link>
                <Link href="/sell" className="text-gray-700 hover:text-[#8B1538] font-medium text-base transition-all duration-300 hover:scale-105 relative w-full lg:w-auto text-center py-3 lg:py-0 hover:bg-gray-50 lg:hover:bg-transparent rounded-lg lg:rounded-none after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8B1538] after:transition-all after:duration-300 lg:hover:after:w-full">
                    Sell
                </Link>
                <Link href="/agents" className="text-gray-700 hover:text-[#8B1538] font-medium text-base transition-all duration-300 hover:scale-105 relative w-full lg:w-auto text-center py-3 lg:py-0 hover:bg-gray-50 lg:hover:bg-transparent rounded-lg lg:rounded-none after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8B1538] after:transition-all after:duration-300 lg:hover:after:w-full">
                    Agents
                </Link>
                <Link href="/blogs" className="text-gray-700 hover:text-[#8B1538] font-medium text-base transition-all duration-300 hover:scale-105 relative w-full lg:w-auto text-center py-3 lg:py-0 hover:bg-gray-50 lg:hover:bg-transparent rounded-lg lg:rounded-none after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8B1538] after:transition-all after:duration-300 lg:hover:after:w-full">
                    Blogs
                </Link>
                <Link href="/contact" className="text-gray-700 hover:text-[#8B1538] font-medium text-base transition-all duration-300 hover:scale-105 relative w-full lg:w-auto text-center py-3 lg:py-0 hover:bg-gray-50 lg:hover:bg-transparent rounded-lg lg:rounded-none after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#8B1538] after:transition-all after:duration-300 lg:hover:after:w-full">
                    Contact Us
                </Link>

                {/* Mobile Menu - Favourite & Login */}
                <div className={`${isMenuOpen ? 'flex' : 'hidden'} lg:hidden flex-col items-stretch gap-3 w-full pt-6 mt-4 border-t border-gray-200`}>
                    <button className="flex items-center justify-center gap-2 text-gray-700 hover:text-[#8B1538] hover:bg-gray-50 transition-all duration-300 py-3 rounded-lg">
                        <Heart size={20} />
                        <span className="font-medium">Favourite</span>
                    </button>
                    <Button
                        asChild
                        className="bg-[#8B1538] hover:bg-[#6B0F2A] text-white rounded-full px-6 py-3 w-full transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        <Link href="/auth/login">Login Now</Link>
                    </Button>
                </div>
            </div>

            {/* Right - Favourite & Login Button */}
            <div className="hidden lg:flex items-center gap-4">
                <button className="flex items-center gap-2 text-gray-700 hover:text-[#8B1538] transition-colors duration-300 hover:scale-105 transform">
                    <Heart size={20} className="transition-transform duration-300 hover:fill-current" />
                    <span className="font-medium">Favourite</span>
                </button>
                <Button
                    asChild
                    className="bg-[#8B1538] hover:bg-[#6B0F2A] text-white rounded-full px-4 lg:px-6 text-sm lg:text-base transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
                >
                    <Link href="/auth/login">Login Now</Link>
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;
