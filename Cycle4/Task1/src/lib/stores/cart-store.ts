import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { Product } from '@/lib/mock-data';

export type CartItem = Product & {
   quantity: number;
   selectedColor?: string;
   selectedSize?: string;
};

type addItemProps = {
   product: Product;
   quantity?: number;
   color?: string;
   size?: string;
};
type CartState = {
   items: CartItem[];
   addItem: ({ product, quantity, color, size }: addItemProps) => void;
   removeItem: (productId: number) => void;
   updateQuantity: (productId: number, newQuantity: number) => void;
   clearCart: () => void;
};

export const useCartStore = create<CartState>()(
   persist(
      (set) => ({
         items: [],
         addItem: ({
            product,
            quantity,
            color = product.colors?.[0],
            size = product.sizes?.[0],
         }) =>
            set((state) => {
               const existingItem = state.items.find(
                  (item) => item.id === product.id
               );

               if (existingItem) {
                  // Item is already in the cart, update it with the new values
                  console.log('existingItem', existingItem);
                  return {
                     items: state.items.map((item) =>
                        item.id === product.id
                           ? {
                                ...item,
                                quantity: quantity || item.quantity + 1, // Add selected quantity or increment by 1
                                // in case of changing the size or the color
                                selectedColor: color,
                                selectedSize: size,
                             }
                           : item
                     ),
                  };
               }

               // New item add it to the cart
               return {
                  items: [
                     ...state.items,
                     {
                        ...product,
                        quantity: quantity || 1,
                        selectedColor: color,
                        selectedSize: size,
                     },
                  ],
               };
            }),

         removeItem: (productId) =>
            set((state) => ({
               items: state.items.filter((item) => item.id !== productId),
            })),

         updateQuantity: (productId, newQuantity) =>
            set((state) => ({
               items: state.items.map((item) =>
                  item.id === productId
                     ? { ...item, quantity: Math.max(1, newQuantity) }
                     : item
               ),
            })),

         clearCart: () => set({ items: [] }),
      }),
      {
         name: 'cart-storage',
         partialize: (state) => ({ items: state.items }),
      }
   )
);
