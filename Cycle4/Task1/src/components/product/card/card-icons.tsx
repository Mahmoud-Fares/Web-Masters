import FavButton from '@/components/buttons/fav-button';
import TrashButton from '@/components/buttons/trash-button';
import ViewButton from '@/components/buttons/view-button';
import { Product } from '@/types/product';

const ICONS = [
   {
      key: 'trash',
      icon: TrashButton,
   },
   {
      key: 'view',
      icon: ViewButton,
   },
   {
      key: 'favourite',
      icon: FavButton,
   },
] as const;

export type IconType = (typeof ICONS)[number]['key'];

type CardIconsProps = {
   className?: string;
   icons: IconType[];
   product: Product;
};

export default function CardIcons({
   className,
   icons,
   product,
}: CardIconsProps) {
   return (
      <div className={className}>
         {ICONS.filter((item) => icons.includes(item.key)).map((item) => {
            const Icon = item.icon;
            return (
               <Icon
                  key={item.key}
                  className="invisible rounded-full opacity-0 duration-300 group-hover:visible group-hover:opacity-100"
                  product={product}
               />
            );
         })}
      </div>
   );
}
