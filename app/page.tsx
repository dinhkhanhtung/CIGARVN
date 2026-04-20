import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Categories from '@/components/Categories';
import WhyChooseUs from '@/components/WhyChooseUs';
import Heritage from '@/components/Heritage';
import SamplingLounge from '@/components/SamplingLounge';
import BlogEvents from '@/components/BlogEvents';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <WhyChooseUs />
      <Heritage />
      <SamplingLounge />
      <BlogEvents />
      <Newsletter />
    </>
  );
}
