'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { JJFOX_IMAGES } from '@/lib/images';

export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden bg-navy lg:h-[90vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={JJFOX_IMAGES.hero}
          alt="Cigar luxury background"
          fill
          priority
          className="object-cover opacity-60"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-transparent lg:from-navy/90 lg:via-navy/60 lg:to-transparent" />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex h-full max-w-7xl items-center px-4 lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="w-full max-w-2xl lg:max-w-3xl"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-gold/10 px-5 py-2.5 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-gold-light">
              Nhà cung cấp xì gà cao cấp hàng đầu Việt Nam
            </span>
          </div>

          <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-white lg:text-6xl lg:leading-tight">
            Trải nghiệm đẳng cấp
            <br />
            <span className="text-gold">xì gà Cuba</span> tuyệt hảo
          </h1>

          <p className="mb-10 max-w-xl text-base leading-relaxed text-white/90 lg:text-lg">
            Khám phá bộ sưu tập xì gà cao cấp từ Cuba, Dominican, Nicaragua và
            phụ kiện chính hãng. Đẳng cấp quý ông, tinh tế trong từng đường nét.
            Kế thừa tinh hoa y học cổ truyền, vì sức khỏe cộng đồng.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/san-pham"
              className="group inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold uppercase tracking-wide text-navy shadow-xl transition-all hover:bg-gold-light hover:shadow-2xl hover:-translate-y-1 active:translate-y-0 lg:px-10 lg:py-4 lg:text-base"
            >
              Khám phá ngay
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-2"
              />
            </Link>
            <Link
              href="/bo-suu-tap"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-4 text-sm font-semibold uppercase tracking-wide text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/60 active:scale-95 lg:px-10 lg:py-4 lg:text-base"
            >
              Bộ sưu tập đặc biệt
            </Link>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex gap-8 border-t border-white/20 pt-8 lg:mt-16 lg:gap-12"
          >
            <div>
              <div className="font-serif text-3xl font-bold text-gold lg:text-4xl">500+</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60 lg:text-sm">Sản phẩm</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-gold lg:text-4xl">15+</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60 lg:text-sm">Thương hiệu</div>
            </div>
            <div>
              <div className="font-serif text-3xl font-bold text-gold lg:text-4xl">10K+</div>
              <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/60 lg:text-sm">Khách hàng</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs font-medium uppercase tracking-wider">Cuộn xuống</span>
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
