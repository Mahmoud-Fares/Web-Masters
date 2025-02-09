export default function Review({ reviews }: { reviews?: string[] }) {
   return (
      <div className="border-r-2 border-muted-foreground/75 pr-4 text-muted-foreground">
         ({reviews?.length || 0} Reviews)
      </div>
   );
}
