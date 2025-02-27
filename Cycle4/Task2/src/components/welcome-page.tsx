import { SearchInput } from './search-input';
import { WelcomeHeader } from './welcome/welcome-header';

export function WelcomePage() {
   return (
      <div className="bg-background text-foreground flex min-h-screen flex-col items-center pt-10">
         <WelcomeHeader />

         <div className="w-full max-w-[480px] px-4">
            <h1 className="mb-2 text-center text-2xl font-semibold">
               Welcome to <span className="text-secondary">TypeWeather</span>
            </h1>

            <p className="text-muted-foreground mb-8 text-center">
               Choose a location to see the weather forecast
            </p>

            <SearchInput />
         </div>
      </div>
   );
}
