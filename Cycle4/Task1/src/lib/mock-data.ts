import { Coupon } from '@/types/cart-types';
import { Product } from '@/types/product';
import { User } from '@/types/user';

export const PRODUCTS: Product[] = [
   {
      id: 1,
      name: 'Havic HV G-92 Gamepad',
      price: 192,
      originalPrice: 200,
      discount: 40,
      images: [
         '/product-image-1.png',
         '/product-image-2.png',
         '/product-image-3.png',
         '/product-image-4.png',
         '/product-image-5.png',
      ],
      category: 'Gaming',
      rating: 4,
      inStock: true,
      colors: ['red', 'black'],
      sizes: ['xs', 's', 'm', 'l', 'xl'],
      description:
         'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
      reviews: [
         'This is a great product!',
         'I love the color and the size!',
         'The product is very good!',
      ],
   },
   {
      id: 2,
      name: 'RGB Gaming Keyboard',
      price: 960,
      originalPrice: 1477,
      discount: 35,
      images: [
         '/product-image-1.png',
         '/product-image-2.png',
         '/product-image-3.png',
         '/product-image-4.png',
         '/product-image-5.png',
      ],
      category: 'Gaming',
      rating: 4,
      inStock: true,
      description:
         'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
      reviews: [
         'This is a great product!',
         'I love the color and the size!',
         'The product is very good!',
      ],
      colors: ['blue', 'red', 'green'],
      sizes: ['s', 'm', 'l'],
   },
   {
      id: 3,
      name: 'Gaming Monitor 27"',
      price: 370,
      originalPrice: 529,
      discount: 30,
      images: [
         '/product-image-1.png',
         '/product-image-2.png',
         '/product-image-3.png',
         '/product-image-4.png',
         '/product-image-5.png',
      ],
      category: 'Monitors',
      rating: 5,
      inStock: true,
      description:
         'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
      reviews: [
         'This is a great product!',
         'I love the color and the size!',
         'The product is very good!',
      ],
   },
   {
      id: 4,
      name: 'Modern Dining Chair',
      price: 375,
      originalPrice: 500,
      discount: 25,
      images: [
         '/product-image-1.png',
         '/product-image-2.png',
         '/product-image-3.png',
         '/product-image-4.png',
         '/product-image-5.png',
      ],
      category: 'Furniture',
      rating: 4.5,
      inStock: true,
      colors: ['gray', 'beige'],
      description:
         'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
      reviews: [
         'This is a great product!',
         'I love the color and the size!',
         'The product is very good!',
      ],
   },
   {
      id: 5,
      name: 'PS5 Controller',
      price: 69.99,
      images: [
         'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-JIwFRuPLDlpJVODiK4Wu2lA7tg5fge.png',
      ],
      category: 'Gaming',
      rating: 4,
      inStock: true,
      colors: ['white', 'black', 'red'],
      sizes: ['M', 'L'],
      description:
         'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
      reviews: [
         'This is a great product!',
         'I love the color and the size!',
         'The product is very good!',
      ],
   },
];

export const featuredProducts = PRODUCTS.slice(0, 3);

export const USERS: User[] = [
   {
      id: 1,
      firstName: 'Md',
      lastName: 'Rimel',
      email: 'rimel1111@gmail.com',
      address: 'Kingston, 5236, United State',
      password: 'hashedPassword123',
   },
   {
      id: 2,
      firstName: 'Mahmoud',
      lastName: 'Fares',
      email: 'email@email.com',
      address: 'Los Angeles, 90001, United State',
      password: 'Admin1234',
   },
];

export const VALID_COUPONS: Coupon[] = [
   {
      code: 'SAVE10',
      type: 'percentage',
      value: 10,
      minPurchase: 0,
      isActive: true,
   },
   {
      code: 'SAVE20',
      type: 'percentage',
      value: 20,
      minPurchase: 100,
      maxDiscount: 700,
      isActive: true,
   },
   {
      code: 'FIXED500',
      type: 'fixed',
      value: 500,
      minPurchase: 150,
      isActive: true,
   },
];

export type SubcategoryType = {
   name: string;
   href: string;
};

export type CategoryItemType = {
   name: string;
   href: string;
   hasChildren?: boolean;
   subcategories?: SubcategoryType[];
};

export const CATEGORIES: CategoryItemType[] = [
   {
      // eslint-disable-next-line quotes
      name: "Woman's Fashion",
      href: '/categories/womans-fashion',
      hasChildren: true,
      subcategories: [
         { name: 'Dresses', href: '/categories/womans-fashion/dresses' },
         { name: 'Tops', href: '/categories/womans-fashion/tops' },
         { name: 'Bottoms', href: '/categories/womans-fashion/bottoms' },
         { name: 'Footwear', href: '/categories/womans-fashion/footwear' },
         {
            name: 'Accessories',
            href: '/categories/womans-fashion/accessories',
         },
      ],
   },
   {
      // eslint-disable-next-line quotes
      name: "Men's Fashion",
      href: '/categories/mens-fashion',
      hasChildren: true,
      subcategories: [
         { name: 'Shirts', href: '/categories/mens-fashion/shirts' },
         { name: 'Pants', href: '/categories/mens-fashion/pants' },
         { name: 'Suits', href: '/categories/mens-fashion/suits' },
         { name: 'Shoes', href: '/categories/mens-fashion/shoes' },
         { name: 'Accessories', href: '/categories/mens-fashion/accessories' },
      ],
   },
   { name: 'Electronics', href: '/categories/electronics' },
   { name: 'Home & Lifestyle', href: '/categories/home-lifestyle' },
   { name: 'Medicine', href: '/categories/medicine' },
   { name: 'Sports & Outdoor', href: '/categories/sports-outdoor' },
   // eslint-disable-next-line quotes
   { name: "Baby's & Toys", href: '/categories/babies-toys' },
   { name: 'Groceries & Pets', href: '/categories/groceries-pets' },
   { name: 'Health & Beauty', href: '/categories/health-beauty' },
];

export type BannerItem = {
   id: number;
   title: string;
   discount: number;
   image: string;
   logo: string;
};

export const BANNER_ITEMS: BannerItem[] = [
   {
      id: 1,
      title: 'iPhone 14 Series',
      discount: 10,
      image: '/images/home/hero/iphone-14.svg',
      logo: '/images/home/hero/iphone-logo.svg',
   },
   {
      id: 2,
      title: 'Samsung Galaxy S23',
      discount: 15,
      image: '/images/home/hero/samsung-galaxy-s23.png',
      logo: '/images/home/hero/samsung-logo.svg',
   },
   {
      id: 3,
      title: 'iPhone 14 Series',
      discount: 10,
      image: '/images/home/hero/iphone-14.svg',
      logo: '/images/home/hero/iphone-logo.svg',
   },
   {
      id: 4,
      title: 'Samsung Galaxy S23',
      discount: 15,
      image: '/images/home/hero/samsung-galaxy-s23.png',
      logo: '/images/home/hero/samsung-logo.svg',
   },
   {
      id: 5,
      title: 'iPhone 14 Series',
      discount: 10,
      image: '/images/home/hero/iphone-14.svg',
      logo: '/images/home/hero/iphone-logo.svg',
   },

   // {
   //    id: 3,
   //    title: 'Google Pixel 7',
   //    discount: 20,
   //    image: '/images/home/hero/google-pixel-7.svg',
   //    logo: '/images/home/hero/google-logo.svg',
   // },
   // {
   //    id: 4,
   //    title: 'OnePlus 11',
   //    discount: 12,
   //    image: '/images/home/hero/oneplus-11.svg',
   //    logo: '/images/home/hero/oneplus-logo.svg',
   // },
];
