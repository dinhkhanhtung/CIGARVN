'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="bg-gold/10 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-between gap-6 rounded-sm bg-white p-8 shadow-sm lg:flex-row"
        >
          <div className="text-center lg:text-left">
            <div className="mb-2 inline-flex items-center gap-2">
              <Mail size={18} className="text-gold" />
              <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                Đăng ký nhận tin
              </span>
            </div>
            <h3 className="font-serif text-xl font-semibold text-navy">
              Nhận thông tin về sản phẩm mới và ưu đãi đặc biệt
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              Chúng tôi sẽ gửi email khi có sản phẩm mới hoặc sự kiện đặc biệt.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-md lg:w-auto">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập email của bạn"
                className="flex-1 rounded-sm border border-gray-300 px-4 py-3 text-sm focus:border-navy focus:outline-none"
                required
              />
              <button
                type="submit"
                className="flex items-center gap-2 rounded-sm bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
              >
                <Send size={16} />
                <span className="hidden sm:inline">Đăng ký</span>
              </button>
            </div>
            {isSubmitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-green-600"
              >
                Cảm ơn bạn đã đăng ký!
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
