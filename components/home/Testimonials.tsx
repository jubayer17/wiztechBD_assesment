"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import { testimonials } from "@/data/testimonials";

const TestimonialsSection = () => {
    // Triple testimonials for seamless infinite scroll
    const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];
    const cardWidth = 850;
    const gapWidth = 48;
    const totalWidth = (cardWidth + gapWidth) * testimonials.length;

    const headerRef = useRef(null);
    const isHeaderInView = useInView(headerRef, { once: false, amount: 0.3 });

    return (
        <section className="w-full min-h-screen bg-gradient-to-b from-[#12091f] via-[#242038] to-[#3d3554] py-12 sm:py-16 lg:py-20 flex flex-col items-center justify-center overflow-hidden">

            {/* Header */}
            <div ref={headerRef} className="text-center mb-12 sm:mb-16 px-4 sm:px-6">
                {/* Badge */}
                <motion.span
                    className="inline-block px-3 sm:px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-900 via-purple-600 to-purple-300 text-[10px] sm:text-[11px] font-extrabold tracking-wider text-white uppercase mb-4 sm:mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    Testimonials
                </motion.span>

                {/* Title */}
                <motion.h2
                    className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1] mb-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    Trusted by Creators<br />
                    <span className="opacity-90">& Proven by Results.</span>
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    className="text-gray-400 text-sm md:text-base font-medium max-w-xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                    See how others grow with Growhubs — real stories, real success.
                </motion.p>
            </div>

            {/* Cards scroll */}
            <div className="relative w-full overflow-hidden px-4 sm:px-6">
                <motion.div
                    className="flex gap-6 sm:gap-8 lg:gap-12 items-center"
                    animate={{
                        x: [0, -totalWidth],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedTestimonials.map((item, index) => (
                        <TestimonialCard key={`${item.id}-${index}`} testimonial={item} />
                    ))}
                </motion.div>
            </div>

        </section>
    );
};

export default TestimonialsSection;