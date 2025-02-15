type SidebarSectionProps = {
   title: string;
   children: React.ReactNode;
};

export default function SidebarSection({
   title,
   children,
}: SidebarSectionProps) {
   return (
      <div className="space-y-2">
         <h3 className="font-medium">{title}</h3>
         <div className="space-y-1">{children}</div>
      </div>
   );
}
