import { ShoppingCart } from 'lucide-react';

import CartCashSection from '@/components/cart/items-cash-section';
import CartItemsOverviewSection from '@/components/cart/items-overview-section';
import Container from '@/components/container';
import { EmptyState } from '@/components/ui/empty-state';
import { useCartStore } from '@/stores/cart-store';

export default function CartPage() {
   const items = useCartStore((state) => state.items);

   if (items.length === 0)
      return (
         <Container className="py-section">
            <EmptyState
               title="Your cart is empty"
               description="Add items to your cart to see them here"
               icon=<ShoppingCart className="size-12" />
            />
         </Container>
      );

   return (
      <Container className="py-section">
         <CartItemsOverviewSection className="pb-section" />

         <CartCashSection className="py-section" />
      </Container>
   );
}
