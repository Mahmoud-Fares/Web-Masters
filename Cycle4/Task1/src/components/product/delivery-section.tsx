import { RotateCcw, Truck } from 'lucide-react';

export default function DeliverySection() {
   return (
      <div className="rounded-md border">
         <div className="flex items-center gap-3 p-4">
            <Truck className="size-5" />
            <div>
               <h4 className="font-medium">Free Delivery</h4>
               <p className="text-sm underline">
                  Enter your postal code for Delivery Availability
               </p>
            </div>
         </div>

         <div className="flex items-center gap-3 border-t p-4">
            <RotateCcw className="size-5" />
            <div>
               <h4 className="font-medium">Return Delivery</h4>
               <p className="text-sm">
                  Free 30 Days Delivery Returns.{' '}
                  <span className="underline">Details</span>
               </p>
            </div>
         </div>
      </div>
   );
}
