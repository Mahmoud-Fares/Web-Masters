import { toast } from 'sonner';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { Product, VALID_COUPONS } from '@/lib/mock-data';
import { AppliedCoupon, CartItem } from '@/types/cart-types';

type addItemProps = {
   product: Product;
   quantity?: number;
   color?: string;
   size?: string;
};

type CartState = {
   items: CartItem[];
   appliedCoupon: AppliedCoupon | null;

   addItem: ({ product, quantity, color, size }: addItemProps) => void;
   removeItem: (productId: number) => void;
   updateQuantity: (productId: number, newQuantity: number) => void;
   clearCart: () => void;

   applyCoupon: (code: string) => void;
   removeCoupon: () => void;
   getSubtotal: () => number;
   getDiscount: () => number;
   getTotal: () => number;
};

export const useCartStore = create<CartState>()(
   persist(
      (set, get) => ({
         items: [],
         appliedCoupon: null,

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
                  const updatedItem = {
                     ...existingItem,
                     quantity: quantity || existingItem.quantity + 1,
                     selectedColor: color,
                     selectedSize: size,
                  };

                  if (existingItem.quantity !== quantity)
                     toast.info(
                        `Quantity for ${existingItem.name} updated to ${quantity || existingItem.quantity + 1}!`
                     );

                  if (existingItem.selectedColor !== color)
                     toast.info(`Color changed to ${color}!`);

                  if (existingItem.selectedSize !== size)
                     toast.info(`Size changed to ${size}!`);

                  return {
                     items: state.items.map((item) =>
                        item.id === product.id ? updatedItem : item
                     ),
                  };
               }

               // New item add it to the cart
               toast.success(`${product.name} has been added to your cart!`);
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
            set((state) => {
               const item = state.items.find((item) => item.id === productId);
               if (item) {
                  toast.info(`${item.name} has been removed from your cart!`);
               }
               return {
                  items: state.items.filter((item) => item.id !== productId),
               };
            }),

         updateQuantity: (productId, newQuantity) =>
            set((state) => {
               const item = state.items.find((item) => item.id === productId);
               if (item)
                  toast.info(
                     `Quantity for ${item.name} updated to ${newQuantity}!`
                  );
               else toast.error('Item not found in the cart!');

               return {
                  items: state.items.map((item) =>
                     item.id === productId
                        ? { ...item, quantity: Math.max(1, newQuantity) }
                        : item
                  ),
               };
            }),

         clearCart: () => set({ items: [], appliedCoupon: null }),

         getSubtotal: () => {
            const state = get();
            return state.items.reduce(
               (total, item) => total + item.price * item.quantity,
               0
            );
         },

         applyCoupon: (code: string) => {
            const state = get();
            const subtotal = state.getSubtotal();
            const coupon = VALID_COUPONS.find(
               (c) => c.code === code && c.isActive
            );

            if (!coupon) {
               toast.error('Invalid or expired coupon code!');
               return;
            }

            if (coupon.minPurchase && subtotal < coupon.minPurchase) {
               toast.error(
                  `Minimum purchase amount of $${coupon.minPurchase} required for this coupon!`
               );
               return;
            }

            let discountAmount = 0;
            if (coupon.type === 'percentage') {
               discountAmount = (subtotal * coupon.value) / 100;
               if (coupon.maxDiscount) {
                  discountAmount = Math.min(discountAmount, coupon.maxDiscount);
               }
            } else {
               discountAmount = coupon.value;
            }

            set({
               appliedCoupon: {
                  ...coupon,
                  discountAmount,
               },
            });

            toast.success('Coupon applied successfully!');
         },

         removeCoupon: () => {
            set({ appliedCoupon: null });
            toast.info('Coupon removed!');
         },

         getDiscount: () => {
            const state = get();
            return state.appliedCoupon?.discountAmount || 0;
         },

         getTotal: () => {
            const state = get();
            return state.getSubtotal() - state.getDiscount();
         },
      }),
      {
         name: 'cart-storage',
         partialize: (state) => ({
            items: state.items,
            appliedCoupon: state.appliedCoupon,
         }),
      }
   )
);
