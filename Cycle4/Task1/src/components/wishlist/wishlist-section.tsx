import Container from '@/components/container';
import ProductList from '@/components/product/product-list';
import { Button } from '@/components/ui/button';
import { EmptyState } from '@/components/ui/empty-state';
import { useWishlistStore } from '@/lib/stores/wishlist-store';

export default function WishlistSection() {
   const { items: products } = useWishlistStore();

   if (products.length === 0)
      return (
         <section>
            <Container>
               <EmptyState
                  title="Your wishlist is empty"
                  description="Items added to your wishlist will appear here"
               />
            </Container>
         </section>
      );

   return (
      <section>
         <Container>
            <div className="flex items-center justify-between">
               <h2 className="font-medium">Wishlist ({products.length})</h2>

               <Button variant={'outline'} className="capitalize">
                  Move all to bag
               </Button>
            </div>

            <ProductList
               products={products}
               icons={['trash']}
               className="my-section"
            />
         </Container>
      </section>
   );
}
