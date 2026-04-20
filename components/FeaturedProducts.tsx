'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Flame } from 'lucide-react';

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
    image: '/images/product-img7.jpeg',
    strength: 'full',
    origin: 'Cuba',
  },
  {
    id: '2',
    name: 'Montecristo No. 2',
    brand: 'Montecristo',
    price: 1850000,
    image: '/images/bestsellers_desktop.png',
    strength: 'medium',
    origin: 'Cuba',
  },
  {
    id: '3',
    name: 'Romeo y Julieta Churchill',
    brand: 'Romeo y Julieta',
    price: 1650000,
    image: '/images/limited_editions_desktop.png',
    strength: 'medium',
    origin: 'Cuba',
  },
  {
    id: '4',
    name: 'Fox House Blend Sampler',
    brand: 'Fox House',
    price: 1250000,
    originalPrice: 1450000,
    image: '/images/fox_house_blend.png',
    strength: 'medium',
    origin: 'Cuba',
  },
  {
    id: '5',
    name: 'S.T. Dupont Lighter Gold',
    brand: 'S.T. Dupont',
    price: 8500000,
    image: '/images/Lighter_Gold_Diamonds_3Q.jpg',
    strength: 'mild',
    origin: 'Phụ kiện',
  },
  {
    id: '6',
    name: 'Limited Edition 2024',
    brand: 'Cohiba',
    price: 3250000,
    image: '/images/banner-new.jpg',
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
  return (
    <section className="bg-white py-16">
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

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={`/san-pham/${product.id}`} className="group block">
                <div className="relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 group-hover:shadow-xl sm:rounded-sm">
                  {/* Sale badge */}
                  {product.originalPrice && (
                    <div className="absolute left-2 top-2 z-10 rounded-full bg-red-500 px-2.5 py-1 text-xs font-semibold text-white shadow-lg">
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </div>
                  )}

                  {/* Image */}
                  <div className="aspect-[4/5] relative overflow-hidden bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Quick actions overlay */}
                    <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />
                  </div>

                  {/* Strength indicator */}
                  <div className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded-full bg-white/95 px-2.5 py-1 text-xs shadow-md backdrop-blur-sm">
                    <Flame size={12} className={strengthLabels[product.strength].color.replace('bg-', 'text-')} />
                    <span className="font-medium text-gray-700">
                      {strengthLabels[product.strength].label}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="mt-4">
                  <div className="mb-1.5 text-xs font-medium uppercase tracking-wider text-gray-500">
                    {product.brand}
                  </div>
                  <h3 className="mb-2 font-serif text-base font-semibold text-primary transition-colors group-hover:text-accent sm:text-navy">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-base font-bold text-primary sm:text-navy">
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
