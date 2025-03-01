type DiscountSectionProps = {
   discount: number;
};

export function DiscountSection({ discount }: DiscountSectionProps) {
   return (
      <h2 className="my-4 text-4xl font-medium lg:text-6xl">
         Up to {discount}% <br /> off Voucher
      </h2>
   );
}
