"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { GoogleButton, AppleButton, EmailButton } from "@/components/auth/SocialAuthButtons";

const LoginPage = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 justify-start items-center lg:justify-start  lg:items-stretch pt-12 lg:pt-0">
            {/* Left side */}
            <div className="w-full lg:w-[40%] flex flex-col justify-center items-center px-14 sm:px-12 lg:px-20 py-8 lg:py-6 lg:ml-24 lg:-mr-6">
                <div className="w-full max-w-md flex flex-col items-center">
                    {/* Logo */}
                    <Image src="/wiztech-logo.png" width={80} height={64} alt="wiztech-logo" className="mb-3 md:-mb-5 sm:w-[100px] sm:h-[80px] lg:w-[120px] lg:h-[96px] object-contain" />

                    {/* Title */}
                    <h2 className="text-xl sm:text-2xl font-bold mb-2 text-gray-900">Create New Account</h2>

                    {/* Subtitle */}
                    <p className="text-gray-600 mb-6 text-center text-xs sm:text-sm">
                        Let&apos;s login to grab amazing deals
                    </p>

                    {/* Auth buttons */}
                    <div className="flex flex-col gap-3 w-full">
                        <GoogleButton />
                        <AppleButton />
                        <EmailButton />
                    </div>

                    {/* Sign up link */}
                    <p className="mt-6 text-xs sm:text-sm text-gray-600">
                        Don&apos;t have an account? <span onClick={() => router.push('/auth/signup')} className="text-blue-600 font-semibold cursor-pointer hover:underline">Sign Up</span>
                    </p>
                </div>
            </div>

            {/* Right side */}
            <div className="hidden lg:flex w-full lg:w-[50%] justify-center items-center p-6 sm:p-8">
                <div className="relative w-full max-w-2xl h-[300px] sm:h-[400px] lg:h-[560px]">
                    <Image
                        src="/login-image.png"
                        alt="Login Illustration"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
