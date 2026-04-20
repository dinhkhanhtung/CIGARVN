import { Metadata } from 'next';
import ProductDetailClient from '@/components/ProductDetailClient';

interface PageProps {
  params: { id: string };
}

export function generateMetadata({ params }: PageProps): Metadata {
  const titles: Record<string, string> = {
    '1': 'Cohiba Behike 52 | Cigar VN',
    '2': 'Montecristo No. 2 | Cigar VN',
  };
  
  return {
    title: titles[params.id] || 'Chi tiết sản phẩm | Cigar VN',
    description: 'Chi tiết sản phẩm xì gà cao cấp',
  };
}

export default function ProductDetailPage({ params }: PageProps) {
  return <ProductDetailClient productId={params.id} />;
}
