import { OwnerCardProps } from './owner-card';
import OwnerSocials from './owner-social';

export default function OwnerInfo({ name, position }: Partial<OwnerCardProps>) {
   return (
      <div className="flex flex-col gap-2 pt-4">
         <h3 className="text-xl font-semibold capitalize">{name}</h3>

         <p className="capitalize">{position}</p>

         <OwnerSocials />
      </div>
   );
}
