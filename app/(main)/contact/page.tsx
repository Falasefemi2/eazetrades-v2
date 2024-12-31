"use client"

import * as React from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Mail, Phone } from 'lucide-react'

interface ContactFormData {
    name: string
    email: string
    phone: string
    subject: string
    message: string
}

export default function ContactPage() {
    const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>()

    const onSubmit = async (data: ContactFormData) => {
        // Handle form submission
        console.log(data)
    }

    return (
        <div className="min-h-screen py-12 bg-gray-50">
            <div className="container px-4 mx-auto">
                <div className="max-w-3xl mx-auto text-center mb-12">
                    <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
                    <p className="text-gray-600">
                        We&apos;re here to help! At EAZETRADES, we understand that shopping online can be a journey. Whether you have a question, need assistance with an order, or want to provide feedback, we&apos;re here to listen and help.
                    </p>
                    <p className="text-gray-600 mt-2">
                        Please reach out to us through any of the following channels:
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Form */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm">
                        <h2 className="text-xl font-semibold mb-6">Contact form</h2>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <Input
                                    placeholder="Name"
                                    {...register("name", { required: "Name is required" })}
                                    className="w-full"
                                />
                                {errors.name && (
                                    <span className="text-red-500 text-sm">{errors.name.message}</span>
                                )}
                            </div>

                            <div>
                                <Input
                                    placeholder="Email"
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
                                    <span className="text-red-500 text-sm">{errors.email.message}</span>
                                )}
                            </div>

                            <div>
                                <Input
                                    placeholder="Phone"
                                    type="tel"
                                    {...register("phone", { required: "Phone number is required" })}
                                    className="w-full"
                                />
                                {errors.phone && (
                                    <span className="text-red-500 text-sm">{errors.phone.message}</span>
                                )}
                            </div>

                            <div>
                                <Input
                                    placeholder="Subject"
                                    {...register("subject", { required: "Subject is required" })}
                                    className="w-full"
                                />
                                {errors.subject && (
                                    <span className="text-red-500 text-sm">{errors.subject.message}</span>
                                )}
                            </div>

                            <div>
                                <Textarea
                                    placeholder="Message"
                                    {...register("message", { required: "Message is required" })}
                                    className="w-full min-h-[150px]"
                                />
                                {errors.message && (
                                    <span className="text-red-500 text-sm">{errors.message.message}</span>
                                )}
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-[#5F3AFB] hover:bg-[#4F2FEB]"
                            >
                                Send Message
                            </Button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-2xl font-semibold mb-6">EAZETRADES</h2>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-[#5F3AFB] mt-1" />
                                    <div>
                                        <h3 className="font-medium mb-1">Address</h3>
                                        <p className="text-gray-600">
                                            123 Trading Street, Digital Mall,<br />
                                            Lagos, Nigeria
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Mail className="w-5 h-5 text-[#5F3AFB] mt-1" />
                                    <div>
                                        <h3 className="font-medium mb-1">Email Us</h3>
                                        <p className="text-gray-600">support@eazetrades.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <Phone className="w-5 h-5 text-[#5F3AFB] mt-1" />
                                    <div>
                                        <h3 className="font-medium mb-1">Call Us</h3>
                                        <p className="text-gray-600">+234 (0) 123 456 7890</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="h-[300px] rounded-2xl overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3332262423765!2d3.3791463!3d6.6017835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzYnMDYuNCJOIDPCsDIyJzQ0LjkiRQ!5e0!3m2!1sen!2sng!4v1640901320000!5m2!1sen!2sng"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

