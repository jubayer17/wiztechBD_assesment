"use client"
import React, { useState } from 'react';
import { Check, Minus } from 'lucide-react';

interface AmenitiesSelectorProps {
    initialSelection?: string[];
    onChange?: (selected: string[]) => void;
    selectedAmenities?: string[];
}

const AmenitiesSelector: React.FC<AmenitiesSelectorProps> = ({
    initialSelection,
    onChange,
    selectedAmenities: controlledSelectedAmenities
}) => {
    // Full list of amenities
    const allAmenities = [
        "Pet-friendly",
        "Parking",
        "Gym",
        "Private Pool",
        "Air Conditioning",
        "Spa",
        "24/7 Security",
        "Balcony"
    ];

    // State for selection - start empty for dynamic filtering
    const [selectedAmenities, setSelectedAmenities] = useState<string[]>(
        controlledSelectedAmenities || initialSelection || []
    );

    // Update internal state when prop changes
    React.useEffect(() => {
        setSelectedAmenities(controlledSelectedAmenities || []);
    }, [controlledSelectedAmenities]);

    // State for "See more" expansion
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = (item: string) => {
        let newSelection: string[];
        if (selectedAmenities.includes(item)) {
            newSelection = selectedAmenities.filter((t) => t !== item);
        } else {
            newSelection = [...selectedAmenities, item];
        }
        setSelectedAmenities(newSelection);
        if (onChange) onChange(newSelection);
    };

    // Determine which items to show
    const visibleItems = isExpanded ? allAmenities : allAmenities.slice(0, 4);

    return (
        <div className="w-full bg-white px-4 sm:px-6 py-4 rounded-3xl border border-gray-100 shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Amenities
                </h3>
                <button className="text-slate-900 hover:text-slate-600 transition-colors">
                    <Minus size={20} strokeWidth={2.5} />
                </button>
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-slate-100 mb-4"></div>

            {/* Options List */}
            <div className="flex flex-col gap-3">
                {visibleItems.map((item, index) => {
                    const isSelected = selectedAmenities.includes(item);

                    return (
                        <label
                            key={index}
                            className="group flex items-center gap-3 cursor-pointer select-none"
                        >
                            <input
                                type="checkbox"
                                className="hidden"
                                checked={isSelected}
                                onChange={() => handleToggle(item)}
                            />

                            {/* Custom Checkbox */}
                            <div
                                className={`
                  w-5 h-5 rounded-md border flex items-center justify-center transition-all duration-200
                  ${isSelected
                                        ? "bg-[#6b2c5b] border-[#6b2c5b]"
                                        : "bg-white border-slate-400 group-hover:border-[#6b2c5b]"
                                    }
                `}
                            >
                                <Check
                                    size={14}
                                    className={`text-white transform transition-transform duration-200 ${isSelected ? "scale-100" : "scale-0"}`}
                                    strokeWidth={3}
                                />
                            </div>

                            {/* Label Text */}
                            <span className={`text-[15px] ${isSelected ? "text-slate-900 font-medium" : "text-slate-700"}`}>
                                {item}
                            </span>
                        </label>
                    );
                })}
            </div>

            {/* See More Link */}
            <div className="mt-4">
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-[#6b2c5b] text-sm font-medium hover:underline focus:outline-none"
                >
                    {isExpanded ? "see less" : "see more"}
                </button>
            </div>
        </div>
    );
};

export default AmenitiesSelector;