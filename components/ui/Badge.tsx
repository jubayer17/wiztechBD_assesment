"use client";
import React from "react";

export const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <span className="inline-block bg-white/7 text-white/90 px-4 py-1 rounded-full text-xs font-semibold">
        {children}
    </span>
);
