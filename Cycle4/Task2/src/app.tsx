import { useState } from 'react';

import { Container } from '@/components/container';
import { CurrentWeather } from '@/components/current-weather';
import { WeatherForecast } from '@/components/forecast/weather-forecast';
import { WeatherDetails } from '@/components/weather-details/weather-details';
import { WeatherHeader } from '@/components/weather-header';
import { weatherData } from '@/data/mock-weather';
import { useDateTime } from '@/hooks/use-date-time';

import { WelcomePage } from './components/welcome-page';

export default function App() {
   const [selectedLocation, setSelectedLocation] = useState<string | null>(
      null
   );
   const dateTime = useDateTime();

   const handleLocationSelect = (location: string) => {
      setSelectedLocation(location);
      // Here you would typically fetch weather data for the selected location
   };

   if (!selectedLocation) {
      return <WelcomePage onLocationSelect={handleLocationSelect} />;
   }

   return (
      <div className="bg-background text-foreground min-h-screen p-4 md:p-8">
         <Container>
            <main className="grid gap-6 lg:grid-cols-2">
               <section className="bg-card flex h-full flex-col gap-4 p-4">
                  <WeatherHeader onSearch={handleLocationSelect} />
                  <CurrentWeather weather={weatherData} dateTime={dateTime} />
               </section>

               <section className="flex flex-col gap-6">
                  <WeatherDetails weather={weatherData} />
                  <WeatherForecast forecast={weatherData.forecast} />
               </section>
            </main>
         </Container>
      </div>
   );
}
