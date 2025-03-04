import CartButton from '@/components/buttons/cart-button';
import { Product } from '@/types/product';

import CardIcons, { IconType } from './card-icons';
import DiscountBadge from './discount-badge';

type CardThumbnailProps = {
   product: Product;
   icons?: IconType[];
};

export default function CardThumbnail({
   product,
   icons = ['favourite', 'view'],
}: CardThumbnailProps) {
   return (
      <div className="relative flex aspect-[270/250] items-center justify-center overflow-hidden rounded bg-card p-10">
         <img
            src={product.images[0]}
            alt={`${product.name} thumbnail`}
            className="block max-h-[90%]"
         />

         <DiscountBadge
            discount={product.discount}
            className="absolute left-3 top-3"
         />

         <CardIcons
            icons={icons}
            className="absolute right-3 top-3 flex flex-col gap-2"
            product={product}
         />

         <CartButton
            product={product}
            className="absolute bottom-0 right-0 w-full translate-y-[100%] rounded-t-none bg-black text-white duration-300 group-hover:translate-y-0"
         >
            Add To Cart
         </CartButton>
      </div>
   );
}
