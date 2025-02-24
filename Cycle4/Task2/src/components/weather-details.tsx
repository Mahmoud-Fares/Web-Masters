import { CloudRain, Droplets, Sun, Thermometer, Wind } from "lucide-react";
import { Card } from "@/components/ui/card";
import { WeatherData } from "@/types/weather-types";

interface WeatherDetailItemProps {
   icon: React.ReactNode;
   label: string;
   value: string;
}

function WeatherDetailItem({ icon, label, value }: WeatherDetailItemProps) {
   return (
      <Card className="bg-card border-0 p-4">
         <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
               {icon}
               <span>{label}</span>
            </div>
            <span>{value}</span>
         </div>
      </Card>
   );
}

interface WeatherDetailsProps {
   weather: WeatherData;
}

export function WeatherDetails({ weather }: WeatherDetailsProps) {
   const details = [
      {
         icon: <Thermometer className="text-muted" />,
         label: "Thermal sensation",
         value: `${weather.thermalSensation}°C`,
      },
      {
         icon: <CloudRain className="text-muted" />,
         label: "Rain probability",
         value: `${weather.rainProbability}%`,
      },
      {
         icon: <Wind className="text-muted" />,
         label: "Wind speed",
         value: `${weather.windSpeed} km/h`,
      },
      {
         icon: <Droplets className="text-muted" />,
         label: "Air humidity",
         value: `${weather.humidity}%`,
      },
      {
         icon: <Sun className="text-muted" />,
         label: "UV Index",
         value: weather.uvIndex.toString(),
      },
   ];

   return (
      <>
         <h2 className="text-xl font-semibold">Weather details</h2>
         <div className="grid gap-4">
            {details.map((detail, index) => (
               <WeatherDetailItem key={index} {...detail} />
            ))}
         </div>
      </>
   );
}
