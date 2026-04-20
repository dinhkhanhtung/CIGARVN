declare module 'lucide-react' {
  import * as React from 'react';

  interface LucideProps {
    color?: string;
    size?: number | string;
    strokeWidth?: number | string;
    className?: string;
    style?: React.CSSProperties;
    fill?: string;
  }

  export type LucideIcon = React.FC<LucideProps>;

  export const Menu: LucideIcon;
  export const X: LucideIcon;
  export const Filter: LucideIcon;
  export const SlidersHorizontal: LucideIcon;
  export const ChevronDown: LucideIcon;
  export const ChevronRight: LucideIcon;
  export const ChevronLeft: LucideIcon;
  export const Minus: LucideIcon;
  export const Plus: LucideIcon;
  export const Heart: LucideIcon;
  export const Share2: LucideIcon;
  export const Circle: LucideIcon;
  export const Cigarette: LucideIcon;
  export const Clock: LucideIcon;
  export const Leaf: LucideIcon;
  export const Coffee: LucideIcon;
  export const Search: LucideIcon;
  export const ShoppingBag: LucideIcon;
  export const Phone: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const Flame: LucideIcon;
  export const Globe: LucideIcon;
  export const Ruler: LucideIcon;
  export const Wrench: LucideIcon;
  export const Shield: LucideIcon;
  export const Truck: LucideIcon;
  export const Award: LucideIcon;
  export const Users: LucideIcon;
  export const Crown: LucideIcon;
  export const History: LucideIcon;
  export const Wine: LucideIcon;
  export const Calendar: LucideIcon;
  export const MapPin: LucideIcon;
  export const BookOpen: LucideIcon;
  export const Instagram: LucideIcon;
  export const Mail: LucideIcon;
  export const Send: LucideIcon;
  export const Gift: LucideIcon;
  export const Sparkles: LucideIcon;
  export const User: LucideIcon;
  export const Facebook: LucideIcon;
  export const Youtube: LucideIcon;
  export const HeadphonesIcon: LucideIcon;
  export const MessageCircle: LucideIcon;
  export const Trash2: LucideIcon;
}
