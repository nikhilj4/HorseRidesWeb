import ImageMaskGallery from "@/components/ui/image-mask";

export function GallerySection() {
    return (
        <section id="gallery" className="py-24 bg-background">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-3xl font-bold font-heading text-foreground sm:text-4xl">Our Gallery</h2>
                    <p className="mt-4 text-lg text-muted-foreground font-primary">
                        A glimpse into the beautiful moments shared by our riders.
                    </p>
                </div>

                <ImageMaskGallery />

            </div>
        </section>
    );
}
