import { Eye } from 'lucide-react';

import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type viewButtonProps = {
   variant?: ButtonProps['variant'];
   size?: ButtonProps['size'];
   className?: string;
};

export default function ViewButton({
   variant,
   size,
   className,
}: viewButtonProps) {
   return (
      <Button
         className={cn(
            'rounded-md transition duration-300 hover:bg-primary hover:text-white',
            className
         )}
         variant={variant || 'outline'}
         size={size || 'icon'}
      >
         <Eye />
      </Button>
   );
}
