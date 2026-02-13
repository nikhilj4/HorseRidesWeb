
import Image from "next/image";
import { cn } from "@/lib/utils";

export function AboutSection() {
    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden">
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
                {/* Curved Card Container */}
                <div className="relative rounded-[3rem] bg-[#698B6E] border border-[#698B6E] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-lg">

                    {/* Content Wrapper */}
                    <div className="relative z-10 max-w-4xl mx-auto text-center pb-24 sm:pb-0 sm:pl-24"> {/* Added padding for image space */}
                        <h2 className="text-base font-semibold leading-7 text-white/90 font-primary uppercase tracking-wide">About Us</h2>
                        <h3 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl font-heading mb-8">
                            About Eco Ranch
                        </h3>

                        <div className="text-lg leading-8 text-white/95 font-primary space-y-6 text-left sm:text-center">
                            <p>
                                At The Eco Ranch, our Horseback Safari isn’t just a ride — it’s a little adventure waiting to unfold.
                            </p>
                            <p>
                                Designed for riders aged 5 and above, this experience blends calm countryside charm with just the right touch of excitement. Imagine trotting along tree-lined trails, passing sparkling waterfalls, hearing birds overhead, and spotting friendly farm animals along the way all while bonding with your gentle four-legged partner.
                            </p>
                            <p>
                                Led by our warm and experienced team, every Safari begins with easy, confidence-building warm-ups before heading out to explore the ranch’s most scenic paths. Whether it’s your very first time in the saddle or you’re simply craving a peaceful outdoor escape, this journey is all about feeling relaxed, connected, and present.
                            </p>
                            <p>
                                You won’t just ride you’ll learn, laugh, explore, and create moments that stay with you long after you’ve left the trail.
                            </p>
                            <p className="font-semibold text-white">
                                At The Eco Ranch, every step, trot, and breeze through the trees is part of a story and we’d love for you to be part of it.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Left Image */}
                    <div className="absolute bottom-0 left-0 w-40 h-56 sm:w-56 sm:h-72 z-20">
                        <Image
                            src="/gallery-1.jpg"
                            alt="Horse at Eco Ranch"
                            fill
                            className="object-cover rounded-tr-3xl opacity-90 hover:opacity-100 transition-opacity duration-300"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
