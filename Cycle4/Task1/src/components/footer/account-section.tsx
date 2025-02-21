import { NavLink } from 'react-router-dom';

export default function AccountSection() {
   return (
      <div className="space-y-4">
         <h3 className="text-2xl font-semibold">Account</h3>

         <ul className="space-y-3">
            <li>
               <NavLink to="/account" className="hover:text-[#E94444]">
                  My Account
               </NavLink>
            </li>

            <li className="flex items-center gap-1">
               <NavLink to="/login" className="hover:text-[#E94444]">
                  Login
               </NavLink>
               <span>/</span>
               <NavLink to="/signup" className="hover:text-[#E94444]">
                  Register
               </NavLink>
            </li>

            <li>
               <NavLink to="/cart" className="hover:text-[#E94444]">
                  Cart
               </NavLink>
            </li>

            <li>
               <NavLink to="/wishlist" className="hover:text-[#E94444]">
                  Wishlist
               </NavLink>
            </li>

            <li>
               <NavLink to="/shop" className="hover:text-[#E94444]">
                  Shop
               </NavLink>
            </li>
         </ul>
      </div>
   );
}
