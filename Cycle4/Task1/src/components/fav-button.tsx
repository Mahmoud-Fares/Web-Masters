import { Heart } from 'lucide-react';

import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type FavButtonProps = {
   variant?: ButtonProps['variant'];
   size?: ButtonProps['size'];
   className?: string;
};

export default function FavButton({
   variant,
   size,
   className,
}: FavButtonProps) {
   return (
      <Button
         className={cn(
            'rounded-md transition duration-300 hover:bg-primary hover:text-white',
            className
         )}
         variant={variant || 'outline'}
         size={size || 'icon'}
      >
         <Heart />
      </Button>
   );
}
