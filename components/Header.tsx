'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Menu, X, ChevronDown, User, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// JJ Fox exact navigation menu
const navItems = [
  {
    label: 'Thương hiệu',
    href: '/san-pham',
    children: [
      { label: 'Cohiba', href: '/san-pham?brand=cohiba' },
      { label: 'Montecristo', href: '/san-pham?brand=montecristo' },
      { label: 'Romeo y Julieta', href: '/san-pham?brand=romeo' },
      { label: 'Partagas', href: '/san-pham?brand=partagas' },
      { label: 'H. Upmann', href: '/san-pham?brand=upmann' },
      { label: 'Hoyo de Monterrey', href: '/san-pham?brand=hoyo' },
      { label: 'Bolivar', href: '/san-pham?brand=bolivar' },
      { label: 'Trinidad', href: '/san-pham?brand=trinidad' },
    ]
  },
  {
    label: 'Xì gà Cuba',
    href: '/san-pham?origin=cuba',
    children: [
      { label: 'Limited Edition', href: '/san-pham?edition=limited' },
      { label: 'Regional Edition', href: '/san-pham?edition=regional' },
      { label: 'Reserva', href: '/san-pham?edition=reserva' },
      { label: 'Gran Reserva', href: '/san-pham?edition=gran-reserva' },
    ]
  },
  {
    label: 'Xì gà New World',
    href: '/san-pham?origin=new-world',
    children: [
      { label: 'Davidoff', href: '/san-pham?brand=davidoff' },
      { label: 'Arturo Fuente', href: '/san-pham?brand=fuente' },
      { label: 'Padrón', href: '/san-pham?brand=padrón' },
      { label: 'My Father', href: '/san-pham?brand=my-father' },
    ]
  },
  { label: 'Phụ kiện', href: '/san-pham?category=phu-kien' },
  { label: 'Bộ sampler', href: '/san-pham?category=samplers' },
  { label: 'Quà tặng', href: '/san-pham?category=gifts' },
  {
    label: 'Limited/Special',
    href: '/san-pham?category=limited-special'
  },
  { label: 'Tẩu & Thuốc', href: '/san-pham?category=pipes-tobacco' },
  { label: 'Sự kiện', href: '/tin-tuc' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [cartCount] = useState(0);

  return (
    <header className="page-header sticky top-0 z-50 bg-navy text-white">
      {/* Top announcement bar - JJ Fox style */}
      <div className="bg-gold/10 border-b border-gold/20">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 text-xs">
          <div className="flex items-center gap-4">
            <span className="text-gold font-medium">Giao hàng toàn quốc</span>
            <span className="hidden text-white/70 sm:inline">|</span>
            <span className="hidden text-white/80 sm:inline">Miễn phí với đơn từ 2 triệu</span>
          </div>
          <div className="flex items-center gap-4">
            <a href="tel:0982581222" className="flex items-center gap-1.5 font-medium text-gold hover:text-gold-light transition-colors">
              <Phone size={12} />
              <span>0982.581.222</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="text-xl sm:text-2xl font-bold tracking-tight font-serif">
                <span className="text-gold">CIGAR</span>
                <span className="text-white ml-1">VN</span>
              </div>
            </Link>

            <nav className="hidden lg:block">
              <ul className="flex items-center gap-1">
                {navItems.map((item) => (
                  <li
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center gap-1 px-4 py-2 text-sm font-medium transition-all',
                        activeDropdown === item.label ? 'text-gold' : 'text-white/90'
                      )}
                    >
                      {item.label}
                      {item.children && <ChevronDown size={14} className={cn('transition-transform duration-200', activeDropdown === item.label && 'rotate-180')} />}
                    </Link>

                    <AnimatePresence>
                      {item.children && activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute left-0 top-full z-50 min-w-[240px] bg-white py-2 shadow-2xl"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-navy"
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

            <div className="flex items-center gap-2">
              {/* Desktop Actions */}
              <button className="hidden sm:flex h-10 w-10 items-center justify-center hover:text-gold transition-colors">
                <Search size={20} />
              </button>
              <Link href="/customer/account" className="hidden sm:flex h-10 w-10 items-center justify-center hover:text-gold transition-colors">
                <User size={20} />
              </Link>
              <Link href="/gio-hang" className="relative flex h-10 w-10 items-center justify-center hover:text-gold transition-colors">
                <ShoppingBag size={20} />
                {cartCount > 0 && <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-xs font-bold text-navy">{cartCount}</span>}
              </Link>
              {/* Mobile Menu Button */}
              <button 
                className="flex h-10 w-10 items-center justify-center lg:hidden hover:text-gold transition-colors" 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label={isMobileMenuOpen ? 'Đóng menu' : 'Mở menu'}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-black/50 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'spring', damping: 25, stiffness: 200 }} className="fixed right-0 top-0 z-50 h-full w-[80%] max-w-sm bg-navy shadow-2xl lg:hidden">
              <nav className="px-4 py-6">
                <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="text-xl font-bold font-serif"><span className="text-gold">CIGAR</span><span className="text-white ml-1">VN</span></div>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="flex h-10 w-10 items-center justify-center hover:text-gold transition-colors"><X size={24} /></button>
                </div>
                <ul className="space-y-1">
                  {navItems.map((item) => (
                    <li key={item.label}>
                      {item.children ? (
                        <details className="group">
                          <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-medium text-white/90 hover:text-gold transition-colors">{item.label}<ChevronDown size={16} className="transition-transform group-open:rotate-180" /></summary>
                          <ul className="mt-1 space-y-1 border-l-2 border-gold/30 pl-4">
                            {item.children.map((child) => (
                              <li key={child.label}>
                                <Link href={child.href} className="block px-4 py-2 text-sm text-white/70 hover:text-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{child.label}</Link>
                              </li>
                            ))}
                          </ul>
                        </details>
                      ) : (
                        <Link href={item.href} className="block px-4 py-3 text-sm font-medium text-white/90 hover:text-gold transition-colors" onClick={() => setIsMobileMenuOpen(false)}>{item.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
