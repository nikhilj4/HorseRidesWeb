
"use client";

import React from 'react';
import { motion, Variants, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { Tilt } from "@/components/ui/tilt";
import { Spotlight } from "@/components/ui/spotlight";

// Props interface for type safety and clarity
interface LinkCardProps extends HTMLMotionProps<"a"> {
    title: string;
    description: string;
    Icon?: LucideIcon | React.ElementType; // Optional Icon
    href?: string;
}

const LinkCard = React.forwardRef<HTMLAnchorElement, LinkCardProps>(
    ({ className, title, description, Icon, href = "#", ...props }, ref) => {
        // Animation variants for framer-motion
        const cardVariants: Variants = {
            initial: { scale: 1, y: 0 },
            hover: {
                scale: 1.02, // Reduced scale since Tilt adds movement
                transition: {
                    type: 'spring',
                    stiffness: 300,
                    damping: 15,
                },
            },
        };

        return (
            <motion.a
                ref={ref}
                href={href}
                // Remove target blank if it's just a placeholder link
                {...(href !== "#" ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={cn(
                    'block h-64 w-full focus-visible:outline-none',
                    className
                )}
                variants={cardVariants}
                initial="initial"
                whileHover="hover"
                aria-label={`Link to ${title}`}
                {...props}
            >
                <Tilt rotationFactor={8} isRevese className="h-full w-full">
                    <div className="group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl border bg-card p-6 text-card-foreground shadow-sm hover:shadow-md transition-shadow duration-300">
                        <Spotlight className="z-10 from-white/20 via-white/10 to-transparent" size={350} />

                        {/* Text content */}
                        <div className="z-10 relative pointer-events-none">
                            <h3 className="mb-2 font-heading text-2xl font-medium tracking-tight text-foreground">
                                {title}
                            </h3>
                            <p className="max-w-[90%] text-sm text-muted-foreground font-primary leading-relaxed">
                                {description}
                            </p>
                        </div>

                        {/* Icon container - only render if Icon is provided */}
                        {Icon && (
                            <div className="absolute -bottom-6 -right-6 h-32 w-32 translate-x-2 translate-y-2 transform p-4 opacity-50">
                                <Icon className="h-full w-full text-muted-foreground/20 transition-all duration-300 ease-out group-hover:scale-110 group-hover:text-primary/30" />
                            </div>
                        )}
                    </div>
                </Tilt>
            </motion.a>
        );
    }
);

LinkCard.displayName = 'LinkCard';

export { LinkCard };
