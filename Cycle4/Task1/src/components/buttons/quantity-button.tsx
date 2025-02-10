import UserActionButton, { UserActionButtonProps } from './user-action-button';

export default function DecrementButton({
   variant,
   size,
   className,
   onClick,
   children,
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
