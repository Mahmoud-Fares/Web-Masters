import { BreadcrumbSeparator } from '@/components/ui/breadcrumb';

export default function CustomSeparator() {
   return (
      <BreadcrumbSeparator className="font-medium text-muted-foreground/50">
         /
      </BreadcrumbSeparator>
   );
}
