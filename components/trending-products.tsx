"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from 'lucide-react'
import Link from 'next/link'
import stool from "../public/images/stool.png"
import bottle from "../public/images/bottle.png"
import crocs from "../public/images/crocs.png"

const originalProducts = [
    {
        id: 1,
        title: "High Quality Crocs",
        price: 20000,
        category: "Fashion",
        location: "Lagos, Ikeja",
        visits: 16,
        image: stool,
    },
    {
        id: 2,
        title: "High Quality Bottle",
        price: 20000,
        category: "Fashion",
        location: "Lagos, Ikeja",
        visits: 16,
        image: bottle,
    },
    {
        id: 3,
        title: "High Quality Crocs",
        price: 20000,
        category: "Fashion",
        location: "Lagos, Ikeja",
        visits: 16,
        image: crocs,
    },
]

const trendingProducts = [...originalProducts, ...originalProducts.map((product, index) => ({
    ...product,
    id: originalProducts.length + index + 1,
}))]

export function TrendingProducts() {
    return (
        <section className="w-full py-12 bg-gray-50">
            <div className="container px-4">
                <h2 className="text-2xl font-semibold mb-8 text-center">All trending products</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {trendingProducts.map((product) => (
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
            </div>
        </section>
    )
}

