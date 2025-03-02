import type { BannerItem } from '@/lib/mock-data';

import {
   DiscountSection,
   LogoSection,
   ProductImage,
   ShopNowButton,
} from './components';

type BannerContentProps = {
   item: BannerItem;
};

export function BannerContent({ item }: BannerContentProps) {
   return (
      <div className="flex max-w-full flex-col-reverse items-center justify-between gap-3 p-8 sm:grid sm:grid-cols-2 md:min-h-[340px]">
         <div className="flex flex-col items-start self-start text-white sm:self-center">
            <LogoSection logo={item.logo} title={item.title} />
            <DiscountSection discount={item.discount} />
            <ShopNowButton />
         </div>

         <ProductImage image={item.image} title={item.title} />
      </div>
   );
}
