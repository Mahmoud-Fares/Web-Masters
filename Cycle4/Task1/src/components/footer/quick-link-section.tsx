import { NavLink } from 'react-router-dom';

export default function QuickNavLinkSection() {
   return (
      <div className="space-y-4">
         <h3 className="text-2xl font-semibold">Quick Link</h3>

         <ul className="space-y-3">
            <li>
               <NavLink to="/privacy-policy" className="hover:text-[#E94444]">
                  Privacy Policy
               </NavLink>
            </li>
            <li>
               <NavLink to="/terms" className="hover:text-[#E94444]">
                  Terms Of Use
               </NavLink>
            </li>
            <li>
               <NavLink to="/faq" className="hover:text-[#E94444]">
                  FAQ
               </NavLink>
            </li>
            <li>
               <NavLink to="/contact" className="hover:text-[#E94444]">
                  Contact
               </NavLink>
            </li>
         </ul>
      </div>
   );
}
