
"use client";

import { useState, forwardRef, ComponentType } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

// Utilities adapted for Next.js
const randomColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');

// Simple global store simulation
let globalColor = "#0099FF";
const listeners = new Set<(color: string) => void>();
const setGlobalColor = (color: string) => {
    globalColor = color;
    listeners.forEach(l => l(color));
};
const useColorStore = () => {
    const [color, setColor] = useState(globalColor);
    // Subscribe on mount
    useState(() => {
        const listener = (c: string) => setColor(c);
        listeners.add(listener);
        return () => { listeners.delete(listener); };
    });
    return [color, setGlobalColor] as const;
};

// HOCs - Simplified types
export function withRotate(Component: any): any {
    return forwardRef((props: any, ref) => {
        return (
            <Component
                ref={ref}
                {...props}
                animate={{ rotate: 90 }}
                transition={{ duration: 2 }}
            />
        )
    })
}

export function withHover(Component: any): any {
    return forwardRef((props: any, ref) => {
        return (
            <Component
                ref={ref}
                {...props}
                whileHover={{ scale: 1.05 }}
            />
        )
    })
}

export function withRandomColor(Component: any): any {
    return forwardRef((props: any, ref) => {
        const [background, setBackground] = useColorStore();

        return (
            <Component
                ref={ref}
                {...props}
                animate={{
                    backgroundColor: background,
                }}
                onClick={(e: any) => {
                    setBackground(randomColor());
                    if (props.onClick) props.onClick(e);
                }}
            />
        )
    })
}

// Create a component that combines hover effects (using motion.div)
const HoverCard = withHover(motion.div);

const galleryItems = [
    { id: 1, src: "/gallery-1.jpg", alt: "Horse riding landscape", span: "md:col-span-2 md:row-span-2" },
    { id: 2, src: "/gallery-2.jpg", alt: "Jeep Safari", span: "md:col-span-1 md:row-span-1" },
    { id: 3, src: "/gallery-3.jpg", alt: "Camping night", span: "md:col-span-1 md:row-span-1" },
    { id: 4, src: "/gallery-4.jpeg", alt: "Forest trail", span: "md:col-span-1 md:row-span-2" },
    { id: 5, src: "/gallery-5.jpg", alt: "Group photo", span: "md:col-span-1 md:row-span-1" },
    { id: 6, src: "/gallery-6.jpg", alt: "Happy riders", span: "md:col-span-2 md:row-span-1" },
    { id: 7, src: "/gallery-7.webp", alt: "Scenic view", span: "md:col-span-1 md:row-span-1" },
    { id: 8, src: "/gallery-8.jpg", alt: "Close up", span: "md:col-span-2 md:row-span-1" },
];

export function GallerySection() {
    const [selectedId, setSelectedId] = useState<number | null>(null);

    return (
        <section id="gallery" className="py-24 bg-background">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold font-heading text-foreground sm:text-4xl">Our Gallery</h2>
                    <p className="mt-4 text-lg text-muted-foreground font-primary">
                        A glimpse into the beautiful moments shared by our riders.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[250px] gap-4">
                    {galleryItems.map((item) => (
                        <HoverCard
                            key={item.id}
                            layoutId={`card-${item.id}`}
                            className={cn("relative overflow-hidden rounded-xl cursor-pointer group", item.span)}
                            onClick={() => setSelectedId(item.id)}
                            transition={{ duration: 0.3 }}
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
                        </HoverCard>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedId && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            layoutId={`card-${selectedId}`}
                            className="relative w-full max-w-5xl h-[80vh] rounded-lg overflow-hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedId(null)}
                                className="absolute top-4 right-4 z-50 bg-black/50 p-2 rounded-full hover:bg-black/70 text-white transition-colors"
                            >
                                <X className="h-6 w-6" />
                            </button>
                            <Image
                                src={galleryItems.find(i => i.id === selectedId)?.src || ""}
                                alt="Gallery Preview"
                                fill
                                className="object-contain"
                                sizes="100vw"
                                priority
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
