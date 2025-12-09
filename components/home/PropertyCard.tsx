"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Bed, Bath, Maximize2 } from 'lucide-react';
import PropertyImageGallery from './PropertyImageGallery';

// TypeScript interface defining the shape of property data
interface PropertyCardProps {
    image: string;
    gallery: string[];
    beds: number;
    baths: number;
    sqft: number;
    title: string;
    price: number;
    period: string;
    location: string;
}

// Reusable property card component displaying rental property information
const PropertyCard: React.FC<PropertyCardProps> = ({
    image,
    gallery,
    beds,
    baths,
    sqft,
    title,
    price,
    period,
    location,
}) => {
    const [isGalleryOpen, setIsGalleryOpen] = useState(false);

    return (
        <>
            {/* Card container with smooth shadow transitions on hover */}
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 w-full max-w-md mx-auto">
                {/* Property thumbnail image - clickable to open gallery */}
                <div
                    className="relative w-full h-48 sm:h-56 md:h-64 cursor-pointer group"
                    onClick={() => setIsGalleryOpen(true)}
                >
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {/* Hover overlay with text */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            View Gallery
                        </span>
                    </div>
                </div>

                {/* Property details and information */}
                <div className="p-4 sm:p-5">
                    {/* Property specifications: bedrooms, bathrooms, and square footage */}
                    <div className="flex items-center gap-2 sm:gap-4 text-gray-500 text-xs sm:text-sm mb-3 flex-wrap">
                        <div className="flex items-center gap-1 sm:gap-1.5">
                            <Bed size={16} className="sm:w-[18px] sm:h-[18px]" />
                            <span>Bed- {beds.toString().padStart(2, '0')}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-1.5">
                            <Bath size={16} className="sm:w-[18px] sm:h-[18px]" />
                            <span>Bath- {baths.toString().padStart(2, '0')}</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-1.5">
                            <Maximize2 size={16} className="sm:w-[18px] sm:h-[18px]" />
                            <span>{sqft}sqft</span>
                        </div>
                    </div>

                    {/* Property name/address */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 truncate">
                        {title}
                    </h3>

                    {/* Pricing information and location */}
                    <div className="flex justify-between items-center flex-wrap gap-2">
                        <div>
                            <span className="text-xl sm:text-2xl font-bold text-gray-900">
                                ${price}
                            </span>
                            <span className="text-gray-500 text-xs sm:text-sm">/{period}</span>
                        </div>
                        <span className="text-gray-500 text-xs sm:text-sm truncate">
                            {location}
                        </span>
                    </div>
                </div>
            </div>

            {/* Image gallery modal popup */}
            <PropertyImageGallery
                isOpen={isGalleryOpen}
                onClose={() => setIsGalleryOpen(false)}
                mainImage={image}
                gallery={gallery}
                title={title}
            />
        </>
    );
};

export default PropertyCard;
