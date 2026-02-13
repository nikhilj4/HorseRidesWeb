
import { CheckCircle2 } from "lucide-react";

const experienceSteps = [
    {
        title: "Personalised Welcome & Orientation",
        description: "Begin with a warm reception, a detailed safety briefing, and a gentle introduction to your horse and riding essentials, setting the tone for a seamless experience.",
    },
    {
        title: "Thoughtful Horse Pairing",
        description: "Be carefully matched with a well-trained horse chosen to suit your comfort level and riding ability, ensuring a smooth and confident ride.",
    },
    {
        title: "Private Arena Warm-Up",
        description: "Build balance and confidence in our arena before heading out guided closely by our experienced instructors.",
    },
    {
        title: "Scenic Guided Trail Ride",
        description: "Venture through picturesque ranch trails, shaded tree paths, and tranquil waterfalls while taking in the beauty of the surrounding landscape.",
    },
    {
        title: "Cool Down & Connection Time",
        description: "Return to the arena to dismount, unwind, and share a special bonding moment with your horse through feeding and interaction. a refreshing escape from busy everyday life.",
    },
    {
        title: "Campfire Evenings & Night Safari",
        description: "Elevate your adventure with a cozy campfire experience and a magical night safari ride under the stars.",
    },
    {
        title: "Premium Camping & Night Stay",
        description: "Extend your escape with a serene overnight stay at the ranch wake up to fresh air, birdsong, and the peaceful rhythm of ranch life.",
    },
];

export function ExperienceSection() {
    return (
        <section className="py-24 bg-secondary/10">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-accent font-primary">Your Journey</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl font-heading">
                        What You’ll Experience at The Eco Ranch
                    </p>
                    <p className="mt-4 text-lg text-muted-foreground font-primary">
                        From your first greeting to your final campfire, every moment is curated for comfort and connection.
                    </p>
                </div>

                <div className="mx-auto max-w-4xl">
                    <div className="space-y-12">
                        {experienceSteps.map((step, index) => (
                            <div key={index} className="relative flex gap-x-6">
                                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                                    <span className="font-bold text-primary">{index + 1}</span>
                                </div>
                                <div className="pl-16">
                                    <h3 className="text-xl font-bold leading-7 text-foreground font-heading">
                                        {step.title}
                                    </h3>
                                    <p className="mt-2 text-base leading-7 text-muted-foreground font-primary">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center border-t border-border pt-10">
                        <p className="text-xl font-medium text-foreground italic font-heading">
                            "Join us at The Eco Ranch and discover a Horseback Safari designed to blend comfort, adventure, and meaningful connection — where every step brings you closer to nature and the timeless joy of riding."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
