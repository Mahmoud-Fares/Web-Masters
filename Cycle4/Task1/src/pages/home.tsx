import CustomCarousel from '@/components/home/custom-carousel';
import HeroSection from '@/components/home/hero-section';
import ProductCard from '@/components/product/product-card';
import { Button } from '@/components/ui/button';
import { PRODUCTS } from '@/lib/mock-data';
import { useUserStore } from '@/stores/user-store';

export default function Home() {
   const currentUser = useUserStore((state) => state.currentUser);
   const logout = useUserStore((state) => state.logout);

   return (
      <>
         <HeroSection />

         <CustomCarousel
            data={[...PRODUCTS, ...PRODUCTS, ...PRODUCTS, ...PRODUCTS]}
            renderItem={(item) => <ProductCard product={item} />}
            rows={2}
         />

         <div className="flex flex-1 flex-col items-center justify-center gap-4 py-8">
            <h1 className="text-3xl font-bold underline">
               Hello {currentUser?.firstName ?? 'there!'}👋
            </h1>

            <Button onClick={() => logout()}>Logout</Button>
         </div>
      </>
   );
}
