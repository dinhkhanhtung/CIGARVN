'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Calendar, Instagram, ArrowRight } from 'lucide-react';

const blogPosts = [
  {
    title: 'Cách bảo quản xì gà đúng cách',
    excerpt: 'Hướng dẫn chi tiết về nhiệt độ, độ ẩm và cách lưu trữ xì gà để giữ nguyên hương vị.',
    image: '/images/banner-accessories.jpg',
    date: '15/04/2024',
  },
  {
    title: 'Top 5 xì gà Cuba cho người mới',
    excerpt: 'Những điếu xì gà dễ hút, hương vị nhẹ nhàng phù hợp cho người mới bắt đầu.',
    image: '/images/banner-new.jpg',
    date: '10/04/2024',
  },
];

const events = [
  {
    title: 'Sự kiện thưởng thức Cohiba',
    date: '25/04/2024',
    location: 'Quận 1, TP.HCM',
  },
  {
    title: 'Workshop cắt xì gà chuyên nghiệp',
    date: '02/05/2024',
    location: 'Quận 3, TP.HCM',
  },
];

export default function BlogEvents() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gold">
            Cập nhật mới nhất
          </span>
          <h2 className="font-serif text-2xl font-bold text-navy lg:text-3xl">
            Blog / Sự kiện / Mạng xã hội
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Blog Column */}
          <div className="lg:col-span-2">
            <div className="mb-4 flex items-center gap-2">
              <BookOpen size={18} className="text-navy" />
              <h3 className="font-serif text-lg font-semibold text-navy">Từ Blog</h3>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link href="/blog" className="group block">
                    <div className="relative mb-3 aspect-video overflow-hidden rounded-sm">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="text-xs text-gray-400">{post.date}</div>
                    <h4 className="mb-2 font-serif text-base font-medium text-navy transition-colors group-hover:text-gold">
                      {post.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">{post.excerpt}</p>
                  </Link>
                </motion.div>
              ))}
            </div>

            <Link
              href="/blog"
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-navy hover:text-gold"
            >
              Xem tất cả bài viết
              <ArrowRight size={14} />
            </Link>
          </div>

          {/* Events & Social Column */}
          <div className="space-y-8">
            {/* Events */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <Calendar size={18} className="text-navy" />
                <h3 className="font-serif text-lg font-semibold text-navy">Sự kiện sắp tới</h3>
              </div>

              <div className="space-y-3">
                {events.map((event, index) => (
                  <motion.div
                    key={event.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="rounded-sm border border-gray-100 bg-porcelain p-4"
                  >
                    <div className="mb-1 text-xs font-medium text-gold">{event.date}</div>
                    <h4 className="mb-1 text-sm font-medium text-navy">{event.title}</h4>
                    <div className="text-xs text-gray-500">{event.location}</div>
                  </motion.div>
                ))}
              </div>

              <Link
                href="/events"
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-navy hover:text-gold"
              >
                Xem tất cả sự kiện
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Social */}
            <div className="rounded-sm bg-navy p-6 text-white">
              <div className="mb-4 flex items-center gap-2">
                <Instagram size={18} className="text-gold" />
                <h3 className="font-serif text-lg font-semibold">Mạng xã hội</h3>
              </div>
              <p className="mb-4 text-sm text-white/80">
                Theo dõi chúng tôi để cập nhật tin tức mới nhất, các bộ sưu tập đặc biệt 
                và hình ảnh cuộc sống xì gà.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
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
