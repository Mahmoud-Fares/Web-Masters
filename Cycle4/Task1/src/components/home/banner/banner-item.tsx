import { Card, CardContent } from '@/components/ui/card';
import type { BannerItem as BannerItemType } from '@/lib/mock-data';

import { BannerContent } from './banner-content';

type BannerItemProps = {
   item: BannerItemType;
};

export function BannerItem({ item }: BannerItemProps) {
   return (
      <Card className="rounded-none border-none bg-black">
         <CardContent className="p-0">
            <BannerContent item={item} />
         </CardContent>
      </Card>
   );
}
