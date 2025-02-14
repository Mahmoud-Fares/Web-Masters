import SignupForm from '@/components/auth/signup-form';

export default function SignUpPage() {
   return (
      <>
         <h2 className="pb-3 text-2xl font-medium">Create an account</h2>
         <p className="pb-6 font-medium">Enter your details below</p>

         <SignupForm />
      </>
   );
}
