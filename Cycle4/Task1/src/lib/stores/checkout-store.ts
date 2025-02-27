import { toast } from 'sonner';
import type { z } from 'zod';
import type { StateCreator } from 'zustand';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { VALID_COUPONS } from '@/lib/mock-data';
import { useCartStore } from '@/lib/stores/cart-store';
import type { checkoutSchema } from '@/lib/validation/checkout-validation';
import type { Coupon } from '@/types/cart-types';

type SavedUserInfo = z.infer<typeof checkoutSchema>;

type CheckoutState = {
   appliedCoupon: Coupon | null;
   savedUserInfo: SavedUserInfo | null;
   availableCoupons: Coupon[];

   // Coupon actions
   applyCoupon: (code: string) => void;
   removeCoupon: () => void;
   markCouponAsUsed: () => void;
   getDiscount: () => number;
   getTotal: () => number;

   // User info actions
   saveUserInfo: (info: SavedUserInfo) => void;
   clearUserInfo: () => void;

   // Order actions
   placeOrder: () => boolean;
};

type CheckoutStorePersist = (
   config: StateCreator<CheckoutState>,
   options: unknown
) => StateCreator<CheckoutState>;

export const useCheckoutStore = create<CheckoutState>()(
   (persist as CheckoutStorePersist)(
      (set, get) => ({
         appliedCoupon: null,
         savedUserInfo: null,
         availableCoupons: VALID_COUPONS,

         applyCoupon: (code: string) => {
            const state = get();
            const subtotal = useCartStore.getState().getSubtotal();
            const couponIndex = state.availableCoupons.findIndex(
               (c) => c.code === code && c.isActive
            );

            if (couponIndex === -1) {
               toast.error('Invalid or expired coupon code!');
               return;
            }

            const coupon = state.availableCoupons[couponIndex];

            if (coupon.minPurchase && subtotal < coupon.minPurchase) {
               toast.error(
                  `Minimum purchase amount of $${coupon.minPurchase} required for this coupon!`
               );
               return;
            }

            set({
               appliedCoupon: coupon,
            });

            toast.success('Coupon applied successfully!');
         },

         removeCoupon: () => {
            set({ appliedCoupon: null });
            toast.info('Coupon removed!');
         },

         markCouponAsUsed: () => {
            const state = get();
            if (state.appliedCoupon) {
               set((state) => ({
                  availableCoupons: state.availableCoupons.map((coupon) =>
                     coupon.code === state.appliedCoupon!.code
                        ? { ...coupon, isActive: false }
                        : coupon
                  ),
                  appliedCoupon: null,
               }));
            }
         },

         getDiscount: () => {
            const state = get();
            const subtotal = useCartStore.getState().getSubtotal();

            if (!state.appliedCoupon) return 0;

            if (state.appliedCoupon.type === 'percentage') {
               const discountAmount =
                  (subtotal * state.appliedCoupon.value) / 100;
               return state.appliedCoupon.maxDiscount
                  ? Math.min(discountAmount, state.appliedCoupon.maxDiscount)
                  : discountAmount;
            }

            return state.appliedCoupon.value;
         },

         getTotal: () => {
            const subtotal = useCartStore.getState().getSubtotal();
            const discount = get().getDiscount();
            return subtotal - discount;
         },

         saveUserInfo: (info: SavedUserInfo) => {
            set({ savedUserInfo: info });
            toast.success('User information saved for future checkouts!');
         },

         clearUserInfo: () => {
            set({ savedUserInfo: null });
            toast.info('User information cleared!');
         },

         placeOrder: () => {
            const cartItems = useCartStore.getState().items;

            if (cartItems.length === 0) {
               toast.error('Cannot place order with empty cart!');
               return false;
            }

            get().markCouponAsUsed();
            useCartStore.getState().clearCart();

            toast.success('Order placed successfully!');
            return true;
         },
      }),
      {
         name: 'checkout-storage',
         partialize: (state: CheckoutState) => ({
            availableCoupons: state.availableCoupons,
            appliedCoupon: state.appliedCoupon,
            savedUserInfo: state.savedUserInfo,
         }),
      }
   )
);
