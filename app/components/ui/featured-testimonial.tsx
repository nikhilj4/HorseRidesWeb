"use client";
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Adventure Enthusiast",
        image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
        quote: "The sunset ride in Nandi Hills was magical. Best experience of our trip to Bangalore!"
    },
    {
        name: "Priya Patel",
        role: "Travel Blogger",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
        quote: "I've visited many stables, but the care and training here are top-notch. Highly recommend!"
    },
    {
        name: "Arjun Verma",
        role: "Local Guide",
        image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
        quote: "A hidden gem. The team is professional and makes sure everyone has a fantastic time."
    }
];

export function FeaturedTestimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    const testimonial = testimonials[currentIndex];

    return (
        <div className="flex flex-col items-center justify-center gap-6 pt-14 mb-12 relative px-4">
            <div className="text-sm w-full max-w-lg border border-gray-200 pb-8 rounded-2xl bg-white dark:bg-card dark:border-border shadow-xl shadow-black/5 dark:shadow-none relative mt-12">
                <div className="flex flex-col items-center px-6 py-4 relative">
                    <img className="h-24 w-24 absolute -top-12 rounded-full object-cover border-4 border-white dark:border-card shadow-md" src={testimonial.image} alt={testimonial.name} />
                    <div className="pt-12 text-center text-foreground w-full">
                        <h1 className="text-xl font-bold text-gray-900 dark:text-foreground font-heading">{testimonial.name}</h1>
                        <p className="text-sm text-muted-foreground font-medium uppercase tracking-wide mt-1">{testimonial.role}</p>
                    </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 px-8 text-center text-lg italic font-primary leading-relaxed my-4">"{testimonial.quote}"</p>
                <div className="flex justify-center pb-4">
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="text-yellow-400 w-5 h-5" fill="currentColor" />
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex gap-4 mt-2">
                <Button variant="outline" size="icon" onClick={prev} className="rounded-full w-12 h-12 border-2 hover:bg-accent hover:text-white transition-colors">
                    <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button variant="outline" size="icon" onClick={next} className="rounded-full w-12 h-12 border-2 hover:bg-accent hover:text-white transition-colors">
                    <ChevronRight className="h-6 w-6" />
                </Button>
            </div>
        </div>
    );
};
