import { Metadata } from 'next';
import ProductDetailClient from '@/components/ProductDetailClient';

export const metadata: Metadata = {
  title: 'Montecristo No. 2 | Cigar VN',
  description: 'Montecristo No. 2 là điếu xì gà Pyramid huyền thoại.',
};

export default function Product2Page() {
  return <ProductDetailClient productId="2" />;
}
