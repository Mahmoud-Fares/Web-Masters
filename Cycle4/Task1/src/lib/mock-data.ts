import { Coupon } from '../types/cart-types';
import { User } from './stores/user-store';

export interface Product {
   id: number;
   name: string;
   price: number;
   originalPrice?: number;
   discount?: number;
   images: string[];
   category: string;
   rating: number;
   inStock: boolean;
   colors?: string[];
   sizes?: string[];
   description: string;
   reviews?: string[]; // todo: should it be Review[] ?
}

export const CATEGORIES = [
   { id: 1, name: 'Phones', slug: 'phones' },
   { id: 2, name: 'Computers', slug: 'computers' },
   { id: 3, name: 'Smartwatches', slug: 'smartwatches' },
   { id: 4, name: 'Cameras', slug: 'cameras' },
   { id: 5, name: 'Headphones', slug: 'headphones' },
   { id: 6, name: 'Gaming', slug: 'gaming' },
];

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
