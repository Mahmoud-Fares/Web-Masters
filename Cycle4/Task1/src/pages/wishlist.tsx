import CategoryCard from '@/components/home/category-card';
import RecommendationSection from '@/components/wishlist/recommendation-section';
import WishlistSection from '@/components/wishlist/wishlist-section';

export default function WishlistPage() {
   return (
      <div className="py-section">
         <WishlistSection />

         <RecommendationSection />

         <CategoryCard
            title="Learning"
            href="/learning"
            icon="/images/home/category-computer.svg"
         />
      </div>
   );
}
