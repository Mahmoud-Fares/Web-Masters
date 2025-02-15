import { useState } from 'react';

import CartHeader from '@/components/cart/cart-header';
import CartItemsList from '@/components/cart/cart-items-list';
import { CartSummary } from '@/components/cart/cart-summary';
import { CouponForm } from '@/components/cart/coupon-form';
import { CardItem, CartState } from '@/components/cart/types';
import Container from '@/components/container';
import { Button } from '@/components/ui/button';
import { PRODUCTS } from '@/lib/mock-data';

const initialItems: CardItem[] = PRODUCTS.slice(0, 3).map((product) => ({
   ...product,
   quantity: 1,
}));

export default function CartPage() {
   const [items, setItems] = useState<CardItem[]>(initialItems);

   const calculateTotals = (items: CardItem[]): CartState => {
      const subtotal = items.reduce(
         (sum, item) => sum + item.price * item.quantity,
         0
      );
      return {
         items,
         subtotal,
         shipping: 'Free',
         total: subtotal,
      };
   };

   const cart = calculateTotals(items);

   const handleUpdateQuantity = (id: number, quantity: number) => {
      setItems(
         items.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
   };

   const handleRemoveItem = (id: number) => {
      setItems(items.filter((item) => item.id !== id));
   };

   const handleApplyCoupon = (code: string) => {
      console.log('Applying coupon:', code);
   };

   const handleCheckout = () => {
      console.log('Proceeding to checkout');
   };

   return (
      <Container className="space-y-8 py-20">
         <CartHeader />

         <CartItemsList
            items={items}
            handleRemoveItem={handleRemoveItem}
            handleUpdateQuantity={handleUpdateQuantity}
         />

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
               cart={cart}
               onCheckout={handleCheckout}
            />
         </div>
      </Container>
   );
}
