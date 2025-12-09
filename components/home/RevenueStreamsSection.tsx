"use client";

import React, { useState } from "react";
import {
    BookOpen,
    Users,
    MessageCircle,
    ShoppingBag,
    Mic,
    Calendar,
    Briefcase,
    Play,
    ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

// --- Types ---
type TabId = 'Courses' | 'Communities' | 'Coaching' | 'Merchandise' | 'Podcasts' | 'Events' | 'Brokerage';

interface TabItem {
    id: TabId;
    label: string;
    icon: React.ElementType;
}

// --- Data ---
const TABS: TabItem[] = [
    { id: 'Courses', label: 'Courses', icon: BookOpen },
    { id: 'Communities', label: 'Communities', icon: Users },
    { id: 'Coaching', label: 'Coaching & Consulting', icon: MessageCircle },
    { id: 'Merchandise', label: 'Merchandise', icon: ShoppingBag },
    { id: 'Podcasts', label: 'Podcasts', icon: Mic },
    { id: 'Events', label: 'Events', icon: Calendar },
    { id: 'Brokerage', label: 'Brokerage', icon: Briefcase },
];

const RevenueStreamsSection = () => {
    const [activeTab, setActiveTab] = useState<TabId>('Courses');

    return (
        <section className="w-full min-h-screen bg-[#FFF5F9] py-20 px-4 sm:px-6 flex flex-col items-center overflow-hidden font-sans">

            {/* Header */}
            <div className="text-center max-w-4xl mx-auto mb-12">
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-pink-300 to-pink-500 text-black text-[11px] font-extrabold tracking-widest uppercase mb-6"
                >
                    Diversify Revenue Stream
                </motion.div>

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="text-4xl md:text-[56px] leading-[1.1] font-black text-[#111827] mb-6 tracking-tight"
                >
                    Maximise earnings with<br />
                    limitless revenue streams.
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-[#6B7280] text-lg font-medium max-w-2xl mx-auto"
                >
                    Create and sell courses, consulting services, and communities - with Zero marketing cost and a built-in sales network.
                </motion.p>
            </div>

            {/* 2. Navigation Tabs */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-6xl bg-white rounded-3xl lg:rounded-full p-3 sm:p-2 mb-14 shadow-sm border border-gray-100"
            >
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap lg:flex-nowrap items-center justify-center lg:justify-between gap-2 [&>*:last-child:nth-child(odd)]:col-span-2 [&>*:last-child:nth-child(odd)]:justify-self-center [&>*:last-child:nth-child(odd)]:max-w-[50%] sm:[&>*:last-child:nth-child(odd)]:max-w-none sm:[&>*:last-child:nth-child(odd)]:col-span-1">
                    {TABS.map((tab, index) => {
                        const isActive = activeTab === tab.id;
                        return (
                            <motion.button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ duration: 0.4, delay: 0.4 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                                whileHover={{ scale: 1.03, y: -2 }}
                                whileTap={{ scale: 0.97 }}
                                className={`flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 lg:px-5 py-2.5 sm:py-3 rounded-full text-[11px] sm:text-[12px] lg:text-[13px] font-bold transition-all duration-300 ease-out w-full sm:w-auto ${isActive
                                    ? "bg-[#371B33] text-white shadow-md"
                                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                                    }`}
                            >
                                <tab.icon
                                    className={`w-[16px] h-[16px] sm:w-[17px] sm:h-[17px] lg:w-[18px] lg:h-[18px] ${isActive ? "text-[#FF80EA]" : "text-gray-400"}`}
                                    strokeWidth={2.5}
                                />
                                <span className="whitespace-nowrap">{tab.label}</span>
                            </motion.button>
                        );
                    })}
                </div>
            </motion.div>

            {/* 3. Main Feature Card */}
            <motion.div
                key={activeTab} // Triggers animation on tab change
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-[1100px] bg-[#663255] rounded-l-[60px] sm:rounded-l-[150px] lg:rounded-l-[250px] rounded-r-[20px] sm:rounded-r-[40px] overflow-hidden min-h-[400px] sm:min-h-[500px] mx-4 sm:mx-8 lg:ml-20 flex flex-col lg:flex-row shadow-2xl"
            >

                {/* Left Side: Text Content */}
                <div className="w-full lg:w-[45%] p-6 sm:p-8 md:p-10 lg:p-14 flex flex-col justify-center relative z-10 sm:ml-8 lg:ml-20">
                    <motion.h3
                        className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {activeTab}
                    </motion.h3>

                    <motion.div
                        className="space-y-6 text-[#F9E8F3] text-[15px] md:text-[16px] leading-relaxed opacity-90 font-medium"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <p>
                            Turn your knowledge into structured, sellable products.
                        </p>
                        <p>
                            Build online, drip, academic, or challenge-based courses with built-in tools for gamification, accountability, and engagement.
                        </p>
                        <p>
                            Every course is optimized to deliver value and generate recurring income.
                        </p>
                    </motion.div>

                    <motion.button
                        className="mt-10 group flex items-center gap-2 px-7 py-3 bg-[#2D1525] text-white text-[13px] font-bold rounded-full hover:bg-black transition-all w-fit shadow-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.4)" }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#FF80EA]" />
                    </motion.button>
                </div>

                {/* Right Side: Image with Curved Mask */}
                <motion.div
                    className="relative my-6 sm:my-8 lg:my-10 mx-4 sm:mx-6 lg:mr-10 w-full lg:w-[55%] h-[300px] sm:h-[350px] lg:h-auto"
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    {/* The Image Container with the distinctive curve (rounded-l-full-ish effect) */}
                    <motion.div
                        className="absolute inset-0 h-full w-full bg-gray-200 rounded-l-[60px] sm:rounded-l-[100px] lg:rounded-l-[180px] rounded-r-2xl overflow-hidden border-l-8 border-[#663255]/0"
                        initial={{ scale: 0.95 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {/* Placeholder for your actual image */}
                        <motion.img
                            src="/dall-e.png"
                            alt="Course Preview"
                            className="w-full h-full object-cover"
                            initial={{ scale: 1.1 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        />

                        {/* Dark gradient overlay for text readability if needed */}
                        <div className="absolute inset-0 bg-black/10"></div>
                    </motion.div>

                    {/* Floating Player Card Overlay */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 40 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        whileHover={{
                            y: -5,
                            boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.3)",
                            transition: { duration: 0.3 }
                        }}
                        className="absolute bottom-8 right-4 left-4 lg:left-auto lg:right-12 lg:bottom-16 bg-white/95 backdrop-blur-sm p-4 rounded-[24px] shadow-2xl max-w-[380px] z-20"
                    >
                        {/* Blue Subscribe Pill */}
                        <motion.div
                            className="absolute -top-5 right-6 bg-[#007AFF] text-white text-[11px] font-bold px-4 py-2 rounded-full shadow-lg hover:bg-[#0062CC] cursor-pointer transition-colors"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                        >
                            Subscribe for $5.00/mo
                        </motion.div>

                        <div className="flex items-center gap-4 mt-2">
                            {/* Play Button Icon Area */}
                            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center shrink-0">
                                <span className="text-[10px] font-bold text-blue-600 block text-center leading-tight">
                                    PT<br />01
                                </span>
                            </div>

                            <div className="flex-1 min-w-0">
                                <h4 className="text-sm font-bold text-gray-900 truncate">Lady Dentaa Amoateng MBE</h4>
                                <div className="flex items-center justify-between mt-1">
                                    <span className="text-[11px] font-medium text-gray-400">54 min &bull; Oct 17, 2026</span>

                                    {/* Play Icon */}
                                    <motion.div
                                        className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center cursor-pointer hover:bg-blue-200 transition-colors"
                                        whileHover={{ scale: 1.15 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Play className="w-3 h-3 text-[#007AFF] fill-[#007AFF] ml-0.5" />
                                    </motion.div>
                                </div>

                                {/* Progress Bar */}
                                <div className="w-full h-1 bg-gray-100 rounded-full mt-3 overflow-hidden">
                                    <motion.div
                                        className="h-full bg-[#007AFF] rounded-full"
                                        initial={{ width: "0%" }}
                                        whileInView={{ width: "40%" }}
                                        viewport={{ once: false }}
                                        transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

            </motion.div>
        </section>
    );
};

export default RevenueStreamsSection;