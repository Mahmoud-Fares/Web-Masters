import LoginForm from '@/components/auth/login-form';

export default function LoginPage() {
   return (
      <>
         <h2 className="pb-3 text-2xl font-medium">Log in to Exclusive</h2>
         <p className="pb-6 font-medium">Enter your details below</p>

         <LoginForm />
      </>
   );
}
