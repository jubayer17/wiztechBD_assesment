"use client"
import React from 'react';
import { RotateCcw } from 'lucide-react';

interface PreferenceProps {
    onReset?: () => void;
}

const Preference: React.FC<PreferenceProps> = ({ onReset }) => {
    return (
        <div className="w-full mt-5 bg-white border border-gray-200 rounded-3xl px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-sm gap-3 sm:gap-0">
            {/* Title */}
            <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                Property Preference
            </h2>

            {/* Reset Button */}
            <button
                onClick={onReset}
                className="group flex items-center gap-2 px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs sm:text-sm font-medium rounded-xl transition-colors duration-200 w-full sm:w-auto justify-center"
                aria-label="Reset Filter"
            >
                Reset Filter
                {/* Icon with a slight rotation animation on hover */}
                <RotateCcw
                    size={16}
                    className="group-hover:-rotate-180 transition-transform duration-500"
                />
            </button>
        </div>
    );
};

export default Preference;