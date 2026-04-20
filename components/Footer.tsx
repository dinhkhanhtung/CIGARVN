'use client';

import Link from 'next/link';
import { useState } from 'react';

const footerColumns = {
  help: {
    title: 'HELP',
    links: [
      { label: 'FAQ', href: '/faq' },
      { label: 'Delivery Information', href: '/delivery' },
      { label: 'Returns Policy', href: '/returns' },
      { label: 'Cigar Storage', href: '/storage' },
      { label: 'Age Verification', href: '/age-verification' },
    ]
  },
  about: {
    title: 'ABOUT US',
    links: [
      { label: 'Our Heritage', href: '/heritage' },
      { label: 'Sampling Lounge', href: '/sampling-lounge' },
      { label: 'Blog', href: '/blog' },
      { label: 'Events', href: '/events' },
      { label: 'Careers', href: '/careers' },
    ]
  },
  legal: {
    title: 'LEGAL',
    links: [
      { label: 'Terms & Conditions', href: '/terms' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Cookie Policy', href: '/cookies' },
    ]
  },
  store: {
    title: 'STORE FINDER',
    content: (
      <div className="text-sm text-white/70">
        <p className="mb-2">19 St James's Street</p>
        <p className="mb-2">London, SW1A 1ES</p>
        <p className="mb-2">Tel: 0982.581.222</p>
        <p>Mon-Sat: 10am - 6pm</p>
      </div>
    )
  }
};

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="page-footer bg-[#1a1a2e] text-white">
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* HELP */}
            <div>
              <h3 className="mb-4 text-sm font-bold text-[#d4af37]">{footerColumns.help.title}</h3>
              <ul className="space-y-2">
                {footerColumns.help.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ABOUT US */}
            <div>
              <h3 className="mb-4 text-sm font-bold text-[#d4af37]">{footerColumns.about.title}</h3>
              <ul className="space-y-2">
                {footerColumns.about.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <h3 className="mb-4 text-sm font-bold text-[#d4af37]">{footerColumns.legal.title}</h3>
              <ul className="space-y-2">
                {footerColumns.legal.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-white/70 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* STORE FINDER */}
            <div>
              <h3 className="mb-4 text-sm font-bold text-[#d4af37]">{footerColumns.store.title}</h3>
              {footerColumns.store.content}
            </div>

            {/* NEWSLETTER */}
            <div>
              <h3 className="mb-4 text-sm font-bold text-[#d4af37]">NEWSLETTER</h3>
              <p className="mb-3 text-sm text-white/70">Sign up for exclusive offers and updates</p>
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                  className="flex-1 bg-white/10 border border-white/20 px-3 py-2 text-sm text-white placeholder:text-white/50"
                />
                <button className="bg-[#d4af37] px-4 py-2 text-sm font-medium text-[#1a1a2e] hover:bg-[#e5c158]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
            <div className="text-xl font-bold">
              <span className="text-[#d4af37]">CIGAR</span>
              <span className="text-white ml-1">VN</span>
            </div>
            <p className="text-xs text-white/50">
              © 2024 Cigar VN. All rights reserved. Please smoke responsibly.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
