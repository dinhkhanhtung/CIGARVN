'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Flame, ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { JJFOX_IMAGES } from '@/lib/images';

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  strength: 'mild' | 'medium' | 'full';
  origin: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Cohiba Behike 52',
    brand: 'Cohiba',
    price: 2850000,
    originalPrice: 3200000,
    image: JJFOX_IMAGES.productSample,
    strength: 'full',
    origin: 'Cuba',
  },
  {
    id: '2',
    name: 'Montecristo No. 2',
    brand: 'Montecristo',
    price: 1850000,
    image: JJFOX_IMAGES.bestsellers,
    strength: 'medium',
    origin: 'Cuba',
  },
  {
    id: '3',
    name: 'Romeo y Julieta Churchill',
    brand: 'Romeo y Julieta',
    price: 1650000,
    image: JJFOX_IMAGES.limitedEditions,
    strength: 'medium',
    origin: 'Cuba',
  },
  {
    id: '4',
    name: 'Fox House Blend Sampler',
    brand: 'Fox House',
    price: 1250000,
    originalPrice: 1450000,
    image: JJFOX_IMAGES.foxHouseBlend,
    strength: 'medium',
    origin: 'Cuba',
  },
  {
    id: '5',
    name: 'S.T. Dupont Lighter Gold',
    brand: 'S.T. Dupont',
    price: 8500000,
    image: JJFOX_IMAGES.lighterGold,
    strength: 'mild',
    origin: 'Phụ kiện',
  },
  {
    id: '6',
    name: 'Limited Edition 2024',
    brand: 'Cohiba',
    price: 3250000,
    image: JJFOX_IMAGES.newArrivals,
    strength: 'full',
    origin: 'Cuba',
  },
];

const strengthLabels = {
  mild: { label: 'Nhẹ', color: 'bg-green-500' },
  medium: { label: 'Trung bình', color: 'bg-yellow-500' },
  full: { label: 'Mạnh', color: 'bg-red-500' },
};

function formatPrice(price: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
  }).format(price);
}

export default function FeaturedProducts() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    skipSnaps: false,
    dragFree: true,
  });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gold">
              Nổi bật
            </span>
            <h2 className="font-serif text-2xl font-bold text-navy lg:text-3xl">
              Sản phẩm bán chạy
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/san-pham"
              className="group hidden items-center gap-1 text-sm font-medium text-navy hover:text-gold sm:inline-flex"
            >
              Xem tất cả
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden mt-10 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={`/san-pham/${product.id}`} className="group block">
                <div className="relative overflow-hidden rounded-lg bg-white transition-all duration-300 group-hover:shadow-2xl">
                  {product.originalPrice && (
                    <div className="absolute left-2 top-2 z-10 rounded bg-red-600 px-2.5 py-1 text-xs font-bold text-white shadow-lg">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </div>
                  )}
                  <div className="aspect-[4/5] relative overflow-hidden bg-gray-50">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-semibold shadow-lg">
                    <Flame size={12} className={strengthLabels[product.strength].color.replace('bg-', 'text-')} />
                    <span className="text-gray-800">
                      {strengthLabels[product.strength].label}
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="mb-1.5 text-xs font-bold uppercase tracking-wider text-gray-500">
                    {product.brand}
                  </div>
                  <h3 className="mb-2 font-serif text-base font-bold text-navy transition-colors group-hover:text-gold lg:text-lg">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="font-serif text-lg font-bold text-navy">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile Horizontal Carousel */}
        <div className="mt-8 lg:hidden">
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-4">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="flex-[0_0_75%] min-w-0 sm:flex-[0_0_50%]"
                  >
                    <Link href={`/san-pham/${product.id}`} className="group block">
                      <div className="relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 group-hover:shadow-xl">
                        {product.originalPrice && (
                          <div className="absolute left-2 top-2 z-10 rounded-full bg-red-500 px-2.5 py-1 text-xs font-semibold text-white shadow-lg">
                            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                          </div>
                        )}
                        <div className="aspect-[4/5] relative overflow-hidden bg-gray-100">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                        </div>
                        <div className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-xs shadow-md backdrop-blur-sm">
                          <Flame size={12} className={strengthLabels[product.strength].color.replace('bg-', 'text-')} />
                          <span className="font-medium text-gray-700">
                            {strengthLabels[product.strength].label}
                          </span>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-500">
                          {product.brand}
                        </div>
                        <h3 className="mb-2 font-serif text-sm font-semibold text-navy transition-colors group-hover:text-gold">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="font-serif text-sm font-bold text-navy">
                            {formatPrice(product.price)}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs text-gray-400 line-through">
                              {formatPrice(product.originalPrice)}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            {canScrollPrev && (
              <button
                onClick={scrollPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-gray-50"
              >
                <ChevronLeft size={20} className="text-navy" />
              </button>
            )}
            {canScrollNext && (
              <button
                onClick={scrollNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-gray-50"
              >
                <ChevronRight size={20} className="text-navy" />
              </button>
            )}
          </div>
        </div>

        {/* Mobile view all button */}
        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/san-pham"
            className="inline-flex items-center gap-1 text-sm font-medium text-navy hover:text-gold"
          >
            Xem tất cả sản phẩm
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
