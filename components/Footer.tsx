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
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 block">
              <div className="font-serif text-2xl font-bold">
                <span className="text-gold">CIGAR</span>
                <span className="ml-1 text-white">VN</span>
              </div>
            </Link>
            <p className="mb-4 text-xs leading-relaxed text-white/70">
              Hơn 20 năm kinh nghiệm trong thế giới xì gà. 
              Chuyên cung cấp xì gà chính hãng từ Cuba, Dominican, Nicaragua.
            </p>
            <div className="flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold"
              >
                <Facebook size={16} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="mb-4 font-serif text-sm font-semibold text-gold">Mua sắm</h4>
            <ul className="space-y-2">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div>
            <h4 className="mb-4 font-serif text-sm font-semibold text-gold">Hỗ trợ</h4>
            <ul className="space-y-2">
              {footerLinks.help.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="mb-4 font-serif text-sm font-semibold text-gold">Về chúng tôi</h4>
            <ul className="space-y-2">
              {footerLinks.about.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-xs text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-4 font-serif text-sm font-semibold text-gold">Liên hệ</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 flex-shrink-0 text-gold" />
                <span className="text-xs text-white/70">
                  123 Nguyễn Văn A, Quận 1, TP.HCM
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-gold" />
                <a href="tel:0982581222" className="text-xs text-white/70 hover:text-gold">
                  0982.581.222
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-gold" />
                <a href="mailto:info@cigarvn.com" className="text-xs text-white/70 hover:text-gold">
                  info@cigarvn.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={14} className="mt-0.5 flex-shrink-0 text-gold" />
                <span className="text-xs text-white/70">
                  Thứ 2 - Thứ 7: 9:00 - 21:00
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-white/50">
              © 2024 Cigar VN. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex gap-4">
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
