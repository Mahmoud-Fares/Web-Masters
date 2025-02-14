export default function StockCheck({ inStock }: { inStock: boolean }) {
   return inStock ? (
      <span className="text-success">In Stock</span>
   ) : (
      <span className="text-destructive">Out of Stock</span>
   );
}
