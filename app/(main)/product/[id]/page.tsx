"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, MapPin, Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import camera from "../../../../public/images/camera.png"
import bag from "../../../../public/images/bag.jpg"
import crocs from "../../../../public/images/crocs.png"

const images = [
    bag,
    camera,
    crocs,
    camera,
]

const benefits = [
    "Pickup at your home",
    "Delivery at your home",
    "Other benefits",
    "Other benefits",
    "Other benefits",
    "Other benefits",
]

const recentBuyers = [
    { id: 1, avatar: "/placeholder.svg" },
    { id: 2, avatar: "/placeholder.svg" },
    { id: 3, avatar: "/placeholder.svg" },
    { id: 4, avatar: "/placeholder.svg" },
]

export default function ProductDetails() {
    const [selectedImage, setSelectedImage] = useState(images[0])

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Breadcrumb */}
            <div className="bg-white border-b">
                <div className="container px-4 py-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Link href="/" className="hover:text-gray-900">Home</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/products" className="hover:text-gray-900">Product</Link>
                        <ChevronRight className="w-4 h-4" />
                        <Link href="/category" className="hover:text-gray-900">Category</Link>
                        <ChevronRight className="w-4 h-4" />
                        <span className="text-gray-900">Camera</span>
                    </div>
                </div>
            </div>

            <main className="container px-4 py-8">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <div className="aspect-square relative rounded-lg overflow-hidden bg-white">
                            <Image
                                src={selectedImage}
                                alt="Product Image"
                                fill
                                className="object-contain p-4"
                            />
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedImage(image)}
                                    className={`aspect-square relative rounded-lg overflow-hidden bg-white ${selectedImage === image ? "ring-2 ring-purple-600" : ""
                                        }`}
                                >
                                    <Image
                                        src={image}
                                        alt={`Product Image ${index + 1}`}
                                        fill
                                        className="object-contain p-2"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-2xl font-semibold mb-2">Name of product according to seller</h1>
                            <p className="text-gray-600">
                                We observe and respect your description of product. We reflect and respect your description of product.
                            </p>
                        </div>

                        <div className="flex items-center justify-between">
                            <div>
                                <div className="text-sm text-gray-600">Price</div>
                                <div className="text-2xl font-semibold">₦20,000</div>
                            </div>
                            <div>
                                <div className="text-sm text-gray-600">Category</div>
                                <div>Animal/Layer: 36.0</div>
                            </div>
                        </div>

                        <div>
                            <div className="text-sm text-gray-600">Location</div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                <span>Lagos, Ikeja</span>
                            </div>
                        </div>

                        <Button className="w-full bg-purple-600 hover:bg-purple-700">
                            Buy Now
                        </Button>

                        <div className="flex items-center justify-between">
                            <div className="flex -space-x-2">
                                {recentBuyers.map((buyer) => (
                                    <div
                                        key={buyer.id}
                                        className="w-8 h-8 rounded-full border-2 border-white overflow-hidden relative"
                                    >
                                        <Image
                                            src={buyer.avatar}
                                            alt="Buyer Avatar"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                            <span className="text-sm text-gray-600">8 other people watching today</span>
                        </div>

                        <Separator />

                        <div className="grid grid-cols-2 gap-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center">
                                        <Check className="w-3 h-3 text-purple-600" />
                                    </div>
                                    <span className="text-sm">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Product Details */}
                <div className="mt-12 space-y-8">
                    <section>
                        <h2 className="text-xl font-semibold mb-4">Product details</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu scelerisque dolor nec a mattis lectus. Sed tempor, magna ut dignissim pulvinar, urna sem ullamcorper justo, ac condimentum ante purus eu sem. Suspendisse felis. Nunc nec lacus quis augue sagittis venenatis. Vivamus ac purus ac ante gravida ornare.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-semibold mb-4">Features of this product</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                        </ul>
                    </section>
                </div>
            </main>
        </div>
    )
}

