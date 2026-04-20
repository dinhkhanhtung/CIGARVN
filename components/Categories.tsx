'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ShoppingBag, Globe, Ruler, Wrench } from 'lucide-react';

const categories = [
  {
    icon: ShoppingBag,
    title: 'Thương hiệu',
    description: 'Cohiba, Montecristo, Davidoff...',
    href: '/thuong-hieu',
  },
  {
    icon: Globe,
    title: 'Xuất xứ',
    description: 'Cuba, Dominican, Nicaragua...',
    href: '/xuat-xu',
  },
  {
    icon: Ruler,
    title: 'Hình dáng',
    description: 'Robusto, Toro, Churchill...',
    href: '/hinh-dang',
  },
  {
    icon: Wrench,
    title: 'Phụ kiện',
    description: 'Bật lửa, dao cắt, gạt tàn...',
    href: '/phu-kien',
  },
];

export default function Categories() {
  return (
    <section className="bg-porcelain py-16">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="mb-3 font-serif text-2xl font-bold text-navy lg:text-3xl">
            Danh mục sản phẩm
          </h2>
          <p className="mx-auto max-w-md text-sm text-gray-600">
            Khám phá theo sở thích của bạn
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={category.href}
                className="group flex flex-col items-center rounded-sm bg-white p-6 text-center shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-navy/5 transition-colors group-hover:bg-navy group-hover:text-gold">
                  <category.icon size={24} className="text-navy group-hover:text-gold" />
                </div>
                <h3 className="mb-1 font-serif text-base font-semibold text-navy">
                  {category.title}
                </h3>
                <p className="text-xs text-gray-500">{category.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
