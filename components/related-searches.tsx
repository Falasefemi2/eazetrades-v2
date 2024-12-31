"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from 'lucide-react'
import camera from "../public/images/camera.png"

const products = [
    {
        id: 1,
        title: "High Quality Crocs",
        price: 20000,
        category: "Fashion",
        location: "Lagos, Ikeja",
        visits: 16,
        image: camera,
    },
    {
        id: 2,
        title: "High Quality Crocs",
        price: 20000,
        category: "Fashion",
        location: "Lagos, Ikeja",
        visits: 16,
        image: camera,
    },
    {
        id: 3,
        title: "High Quality Crocs",
        price: 20000,
        category: "Fashion",
        location: "Lagos, Ikeja",
        visits: 16,
        image: camera,
    },
    {
        id: 4,
        title: "High Quality Crocs",
        price: 20000,
        category: "Fashion",
        location: "Lagos, Ikeja",
        visits: 16,
        image: camera,
    },
]


export function RelatedSearches() {
    const [activeIndex, setActiveIndex] = React.useState(0)

    return (
        <section className="w-full py-12">
            <div className="container px-4">
                <h2 className="text-2xl font-semibold mb-6 text-center">Related searches</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {products.map((product) => (
                        <Card key={product.id} className="overflow-hidden">
                            <CardContent className="p-0 relative">
                                <Badge className="absolute top-2 left-2 bg-white text-purple-600 hover:bg-white">
                                    Premium Ad
                                </Badge>
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={400}
                                    height={300}
                                    className="w-full aspect-[4/3] object-cover"
                                />
                            </CardContent>
                            <CardContent className="p-4">
                                <div className="flex items-start justify-between gap-2 mb-2">
                                    <span className="text-sm text-purple-600">{product.category}</span>
                                    <span className="font-semibold">₦{product.price.toLocaleString()}</span>
                                </div>
                                <h3 className="font-medium mb-2">{product.title}</h3>
                                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                                    <MapPin className="h-4 w-4" />
                                    <span>{product.location}</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm text-muted-foreground">{product.visits} Visits</span>
                                    <Button variant="secondary" size="sm">
                                        Preview
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="flex justify-center gap-2 mt-6">
                    {[0, 1, 2].map((index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-colors ${activeIndex === index ? "bg-purple-600" : "bg-gray-300"
                                }`}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

