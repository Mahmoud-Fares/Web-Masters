import { Star } from 'lucide-react';

import { cn } from '@/lib/utils';

export default function Rate({ rate }: { rate: number }) {
   return (
      <div className="flex items-center">
         {Array.from({ length: 5 }).map((_, i) => (
            <span key={i} className="text-gold">
               <Star
                  className={cn(
                     'size-4',
                     i < rate
                        ? 'fill-gold text-gold'
                        : 'fill-muted-foreground/60 text-muted-foreground/40'
                  )}
               />
            </span>
         ))}
      </div>
   );
}
