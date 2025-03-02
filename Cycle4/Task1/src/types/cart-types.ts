import { Product } from '@/types/product';

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

export type CartItem = Product & {
   quantity: number;
   selectedColor?: string;
   selectedSize?: string;
};
