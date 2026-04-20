'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Truck } from 'lucide-react';
import { JJFOX_IMAGES } from '@/lib/images';

interface CartItem {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  quantity: number;
}

const initialCartItems: CartItem[] = [
  {
    id: '1',
    name: 'Cohiba Behike 52',
    brand: 'Cohiba',
    price: 2850000,
    image: JJFOX_IMAGES.productSample,
    quantity: 2,
  },
  {
    id: '2',
    name: 'Montecristo No. 2',
    brand: 'Montecristo',
    price: 1850000,
    image: JJFOX_IMAGES.bestsellers,
    quantity: 1,
  },
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    minimumFractionDigits: 0,
  }).format(price);
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 2000000 ? 0 : 30000;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-navy py-8">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="font-serif text-2xl font-bold text-white lg:text-3xl">Giỏ hàng</h1>
          <p className="mt-2 text-sm text-white/70">Kiểm tra và thanh toán đơn hàng</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-8">
        {cartItems.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-sm bg-white py-16 text-center"
          >
            <div className="mb-4 flex justify-center">
              <ShoppingBag size={64} className="text-gray-300" />
            </div>
            <h2 className="mb-2 font-serif text-xl text-navy">Giỏ hàng trống</h2>
            <p className="mb-6 text-sm text-gray-500">Bạn chưa có sản phẩm nào trong giỏ hàng</p>
            <Link
              href="/san-pham"
              className="inline-flex items-center gap-2 rounded-sm bg-navy px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-dark"
            >
              Tiếp tục mua sắm
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="rounded-sm bg-white shadow-sm">
                <div className="border-b border-gray-100 p-4">
                  <h2 className="font-serif text-lg font-semibold text-navy">
                    Sản phẩm ({cartItems.length})
                  </h2>
                </div>

                <div className="divide-y divide-gray-100">
                  {cartItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex gap-4 p-4"
                    >
                      {/* Image */}
                      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-sm bg-cream">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Info */}
                      <div className="flex flex-1 flex-col justify-between">
                        <div>
                          <div className="text-xs text-gray-500">{item.brand}</div>
                          <Link
                            href={`/san-pham/${item.id}`}
                            className="font-serif text-sm font-medium text-navy transition-colors hover:text-gold"
                          >
                            {item.name}
                          </Link>
                        </div>

                        <div className="flex items-center justify-between">
                          {/* Quantity */}
                          <div className="flex items-center rounded-sm border border-gray-300">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="px-2 py-1 hover:bg-gray-100"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="px-2 py-1 hover:bg-gray-100"
                            >
                              <Plus size={14} />
                            </button>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <div className="font-semibold text-navy">
                              {formatPrice(item.price * item.quantity)}
                            </div>
                            <div className="text-xs text-gray-400">{formatPrice(item.price)} / điếu</div>
                          </div>
                        </div>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 transition-colors hover:text-red-500"
                      >
                        <Trash2 size={18} />
                      </button>
                    </motion.div>
                  ))}
                </div>

                {/* Continue Shopping */}
                <div className="border-t border-gray-100 p-4">
                  <Link
                    href="/san-pham"
                    className="inline-flex items-center gap-1 text-sm text-navy hover:text-gold"
                  >
                    <ArrowRight size={14} className="rotate-180" />
                    Tiếp tục mua sắm
                  </Link>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 rounded-sm bg-white p-6 shadow-sm">
                <h2 className="mb-4 font-serif text-lg font-semibold text-navy">
                  Tóm tắt đơn hàng
                </h2>

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-gray-600">
                    <span>Tạm tính</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Phí vận chuyển</span>
                    <span>{shipping === 0 ? 'Miễn phí' : formatPrice(shipping)}</span>
                  </div>

                  {shipping === 0 && (
                    <div className="flex items-center gap-2 rounded-sm bg-green-50 p-2 text-xs text-green-700">
                      <Truck size={14} />
                      Đơn hàng đã đủ điều kiện miễn phí vận chuyển
                    </div>
                  )}

                  <div className="border-t border-gray-100 pt-3">
                    <div className="flex justify-between">
                      <span className="font-semibold text-navy">Tổng cộng</span>
                      <span className="font-serif text-lg font-bold text-navy">
                        {formatPrice(total)}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="mt-6 w-full rounded-sm bg-navy py-3 text-sm font-semibold text-white transition-colors hover:bg-navy-dark">
                  Tiến hành thanh toán
                </button>

                <p className="mt-4 text-center text-xs text-gray-500">
                  Bao gồm thuế VAT nếu có
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
