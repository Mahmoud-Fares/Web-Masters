// Get current user's cart
function getCurrentCart() {
   const user = JSON.parse(localStorage.getItem("user"));
   return user
      ? JSON.parse(localStorage.getItem(`cart_${user.email}`)) || []
      : [];
}

// Save current user's cart
function saveCurrentCart(cartItems) {
   const user = JSON.parse(localStorage.getItem("user"));
   if (user) {
      localStorage.setItem(`cart_${user.email}`, JSON.stringify(cartItems));
   }
}

function addToCart(productId) {
   const currentCart = getCurrentCart();
   const existingItemIndex = currentCart.findIndex(
      (item) => item.id === productId
   );
   const product = products.find((p) => p.id === productId);

   if (!product) {
      console.error("Product not found");
      return;
   }

   if (existingItemIndex !== -1) {
      currentCart.splice(existingItemIndex, 1);
      saveCurrentCart(currentCart);
      Toast.error(`${product.name} removed from cart`);
   } else {
      currentCart.push({ id: productId, quantity: 1 });
      saveCurrentCart(currentCart);
      Toast.success(`${product.name} added to cart`);
   }

   renderPage();
}

function updateQuantity(productId, newQuantity) {
   const currentCart = getCurrentCart();
   const product = products.find((p) => p.id === productId);

   if (newQuantity < 1) {
      removeFromCart(productId);
      return;
   }

   const item = currentCart.find((item) => item.id === productId);
   if (item) {
      const oldQuantity = item.quantity;
      item.quantity = newQuantity;
      saveCurrentCart(currentCart);

      if (newQuantity > oldQuantity) {
         Toast.success(`Increased ${product.name} quantity to ${newQuantity}`);
      } else {
         Toast.info(`Decreased ${product.name} quantity to ${newQuantity}`);
      }
      renderPage();
   }
}

function removeFromCart(productId) {
   const currentCart = getCurrentCart();
   const product = products.find((p) => p.id === productId);
   const updatedCart = currentCart.filter((item) => item.id !== productId);
   saveCurrentCart(updatedCart);

   if (product) {
      Toast.error(`${product.name} removed from cart`);
   }
   renderPage();
}

function getCartCount() {
   return getCurrentCart().length;
}

function renderCart() {
   const currentCart = getCurrentCart();
   const total = currentCart.reduce(
      (sum, item) =>
         sum + products.find((p) => p.id === item.id).price * item.quantity,
      0
   );

   return `
         <div class="container mx-auto px-4 py-8">
            <div class="flex gap-2 flex-wrap justify-between items-center mb-8">
               <h1 class="text-3xl font-bold">Shopping Cart</h1>
               <a href="#" class="flex items-center gap-2 px-4 py-2 rounded-xl shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 
                  transform hover:-translate-y-0.5 transition-all duration-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  <span class="hidden md:inline">Back to Home</span>
               </a>
            </div>
            ${
               currentCart.length === 0
                  ? `<div class="text-center py-12">
                     <p class="text-xl text-gray-600 mb-4">Your cart is empty</p>
                     <a href="#" class="text-indigo-600 hover:text-indigo-700 font-medium">Continue Shopping</a>
                  </div>`
                  : `<div class="space-y-4">
                     ${currentCart
                        .map((item) => {
                           const product = products.find(
                              (p) => p.id === item.id
                           );
                           return `
                           <div class="flex flex-col sm:flex-row items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                              <img 
                                 src="${product.image}" 
                                 alt="${product.name}" 
                                 class="aspect-square max-w-[100%] sm:w-24 object-cover rounded-lg"
                              />
                              
                              <div class="flex-grow text-center sm:text-left">
                                 <h3 class="text-lg font-semibold text-gray-900">${
                                    product.name
                                 }</h3>
                                 <p class="text-gray-600">$${product.price} × ${
                              item.quantity
                           }</p>
                              </div>
                              
                              <div class="flex flex-col sm:flex-row items-center gap-4">
                                 <div class="flex items-center gap-2">
                                    <button onclick="updateQuantity(${
                                       item.id
                                    }, ${item.quantity - 1})" 
                                       class="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                                       -
                                    </button>
                                    <span class="w-8 text-center font-medium">${
                                       item.quantity
                                    }</span>
                                    <button onclick="updateQuantity(${
                                       item.id
                                    }, ${item.quantity + 1})" 
                                       class="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center">
                                       +
                                    </button>
                                 </div>
                                 
                                 <button onclick="removeFromCart(${item.id})" 
                                    class="px-3 py-1 text-red-600 hover:text-red-700 hover:bg-red-50 rounded-lg">
                                    Remove
                                 </button>
                              </div>
                           </div>
                        `;
                        })
                        .join("")}
                     
                     <div class="mt-8 p-6 bg-white rounded-xl shadow-sm">
                        <div class="flex justify-between items-center text-xl font-bold">
                           <span>Total:</span>
                           <span>$${total.toFixed(2)}</span>
                        </div>
                     </div>
                  </div>`
            }
         </div>
    `;
}
