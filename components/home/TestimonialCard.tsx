"use client";

import { motion } from "framer-motion";
import { Play, Star } from "lucide-react";
import Image from "next/image";
import { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
    testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
    return (
        <motion.div
            className="bg-white rounded-2xl sm:rounded-3xl lg:rounded-4xl p-3 sm:p-4 shadow-xl w-full min-w-[280px] sm:min-w-[500px] lg:min-w-[850px] max-w-[280px] sm:max-w-[500px] lg:max-w-[850px] h-[520px] sm:h-[300px] lg:h-[360px] flex flex-col sm:flex-row gap-4 sm:gap-6 border border-gray-100 shrink-0"
            whileHover={{
                y: -8,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
            }}
        >
            {/* Left Side: Video Thumbnail */}
            <div className="relative w-full sm:w-[280px] lg:w-[340px] shrink-0 rounded-2xl sm:rounded-3xl overflow-hidden group cursor-pointer h-48 sm:h-full lg:h-full">
                {/* Background Image/Thumbnail */}
                <div className="absolute inset-0">
                    {testimonial.videoThumbnail ? (
                        <Image
                            src={testimonial.videoThumbnail}
                            alt="Video thumbnail"
                            fill
                            className="object-cover"
                        />
                    ) : (
                        /* Fallback Gradient */
                        <div className="w-full h-full bg-linear-to-br from-orange-200 via-rose-200 to-orange-300" />
                    )}

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                        className="w-14 h-14 bg-white/30 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm border border-white/40"
                    >
                        <Play className="w-5 h-5 text-white fill-white ml-1" />
                    </motion.div>
                </div>
            </div>

            {/* Right Side: Content */}
            <div className="flex-1 py-3 sm:py-4 pr-3 sm:pr-6 flex flex-col justify-between">
                {/* Header: User Info & Rating */}
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                    <div className="flex gap-2 sm:gap-3">
                        {/* Avatar */}
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-gray-100 shrink-0 relative">
                            {testimonial.image ? (
                                <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                            ) : (
                                <div className="w-full h-full bg-gray-900 text-white flex items-center justify-center font-bold text-sm sm:text-base">
                                    {testimonial.name.charAt(0)}
                                </div>
                            )}
                        </div>

                        {/* Name & Role */}
                        <div>
                            <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-tight">
                                {testimonial.name}
                            </h3>
                            <p className="text-[10px] sm:text-xs text-gray-500 mt-1 font-medium">
                                {testimonial.role} at <span className="text-gray-900 font-semibold">{testimonial.company}</span>
                            </p>
                        </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-0.5 sm:gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className={`w-3 h-3 sm:w-4 sm:h-4 ${i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
                    {testimonial.tags.map((tag, index) => (
                        <span
                            key={index}
                            className="px-2 sm:px-4 py-1 sm:py-1.5 bg-white border border-gray-200 text-gray-700 text-[10px] sm:text-[12px] font-semibold rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-800 text-sm sm:text-base lg:text-[17px] leading-relaxed font-medium mb-auto line-clamp-3 sm:line-clamp-none">
                    &ldquo;{testimonial.testimonial}&rdquo;
                </blockquote>

                {/* Footer: Earnings */}
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-gray-50/0">
                    <div className="text-2xl sm:text-3xl lg:text-[42px] font-black text-gray-900 leading-none tracking-tight">
                        {testimonial.earnings}
                    </div>
                    <div className="text-[9px] sm:text-[10px] lg:text-[11px] font-bold text-gray-400 uppercase tracking-widest mt-1 sm:mt-2">
                        {testimonial.earningsLabel}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default TestimonialCard;