import { StaticImageData } from "next/image";

export interface Hero {
    title: string;
    description: string;
    cta: string;
    image: string |StaticImageData
  }
  
  export interface Category {
    title: string;
    description: string;
    cta: string;
    image: string | StaticImageData;
  }
  
  export interface Product {
    title: string;
    subtitle: string;
    image: string | StaticImageData;
  }
  
  export interface ProductGrid {
    title: string;
    products: Product[];
  }
  
  export interface PageData {
    hero: Hero;
    categories: Category[];
    productGrid: ProductGrid;
  }

  interface FooterCategory {
    title: string;
    links: { text: string; href: string }[];
    isMainCategory?: boolean;
    divider?: boolean;
  }
  
  interface FooterColumn {
    categories: FooterCategory[];
  }
  
  export interface FooterProps {
    contactInfo: {
      phone: string;
      email: string;
      address: string[];
    };
    columns: FooterColumn[];
  }

  export interface HeroProps {
    imageSrc: string | StaticImageData;
  }

  export interface NavbarProps {
    onMenuClick?: () => void;
    onSearchClick?: () => void;
    onMailClick?: () => void;
  }