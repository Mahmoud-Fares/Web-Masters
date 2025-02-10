import { Heart } from 'lucide-react';

import UserActionButton, { UserActionButtonProps } from './user-action-button';

export default function FavButton({
   variant,
   size,
   className,
}: UserActionButtonProps) {
   return (
      <UserActionButton className={className} variant={variant} size={size}>
         <Heart />
      </UserActionButton>
   );
}
