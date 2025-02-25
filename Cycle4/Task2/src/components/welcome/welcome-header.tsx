import { Logo } from '../logo';

export function WelcomeHeader() {
   return (
      <div className="mb-25 flex items-center gap-2">
         <Logo className="h-8" />
         <p className="text-lg font-semibold">TypeWeather</p>
      </div>
   );
}
