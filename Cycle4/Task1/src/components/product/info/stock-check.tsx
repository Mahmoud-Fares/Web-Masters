export default function StockCheck({ inStock }: { inStock: boolean }) {
   return inStock ? (
      <span className="text-green-500">In Stock</span>
   ) : (
      <span className="text-red-500">Out of Stock</span>
   );
}
