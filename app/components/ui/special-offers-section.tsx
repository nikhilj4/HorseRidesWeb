"use client";
import * as React from "react";
import { OffersCarousel, type CarouselItem } from "@/components/ui/offers-carousel";

// Mock data items
const rides: CarouselItem[] = [
    {
        id: 1,
        imageUrl: "/gallery-1.jpg",
        title: "Sunset Trail Ride",
        subtitle: "Experience the golden hour",
        rating: 4.9,
        price: 3500,
        originalPrice: 4500,
        discountPercentage: 22,
    },
    {
        id: 2,
        imageUrl: "/gallery-2.jpg",
        title: "Jeep Safari Adventure",
        subtitle: "Explore rugged terrains",
        rating: 4.8,
        price: 4200,
        originalPrice: 5000,
        discountPercentage: 16,
    },
    {
        id: 3,
        imageUrl: "/gallery-3.jpg",
        title: "Overnight Camping",
        subtitle: "Sleep under the stars",
        rating: 4.9,
        price: 5500,
        originalPrice: 7000,
        discountPercentage: 21,
    },
    {
        id: 4,
        imageUrl: "/gallery-4.jpeg",
        title: "Morning Beach Ride",
        subtitle: "Start your day with energy",
        rating: 4.7,
        price: 3800,
        originalPrice: 4200,
        discountPercentage: 10,
    },
    {
        id: 5,
        imageUrl: "/gallery-5.jpg",
        title: "Family Jungle Safari",
        subtitle: "Safe for kids and elders",
        rating: 4.8,
        price: 6000,
        originalPrice: 7500,
        discountPercentage: 20,
    },
];

export function SpecialOffersDemo() {
    return (
        <section className="py-24 bg-secondary/20 flex justify-center px-4">
            <OffersCarousel
                offerTitle="25% off on Group Rides"
                offerSubtitle="Book for 4 or more people to unlock!"
                ctaText="View all packages"
                onCtaClick={() => alert("Redirecting to packages...")}
                items={rides}
            />
        </section>
    );
}
