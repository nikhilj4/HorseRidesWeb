
"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const ExperienceData = [
    {
        id: 1,
        title: "Personalised Welcome & Orientation",
        description: "Begin with a warm reception, a detailed safety briefing, and a gentle introduction to your horse and riding essentials, setting the tone for a seamless experience.",
        url: "/gallery-1.jpg",
    },
    {
        id: 2,
        title: "Thoughtful Horse Pairing",
        description: "Be carefully matched with a well-trained horse chosen to suit your comfort level and riding ability, ensuring a smooth and confident ride.",
        url: "/gallery-2.jpg",
    },
    {
        id: 3,
        title: "Private Arena Warm-Up",
        description: "Build balance and confidence in our arena before heading out guided closely by our experienced instructors.",
        url: "/gallery-3.jpg",
    },
    {
        id: 4,
        title: "Scenic Guided Trail Ride",
        description: "Venture through picturesque ranch trails, shaded tree paths, and tranquil waterfalls while taking in the beauty of the surrounding landscape.",
        url: "/gallery-4.jpeg",
    },
    {
        id: 5,
        title: "Cool Down & Connection Time",
        description: "Return to the arena to dismount, unwind, and share a special bonding moment with your horse through feeding and interaction.",
        url: "/gallery-5.jpg",
    },
    {
        id: 6,
        title: "Campfire Evenings & Night Safari",
        description: "Elevate your adventure with a cozy campfire experience and a magical night safari ride under the stars.",
        url: "/gallery-2.jpg",
    },
    {
        id: 7,
        title: "Premium Camping & Night Stay",
        description: "Extend your escape with a serene overnight stay at the ranch wake up to fresh air, birdsong, and the peaceful rhythm of ranch life.",
        url: "/gallery-1.jpg",
    },
];

export function HorizontalScrollExperience() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-85%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-background">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <div className="absolute top-10 left-10 z-10 max-w-md">
                    <h2 className="text-3xl font-bold font-heading text-primary">Your Journey</h2>
                    <p className="text-muted-foreground mt-2">Scroll to explore the Eco Ranch experience</p>
                </div>
                <motion.div style={{ x }} className="flex gap-4 pl-10">
                    {ExperienceData.map((card) => {
                        return <Card card={card} key={card.id} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
}

const Card = ({ card }: { card: typeof ExperienceData[0] }) => {
    return (
        <div
            key={card.id}
            className="group relative h-[500px] w-[400px] md:h-[600px] md:w-[500px] overflow-hidden bg-neutral-200 rounded-xl"
        >
            <div
                style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
            >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-8">
                <h3 className="bg-gradient-to-br from-white to-white/80 bg-clip-text text-3xl font-bold uppercase text-transparent backdrop-blur-sm">
                    {card.title}
                </h3>
                <p className="mt-4 text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 transform">
                    {card.description}
                </p>
            </div>
        </div>
    );
};
