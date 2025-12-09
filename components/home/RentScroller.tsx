"use client"
import React, { useState, useEffect, useRef, useCallback } from 'react';

interface RentScrollerProps {
    min?: number;
    max?: number;
    minValue?: number;
    maxValue?: number;
    onChange?: (values: { min: number; max: number }) => void;
}

const RentScroller: React.FC<RentScrollerProps> = ({
    min = 0,
    max = 1000000,
    minValue = 300,
    maxValue = 670000,
    onChange,
}) => {
    const [minVal, setMinVal] = useState(minValue);
    const [maxVal, setMaxVal] = useState(maxValue);
    const minValRef = useRef(minVal);
    const maxValRef = useRef(maxVal);
    const range = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    // Convert to percentage
    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    // Handle manual typing in input boxes
    const handleMinInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        // Allow empty string while typing
        if (inputValue === '') {
            setMinVal(0);
            return;
        }
        const value = Math.max(0, Math.min(Number(inputValue), maxVal - 100));
        setMinVal(value);
        minValRef.current = value;
    };

    const handleMinBlur = () => {
        // Ensure valid value on blur
        const value = Math.max(0, Math.min(minVal, maxVal - 100));
        setMinVal(value);
        minValRef.current = value;
        if (onChange) onChange({ min: value, max: maxVal });
    };

    const handleMinKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const value = Math.max(0, Math.min(minVal, maxVal - 100));
            setMinVal(value);
            minValRef.current = value;
            if (onChange) onChange({ min: value, max: maxVal });
            // Blur the input to remove focus
            (e.target as HTMLInputElement).blur();
        }
    };

    const handleMaxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value;
        // Allow empty string while typing
        if (inputValue === '') {
            setMaxVal(0);
            return;
        }
        const value = Math.max(minVal + 100, Math.min(Number(inputValue), max));
        setMaxVal(value);
        maxValRef.current = value;
    };

    const handleMaxBlur = () => {
        // Ensure valid value on blur
        const value = Math.max(minVal + 100, Math.min(maxVal, max));
        setMaxVal(value);
        maxValRef.current = value;
        if (onChange) onChange({ min: minVal, max: value });
    };

    const handleMaxKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            const value = Math.max(minVal + 100, Math.min(maxVal, max));
            setMaxVal(value);
            maxValRef.current = value;
            if (onChange) onChange({ min: minVal, max: value });
            // Blur the input to remove focus
            (e.target as HTMLInputElement).blur();
        }
    };

    const handleMinSlider = (value: number) => {
        const newValue = Math.max(0, Math.min(value, maxVal - 100));
        setMinVal(newValue);
        minValRef.current = newValue;
        isDragging.current = true;
    };

    const handleMaxSlider = (value: number) => {
        const newValue = Math.max(minVal + 100, Math.min(value, max));
        setMaxVal(newValue);
        maxValRef.current = newValue;
        isDragging.current = true;
    };

    const handleSliderEnd = () => {
        if (isDragging.current && onChange) {
            onChange({ min: minVal, max: maxVal });
            isDragging.current = false;
        }
    };

    return (
        <div className="w-full bg-white px-4 sm:px-6 py-4 sm:py-6 rounded-3xl shadow-sm border border-gray-100">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-base sm:text-lg font-bold text-gray-900">Rent Range</h3>
            </div>

            {/* Slider Container */}
            <div className="relative w-full h-8 mb-6 flex items-center">
                {/* Min Input (Ghost) */}
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={500}
                    value={minVal}
                    onChange={(event) => handleMinSlider(Number(event.target.value))}
                    onMouseUp={handleSliderEnd}
                    onTouchEnd={handleSliderEnd}
                    className="thumb thumb--left w-full absolute pointer-events-auto"
                    style={{
                        zIndex: minVal > max - 100 ? "5" : "3",
                        height: 0,
                        outline: 'none'
                    }}
                />

                {/* Max Input (Ghost) */}
                <input
                    type="range"
                    min={min}
                    max={max}
                    step={500}
                    value={maxVal}
                    onChange={(event) => handleMaxSlider(Number(event.target.value))}
                    onMouseUp={handleSliderEnd}
                    onTouchEnd={handleSliderEnd}
                    className="thumb thumb--right w-full absolute pointer-events-auto"
                    style={{
                        zIndex: "4",
                        height: 0,
                        outline: 'none'
                    }}
                />

                {/* Visual Track */}
                <div className="relative w-full">
                    {/* Background Track */}
                    <div className="absolute w-full h-1.5 bg-gray-200 rounded-full z-1"></div>

                    {/* Active Range (Colored) */}
                    <div
                        ref={range}
                        className="absolute h-1.5 bg-[#6B1B5A] rounded-full z-2"
                    ></div>
                </div>
            </div>

            {/* Display Values */}
            <div className="flex items-center justify-between gap-4">
                {/* Min Box */}
                <div className="flex-1 bg-white border border-gray-200 rounded-xl p-3 hover:border-gray-300 transition-colors">
                    <label className="block text-xs text-gray-500 font-medium mb-1">Minimum</label>
                    <div className="flex items-center">
                        <span className="text-gray-900 font-bold text-base">$</span>
                        <input
                            type="number"
                            value={minVal}
                            onChange={handleMinInput}
                            onBlur={handleMinBlur}
                            onKeyDown={handleMinKeyDown}
                            className="w-full bg-transparent outline-none text-gray-900 font-bold text-base ml-1"
                        />
                    </div>
                </div>

                {/* Max Box */}
                <div className="flex-1 bg-white border border-gray-200 rounded-xl p-3 hover:border-gray-300 transition-colors">
                    <label className="block text-xs text-gray-500 font-medium mb-1">Maximum</label>
                    <div className="flex items-center">
                        <span className="text-gray-900 font-bold text-base">$</span>
                        <input
                            type="number"
                            value={maxVal}
                            onChange={handleMaxInput}
                            onBlur={handleMaxBlur}
                            onKeyDown={handleMaxKeyDown}
                            className="w-full bg-transparent outline-none text-gray-900 font-bold text-base ml-1"
                        />
                    </div>
                </div>
            </div>

            {/* Styling for the range thumbs */}
            <style>{`
        /* Webkit (Chrome, Safari, Edge) */
        .thumb::-webkit-slider-thumb {
          -webkit-appearance: none;
          pointer-events: all;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 5px solid #6B1B5A;
          background-color: white;
          cursor: grab;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
          transition: transform 0.2s;
        }
        
        .thumb::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        }

        .thumb::-webkit-slider-thumb:active {
          cursor: grabbing;
          transform: scale(1.05);
        }

        /* Firefox */
        .thumb::-moz-range-thumb {
          pointer-events: all;
          width: 24px;
          height: 24px;
          border-radius: 50%;
          border: 5px solid #6B1B5A;
          background-color: white;
          cursor: grab;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
          transition: transform 0.2s;
        }
        
        .thumb::-moz-range-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
        }

        .thumb::-moz-range-thumb:active {
          cursor: grabbing;
        }

        /* Remove default focus outline */
        .thumb:focus {
          outline: none;
        }
      `}</style>
        </div>
    );
};

export default RentScroller;