import { Link } from 'react-router-dom';

export type CategoryCardProps = {
   title: string;
   icon: string;
   href: string;
};

export default function CategoryCard({ title, icon, href }: CategoryCardProps) {
   return (
      <Link
         to={href}
         className="group flex aspect-square w-[150px] flex-col items-center justify-center rounded border p-6 shadow transition-all duration-300 hover:bg-primary hover:text-white"
      >
         <div className="mb-4 flex h-16 w-16 items-center justify-center">
            <img
               src={icon}
               alt={`${title} icon`}
               className="h-full w-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:invert"
            />
         </div>
         <h3 className="text-center text-lg">{title}</h3>
      </Link>
   );
}
