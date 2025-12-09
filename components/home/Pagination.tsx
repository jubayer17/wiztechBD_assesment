"use client"
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
    currentPage?: number;
    totalPages?: number;
    onPageChange?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage = 1,
    totalPages = 10,
    onPageChange
}) => {
    const handlePageClick = (page: number) => {
        if (onPageChange) onPageChange(page);
    };

    const renderPageNumbers = () => {
        const pages: React.ReactElement[] = [];

        if (totalPages === 0) return pages;

        // Always show first page
        pages.push(
            <button
                key={1}
                onClick={() => handlePageClick(1)}
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center font-medium text-sm sm:text-base transition-all duration-300 ${currentPage === 1
                    ? 'bg-purple-900 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-gray-100 hover:scale-105'
                    }`}
            >
                1
            </button>
        );

        if (totalPages === 1) return pages;

        // Show page 2
        pages.push(
            <button
                key={2}
                onClick={() => handlePageClick(2)}
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center font-medium text-sm sm:text-base transition-all ${currentPage === 2
                    ? 'bg-purple-900 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                    }`}
            >
                2
            </button>
        );

        if (totalPages === 2) return pages;

        // Show page 3
        pages.push(
            <button
                key={3}
                onClick={() => handlePageClick(3)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center font-medium transition-all ${currentPage === 3
                    ? 'bg-purple-900 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                    }`}
            >
                3
            </button>
        );

        if (totalPages === 3) return pages;

        // For 4 pages, show all 4
        if (totalPages === 4) {
            pages.push(
                <button
                    key={4}
                    onClick={() => handlePageClick(4)}
                    className={`w-10 h-10 rounded-lg flex items-center justify-center font-medium transition-all ${currentPage === 4
                        ? 'bg-purple-900 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                        }`}
                >
                    4
                </button>
            );
            return pages;
        }

        // For 5+ pages, show ellipsis and last pages
        pages.push(
            <div key="ellipsis" className="w-10 h-10 flex items-center justify-center text-gray-500">
                ...
            </div>
        );

        // Show second to last page
        pages.push(
            <button
                key={totalPages - 1}
                onClick={() => handlePageClick(totalPages - 1)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center font-medium transition-all ${currentPage === totalPages - 1
                    ? 'bg-purple-900 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                    }`}
            >
                {totalPages - 1}
            </button>
        );

        // Show last page
        pages.push(
            <button
                key={totalPages}
                onClick={() => handlePageClick(totalPages)}
                className={`w-10 h-10 rounded-lg flex items-center justify-center font-medium transition-all ${currentPage === totalPages
                    ? 'bg-purple-900 text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                    }`}
            >
                {totalPages}
            </button>
        );

        return pages;
    };

    return (
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 mx-4 sm:mx-6 lg:mx-10 gap-4 sm:gap-0">
            {/* Previous Button */}
            <button
                onClick={() => currentPage > 1 && handlePageClick(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center gap-2 px-3 sm:px-4 h-9 sm:h-10 rounded-lg font-medium text-sm sm:text-base transition-all ${currentPage === 1
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100'
                    }`}
            >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="hidden sm:inline">Previous</span>
                <span className="sm:hidden">Prev</span>
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-1">
                {renderPageNumbers()}
            </div>

            {/* Next Button */}
            <button
                onClick={() => currentPage < totalPages && handlePageClick(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-2 px-3 sm:px-4 h-9 sm:h-10 rounded-lg font-medium text-sm sm:text-base transition-all ${currentPage === totalPages
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-gray-700 hover:bg-gray-100'
                    }`}
            >
                Next
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
        </div>
    );
};

export default Pagination;
