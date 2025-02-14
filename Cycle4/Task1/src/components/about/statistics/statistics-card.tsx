import { cn } from '@/lib/utils';

type StatisticsCardProps = {
   value: string;
   label: string;
   icon: string;
   focus: boolean;
};

export default function StatisticsCard({
   value,
   label,
   icon,
   focus,
}: StatisticsCardProps) {
   return (
      <div
         className={cn(
            'flex flex-col items-center gap-4 rounded-md bg-white p-6',
            focus ? 'bg-primary text-white' : 'border'
         )}
      >
         <div className="flex items-center justify-center text-primary">
            <img src={icon} alt="Statistics Icon" />
         </div>

         <div className="text-center">
            <h3 className="mb-1 text-2xl font-bold">{value}</h3>
            <p>{label}</p>
         </div>
      </div>
   );
}
