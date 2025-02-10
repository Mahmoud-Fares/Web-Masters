import FavButton from '@/components/buttons/fav-button';
import TrashButton from '@/components/buttons/trash-button';
import ViewButton from '@/components/buttons/view-button';

const ICONS = ['trash', 'view', 'favourite'] as const;
type IconType = (typeof ICONS)[number];

type CardIconsProps = {
   className?: string;
   icons: IconType[];
};

export default function CardIcons({ className, icons }: CardIconsProps) {
   return (
      <div className={className}>
         {icons.includes('trash') && (
            <TrashButton className="invisible rounded-full opacity-0 duration-300 group-hover:visible group-hover:opacity-100" />
         )}

         {icons.includes('favourite') && (
            <FavButton className="invisible rounded-full opacity-0 duration-300 group-hover:visible group-hover:opacity-100" />
         )}

         {icons.includes('view') && (
            <ViewButton className="invisible rounded-full opacity-0 duration-300 group-hover:visible group-hover:opacity-100" />
         )}
      </div>
   );
}
