'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Phone } from 'lucide-react';

export default function ZaloButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-2 w-64 overflow-hidden rounded-sm bg-white shadow-lg"
          >
            <div className="bg-navy px-4 py-3">
              <h4 className="font-serif text-sm font-semibold text-white">
                Tư vấn nhanh 24/7
              </h4>
            </div>
            <div className="p-4">
              <p className="mb-3 text-xs text-gray-600">
                Chúng tôi sẵn sàng tư vấn giúp bạn chọn xì gà phù hợp nhất.
              </p>
              <a
                href="https://zalo.me/0982581222"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-sm bg-[#0068ff] px-3 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                <MessageCircle size={16} />
                Chat Zalo ngay
              </a>
              <a
                href="tel:0982581222"
                className="mt-2 flex items-center gap-2 rounded-sm border border-navy px-3 py-2 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white"
              >
                <Phone size={16} />
                Gọi hotline
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0068ff] text-white shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0068ff] focus:ring-offset-2"
        aria-label={isOpen ? 'Đóng tư vấn' : 'Mở tư vấn Zalo'}
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <div className="flex flex-col items-center">
            <MessageCircle size={20} />
            <span className="text-[10px]">Zalo</span>
          </div>
        )}
      </button>
    </div>
  );
}
