import DesktopAccountSidebar from './sidebar/desktop-account-sidebar';
import MobileAccountSidebar from './sidebar/mobile-account-sidebar';

export type SidebarSectionType = {
   title: string;
   items: {
      href: string;
      label: string;
      isActive?: boolean;
   }[];
};

const sidebarSections = [
   {
      title: 'Manage My Account',
      items: [
         { href: '/account', label: 'My Profile', isActive: true },
         { href: '/account/address', label: 'Address Book' },
         { href: '/account/payment', label: 'My Payment Options' },
      ],
   },
   {
      title: 'My Orders',
      items: [
         { href: '/account/returns', label: 'My Returns' },
         { href: '/account/cancellations', label: 'My Cancellations' },
      ],
   },
   {
      title: 'My Wishlist',
      items: [{ href: '/account/wishlist', label: 'Wishlist' }],
   },
];

export function AccountSidebar() {
   return (
      <>
         <MobileAccountSidebar sidebarSections={sidebarSections} />

         <DesktopAccountSidebar sidebarSections={sidebarSections} />
      </>
   );
}
