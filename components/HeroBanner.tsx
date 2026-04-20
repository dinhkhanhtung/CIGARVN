'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://www.jjfox.co.uk/media/wysiwyg/cmspage/25-jjfox_new_arrivals_banner__v2.jpg',
    title: 'New Arrivals',
    subtitle: 'Discover our latest collection',
    cta: 'Shop Now',
    href: '/san-pham'
  },
  {
    id: 2,
    image: 'https://www.jjfox.co.uk/media/wysiwyg/cmspage/25-jjfox_cigar_accessories_banner_2.jpg',
    title: 'Premium Accessories',
    subtitle: 'Lighters, cutters, and humidors',
    cta: 'View Collection',
    href: '/san-pham?category=phu-kien'
  },
  {
    id: 3,
    image: 'https://www.jjfox.co.uk/media/wysiwyg/cmspage/jjfox_events_banner__v3.jpg',
    title: 'Sampling Lounge',
    subtitle: 'Experience luxury at our lounge',
    cta: 'Learn More',
    href: '/sampling-lounge'
  }
];

export default function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="mx-auto max-w-7xl w-full px-4">
                <div className="max-w-xl">
                  <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                    {slide.title}
                  </h2>
                  <p className="mb-6 text-lg text-white/90">{slide.subtitle}</p>
                  <Link
                    href={slide.href}
                    className="inline-block bg-[#d4af37] px-8 py-3 text-sm font-semibold text-[#1a1a2e] transition-colors hover:bg-[#e5c158]"
                  >
                    {slide.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center bg-white/20 text-white backdrop-blur-sm transition-colors hover:bg-white/30"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-[#d4af37] w-6' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
