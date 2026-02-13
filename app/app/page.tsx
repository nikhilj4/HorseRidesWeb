import { HeroSection } from "@/components/ui/hero-section-5"
import { AboutSection } from "@/components/ui/about-section"
import { ServicesSection } from "@/components/ui/services-section"
import { HorizontalScrollExperience } from "@/components/ui/horizontal-scroll-experience"
import { GallerySection } from "@/components/ui/gallery-section"
import { BookingSection } from "@/components/ui/booking-section"
import { ContactSection } from "@/components/ui/contact-section"
import { SpecialOffersDemo } from "@/components/ui/special-offers-section"
import { ReviewSummaryCardDemo } from "@/components/ui/review-summary-demo"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <HeroSection />
      {/* AboutSection removed */}
      <ServicesSection />
      <HorizontalScrollExperience />
      <SpecialOffersDemo />
      <GallerySection />
      <ReviewSummaryCardDemo />
      <BookingSection />
      <ContactSection />
      <footer className="bg-primary/5 py-8 text-center text-muted-foreground font-primary border-t border-border">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; 2024 The Eco Ranch. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
