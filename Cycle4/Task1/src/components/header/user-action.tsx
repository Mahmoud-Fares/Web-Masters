import { User } from 'lucide-react';

import FavButton from '@/components/fav-button';
import CartButton from '@/components/product/card/cart-button';
import { Button } from '@/components/ui/button';

export default function UserActions() {
   return (
      <div className="flex items-center gap-1">
         <FavButton variant={'ghost'} className="rounded-full" />

         <CartButton variant={'ghost'} className="rounded-full" />

         <Button
            className="rounded-full transition duration-300 hover:bg-[#E94444] hover:text-white"
            variant="ghost"
            size="icon"
         >
            <User />
         </Button>
      </div>
   );
}
