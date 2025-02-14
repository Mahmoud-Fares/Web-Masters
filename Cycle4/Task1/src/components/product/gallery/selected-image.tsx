import { cn } from '@/lib/utils';

type SelectedImageProps = {
   image: string;
   productName: string;
};
export default function SelectedImage({
   image,
   productName,
}: SelectedImageProps) {
   return (
      <div className={cn('aspect-[500/600] w-full rounded bg-card p-4')}>
         <img
            src={image}
            alt={productName}
            className="h-full w-full object-contain"
         />
      </div>
   );
}
