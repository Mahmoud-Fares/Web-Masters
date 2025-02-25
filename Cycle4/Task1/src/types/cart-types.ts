import { Product } from '@/lib/mock-data';

export type CouponType = 'percentage' | 'fixed';

export type Coupon = {
   code: string;
   type: CouponType;
   value: number;
   minPurchase?: number;
   maxDiscount?: number;
   expiryDate?: Date;
   isActive: boolean;
};

export type AppliedCoupon = Coupon & {
   discountAmount: number;
};

export type CartItem = Product & {
   quantity: number;
};

export type CartState = {
   items: CartItem[];
   subtotal: number;
   shipping: string;
   discount?: number;
   total: number;
};
