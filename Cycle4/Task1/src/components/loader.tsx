import { LucideLoader } from 'lucide-react';

export default function Loader({ className }: { className?: string }) {
   return (
      <div className={className}>
         <div className="flex w-fit flex-col items-center justify-center">
            <LucideLoader className="h-12 w-12 animate-spin" />
            <span>Loading...</span>
         </div>
      </div>
   );
}
