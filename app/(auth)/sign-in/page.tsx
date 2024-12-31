"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { Eye, EyeOff } from 'lucide-react'
// import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface SignInFormData {
    email: string
    password: string
}

export default function SignInPage() {
    //   const router = useRouter()
    const [showPassword, setShowPassword] = React.useState(false)

    const { register, handleSubmit, formState: { errors } } = useForm<SignInFormData>()

    const onSubmit = async (data: SignInFormData) => {
        // Handle sign in logic here
        console.log(data)
    }

    return (
        <div>
            <h1 className="text-2xl font-semibold text-center mb-6">Sign in</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        {...register("email", {
                            required: "Email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}
                        className="w-full"
                    />
                    {errors.email && (
                        <span className="text-sm text-red-500">{errors.email.message}</span>
                    )}
                </div>

                <div>
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                        <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            {...register("password", { required: "Password is required" })}
                            className="w-full pr-10"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                    {errors.password && (
                        <span className="text-sm text-red-500">{errors.password.message}</span>
                    )}
                </div>

                <Button
                    type="submit"
                    className="w-full bg-[#5F3AFB] hover:bg-[#4F2FEB]"
                >
                    Sign in
                </Button>
            </form>

            <p className="text-center text-sm mt-4">
                Don&apos;t have an account?{" "}
                <Link href="/sign-up" className="text-[#5F3AFB] hover:underline">
                    Sign up
                </Link>
            </p>
        </div>
    )
}

