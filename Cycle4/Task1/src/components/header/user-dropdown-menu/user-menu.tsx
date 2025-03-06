import { LogIn, LogOut, User, UserPen } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

import SignedIn from '@/components/signed-in';
import SignedOut from '@/components/signed-out';
import { Button } from '@/components/ui/button';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { useUserStore } from '@/stores/user-store';

import RenderMenuGroups from './render-menu-groups';
import UserDetails from './user-details';

export default function UserMenu() {
   const logout = useUserStore((state) => state.logout);
   const navigate = useNavigate();
   const location = useLocation();

   const signedInMenuGroups = [
      [
         {
            label: 'Edit Profile',
            icon: UserPen,
            action: () => navigate('/account'),
         },
      ],
      [
         {
            label: 'Logout',
            icon: LogOut,
            action: logout,
         },
      ],
   ];

   const signedOutMenuGroups = [
      [
         {
            label: 'Login',
            icon: LogIn,
            action: () => navigate('/login'),
         },
      ],
   ];

   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <Button
               size="icon"
               variant="ghost"
               aria-label="Open account menu"
               className={cn(
                  'rounded-full duration-0 focus-visible:ring-0',
                  location.pathname === '/account' &&
                     'bg-primary text-primary-foreground'
               )}
            >
               <User size={16} strokeWidth={2} aria-hidden="true" />
            </Button>
         </DropdownMenuTrigger>

         <DropdownMenuContent className="w-64 max-w-full">
            <SignedIn>
               <UserDetails />

               <DropdownMenuSeparator />

               <RenderMenuGroups groups={signedInMenuGroups} />
            </SignedIn>

            <SignedOut>
               <RenderMenuGroups groups={signedOutMenuGroups} />
            </SignedOut>
         </DropdownMenuContent>
      </DropdownMenu>
   );
}
