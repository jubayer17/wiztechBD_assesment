"use client"
import React from 'react';
import PropertyCard from './PropertyCard';
import { properties } from '@/data/properties';

interface PropertyListProps {
    selectedSuburbs?: string[];
    selectedTypes?: string[];
    selectedAmenities?: string[];
    currentPage?: number;
    itemsPerPage?: number;
    sortBy?: string;
    minRent?: number;
    maxRent?: number;
}

const PropertyList: React.FC<PropertyListProps> = ({
    selectedSuburbs = [],
    selectedTypes = [],
    selectedAmenities = [],
    currentPage = 1,
    itemsPerPage = 6,
    sortBy = "Low to High",
    minRent = 0,
    maxRent = 1000000
}) => {
    // Filter properties based on selections
    const filteredProperties = properties.filter((property) => {
        // If no filters selected, show all
        const suburbMatch = selectedSuburbs.length === 0 || selectedSuburbs.includes(property.suburb);
        const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(property.propertyType);

        // Check if property has ALL selected amenities
        const amenitiesMatch = selectedAmenities.length === 0 ||
            selectedAmenities.every(amenity => property.amenities.includes(amenity));

        // Check if property price is within range
        const rentMatch = property.price >= minRent && property.price <= maxRent;

        return suburbMatch && typeMatch && amenitiesMatch && rentMatch;
    });

    // Sort properties based on selected sort option
    const sortedProperties = [...filteredProperties].sort((a, b) => {
        switch (sortBy) {
            case "Low to High":
                return a.price - b.price;
            case "High to Low":
                return b.price - a.price;
            case "Newest First":
                return b.id - a.id;
            case "Oldest First":
                return a.id - b.id;
            default:
                return 0;
        }
    });

    // Calculate pagination
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedProperties = sortedProperties.slice(startIndex, endIndex);

    return (
        <div className="w-full px-4 sm:px-6 lg:px-8 py-3">
            {displayedProperties.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                    <p className="text-base sm:text-lg">No properties found matching your filters.</p>
                    <p className="text-xs sm:text-sm mt-2">Try adjusting your search criteria.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
                    {displayedProperties.map((property) => (
                        <PropertyCard
                            key={property.id}
                            image={property.image}
                            gallery={property.gallery}
                            beds={property.beds}
                            baths={property.baths}
                            sqft={property.sqft}
                            title={property.title}
                            price={property.price}
                            period={property.period}
                            location={property.location}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default PropertyList;
