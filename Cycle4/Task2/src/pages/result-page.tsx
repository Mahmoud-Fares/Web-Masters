import { useNavigate, useSearchParams } from 'react-router-dom';

import { CurrentWeather } from '@/components/current-weather';
import { WeatherForecast } from '@/components/forecast/weather-forecast';
import { WeatherDetails } from '@/components/weather-details/weather-details';
import { WeatherHeader } from '@/components/weather-header';
import { useDateTime } from '@/hooks/use-date-time';
import { useWeather } from '@/hooks/use-weather';

export function ResultPage() {
   const [searchParams] = useSearchParams();
   const city = searchParams.get('city');
   const navigate = useNavigate();
   const dateTime = useDateTime();
   const { data: weather, isLoading, isError } = useWeather(city ?? '');

   // todo better loading (skeleton) & error (better not found) UI
   if (isLoading) {
      return (
         <div className="flex h-[50vh] items-center justify-center">
            <p className="text-lg">Loading weather data...</p>
         </div>
      );
   }

   if (isError) {
      return (
         <div className="flex h-[50vh] flex-col items-center justify-center gap-4">
            <p className="text-lg text-red-500">
               Failed to load weather data. Please try again.
            </p>

            <button
               onClick={() => navigate('/')}
               className="bg-secondary text-secondary-foreground rounded-md px-6 py-3"
            >
               Go Home
            </button>
         </div>
      );
   }

   if (!weather) {
      return null;
   }

   return (
      <main className="grid gap-6 lg:grid-cols-2">
         <section className="bg-card flex h-full flex-col gap-4 p-4">
            <WeatherHeader />
            <CurrentWeather weather={weather} dateTime={dateTime} />
         </section>

         <section className="flex flex-col gap-6">
            <WeatherDetails weather={weather} />
            <WeatherForecast forecast={weather.forecast} />
         </section>
      </main>
   );
}
