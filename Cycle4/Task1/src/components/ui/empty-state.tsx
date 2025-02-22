import { HeartOff } from 'lucide-react';

import { cn } from '@/lib/utils';

type EmptyStateProps = {
   title?: string;
   description?: string;
   icon?: React.ReactNode;
   className?: string;
};

export function EmptyState({
   title = 'No items found',
   description = 'Try adding some items to your list.',
   icon = <HeartOff className="h-12 w-12" />,
   className,
}: EmptyStateProps) {
   return (
      <div
         className={cn(
            'flex min-h-[400px] flex-col items-center justify-center gap-4 rounded-lg border border-border bg-card p-8 text-center',
            className
         )}
      >
         <div className="rounded-full bg-muted p-4">{icon}</div>
         <div className="space-y-2">
            <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
         </div>
      </div>
   );
}
