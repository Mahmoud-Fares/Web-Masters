import CartButton from '@/components/buttons/cart-button';
import FavButton from '@/components/buttons/fav-button';
import ProfileButton from '@/components/buttons/profile-button';

export default function UserActions() {
   return (
      <div className="flex items-center gap-1">
         <FavButton variant={'ghost'} className="rounded-full" />

         <CartButton variant={'ghost'} className="rounded-full" />

         <ProfileButton variant={'ghost'} className="rounded-full" />
      </div>
   );
}
