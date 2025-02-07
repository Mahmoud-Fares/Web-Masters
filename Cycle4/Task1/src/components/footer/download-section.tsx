import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function DownloadSection() {
   return (
      <div className="space-y-4">
         <h3 className="text-2xl font-semibold">Download App</h3>
         <p className="text-sm text-muted-foreground">
            Save $3 with App New User Only
         </p>

         <div className="flex gap-4">
            <img src="/qr-code.png" alt="QR Code" />

            <div className="space-y-2">
               <img src="/google-play.png" alt="google play" />
               <img src="/app-store.png" alt="app store" />
            </div>
         </div>

         <div className="flex flex-wrap items-center gap-8 pt-2">
            <Link to="#" className="hover:text-[#E94444]">
               <Facebook className="size-6" />
            </Link>
            <Link to="#" className="hover:text-[#E94444]">
               <Twitter className="size-6" />
            </Link>
            <Link to="#" className="hover:text-[#E94444]">
               <Instagram className="size-6" />
            </Link>
            <Link to="#" className="hover:text-[#E94444]">
               <Linkedin className="size-6" />
            </Link>
         </div>
      </div>
   );
}
