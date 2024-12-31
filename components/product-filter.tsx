"use client"

import * as React from "react"
import { X } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Slider } from "@/components/ui/slider"

interface FilterState {
    categories: string[]
    fashionItems: string[]
    priceRange: number[]
    color: string
    size: string
}

export function ProductFilter() {
    const [open, setOpen] = React.useState(false)
    const [filter, setFilter] = React.useState<FilterState>({
        categories: [],
        fashionItems: [],
        priceRange: [50000],
        color: "",
        size: "",
    })

    const categories = ["Fashion", "Sport, art, outdoors", "Pet", "Health and lifestyle"]
    const fashionItems = ["Clothes", "Shoes", "Glasses", "Accessories"]
    const colors = ["black", "blue", "yellow", "pink", "green", "red", "gray"]
    const sizes = ["Size 7", "Size 8", "Size 9", "Size 10"]

    const handleCategoryClick = (category: string) => {
        setFilter(prev => ({
            ...prev,
            categories: prev.categories.includes(category)
                ? prev.categories.filter(c => c !== category)
                : [...prev.categories, category]
        }))
    }

    const handleFashionItemClick = (item: string) => {
        setFilter(prev => ({
            ...prev,
            fashionItems: prev.fashionItems.includes(item)
                ? prev.fashionItems.filter(i => i !== item)
                : [...prev.fashionItems, item]
        }))
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant="outline" className="bg-gray-50">
                    Sort by/Filter
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Category</h3>
                    <X className="h-4 w-4 cursor-pointer" onClick={() => setOpen(false)} />
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                    {categories.map((category) => (
                        <Badge
                            key={category}
                            variant={filter.categories.includes(category) ? "default" : "outline"}
                            className={`cursor-pointer ${filter.categories.includes(category)
                                    ? "bg-[#5F3AFB] hover:bg-[#4F2FEB]"
                                    : "hover:bg-gray-100"
                                }`}
                            onClick={() => handleCategoryClick(category)}
                        >
                            {category}
                        </Badge>
                    ))}
                </div>

                <div className="mb-6">
                    <h3 className="font-medium mb-3">Fashion Item</h3>
                    <div className="flex flex-wrap gap-2">
                        {fashionItems.map((item) => (
                            <Badge
                                key={item}
                                variant={filter.fashionItems.includes(item) ? "default" : "outline"}
                                className={`cursor-pointer ${filter.fashionItems.includes(item)
                                        ? "bg-[#5F3AFB] hover:bg-[#4F2FEB]"
                                        : "hover:bg-gray-100"
                                    }`}
                                onClick={() => handleFashionItemClick(item)}
                            >
                                {item}
                            </Badge>
                        ))}
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="font-medium mb-3">Filter by price</h3>
                    <Slider
                        defaultValue={[50000]}
                        max={200000}
                        step={1000}
                        className="mb-2"
                        onValueChange={(value) => setFilter(prev => ({ ...prev, priceRange: value }))}
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                        <span>₦50,000</span>
                        <span>₦{filter.priceRange[0].toLocaleString()}</span>
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="font-medium mb-3">Color</h3>
                    <div className="flex gap-2">
                        {colors.map((color) => (
                            <button
                                key={color}
                                className={`w-6 h-6 rounded-full ${filter.color === color ? 'ring-2 ring-[#5F3AFB] ring-offset-2' : ''
                                    }`}
                                style={{ backgroundColor: color }}
                                onClick={() => setFilter(prev => ({ ...prev, color }))}
                            />
                        ))}
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="font-medium mb-3">Sizes</h3>
                    <div className="flex flex-wrap gap-2">
                        {sizes.map((size) => (
                            <Badge
                                key={size}
                                variant={filter.size === size ? "default" : "outline"}
                                className={`cursor-pointer ${filter.size === size
                                        ? "bg-[#5F3AFB] hover:bg-[#4F2FEB]"
                                        : "hover:bg-gray-100"
                                    }`}
                                onClick={() => setFilter(prev => ({ ...prev, size }))}
                            >
                                {size}
                            </Badge>
                        ))}
                    </div>
                </div>

                <Button
                    className="w-full bg-[#5F3AFB] hover:bg-[#4F2FEB]"
                    onClick={() => setOpen(false)}
                >
                    Filter
                </Button>
            </PopoverContent>
        </Popover>
    )
}

