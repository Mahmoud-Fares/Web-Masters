import { Toaster } from 'sonner';

import { Container } from '@/components/container';

type RootLayoutProps = {
   children: React.ReactNode;
};

export function RootLayout({ children }: RootLayoutProps) {
   return (
      <>
         <div className="bg-background text-foreground min-h-screen p-4 md:p-8">
            <Container>{children}</Container>
         </div>

         <Toaster position="bottom-left" richColors />
      </>
   );
}
