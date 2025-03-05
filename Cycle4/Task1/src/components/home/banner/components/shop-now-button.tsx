import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ShopNowButton() {
   return (
      <Link
         to="/shop"
         className="mb-4 flex items-center gap-2 border-b border-white pb-1 text-white transition-opacity hover:opacity-80"
      >
         Shop Now <ArrowRight className="h-5 w-5" />
      </Link>
   );
}
