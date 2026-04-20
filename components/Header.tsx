'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Search, ShoppingBag, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}

const menuItems: MenuItem[] = [
  {
    label: 'Thương hiệu',
    href: '/san-pham',
    children: [
      { label: 'Cohiba', href: '/san-pham?brand=cohiba' },
      { label: 'Montecristo', href: '/san-pham?brand=montecristo' },
      { label: 'Romeo y Julieta', href: '/san-pham?brand=romeo' },
      { label: 'Davidoff', href: '/san-pham?brand=davidoff' },
      { label: 'Partagas', href: '/san-pham?brand=partagas' },
      { label: 'H. Upmann', href: '/san-pham?brand=upmann' },
    ],
  },
  {
    label: 'Xuất xứ',
    href: '/san-pham',
    children: [
      { label: 'Cuba', href: '/san-pham?origin=cuba' },
      { label: 'Dominican', href: '/san-pham?origin=dominican' },
      { label: 'Nicaragua', href: '/san-pham?origin=nicaragua' },
      { label: 'Honduras', href: '/san-pham?origin=honduras' },
    ],
  },
  {
    label: 'Hình dáng',
    href: '/san-pham',
    children: [
      { label: 'Robusto', href: '/san-pham?shape=robusto' },
      { label: 'Toro', href: '/san-pham?shape=toro' },
      { label: 'Churchill', href: '/san-pham?shape=churchill' },
      { label: 'Corona', href: '/san-pham?shape=corona' },
      { label: 'Pyramid', href: '/san-pham?shape=pyramid' },
    ],
  },
  {
    label: 'Phụ kiện',
    href: '/san-pham?category=phu-kien',
    children: [
      { label: 'Bật lửa', href: '/san-pham?category=bat-lua' },
      { label: 'Dao cắt', href: '/san-pham?category=dao-cat' },
      { label: 'Gạt tàn', href: '/san-pham?category=gat-tan' },
      { label: 'Ống đựng', href: '/san-pham?category=ong-dung' },
      { label: 'Ẩm điếu', href: '/san-pham?category=am-dieu' },
    ],
  },
  { label: 'Bộ sưu tập', href: '/bo-suu-tap' },
  { label: 'Tin tức', href: '/tin-tuc' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [cartCount] = useState(0);

  return (
    <header className="sticky top-0 z-50 bg-navy text-white shadow-lg">
      {/* Top announcement bar */}
      <div className="bg-gold/10 border-b border-gold/20">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 text-xs">
          <div className="flex items-center gap-4">
            <span className="text-gold font-medium">Giao hàng toàn quốc</span>
            <span className="hidden text-white/70 sm:inline">|</span>
            <span className="hidden text-white/80 sm:inline">Miễn phí với đơn từ 2 triệu</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-white/60 hidden sm:inline">Hotline:</span>
            <a
              href="tel:0982581222"
              className="flex items-center gap-1.5 font-medium text-gold transition-colors hover:text-gold-light"
            >
              <Phone size={12} />
              <span>0982.581.222</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="font-serif text-3xl font-bold tracking-tight">
              <span className="text-gold">CIGAR</span>
              <span className="text-white ml-1">VN</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {menuItems.map((item) => (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center gap-1 px-3 py-2 text-sm font-semibold tracking-wide uppercase transition-all duration-200',
                      'hover:text-gold',
                      activeDropdown === item.label ? 'text-gold' : 'text-white/90'
                    )}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown
                        size={12}
                        className={cn(
                          'transition-transform duration-200',
                          activeDropdown === item.label && 'rotate-180'
                        )}
                      />
                    )}
                  </Link>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full z-50 min-w-[220px] rounded-lg bg-white py-3 shadow-2xl"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-navy"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              className="hidden sm:flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 hover:bg-white/10"
              aria-label="Tìm kiếm"
            >
              <Search size={18} />
            </button>

            <Link
              href="/gio-hang"
              className="relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 hover:bg-white/10"
              aria-label="Giỏ hàng"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy shadow-lg">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full transition-all duration-200 hover:bg-white/10 lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 z-50 h-full w-[80%] max-w-sm overflow-y-auto bg-gradient-to-b from-primary to-primary-dark shadow-2xl lg:hidden"
          >
            <nav className="px-4 py-6">
              {/* Close button */}
              <div className="mb-6 flex items-center justify-between">
                <div className="font-serif text-xl font-bold text-white">
                  <span className="text-gold">CIGAR</span>
                  <span className="text-white ml-1">VN</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="Đóng menu"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Menu items */}
              <ul className="space-y-1">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.children ? (
                      <details className="group">
                        <summary className="flex cursor-pointer items-center justify-between rounded-lg px-4 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-gold">
                          {item.label}
                          <ChevronDown
                            size={16}
                            className="transition-transform group-open:rotate-180"
                          />
                        </summary>
                        <ul className="mt-1 space-y-1 border-l-2 border-white/20 pl-6">
                          {item.children.map((child) => (
                            <li key={child.label}>
                              <Link
                                href={child.href}
                                className="block rounded-lg px-4 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/10 hover:text-gold"
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {child.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ) : (
                      <Link
                        href={item.href}
                        className="block rounded-lg px-4 py-3 text-sm font-medium text-white/90 transition-colors hover:bg-white/10 hover:text-gold"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>

              {/* Mobile contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 rounded-xl bg-white/10 p-4 backdrop-blur-sm"
              >
                <p className="mb-3 text-xs font-medium text-white/60 uppercase tracking-wider">
                  Liên hệ ngay
                </p>
                <a
                  href="tel:0982581222"
                  className="flex items-center gap-3 rounded-lg bg-gold px-4 py-3 text-center font-semibold text-primary transition-colors hover:bg-gold-light"
                >
                  <Phone size={18} />
                  <span>0982.581.222</span>
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
