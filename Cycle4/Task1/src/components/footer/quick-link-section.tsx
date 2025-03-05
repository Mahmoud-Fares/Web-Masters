import { Link } from 'react-router-dom';

export default function QuickNavLinkSection() {
   const links = [
      { to: '/privacy-policy', label: 'Privacy Policy' },
      { to: '/terms', label: 'Terms Of Use' },
      { to: '/faq', label: 'FAQ' },
      { to: '/contact', label: 'Contact' },
   ];

   return (
      <div className="space-y-4">
         <h3 className="text-2xl font-semibold">Quick Link</h3>

         <ul className="space-y-3">
            {links.map((link) => (
               <li key={link.to}>
                  <Link to={link.to} className="hover:text-primary">
                     {link.label}
                  </Link>
               </li>
            ))}
         </ul>
      </div>
   );
}
