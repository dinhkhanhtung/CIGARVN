import HeroBanner from '@/components/HeroBanner';
import OurFavourites from '@/components/OurFavourites';
import BlogEventsSocial from '@/components/BlogEventsSocial';
import ContentSection from '@/components/ContentSection';
import TrustpilotWidget from '@/components/TrustpilotWidget';

export default function Home() {
  return (
    <div className="page-content">
      <HeroBanner />
      <TrustpilotWidget />
      <OurFavourites />
      <BlogEventsSocial />
      <ContentSection />
    </div>
  );
}
