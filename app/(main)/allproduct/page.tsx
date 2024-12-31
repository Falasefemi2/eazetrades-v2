"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from 'lucide-react'
import Link from 'next/link'
import { ProductFilter } from "@/components/product-filter"

// Sample product data
const products = [
    {
        id: 1,
        title: "High Quality Stool",
        price: 20000,
        category: "Fashion",
        location: "Lagos, Ikeja",
        visits: 16,
        image: "/placeholder.svg?height=400&width=400",
    },
    {
        id: 2,
        title: "Water Bottle",
        price: 15000,
        category: "Fashion",
        location: "Lagos, Ikeja",
        visits: 24,
        image: "/placeholder.svg?height=400&width=400",
    },
    {
        id: 3,
        title: "Colorful Crocs",
        price: 25000,
        category: "Fashion",
        location: "Lagos, Ikeja",
        visits: 32,
        image: "/placeholder.svg?height=400&width=400",
    },
    {
        id: 4,
        title: "Smart Watch",
        price: 150000,
        category: "Fashion",
        location: "Lagos, Ikeja",
        visits: 45,
        image: "/placeholder.svg?height=400&width=400",
    },
    {
        id: 5,
        title: "Headphones",
        price: 45000,
        category: "Fashion",
        location: "Lagos, Ikeja",
        visits: 28,
        image: "/placeholder.svg?height=400&width=400",
    },
    {
        id: 6,
        title: "Bluetooth Speaker",
        price: 35000,
        category: "Fashion",
        location: "Lagos, Ikeja",
        visits: 19,
        image: "/placeholder.svg?height=400&width=400",
    },
    {
        id: 7,
        title: "Smart Watch Pro",
        price: 180000,
        category: "Fashion",
        location: "Lagos, Ikeja",
        visits: 52,
        image: "/placeholder.svg?height=400&width=400",
    },
    {
        id: 8,
        title: "Premium Headphones",
        price: 55000,
        category: "Fashion",
        location: "Lagos, Ikeja",
        visits: 36,
        image: "/placeholder.svg?height=400&width=400",
    },
    {
        id: 9,
        title: "Smart Speaker",
        price: 40000,
        category: "Fashion",
        location: "Lagos, Ikeja",
        visits: 22,
        image: "/placeholder.svg?height=400&width=400",
    },
]

export default function AllProducts() {
    const [currentPage, setCurrentPage] = React.useState(1)
    const productsPerPage = 9
    const totalPages = Math.ceil(products.length / productsPerPage)

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container px-4 mx-auto">
                <div className="flex justify-end mb-6">
                    <ProductFilter />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.map((product) => (
                        <Link key={product.id} href={`/product/${product.id}`}>
                            <Card className="overflow-hidden rounded-3xl bg-white hover:shadow-lg transition-shadow">
                                <CardContent className="p-0">
                                    <div className="relative">
                                        <Badge className="absolute top-4 left-4 bg-white text-[#5F3AFB] hover:bg-white rounded-full font-normal py-1.5">
                                            Premium Ad
                                        </Badge>
                                        <Image
                                            src={product.image}
                                            alt={product.title}
                                            width={400}
                                            height={400}
                                            className="w-full aspect-square object-cover"
                                        />
                                    </div>
                                    <div className="p-6 space-y-3">
                                        <div className="flex items-start justify-between">
                                            <span className="text-[#5F3AFB]">{product.category}</span>
                                            <span className="font-medium">₦{product.price.toLocaleString()}</span>
                                        </div>
                                        <h3 className="font-medium text-lg">{product.title}</h3>
                                        <div className="flex items-center gap-2 text-gray-500">
                                            <MapPin className="h-4 w-4" />
                                            <span>{product.location}</span>
                                        </div>
                                        <div className="flex items-center justify-between pt-2">
                                            <span className="text-gray-500">{product.visits} Visits</span>
                                            <Button
                                                className="bg-[#5F3AFB] text-white hover:bg-[#4F2FEB] rounded-full px-6"
                                            >
                                                Preview
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center items-center gap-2 mt-12">
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`w-2 h-2 rounded-full transition-all ${currentPage === index + 1
                                ? 'bg-[#5F3AFB] w-4'
                                : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            aria-label={`Go to page ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

