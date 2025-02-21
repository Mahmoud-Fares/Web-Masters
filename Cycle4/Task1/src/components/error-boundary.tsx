import { useNavigate, useRouteError } from 'react-router-dom';

export default function ErrorBoundary() {
   const error = useRouteError();
   const navigate = useNavigate();

   return (
      <div className="flex min-h-screen items-center justify-center p-4">
         <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600">Oops!</h1>
            <p className="mt-2 text-gray-600">Something went wrong.</p>
            <p className="mt-1 text-sm text-gray-500">
               {error instanceof Error
                  ? error.message
                  : 'Unknown error occurred'}
            </p>
            <button onClick={() => navigate('/')}>Go Home</button>
         </div>
      </div>
   );
}
