import ContactDetails from '@/components/contact/contact-details';
import ContactForm from '@/components/contact/contact-form';
import Container from '@/components/container';

export default function ContactPage() {
   return (
      <Container className="grid gap-8 py-20 md:grid-cols-2">
         <ContactDetails />
         <ContactForm />
      </Container>
   );
}
