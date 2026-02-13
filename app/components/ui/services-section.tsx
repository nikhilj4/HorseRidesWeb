import { TreeDeciduous, Users, Camera, ShieldCheck, Map, Leaf, BookOpen } from "lucide-react";

import ClippedShapeGallery from "@/components/ui/clipped-shape-image";

const features = [
    {
        name: "Learn While You Ride",
        description: "Not just fun, fascinating too! Discover how horses think, communicate, and trust, while picking up gentle riding skills along the way.",
        icon: BookOpen,
    },
    {
        name: "Confidence-Building & Beginner-Friendly (5+)",
        description: "Calm, welcoming, and pressure-free perfect for first-timers, young riders, and families looking for a safe outdoor adventure.",
        icon: ShieldCheck,
    },
    {
        name: "Adventure on Every Trail",
        description: "Wander through scenic paths, meet friendly ranch animals, and experience nature up close in a way you simply can’t from the sidelines.",
        icon: Map,
    },
    {
        name: "Nature’s Reset Button",
        description: "Ride past waterfalls, beneath shady trees, and through peaceful bird zones, a refreshing escape from busy everyday life.",
        icon: Leaf,
    },
    {
        name: "Memories Made Together",
        description: "Ideal for families, friends, and small groups, because the best adventures are the ones you share.",
        icon: Users,
    },
];

const activityImages = [
    {
        src: '/horse-ride.jpg',
        alt: 'Horse Ride',
        clipId: 'clip-another1',
        type: 'image'
    },
    {
        src: '/jeep-safari.jpg',
        alt: 'Jeep Safari',
        clipId: 'clip-another2',
        type: 'image'
    },
    {
        src: '/night-camp.jpg',
        alt: 'Night Camp',
        clipId: 'clip-another3',
        type: 'image'
    }
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

                <div className="mb-24">
                    <ClippedShapeGallery mediaItems={activityImages as any} />
                </div>

                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-xl font-bold leading-7 text-foreground font-heading">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-lg leading-8 text-muted-foreground font-primary">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
