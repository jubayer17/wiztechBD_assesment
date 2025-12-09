export interface ToolItem {
    id: number;
    title: string;
    description: string;
    icon: string;
    enterprise?: boolean;
}

export const tools: ToolItem[] = [
    {
        id: 1,
        title: "Payments",
        description:
            "Responsibly sourced and eco-friendly fabrics for a better tomorrow.",
        icon: "💳",
    },
    {
        id: 2,
        title: "Analytics",
        description:
            "Understand your growth with smart, built-in analytics.",
        icon: "📊",
    },
    {
        id: 3,
        title: "Newsletters",
        description:
            "Build your audience with engaging, branded newsletters.",
        icon: "📰",
    },
    {
        id: 4,
        title: "Pages",
        description:
            "Showcase your expertise with a personal profile that sells for you.",
        icon: "📄",
    },
    {
        id: 5,
        title: "Contact",
        description:
            "Organize your contacts and turn them into your most valuable asset.",
        icon: "👤",
    },
    {
        id: 6,
        title: "Emails",
        description:
            "Showcase your expertise with a personal profile that sells for you.",
        icon: "✉️",
    },
    {
        id: 7,
        title: "Co-sell network",
        description:
            "Collaborate with others to sell more without extra effort.",
        icon: "🤝",
    },
    {
        id: 8,
        title: "Enterprise plan",
        description:
            "Full white-label platform hosted on a dedicated, auto-scaling server. Includes branding freedom, feature protection, and 24/7 service availability.",
        icon: "🏢",
        enterprise: true,
    },
];
