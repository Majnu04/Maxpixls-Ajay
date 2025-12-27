import { Story, PressFeature, NavItem } from './types';

export const HERO_IMAGES = [
  "/Hero/WhatsApp Image 2025-12-27 at 7.38.23 PM (2).jpeg",
  "/Hero/WhatsApp Image 2025-12-27 at 7.38.26 PM (1).jpeg",
  "/Hero/WhatsApp Image 2025-12-27 at 7.38.27 PM (1).jpeg",
  "/Hero/WhatsApp Image 2025-12-27 at 7.38.27 PM.jpeg",
];

export const PRESS_LOGOS: PressFeature[] = [
  { id: 1, name: "Vogue", logoText: "VOGUE", logoFont: "font-serif font-bold tracking-widest" },
  { id: 2, name: "Harper's Bazaar", logoText: "Harper's BAZAAR", logoFont: "font-serif tracking-tight font-medium" },
  { id: 3, name: "Conde Nast", logoText: "Traveller", logoFont: "font-sans font-black tracking-wide uppercase" },
  { id: 4, name: "People", logoText: "People", logoFont: "font-sans font-bold italic text-blue-800" },
  { id: 5, name: "Entrepreneur", logoText: "Entrepreneur", logoFont: "font-serif font-bold" },
];

export const STORIES: Story[] = [
  { id: 1, title: "Dream Wedding at Palace Grounds", category: "Wedding Photography", imageUrl: "https://picsum.photos/id/1059/800/600" },
  { id: 2, title: "Destination Wedding in Jaipur", category: "Destination Weddings", imageUrl: "https://picsum.photos/id/106/800/600" },
  { id: 3, title: "Little Angel's First Smile", category: "Baby Shoots", imageUrl: "https://picsum.photos/id/342/800/600" },
  { id: 4, title: "Fashion Editorial Elegance", category: "Fashion Portraits", imageUrl: "https://picsum.photos/id/453/800/600" },
  { id: 5, title: "Grand Corporate Gala", category: "Event Photography", imageUrl: "https://picsum.photos/id/64/800/600" },
  { id: 6, title: "Pre-Wedding Romance in Udaipur", category: "Pre & Post Wedding", imageUrl: "https://picsum.photos/id/838/800/600" },
];

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Wedding Photography", href: "#weddings" },
  { label: "Destination Weddings", href: "#destinations" },
  { label: "Baby Shoots", href: "#baby" },
  { label: "Fashion Portraits", href: "#fashion" },
  { label: "Event Photography", href: "#events" },
  { label: "Book us now :)", href: "#book" },
];
