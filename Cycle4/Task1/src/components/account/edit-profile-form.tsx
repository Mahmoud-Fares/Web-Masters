import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z
   .object({
      firstName: z.string().min(2, 'First name must be at least 2 characters'),
      lastName: z.string().min(2, 'Last name must be at least 2 characters'),
      email: z.string().email('Invalid email address'),
      address: z.string().min(5, 'Address must be at least 5 characters'),
      currentPassword: z.string().optional(),
      newPassword: z.string().optional(),
      confirmPassword: z.string().optional(),
   })
   .refine(
      (data) => {
         if (data.newPassword && !data.currentPassword) {
            return false;
         }
         if (data.newPassword !== data.confirmPassword) {
            return false;
         }
         return true;
      },
      {
         message: 'Passwords do not match or current password is required',
         path: ['confirmPassword'],
      }
   );

export function EditProfileForm() {
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         firstName: 'Md',
         lastName: 'Rimel',
         email: 'rimel1111@gmail.com',
         address: 'Kingston, 5236, United State',
         currentPassword: '',
         newPassword: '',
         confirmPassword: '',
      },
   });

   function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values);
   }

   return (
      <div className="space-y-6 rounded p-6 shadow">
         <h2 className="text-2xl font-semibold text-red-500">
            Edit Your Profile
         </h2>

         <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
               <div className="grid gap-6 md:grid-cols-2">
                  <FormField
                     control={form.control}
                     name="firstName"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>First Name</FormLabel>
                           <FormControl>
                              <Input
                                 placeholder="First Name"
                                 className="text-muted-foreground placeholder:text-muted-foreground"
                                 {...field}
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <FormField
                     control={form.control}
                     name="lastName"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Last Name</FormLabel>
                           <FormControl>
                              <Input
                                 placeholder="Last Name"
                                 className="text-muted-foreground placeholder:text-muted-foreground"
                                 {...field}
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <FormField
                     control={form.control}
                     name="email"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Email</FormLabel>
                           <FormControl>
                              <Input
                                 placeholder="Email"
                                 className="text-muted-foreground placeholder:text-muted-foreground"
                                 {...field}
                                 type="email"
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <FormField
                     control={form.control}
                     name="address"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Address</FormLabel>
                           <FormControl>
                              <Input
                                 placeholder="Address"
                                 className="text-muted-foreground placeholder:text-muted-foreground"
                                 {...field}
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
               </div>

               <div className="space-y-3">
                  <h3 className="text-lg font-medium">Password Changes</h3>

                  <FormField
                     control={form.control}
                     name="currentPassword"
                     render={({ field }) => (
                        <FormItem>
                           <FormControl>
                              <Input
                                 placeholder="Current Password"
                                 className="text-muted-foreground placeholder:text-muted-foreground"
                                 {...field}
                                 type="password"
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <FormField
                     control={form.control}
                     name="newPassword"
                     render={({ field }) => (
                        <FormItem>
                           <FormControl>
                              <Input
                                 placeholder="New Password"
                                 className="text-muted-foreground placeholder:text-muted-foreground"
                                 {...field}
                                 type="password"
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <FormField
                     control={form.control}
                     name="confirmPassword"
                     render={({ field }) => (
                        <FormItem>
                           <FormControl>
                              <Input
                                 placeholder="Confirm New Password"
                                 className="text-muted-foreground placeholder:text-muted-foreground"
                                 {...field}
                                 type="password"
                              />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />
               </div>

               <div className="flex justify-end space-x-4">
                  <Button type="button" variant="outline">
                     Cancel
                  </Button>

                  <Button type="submit">Save Changes</Button>
               </div>
            </form>
         </Form>
      </div>
   );
}
