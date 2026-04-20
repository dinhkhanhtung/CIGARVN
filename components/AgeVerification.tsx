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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-4 max-w-md rounded-sm bg-white p-8 text-center shadow-2xl"
          >
            <div className="mb-6 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-navy/10">
                <svg className="h-10 w-10 text-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            <h2 className="mb-3 font-serif text-2xl font-bold text-navy">
              Xác nhận độ tuổi
            </h2>

            <p className="mb-6 text-sm leading-relaxed text-gray-600">
              Trang web này chứa sản phẩm dành cho người trên 18 tuổi. <br />
              Vui lòng xác nhận bạn đủ 18 tuổi để tiếp tục.
            </p>

            <div className="space-y-3">
              <button
                onClick={handleVerify}
                className="w-full rounded-sm bg-navy py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
              >
                Tôi đã trên 18 tuổi
              </button>

              <button
                onClick={handleReject}
                className="w-full rounded-sm border border-gray-300 py-3 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50"
              >
                Tôi chưa đủ 18 tuổi
              </button>
            </div>

            <p className="mt-4 text-xs text-gray-400">
              Bằng việc tiếp tục, bạn đồng ý với các điều khoản sử dụng
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
