import { LucideLoader } from 'lucide-react';

export default function Loader() {
   return (
      <div className="flex h-screen flex-col items-center justify-center">
         <LucideLoader className="h-12 w-12 animate-spin" />
         <span>Loading...</span>
      </div>
   );
}
