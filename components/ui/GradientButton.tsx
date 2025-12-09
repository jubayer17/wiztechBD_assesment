"use client";
import React from "react";

export const GradientButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, ...props }) => (
    <button
        {...props}
        className={
            "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold shadow-[0_6px_20px_rgba(124,58,237,0.18)] " +
            "bg-gradient-to-r from-[#7c3aed] via-[#8b5cf6] to-[#ec4899] text-white hover:brightness-95"
        }
    >
        {children}
    </button>
);
