import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
   return (
      <div className={cn('flex h-full items-center justify-center', className)}>
         <img src="/logo.svg" alt="Weather App Logo" className="block" />
      </div>
   );
}
