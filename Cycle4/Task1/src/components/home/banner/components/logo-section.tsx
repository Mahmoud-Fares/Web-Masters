type LogoSectionProps = {
   logo: string;
   title: string;
};

export function LogoSection({ logo, title }: LogoSectionProps) {
   return (
      <div className="flex items-center gap-4">
         <img
            src={logo || '/placeholder.svg'}
            alt={`${title} logo`}
            className="block aspect-square size-10 rounded-full object-contain"
         />
         <span className="text-lg">{title}</span>
      </div>
   );
}
