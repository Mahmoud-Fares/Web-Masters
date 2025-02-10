import { cn } from '@/lib/utils';

type PriceProps = {
   price: number;
   discount?: number;
   className?: string;
};

export default function Price({ price, discount = 0, className }: PriceProps) {
   const priceAfterDiscount = price - price * (discount / 100);

   return discount ? (
      <div className="flex flex-wrap items-center gap-4">
         <p className={cn('text-2xl font-medium', className)}>
            ${priceAfterDiscount.toFixed(2)}
         </p>

         <p
            className={cn(
               'text-2xl font-medium line-through',
               className,
               'text-muted-foreground/75'
            )}
         >
            ${price.toFixed(2)}
         </p>
      </div>
   ) : (
      <p className={cn('text-2xl font-medium', className)}>
         ${price.toFixed(2)}
      </p>
   );
}
