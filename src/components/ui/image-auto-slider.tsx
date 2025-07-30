'use client';

import React from 'react';
import Image from 'next/image';

export const ImageAutoSlider = () => {
  // Images for the infinite scroll - using Unsplash URLs
  const images = [
   "/papers/doc-1.jpg",
   "/papers/doc-2.jpg",
   "/papers/doc-3.jpg",
   "/papers/doc-4.jpg"
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <>
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 30s linear infinite;
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

      <div className="relative max-w-6xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden shadow-large bg-neutral-warm-100" style={{ height: '720px' }}>
          {/* Scrolling images container */}
          <div className="relative w-full h-full flex items-center justify-center bg-gradient-to-r from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900">
            <div className="scroll-container w-full h-full">
              <div className="infinite-scroll flex gap-6 w-max h-full items-center">
                {duplicatedImages.map((image, index) => (
                  <div
                    key={index}
                    className="image-item flex-shrink-0 w-[440px] h-[440px] rounded-xl overflow-hidden shadow-2xl"
                  >
                    <Image
                      src={image}
                      alt={`Gallery image ${(index % images.length) + 1}`}
                      className="w-full h-full object-cover"
                      width={416}
                      height={416}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Subtle overlay for depth - matching original hero */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
        </div>

        {/* Background decoration - matching original hero */}
        <div className="absolute -top-4 -left-4 w-full h-full bg-primary-100 rounded-2xl -z-10 opacity-40"></div>
        <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary-50 rounded-2xl -z-20 opacity-60"></div>
      </div>
    </>
  );
};

export default ImageAutoSlider;
