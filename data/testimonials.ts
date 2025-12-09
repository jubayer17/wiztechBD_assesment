export interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    image: string;
    videoThumbnail: string;
    tags: string[];
    testimonial: string;
    earnings: string;
    earningsLabel: string;
    rating: number;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Iva Ryan",
        role: "Marketing manager",
        company: "Adobe",
        image: "/small-frame.png",
        videoThumbnail: "/big-frame.png",
        tags: ["Content Creator", "Youtuber", "Growth Expert"],
        testimonial: "I recently had the opportunity to use the platform, and I must say, the feature that allows you to set your own commission is a game changer!",
        earnings: "$2M",
        earningsLabel: "EARNED IN HELENJUL",
        rating: 5
    },
    {
        id: 2,
        name: "John Smith",
        role: "Product Designer",
        company: "Google",
        image: "/small-frame.png",
        videoThumbnail: "/big-frame.png",
        tags: ["Designer", "Creator", "Entrepreneur"],
        testimonial: "The platform has transformed how I manage my digital products. The commission structure is incredibly flexible and fair.",
        earnings: "$1.5M",
        earningsLabel: "EARNED IN 6 MONTHS",
        rating: 5
    },
    {
        id: 3,
        name: "Sarah Johnson",
        role: "Content Strategist",
        company: "Meta",
        image: "/small-frame.png",
        videoThumbnail: "/big-frame.png",
        tags: ["Strategist", "Writer", "Coach"],
        testimonial: "Amazing experience! The tools provided are exactly what modern creators need to scale their business efficiently.",
        earnings: "$3M",
        earningsLabel: "EARNED THIS YEAR",
        rating: 5
    },
    {
        id: 4,
        name: "Mike Chen",
        role: "Growth Hacker",
        company: "Shopify",
        image: "/small-frame.png",
        videoThumbnail: "/big-frame.png",
        tags: ["Growth", "Marketing", "Sales"],
        testimonial: "This platform has exceeded all my expectations. The revenue sharing model is transparent and rewarding.",
        earnings: "$2.8M",
        earningsLabel: "EARNED IN 8 MONTHS",
        rating: 5
    }
];
