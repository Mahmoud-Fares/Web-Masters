import { TrashIcon } from 'lucide-react';

import UserActionButton, { UserActionButtonProps } from './user-action-button';

export default function TrashButton({
   variant,
   size,
   className,
}: UserActionButtonProps) {
   return (
      <UserActionButton className={className} variant={variant} size={size}>
         <TrashIcon />
      </UserActionButton>
   );
}
