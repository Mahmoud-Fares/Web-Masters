import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { Button } from '@/components/ui/button';
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
   name: z.string().min(2, {
      message: 'Name must be at least 2 characters.',
   }),
   email: z.string().email({
      message: 'Please enter a valid email address.',
   }),
   phone: z.string().min(10, {
      message: 'Please enter a valid phone number.',
   }),
   message: z.string().min(10, {
      message: 'Message must be at least 10 characters.',
   }),
});

export default function ContactForm() {
   const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         name: '',
         email: '',
         phone: '',
         message: '',
      },
   });

   function onSubmit(values: z.infer<typeof formSchema>) {
      console.log(values);

      // Handle form submission
   }

   return (
      <Form {...form}>
         <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 rounded p-8 shadow"
         >
            <div className="grid gap-4 md:grid-cols-3">
               <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                     <FormItem>
                        <FormControl>
                           <Input placeholder="Your Name" {...field} />
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
                        <FormControl>
                           <Input
                              placeholder="Your Email"
                              type="email"
                              {...field}
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                     <FormItem>
                        <FormControl>
                           <Input
                              placeholder="Your Phone"
                              type="tel"
                              {...field}
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
            </div>

            <FormField
               control={form.control}
               name="message"
               render={({ field }) => (
                  <FormItem>
                     <FormControl>
                        <Textarea
                           placeholder="Your Message"
                           className="min-h-[150px] resize-none"
                           {...field}
                        />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />

            <div className="md:text-right">
               <Button type="submit" className="w-full md:w-auto">
                  Send Message
               </Button>
            </div>
         </form>
      </Form>
   );
}
