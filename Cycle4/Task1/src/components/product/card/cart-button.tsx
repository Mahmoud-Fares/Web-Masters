import { ShoppingCart } from 'lucide-react';

import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type CartButtonProps = {
   variant?: ButtonProps['variant'];
   size?: ButtonProps['size'];
   className?: string;
   children?: React.ReactNode;
};

export default function CartButton({
   variant,
   size,
   className,
   children,
}: CartButtonProps) {
   return (
      <Button
         className={cn(
            'rounded-md transition duration-300 hover:bg-primary hover:text-white',
            { 'flex items-center gap-2': children },
            className
         )}
         variant={variant || 'outline'}
         size={size || 'icon'}
      >
         <ShoppingCart /> {children}
      </Button>
   );
}
