"use client"

import * as React from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import robot from "../public/vids/SVG Robot animation.gif"
import running from "../public/vids/Running.gif"
import health from "../public/vids/Teacher Tips for Promoting Positive Student Mental Health.gif"
import pup from "../public/vids/Pup_.gif"
import car from "../public/vids/Car-Bike transform.gif"
import girl from "../public/vids/theaglad.gif"
import market from "../public/vids/Digital Marketing.gif"
import flat from "../public/vids/Flat Illustration Character Vector PNG Images, Photographer Woman Vector Photo Equipment Camera Studio P.jpeg.jpg"
import gadget from "../public/vids/Gadgets.gif"
import love from "../public/vids/Lovely Animations of the Month — December 2017.gif"

const categories = [
    {
        title: "Sport, Art and Outdoors",
        image: running,
    },
    {
        title: "Health and Lifestyle",
        image: health,
    },
    {
        title: "Animals and Pets",
        image: pup,
    },
    {
        title: "Vehicle",
        image: car,
    },
    {
        title: "Fashion",
        image: girl,
    },
    {
        title: "Robot",
        image: robot,
    },
    {
        title: "Digital Marketing",
        image: market,
    },
    {
        title: "Camera",
        image: flat
    },
    {
        title: "Gadget",
        image: gadget
    },
    {
        title: "Love",
        image: love
    }
]

export function CategoryScroll() {
    const scrollRef = React.useRef<HTMLDivElement>(null)

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = 200
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            })
        }
    }

    return (
        <div className="w-full py-12">
            <div className="container px-4">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-semibold">Browse by categories</h2>
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => scroll("left")}
                            className="rounded-full"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon"
                            onClick={() => scroll("right")}
                            className="rounded-full"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
                >
                    {categories.map((category, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center min-w-[200px] p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                        >
                            <div className="w-full aspect-square relative mb-4 rounded-lg overflow-hidden">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-sm font-medium text-center">
                                {category.title}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

