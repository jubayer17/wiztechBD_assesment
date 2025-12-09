"use client";
import React from "react";

export const StatBox: React.FC<{ title: string; value: string; subtitle?: string }> = ({ title, value, subtitle }) => {
    return (
        <div className="rounded-lg border border-white/6 p-5 flex flex-col h-full justify-between bg-white/2">
            <div className="text-xs uppercase tracking-wider text-white/70">{title}</div>
            <div className="mt-3 text-2xl md:text-3xl font-extrabold text-white">{value}</div>
            {subtitle && <div className="mt-2 text-sm text-white/70">{subtitle}</div>}
        </div>
    );
};
