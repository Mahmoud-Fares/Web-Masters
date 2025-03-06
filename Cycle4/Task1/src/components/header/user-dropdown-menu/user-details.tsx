import { DropdownMenuLabel } from '@/components/ui/dropdown-menu';
import { useUserStore } from '@/stores/user-store';

export default function UserDetails() {
   const currentUser = useUserStore((state) => state.currentUser);
   return (
      <DropdownMenuLabel className="flex items-start gap-3">
         <div className="flex min-w-0 flex-col">
            <span className="truncate text-sm font-medium text-foreground">
               {currentUser?.firstName} {currentUser?.lastName}
            </span>
            <span className="truncate text-xs font-normal text-muted-foreground">
               {currentUser?.email}
            </span>
         </div>
      </DropdownMenuLabel>
   );
}
