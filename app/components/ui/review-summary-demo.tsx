import { ReviewSummaryCard } from '@/components/ui/review-summary-card';
import { FeaturedTestimonial } from "@/components/ui/featured-testimonial";

/**
 * A demo component to showcase the ReviewSummaryCard.
 */
export const ReviewSummaryCardDemo = () => {
    return (
        <section id="reviews" className="py-24 bg-background flex flex-col items-center justify-center p-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold font-heading text-foreground sm:text-4xl">What Our Riders Say</h2>
                <p className="mt-4 text-lg text-muted-foreground font-primary">
                    Join thousands of happy customers who have experienced the thrill of our horse rides.
                </p>
            </div>

            <FeaturedTestimonial />

            <ReviewSummaryCard
                rating={5.0}
                reviewCount={1092}
                summaryText="Outstanding: Rated 5.0 with 1,092 Reviews."
            />
        </section>
    );
};
