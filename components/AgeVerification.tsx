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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm px-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-md overflow-hidden rounded-lg bg-white shadow-2xl"
          >
            <div className="px-8 py-10 text-center">
              {/* Logo */}
              <div className="mb-6 font-serif text-3xl font-bold">
                <span className="text-gold">CIGAR</span>
                <span className="ml-1 text-navy">VN</span>
              </div>

              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-navy/10">
                  <svg className="h-8 w-8 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <h2 className="mb-3 font-serif text-2xl font-bold text-navy">
                Xác nhận độ tuổi
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-gray-600">
                Trang web này chứa sản phẩm dành cho người trên 18 tuổi.<br />
                Vui lòng xác nhận bạn đủ 18 tuổi để tiếp tục.
              </p>

              {/* Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleVerify}
                  className="w-full rounded-lg bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
                >
                  TÔI ĐÃ TRÊN 18 TUỔI - NHẬP TRANG
                </button>
                <button
                  onClick={handleReject}
                  className="w-full rounded-lg border border-gray-300 px-6 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50"
                >
                  Tôi chưa đủ 18 tuổi
                </button>
              </div>

              <p className="mt-6 text-xs text-gray-400">
                Bằng việc tiếp tục, bạn đồng ý với các điều khoản sử dụng
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
