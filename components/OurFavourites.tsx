'use client';

import Image from 'next/image';
import Link from 'next/link';

// Use single product image for all products
const productImage = '/images/product-img7.jpeg';

const products = [
  {
    id: 1,
    name: 'Cohiba Behike 52',
    brand: 'Cohiba',
    price: '2,850,000₫',
    image: productImage,
    href: '/san-pham/1'
  },
  {
    id: 2,
    name: 'Montecristo No. 2',
    brand: 'Montecristo',
    price: '1,850,000₫',
    image: productImage,
    href: '/san-pham/2'
  },
  {
    id: 3,
    name: 'Romeo y Julieta Churchill',
    brand: 'Romeo y Julieta',
    price: '1,650,000₫',
    image: productImage,
    href: '/san-pham/3'
  },
  {
    id: 4,
    name: 'Partagas Serie D No. 4',
    brand: 'Partagas',
    price: '1,750,000₫',
    image: productImage,
    href: '/san-pham/4'
  }
];

export default function OurFavourites() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-[#1a1a2e]">Sản phẩm nổi bật</h2>
          <p className="mt-2 text-gray-600">Những điếu xì gà được yêu thích nhất</p>
        </div>

        {/* Mobile: 2 columns, Tablet: 2 columns, Desktop: 4 columns */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {products.map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="group bg-white p-2 sm:p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative mb-2 sm:mb-4 aspect-[4/5] overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-medium text-[#1a1a2e]">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.brand}</p>
              <p className="mt-2 font-semibold text-[#d4af37]">{product.price}</p>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/san-pham"
            className="inline-block border border-[#1a1a2e] px-8 py-3 text-sm font-medium text-[#1a1a2e] transition-colors hover:bg-[#1a1a2e] hover:text-white"
          >
            Xem tất cả sản phẩm
          </Link>
        </div>
      </div>
    </section>
  );
}
