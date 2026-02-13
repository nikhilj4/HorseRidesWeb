"use client";
import * as React from "react";
import { OffersCarousel, type CarouselItem } from "@/components/ui/offers-carousel";

// Mock data items
const rides: CarouselItem[] = [
    {
        id: 1,
        imageUrl: "/gallery-1.jpg",
        title: "The Farmland Heritage Ride",
        subtitle: "Serenity of sprawling landscapes",
        rating: 5.0,
        price: 3500,
    },
    {
        id: 2,
        imageUrl: "/gallery-2.jpg",
        title: "The Wildwood Prestige Safari",
        subtitle: "Heart of untamed beauty",
        rating: 5.0,
        price: 4000,
    },
    {
        id: 3,
        imageUrl: "/gallery-3.jpg",
        title: "The Summit Grandeur Safari",
        subtitle: "Ascend to breathtaking heights",
        rating: 5.0,
        price: 4500,
    },
];

export function SpecialOffersDemo() {
    return (
        <section className="py-24 bg-secondary/20 flex justify-center px-4">
            <OffersCarousel
                offerTitle="Our Signature Safaris"
                offerSubtitle="Experience the best of The Eco Ranch. All our safaris include: Professional Guide, Safety Equipment, Refreshments, and Scenic Views."
                ctaText="Book Your Ride"
                onCtaClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                items={rides}
            />
        </section>
    );
}
