
import { cn } from "@/lib/utils";

export function AboutSection() {
    return (
        <section id="about" className="py-24 bg-background relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-accent font-primary uppercase tracking-wide">About Us</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading">
                        About Eco Ranch
                    </p>
                    <div className="mt-8 text-lg leading-8 text-muted-foreground font-primary space-y-6 text-left sm:text-center">
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
                        <p className="font-semibold text-foreground">
                            At The Eco Ranch, every step, trot, and breeze through the trees is part of a story and we’d love for you to be part of it.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
