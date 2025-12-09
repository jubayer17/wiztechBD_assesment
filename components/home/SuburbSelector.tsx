"use client"
import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface SuburbSelectorProps {
    initialOptions?: string[];
    onChange?: (selected: string[]) => void;
    selectedSuburbs?: string[];
}

const SuburbSelector: React.FC<SuburbSelectorProps> = ({
    initialOptions,
    onChange,
    selectedSuburbs = []
}) => {

    const defaultOptions = [
        "Eshelby Drive, Cranbrook",
        "2- 6 Eshelby Dr, Cannonvale",
        "59/3 Eshelby Drive Cannonvale"
    ];

    const options = initialOptions || defaultOptions;


    const [selectedItems, setSelectedItems] = useState<string[]>(selectedSuburbs);

    // Update internal state when prop changes
    React.useEffect(() => {
        setSelectedItems(selectedSuburbs);
    }, [selectedSuburbs]);

    const handleToggle = (option: string) => {
        let newSelected: string[];

        if (selectedItems.includes(option)) {
            // Remove if already selected
            newSelected = selectedItems.filter((item) => item !== option);
        } else {
            // Add if not selected
            newSelected = [...selectedItems, option];
        }

        setSelectedItems(newSelected);
        if (onChange) onChange(newSelected);
    };

    return (
        <div className="w-full bg-white px-4 sm:px-6 py-4 rounded-3xl border border-gray-100 shadow-sm">
            {/* Header */}
            <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-3">
                Suburb
            </h3>

            {/* Divider Line */}
            <div className="h-px w-full bg-slate-100 mb-4"></div>

            {/* List */}
            <div className="flex flex-col gap-3">
                {options.map((option, index) => {
                    const isSelected = selectedItems.includes(option);

                    return (
                        <label
                            key={index}
                            className="group flex items-center gap-3 cursor-pointer select-none"
                        >
                            {/* Hidden Native Checkbox */}
                            <input
                                type="checkbox"
                                className="hidden"
                                checked={isSelected}
                                onChange={() => handleToggle(option)}
                            />

                            {/* Custom Checkbox UI */}
                            <div
                                className={`
                  w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-200
                  ${isSelected
                                        ? "bg-[#6b2c5b] border-[#6b2c5b]" // Active: Wine Color
                                        : "bg-white border-slate-400 group-hover:border-[#6b2c5b]" // Inactive: Gray/White
                                    }
                `}
                            >
                                <Check
                                    size={14}
                                    className={`text-white transform transition-transform duration-200 ${isSelected ? "scale-100" : "scale-0"}`}
                                    strokeWidth={3}
                                />
                            </div>

                            {/* Text Label */}
                            <span className={`text-[15px] ${isSelected ? "text-slate-900 font-medium" : "text-slate-700"}`}>
                                {option}
                            </span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

export default SuburbSelector;