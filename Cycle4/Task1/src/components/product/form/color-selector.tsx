import { CheckIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ColorSelectorProps {
   colors: string[];
   selectedColor: string;
   onSelectColor: (color: string) => void;
}

export default function ColorSelector({
   colors,
   selectedColor,
   onSelectColor,
}: ColorSelectorProps) {
   return (
      <div className="flex flex-wrap items-center gap-2">
         <h3 className="font-medium">Colors:</h3>

         <div className="flex items-center gap-2">
            {colors.map((color) => (
               <Button
                  key={color}
                  onClick={() => onSelectColor(color)}
                  variant={selectedColor === color ? 'default' : 'outline'}
                  className={cn(
                     'flex size-2 items-center justify-center rounded-full p-3 shadow-none ring-2 ring-transparent ring-offset-1 hover:ring-black',
                     selectedColor === color && 'ring-black'
                  )}
                  style={{ backgroundColor: color }}
               >
                  {selectedColor === color && (
                     <CheckIcon className="size-2 text-white" />
                  )}
               </Button>
            ))}
         </div>
      </div>
   );
}
