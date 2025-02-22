import { Button, ButtonProps } from '@/components/ui/button';

export type UserActionButtonProps = ButtonProps & {
   variant?: ButtonProps['variant'];
   size?: ButtonProps['size'];
   className?: string;
   children?: React.ReactNode;
   onClick?: () => void;
};

export default function UserActionButton({
   variant = 'outline',
   size = 'icon',
   className,
   children,
   onClick,
   ...rest
}: UserActionButtonProps) {
   return (
      <Button
         {...rest}
         onClick={onClick}
         className={className}
         variant={variant}
         size={size}
      >
         {children}
      </Button>
   );
}
