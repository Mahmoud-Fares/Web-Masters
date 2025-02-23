import { ShoppingCart } from 'lucide-react';

import CartHeader from '@/components/cart/cart-header';
import CartItemsList from '@/components/cart/cart-items-list';
import { CartSummary } from '@/components/cart/cart-summary';
import { CouponForm } from '@/components/cart/coupon-form';
import Container from '@/components/container';
import { Button } from '@/components/ui/button';
import { EmptyState } from '@/components/ui/empty-state';
import { useCartStore } from '@/lib/stores/cart-store';

export default function CartPage() {
   const items = useCartStore((state) => state.items);

   const handleApplyCoupon = (code: string) => {
      console.log('Applying coupon:', code);
   };

   const handleCheckout = () => {
      console.log('Proceeding to checkout');
   };

   if (items.length === 0)
      return (
         <Container className="py-20">
            <EmptyState
               title="Your cart is empty"
               description="Add items to your cart to see them here"
               icon=<ShoppingCart className="size-12" />
            />
         </Container>
      );

   return (
      <Container className="space-y-8 py-20">
         <CartHeader />

         <CartItemsList />

         <div className="flex flex-wrap justify-between gap-8">
            <Button variant="outline" className="border-border px-8" asChild>
               <a href="/shop">Return To Shop</a>
            </Button>

            <Button variant="outline" className="border-border px-8">
               Update Cart
            </Button>
         </div>

         <div className="flex flex-col justify-between gap-8 lg:flex-row">
            <CouponForm
               className="flex-1 content-start"
               onApply={handleApplyCoupon}
            />

            <CartSummary
               className="w-full lg:max-w-md"
               onCheckout={handleCheckout}
            />
         </div>
      </Container>
   );
}
