import { useLocation } from 'react-router-dom';

import { Breadcrumb, BreadcrumbList } from '@/components/ui/breadcrumb';
import { cn } from '@/lib/utils';

import RenderBreadcrumb from './render-breadcrumb';

type CustomBreadcrumbProps = {
   className?: string;
};

export default function CustomBreadcrumb({ className }: CustomBreadcrumbProps) {
   const location = useLocation();
   const pathSegments = location.pathname.split('/').filter(Boolean);

   // create breadcrumb segments with home at the beginning
   const segments = [
      { title: 'Home', href: '/' },
      ...pathSegments.map((segment, index) => ({
         title: segment.charAt(0).toUpperCase() + segment.slice(1),
         href: `/${pathSegments.slice(0, index + 1).join('/')}`,
      })),
   ];

   // display segments without home if current path is root
   const displaySegments =
      location.pathname === '/' ? segments.slice(1) : segments;

   return (
      <div className={cn(displaySegments.length > 1 && className)}>
         <Breadcrumb>
            <BreadcrumbList>
               <RenderBreadcrumb displaySegments={displaySegments} />
            </BreadcrumbList>
         </Breadcrumb>
      </div>
   );
}
