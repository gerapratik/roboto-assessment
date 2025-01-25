
// import productImage1 from '/images/product-fireplace-1.jpg';
import heroImage from '../images/hero.png';
import lightingImage from '../images/big2.png';
import firePlaces from '../images/big1.png';
import furniture from '../images/big4.png';
import grandCollection from "../images/big3.png"
import lastCategory from "../images/jambbig.png"
import { StaticImageData } from 'next/image';
import lightning from "../images/ssm.png";
import stories from "../images/sm1.png";
import more from "../images/repeatedsmall.png"
import furniture1 from "../images/furniture1.png";
import furniture2 from "../images/furniture2.png";
import furniture3 from "../images/furniture3.png";
import furniture4 from "../images/furniture4.png";
import furniture5 from "../images/furniture5.png";


// First define interfaces for our product data
interface Product {
    image: string | StaticImageData
    title: string;
    subtitle: string;
    aspectRatio?: 'portrait' | 'landscape' | 'square';
}

interface ProductGrid {
    heading: string;
    type: 'lighting' | 'stories' | 'furniture';
    products: Product[];
}

// Extend the PageData interface
interface PageData {
    hero: {
        title: string;
        description: string;
        cta: string;
        image: string | StaticImageData
    };
    category_1: {
        title: string;
        description: string;
        image: string | StaticImageData
        primaryCTA: {
            label: string;
        };
        secondaryCTA: {
            label: string;
        };
    };
    category_2: {
        title: string;
        description: string;
        image: string | StaticImageData
        primaryCTA: {
            label: string;
        };
      
    };
    category_3: {
        title: string;
        description: string;
        image: string | StaticImageData
        primaryCTA: {
            label: string;
        };
        
    };
    category_4: {
        title: string;
        description: string;
        image: string | StaticImageData
        primaryCTA: {
            label: string;
        };
       
    };
    category_5: {
        title: string;
        description: string;
        image: string | StaticImageData
        primaryCTA: {
            label: string;
        };
       
    };
    productGrids: {
        lighting: ProductGrid;
        stories: ProductGrid;
        furniture: ProductGrid;
        more:ProductGrid;
    };
}

export const pageData: PageData = {
    hero: {
        title: "Fireplaces",
        description: "Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        cta: "Explore our Fireplaces",
        image: heroImage
    },
    category_1: {
        title: "Fireplaces",
        description: "Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magn ad minim veniam.",
        image: firePlaces,
        primaryCTA: {
            label: "Explore our Fireplaces",
        },
        secondaryCTA: {
            label: "Sell an Antique Chimneypiece",
        }
    },
    category_2: {
        title: "Lightning",
        description: "Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magn ad minim veniam.",
        image: lightingImage,
        primaryCTA: {
            label: "Explore our Lightning",
        },
       
    },
    category_3: {
        title: "Furniture",
        description: "Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magn ad minim veniam.",
        image: furniture,
        primaryCTA: {
            label: "Explore our Furniture",
        },
        
    },
    category_4: {
        title: "The Grand Collection",
        description: "Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magn ad minim veniam.",
        image: grandCollection,
        primaryCTA: {
            label: "Discover More",
        },
       
    },
    category_5: {
        title: "Subscribe to Our Journal",
        description: "Lorem ipsum dolor sit amet, incididunt ut labore et dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim labore et dolore magn ad minim veniam.",
        image: lastCategory,
        primaryCTA: {
            label: "Discover More",
        },
       
    },
    productGrids: {
        lighting: {
            heading: "Our latest lighting",
            type: "lighting",
            products: [
                {
                    image:lightning,
                    title: "Lorem Ipsum",
                    subtitle: "Subtitle",
                    aspectRatio: "portrait"
                },
                {
                    image:lightning,
                    title: "Lorem Ipsum",
                    subtitle: "Subtitle",
                    aspectRatio: "portrait"
                },
                {
                    image: lightning,
                    title: "Lorem Ipsum",
                    subtitle: "Subtitle",
                    aspectRatio: "portrait"
                },
                {
                    image: lightning,
                    title: "Lorem Ipsum",
                    subtitle: "Subtitle",
                    aspectRatio: "portrait"
                },
                {
                    image: lightning,
                    title: "Lorem Ipsum",
                    subtitle: "Subtitle",
                    aspectRatio: "portrait"
                }
            ]
        },
        stories: {
            heading: "See more of our latest stories",
            type: "stories",
            products: [
                {
                    image: stories,
                    title: "Lorem Ipsum",
                    subtitle: "Subtitle",
                    aspectRatio: "square"
                },
                {
                    image:stories,
                    title: "Lorem Ipsum",
                    subtitle: "Subtitle",
                    aspectRatio: "square"
                },
                {
                    image: stories,
                    title: "Lorem Ipsum",
                    subtitle: "Subtitle",
                    aspectRatio: "square"
                },
                {
                    image: stories,
                    title: "Lorem Ipsum",
                    subtitle: "Subtitle",
                    aspectRatio: "square"
                },
                {
                    image: stories,
                    title: "Lorem Ipsum",
                    subtitle: "Subtitle",
                    aspectRatio: "square"
                }
            ]
        },
        furniture: {
            heading: "Our latest furniture",
            type: "furniture",
            products: [
                {
                    image: furniture1,
                    title: "Lorem Ipsum",
                    subtitle: "Subtitle",
                    aspectRatio: "portrait"
                },
                {
                    image: furniture2,
                    title: "Lorem Ipsum",
                    subtitle: "Subtitle",
                    aspectRatio: "landscape"
                },
                {
                    image: furniture3,
                    title: "Lorem Ipsum",
                    subtitle: "Subtitle",
                    aspectRatio: "landscape"
                },
                {
                    image: furniture4,
                    title: "Lorem Ipsum",
                    subtitle: "Subtitle",
                    aspectRatio: "square"
                },
                {
                    image: furniture5,
                    title: "Lorem Ipsum",
                    subtitle: "Subtitle",
                    aspectRatio: "landscape"
                }
            ]
        },
        more: {
            heading: "See more of our latest stories",
            type: "lighting",
            products: [
                {
                    image:more,
                    title: "Lorem Ipsum",
                    subtitle: "Subtitle",
                    aspectRatio: "portrait"
                },
                {
                    image:more,
                    title: "Lorem Ipsum",
                    subtitle: "Subtitle",
                    aspectRatio: "portrait"
                },
                {
                    image: more,
                    title: "Lorem Ipsum",
                    subtitle: "Subtitle",
                    aspectRatio: "portrait"
                },
                {
                    image: more,
                    title: "Lorem Ipsum",
                    subtitle: "Subtitle",
                    aspectRatio: "portrait"
                },
                {
                    image: more,
                    title: "Lorem Ipsum",
                    subtitle: "Subtitle",
                    aspectRatio: "portrait"
                }
            ]
        },
    }
};

export const footerData = {
    contactInfo: {
      phone: "Tel: +44 (0) 207 730 2122",
      email: "hello@jamb.co.uk",
      address: ["95-97 Pimlico Rd", "London SW1W 8PH"],
    },
    columns: [
      {
        categories: [
          {
            title: "Reproduction Chimneypieces",
            isMainCategory: true,
            divider: true,
            links: [
              { text: "Marble", href: "/marble" },
              { text: "Stone", href: "/stone" },
              { text: "Grates & Accessories", href: "/grates" },
              { text: "Guide to Jamb Marbles", href: "/guide" },
            ],
          },
          {
            title: "Antique Chimneypieces",
            isMainCategory: true,
            divider: true,
            links: [
              { text: "French & Italian", href: "/french-italian" },
              { text: "Georgian", href: "/georgian" },
              { text: "Regency", href: "/regency" },
            ],
          },
          {
            title: "Sell an Antique Chimneypiece",
            isMainCategory: true,
            divider: true,
            links: [],
          },
        ],
      },
      {
        categories: [
          {
            title: "Reproduction Lighting",
            isMainCategory: true,
            divider: true,
            links: [
              { text: "Hanging Globes", href: "/globes" },
              { text: "Hanging Lanterns", href: "/lanterns" },
              { text: "Wall Lights", href: "/wall-lights" },
              { text: "Dish Lights", href: "/dish-lights" },
              { text: "Table Lamps", href: "/table-lamps" },
              { text: "Chains & Brackets", href: "/chains" },
            ],
          },
        ],
      },
      {
        categories: [
          {
            title: "Reproduction Furniture",
            isMainCategory: true,
            divider: true,
            links: [
              { text: "Seating", href: "/seating" },
              { text: "Tables", href: "/tables" },
              { text: "Mirrors", href: "/mirrors" },
              { text: "The Pantry Collection", href: "/pantry" },
            ],
          },
          {
            title: "Antique Furniture",
            isMainCategory: true,
            divider: true,
            links: [
              { text: "Seating", href: "/antique-seating" },
              { text: "Tables", href: "/antique-tables" },
              { text: "Desks", href: "/desks" },
              { text: "Bookcases & Cabinets", href: "/bookcases" },
              { text: "Chests", href: "/chests" },
              { text: "Mirrors", href: "/antique-mirrors" },
              { text: "Fire Accessories", href: "/fire-accessories" },
              { text: "Objects", href: "/objects" },
              { text: "Works of Arts", href: "/works-of-arts" },
              { text: "Lighting", href: "/antique-lighting" },
            ],
          },
        ],
      },
      {
        categories: [
          {
            title: "Journal",
            isMainCategory: true,
            divider: true,
            links: [
              { text: "Praesentium", href: "/praesentium" },
              { text: "Voluptatibus", href: "/voluptatibus" },
              { text: "Accusamus", href: "/accusamus" },
              { text: "Iusto", href: "/iusto" },
              { text: "Dignissimos", href: "/dignissimos" },
            ],
          },
        ],
      },
      {
        categories: [
          {
            title: "About",
            isMainCategory: true,
            divider: true,
            links: [
              { text: "Founders", href: "/founders" },
              { text: "Team", href: "/team" },
              { text: "History", href: "/history" },
              { text: "Galleries", href: "/galleries" },
              { text: "Workshops", href: "/workshops" },
              { text: "Showrooms", href: "/showrooms" },
              { text: "Terms & Conditions", href: "/terms" },
            ],
          },
        ],
      },
    ],
  };