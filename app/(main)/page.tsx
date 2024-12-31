import Image from "next/image"
import { Search } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CategoryScroll } from "@/components/category-scroll"
import { RelatedSearches } from "@/components/related-searches"
import { TrendingProducts } from "@/components/trending-products"
import { Testimonials } from "@/components/testimonials"


export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <main className="container px-4 py-8 md:py-16">
        <div className="relative flex flex-col items-center md:items-start">
          {/* Floating Elements */}
          <div className="absolute right-0 top-0 -z-10">
            <Image
              src="/placeholder.svg"
              alt="Shopping Cart"
              width={200}
              height={200}
              className="w-32 md:w-48"
            />
          </div>
          <div className="absolute right-20 top-20 -z-10">
            <Image
              src="/placeholder.svg"
              alt="Price Tag"
              width={100}
              height={100}
              className="w-16 md:w-24"
            />
          </div>

          {/* Hero Content */}
          <div className="max-w-2xl text-center md:text-left mb-12">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
              Connecting sellers and buyers where convenience meet innovation
            </h1>
            <p className="text-gray-600 mb-8">
              World&apos;s largest market place
            </p>
            <Button size="lg" className="bg-[#5F3AFB] rounded-3xl">
              Get Started
            </Button>
          </div>

          {/* Centered Search Bar */}
          <div className="relative w-full max-w-xl mx-auto">
            <Input
              type="search"
              placeholder="Search..."
              className="w-full pl-6 pr-12 py-3 rounded-full border-0 shadow-lg"
            />
            <Button
              size="icon"
              className="absolute right-1 top-1/2 transform -translate-y-1/2 rounded-full bg-[#5F3AFB]"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <CategoryScroll />
        <RelatedSearches />
        <TrendingProducts />
        <Testimonials />
      </main>
    </div>
  )
}

