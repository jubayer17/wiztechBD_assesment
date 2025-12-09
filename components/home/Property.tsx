"use client"
import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

interface PropertyProps {
    resultCount?: number;
    onSortChange?: (value: string) => void;
}

const Property: React.FC<PropertyProps> = ({
    resultCount = 12,
    onSortChange
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedSort, setSelectedSort] = useState("Low to High");
    const dropdownRef = useRef<HTMLDivElement>(null);

    const sortOptions = [
        "Low to High",
        "High to Low",
        "Newest First",
        "Oldest First"
    ];

    // Handle clicking outside to close dropdown
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (option: string) => {
        setSelectedSort(option);
        setIsOpen(false);
        if (onSortChange) onSortChange(option);
    };

    return (
        <div className="mt-5 max-w-4xl mx-4 sm:mx-6 lg:ml-4 lg:mr-11 flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white border border-gray-200 rounded-3xl px-4 sm:px-6 py-3 sm:py-2 shadow-sm gap-3 sm:gap-0">

            {/* Left Side: Title & Count */}
            <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                    Property
                </h2>
                <span className="text-slate-400 font-medium text-xs sm:text-sm">
                    --- Showing result- ({resultCount})
                </span>
            </div>

            {/* Right Side: Sort Dropdown */}
            <div className="relative w-full sm:w-auto" ref={dropdownRef}>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-between w-full sm:min-w-[160px] bg-slate-50 hover:bg-slate-100 border border-transparent hover:border-slate-200 rounded-xl px-4 py-2.5 transition-all duration-200"
                >
                    <div className="flex flex-col items-start text-left">
                        <span className="text-[10px] text-slate-400 font-medium uppercase tracking-wide">
                            Sort By
                        </span>
                        <span className="text-sm font-semibold text-slate-800">
                            {selectedSort}
                        </span>
                    </div>
                    <ChevronDown
                        size={18}
                        className={`text-slate-800 ml-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    />
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                    <div className="absolute right-0 mt-2 w-full sm:min-w-[160px] bg-white border border-gray-100 rounded-xl shadow-lg z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100">
                        <ul className="py-1">
                            {sortOptions.map((option) => (
                                <li key={option}>
                                    <button
                                        onClick={() => handleSelect(option)}
                                        className={`w-full text-left px-4 py-2.5 text-sm transition-colors
                      ${selectedSort === option
                                                ? "bg-[#6b2c5b] text-white font-medium"
                                                : "text-slate-600 hover:bg-slate-50"
                                            }
                    `}
                                    >
                                        {option}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Property;