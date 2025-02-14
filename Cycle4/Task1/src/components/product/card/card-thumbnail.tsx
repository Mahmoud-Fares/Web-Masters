import CartButton from '@/components/buttons/cart-button';
import { Product } from '@/lib/mock-data';

import CardIcons from './card-icons';
import DiscountBadge from './discount-badge';

export default function CardThumbnail({ product }: { product: Product }) {
   return (
      <div className="group relative flex aspect-[270/250] max-w-[270px] items-center justify-center overflow-hidden rounded bg-card p-10">
         <img
            src={product.images[0]}
            alt={`${product.name} thumbnail`}
            className="block"
         />

         <DiscountBadge
            discount={product.discount}
            className="absolute left-3 top-3"
         />

         <CardIcons
            icons={['favourite', 'view']}
            className="absolute right-3 top-3 flex flex-col gap-2"
         />

         <CartButton className="absolute bottom-0 right-0 w-full translate-y-[100%] rounded-t-none bg-black text-white duration-300 group-hover:translate-y-0">
            Add To Cart
         </CartButton>
      </div>
   );
}
