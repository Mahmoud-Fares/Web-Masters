import { Button } from '@/components/ui/button';

import CartHeader from './overview/cart-header';
import CartItemsList from './overview/cart-items-list';

type CartItemsOverviewSectionProps = {
   className?: string;
};
export default function CartItemsOverviewSection({
   className,
}: CartItemsOverviewSectionProps) {
   return (
      <section className={className}>
         <CartHeader />

         <CartItemsList className="py-8" />

         <div className="flex flex-wrap justify-between gap-8">
            <Button variant="outline" className="border-border" asChild>
               <a href="/shop">Return To Shop</a>
            </Button>

            <Button variant="outline" className="border-border">
               Update Cart
            </Button>
         </div>
      </section>
   );
}
