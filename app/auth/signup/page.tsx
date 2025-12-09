"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema } from "@/validations/auth";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { GoogleButton, AppleButton } from "@/components/auth/SocialAuthButtons";
import Image from "next/image";
import { useRouter } from "next/navigation";

type SignupFormValues = z.infer<typeof signupSchema>;

const SignUpPage = () => {
    const router = useRouter();
    const form = useForm<SignupFormValues>({
        resolver: zodResolver(signupSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (data: SignupFormValues) => {
        console.log(data);

    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-gray-50 justify-center items-center lg:justify-start lg:items-stretch">
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
                    </div>

                    {/* Or divider */}
                    <div className="flex items-center gap-4 w-full my-5">
                        <div className="flex-1 border-t border-gray-300"></div>
                        <span className="text-gray-500 text-sm">or</span>
                        <div className="flex-1 border-t border-gray-300"></div>
                    </div>

                    {/* Email password form */}
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3 w-full">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm text-gray-700">Email</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="email"
                                                placeholder="rownok@gmail.com"
                                                className="h-10"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-sm text-gray-700">Password</FormLabel>
                                        <FormControl>
                                            <Input
                                                {...field}
                                                type="password"
                                                placeholder="Enter your password"
                                                className="h-10"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button type="submit" className="h-10 text-base bg-[#8B1538] hover:bg-[#6B0F2A] text-white">
                                Sign Up
                            </Button>
                        </form>
                    </Form>

                    {/* sign up text */}
                    <p className="mt-6 text-xs sm:text-sm text-gray-600">
                        Already have an account? <span onClick={() => router.push('/auth/login')} className="text-blue-600 font-semibold cursor-pointer hover:underline">Login</span>
                    </p>
                </div>
            </div>

            {/* Right Section */}
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

export default SignUpPage;
