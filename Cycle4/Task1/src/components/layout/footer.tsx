import Container from '@/components/container';
import AccountSection from '@/components/footer/account-section';
import CopyrightSection from '@/components/footer/copyright-section';
import DownloadSection from '@/components/footer/download-section';
import ExclusiveSection from '@/components/footer/exclusive-section';
import QuickLinkSection from '@/components/footer/quick-link-section';
import SupportSection from '@/components/footer/support-section';

export default function Footer() {
   return (
      <footer className="bg-black text-white">
         <Container className="grid grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-5">
            <ExclusiveSection />

            <SupportSection />

            <AccountSection />

            <QuickLinkSection />

            <DownloadSection />
         </Container>

         <CopyrightSection />
      </footer>
   );
}
