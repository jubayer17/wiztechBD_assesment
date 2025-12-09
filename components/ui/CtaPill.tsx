"use client";
import React from "react";
import { GradientButton } from "./GradientButton";

export const CtaPill: React.FC = () => {
    return (
        <form className="w-full max-w-3xl mx-0">
            <div className="flex items-center rounded-full bg-white/4 border border-white/6 overflow-hidden">
                <input
                    aria-label="email"
                    className="flex-1 px-6 py-3 bg-transparent placeholder:text-gray-300 text-white text-sm focus:outline-none"
                    placeholder="Enter Your Email Here"
                />
                <div className="px-3 py-2">
                    <GradientButton>
                        <div className="text-left leading-tight">
                            <div className="text-sm">Start for Free</div>
                            <div className="text-[10px] opacity-80">No credit card Required</div>
                        </div>
                    </GradientButton>
                </div>
            </div>
        </form>
    );
};
