"use client";
import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import { CtaPill } from "@/components/ui/CtaPill";
import { StatBox } from "@/components/ui/StatBox";

export default function HeroStats() {
    return (
        <section className="relative min-h-screen text-white overflow-hidden bg-gradient-to-br from-[#3d1a4d] via-[#2d1240] to-[#1f0a33]">
            {/* decorative dots */}
            <div className="absolute left-[8%] top-[12%] w-2 h-2 rounded-full bg-white/70" />
            <div className="absolute left-[12%] top-[30%] w-1.5 h-1.5 rounded-full bg-white/50" />
            <div className="absolute right-[12%] top-[8%] w-2 h-2 rounded-full bg-white/60" />
            <div className="absolute right-[25%] top-[15%] w-1 h-1 rounded-full bg-white/40" />
            <div className="absolute right-[30%] bottom-[25%] w-1.5 h-1.5 rounded-full bg-white/50" />

            <div className="relative z-10 container mx-auto px-8 py-16">
                <div className="max-w-[1400px] mx-auto">
                    {/* Badge at top center */}
                    <div className="text-center mb-8">
                        <Badge>BUILD FOR YOU</Badge>
                    </div>

                    {/* Main flex row container */}
                    <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start mb-20">
                        {/* Left side - Content */}
                        <div className="flex-1 text-center lg:text-left">
                            {/* Main heading */}
                            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-bold mb-6">
                                <span className="block">Built for <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-blue-200 bg-clip-text text-transparent">Creators.</span></span>
                                <span className="block">Powered for Profit</span>
                            </h1>

                            {/* Subtitle */}
                            <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed max-w-xl lg:max-w-none">
                                Create and sell courses, consulting services, and communities - with Zero
                                marketing cost and a built-in sales network.
                            </p>

                            {/* CTA Section */}
                            <div className="flex flex-col items-center lg:items-start mb-4">
                                <CtaPill />
                                <p className="text-xs text-white/50 mt-3">
                                    By proceeding you agree to our Platform terms & Privacy Notice
                                </p>
                            </div>
                        </div>

                        {/* Right side - Stats panel */}
                        <div className="w-full lg:w-[600px] shrink-0">
                            <div className="rounded-[32px] border border-white/10 p-8 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-md shadow-2xl">
                                <div className="flex items-center justify-between mb-8 gap-4">
                                    <h3 className="text-xl font-semibold leading-tight">
                                        Sell from day one - even with zero audience
                                    </h3>
                                    <button className="text-xs px-4 py-2 border border-white/30 rounded-full text-white/90 hover:bg-white/10 transition-all whitespace-nowrap">
                                        Open calculator
                                    </button>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <StatBox title="CO-SELLERS IN NETWORK" value="21,500+" subtitle="People who can co-promote" />
                                    <StatBox title="EXPECTED BUYERS / MONTH" value="86" subtitle="With zero personal audience" />
                                    <StatBox title="EST. MRR AT US$9/MO" value="US$774" subtitle="From membership sales" />
                                    <StatBox title="EARN W/O A PRODUCT" value="US$300" subtitle="Just by co-selling" />
                                </div>

                                {/* Beige info banner */}
                                <div className="bg-[#f5e6c8] text-[#3a2a1a] px-6 py-4 text-sm rounded-2xl leading-relaxed font-medium">
                                    Unlike Kajabi, Teachable, or Skool, Growhubs helps you find and convert clients inside the platform so you can sell from day one.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Logos strip */}
                    <div className="mt-16 mb-12">
                        <div className="text-center text-white/40 text-xs md:text-sm uppercase tracking-[0.2em] mb-10 font-medium">
                            TRUSTED BY +10,000 CONSULTANTS & ORGANISATIONS
                        </div>
                        <div className="flex items-center justify-center gap-8 md:gap-12 lg:gap-16 flex-wrap opacity-30 grayscale">
                            <div className="text-white/60 text-2xl font-light">LEVELS</div>
                            <div className="text-white/60 text-2xl font-bold">K DNET</div>
                            <div className="text-white/60 text-xl font-normal">UIA</div>
                            <div className="text-white/60 text-xl font-medium">PlannIT</div>
                            <div className="text-white/60 text-base font-light tracking-wider">LOGO</div>
                            <div className="text-white/60 text-base font-light tracking-wider">LOGO</div>
                            <div className="text-white/60 text-xl font-light">TERMOSCOL</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
