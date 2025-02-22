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
import { loginSchema } from '@/lib/schemas';
import { useUserStore } from '@/lib/stores/user-store';
import { cn } from '@/lib/utils';

type FormData = z.infer<typeof loginSchema>;

export default function LoginForm({ className }: { className?: string }) {
   const login = useUserStore((state) => state.login);
   const navigate = useNavigate();

   const form = useForm<FormData>({
      resolver: zodResolver(loginSchema),
      defaultValues: {
         emailOrPhone: 'email@email.com',
         password: 'Admin1234',
      },
   });

   function onSubmit(data: FormData) {
      login({ email: data.emailOrPhone, password: data.password, navigate });
   }

   return (
      <Form {...form}>
         <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={cn('space-y-4', className)}
         >
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

            <div className="flex items-center justify-between gap-4 pt-4">
               <Button
                  type="submit"
                  className="basis-1/3 rounded bg-primary duration-300 hover:bg-primary-hover"
               >
                  Login
               </Button>

               <NavLink
                  to="#"
                  className="border-b border-b-transparent pb-1 text-primary duration-300 hover:border-b-primary-hover"
               >
                  Forget Password?
               </NavLink>
            </div>
         </form>
      </Form>
   );
}
