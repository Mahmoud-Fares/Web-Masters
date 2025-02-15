import { Product } from '@/lib/mock-data';

export type CardItem = Product & {
   quantity: number;
};

export type CartState = {
   items: CardItem[];
   subtotal: number;
   shipping: string;
   total: number;
};
