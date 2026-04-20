import { Suspense } from 'react';
import ProductDetailClient from '@/components/ProductDetailClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chi tiết sản phẩm | Cigar VN',
  description: 'Chi tiết sản phẩm xì gà cao cấp',
};

export default function ProductDetailPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream flex items-center justify-center">Đang tải...</div>}>
      <ProductDetailClient />
    </Suspense>
  );
}
