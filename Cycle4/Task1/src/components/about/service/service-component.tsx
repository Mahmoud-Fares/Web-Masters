type ServiceComponentProps = {
   svg: React.ReactNode;
   title: string;
   description: string;
};

export default function ServiceComponent({
   svg,
   title,
   description,
}: ServiceComponentProps) {
   return (
      <div className="flex flex-col items-center justify-center gap-2">
         <div className="flex items-center justify-center rounded-full">
            {svg}
         </div>

         <h2 className="text-xl font-bold capitalize">{title}</h2>

         <p className="text-sm">{description}</p>
      </div>
   );
}
