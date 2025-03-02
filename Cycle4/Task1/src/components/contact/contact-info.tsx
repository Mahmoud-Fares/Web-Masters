import type { LucideIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

type ContactInfoProps = {
   icon: LucideIcon;
   title: string;
   children: React.ReactNode;
   className?: string;
};

export default function ContactInfo({
   icon: Icon,
   title,
   children,
   className,
}: ContactInfoProps) {
   return (
      <div className={cn('space-y-4', className)}>
         <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
               <Icon className="h-5 w-5 text-primary-foreground" />
            </div>

            <h2 className="text-xl font-semibold">{title}</h2>
         </div>

         <div className="space-y-2">{children}</div>
      </div>
   );
}
