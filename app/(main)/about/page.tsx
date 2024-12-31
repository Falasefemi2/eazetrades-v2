import Image from "next/image"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { TeamMemberModal } from "@/components/team-member-modal"
import { Shield, ShoppingCart, Zap } from "lucide-react"

const faqs = [
    {
        question: "What is UX design?",
        answer: "UX design stands for User Experience Design. It focuses on creating digital products that are intuitive, efficient, and enjoyable for users. This involves understanding user needs, creating wireframes, and conducting usability testing."
    },
    {
        question: "What is UI design?",
        answer: "UI design stands for User Interface Design. It focuses on the visual elements of digital products, including layout, typography, colors, and interactive elements. UI designers work to create aesthetically pleasing and functional interfaces."
    },
    {
        question: "What is UX research?",
        answer: "UX research involves studying user behaviors, needs, and motivations through various methodologies. This includes interviews, surveys, usability testing, and data analysis to inform design decisions and improve user experiences."
    },
]

const teamMembers = [
    {
        name: "Alex Martinez",
        image: "/placeholder.svg?height=600&width=400",
    },
    {
        name: "Sarah Johnson",
        image: "/placeholder.svg?height=600&width=400",
    },
    {
        name: "Michael Chen",
        image: "/placeholder.svg?height=600&width=400",
    },
    {
        name: "Emma Wilson",
        image: "/placeholder.svg?height=600&width=400",
    },
]

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            {/* Previous sections remain unchanged */}
            {/* Hero Section */}
            <div className="relative h-[300px] md:h-[400px]">
                <Image
                    src="/placeholder.svg?height=400&width=1200"
                    alt="About Us Hero"
                    fill
                    className="object-cover brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">About Us</h1>
                </div>
            </div>

            {/* Safety and Satisfaction Section */}
            <section className="py-16 md:py-24 container px-4 mx-auto">
                <div className="max-w-3xl mx-auto mb-12">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                        Our commitment to safety and satisfaction
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        At EazeTraders, we are dedicated to providing a secure and enjoyable shopping experience.
                        Our platform combines cutting-edge technology with user-friendly features to ensure every
                        transaction is smooth and every customer is satisfied.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-gray-50 rounded-3xl p-8 text-center">
                        <div className="bg-[#5F3AFB] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                            <ShoppingCart className="text-white h-6 w-6" />
                        </div>
                        <h3 className="font-semibold mb-2">Online Shopping</h3>
                        <p className="text-gray-600 text-sm">
                            End-to-End delivery service with real-time tracking and updates
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-3xl p-8 text-center">
                        <div className="bg-[#5F3AFB] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Zap className="text-white h-6 w-6" />
                        </div>
                        <h3 className="font-semibold mb-2">Smooth Transactions</h3>
                        <p className="text-gray-600 text-sm">
                            Secure and seamless payment processing for worry-free shopping
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-3xl p-8 text-center">
                        <div className="bg-[#5F3AFB] w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Shield className="text-white h-6 w-6" />
                        </div>
                        <h3 className="font-semibold mb-2">Secure Platform</h3>
                        <p className="text-gray-600 text-sm">
                            Advanced security measures to protect your data and transactions
                        </p>
                    </div>
                </div>
            </section>

            {/* AI Section */}
            <section className="py-16 bg-gray-50">
                <div className="container px-4 mx-auto">
                    <div className="max-w-3xl mx-auto text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
                            Leveraging artificial intelligence for a personalized experience
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            We use advanced learning algorithms to understand your preferences and suggest products
                            that match your style and needs, making your shopping experience more enjoyable and efficient.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white rounded-3xl p-8">
                            <Image
                                src="/placeholder.svg?height=300&width=400"
                                alt="Tailored Product Recommendations"
                                width={400}
                                height={300}
                                className="w-full h-auto mb-4"
                            />
                            <h3 className="font-semibold mb-2">Tailored Product Recommendations</h3>
                            <p className="text-gray-600 text-sm">
                                Get personalized product suggestions based on your browsing and purchase history
                            </p>
                        </div>

                        <div className="bg-white rounded-3xl p-8">
                            <Image
                                src="/placeholder.svg?height=300&width=400"
                                alt="Discovering New Items"
                                width={400}
                                height={300}
                                className="w-full h-auto mb-4"
                            />
                            <h3 className="font-semibold mb-2">Discovering New Items</h3>
                            <p className="text-gray-600 text-sm">
                                Explore new products and trending items tailored to your interests
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* Customer Satisfaction Section */}
            <section className="relative h-[400px] my-16">
                <Image
                    src="/placeholder.svg?height=400&width=1200"
                    alt="Customer Satisfaction"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60 flex items-center">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-2xl">
                            <h2 className="text-3xl font-semibold text-white mb-4">
                                Customer Satisfaction:
                            </h2>
                            <p className="text-gray-200 leading-relaxed">
                                Your satisfaction is our top priority. We strive to provide exceptional service and
                                support to ensure your shopping experience exceeds your expectations. Our dedicated
                                team is always here to assist you with any questions or concerns.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 container px-4 mx-auto">
                <h2 className="text-2xl md:text-3xl font-semibold mb-8">
                    Frequently asked questions
                </h2>
                <div className="max-w-3xl">
                    <Accordion type="single" collapsible>
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent>{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* Meet the Team Section */}
            <section className="py-16 bg-gray-50">
                <div className="container px-4 mx-auto">
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                        MEET THE TEAM
                    </h2>
                    <p className="text-gray-600 max-w-3xl mb-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi sunt vitae dolores cupiditate voluptates
                        repellendus magni quis minus et modi maxime corrupti, quaerat ea exercitationem ullam pariatur quas sit a
                        perferendis! A quasi nostrum officia alias magni fugiat dolores.
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {teamMembers.map((member, index) => (
                            <TeamMemberModal
                                key={index}
                                image={member.image}
                                name={member.name}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

