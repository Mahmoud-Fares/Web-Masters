import OwnerCard from './owner-card';
import { OWNERS } from './owners-data';

export default function OwnersComponent() {
   return (
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
         {OWNERS.map((owner) => (
            <OwnerCard
               key={owner.id}
               name={owner.name}
               position={owner.position}
               imageUrl={owner.imageUrl}
            />
         ))}
      </div>
   );
}
