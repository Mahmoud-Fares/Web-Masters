import { Instagram, Linkedin, Twitter } from 'lucide-react';

const SOCIALS = [
   {
      name: 'Twitter',
      icon: Twitter,
      href: '#',
   },
   {
      name: 'Instagram',
      icon: Instagram,
      href: '#',
   },
   {
      name: 'Linkedin',
      icon: Linkedin,
      href: '#',
   },
];

export default function OwnerSocials() {
   return (
      <div className="flex space-x-4">
         {SOCIALS.map((social) => (
            <a
               key={social.name}
               href={social.href}
               className="text-muted-foreground transition-colors hover:text-indigo-500"
            >
               <social.icon size={20} strokeWidth={1.5} />
            </a>
         ))}
      </div>
   );
}
