import { useState } from 'react';

import FavButton from '@/components/buttons/fav-button';
import { Button } from '@/components/ui/button';
import { Product } from '@/lib/mock-data';

import ColorSelector from './color-selector';
import QuantitySelector from './quantity-selector';
import SizeSelector from './size-selector';

export default function BuyForm({ product }: { product: Product }) {
   const [quantity, setQuantity] = useState(1);
   const [selectedSize, setSelectedSize] = useState(product.sizes?.[0]);
   const [selectedColor, setSelectedColor] = useState(product.colors?.[0]);

   return (
      <div className="space-y-6 border-t py-6">
         {product.colors && (
            <ColorSelector
               colors={product.colors}
               selectedColor={selectedColor!}
               onSelectColor={setSelectedColor}
            />
         )}

         {product.sizes && (
            <SizeSelector
               sizes={product.sizes}
               selectedSize={selectedSize!}
               onSelectSize={setSelectedSize}
            />
         )}

         <div className="flex flex-wrap items-center gap-4">
            <QuantitySelector
               quantity={quantity}
               onQuantityChange={setQuantity}
            />

            <Button className="flex-1 rounded-md">Buy Now</Button>

            <FavButton product={product} />
         </div>
      </div>
   );
}
