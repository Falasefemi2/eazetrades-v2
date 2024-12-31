import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
    return (
        <footer className="bg-purple-50">
            <div className="container px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {/* Product Column */}
                    <div>
                        <h3 className="font-semibold mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Employee database</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Payroll</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Absences</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Time tracking</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Shift planner</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Recruiting</Link></li>
                        </ul>
                    </div>

                    {/* Service Column */}
                    <div>
                        <h3 className="font-semibold mb-4">Service</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Employee database</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Payroll</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Absences</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Time tracking</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Shift planner</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Recruiting</Link></li>
                        </ul>
                    </div>

                    {/* Information Column */}
                    <div>
                        <h3 className="font-semibold mb-4">Information</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">FAQ</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Support</Link></li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h3 className="font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">About us</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Contact us</Link></li>
                            <li><Link href="#" className="text-gray-600 hover:text-gray-900">Lift Media</Link></li>
                        </ul>
                    </div>

                    {/* Subscribe Column */}
                    <div>
                        <h3 className="font-semibold mb-4">Subscribe</h3>
                        <div className="flex gap-2">
                            <Input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-white"
                            />
                            <Button className="bg-purple-600 hover:bg-purple-700 shrink-0">
                                →
                            </Button>
                        </div>
                        <p className="text-sm text-gray-600 mt-4">
                            Hello valued clients, We greatly appreciate the trust you have placed in us. We are committed to providing you with a secure experience.
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row items-center justify-between mt-12 pt-8 border-t border-purple-100">
                    <Link href="/" className="mb-4 md:mb-0">
                        <Image
                            src="/placeholder.svg"
                            alt="EazeTraders Logo"
                            width={32}
                            height={32}
                            className="w-8 h-8"
                        />
                    </Link>

                    <div className="flex flex-wrap items-center gap-6 mb-4 md:mb-0">
                        <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms</Link>
                        <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy</Link>
                        <Link href="#" className="text-sm text-gray-600 hover:text-gray-900">Cookies</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="#" className="text-gray-600 hover:text-gray-900">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-900">
                            <Facebook className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="text-gray-600 hover:text-gray-900">
                            <Twitter className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

