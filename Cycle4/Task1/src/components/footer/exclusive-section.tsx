import { SendHorizontal } from 'lucide-react';

import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ExclusiveSection() {
   return (
      <div className="space-y-4">
         <Logo />

         <h4 className="text-xl">Subscribe</h4>
         <p className="text-sm">Get 10% off your first order</p>

         <div className="flex items-center gap-1 rounded border">
            <Input
               type="email"
               placeholder="Enter your email"
               className="border-transparent !bg-transparent focus-visible:ring-transparent"
            />

            <Button
               className="rounded focus-visible:bg-accent focus-visible:text-accent-foreground"
               variant="ghost"
               size="icon"
            >
               <SendHorizontal />
            </Button>
         </div>
      </div>
   );
}
