import { Mail, Phone } from 'lucide-react';

import ContactInfo from './contact-info';

export default function ContactDetails() {
   return (
      <section className="space-y-8 rounded p-8 shadow">
         <ContactInfo icon={Phone} title="Call To Us">
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +880161112222</p>
         </ContactInfo>

         <ContactInfo
            icon={Mail}
            title="Write To US"
            className="border-t border-primary pt-8"
         >
            <p>Fill out our form and we will contact you within 24 hours.</p>

            <p>Emails: customer@exclusive.com</p>

            <p>Emails: support@exclusive.com</p>
         </ContactInfo>
      </section>
   );
}
