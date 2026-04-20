// Image URLs from JJ Fox for 100% clone accuracy
// Using placeholder.com for missing images or absolute URLs from jjfox.co.uk

export const JJFOX_IMAGES = {
  // Hero & Banners
  hero: 'https://www.jjfox.co.uk/media/wysiwyg/cmspage/lounge_jjfox.jpg',
  newArrivals: 'https://www.jjfox.co.uk/media/wysiwyg/cmspage/25-jjfox_new_arrivals_banner__v2.jpg',
  accessories: 'https://www.jjfox.co.uk/media/wysiwyg/cmspage/25-jjfox_cigar_accessories_banner_2.jpg',
  events: 'https://www.jjfox.co.uk/media/wysiwyg/cmspage/jjfox_events_banner__v3.jpg',
  whiteSpot: 'https://www.jjfox.co.uk/media/wysiwyg/cmspage/the_white_spot_banner_1_.jpg',
  
  // Products
  bestsellers: 'https://www.jjfox.co.uk/media/wysiwyg/cmspage/bestsellers_desktop.png',
  limitedEditions: 'https://www.jjfox.co.uk/media/wysiwyg/cmspage/limited_editions_desktop.png',
  foxHouseBlend: 'https://www.jjfox.co.uk/media/wysiwyg/cmspage/fox_house_blend.png',
  heritage: 'https://www.jjfox.co.uk/media/wysiwyg/cmspage/our_heritage_desktop.png',
  lighterGold: 'https://www.jjfox.co.uk/media/catalog/product/Lighter_Gold_Diamonds_3Q.jpg',
  productSample: 'https://www.jjfox.co.uk/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/p/r/product-img7.jpeg',
  
  // Blog & Content
  blog: 'https://www.jjfox.co.uk/media/wysiwyg/cmspage/blog_image.jpg',
  expert: 'https://www.jjfox.co.uk/media/wysiwyg/cmspage/phillip_expert_1_b_w_resized.jpg',
  social: 'https://www.jjfox.co.uk/media/wysiwyg/cmspage/social_media_image.jpg',
  
  // Events
  event1: 'https://www.jjfox.co.uk/media/wysiwyg/cmspage/event_image_1_.jpg',
  
  // Logo & Badges
  logo: 'https://www.jjfox.co.uk/media/wysiwyg/cmspage/jjfoxlogofinal.png',
  livingWage: 'https://www.jjfox.co.uk/media/wysiwyg/cmspage/Living_Wage_Employer_Logo.png',
  investInPeople: 'https://www.jjfox.co.uk/media/wysiwyg/cmspage/invest-in-people-silver-R.png',
};

// Placeholder helper for development
export function getPlaceholder(width: number, height: number, text?: string): string {
  return `https://placehold.co/${width}x${height}/1a1a2e/c9a227${text ? `?text=${encodeURIComponent(text)}` : ''}`;
}

// Helper to get image with fallback
export function getImage(key: keyof typeof JJFOX_IMAGES, width?: number, height?: number): string {
  const url = JJFOX_IMAGES[key];
  if (!url && width && height) {
    return getPlaceholder(width, height, key);
  }
  return url || getPlaceholder(width || 600, height || 400, key);
}
