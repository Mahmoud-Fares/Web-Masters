'use no memo';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
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
import { contactFormSchema } from '@/lib/validation/contact-schema';

export default function ContactForm() {
   const form = useForm<z.infer<typeof contactFormSchema>>({
      resolver: zodResolver(contactFormSchema),
      defaultValues: {
         name: '',
         email: '',
         phone: '',
         message: '',
      },
   });

   function onSubmit() {
      try {
         toast.success(
            'Thank you for contacting us! We will get back to you soon.'
         );
         form.reset();
      } catch (error) {
         toast.error('Something went wrong. Please try again.');
         console.error('Form error:', error);
      }
   }

   return (
      <Form {...form}>
         <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 rounded p-8 shadow lg:col-span-2"
         >
            <div className="grid gap-4 lg:grid-cols-3">
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

            <div className="lg:text-right">
               <Button type="submit" className="w-full lg:w-auto">
                  Send Message
               </Button>
            </div>
         </form>
      </Form>
   );
}
