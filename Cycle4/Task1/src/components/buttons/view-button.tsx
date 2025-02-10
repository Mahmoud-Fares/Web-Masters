import { Eye } from 'lucide-react';

import UserActionButton, { UserActionButtonProps } from './user-action-button';

export default function ViewButton({
   variant,
   size,
   className,
   onClick,
}: UserActionButtonProps) {
   return (
      <UserActionButton
         onClick={onClick}
         className={className}
         variant={variant}
         size={size}
      >
         <Eye />
      </UserActionButton>
   );
}
