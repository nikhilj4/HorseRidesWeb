"use client";

import { LinkCard } from "@/components/ui/link-card";
import { ImageInfiniteScroll } from "@/components/ui/image-infinite-scroll";

const features = [
    {
        title: "Learn While You Ride",
        description: "Not just fun, fascinating too! Discover how horses think, communicate, and trust, while picking up gentle riding skills along the way.",
    },
    {
        title: "Confidence-Building & Beginner-Friendly (5+)",
        description: "Calm, welcoming, and pressure-free perfect for first-timers, young riders, and families looking for a safe outdoor adventure.",
    },
    {
        title: "Adventure on Every Trail",
        description: "Wander through scenic paths, meet friendly ranch animals, and experience nature up close in a way you simply can’t from the sidelines.",
    },
    {
        title: "Nature’s Reset Button",
        description: "Ride past waterfalls, beneath shady trees, and through peaceful bird zones, a refreshing escape from busy everyday life.",
    },
    {
        title: "Memories Made Together",
        description: "Ideal for families, friends, and small groups, because the best adventures are the ones you share.",
    },
];

export function ServicesSection() {
    return (
        <div id="services" className="bg-background py-24 sm:py-32 relative z-10 mt-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-accent font-primary">Why Choose Us</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading">
                        Why You’ll Love the Horseback Safari 🐎
                    </p>
                    <p className="mt-2 text-lg leading-8 text-muted-foreground font-primary">
                        Connect with nature and gentle animals in a safe, guided environment designed for everyone.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
                    {features.map((feature, index) => (
                        <LinkCard
                            key={feature.title}
                            title={feature.title}
                            description={feature.description}
                            href="#"
                            className={index === 4 ? "sm:col-span-2 lg:col-span-1 lg:col-start-2" : ""}
                        />
                    ))}
                </div>

                <div className="mt-24">
                    <ImageInfiniteScroll />
                </div>
            </div>
        </div>
    );
}
