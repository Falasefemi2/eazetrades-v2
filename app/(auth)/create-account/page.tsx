"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { Eye, EyeOff } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import logo from "../../../public/images/eazetrades-logo-3 3.png"

interface CreateAccountFormData {
    businessName: string
    businessEmail: string
    password: string
    confirmPassword: string
    accountType: "buyer" | "supplier"
}

export default function CreateAccountPage() {
    const [showPassword, setShowPassword] = React.useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)

    const { register, handleSubmit, watch, formState: { errors } } = useForm<CreateAccountFormData>({
        defaultValues: {
            accountType: "supplier"
        }
    })

    const password = watch("password")

    const onSubmit = async (data: CreateAccountFormData) => {
        // Handle account creation
        console.log(data)
    }

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="flex items-center gap-2 mb-6">
                <Image
                    src={logo}
                    alt="EAZETRADES"
                    width={24}
                    height={24}
                    className="w-6 h-6"
                />
                <span className="font-semibold">EAZETRADES</span>
            </div>

            <h1 className="text-2xl font-semibold mb-6">
                Create new account
            </h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <Label htmlFor="businessName">Business name</Label>
                    <Input
                        id="businessName"
                        placeholder="Placeholder"
                        {...register("businessName", { required: "Business name is required" })}
                        className="w-full"
                    />
                    {errors.businessName && (
                        <span className="text-sm text-red-500">{errors.businessName.message}</span>
                    )}
                </div>

                <div>
                    <Label htmlFor="businessEmail">Business email address</Label>
                    <Input
                        id="businessEmail"
                        type="email"
                        placeholder="Placeholder"
                        {...register("businessEmail", {
                            required: "Business email is required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address"
                            }
                        })}
                        className="w-full"
                    />
                    {errors.businessEmail && (
                        <span className="text-sm text-red-500">{errors.businessEmail.message}</span>
                    )}
                </div>

                <div>
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                        <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters"
                                }
                            })}
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

                <div>
                    <Label htmlFor="confirmPassword">Confirm password</Label>
                    <div className="relative">
                        <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Password"
                            {...register("confirmPassword", {
                                required: "Please confirm your password",
                                validate: value => value === password || "Passwords do not match"
                            })}
                            className="w-full pr-10"
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                            {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>
                    </div>
                    {errors.confirmPassword && (
                        <span className="text-sm text-red-500">{errors.confirmPassword.message}</span>
                    )}
                </div>

                <div>
                    <Label>Signing As</Label>
                    <RadioGroup
                        defaultValue="supplier"
                        {...register("accountType")}
                        className="flex gap-4 mt-2"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="buyer" id="buyer" />
                            <Label htmlFor="buyer">Buyer</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="supplier" id="supplier" />
                            <Label htmlFor="supplier">Supplier</Label>
                        </div>
                    </RadioGroup>
                </div>

                <Button
                    type="submit"
                    className="w-full bg-[#5F3AFB] hover:bg-[#4F2FEB]"
                >
                    Sign up
                </Button>
            </form>

            <p className="text-center text-sm mt-4">
                Already have an account?{" "}
                <Link href="/sign-in" className="text-[#5F3AFB] hover:underline">
                    Sign in
                </Link>
            </p>
        </div>
    )
}

