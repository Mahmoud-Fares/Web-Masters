import { toast } from 'sonner';
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
            set((state) => {
               const isInWishlist = state.items.some(
                  (item) => item.id === product.id
               );
               if (!isInWishlist)
                  toast.success(
                     `${product.name} has been added to your wishlist!`
                  );
               else
                  toast.info(
                     `${product.name} has been removed from your wishlist!`
                  );

               return {
                  items: isInWishlist
                     ? state.items.filter((item) => item.id !== product.id)
                     : [...state.items, product],
               };
            }),
      }),
      {
         name: 'wishlist-storage',
         partialize: (state) => ({
            items: state.items.filter(Boolean),
         }),
      }
   )
);
