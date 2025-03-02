import SizeOptionButton from '@/components/buttons/size-option-button';
import { cn } from '@/lib/utils';

type SizeSelectorProps = {
   sizes: string[];
   selectedSize: string;
   onSelectSize: (size: string) => void;
};

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
               <SizeOptionButton
                  key={size}
                  onClick={() => onSelectSize(size)}
                  className={cn(
                     'uppercase',
                     selectedSize === size && 'bg-primary text-white'
                  )}
               >
                  {size}
               </SizeOptionButton>
            ))}
         </div>
      </div>
   );
}
