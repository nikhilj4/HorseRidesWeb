"use client";

const images = [
    "/why-us/1.jpeg",
    "/why-us/2.jpeg",
    "/why-us/3.jpeg",
    "/why-us/4.jpeg",
    "/why-us/5.jpeg"
];

export function ServicesSection() {
    return (
        <section id="services" className="bg-background py-24 sm:py-32 relative z-10 mt-12">
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

                <div className="mx-auto mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 items-start">
                    {images.map((src, index) => (
                        <div key={index} className="overflow-hidden rounded-2xl bg-muted hover:shadow-lg transition-shadow duration-300">
                            <img
                                src={src}
                                alt={`Why Us image ${index + 1}`}
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500 block"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
