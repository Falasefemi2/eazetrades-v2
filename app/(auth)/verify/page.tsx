"use client"

import * as React from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import logo from "../../../public/images/eazetrades-logo-3 3.png"

export default function VerifyPage() {
    const router = useRouter()
    const [otp, setOtp] = React.useState<string[]>(new Array(6).fill(""))
    const inputRefs = React.useRef<(HTMLInputElement | null)[]>([])

    const handleChange = (element: HTMLInputElement, index: number) => {
        if (isNaN(Number(element.value))) return false

        setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))])

        // Focus next input
        if (element.value !== "") {
            if (index < 5) {
                inputRefs.current[index + 1]?.focus()
            }
        }
    }

    const handleBackspace = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
        if (e.key === "Backspace") {
            if (index > 0 && otp[index] === "") {
                // Move to previous input on backspace if current input is empty
                setOtp([...otp.map((d, idx) => (idx === index - 1 ? "" : d))])
                inputRefs.current[index - 1]?.focus()
            } else {
                // Clear current input
                setOtp([...otp.map((d, idx) => (idx === index ? "" : d))])
            }
        }
    }

    const handlePaste = (e: React.ClipboardEvent) => {
        e.preventDefault()
        const pastedData = e.clipboardData
            .getData("text")
            .slice(0, 6)
            .split("")
            .filter(x => !isNaN(Number(x)))
            .slice(0, 6)

        if (pastedData.length === 0) return

        const newOtp = [...otp]
        pastedData.forEach((value, index) => {
            newOtp[index] = value
        })
        setOtp(newOtp)

        // Focus last filled input or first empty input
        const focusIndex = Math.min(pastedData.length, 5)
        inputRefs.current[focusIndex]?.focus()
    }

    return (
        <div className="w-full max-w-sm mx-auto">
            <div className="flex justify-center mb-6">
                <Image
                    src={logo}
                    alt="EAZETRADES"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                />
            </div>

            <h1 className="text-2xl font-semibold text-center mb-4">
                Confirm it&apos;s you
            </h1>

            <p className="text-center text-gray-600 mb-6">
                Enter the code sent to your email e****@****.com
            </p>

            <div className="flex justify-between mb-6">
                {otp.map((digit, index) => (
                    <input
                        key={index}
                        type="text"
                        maxLength={1}
                        value={digit}
                        // ref={el => inputRefs.current[index] = el}
                        onChange={e => handleChange(e.target, index)}
                        onKeyDown={e => handleBackspace(e, index)}
                        onPaste={handlePaste}
                        className="w-12 h-12 border-2 rounded-lg text-center text-lg font-semibold focus:border-[#5F3AFB] focus:outline-none transition-colors"
                    />
                ))}
            </div>

            <div className="text-right mb-6">
                <button
                    onClick={() => router.push('/verify/change')}
                    className="text-[#5F3AFB] hover:underline text-sm"
                >
                    Change
                </button>
            </div>

            <Button
                onClick={() => {
                    const otpValue = otp.join("")
                    if (otpValue.length === 6) {
                        // Handle OTP verification
                        console.log("Verifying OTP:", otpValue)
                    }
                }}
                disabled={otp.some(digit => digit === "")}
                className="w-full bg-[#5F3AFB] hover:bg-[#4F2FEB]"
            >
                Confirm
            </Button>
        </div>
    )
}

