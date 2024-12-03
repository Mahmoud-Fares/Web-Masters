// Sample products data
const products = [
   {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
      description: "High-quality wireless headphones with noise cancellation",
   },
   {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300",
      description: "Feature-rich smartwatch with health tracking",
   },
   {
      id: 3,
      name: "Laptop Backpack",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300",
      description: "Durable laptop backpack with multiple compartments",
   },
   {
      id: 4,
      name: "Mechanical Keyboard",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300",
      description: "RGB mechanical keyboard with custom switches",
   },
   {
      id: 5,
      name: "4K Monitor",
      price: 349.99,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300",
      description: "32-inch 4K Ultra HD monitor for professional use",
   },
   {
      id: 6,
      name: "Wireless Mouse",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300",
      description: "Ergonomic wireless mouse with precision tracking",
   },
   {
      id: 7,
      name: "Gaming Chair",
      price: 249.99,
      image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=300",
      description: "Comfortable gaming chair with lumbar support",
   },
   {
      id: 8,
      name: "Webcam HD",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=300",
      description: "1080p HD webcam with built-in microphone",
   },
   {
      id: 9,
      name: "USB-C Hub",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1619953942547-233eab5a70d6?w=300",
      description: "Multi-port USB-C hub with power delivery",
   },
   {
      id: 10,
      name: "Gaming Console",
      price: 499.99,
      image: "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=300",
      description: "Next-gen gaming console with 4K graphics",
   },
   {
      id: 11,
      name: "Bluetooth Speaker",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300",
      description: "Portable Bluetooth speaker with deep bass",
   },
   {
      id: 12,
      name: "Graphics Tablet",
      price: 199.99,
      image: "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=300",
      description: "Digital drawing tablet with pressure sensitivity",
   },
   {
      id: 13,
      name: "Laptop Stand",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=300",
      description: "Adjustable aluminum laptop stand for better ergonomics",
   },
   {
      id: 14,
      name: "Wireless Earbuds",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?w=300",
      description: "True wireless earbuds with active noise cancellation",
   },
   {
      id: 15,
      name: "Desk Lamp",
      price: 49.99,
      image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300",
      description:
         "LED desk lamp with adjustable brightness and color temperature",
   },
];

function isProductInCart(productId) {
   const currentCart = getCurrentCart();
   return currentCart.some((item) => item.id === productId);
}

function renderProducts() {
   const user = JSON.parse(localStorage.getItem("user"));
   return `
        <div class="container mx-auto px-4 py-8">
            <div class="flex gap-2 justify-between items-center mb-8">
                <h1 class="text-3xl font-bold">Welcome, ${user.username}</h1>
                <div class="grid md:grid-cols-2 gap-2">
                    <a href="#cart" 
                        class="flex items-center gap-2 px-4 py-2 rounded-xl shadow-sm 
                        text-white bg-indigo-600 hover:bg-indigo-700 
                        transform hover:-translate-y-0.5 transition-all duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                           <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                        <span class="hidden md:inline">Cart ( ${getCartCount()} )</span>
                    </a>
                    <button onclick="handleLogout()" 
                        class="flex items-center gap-2 px-4 py-2 rounded-xl shadow-sm text-white 
                        bg-red-600 hover:bg-red-700 transition-colors duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                        </svg>
                        <span class="hidden md:inline">Logout</span>
                    </button>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                ${products
                   .map((product) => {
                      const inCart = isProductInCart(product.id);
                      return `
                        <div class="group bg-white rounded-2xl shadow-md hover:shadow-xl 
                            transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
                            <div class="relative pt-[75%] bg-gray-100 rounded-t-2xl overflow-hidden">
                              <img src="${product.image}" 
                                 alt="${product.name}" 
                                 class="absolute inset-0 w-full h-full object-cover transform 
                                 transition-transform duration-500 group-hover:scale-110"
                              />
                            </div>
                            <div class="p-6 flex flex-col flex-grow">
                                <h3 class="text-xl font-semibold text-gray-900 mb-2 
                                    group-hover:text-indigo-600 transition-colors duration-200">
                                    ${product.name}
                                </h3>
                                <p class="text-gray-600 text-sm flex-grow">
                                    ${product.description}
                                </p>
                                <div class="pt-4 mt-4 border-t border-gray-100">
                                    <div class="flex items-center justify-between mb-4">
                                        <span class="text-2xl font-bold text-gray-900">
                                          $${product.price}
                                        </span>
                                        <span class="px-3 py-1 text-sm font-medium text-indigo-600 
                                          bg-indigo-50 rounded-full">
                                          ${inCart ? "In Cart" : "Available"}
                                        </span>
                                    </div>
                                    <button onclick="addToCart(${product.id})" 
                                        class="w-full py-3 px-4 rounded-xl font-medium text-white
                                        ${
                                           inCart
                                              ? "bg-red-600 hover:bg-red-700"
                                              : "bg-indigo-600 hover:bg-indigo-700"
                                        } 
                                        transform hover:-translate-y-0.5 transition-all duration-200">
                                        ${
                                           inCart
                                              ? "Remove from Cart"
                                              : "Add to Cart"
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    `;
                   })
                   .join("")}
            </div>
        </div>
    `;
}
