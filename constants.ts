import { Story, PressFeature, NavItem, Service } from './types';

export const CONTACT_INFO = {
  email: 'maxpixlsphotography@gmail.com',
  phone: '+91 99899 65562',
  phoneNumber: '919989965562', // Format for WhatsApp
  address: 'Jarajapupeta, Andhra Pradesh',
  mapUrl: 'https://www.google.com/maps/place/5CJP%2B4WJ,+Jarajapupeta,+Andhra+Pradesh/@18.3549038,83.2910942,10.14z/data=!4m5!3m4!1s0x3a3bf1c9a05ec3b9:0x5c27f3a4086a106d!8m2!3d18.1803375!4d83.4372656?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D',
  instagram: 'https://www.instagram.com/maxpixls?igsh=MWkybXlqY3VzcnN1MQ==',
  facebook: 'https://www.facebook.com/share/1BqHoN12ed/',
  youtube: 'https://youtube.com/@maxpixlsphotography?si=ukqlockeDCbux8ns',
  // Formspree Configuration - Get your form ID from https://formspree.io/
  formspreeEndpoint: 'xzdbrgqn',
};

export const YOUTUBE_VIDEOS = [
  { id: 1, videoId: 'GpVU0kSAHwI', title: 'Featured Video' },
  { id: 2, videoId: '7WBKeWTWwa0', title: 'Featured Video 2' },
  { id: 3, videoId: 'fscKstSj-sY', title: 'Featured Video 3' },
  { id: 4, videoId: '6OGYBgyJgtU', title: 'Featured Video 4' },
  { id: 5, videoId: 'NP93-6LYzZ0', title: 'Featured Video 5' },
  // Add more video IDs here
];

export const HERO_IMAGES = [
  "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/babygirl.jpg",
  "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/Hero-3.jpg",
  "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/hero-1.jpg",
  "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/hero-6.jpg",
  "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/hero-5.JPG",
  "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/hero-4.jpg",
  "/Hero/WhatsApp Image 2025-12-27 at 7.38.27 PM (1).jpeg",
  
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
  { id: 2, title: "Dream Wedding ", category: "Wedding Photography", imageUrl: "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/destination.jpg" },
  { id: 3, title: "Destination Wedding ", category: "Destination Weddings", imageUrl: "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/ddd.jpg" },
  { id: 4, title: "Romantic Pre-Wedding Shoot", category: "Pre & Post Wedding", imageUrl: "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/Pre-wedding.jpg" },
  { id: 5, title: "Traditional Wedding Ceremony", category: "Wedding Photography", imageUrl: "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/wedding.jpeg" },
  { id: 6, title: "Elegant Bridal Portraits", category: "Fashion Portraits", imageUrl: "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/Fashion.JPG" },
];

export const SERVICES: Service[] = [
  { id: 1, title: "Halfsare Portraits", description: "Halfsare Candid Portraits", imageUrl: "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/WhatsApp%20Image%202025-12-27%20at%207.38.13%20PM%20(1).jpeg" },
  { id: 2, title: "Bride & Groom Highlights", imageUrl: "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/destination.jpg" },
  { id: 3, title: "Wedding couple poses", imageUrl: "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/ddd.jpg" },
  { id: 4, title: "Wedding Candid's", imageUrl: "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/wedding.jpeg" },
  { id: 5, title: "Wedding Jewellery - candid's", imageUrl: "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/Fashion.JPG" },
  { id: 6, title: "Maternity photography", imageUrl: "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/hero-1.jpg" },
  { id: 7, title: "Bride Portraits", imageUrl: "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/hero-6.jpg" },
  { id: 8, title: "Model & Fashion photography", description: "Portfolio, Fashion & Model shoots", imageUrl: "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/fashion-port.jpg" },
  { id: 10, title: "Wedding's", description: "Maxpixlsphotography & Films wedding", imageUrl: "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/destination.jpg" },
  { id: 11, title: "Baby shoot", description: "Baby shoots / Birthday & outdoor shoots", imageUrl: "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/babygirl.jpg" },
  { id: 12, title: "Pre wedding's", description: "Pre & post wedding's & cover song 4k", imageUrl: "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/Pre-wedding.jpg" },
  { id: 13, title: "Wedding photography & Film Services", imageUrl: "https://elitedigital.sfo3.cdn.digitaloceanspaces.com/Maxpixls/hero-4.jpg" },
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
