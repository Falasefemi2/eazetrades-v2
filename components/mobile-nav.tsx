"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

export function MobileNav() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-6">
                    <Link href="/products" className="text-gray-600 hover:text-gray-900">
                        PRODUCTS
                    </Link>
                    <Link href="/services" className="text-gray-600 hover:text-gray-900">
                        SERVICES
                    </Link>
                    <Link href="/insights" className="text-gray-600 hover:text-gray-900">
                        INSIGHTS
                    </Link>
                    <Button className="bg-[#5F3AFB] w-ful rounded-3xl">
                        Get Started
                    </Button>
                </div>
            </SheetContent>
        </Sheet>
    )
}

