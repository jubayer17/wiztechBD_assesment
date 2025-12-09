"use client";

import { Facebook, Instagram, Github, Music, Globe } from "lucide-react";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="w-full overflow-hidden">
            {/* Footer container */}
            <div className="relative rounded-t-[18px] bg-gradient-to-t from-[#3c1b2b] via-[#2a0f1f] to-[#12030a] text-white overflow-hidden">
                {/* Main content */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-[160px] sm:pb-[200px] md:pb-[300px] lg:pb-[360px]">
                    {/* Footer links */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
                        {/* About section */}
                        <div className="space-y-4 sm:space-y-5">
                            <h3 className="font-bold text-xl sm:text-2xl">About Us</h3>
                            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-white/80">
                                <li className="hover:text-white transition-colors cursor-pointer">Resources</li>
                                <li className="hover:text-white transition-colors cursor-pointer">Company</li>
                                <li className="hover:text-white transition-colors cursor-pointer">Property</li>
                                <li className="hover:text-white transition-colors cursor-pointer">Contact Us</li>
                            </ul>
                        </div>

                        {/* Contact info */}
                        <div className="space-y-4 sm:space-y-5">
                            <h3 className="font-bold text-xl sm:text-2xl">Contact Us</h3>
                            <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-white/80">
                                <li className="hover:text-white transition-colors cursor-pointer">hello.abc@gmail.com</li>
                                <li className="hover:text-white transition-colors cursor-pointer">+012233455667</li>
                            </ul>
                        </div>

                        {/* Social links */}
                        <div className="space-y-4 sm:space-y-5">
                            <h3 className="font-bold text-xl sm:text-2xl">Follow Us</h3>
                            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                                <IconCircle><Facebook size={18} /></IconCircle>
                                <IconCircle><FaXTwitter size={16} /></IconCircle>
                                <IconCircle><Instagram size={18} /></IconCircle>
                                <IconCircle><FaWhatsapp size={16} /></IconCircle>
                                <IconCircle><Github size={18} /></IconCircle>
                                <IconCircle><Globe size={18} /></IconCircle>
                                <IconCircle><Music size={18} /></IconCircle>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-right text-xs sm:text-sm text-white/70 pr-2 mt-6 sm:mt-8">
                        © 2025 Hexenvic. All rights reserved.
                    </div>
                </div>

                {/* Big watermark */}
                <div className="w-full flex items-center justify-center -mt-[130px] sm:-mt-[260px] md:-mt-[300px] lg:-mt-[320px] px-4">
                    <h2
                        className="
              text-[105px] sm:text-[180px] md:text-[240px] lg:text-[280px]
              leading-none font-extrabold
              bg-gradient-to-r from-white/15 via-white/45 to-white/80
              bg-clip-text text-transparent
              tracking-tight
            "
                        style={{ wordBreak: 'keep-all' }}
                    >
                        WiztecBD
                    </h2>
                </div>
            </div>
        </footer>
    );
}

/* tiny helper component */
function IconCircle({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 text-white/90 bg-white/5 hover:bg-white hover:text-purple-600 hover:border-white hover:scale-110 transition-all duration-300 cursor-pointer">
            {children}
        </div>
    );
}
