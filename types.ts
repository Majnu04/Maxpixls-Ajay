export interface Story {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  date?: string;
}

export interface PressFeature {
  id: number;
  name: string;
  logoText: string;
  logoFont: string; // approximate font style class
}

export interface NavItem {
  label: string;
  href: string;
}