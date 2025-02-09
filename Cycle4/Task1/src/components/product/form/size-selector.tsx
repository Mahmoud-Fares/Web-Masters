import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SizeSelectorProps {
   sizes: string[];
   selectedSize: string;
   onSelectSize: (size: string) => void;
}

export default function SizeSelector({
   sizes,
   selectedSize,
   onSelectSize,
}: SizeSelectorProps) {
   return (
      <div className="flex flex-wrap items-center gap-2">
         <h3 className="font-medium">Size:</h3>

         <div className="flex flex-wrap items-center gap-2">
            {sizes.map((size) => (
               <Button
                  key={size}
                  onClick={() => onSelectSize(size)}
                  variant={selectedSize === size ? 'default' : 'outline'}
                  size="icon"
                  className={cn(
                     'rounded-md border uppercase shadow-none hover:border-primary',
                     selectedSize === size && 'border-transparent'
                  )}
               >
                  {size}
               </Button>
            ))}
         </div>
      </div>
   );
}
