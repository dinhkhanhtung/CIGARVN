'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Wine, Calendar, MapPin, ArrowRight } from 'lucide-react';

export default function SamplingLounge() {
  return (
    <section className="bg-porcelain py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[16/10] overflow-hidden rounded-sm lg:order-1"
          >
            <Image
              src="/images/banner-events.jpg"
              alt="Sampling Lounge"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <div className="flex items-center gap-2 text-white">
                <MapPin size={16} className="text-gold" />
                <span className="text-sm">TP. Hồ Chí Minh</span>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:order-2"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-gold/30 bg-gold/10 px-3 py-1.5">
              <Wine size={14} className="text-gold" />
              <span className="text-xs font-medium text-gold">Trải nghiệm độc quyền</span>
            </div>

            <h2 className="mb-4 font-serif text-2xl font-bold text-navy lg:text-3xl">
              Sampling Lounge
            </h2>

            <p className="mb-6 text-sm leading-relaxed text-gray-600">
              Tham gia các buổi tối thưởng thức xì gà - một trong những trải nghiệm độc đáo 
              dành cho người yêu xì gà. Dù bạn là người mới hay đã sành sỏi, 
              chúng tôi đều chào đón bạn tham gia cùng chúng tôi.
            </p>

            <p className="mb-6 text-sm leading-relaxed text-gray-600">
              Một trong những chuyên gia của chúng tôi sẽ đồng hành cùng khách mời, 
              cùng với đại diện từ các thương hiệu đồ uống danh tiếng 
              để tạo nên một buổi tối tuyệt vời với xì gà, đồ uống và 
              những cuộc trò chuyện đầy cảm hứng.
            </p>

            <div className="mb-6 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3 rounded-sm bg-white p-4">
                <Calendar size={20} className="flex-shrink-0 text-navy" />
                <div>
                  <div className="text-sm font-medium text-navy">Thứ 7 hàng tuần</div>
                  <div className="text-xs text-gray-500">19:00 - 21:00</div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-sm bg-white p-4">
                <MapPin size={20} className="flex-shrink-0 text-navy" />
                <div>
                  <div className="text-sm font-medium text-navy">Quận 1</div>
                  <div className="text-xs text-gray-500">TP. Hồ Chí Minh</div>
                </div>
              </div>
            </div>

            <Link
              href="/events"
              className="group inline-flex items-center gap-2 rounded-sm bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
            >
              Đăng ký tham gia
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
