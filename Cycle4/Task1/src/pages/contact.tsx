import ContactDetails from '@/components/contact/contact-details';
import ContactForm from '@/components/contact/contact-form';
import Container from '@/components/container';

export default function ContactPage() {
   return (
      <Container className="mb-section grid gap-8 py-section lg:grid-cols-3">
         <ContactDetails />
         <ContactForm />
      </Container>
   );
}
