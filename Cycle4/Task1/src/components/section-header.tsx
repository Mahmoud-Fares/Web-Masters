export default function SectionTitle({ text }: { text: string }) {
   return (
      <div className="flex h-12 items-center gap-6">
         <div className="h-full w-6 rounded-md bg-primary" />
         <span className="text-2xl font-semibold text-primary">{text}</span>
      </div>
   );
}
