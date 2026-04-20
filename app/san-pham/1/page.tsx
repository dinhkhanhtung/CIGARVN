import { Metadata } from 'next';
import ProductDetailClient from '@/components/ProductDetailClient';

export const metadata: Metadata = {
  title: 'Cohiba Behike 52 | Cigar VN',
  description: 'Cohiba Behike 52 là dòng xì gà cao cấp nhất của Cohiba.',
};

export default function Product1Page() {
  return <ProductDetailClient productId="1" />;
}
