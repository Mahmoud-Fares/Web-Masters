import { TrashIcon } from 'lucide-react';

import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type TrashButtonProps = {
   variant?: ButtonProps['variant'];
   size?: ButtonProps['size'];
   className?: string;
};

export default function TrashButton({
   variant,
   size,
   className,
}: TrashButtonProps) {
   return (
      <Button
         className={cn(
            'rounded-md transition duration-300 hover:bg-primary hover:text-white',
            className
         )}
         variant={variant || 'outline'}
         size={size || 'icon'}
      >
         <TrashIcon />
      </Button>
   );
}
