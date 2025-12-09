import React from "react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export const GoogleButton = () => {
    return (
        <Button
            variant="outline"
            className="flex items-center justify-center gap-2 h-10 text-base hover:bg-gray-50 hover:border-gray-300 w-full transition-all duration-300 hover:shadow-md"
        >
            <FcGoogle size={20} /> Continue with Google
        </Button>
    );
};

export const AppleButton = () => {
    return (
        <Button
            variant="outline"
            className="flex items-center justify-center gap-2 h-10 text-base hover:bg-gray-50 hover:border-gray-300 w-full transition-all duration-300 hover:shadow-md"
        >
            <FaApple size={20} /> Continue with Apple
        </Button>
    );
};

export const EmailButton = () => {
    return (
        <Button
            variant="outline"
            className="flex items-center justify-center gap-2 h-10 text-base hover:bg-gray-50 hover:border-gray-300 w-full transition-all duration-300 hover:shadow-md"
        >
            <HiOutlineMail size={20} /> Continue with Email / Phone
        </Button>
    );
};
