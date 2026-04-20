'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Users, Crown, History } from 'lucide-react';

export default function Heritage() {
  return (
    <section className="bg-navy py-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-gold/30 bg-gold/10 px-3 py-1.5">
              <History size={14} className="text-gold" />
              <span className="text-xs font-medium text-gold">Di sản & Truyền thống</span>
            </div>

            <h2 className="mb-6 font-serif text-3xl font-bold leading-tight lg:text-4xl">
              Hơn 20 năm kinh nghiệm trong thế giới xì gà
            </h2>

            <p className="mb-6 text-sm leading-relaxed text-white/80">
              Chúng tôi đã phục vụ những khách hàng tinh tế từ mọi tầng lớp - 
              từ doanh nhân đến nghệ sĩ, từ người mới bắt đầu đến những người sành sỏi. 
              Trong số đó có những người yêu thích xì gà đích thực, những người tìm kiếm 
              sự hoàn hảo trong từng đường nét.
            </p>

            <p className="mb-8 text-sm leading-relaxed text-white/80">
              Cigar VN được thành lập với sứ mệnh mang đến những điếu xì gà chính hãng 
              từ Cuba, Dominican, Nicaragua và các vùng đất nổi tiếng khác. 
              Chúng tôi tự hào là đối tác của nhiều thương hiệu danh tiếng như 
              Cohiba, Montecristo, Davidoff, và nhiều hãng khác.
            </p>

            <div className="grid grid-cols-3 gap-4 border-t border-white/20 pt-6">
              <div className="text-center">
                <div className="mb-2 flex justify-center">
                  <Award size={28} className="text-gold" />
                </div>
                <div className="font-serif text-2xl font-bold text-gold">20+</div>
                <div className="text-xs text-white/60">Năm kinh nghiệm</div>
              </div>
              <div className="border-x border-white/20 text-center">
                <div className="mb-2 flex justify-center">
                  <Users size={28} className="text-gold" />
                </div>
                <div className="font-serif text-2xl font-bold text-gold">15K+</div>
                <div className="text-xs text-white/60">Khách hàng</div>
              </div>
              <div className="text-center">
                <div className="mb-2 flex justify-center">
                  <Crown size={28} className="text-gold" />
                </div>
                <div className="font-serif text-2xl font-bold text-gold">50+</div>
                <div className="text-xs text-white/60">Thương hiệu</div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <Image
                src="/images/lounge_jjfox.jpg"
                alt="Cigar Lounge Heritage"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-sm bg-gold p-4 shadow-lg">
              <div className="text-center">
                <div className="font-serif text-3xl font-bold text-navy">2005</div>
                <div className="text-xs font-medium text-navy/70">Năm thành lập</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
