import { Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Product } from '@/types/product';

import UserActionButton, { UserActionButtonProps } from './user-action-button';

type ViewButtonProps = UserActionButtonProps & {
   product: Product;
};

export default function ViewButton({
   variant,
   size,
   className,
   product,
}: ViewButtonProps) {
   const navigate = useNavigate();

   return (
      <UserActionButton
         onClick={() => navigate(`/product/${product.slug}`)}
         className={className}
         variant={variant}
         size={size}
      >
         <Eye />
      </UserActionButton>
   );
}
