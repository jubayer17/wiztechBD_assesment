"use client"
import React, { useState } from 'react';
import { Check, Minus } from 'lucide-react';

interface PropertyTypeSelectorProps {
    initialSelection?: string[];
    onChange?: (selected: string[]) => void;
    selectedTypes?: string[];
}

const PropertyTypeSelector: React.FC<PropertyTypeSelectorProps> = ({
    initialSelection,
    onChange,
    selectedTypes: controlledSelectedTypes
}) => {
    const propertyTypes = [
        "House",
        "Land",
        "Apartment", // Corrected spelling from 'Appartment'
        "Town House",
        "Villa",     // Corrected spelling from 'Vila'
        "Acreage"
    ];

    // Default selection - start empty for dynamic filtering
    const [selectedTypes, setSelectedTypes] = useState<string[]>(
        controlledSelectedTypes || initialSelection || []
    );

    // Update internal state when prop changes
    React.useEffect(() => {
        setSelectedTypes(controlledSelectedTypes || []);
    }, [controlledSelectedTypes]);

    const handleToggle = (type: string) => {
        let newSelection: string[];
        if (selectedTypes.includes(type)) {
            newSelection = selectedTypes.filter((t) => t !== type);
        } else {
            newSelection = [...selectedTypes, type];
        }
        setSelectedTypes(newSelection);
        if (onChange) onChange(newSelection);
    };

    return (
        <div className="w-full bg-white px-4 sm:px-6 py-4 rounded-3xl border border-gray-100 shadow-sm">
            {/* Header with Collapse Icon */}
            <div className="flex items-center justify-between mb-3">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    Property Type
                </h3>
                <button className="text-slate-900 hover:text-slate-600 transition-colors">
                    <Minus size={20} strokeWidth={2.5} />
                </button>
            </div>

            {/* Divider Line */}
            <div className="h-px w-full bg-slate-100 mb-4"></div>

            {/* Options List */}
            <div className="flex flex-col gap-3">
                {propertyTypes.map((type, index) => {
                    const isSelected = selectedTypes.includes(type);

                    return (
                        <label
                            key={index}
                            className="group flex items-center gap-3 cursor-pointer select-none"
                        >
                            <input
                                type="checkbox"
                                className="hidden"
                                checked={isSelected}
                                onChange={() => handleToggle(type)}
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
                                {type}
                            </span>
                        </label>
                    );
                })}
            </div>
        </div>
    );
};

export default PropertyTypeSelector;