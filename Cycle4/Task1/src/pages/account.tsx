import { AccountSidebar } from '@/components/account/account-sidebar';
import { EditProfileForm } from '@/components/account/edit-profile-form';
import Container from '@/components/container';

export default function AccountPage() {
   return (
      <Container className="mb-section grid gap-8 py-section md:grid-cols-[240px,1fr]">
         <AccountSidebar />

         <EditProfileForm />
      </Container>
   );
}
