'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[600px] overflow-hidden bg-navy-dark lg:h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/lounge_jjfox.jpg"
          alt="Cigar luxury background"
          fill
          priority
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy-dark/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-sm border border-gold/30 bg-gold/10 px-3 py-1.5">
            <span className="h-2 w-2 rounded-full bg-gold" />
            <span className="text-xs font-medium text-gold-light">
              Xì gà chính hãng, nhập khẩu trực tiếp
            </span>
          </div>

          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-white lg:text-6xl">
            Trải nghiệm đẳng cấp
            <br />
            <span className="text-gold">xì gà Cuba</span> tuyệt hảo
          </h1>

          <p className="mb-8 max-w-lg text-base leading-relaxed text-white/80 lg:text-lg">
            Khám phá bộ sưu tập xì gà cao cấp từ Cuba, Dominican, Nicaragua và
            phụ kiện chính hãng. Đẳng cấp quý ông, tinh tế trong từng đường nét.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/san-pham"
              className="group inline-flex items-center gap-2 rounded-sm bg-gold px-6 py-3 text-sm font-semibold text-navy transition-all hover:bg-gold-light"
            >
              Khám phá ngay
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/bo-suu-tap"
              className="inline-flex items-center gap-2 rounded-sm border border-white/30 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-white/10"
            >
              Bộ sưu tập đặc biệt
            </Link>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex gap-8 border-t border-white/20 pt-6"
          >
            <div>
              <div className="font-serif text-2xl font-bold text-gold">500+</div>
              <div className="text-xs text-white/60">Sản phẩm</div>
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-gold">15+</div>
              <div className="text-xs text-white/60">Thương hiệu</div>
            </div>
            <div>
              <div className="font-serif text-2xl font-bold text-gold">10K+</div>
              <div className="text-xs text-white/60">Khách hàng</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs">Cuộn xuống</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-6 w-4 rounded-full border border-white/30"
          >
            <div className="mx-auto mt-1 h-1.5 w-1.5 rounded-full bg-gold" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
