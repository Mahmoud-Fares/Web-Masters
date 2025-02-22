import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { Product } from '@/lib/mock-data';

type WishlistState = {
   items: Product[];
   toggleItem: (product: Product) => void;
};

export const useWishlistStore = create<WishlistState>()(
   persist(
      (set) => ({
         items: [],

         toggleItem: (product) =>
            set((state) => ({
               items: state.items.some((item) => item.id === product.id)
                  ? state.items.filter((item) => item.id !== product.id)
                  : [...state.items, product],
            })),
      }),
      {
         name: 'wishlist-storage',
         partialize: (state) => ({
            items: state.items.filter(Boolean),
         }),
      }
   )
);
