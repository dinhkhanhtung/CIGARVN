'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden bg-primary lg:h-[700px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/lounge_jjfox.jpg"
          alt="Cigar luxury background"
          fill
          priority
          className="object-cover opacity-50"
        />
        {/* Mobile: Bottom gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent lg:bg-gradient-to-r lg:from-primary/90 lg:via-primary/70 lg:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-7xl items-end px-4 pb-12 sm:items-center sm:pb-0 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full max-w-2xl sm:max-w-xl lg:max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-2 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-accent animate-pulse" />
            <span className="text-xs font-medium text-accent-light">
              Xì gà chính hãng, nhập khẩu trực tiếp
            </span>
          </div>

          <h1 className="mb-6 font-serif text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-6xl">
            Trải nghiệm đẳng cấp
            <br />
            <span className="text-accent">xì gà Cuba</span> tuyệt hảo
          </h1>

          <p className="mb-8 max-w-lg text-sm leading-relaxed text-white/90 sm:text-base lg:text-lg">
            Khám phá bộ sưu tập xì gà cao cấp từ Cuba, Dominican, Nicaragua và
            phụ kiện chính hãng. Đẳng cấp quý ông, tinh tế trong từng đường nét.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            <Link
              href="/san-pham"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-primary shadow-lg transition-all hover:bg-accent-light hover:shadow-xl active:scale-95 sm:px-6"
            >
              Khám phá ngay
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/bo-suu-tap"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-5 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/50 active:scale-95 sm:px-6"
            >
              Bộ sưu tập đặc biệt
            </Link>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex gap-6 sm:gap-8 border-t border-white/20 pt-6 sm:mt-12"
          >
            <div>
              <div className="font-serif text-xl font-bold text-accent sm:text-2xl">500+</div>
              <div className="text-[10px] uppercase tracking-wider text-white/60 sm:text-xs">Sản phẩm</div>
            </div>
            <div>
              <div className="font-serif text-xl font-bold text-accent sm:text-2xl">15+</div>
              <div className="text-[10px] uppercase tracking-wider text-white/60 sm:text-xs">Thương hiệu</div>
            </div>
            <div>
              <div className="font-serif text-xl font-bold text-accent sm:text-2xl">10K+</div>
              <div className="text-[10px] uppercase tracking-wider text-white/60 sm:text-xs">Khách hàng</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - hide on mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
      >
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs">Cuộn xuống</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="h-6 w-4 rounded-full border border-white/30"
          >
            <div className="mx-auto mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
