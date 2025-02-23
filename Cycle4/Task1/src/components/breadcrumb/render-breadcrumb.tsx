import React from 'react';

import {
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbPage,
} from '@/components/ui/breadcrumb';

import CustomSeparator from './breadcrumb-custom-separator';
import BreadcrumbDropdown from './breadcrumb-dropdown';

type RenderBreadcrumbProps = {
   displaySegments: { title: string; href: string }[];
};

export default function RenderBreadcrumb({
   displaySegments,
}: RenderBreadcrumbProps) {
   const MAX_VISIBLE_SEGMENTS = 3;
   const isLast = (index: number) => index === displaySegments.length - 1;

   // less than MAX_VISIBLE_SEGMENTS (3) => Home / Segment1 / Segment2
   if (displaySegments.length <= MAX_VISIBLE_SEGMENTS) {
      return displaySegments.map((segment, index) => (
         <React.Fragment key={segment.href}>
            {renderBreadcrumbItem({
               segment,
               isLast: isLast(index),
            })}

            {!isLast(index) && <CustomSeparator />}
         </React.Fragment>
      ));
   }

   // more than MAX_VISIBLE_SEGMENTS (3) => Home / ••• / Segment5
   const firstSegment = displaySegments[0];
   const lastSegment = displaySegments[displaySegments.length - 1];
   const hiddenSegments = displaySegments.slice(1, -1);

   return (
      <div className="flex items-center gap-3">
         {renderBreadcrumbItem({ segment: firstSegment, isLast: false })}

         <CustomSeparator />

         <BreadcrumbDropdown hiddenSegments={hiddenSegments} />

         <CustomSeparator />

         {renderBreadcrumbItem({ segment: lastSegment, isLast: true })}
      </div>
   );
}

type renderBreadcrumbItemProps = {
   segment: { title: string; href: string };
   isLast: boolean;
};

const renderBreadcrumbItem = ({
   segment,
   isLast,
}: renderBreadcrumbItemProps) => (
   <BreadcrumbItem
      key={segment.href}
      className="font-medium text-muted-foreground/50"
   >
      {isLast ? (
         <BreadcrumbPage>{segment.title}</BreadcrumbPage>
      ) : (
         <BreadcrumbLink href={segment.href}>{segment.title}</BreadcrumbLink>
      )}
   </BreadcrumbItem>
);
