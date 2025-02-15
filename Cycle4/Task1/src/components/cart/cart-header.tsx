export default function CartHeader() {
   return (
      <div className="grid grid-cols-2 gap-4 rounded px-8 py-4 text-center font-medium shadow md:grid-cols-4">
         <div>Product</div>
         <div>Price</div>
         <div>Quantity</div>
         <div className="md:text-right">Subtotal</div>
      </div>
   );
}
