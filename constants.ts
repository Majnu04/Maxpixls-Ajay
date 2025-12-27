import { Story, PressFeature, NavItem } from './types';

export const HERO_IMAGES = [
  "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/babygirl.jpg",
  "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/Hero-3.jpg",

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
  { id: 1, title: "Little Angel's First Smile", category: "Baby Shoots", imageUrl: "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/babygirl.jpg" },
  { id: 2, title: "Dream Wedding at Palace Grounds", category: "Wedding Photography", imageUrl: "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/dream-wedding.jpg" },
  { id: 3, title: "Destination Wedding in Jaipur", category: "Destination Weddings", imageUrl: "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/WhatsApp%20Image%202025-12-27%20at%207.38.12%20PM%20(1).jpeg" },
  { id: 4, title: "Romantic Pre-Wedding Shoot", category: "Pre & Post Wedding", imageUrl: "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/Pre-wedding.jpg" },
  { id: 5, title: "Traditional Wedding Ceremony", category: "Wedding Photography", imageUrl: "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/WhatsApp%20Image%202025-12-27%20at%207.38.13%20PM%20(1).jpeg" },
  { id: 6, title: "Elegant Bridal Portraits", category: "Fashion Portraits", imageUrl: "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/Fashion.JPG" },
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
