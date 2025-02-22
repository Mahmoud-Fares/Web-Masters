import Container from '@/components/container';
import ProductList from '@/components/product/product-list';
import { Button } from '@/components/ui/button';
import { EmptyState } from '@/components/ui/empty-state';
import { useWishlistStore } from '@/lib/stores/wishlist-store';

export default function WishlistSection() {
   const { items: products } = useWishlistStore();

   if (products.length === 0)
      return (
         <Container className="my-10">
            <EmptyState
               title="Your wishlist is empty"
               description="Items added to your wishlist will appear here"
            />
         </Container>
      );

   return (
      <Container>
         <div className="flex items-center justify-between">
            <h2 className="font-medium">Wishlist ({products.length})</h2>

            <Button variant={'outline'} className="px-6 capitalize">
               Move all to bag
            </Button>
         </div>

         <ProductList products={products} icons={['trash']} className="my-10" />
      </Container>
   );
}
