
import React from 'react';

export const ImageInfiniteScroll = () => {
    // Using available gallery images
    const images = [
        "/gallery-1.jpg",
        "/gallery-2.jpg",
        "/gallery-3.jpg",
        "/gallery-4.jpeg",
        "/gallery-5.jpg",
        "/gallery-6.jpg",
        "/gallery-7.webp",
        "/gallery-8.jpg"
    ];

    // Duplicate images for seamless loop
    const duplicatedImages = [...images, ...images];

    return (
        <>
            <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 40s linear infinite;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>

            <div className="w-full relative overflow-hidden flex items-center justify-center py-12">
                {/* Scrolling images container */}
                <div className="relative z-10 w-full flex items-center justify-center">
                    <div className="scroll-container w-full max-w-7xl">
                        <div className="infinite-scroll flex gap-6 w-max">
                            {duplicatedImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="image-item flex-shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-xl overflow-hidden shadow-lg bg-muted"
                                >
                                    <img
                                        src={image}
                                        alt={`Gallery image ${index + 1}`}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
