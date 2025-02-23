import { Product } from '@/lib/mock-data';

export type CartItem = Product & {
   quantity: number;
};

export type CartState = {
   items: CartItem[];
   subtotal: number;
   shipping: string;
   total: number;
};
