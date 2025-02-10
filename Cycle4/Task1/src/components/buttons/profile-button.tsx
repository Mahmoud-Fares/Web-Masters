import { User } from 'lucide-react';

import UserActionButton, { UserActionButtonProps } from './user-action-button';

export default function ProfileButton({
   variant,
   size,
   className,
}: UserActionButtonProps) {
   return (
      <UserActionButton className={className} variant={variant} size={size}>
         <User />
      </UserActionButton>
   );
}
