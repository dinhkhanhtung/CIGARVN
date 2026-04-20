'use client';

import Image from 'next/image';
import Link from 'next/link';

// Use local images from asset folder
const items = [
  {
    id: 1,
    type: 'blog',
    title: 'Cách bảo quản xì gà đúng cách',
    image: '/images/blog_image.jpg',
    date: '15/04/2024',
    excerpt: 'Hướng dẫn chi tiết về nhiệt độ và độ ẩm'
  },
  {
    id: 2,
    type: 'event',
    title: 'Sự kiện thưởng thức Cohiba',
    image: '/images/event_image_1_.jpg',
    date: '25/04/2024',
    excerpt: 'Tham gia buổi tối thưởng thức xì gà'
  },
  {
    id: 3,
    type: 'social',
    title: 'Theo dõi chúng tôi',
    image: '/images/social_media_image.jpg',
    excerpt: 'Cập nhật tin tức trên Instagram'
  }
];

export default function BlogEventsSocial() {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-[#1a1a2e]">Blog / Events / Social</h2>
        </div>

        {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {items.map((item) => (
            <Link
              key={item.id}
              href="#"
              className="group block overflow-hidden bg-white shadow-sm"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-3 sm:p-4">
                <p className="mb-1 text-xs font-medium uppercase text-[#d4af37]">
                  {item.type}
                </p>
                <h3 className="mb-1 sm:mb-2 text-sm sm:text-base font-medium text-[#1a1a2e]">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600">{item.excerpt}</p>
                {item.date && (
                  <p className="mt-1 sm:mt-2 text-xs text-gray-500">{item.date}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
