'use client';

import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import {
  ChevronRight,
  Minus,
  Plus,
  ShoppingBag,
  Heart,
  Share2,
  Ruler,
  Circle,
  Cigarette,
  Clock,
  Leaf,
  Coffee,
  Flame,
  ChevronLeft,
} from 'lucide-react';
import { JJFOX_IMAGES } from '@/lib/images';

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
    image: JJFOX_IMAGES.productSample,
    strength: 'full',
    origin: 'Cuba',
    length: '144mm',
    ringGauge: '52',
    shape: 'Robusto',
    smokingTime: '60-90 phút',
    tastingNotes: ['Cacao', 'Cà phê', 'Tiêu cay', 'Gỗ sồi', 'Đất'],
    description:
      'Cohiba Behike 52 là dòng xì gà cao cấp nhất của Cohiba. Với kích thước Robusto hoàn hảo, điếu xì gà mang đến trải nghiệm phức tạp và cân bằng. Lá Medio Tiempo độc quyền tạo nên hương vị đặc trưng không thể nhầm lẫn.',
    inStock: true,
  },
  {
    id: '2',
    name: 'Montecristo No. 2',
    brand: 'Montecristo',
    price: 1850000,
    image: JJFOX_IMAGES.bestsellers,
    strength: 'medium',
    origin: 'Cuba',
    length: '156mm',
    ringGauge: '52',
    shape: 'Pyramid',
    smokingTime: '45-60 phút',
    tastingNotes: ['Hạnh nhân', 'Vani', 'Gỗ tuyết tùng', 'Cacao'],
    description:
      'Montecristo No. 2 là điếu xì gà Pyramid huyền thoại. Với hình dáng độc đáo thuôn dần về đầu, điếu xì gà mang đến sự phát triển hương vị tuyệt vời từ đầu đến cuối.',
    inStock: true,
  },
];

const strengthLabels = {
  mild: { label: 'Nhẹ', color: 'bg-green-500', bgColor: 'bg-green-50', textColor: 'text-green-700' },
  medium: { label: 'Trung bình', color: 'bg-yellow-500', bgColor: 'bg-yellow-50', textColor: 'text-yellow-700' },
  full: { label: 'Mạnh', color: 'bg-red-500', bgColor: 'bg-red-50', textColor: 'text-red-700' },
};

function formatPrice(price: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
  }).format(price);
}

export default function ProductDetailPage() {
  const params = useParams();
  const [quantity, setQuantity] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);

  const product = products.find((p) => p.id === params.id) || products[0];
  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-cream">
      {/* Breadcrumb */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-navy">Trang chủ</Link>
            <ChevronRight size={14} />
            <Link href="/san-pham" className="hover:text-navy">Sản phẩm</Link>
            <ChevronRight size={14} />
            <span className="text-navy">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Product Main */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square overflow-hidden rounded-sm bg-white"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-2 text-sm text-gray-500">{product.brand}</div>
            <h1 className="mb-4 font-serif text-2xl font-bold text-navy lg:text-3xl">
              {product.name}
            </h1>

            {/* Rating & Reviews */}
            <div className="mb-4 flex items-center gap-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 fill-gold text-gold"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm text-gray-500">(12 đánh giá)</span>
            </div>

            {/* Price */}
            <div className="mb-6 flex items-center gap-3">
              <span className="font-serif text-2xl font-bold text-navy">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-lg text-gray-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="mb-6 text-sm leading-relaxed text-gray-600">
              {product.description}
            </p>

            {/* Specs */}
            <div className="mb-6 grid grid-cols-3 gap-3 rounded-sm bg-white p-4">
              <div className="text-center">
                <div className="mb-1 flex justify-center text-navy">
                  <Ruler size={20} />
                </div>
                <div className="text-xs text-gray-500">Chiều dài</div>
                <div className="text-sm font-semibold text-navy">{product.length}</div>
              </div>
              <div className="border-x border-gray-100 text-center">
                <div className="mb-1 flex justify-center text-navy">
                  <Circle size={20} />
                </div>
                <div className="text-xs text-gray-500">Ring Gauge</div>
                <div className="text-sm font-semibold text-navy">{product.ringGauge}</div>
              </div>
              <div className="text-center">
                <div className="mb-1 flex justify-center text-navy">
                  <Cigarette size={20} />
                </div>
                <div className="text-xs text-gray-500">Hình dáng</div>
                <div className="text-sm font-semibold text-navy">{product.shape}</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center rounded-sm border border-gray-300">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  <Minus size={16} />
                </button>
                <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-2 hover:bg-gray-100"
                >
                  <Plus size={16} />
                </button>
              </div>

              <button className="flex flex-1 items-center justify-center gap-2 rounded-sm bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-dark">
                <ShoppingBag size={18} />
                Thêm vào giỏ
              </button>

              <button
                onClick={() => setIsWishlist(!isWishlist)}
                className={`flex items-center justify-center rounded-sm border px-4 py-3 transition-colors ${
                  isWishlist
                    ? 'border-red-500 bg-red-50 text-red-500'
                    : 'border-gray-300 text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Heart size={18} fill={isWishlist ? 'currentColor' : 'none'} />
              </button>

              <button className="flex items-center justify-center rounded-sm border border-gray-300 px-4 py-3 text-gray-600 transition-colors hover:bg-gray-50">
                <Share2 size={18} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Details Section */}
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {/* Left Column - Specs & Tasting Notes */}
          <div className="space-y-6 lg:col-span-2">
            {/* Specifications */}
            <div className="rounded-sm bg-white p-6 shadow-sm">
              <h2 className="mb-4 font-serif text-lg font-semibold text-navy">
                Thông số kỹ thuật
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-sm bg-cream p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/10 text-navy">
                    <Leaf size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Xuất xứ</div>
                    <div className="font-medium text-navy">{product.origin}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-sm bg-cream p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/10 text-navy">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Thời gian hút</div>
                    <div className="font-medium text-navy">{product.smokingTime}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-sm bg-cream p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/10 text-navy">
                    <Flame size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Độ nặng</div>
                    <div className="font-medium text-navy">
                      {strengthLabels[product.strength].label}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-sm bg-cream p-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-navy/10 text-navy">
                    <Coffee size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Hương vị</div>
                    <div className="font-medium text-navy">{product.tastingNotes.slice(0, 2).join(', ')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tasting Notes */}
            <div className="rounded-sm bg-white p-6 shadow-sm">
              <h2 className="mb-4 font-serif text-lg font-semibold text-navy">
                Nốt hương vị (Tasting Notes)
              </h2>
              <div className="flex flex-wrap gap-2">
                {product.tastingNotes.map((note) => (
                  <span
                    key={note}
                    className="rounded-full bg-navy/5 px-4 py-2 text-sm font-medium text-navy"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Strength Guide */}
          <div className="space-y-6">
            <div className="rounded-sm bg-white p-6 shadow-sm">
              <h3 className="mb-4 font-serif text-base font-semibold text-navy">
                Bảng độ nặng
              </h3>
              <div className="space-y-3">
                {Object.entries(strengthLabels).map(([key, { label, color, bgColor, textColor }]) => (
                  <div
                    key={key}
                    className={`flex items-center gap-3 rounded-sm p-2 ${
                      product.strength === key ? bgColor : ''
                    }`}
                  >
                    <span className={`h-3 w-3 rounded-full ${color}`} />
                    <span className={`text-sm ${product.strength === key ? textColor : 'text-gray-600'}`}>
                      {label}
                    </span>
                    {product.strength === key && (
                      <span className="ml-auto text-xs font-medium text-navy">Đang chọn</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Stock Status */}
            <div className="rounded-sm bg-white p-6 shadow-sm">
              <div className="mb-3 flex items-center gap-2">
                <div className={`h-2.5 w-2.5 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`} />
                <span className="text-sm font-medium text-gray-700">
                  {product.inStock ? 'Còn hàng' : 'Hết hàng'}
                </span>
              </div>
              <p className="text-xs text-gray-500">
                Giao hàng trong 1-3 ngày làm việc
              </p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="mb-6 font-serif text-xl font-semibold text-navy">
              Sản phẩm tương tự
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedProducts.map((related) => (
                <Link
                  key={related.id}
                  href={`/san-pham/${related.id}`}
                  className="group block rounded-sm bg-white shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="aspect-square relative overflow-hidden">
                    <Image
                      src={related.image}
                      alt={related.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4">
                    <div className="mb-1 text-xs text-gray-500">{related.brand}</div>
                    <h3 className="mb-2 font-serif text-base font-medium text-navy transition-colors group-hover:text-gold">
                      {related.name}
                    </h3>
                    <div className="font-semibold text-navy">
                      {formatPrice(related.price)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
