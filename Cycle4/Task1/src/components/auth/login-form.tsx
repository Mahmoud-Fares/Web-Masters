import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
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
import { cn, validateTheEmailAndPhone } from '@/lib/utils';

const signupSchema = z.object({
   emailOrPhone: z
      .string()
      .min(1, 'Email or phone number is required')
      .refine(
         (value) => {
            validateTheEmailAndPhone(value);
         },
         {
            message: 'Please enter a valid email or phone number',
         }
      ),
   password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
      .regex(/[0-9]/, 'Password must contain at least one number'),
});

type FormData = z.infer<typeof signupSchema>;

export default function LoginForm({ className }: { className?: string }) {
   const form = useForm<FormData>({
      resolver: zodResolver(signupSchema),
      defaultValues: {
         emailOrPhone: '',
         password: '',
      },
   });

   function onSubmit(data: FormData) {
      // Handle form submission
      console.log(data);
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
