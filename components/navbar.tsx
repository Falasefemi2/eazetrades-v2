"use client"

import Image from "next/image"
import Link from "next/link"
import { Search } from 'lucide-react'
import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { MobileNav } from "./mobile-nav"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import logo from "../public/images/eazetrades-logo-3 3.png"

export function Navbar() {
    return (
        <header className="container px-4 py-4">
            <nav className="flex items-center justify-between gap-4">
                <Link href="/" className="flex items-center space-x-2 shrink-0">
                    <Image
                        src={logo}
                        alt="EazeTraders Logo"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                    />
                    <span className="font-semibold text-xl">EAZETRADERS</span>
                </Link>

                {/* Search Bar */}
                <div className="hidden md:flex flex-1 max-w-md mx-4">
                    <div className="relative w-full">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                            type="search"
                            placeholder="Search for product"
                            className="w-full pl-10 pr-4 rounded-full border-gray-200"
                        />
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-6">
                    <NavigationMenu>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-gray-600 hover:text-gray-900">
                                    Products
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid gap-3 p-4 w-[200px]">
                                        <Link href="/allproduct" className="text-gray-600 hover:text-gray-900">
                                            All Product
                                        </Link>
                                        <Link href="/products/category2" className="text-gray-600 hover:text-gray-900">
                                            Category 2
                                        </Link>
                                        <Link href="/products/category3" className="text-gray-600 hover:text-gray-900">
                                            Category 3
                                        </Link>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-gray-600 hover:text-gray-900">
                                    Services
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid gap-3 p-4 w-[200px]">
                                        <Link href="/services/service1" className="text-gray-600 hover:text-gray-900">
                                            Service 1
                                        </Link>
                                        <Link href="/services/service2" className="text-gray-600 hover:text-gray-900">
                                            Service 2
                                        </Link>
                                        <Link href="/services/service3" className="text-gray-600 hover:text-gray-900">
                                            Service 3
                                        </Link>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="text-gray-600 hover:text-gray-900">
                                    Vendors
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid gap-3 p-4 w-[200px]">
                                        <Link href="/vendors/featured" className="text-gray-600 hover:text-gray-900">
                                            Featured Vendors
                                        </Link>
                                        <Link href="/vendors/new" className="text-gray-600 hover:text-gray-900">
                                            New Vendors
                                        </Link>
                                        <Link href="/vendors/all" className="text-gray-600 hover:text-gray-900">
                                            All Vendors
                                        </Link>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>

                    <Button className="bg-[#5F3AFB] rounded-3xl">
                        Get started
                    </Button>
                </div>

                {/* Mobile Navigation */}
                <MobileNav />
            </nav>
        </header>
    )
}

