import { OwnerCardProps } from './owner-card';

export default function OwnerImage({
   imageUrl,
   name,
}: Partial<OwnerCardProps>) {
   return (
      <div className="aspect-[370/430] h-[430px] rounded-md bg-secondary px-4 pt-4">
         <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-contain object-bottom"
         />
      </div>
   );
}
