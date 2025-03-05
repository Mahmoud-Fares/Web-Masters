import { Link } from 'react-router-dom';

import Container from '@/components/container';
import {
   Select,
   SelectContent,
   SelectGroup,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from '@/components/ui/select';

export default function AnnouncementBar() {
   return (
      <div className="bg-black py-2 text-white">
         <Container className="flex flex-wrap items-center justify-between gap-2">
            <p className="flex-1 text-center text-sm">
               Summer Sale For All Swim Suits And Free Express Delivery - OFF
               50!
               <Link to="/shop" className="ml-1 font-bold underline">
                  ShopNow
               </Link>
            </p>

            <Select defaultValue="english">
               <SelectTrigger className="max-w-max gap-2 border-none ring-0">
                  <SelectValue placeholder="Select a language" />
               </SelectTrigger>

               <SelectContent>
                  <SelectGroup>
                     <SelectItem value="english">English</SelectItem>
                     <SelectItem value="arabic">Arabic</SelectItem>
                  </SelectGroup>
               </SelectContent>
            </Select>
         </Container>
      </div>
   );
}
