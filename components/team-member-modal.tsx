"use client"

import * as React from "react"
import Image from "next/image"
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"

interface TeamMemberProps {
    image: string
    name: string
}

export function TeamMemberModal({ image, name }: TeamMemberProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <button className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl group">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                        <span className="text-white font-medium">{name}</span>
                    </div>
                </button>
            </DialogTrigger>
            <DialogContent className="max-w-3xl">
                <div className="relative w-full aspect-[3/4]">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover rounded-lg"
                    />
                </div>
            </DialogContent>
        </Dialog>
    )
}

