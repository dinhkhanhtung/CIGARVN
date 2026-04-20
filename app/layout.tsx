import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AgeVerification from '@/components/AgeVerification';

export const metadata: Metadata = {
  title: 'Cigar VN - Xì gà chính hãng, phụ kiện cao cấp',
  description: 'Cửa hàng xì gà cao cấp tại Việt Nam. Chuyên cung cấp xì gà Cuba, Dominican, phụ kiện chính hãng.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="min-h-screen bg-white">
        <AgeVerification />
        <div className="page-wrapper">
          <Header />
          <main id="maincontent" className="page-main">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
