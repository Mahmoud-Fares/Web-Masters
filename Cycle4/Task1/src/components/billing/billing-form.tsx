import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

const formSchema = z.object({
   firstName: z.string().min(2, 'First name must be at least 2 characters'),
   companyName: z.string().optional(),
   streetAddress: z
      .string()
      .min(5, 'Street address must be at least 5 characters'),
   apartment: z.string().optional(),
   townCity: z.string().min(2, 'Town/City must be at least 2 characters'),
   phoneNumber: z
      .string()
      .min(10, 'Phone number must be at least 10 characters'),
   emailAddress: z.string().email('Invalid email address'),
   saveInformation: z.boolean().default(false),
});

export default function BillingForm() {
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         saveInformation: false,
      },
   });

   function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values);
   }

   return (
      <Card className="w-full border-none bg-background shadow-none">
         <CardHeader className="p-0">
            <CardTitle className="sr-only">Billing Details Form</CardTitle>
         </CardHeader>

         <CardContent className="p-0 text-muted-foreground">
            <Form {...form}>
               <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
               >
                  <FormField
                     control={form.control}
                     name="firstName"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>First Name*</FormLabel>
                           <FormControl>
                              <Input {...field} />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <FormField
                     control={form.control}
                     name="companyName"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Company Name</FormLabel>
                           <FormControl>
                              <Input {...field} />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <FormField
                     control={form.control}
                     name="streetAddress"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Street Address*</FormLabel>
                           <FormControl>
                              <Input {...field} />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <FormField
                     control={form.control}
                     name="apartment"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>
                              Apartment, floor, etc. (optional)
                           </FormLabel>
                           <FormControl>
                              <Input {...field} />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <FormField
                     control={form.control}
                     name="townCity"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Town/City*</FormLabel>
                           <FormControl>
                              <Input {...field} />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <FormField
                     control={form.control}
                     name="phoneNumber"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Phone Number*</FormLabel>
                           <FormControl>
                              <Input {...field} />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <FormField
                     control={form.control}
                     name="emailAddress"
                     render={({ field }) => (
                        <FormItem>
                           <FormLabel>Email Address*</FormLabel>
                           <FormControl>
                              <Input {...field} />
                           </FormControl>
                           <FormMessage />
                        </FormItem>
                     )}
                  />

                  <FormField
                     control={form.control}
                     name="saveInformation"
                     render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 text-foreground">
                           <FormControl>
                              <Checkbox
                                 checked={field.value}
                                 onCheckedChange={field.onChange}
                              />
                           </FormControl>
                           <div className="space-y-1 leading-none">
                              <FormLabel>
                                 Save this information for faster check-out next
                                 time
                              </FormLabel>
                           </div>
                        </FormItem>
                     )}
                  />
               </form>
            </Form>
         </CardContent>
      </Card>
   );
}
