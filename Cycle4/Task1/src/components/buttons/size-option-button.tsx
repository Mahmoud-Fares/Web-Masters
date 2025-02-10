import UserActionButton, { UserActionButtonProps } from './user-action-button';

export default function SizeOptionButton({
   variant,
   size,
   className,
   children,
   onClick,
}: UserActionButtonProps) {
   return (
      <UserActionButton
         onClick={onClick}
         className={className}
         variant={variant}
         size={size}
      >
         {children}
      </UserActionButton>
   );
}
