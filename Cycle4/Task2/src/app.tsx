import { CurrentWeather } from '@/components/current-weather';
import { WeatherDetails } from '@/components/weather-details';
import { WeatherForecast } from '@/components/weather-forecast';
import { WeatherHeader } from '@/components/weather-header';
import { weatherData } from '@/data/mock-weather';
import { useDateTime } from '@/hooks/use-date-time';

export default function App() {
   const dateTime = useDateTime();

   const handleSearch = (location: string) => {
      // TODO: Implement location search
      console.log('Searching for:', location);
   };

   return (
      <div className="bg-background min-h-screen p-4 text-white md:p-8">
         <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 md:grid-cols-[1fr_400px]">
               <div className="space-y-4">
                  <div className="flex h-full flex-col space-y-4">
                     <WeatherHeader onSearch={handleSearch} />
                     <CurrentWeather
                        weather={weatherData}
                        dateTime={dateTime}
                     />
                  </div>
               </div>

               <div className="space-y-6">
                  <WeatherDetails weather={weatherData} />
                  <WeatherForecast forecast={weatherData.forecast} />
               </div>
            </div>
         </div>
      </div>
   );
}
