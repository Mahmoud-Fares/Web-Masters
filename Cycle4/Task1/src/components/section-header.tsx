import { cn } from '@/lib/utils';

type SectionTitleProps = {
   text: string;
   children?: React.ReactNode;
   className?: string;
};

export default function SectionTitle({
   text,
   children,
   className,
}: SectionTitleProps) {
   return (
      <div className="flex flex-col gap-4">
         <div className="flex h-12 items-center gap-6">
            <div className="h-full w-6 rounded-md bg-primary" />
            <span className="text-lg font-semibold text-primary">{text}</span>
         </div>

         <h3 className={cn('text-4xl font-medium', className)}>{children}</h3>
      </div>
   );
}
