import { ReactNode } from 'react';

import { useUserStore } from '@/stores/user-store';

type SignedInProps = {
   children: ReactNode;
};

export default function SignedIn({ children }: SignedInProps) {
   const currentUser = useUserStore((state) => state.currentUser);

   return currentUser && <>{children}</>;
}
