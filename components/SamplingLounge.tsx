'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Wine, Calendar, MapPin, ArrowRight } from 'lucide-react';
import { JJFOX_IMAGES } from '@/lib/images';

export default function SamplingLounge() {
  return (
    <section className="bg-cream py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[16/10] overflow-hidden rounded-lg shadow-2xl lg:order-1"
          >
            <Image
              src={JJFOX_IMAGES.events}
              alt="Sampling Lounge"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 text-white">
                <MapPin size={18} className="text-gold" />
                <span className="text-base font-semibold">Cu Van, Thái Nguyên</span>
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
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-gold/10 px-4 py-2">
              <Wine size={16} className="text-gold" />
              <span className="text-xs font-bold uppercase tracking-wider text-gold">Trải nghiệm độc quyền</span>
            </div>

            <h2 className="mb-6 font-serif text-3xl font-bold text-navy lg:text-4xl">
              Sampling Lounge
            </h2>

            <p className="mb-6 text-base leading-relaxed text-gray-700 lg:text-lg">
              Tham gia các buổi tối thưởng thức xì gà - một trong những trải nghiệm độc đáo 
              dành cho người yêu xì gà. Dù bạn là người mới hay đã sành sỏi, 
              chúng tôi đều chào đón bạn tham gia cùng chúng tôi.
            </p>

            <p className="mb-8 text-base leading-relaxed text-gray-700 lg:text-lg">
              Một trong những chuyên gia của chúng tôi sẽ đồng hành cùng khách mời, 
              cùng với đại diện từ các thương hiệu đồ uống danh tiếng 
              để tạo nên một buổi tối tuyệt vời với xì gà, đồ uống và 
              những cuộc trò chuyện đầy cảm hứng.
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-md">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-navy/10">
                  <Calendar size={20} className="text-navy" />
                </div>
                <div>
                  <div className="text-sm font-bold text-navy">Thứ 7 hàng tuần</div>
                  <div className="text-xs text-gray-500 mt-1">19:00 - 21:00</div>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl bg-white p-5 shadow-md">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-navy/10">
                  <MapPin size={20} className="text-navy" />
                </div>
                <div>
                  <div className="text-sm font-bold text-navy">Cu Van</div>
                  <div className="text-xs text-gray-500 mt-1">Thái Nguyên</div>
                </div>
              </div>
            </div>

            <Link
              href="/events"
              className="group inline-flex items-center gap-2 rounded-full bg-navy px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:bg-navy-dark hover:shadow-xl hover:-translate-y-1 active:translate-y-0"
            >
              Đăng ký tham gia
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
