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
  },
  {
    id: 5,
    name: 'H. Upmann Magnum 46',
    brand: 'H. Upmann',
    price: '1,950,000₫',
    image: productImage,
    href: '/san-pham/5'
  },
  {
    id: 6,
    name: 'Davidoff Grand Cru',
    brand: 'Davidoff',
    price: '2,250,000₫',
    image: productImage,
    href: '/san-pham/6'
  }
];

export default function OurFavourites() {
  return (
    <section className="bg-gray-50 py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-navy font-serif">Our Favourites</h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">Những điếu xì gà được yêu thích nhất</p>
        </div>

        {/* Mobile: Horizontal Scroll Snap Carousel */}
        <div className="lg:hidden">
          <div 
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
            style={{ scrollPaddingLeft: '1rem' }}
          >
            {products.map((product) => (
              <Link
                key={product.id}
                href={product.href}
                className="group flex-shrink-0 snap-start w-[80%] sm:w-[45%] bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="text-sm font-medium text-navy truncate">{product.name}</h3>
                  <p className="text-xs text-gray-500">{product.brand}</p>
                  <p className="mt-1 sm:mt-2 text-sm font-semibold text-gold">{product.price}</p>
                </div>
              </Link>
            ))}
          </div>
          {/* Scroll indicator dots for mobile */}
          <div className="flex justify-center gap-1.5 mt-4 lg:hidden">
            {products.map((_, index) => (
              <div 
                key={index} 
                className="h-1.5 w-1.5 rounded-full bg-gray-300"
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-4 lg:gap-6">
          {products.slice(0, 4).map((product) => (
            <Link
              key={product.id}
              href={product.href}
              className="group bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative mb-4 aspect-[4/5] overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-medium text-navy">{product.name}</h3>
              <p className="text-sm text-gray-500">{product.brand}</p>
              <p className="mt-2 font-semibold text-gold">{product.price}</p>
            </Link>
          ))}
        </div>

        <div className="mt-6 sm:mt-8 text-center">
          <Link
            href="/san-pham"
            className="inline-block border border-navy px-6 sm:px-8 py-2.5 sm:py-3 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-white"
          >
            Xem tất cả sản phẩm
          </Link>
        </div>
      </div>
    </section>
  );
}
