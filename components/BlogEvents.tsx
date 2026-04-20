'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Calendar, Instagram, ArrowRight, MapPin } from 'lucide-react';
import { JJFOX_IMAGES } from '@/lib/images';

const blogPosts = [
  {
    title: 'Cách bảo quản xì gà đúng cách',
    excerpt: 'Hướng dẫn chi tiết về nhiệt độ, độ ẩm và cách lưu trữ xì gà để giữ nguyên hương vị.',
    image: JJFOX_IMAGES.blog,
    date: '15/04/2024',
  },
  {
    title: 'Top 5 xì gà Cuba cho người mới',
    excerpt: 'Những điếu xì gà dễ hút, hương vị nhẹ nhàng phù hợp cho người mới bắt đầu.',
    image: JJFOX_IMAGES.expert,
    date: '10/04/2024',
  },
  {
    title: 'S.T. Dupont - Biểu tượng sang trọng',
    excerpt: 'Khám phá lịch sử và nghệ thuật chế tác bật lửa cao cấp từ Pháp.',
    image: JJFOX_IMAGES.lighterGold,
    date: '05/04/2024',
  },
];

const events = [
  {
    title: 'Sự kiện thưởng thức Cohiba',
    date: '25/04/2024',
    location: 'Quận 1, TP.HCM',
    image: JJFOX_IMAGES.event1,
  },
  {
    title: 'Workshop cắt xì gà chuyên nghiệp',
    date: '02/05/2024',
    location: 'Quận 3, TP.HCM',
    image: JJFOX_IMAGES.whiteSpot,
  },
  {
    title: 'Gala Dinner & Cigar Night',
    date: '15/05/2024',
    location: 'Quận 2, TP.HCM',
    image: JJFOX_IMAGES.events,
  },
];

export default function BlogEvents() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-gold">
            Cập nhật mới nhất
          </span>
          <h2 className="font-serif text-3xl font-bold text-navy lg:text-4xl">
            Blog / Sự kiện / Mạng xã hội
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Blog Column */}
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/10">
                <BookOpen size={20} className="text-navy" />
              </div>
              <h3 className="font-serif text-xl font-bold text-navy">The Fox Press - Blog</h3>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link href="/blog" className="group block">
                    <div className="relative mb-4 aspect-video overflow-hidden rounded-lg shadow-md">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                    <div className="mb-2 text-xs font-semibold text-gold">{post.date}</div>
                    <h4 className="mb-3 font-serif text-lg font-bold text-navy transition-colors group-hover:text-gold lg:text-xl">
                      {post.title}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">{post.excerpt}</p>
                  </Link>
                </motion.div>
              ))}
            </div>

            <Link
              href="/blog"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-navy hover:text-gold transition-colors"
            >
              Xem tất cả bài viết
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
            </Link>
          </div>

          {/* Events & Social Column */}
          <div className="space-y-8">
            {/* Events */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/10">
                  <Calendar size={20} className="text-navy" />
                </div>
                <h3 className="font-serif text-xl font-bold text-navy">Sự kiện sắp tới</h3>
              </div>

              <div className="space-y-4">
                {events.map((event, index) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="rounded-xl border border-gray-100 bg-gray-50 p-5 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="mb-2 text-xs font-bold uppercase tracking-wider text-gold">{event.date}</div>
                    <h4 className="mb-2 text-base font-bold text-navy">{event.title}</h4>
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <MapPin size={12} />
                      {event.location}
                    </div>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/events"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-navy hover:text-gold transition-colors"
              >
                Xem tất cả sự kiện
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-2" />
              </Link>
            </div>

            {/* Social */}
            <div className="rounded-2xl bg-navy p-8 text-white shadow-2xl">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/20">
                  <Instagram size={20} className="text-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold">Mạng xã hội</h3>
              </div>
              <p className="mb-6 text-base text-white/90 leading-relaxed">
                Theo dõi chúng tôi để cập nhật tin tức mới nhất, các bộ sưu tập đặc biệt 
                và hình ảnh cuộc sống xì gà.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-gold hover:scale-110"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-gold hover:scale-110"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
