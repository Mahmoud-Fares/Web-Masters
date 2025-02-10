import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export type UserActionButtonProps = {
   variant?: ButtonProps['variant'];
   size?: ButtonProps['size'];
   className?: string;
   children?: React.ReactNode;
   onClick?: () => void;
};

export default function UserActionButton({
   variant,
   size,
   className,
   children,
   onClick,
}: UserActionButtonProps) {
   return (
      <Button
         onClick={onClick}
         className={cn(
            'rounded-md transition duration-300 hover:bg-primary hover:text-white',
            className
         )}
         variant={variant || 'outline'}
         size={size || 'icon'}
      >
         {children}
      </Button>
   );
}
