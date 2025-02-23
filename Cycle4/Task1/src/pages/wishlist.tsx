import RecommendationSection from '@/components/wishlist/recommendation-section';
import WishlistSection from '@/components/wishlist/wishlist-section';

export default function WishlistPage() {
   return (
      <div className="py-section">
         <WishlistSection />

         <RecommendationSection />
      </div>
   );
}
