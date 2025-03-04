import { useState } from 'react';

import { Product } from '@/types/product';

import ImageOptions from './image-options';
import SelectedImage from './selected-image';

export default function ImageGallery({ product }: { product: Product }) {
   const [selectedIndex, setSelectedIndex] = useState(0);

   return (
      <div className="mx-auto flex flex-col-reverse justify-center gap-4 md:flex-row md:gap-6 lg:mx-0">
         <ImageOptions
            product={product}
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
         />

         <div className="max-w-md flex-1 lg:max-w-none">
            <SelectedImage
               image={product.images[selectedIndex]}
               productName={product.name}
            />
         </div>
      </div>
   );
}
