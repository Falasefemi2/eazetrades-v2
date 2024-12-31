"use client"

import * as React from "react"
import Image from "next/image"
// import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const testimonials = [
    {
        id: 1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco",
        author: "Sophie Moore",
        role: "Product Developer at Webflow",
        avatar: "/placeholder.svg",
        logo: "/placeholder.svg",
    },
    {
        id: 2,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco",
        author: "Sophie Moore",
        role: "Product Developer at Webflow",
        avatar: "/placeholder.svg",
        logo: "/placeholder.svg",
    },
    {
        id: 3,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua quis nostrud exercitation ullamco",
        author: "Sophie Moore",
        role: "Product Developer at Webflow",
        avatar: "/placeholder.svg",
        logo: "/placeholder.svg",
    },
]

export function Testimonials() {
    const [api, setApi] = React.useState<{ on: (event: string, callback: () => void) => void; selectedScrollSnap: () => number; scrollTo: (index: number) => void } | null>(null)
    const [current, setCurrent] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap())
        })
    }, [api])

    return (
        <section className="w-full py-16 bg-white">
            <div className="container px-4">
                <div className="text-center mb-12">
                    <span className="text-purple-600 font-medium mb-2 block">— TESTIMONIALS</span>
                    <h2 className="text-2xl font-medium">Hear what our clients say</h2>
                </div>

                <div className="relative max-w-5xl mx-auto">
                    <Carousel
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        setApi={(api) => setApi(api as any)}
                        className="w-full"
                        opts={{
                            align: "center",
                            loop: true,
                        }}
                    >
                        <CarouselContent>
                            {testimonials.map((testimonial) => (
                                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/2">
                                    <Card className="border-0 shadow-none">
                                        <CardContent className="p-6">
                                            <Image
                                                src={testimonial.logo}
                                                alt="Company Logo"
                                                width={100}
                                                height={40}
                                                className="mb-4 h-8 w-auto"
                                            />
                                            <p className="text-gray-600 mb-6">{testimonial.text}</p>
                                            <div className="flex items-center gap-3">
                                                <Image
                                                    src={testimonial.avatar}
                                                    alt={testimonial.author}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-full"
                                                />
                                                <div>
                                                    <h4 className="font-medium">{testimonial.author}</h4>
                                                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex -left-12" />
                        <CarouselNext className="hidden md:flex -right-12" />
                    </Carousel>

                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                className={`w-2 h-2 rounded-full transition-colors ${current === index ? "bg-purple-600" : "bg-gray-300"
                                    }`}
                                onClick={() => api?.scrollTo(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

