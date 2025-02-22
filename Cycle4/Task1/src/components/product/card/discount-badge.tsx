import { cn } from '@/lib/utils';

export default function DiscountBadge({
   discount,
   className,
}: {
   discount?: number;
   className?: string;
}) {
   return (
      discount &&
      discount > 0 && (
         <div
            className={cn(
               'rounded bg-primary px-3 py-1 text-sm text-white',
               className
            )}
         >
            - {discount}%
         </div>
      )
   );
}
