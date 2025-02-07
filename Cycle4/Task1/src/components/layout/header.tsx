import Container from '@/components/container';
import AnnouncementBar from '@/components/header/announcement-bar';
import SearchBar from '@/components/header/searchbar';
import UserActions from '@/components/header/user-action';
import Logo from '@/components/logo';
import { HeaderNavbar } from '@/components/navbar';

export default function Header() {
   return (
      <header>
         <AnnouncementBar />

         <div className="border-b">
            <Container className="py-4">
               <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-between sm:gap-8">
                  <Logo />

                  <HeaderNavbar />

                  <SearchBar />

                  <UserActions />
               </div>
            </Container>
         </div>
      </header>
   );
}
