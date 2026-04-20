import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProductDetailClient from '@/components/ProductDetailClient';

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  strength: 'mild' | 'medium' | 'full';
  origin: string;
  length: string;
  ringGauge: string;
  shape: string;
  smokingTime: string;
  tastingNotes: string[];
  description: string;
  inStock: boolean;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Cohiba Behike 52',
    brand: 'Cohiba',
    price: 2850000,
    originalPrice: 3200000,
    image: '/images/product-img7.jpeg',
    strength: 'full',
    origin: 'Cuba',
    length: '144mm',
    ringGauge: '52',
    shape: 'Robusto',
    smokingTime: '60-90 phút',
    tastingNotes: ['Cacao', 'Cà phê', 'Tiêu cay', 'Gỗ sồi', 'Đất'],
    description:
      'Cohiba Behike 52 là dòng xì gà cao cấp nhất của Cohiba. Với kích thước Robusto hoàn hảo, điếu xì gà mang đến trải nghiệm phức tạp và cân bằng.',
    inStock: true,
  },
  {
    id: '2',
    name: 'Montecristo No. 2',
    brand: 'Montecristo',
    price: 1850000,
    image: '/images/bestsellers_desktop.png',
    strength: 'medium',
    origin: 'Cuba',
    length: '156mm',
    ringGauge: '52',
    shape: 'Pyramid',
    smokingTime: '45-60 phút',
    tastingNotes: ['Hạnh nhân', 'Vani', 'Gỗ tuyết tùng', 'Cacao'],
    description:
      'Montecristo No. 2 là điếu xì gà Pyramid huyền thoại.',
    inStock: true,
  },
];

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export function generateMetadata({ searchParams }: PageProps): Metadata {
  const id = searchParams.id as string;
  const product = products.find((p) => p.id === id);
  
  return {
    title: product ? `${product.name} | Cigar VN` : 'Sản phẩm | Cigar VN',
    description: product?.description || 'Chi tiết sản phẩm xì gà cao cấp',
  };
}

export default function ProductDetailPage({ searchParams }: PageProps) {
  const id = searchParams.id as string;
  const product = products.find((p) => p.id === id);
  
  if (!product) {
    notFound();
  }

  const relatedProducts = products.filter((p) => p.id !== product.id);

  return <ProductDetailClient product={product} relatedProducts={relatedProducts} />;
}
