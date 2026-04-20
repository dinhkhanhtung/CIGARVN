'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Gift, Sparkles } from 'lucide-react';

const collections = [
  {
    id: '1',
    name: 'Bộ sưu tập Cuba Classic',
    description: 'Tuyển chọn những điếu xì gà Cuba kinh điển nhất từ Cohiba, Montecristo, Romeo y Julieta.',
    image: '/images/bestsellers_desktop.png',
    price: 5500000,
    items: 6,
    tag: 'Bán chạy',
  },
  {
    id: '2',
    name: ' sampler New World',
    description: 'Khám phá hương vị từ Dominican, Nicaragua và Honduras với bộ sampler đa dạng.',
    image: '/images/limited_editions_desktop.png',
    price: 3200000,
    items: 5,
    tag: 'Mới',
  },
  {
    id: '3',
    name: 'Phụ kiện Cao Cấp',
    description: 'Bộ sưu tập bật lửa S.T. Dupont, dao cắt Colibri và gạt tàn Elie Bleu.',
    image: '/images/banner-accessories.jpg',
    price: 8500000,
    items: 4,
    tag: 'Limited',
  },
  {
    id: '4',
    name: 'Humidor Starter Pack',
    description: 'Trọn bộ cho người mới: hộp ẩm, ẩm kế, bình ẩm và xì gà mẫu.',
    image: '/images/banner-new.jpg',
    price: 4500000,
    items: 8,
    tag: 'Starter',
  },
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
  }).format(price);
}

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-porcelain">
      {/* Header */}
      <div className="bg-navy py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-gold/30 bg-gold/10 px-3 py-1.5">
            <Gift size={16} className="text-gold" />
            <span className="text-xs font-medium text-gold">Đặc biệt</span>
          </div>
          <h1 className="font-serif text-3xl font-bold text-white lg:text-4xl">
            Bộ sưu tập
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/70">
            Những bộ sưu tập được chọn lọc kỹ càng, hoàn hảo cho quà tặng hoặc trải nghiệm đa dạng.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group overflow-hidden rounded-sm bg-white shadow-sm"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4">
                  <span className="inline-flex items-center gap-1 rounded-sm bg-gold px-3 py-1 text-xs font-semibold text-navy">
                    <Sparkles size={12} />
                    {collection.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h2 className="mb-2 font-serif text-xl font-semibold text-navy">
                  {collection.name}
                </h2>
                <p className="mb-4 text-sm text-gray-600">{collection.description}</p>

                <div className="mb-4 flex items-center gap-4 text-sm">
                  <span className="text-gray-500">
                    <strong className="text-navy">{collection.items}</strong> sản phẩm
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-serif text-xl font-bold text-navy">
                    {formatPrice(collection.price)}
                  </span>
                  <Link
                    href={`/san-pham`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-navy hover:text-gold"
                  >
                    Xem chi tiết
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
