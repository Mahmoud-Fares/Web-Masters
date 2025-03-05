import { Link } from 'react-router-dom';

export default function AccountSection() {
   const accountLinks = [
      { to: '/account', label: 'My Account' },
      { to: ['/login', '/signup'], label: ['Login', 'Register'], isAuth: true },
      { to: '/cart', label: 'Cart' },
      { to: '/wishlist', label: 'Wishlist' },
      { to: '/shop', label: 'Shop' },
   ];

   return (
      <div className="space-y-4">
         <h3 className="text-2xl font-semibold">Account</h3>
         <ul className="space-y-3">
            {accountLinks.map((link) => (
               <li
                  key={Array.isArray(link.to) ? link.to.join('-') : link.to}
                  className={link.isAuth ? 'flex items-center gap-1' : ''}
               >
                  {link.isAuth ? (
                     <>
                        {link.label.map((label, index) => (
                           <Link
                              key={`${link.to[index]}-${index}`}
                              to={link.to[index]}
                              className="hover:text-primary"
                           >
                              {label}
                              {index < link.label.length - 1 && <span>/</span>}
                           </Link>
                        ))}
                     </>
                  ) : (
                     <Link
                        to={link.to as string}
                        className="hover:text-primary"
                     >
                        {link.label}
                     </Link>
                  )}
               </li>
            ))}
         </ul>
      </div>
   );
}
