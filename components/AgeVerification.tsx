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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 px-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-md bg-white"
          >
            <div className="bg-[#d4af37] px-6 py-4">
              <h1 className="text-lg font-bold text-[#1a1a2e] uppercase tracking-wide">Age Verification</h1>
            </div>
            
            <div className="px-8 py-8 text-center">
              <div className="mb-6 text-3xl font-bold">
                <span className="text-[#d4af37]">CIGAR</span>
                <span className="text-[#1a1a2e] ml-1">VN</span>
              </div>

              <p className="mb-8 text-gray-600 leading-relaxed">
                This website contains products only suitable for those 18 years or older.
                <br /><br />
                Click Enter only if you are at least 18 years of age.
              </p>

              <div className="space-y-3">
                <button
                  onClick={handleVerify}
                  id="enter"
                  className="w-full bg-[#d4af37] px-6 py-4 text-sm font-bold uppercase text-[#1a1a2e] transition-colors hover:bg-[#e5c158]"
                >
                  Enter
                </button>
                <button
                  onClick={handleReject}
                  className="w-full border border-gray-300 px-6 py-3 text-sm text-gray-600 transition-colors hover:bg-gray-50"
                >
                  Exit
                </button>
              </div>

              <p className="mt-6 text-xs text-gray-400">
                By entering you accept our Terms and Conditions
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
