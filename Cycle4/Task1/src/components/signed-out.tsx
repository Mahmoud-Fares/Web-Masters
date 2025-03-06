import { ReactNode } from 'react';

import { useUserStore } from '@/stores/user-store';

type SignedOutProps = {
   children: ReactNode;
};

export default function SignedOut({ children }: SignedOutProps) {
   const currentUser = useUserStore((state) => state.currentUser);

   return !currentUser && <>{children}</>;
}
