"use client";

import React from "react";
import Image from "next/image";

const TrustedBySection = () => {
    // List of trusted company logos to display in the infinite scroll
    const logos = [
        { name: "Company 1", url: "/icon1.png" },
        { name: "Company 2", url: "/icon2.png" },
        { name: "Company 3", url: "/icon3.png" },
        { name: "Company 4", url: "/icon4.png" },
        { name: "Company 5", url: "/icon5.png" },
    ];

    return (
        <section className="w-full bg-[#FAFAFA] py-10 overflow-hidden border-t border-gray-100">
            <div className="container mx-auto px-4 text-center">

                {/* Section heading showing trust and credibility */}
                <h3 className="text-gray-800 text-[13px] md:text-[14px] font-semibold tracking-wide uppercase mb-8">
                    Trusted by +10,000 Consultants & Organisations
                </h3>

                {/* Container for the infinite scrolling logos with gradient background */}
                <div className="relative w-full max-w-5xl mx-auto overflow-hidden bg-gradient-to-r from-[#FAFAFA] via-[#E8E8E8] to-[#FAFAFA] rounded-2xl py-6">

                    {/* Edge fade effects for a premium look */}
                    <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#FAFAFA] to-transparent z-10" />
                    <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#FAFAFA] to-transparent z-10" />

                    {/* Scrolling track with duplicated logos for seamless infinite loop */}
                    <div className="flex items-center w-max animate-scroll">

                        {/* First set of company logos */}
                        <div className="flex items-center gap-12 md:gap-20 px-6">
                            {logos.map((logo, index) => (
                                <div key={`logo-1-${index}`} className="relative h-8 md:h-10 w-24 md:w-32">
                                    <Image
                                        src={logo.url}
                                        alt={logo.name}
                                        fill
                                        className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Duplicate set for seamless looping effect */}
                        <div className="flex items-center gap-12 md:gap-20 px-6">
                            {logos.map((logo, index) => (
                                <div key={`logo-2-${index}`} className="relative h-8 md:h-10 w-24 md:w-32">
                                    <Image
                                        src={logo.url}
                                        alt={logo.name}
                                        fill
                                        className="object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Tailwind Animation Config */}
            <style jsx global>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        /* Pause animation on hover if desired */
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
};

export default TrustedBySection;