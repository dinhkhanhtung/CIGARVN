'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AgeVerification() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('age-verified');
    if (!verified) {
      setIsOpen(true);
    } else {
      setIsVerified(true);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem('age-verified', 'true');
    setIsVerified(true);
    setIsOpen(false);
  };

  const handleReject = () => {
    window.location.href = 'https://www.google.com';
  };

  if (isVerified) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md px-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="w-full max-w-lg overflow-hidden rounded-lg bg-white shadow-2xl"
          >
            {/* Header with gradient background */}
            <div className="bg-gradient-to-br from-primary to-primary-dark px-6 py-8 text-center sm:px-8 sm:py-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5, type: 'spring' }}
                className="mb-4 flex justify-center"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <svg className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="font-serif text-2xl font-bold text-white sm:text-3xl"
              >
                Chào mừng
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-2 text-sm text-white/90 sm:text-base"
              >
                Nhà cung cấp xì gà cao cấp hàng đầu Việt Nam
              </motion.p>
            </div>

            {/* Content */}
            <div className="px-6 py-8 sm:px-8 sm:py-10">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mb-6 text-center text-sm leading-relaxed text-gray-600 sm:text-base"
              >
                Trang web này chứa sản phẩm dành cho người trên 18 tuổi.<br />
                Vui lòng xác nhận bạn đủ 18 tuổi để tiếp tục.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="space-y-3"
              >
                <button
                  onClick={handleVerify}
                  className="w-full rounded-lg bg-gradient-to-r from-primary to-primary-dark px-6 py-4 text-sm font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] sm:py-4 sm:text-base"
                >
                  TÔI ĐÃ TRÊN 18 TUỔI - NHẬP TRANG
                </button>

                <button
                  onClick={handleReject}
                  className="w-full rounded-lg border-2 border-gray-200 px-6 py-4 text-sm font-medium text-gray-600 transition-all hover:border-gray-300 hover:bg-gray-50 active:scale-[0.98] sm:py-4 sm:text-base"
                >
                  Tôi chưa đủ 18 tuổi
                </button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="mt-6 text-center text-xs text-gray-400 sm:text-sm"
              >
                Bằng việc tiếp tục, bạn đồng ý với các điều khoản sử dụng của chúng tôi
              </motion.p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
