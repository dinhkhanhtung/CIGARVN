'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowRight, Clock, User } from 'lucide-react';

const news = [
  {
    id: '1',
    title: 'Cách bảo quản xì gà đúng cách trong hộp ẩm',
    excerpt: 'Hướng dẫn chi tiết về nhiệt độ, độ ẩm và cách lưu trữ xì gà để giữ nguyên hương vị trong thời gian dài.',
    image: '/images/blog_image.jpg',
    date: '15/04/2024',
    author: 'Admin',
    readTime: '5 phút',
    category: 'Hướng dẫn',
  },
  {
    id: '2',
    title: 'Top 5 xì gà Cuba cho người mới bắt đầu',
    excerpt: 'Những điếu xì gà dễ hút, hương vị nhẹ nhàng phù hợp cho người mới bắt đầu khám phá thế giới xì gà.',
    image: '/images/phillip_expert_1_b_w_resized.jpg',
    date: '10/04/2024',
    author: 'Chuyên gia',
    readTime: '8 phút',
    category: 'Review',
  },
  {
    id: '3',
    title: 'Lịch sử Cohiba - Thương hiệu xì gà huyền thoại',
    excerpt: 'Từ những điếu xì gà dành riêng cho Fidel Castro đến biểu tượng xa xỉ toàn cầu.',
    image: '/images/bestsellers_desktop.png',
    date: '05/04/2024',
    author: 'Admin',
    readTime: '10 phút',
    category: 'Lịch sử',
  },
  {
    id: '4',
    title: 'Sự kiện thưởng thức Cohiba tháng 4/2024',
    excerpt: 'Tham gia buổi tối thưởng thức xì gà Cohiba cùng chuyên gia và rượu whisky cao cấp.',
    image: '/images/event_image_1_.jpg',
    date: '01/04/2024',
    author: 'Events Team',
    readTime: '3 phút',
    category: 'Sự kiện',
  },
  {
    id: '5',
    title: 'S.T. Dupont - Nghệ thuật bật lửa cao cấp',
    excerpt: 'Khám phá quy trình chế tác thủ công tỉ mỉ của những chiếc bật lửa xa xỉ bậc nhất thế giới.',
    image: '/images/Lighter_Gold_Diamonds_3Q.jpg',
    date: '28/03/2024',
    author: 'Admin',
    readTime: '6 phút',
    category: 'Review',
  },
  {
    id: '6',
    title: 'Fox House Blend - Hương vị độc quyền',
    excerpt: 'Bộ sưu tập xì gà độc quyền được pha trộn đặc biệt dành cho khách hàng thân thiết.',
    image: '/images/fox_house_blend.png',
    date: '20/03/2024',
    author: 'Master Blender',
    readTime: '4 phút',
    category: 'Sản phẩm',
  },
];

const categories = ['Tất cả', 'Hướng dẫn', 'Review', 'Lịch sử', 'Sự kiện', 'Sản phẩm'];

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-porcelain">
      {/* Header */}
      <div className="bg-navy py-12">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="font-serif text-3xl font-bold text-white lg:text-4xl">
            Tin tức & Sự kiện
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/70">
            Cập nhật tin tức mới nhất, hướng dẫn và sự kiện từ thế giới xì gà.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Categories */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat, index) => (
            <button
              key={cat}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                index === 0
                  ? 'bg-navy text-white'
                  : 'bg-white text-gray-600 hover:bg-navy hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group overflow-hidden rounded-sm bg-white shadow-sm"
            >
              <Link href={`/tin-tuc/${item.id}`}>
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-3 top-3">
                    <span className="rounded-sm bg-navy px-2 py-1 text-xs font-medium text-white">
                      {item.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="mb-3 flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {item.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {item.readTime}
                    </span>
                  </div>

                  <h2 className="mb-2 font-serif text-lg font-semibold text-navy transition-colors group-hover:text-gold">
                    {item.title}
                  </h2>
                  <p className="mb-4 text-sm text-gray-600 line-clamp-2">{item.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-gray-500">
                      <User size={12} />
                      {item.author}
                    </span>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-navy group-hover:text-gold">
                      Đọc tiếp
                      <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
