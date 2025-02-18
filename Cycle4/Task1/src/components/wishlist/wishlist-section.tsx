import Container from '@/components/container';
import ProductList from '@/components/product/product-list';
import { Button } from '@/components/ui/button';
import { PRODUCTS } from '@/lib/mock-data';

export default function WishlistSection() {
   const products = PRODUCTS.slice(0, 4);
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
