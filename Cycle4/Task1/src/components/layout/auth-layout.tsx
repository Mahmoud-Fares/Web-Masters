import { Outlet } from 'react-router-dom';

export function AuthLayout() {
   return (
      <div className="flex min-h-screen py-12">
         {/* Left side - Image */}
         <div className="hidden w-1/2 lg:block">
            <img
               src="/images/auth-image.png"
               alt="Shopping cart with phone"
               className="block h-full rounded"
            />
         </div>

         {/* Right side - Form */}
         <div className="flex w-full flex-col justify-center p-8 lg:w-1/2">
            <div className="mx-auto w-full max-w-md xl:max-w-lg">
               <Outlet />
            </div>
         </div>
      </div>
   );
}
