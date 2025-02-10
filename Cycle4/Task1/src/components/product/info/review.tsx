import { cn } from '@/lib/utils';

type ReviewProps = {
   reviews?: string[];
   showCountOnly?: boolean;
   className?: string;
};

export default function Review({
   reviews,
   showCountOnly = false,
   className,
}: ReviewProps) {
   return (
      <div className={cn('text-muted-foreground', className)}>
         {showCountOnly ? (
            <span>({reviews?.length || 0})</span>
         ) : (
            <span>({reviews?.length || 0} Reviews)</span>
         )}
      </div>
   );
}
