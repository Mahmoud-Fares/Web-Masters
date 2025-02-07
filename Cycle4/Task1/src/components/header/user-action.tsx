import { Heart, ShoppingCart, User } from 'lucide-react';

import { Button } from '@/components/ui/button';

export default function UserActions() {
   return (
      <div className="flex items-center gap-1">
         <Button
            className="rounded-full transition duration-300 hover:bg-[#E94444] hover:text-white"
            variant="ghost"
            size="icon"
         >
            <Heart />
         </Button>
         <Button
            className="rounded-full transition duration-300 hover:bg-[#E94444] hover:text-white"
            variant="ghost"
            size="icon"
         >
            <ShoppingCart />
         </Button>
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
