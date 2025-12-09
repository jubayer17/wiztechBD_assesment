"use client"
import { useState, useMemo } from 'react'
import AmenitiesSelector from '@/components/home/AmenitiesSelector'
import Navbar from '@/components/home/Navbar'
import Preference from '@/components/home/Preference'
import Property from '@/components/home/Property'
import PropertyTypeSelector from '@/components/home/PropertyTypeSelector'
import RentScroller from '@/components/home/RentScroller'
import SuburbSelector from '@/components/home/SuburbSelector'
import PropertyList from '@/components/home/PropertyList'
import Pagination from '@/components/home/Pagination'
import { properties } from '@/data/properties'
import HeroStatsSection from '@/components/home/HeroStatsSection'
import Footer from '@/components/home/Footer'
import EssentialTools from '@/components/home/EssentialTools'
import Testimonials from '@/components/home/Testimonials'
import RevenueStreamsSection from '@/components/home/RevenueStreamsSection'
import TrustedBySection from '@/components/home/TrustedBySection'

export default function Page() {
  const [selectedSuburbs, setSelectedSuburbs] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<string>("Low to High");
  const [minRent, setMinRent] = useState(300);
  const [maxRent, setMaxRent] = useState(670000);
  const itemsPerPage = 6;

  // Calculate filtered properties and total pages
  const { filteredCount, totalPages } = useMemo(() => {
    const filtered = properties.filter((property) => {
      const suburbMatch = selectedSuburbs.length === 0 || selectedSuburbs.includes(property.suburb);
      const typeMatch = selectedTypes.length === 0 || selectedTypes.includes(property.propertyType);
      const amenitiesMatch = selectedAmenities.length === 0 ||
        selectedAmenities.every(amenity => property.amenities.includes(amenity));
      const rentMatch = property.price >= minRent && property.price <= maxRent;
      return suburbMatch && typeMatch && amenitiesMatch && rentMatch;
    });
    return {
      filteredCount: filtered.length,
      totalPages: Math.ceil(filtered.length / itemsPerPage)
    };
  }, [selectedSuburbs, selectedTypes, selectedAmenities, minRent, maxRent]);

  // Reset all filters
  const handleResetFilters = () => {
    setSelectedSuburbs([]);
    setSelectedTypes([]);
    setSelectedAmenities([]);
    setMinRent(300);
    setMaxRent(670000);
    setCurrentPage(1);
    setSortBy("Low to High");
  };

  return (
    <div className="bg-[#f5f2ed] min-h-screen">
      <Navbar />
      <div className='flex flex-col lg:flex-row gap-4 lg:gap-6 px-4 sm:px-6 lg:px-12 py-4 sm:py-6'>
        {/* left section */}
        <div className='w-full lg:w-[26%] flex flex-col gap-4 lg:sticky lg:top-4 lg:self-start'>
          <Preference onReset={handleResetFilters} />
          <RentScroller
            key={`${minRent}-${maxRent}`}
            minValue={minRent}
            maxValue={maxRent}
            onChange={(values) => {
              setMinRent(values.min);
              setMaxRent(values.max);
              setCurrentPage(1);
            }}
          />
          <SuburbSelector selectedSuburbs={selectedSuburbs} onChange={(suburbs) => { setSelectedSuburbs(suburbs); setCurrentPage(1); }} />
          <PropertyTypeSelector selectedTypes={selectedTypes} onChange={(types) => { setSelectedTypes(types); setCurrentPage(1); }} />
          <AmenitiesSelector selectedAmenities={selectedAmenities} onChange={(amenities) => { setSelectedAmenities(amenities); setCurrentPage(1); }} />
        </div>
        {/* right section */}
        <div className='flex-1 flex flex-col gap-4'>
          <Property resultCount={filteredCount} onSortChange={setSortBy} />
          <PropertyList
            selectedSuburbs={selectedSuburbs}
            selectedTypes={selectedTypes}
            selectedAmenities={selectedAmenities}
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            sortBy={sortBy}
            minRent={minRent}
            maxRent={maxRent}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />

        </div>

      </div>
      <HeroStatsSection />
      <TrustedBySection />
      <RevenueStreamsSection />
      <Testimonials />

      <EssentialTools />
      <Footer />
    </div>
  )
}
