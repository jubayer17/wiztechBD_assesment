"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface PropertyImageGalleryProps {
    isOpen: boolean;
    onClose: () => void;
    mainImage: string;
    gallery: string[];
    title: string;
}

const PropertyImageGallery: React.FC<PropertyImageGalleryProps> = ({
    isOpen,
    onClose,
    mainImage,
    gallery,
    title,
}) => {
    // Reset selectedImage to mainImage when modal opens
    const [selectedImage, setSelectedImage] = useState(mainImage);

    // Update selectedImage when modal opens with a new property
    React.useEffect(() => {
        if (isOpen) {
            setSelectedImage(mainImage);
        }
    }, [isOpen, mainImage]);

    // Combine main image with gallery images (handle undefined/null gallery)
    const allImages = [mainImage, ...(gallery || [])];

    console.log('Gallery Debug:', {
        mainImage,
        galleryLength: gallery?.length || 0,
        allImagesLength: allImages.length,
        allImages
    });

    if (!isOpen) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop overlay */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
                    />

                    {/* Gallery modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        onClick={onClose}
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="relative bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden"
                        >
                            {/* Close button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
                            >
                                <X className="w-5 h-5 text-gray-700" />
                            </button>

                            {/* Main selected image */}
                            <div className="relative w-full h-[60vh] bg-gray-100">
                                <Image
                                    src={selectedImage}
                                    alt={title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Thumbnail gallery */}
                            <div className="p-4 bg-white border-t border-gray-100">
                                <div className="flex gap-3 overflow-x-auto no-scrollbar">
                                    {allImages.map((img, index) => (
                                        <motion.button
                                            key={index}
                                            onClick={() => setSelectedImage(img)}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className={`relative shrink-0 w-24 h-24 rounded-xl overflow-hidden border-3 transition-all duration-200 ${selectedImage === img
                                                ? "border-purple-600 shadow-lg ring-2 ring-purple-600 ring-offset-2"
                                                : "border-gray-200 hover:border-gray-300"
                                                }`}
                                        >
                                            <Image
                                                src={img}
                                                alt={`${title} - Image ${index + 1}`}
                                                fill
                                                className="object-cover"
                                            />
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default PropertyImageGallery;
