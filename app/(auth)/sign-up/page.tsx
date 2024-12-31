"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { Eye, EyeOff } from 'lucide-react'
// import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

interface SignUpFormData {
    name: string
    firstName: string
    lastName: string
    password: string
    confirmPassword: string
    accountType: "buyer" | "supplier"
}

export default function SignUpPage() {
    //   const router = useRouter()
    const [showPassword, setShowPassword] = React.useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false)

    const { register, handleSubmit, watch, formState: { errors } } = useForm<SignUpFormData>({
        defaultValues: {
            accountType: "buyer"
        }
    })

    const password = watch("password")

    const onSubmit = async (data: SignUpFormData) => {
        // Handle sign up logic here
        console.log(data)
    }

    return (
        <div>
            <h1 className="text-2xl font-semibold text-center mb-6">Create new account</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                        id="name"
                        {...register("name", { required: "Name is required" })}
                        className="w-full"
                    />
                    {errors.name && (
                        <span className="text-sm text-red-500">{errors.name.message}</span>
                    )}
                </div>

                <div>
                    <Label htmlFor="firstName">First name</Label>
                    <Input
                        id="firstName"
                        {...register("firstName", { required: "First name is required" })}
                        className="w-full"
                    />
                    {errors.firstName && (
                        <span className="text-sm text-red-500">{errors.firstName.message}</span>
                    )}
                </div>

                <div>
                    <Label htmlFor="lastName">Last name</Label>
                    <Input
                        id="lastName"
                        {...register("lastName", { required: "Last name is required" })}
                        className="w-full"
                    />
                    {errors.lastName && (
                        <span className="text-sm text-red-500">{errors.lastName.message}</span>
                    )}
                </div>

                <div>
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                        <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
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
                        defaultValue="buyer"
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

