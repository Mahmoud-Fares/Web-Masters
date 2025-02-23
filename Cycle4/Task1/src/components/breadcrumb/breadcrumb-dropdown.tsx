import {
   BreadcrumbEllipsis,
   BreadcrumbItem,
   BreadcrumbLink,
} from '@/components/ui/breadcrumb';
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type RenderDropdownProps = {
   hiddenSegments: { title: string; href: string }[];
};

export default function BreadcrumbDropdown({
   hiddenSegments,
}: RenderDropdownProps) {
   return (
      <BreadcrumbItem>
         <DropdownMenu>
            <DropdownMenuTrigger asChild>
               <div>
                  <BreadcrumbEllipsis className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
               </div>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start">
               {hiddenSegments.map((segment) => (
                  <DropdownMenuItem key={segment.href} asChild>
                     <BreadcrumbLink href={segment.href}>
                        {segment.title}
                     </BreadcrumbLink>
                  </DropdownMenuItem>
               ))}
            </DropdownMenuContent>
         </DropdownMenu>
      </BreadcrumbItem>
   );
}
