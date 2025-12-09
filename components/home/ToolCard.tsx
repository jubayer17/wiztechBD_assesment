import { motion, Variants, useInView } from "framer-motion";
import { ToolItem } from "@/data/tools";
import { useRef } from "react";

interface ToolCardProps {
    tool: ToolItem;
    index: number;
}

const ToolCard = ({ tool, index }: ToolCardProps) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(ref, { once: false, amount: 0.3 });

    if (tool.enterprise) {
        return (
            <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{
                    duration: 0.8,
                    delay: index * 0.12,
                    ease: [0.34, 1.56, 0.64, 1]
                }}
                whileHover={{ scale: 1.02, transition: { duration: 0.3, ease: "easeOut" } }}
                className="col-span-1 md:col-span-2 rounded-2xl bg-gradient-to-br from-[#9b7b6f] via-[#8a6a5f] to-[#705a51] px-8 py-8 flex justify-between items-center text-white shadow-lg hover:shadow-2xl relative overflow-hidden group"
            >
                {/* Animated gradient overlay */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#a88a7d]/30 via-transparent to-[#5d4a42]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                />

                {/* Shine effect */}
                <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                    initial={false}
                />

                <div className="max-w-xl relative z-10">
                    <motion.h3
                        className="text-[24px] font-bold text-[#f4c430] mb-3"
                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                        {tool.title}
                    </motion.h3>
                    <p className="text-[14px] leading-relaxed text-white/95">
                        {tool.description}
                    </p>
                    <motion.button
                        className="mt-5 text-[13px] font-semibold text-[#f4c430] inline-flex items-center group/btn"
                        whileHover={{ x: 5, transition: { duration: 0.2 } }}
                    >
                        Learn more <motion.span
                            className="ml-1 inline-block"
                            animate={{ x: [0, 4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >→</motion.span>
                    </motion.button>
                </div>

                <motion.div
                    className="text-5xl ml-6 flex-shrink-0 relative z-10"
                    animate={{
                        rotate: [0, 5, -5, 0],
                        scale: [1, 1.05, 1]
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >{tool.icon}</motion.div>
            </motion.div>
        );
    }

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{
                duration: 0.8,
                delay: index * 0.12,
                ease: [0.34, 1.56, 0.64, 1]
            }}
            whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
            }}
            className="rounded-2xl bg-white px-6 py-6 shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-200/50 relative overflow-hidden group cursor-pointer"
        >
            {/* Gradient overlay on hover */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-transparent to-amber-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
            />

            {/* Animated border gradient */}
            <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                    background: "linear-gradient(135deg, transparent 0%, rgba(255, 140, 66, 0.1) 50%, transparent 100%)",
                }}
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            />

            <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                    <motion.h3
                        className="text-[22px] font-bold text-[#1a1a1a] leading-tight"
                        whileHover={{ x: 3, transition: { duration: 0.2 } }}
                    >
                        {tool.title}
                    </motion.h3>
                    <motion.span
                        className="text-3xl ml-3 flex-shrink-0"
                        whileHover={{
                            scale: 1.2,
                            rotate: 10,
                            transition: { duration: 0.3 }
                        }}
                    >{tool.icon}</motion.span>
                </div>

                <p className="text-[13px] leading-relaxed text-[#666666] mb-4">
                    {tool.description}
                </p>

                <motion.button
                    className="text-[13px] font-semibold text-[#ff8c42] inline-flex items-center group/btn"
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                >
                    Learn more <motion.span
                        className="ml-1 inline-block"
                        animate={{ x: [0, 3, 0] }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            repeatDelay: 0.5
                        }}
                    >→</motion.span>
                </motion.button>
            </div>
        </motion.div>
    );
};

export default ToolCard;
