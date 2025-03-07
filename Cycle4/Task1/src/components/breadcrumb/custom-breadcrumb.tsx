import { useLocation } from 'react-router-dom';

import { Breadcrumb, BreadcrumbList } from '@/components/ui/breadcrumb';
import { cn } from '@/lib/utils';

import RenderBreadcrumb from './render-breadcrumb';

type CustomBreadcrumbProps = {
   className?: string;
};

const noBreadcrumbPaths = ['/', '/login', '/signup'];

export default function CustomBreadcrumb({ className }: CustomBreadcrumbProps) {
   const location = useLocation();
   const pathSegments = location.pathname.split('/').filter(Boolean);

   if (noBreadcrumbPaths.includes(location.pathname)) return null;

   // create breadcrumb segments with home at the beginning
   const segments = [
      { title: 'Home', href: '/' },
      ...pathSegments.map((segment, index) => ({
         title: segment.charAt(0).toUpperCase() + segment.slice(1),
         href: `/${pathSegments.slice(0, index + 1).join('/')}`,
      })),
   ];

   return (
      <div className={cn(segments.length > 1 && className)}>
         <Breadcrumb>
            <BreadcrumbList>
               <RenderBreadcrumb displaySegments={segments} />
            </BreadcrumbList>
         </Breadcrumb>
      </div>
   );
}
