'use no memo';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { signupSchema } from '@/lib/schemas';
import { useUserStore } from '@/lib/stores/user-store';
import { cn } from '@/lib/utils';

import GoogleIcon from './icons/google-icon';

type FormData = z.infer<typeof signupSchema>;

export default function SignUpForm({ className }: { className?: string }) {
   const signup = useUserStore((state) => state.signup);
   const navigate = useNavigate();

   const form = useForm<FormData>({
      resolver: zodResolver(signupSchema),
      defaultValues: {
         name: '',
         emailOrPhone: '',
         password: '',
      },
   });

   function onSubmit(data: FormData) {
      signup({
         newUser: {
            email: data.emailOrPhone,
            password: data.password,
            firstName: data.name.split(' ')[0],
            lastName: data.name.split(' ')[1],
            address: '',
         },

         navigate,
      });
   }

   return (
      <Form {...form}>
         <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={cn('space-y-4', className)}
         >
            <FormField
               control={form.control}
               name="name"
               render={({ field }) => (
                  <FormItem>
                     <FormControl>
                        <Input
                           placeholder="Name"
                           className="w-full rounded-none border-transparent border-b-border !bg-transparent focus-visible:ring-0"
                           {...field}
                        />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />

            <FormField
               control={form.control}
               name="emailOrPhone"
               render={({ field }) => (
                  <FormItem>
                     <FormControl>
                        <Input
                           placeholder="Email or Phone Number"
                           className="w-full rounded-none border-transparent border-b-border !bg-transparent focus-visible:ring-0"
                           {...field}
                        />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />

            <FormField
               control={form.control}
               name="password"
               render={({ field }) => (
                  <FormItem>
                     <FormControl>
                        <Input
                           type="password"
                           placeholder="Password"
                           className="w-full rounded-none border-transparent border-b-border !bg-transparent focus-visible:ring-0"
                           {...field}
                        />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />

            <Button
               type="submit"
               className="w-full rounded bg-primary hover:bg-primary-hover"
            >
               Create Account
            </Button>

            <Button
               type="button"
               variant="outline"
               className="w-full rounded border-border hover:bg-muted hover:text-foreground"
            >
               <GoogleIcon />
               Sign up with Google
            </Button>

            <div className="text-center text-sm">
               Already have an account?{' '}
               <NavLink
                  to="/login"
                  className="border-b border-b-foreground pb-1"
               >
                  Log in
               </NavLink>
            </div>
         </form>
      </Form>
   );
}
