import OwnerImage from './owner-image';
import OwnerInfo from './owner-info';

export type OwnerCardProps = {
   name: string;
   position: string;
   imageUrl: string;
};

export default function OwnerCard({
   name,
   position,
   imageUrl,
}: OwnerCardProps) {
   return (
      <div className="flex flex-col rounded-md transition-transform hover:scale-[1.02]">
         <OwnerImage imageUrl={imageUrl} name={name} />

         <OwnerInfo name={name} position={position} />
      </div>
   );
}
