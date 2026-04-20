'use client';

import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Youtube } from 'lucide-react';

const footerLinks = {
  shop: [
    { label: 'Xì gà Cuba', href: '/xuat-xu/cuba' },
    { label: 'Xì gà Dominican', href: '/xuat-xu/dominican' },
    { label: 'Phụ kiện', href: '/phu-kien' },
    { label: 'Bộ sưu tập', href: '/bo-suu-tap' },
    { label: 'Sản phẩm mới', href: '/san-pham?sort=newest' },
  ],
  help: [
    { label: 'Hướng dẫn mua hàng', href: '/huong-dan' },
    { label: 'Vận chuyển & Giao hàng', href: '/van-chuyen' },
    { label: 'Đổi trả & Hoàn tiền', href: '/doi-tra' },
    { label: 'Câu hỏi thường gặp', href: '/faq' },
    { label: 'Liên hệ', href: '/lien-he' },
  ],
  about: [
    { label: 'Về chúng tôi', href: '/ve-chung-toi' },
    { label: 'Sampling Lounge', href: '/sampling-lounge' },
    { label: 'Sự kiện', href: '/events' },
    { label: 'Blog', href: '/blog' },
    { label: 'Tuyển dụng', href: '/tuyen-dung' },
  ],
  legal: [
    { label: 'Điều khoản sử dụng', href: '/dieu-khoan' },
    { label: 'Chính sách bảo mật', href: '/bao-mat' },
    { label: 'Xác nhận độ tuổi', href: '/tuoi' },
    { label: 'Cookie Policy', href: '/cookie' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-6 block">
              <div className="font-serif text-3xl font-bold">
                <span className="text-gold">CIGAR</span>
                <span className="ml-1 text-white">VN</span>
              </div>
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-white/80">
              Hơn 20 năm kinh nghiệm trong thế giới xì gà. 
              Chuyên cung cấp xì gà chính hãng từ Cuba, Dominican, Nicaragua.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-gold hover:scale-110"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-gold hover:scale-110"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all hover:bg-gold hover:scale-110"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="mb-6 font-serif text-sm font-bold uppercase tracking-wider text-gold">Mua sắm</h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="mb-6 font-serif text-sm font-bold uppercase tracking-wider text-gold">Hỗ trợ</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="mb-6 font-serif text-sm font-bold uppercase tracking-wider text-gold">Về chúng tôi</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div>
            <h4 className="mb-6 font-serif text-sm font-bold uppercase tracking-wider text-gold">Liên hệ</h4>
            <ul className="mb-6 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 flex-shrink-0 text-gold" />
                <span className="text-sm text-white/80">
                  Cu Van, Thái Nguyên
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-gold" />
                <a href="tel:0982581222" className="text-sm text-white/80 hover:text-gold font-semibold">
                  0982.581.222
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-gold" />
                <a href="mailto:info@cigarvn.com" className="text-sm text-white/80 hover:text-gold">
                  info@cigarvn.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 flex-shrink-0 text-gold" />
                <span className="text-sm text-white/80">
                  Thứ 2 - Thứ 7: 9:00 - 21:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter */}
      <div className="border-t border-white/10 bg-navy-dark">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="text-center">
            <h3 className="mb-3 font-serif text-xl font-bold text-white">Đăng ký nhận tin</h3>
            <p className="mb-6 text-sm text-white/70">
              Nhận thông tin về sản phẩm mới, sự kiện và ưu đãi đặc biệt
            </p>
            <div className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Email của bạn"
                className="flex-1 rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder-white/50 outline-none transition-colors focus:border-gold"
              />
              <button className="rounded-lg bg-gold px-6 py-3 text-sm font-bold uppercase tracking-wide text-navy transition-all hover:bg-gold-light hover:shadow-lg">
                Đăng ký
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/50">
              © 2024 Cigar VN. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-xs text-white/50 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
