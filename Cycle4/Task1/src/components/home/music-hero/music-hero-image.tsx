import { cn } from '@/lib/utils';

export default function MusicHeroImage({ className }: { className?: string }) {
   return (
      <figure
         className={cn('relative flex items-center justify-center', className)}
      >
         <img
            src="/images/home/JBL.svg"
            alt="Music Hero"
            className="h-full w-full max-w-md object-contain object-center xl:max-w-[80%]"
         />
      </figure>
   );
}
