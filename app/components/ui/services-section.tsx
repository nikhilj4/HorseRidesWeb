"use client";

import { ImageInfiniteScroll } from "@/components/ui/image-infinite-scroll";

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

                <div className="mt-12">
                    <ImageInfiniteScroll />
                </div>
            </div>
        </div>
    );
}
