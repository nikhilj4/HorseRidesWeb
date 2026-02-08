import { TreeDeciduous, Users, Camera, DollarSign, ShieldCheck } from "lucide-react";

import ClippedShapeGallery from "@/components/ui/clipped-shape-image";

const features = [
    {
        name: "Guided Horse Rides",
        description: "Experience the thrill of riding with professional guides who ensure your safety and enjoyment.",
        icon: TreeDeciduous,
    },
    {
        name: "Beginner Friendly",
        description: "Never ridden before? No problem! Our calm horses and patient instructors make it easy to start.",
        icon: ShieldCheck,
    },
    {
        name: "Family & Group Rides",
        description: "Create memories together. We offer special packages for families and groups of all sizes.",
        icon: Users,
    },
    {
        name: "Scenario Nature Trails",
        description: "Ride through breathtaking landscapes, specifically chosen for their beauty and tranquility.",
        icon: Camera,
    },
    {
        name: "Affordable Pricing",
        description: "Premium experiences at competitive rates. We believe adventure should be accessible to everyone.",
        icon: DollarSign,
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
                    <h2 className="text-base font-semibold leading-7 text-accent font-primary">Our Activities</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading">
                        Activities & Adventures
                    </p>
                    <p className="mt-2 text-lg leading-8 text-muted-foreground font-primary">
                        Beyond just riding, we offer a complete adventure package including jeep safaris and night camping under the stars.
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
