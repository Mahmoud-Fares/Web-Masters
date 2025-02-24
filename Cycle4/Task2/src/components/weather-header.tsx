import { Cloud } from "lucide-react";
import { Input } from "@/components/ui/input";

interface WeatherHeaderProps {
   onSearch: (location: string) => void;
}

export function WeatherHeader({ onSearch }: WeatherHeaderProps) {
   return (
      <div className="flex items-center gap-4">
         <Cloud className="w-8 h-8 text-accent" />
         <Input
            type="search"
            placeholder="Search location..."
            className="bg-card border-0 text-white placeholder:text-muted"
            onChange={(e) => onSearch(e.target.value)}
         />
      </div>
   );
}
