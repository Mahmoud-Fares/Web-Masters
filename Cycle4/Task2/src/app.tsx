import { Container } from '@/components/container';
import { CurrentWeather } from '@/components/current-weather';
import { WeatherForecast } from '@/components/forecast/weather-forecast';
import { WeatherDetails } from '@/components/weather-details/weather-details';
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
      <div className="bg-background text-foreground min-h-screen p-4 md:p-8">
         <Container>
            <main className="grid gap-6 lg:grid-cols-2">
               <section className="bg-card flex h-full flex-col gap-4 p-4">
                  <WeatherHeader onSearch={handleSearch} />
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
