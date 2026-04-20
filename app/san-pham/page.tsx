'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Filter, X, ChevronDown, Flame, SlidersHorizontal } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  strength: 'mild' | 'medium' | 'full';
  origin: string;
  length?: string;
  ringGauge?: string;
  shape?: string;
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
  },
  {
    id: '3',
    name: 'Romeo y Julieta Churchill',
    brand: 'Romeo y Julieta',
    price: 1650000,
    image: '/images/limited_editions_desktop.png',
    strength: 'medium',
    origin: 'Cuba',
    length: '178mm',
    ringGauge: '47',
    shape: 'Churchill',
  },
  {
    id: '4',
    name: 'Davidoff Grand Cru',
    brand: 'Davidoff',
    price: 1250000,
    originalPrice: 1450000,
    image: '/images/our_heritage_desktop.png',
    strength: 'mild',
    origin: 'Dominican',
    length: '140mm',
    ringGauge: '43',
    shape: 'Corona',
  },
  {
    id: '5',
    name: 'Partagas Serie D No. 4',
    brand: 'Partagas',
    price: 1750000,
    image: '/images/bestsellers_desktop.png',
    strength: 'full',
    origin: 'Cuba',
    length: '124mm',
    ringGauge: '50',
    shape: 'Robusto',
  },
  {
    id: '6',
    name: 'H. Upmann Magnum 50',
    brand: 'H. Upmann',
    price: 2250000,
    originalPrice: 2500000,
    image: '/images/product-img7.jpeg',
    strength: 'medium',
    origin: 'Cuba',
    length: '160mm',
    ringGauge: '50',
    shape: 'Toro',
  },
];

const strengthOptions = [
  { value: 'all', label: 'Tất cả' },
  { value: 'mild', label: 'Nhẹ' },
  { value: 'medium', label: 'Trung bình' },
  { value: 'full', label: 'Mạnh' },
];

const originOptions = [
  { value: 'all', label: 'Tất cả' },
  { value: 'Cuba', label: 'Cuba' },
  { value: 'Dominican', label: 'Dominican' },
  { value: 'Nicaragua', label: 'Nicaragua' },
];

const priceRanges = [
  { value: 'all', label: 'Tất cả' },
  { value: '0-1000000', label: 'Dưới 1 triệu' },
  { value: '1000000-2000000', label: '1 - 2 triệu' },
  { value: '2000000-3000000', label: '2 - 3 triệu' },
  { value: '3000000+', label: 'Trên 3 triệu' },
];

const strengthLabels = {
  mild: { label: 'Nhẹ', color: 'bg-green-500', textColor: 'text-green-600' },
  medium: { label: 'Trung bình', color: 'bg-yellow-500', textColor: 'text-yellow-600' },
  full: { label: 'Mạnh', color: 'bg-red-500', textColor: 'text-red-600' },
};

function formatPrice(price: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
  }).format(price);
}

export default function ProductsPage() {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [selectedStrength, setSelectedStrength] = useState('all');
  const [selectedOrigin, setSelectedOrigin] = useState('all');
  const [selectedPrice, setSelectedPrice] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = products.filter((product) => {
    if (selectedStrength !== 'all' && product.strength !== selectedStrength) return false;
    if (selectedOrigin !== 'all' && product.origin !== selectedOrigin) return false;
    if (selectedPrice !== 'all') {
      if (selectedPrice === '0-1000000' && product.price >= 1000000) return false;
      if (selectedPrice === '1000000-2000000' && (product.price < 1000000 || product.price >= 2000000)) return false;
      if (selectedPrice === '2000000-3000000' && (product.price < 2000000 || product.price >= 3000000)) return false;
      if (selectedPrice === '3000000+' && product.price < 3000000) return false;
    }
    return true;
  });

  const FilterSection = () => (
    <div className="space-y-6">
      {/* Độ nặng */}
      <div>
        <h4 className="mb-3 font-serif text-sm font-semibold text-navy">Độ nặng</h4>
        <div className="space-y-2">
          {strengthOptions.map((option) => (
            <label key={option.value} className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="strength"
                value={option.value}
                checked={selectedStrength === option.value}
                onChange={(e) => setSelectedStrength(e.target.value)}
                className="h-4 w-4 accent-navy"
              />
              <span className="text-sm text-gray-600">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Xuất xứ */}
      <div>
        <h4 className="mb-3 font-serif text-sm font-semibold text-navy">Xuất xứ</h4>
        <div className="space-y-2">
          {originOptions.map((option) => (
            <label key={option.value} className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="origin"
                value={option.value}
                checked={selectedOrigin === option.value}
                onChange={(e) => setSelectedOrigin(e.target.value)}
                className="h-4 w-4 accent-navy"
              />
              <span className="text-sm text-gray-600">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Khoảng giá */}
      <div>
        <h4 className="mb-3 font-serif text-sm font-semibold text-navy">Khoảng giá</h4>
        <div className="space-y-2">
          {priceRanges.map((option) => (
            <label key={option.value} className="flex cursor-pointer items-center gap-2">
              <input
                type="radio"
                name="price"
                value={option.value}
                checked={selectedPrice === option.value}
                onChange={(e) => setSelectedPrice(e.target.value)}
                className="h-4 w-4 accent-navy"
              />
              <span className="text-sm text-gray-600">{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        onClick={() => {
          setSelectedStrength('all');
          setSelectedOrigin('all');
          setSelectedPrice('all');
        }}
        className="w-full rounded-sm border border-navy py-2 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white"
      >
        Xóa bộ lọc
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-navy py-8">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-serif text-2xl font-bold text-white lg:text-3xl">Tất cả sản phẩm</h1>
          <p className="mt-2 text-sm text-white/70">Khám phá bộ sưu tập xì gà cao cấp</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-6">
        {/* Toolbar */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="flex items-center gap-2 rounded-sm border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 lg:hidden"
            >
              <Filter size={16} />
              Lọc
            </button>
            <span className="text-sm text-gray-600">
              Hiển thị {filteredProducts.length} sản phẩm
            </span>
          </div>

          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none rounded-sm border border-gray-300 bg-white px-4 py-2 pr-10 text-sm text-gray-700 focus:border-navy focus:outline-none"
            >
              <option value="featured">Nổi bật</option>
              <option value="price-asc">Giá: Thấp đến cao</option>
              <option value="price-desc">Giá: Cao đến thấp</option>
              <option value="name">Tên: A-Z</option>
            </select>
            <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden w-64 flex-shrink-0 lg:block">
            <div className="sticky top-24 rounded-sm bg-white p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <SlidersHorizontal size={18} className="text-navy" />
                <h3 className="font-serif text-base font-semibold text-navy">Bộ lọc</h3>
              </div>
              <FilterSection />
            </div>
          </aside>

          {/* Mobile Filter Drawer */}
          {isMobileFilterOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileFilterOpen(false)} />
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 0.3 }}
                className="absolute left-0 top-0 h-full w-80 bg-white p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-serif text-base font-semibold text-navy">Bộ lọc</h3>
                  <button onClick={() => setIsMobileFilterOpen(false)}>
                    <X size={20} className="text-gray-500" />
                  </button>
                </div>
                <FilterSection />
              </motion.div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="rounded-sm bg-white py-16 text-center">
                <p className="text-gray-500">Không tìm thấy sản phẩm phù hợp</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link href={`/san-pham/${product.id}`} className="group block">
                      <div className="relative overflow-hidden rounded-sm bg-white shadow-sm">
                        {/* Sale badge */}
                        {product.originalPrice && (
                          <div className="absolute left-3 top-3 z-10 rounded-sm bg-red-500 px-2 py-1 text-xs font-semibold text-white">
                            -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                          </div>
                        )}

                        {/* Image */}
                        <div className="aspect-square relative overflow-hidden bg-cream">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        </div>

                        {/* Strength badge */}
                        <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-white px-2 py-1 text-xs shadow-sm">
                          <Flame size={12} className={strengthLabels[product.strength].textColor} />
                          <span className={strengthLabels[product.strength].textColor}>
                            {strengthLabels[product.strength].label}
                          </span>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="mt-3 rounded-sm bg-white p-4 shadow-sm">
                        <div className="mb-1 flex items-center gap-2">
                          <span className="text-xs font-medium text-gray-400">{product.brand}</span>
                          <span className="text-xs text-gray-300">|</span>
                          <span className="text-xs text-gray-400">{product.origin}</span>
                        </div>
                        <h3 className="mb-2 font-serif text-base font-medium text-navy transition-colors group-hover:text-gold">
                          {product.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-navy">
                            {formatPrice(product.price)}
                          </span>
                          {product.originalPrice && (
                            <span className="text-xs text-gray-400 line-through">
                              {formatPrice(product.originalPrice)}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
