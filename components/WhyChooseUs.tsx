'use client';

import { motion } from 'framer-motion';
import { Shield, Truck, Award, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Chính hãng 100%',
    description: 'Cam kết sản phẩm chính hãng, nguồn gốc rõ ràng từ nhà sản xuất',
  },
  {
    icon: Truck,
    title: 'Giao hàng toàn quốc',
    description: 'Miễn phí vận chuyển với đơn hàng từ 2 triệu đồng',
  },
  {
    icon: Award,
    title: 'Chuyên gia tư vấn',
    description: 'Đội ngũ tư vấn giàu kinh nghiệm, am hiểu xì gà',
  },
  {
    icon: HeadphonesIcon,
    title: 'Hỗ trợ 24/7',
    description: 'Luôn sẵn sàng hỗ trợ qua Zalo và hotline',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-navy py-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="mb-2 block text-xs font-semibold uppercase tracking-wider text-gold">
            Tại sao chọn chúng tôi
          </span>
          <h2 className="font-serif text-2xl font-bold lg:text-3xl">
            Cam kết dịch vụ
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                <feature.icon size={24} className="text-gold" />
              </div>
              <h3 className="mb-2 font-serif text-base font-semibold">
                {feature.title}
              </h3>
              <p className="text-xs leading-relaxed text-white/70">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
