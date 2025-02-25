type WeatherDetailsItemProps = {
   icon: React.ReactNode;
   label: string;
   value: string;
};

export function WeatherDetailsItem({
   icon,
   label,
   value,
}: WeatherDetailsItemProps) {
   return (
      <div className="flex items-center justify-between rounded-none py-4 font-medium">
         <div className="flex items-center gap-3">
            <span className="text-weather-icon">{icon}</span>
            <span>{label}</span>
         </div>

         <span className="text-foreground">{value}</span>
      </div>
   );
}
