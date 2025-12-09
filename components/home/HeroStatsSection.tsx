"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const GradientButton: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="py-3 px-6 rounded-full text-white font-medium shadow-lg
               bg-gradient-to-r from-[#7c3aed] via-[#8b5cf6] to-[#ec4899] 
               hover:brightness-95"
    >
        {children}
    </motion.button>
);

const CtaPill: React.FC<{ isInView: boolean }> = ({ isInView }) => (
    <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
        transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center bg-[rgba(255,255,255,0.04)] backdrop-blur-sm border border-[rgba(255,255,255,0.06)] rounded-full overflow-hidden max-w-2xl w-full"
    >
        <input
            placeholder="Enter Your Email Here"
            className="flex-1 py-3 px-6 bg-transparent placeholder:text-gray-300 outline-none text-white"
        />
        <div className="p-1.5 pr-2">
            <GradientButton>
                <div className="text-sm">Start for Free<br /><span className="text-[10px] opacity-80">No credit card Required</span></div>
            </GradientButton>
        </div>
    </motion.div>
);

const StatBox: React.FC<{ title: string; value: string; subtitle?: string; index: number }> = ({ title, value, subtitle, index }) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.34, 1.56, 0.64, 1] }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            className="flex-1 min-w-[160px]"
        >
            <div className="p-4 border border-[rgba(255,255,255,0.06)] rounded-lg h-full hover:border-[rgba(255,255,255,0.15)] hover:bg-[rgba(255,255,255,0.03)]">
                <div className="text-xs uppercase tracking-wide text-gray-300 mb-2">{title}</div>
                <div className="text-2xl font-bold text-white">{value}</div>
                {subtitle && <div className="text-sm text-gray-300 mt-1">{subtitle}</div>}
            </div>
        </motion.div>
    );
};

export default function HeroStatsSection() {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const statsCardRef = useRef<HTMLDivElement | null>(null);
    const heroContentRef = useRef<HTMLDivElement | null>(null);
    const isStatsInView = useInView(statsCardRef, { once: false, amount: 0.2 });
    const isHeroInView = useInView(heroContentRef, { once: false, amount: 0.3 });

    return (
        <section className="min-h-screen relative overflow-hidden font-sans">
            {/* Background with gradient and hero image */}
            <div className="absolute inset-0">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.95 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 bg-gradient-to-br from-[#2a0520] via-[#3b0730] to-[#14020a]"
                />
                <motion.img
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 0.25, x: 0 }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    src="/hero.jpg"
                    alt="hero"
                    className="absolute right-0 top-0 w-2/3 h-full object-cover mix-blend-overlay pointer-events-none"
                />
                {/* Floating dots */}
                <div className="absolute left-10 top-28">
                    <motion.div
                        animate={{ y: [0, -10, 0], opacity: [0.6, 0.8, 0.6] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-1 rounded-full bg-white mb-8"
                    />
                    <motion.div
                        animate={{ y: [0, -15, 0], opacity: [0.5, 0.7, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="w-1.5 h-1.5 rounded-full bg-white mb-12"
                    />
                    <motion.div
                        animate={{ y: [0, -8, 0], opacity: [0.4, 0.6, 0.4] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="w-0.5 h-0.5 rounded-full bg-white"
                    />
                </div>

                {/* More floating dots on the left */}
                <div className="absolute left-20 top-64">
                    <motion.div
                        animate={{ y: [0, -12, 0], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                        className="w-1 h-1 rounded-full bg-purple-300 mb-10"
                    />
                    <motion.div
                        animate={{ y: [0, -18, 0], opacity: [0.6, 0.9, 0.6] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                        className="w-1.5 h-1.5 rounded-full bg-pink-300"
                    />
                </div>

                <div className="absolute left-5 bottom-40">
                    <motion.div
                        animate={{ y: [0, -10, 0], opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                        className="w-1 h-1 rounded-full bg-blue-200 mb-8"
                    />
                    <motion.div
                        animate={{ y: [0, -14, 0], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                        className="w-0.5 h-0.5 rounded-full bg-purple-200"
                    />
                </div>

                {/* Floating dots on the right */}
                <div className="absolute right-16 top-32">
                    <motion.div
                        animate={{ y: [0, -12, 0], opacity: [0.6, 0.9, 0.6] }}
                        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 rounded-full bg-pink-300 mb-10"
                    />
                    <motion.div
                        animate={{ y: [0, -16, 0], opacity: [0.5, 0.7, 0.5] }}
                        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                        className="w-1 h-1 rounded-full bg-white mb-8"
                    />
                    <motion.div
                        animate={{ y: [0, -9, 0], opacity: [0.4, 0.6, 0.4] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
                        className="w-0.5 h-0.5 rounded-full bg-purple-200"
                    />
                </div>

                <div className="absolute right-28 bottom-48">
                    <motion.div
                        animate={{ y: [0, -14, 0], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                        className="w-1 h-1 rounded-full bg-blue-300 mb-12"
                    />
                    <motion.div
                        animate={{ y: [0, -11, 0], opacity: [0.6, 0.9, 0.6] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                        className="w-1.5 h-1.5 rounded-full bg-pink-200"
                    />
                </div>

                <div className="absolute right-8 top-1/2">
                    <motion.div
                        animate={{ y: [0, -10, 0], opacity: [0.5, 0.7, 0.5] }}
                        transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                        className="w-1 h-1 rounded-full bg-purple-300"
                    />
                </div>

                {/* Additional dots - left side */}
                <div className="absolute left-32 top-1/3">
                    <motion.div
                        animate={{ y: [0, -13, 0], opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="w-1 h-1 rounded-full bg-white mb-6"
                    />
                    <motion.div
                        animate={{ y: [0, -9, 0], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 2.9, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
                        className="w-0.5 h-0.5 rounded-full bg-pink-200"
                    />
                </div>

                <div className="absolute left-14 top-1/2">
                    <motion.div
                        animate={{ y: [0, -11, 0], opacity: [0.6, 0.8, 0.6] }}
                        transition={{ duration: 3.7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                        className="w-1.5 h-1.5 rounded-full bg-blue-300"
                    />
                </div>

                <div className="absolute left-6 bottom-20">
                    <motion.div
                        animate={{ y: [0, -12, 0], opacity: [0.5, 0.7, 0.5] }}
                        transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                        className="w-1 h-1 rounded-full bg-purple-300 mb-8"
                    />
                    <motion.div
                        animate={{ y: [0, -15, 0], opacity: [0.4, 0.6, 0.4] }}
                        transition={{ duration: 4.1, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="w-1.5 h-1.5 rounded-full bg-white"
                    />
                </div>

                <div className="absolute left-24 bottom-32">
                    <motion.div
                        animate={{ y: [0, -10, 0], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                        className="w-0.5 h-0.5 rounded-full bg-pink-300"
                    />
                </div>

                {/* Additional dots - right side */}
                <div className="absolute right-12 top-20">
                    <motion.div
                        animate={{ y: [0, -14, 0], opacity: [0.6, 0.9, 0.6] }}
                        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                        className="w-1 h-1 rounded-full bg-blue-200 mb-10"
                    />
                    <motion.div
                        animate={{ y: [0, -11, 0], opacity: [0.5, 0.7, 0.5] }}
                        transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
                        className="w-1.5 h-1.5 rounded-full bg-purple-300"
                    />
                </div>

                <div className="absolute right-6 top-2/3">
                    <motion.div
                        animate={{ y: [0, -13, 0], opacity: [0.4, 0.7, 0.4] }}
                        transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
                        className="w-1 h-1 rounded-full bg-pink-200"
                    />
                </div>

                <div className="absolute right-20 bottom-28">
                    <motion.div
                        animate={{ y: [0, -12, 0], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="w-1.5 h-1.5 rounded-full bg-white mb-7"
                    />
                    <motion.div
                        animate={{ y: [0, -10, 0], opacity: [0.6, 0.9, 0.6] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
                        className="w-0.5 h-0.5 rounded-full bg-blue-300"
                    />
                </div>

                <div className="absolute right-32 top-1/2">
                    <motion.div
                        animate={{ y: [0, -11, 0], opacity: [0.5, 0.7, 0.5] }}
                        transition={{ duration: 3.3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                        className="w-1 h-1 rounded-full bg-purple-200"
                    />
                </div>

                <div className="absolute right-10 bottom-16">
                    <motion.div
                        animate={{ y: [0, -9, 0], opacity: [0.4, 0.6, 0.4] }}
                        transition={{ duration: 3.1, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                        className="w-0.5 h-0.5 rounded-full bg-pink-300"
                    />
                </div>
            </div>

            {/* Main content */}
            <div ref={containerRef} className="relative z-10 container mx-auto px-8 py-20">
                <div ref={heroContentRef} className="max-w-6xl mx-auto flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block bg-[rgba(255,255,255,0.06)] px-4 py-1.5 rounded-full text-[11px] font-semibold text-white/90 mb-8 tracking-wide uppercase"
                    >
                        BUILD FOR YOU
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-5xl md:text-6xl lg:text-[68px] leading-[1.1] font-extrabold text-white mb-6 tracking-tight"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: -40 }}
                            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-block mr-3"
                        >
                            Built
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: -40 }}
                            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-block mr-3"
                        >
                            for
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: -40 }}
                            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
                            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="text-[#b7c4ff] inline-block"
                        >
                            Creators.
                        </motion.span>
                        <br />
                        <motion.span
                            initial={{ opacity: 0, y: -40 }}
                            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
                            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-block mr-3"
                        >
                            Powered
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: -40 }}
                            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
                            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-block mr-3"
                        >
                            for
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0, y: -40 }}
                            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -40 }}
                            transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="inline-block"
                        >
                            Profit
                        </motion.span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="text-base md:text-lg text-white/70 max-w-2xl mb-10 leading-relaxed"
                    >
                        Create and sell courses, consulting services, and communities - with Zero<br className="hidden md:block" />
                        marketing cost and a built-in sales network.
                    </motion.p>

                    <div className="w-full max-w-2xl mb-12">
                        <CtaPill isInView={isHeroInView} />
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{ duration: 0.6, delay: 1.1 }}
                            className="text-xs text-white/50 mt-3"
                        >
                            By proceeding you agree to our Platform terms & Privacy Notice
                        </motion.p>
                    </div>

                    <motion.div
                        ref={statsCardRef}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                        className="w-full max-w-5xl rounded-[32px] border border-[rgba(255,255,255,0.1)] p-8 backdrop-blur-md bg-[rgba(255,255,255,0.03)] shadow-2xl"
                    >
                        <div className="flex flex-col md:flex-row items-center md:items-center justify-between mb-8 gap-4">
                            <h3 className="text-xl md:text-2xl text-white font-semibold">Sell from day one - even with zero audience</h3>
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
                                whileTap={{ scale: 0.98 }}
                                className="text-sm px-5 py-2.5 border border-[rgba(255,255,255,0.2)] rounded-full text-white/90 whitespace-nowrap"
                            >
                                Open calculator
                            </motion.button>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-8">
                            <StatBox title="CO-SELLERS IN NETWORK" value="21,500+" subtitle="People who can co-promote" index={0} />
                            <StatBox title="EXPECTED BUYERS / MONTH" value="86" subtitle="With zero personal audience" index={1} />
                            <StatBox title="EST. MRR AT US$9/MO" value="US$774" subtitle="From membership sales" index={2} />
                            <StatBox title="EARN W/O A PRODUCT" value="US$300" subtitle="Just by co-selling" index={3} />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isStatsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="bg-[#f5e6c8] text-[#3a2617] px-6 py-4 rounded-xl overflow-hidden relative"
                        >
                            <div className="animate-marquee whitespace-nowrap text-sm font-medium">
                                Unlike Kajabi, Teachable, or Skool, Growhubs helps you find and convert clients inside the platform so you can sell from day one.
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                Unlike Kajabi, Teachable, or Skool, Growhubs helps you find and convert clients inside the platform so you can sell from day one.
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom fade effect */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
        </section>
    );
}
