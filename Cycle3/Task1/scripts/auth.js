// Initialize users in localStorage if not exists
if (!localStorage.getItem("users")) {
   localStorage.setItem("users", JSON.stringify([]));
}

function checkAuth() {
   const user = localStorage.getItem("user");

   // If user is logged in and tries to access login/signup, redirect to home
   if (
      user &&
      (window.location.hash === "#login" || window.location.hash === "#signup")
   ) {
      window.location.hash = "#";
      return;
   }

   // If user is not logged in and tries to access other pages, redirect to login
   if (
      !user &&
      !window.location.hash.includes("#login") &&
      !window.location.hash.includes("#signup")
   ) {
      window.location.hash = "#login";
   }
}

function handleSignup(event) {
   event.preventDefault();
   const username = document.getElementById("signup-username").value;
   const email = document.getElementById("signup-email").value;
   const password = document.getElementById("signup-password").value;
   const confirmPassword = document.getElementById(
      "signup-confirm-password"
   ).value;

   if (password !== confirmPassword) {
      Toast.error("Passwords do not match!");
      return;
   }

   const users = JSON.parse(localStorage.getItem("users")) || [];
   if (users.some((user) => user.email === email)) {
      Toast.error("User already exists!");
      return;
   }

   users.push({ username, email, password });
   localStorage.setItem("users", JSON.stringify(users));

   // Auto login after signup
   localStorage.setItem("user", JSON.stringify({ username, email }));
   localStorage.setItem(`cart_${email}`, JSON.stringify([])); // Initialize empty cart for new user
   Toast.success("Account created successfully!");
   window.location.hash = "#";
   renderPage();
}

function handleLogin(event) {
   event.preventDefault();
   const email = document.getElementById("login-email").value;
   const password = document.getElementById("login-password").value;

   const users = JSON.parse(localStorage.getItem("users")) || [];
   const user = users.find((u) => u.email === email && u.password === password);

   if (user) {
      localStorage.setItem(
         "user",
         JSON.stringify({ username: user.username, email })
      );
      // Initialize cart if not exists
      if (!localStorage.getItem(`cart_${email}`)) {
         localStorage.setItem(`cart_${email}`, JSON.stringify([]));
      }
      Toast.success("Welcome back!");
      window.location.hash = "#";
      renderPage();
   } else {
      Toast.error("Invalid credentials!");
   }
}

function handleLogout() {
   localStorage.removeItem("user");
   Toast.info("Logged out successfully");
   window.location.hash = "#login";
   renderPage();
}

function renderLogin() {
   return `
        <div class="min-h-screen flex items-center justify-center bg-gray-50" role="main">
            <div class="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
                <h1 class="text-3xl font-bold text-center text-gray-900">Login</h1>
                <form onsubmit="handleLogin(event)" class="mt-8 space-y-6" aria-label="Login form">
                    <div>
                        <label for="login-email" class="block text-sm font-medium text-gray-700">Email</label>
                        <input 
                            type="email" 
                            id="login-email" 
                            name="email"
                            required 
                            autocomplete="email"
                            aria-required="true"
                            class="mt-1 block w-full px-3 py-2 border border-indigo-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300">
                    </div>
                    <div>
                        <label for="login-password" class="block text-sm font-medium text-gray-700">Password</label>
                        <input 
                            type="password" 
                            id="login-password"
                            name="password" 
                            required 
                            autocomplete="current-password"
                            aria-required="true"
                            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300">
                    </div>
                    <button 
                        type="submit" 
                        class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        aria-label="Login to your account">
                        Login
                    </button>
                </form>
                <div class="text-center mt-4">
                    <p class="text-sm text-gray-600">
                        Don't have an account? 
                        <a href="#signup" 
                           class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                           aria-label="Go to sign up page">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    `;
}

function renderSignup() {
   return `
        <div class="min-h-screen flex items-center justify-center bg-gray-50" role="main">
            <div class="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-md">
                <h1 class="text-3xl font-bold text-center text-gray-900">Sign Up</h1>
                <form onsubmit="handleSignup(event)" class="mt-8 space-y-6" aria-label="Sign up form">
                    <div>
                        <label for="signup-username" class="block text-sm font-medium text-gray-700">Username</label>
                        <input 
                            type="text" 
                            id="signup-username"
                            placeholder="Just like (John)"
                            name="username"
                            required 
                            minlength="3"
                            autocomplete="username"
                            aria-required="true"
                            class="mt-1 block w-full px-3 py-2 border border-indigo-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300">
                    </div>
                    <div>
                        <label for="signup-email" class="block text-sm font-medium text-gray-700">Email</label>
                        <input 
                            type="email" 
                            id="signup-email"
                            placeholder="john@example.com" 
                            name="email"
                            required 
                            autocomplete="email"
                            aria-required="true"
                            class="mt-1 block w-full px-3 py-2 border border-indigo-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300">
                    </div>
                    <div>
                        <label for="signup-password" class="block text-sm font-medium text-gray-700">Password</label>
                        <input 
                            type="password" 
                            id="signup-password" 
                            name="new-password"
                            required 
                            minlength="6"
                            autocomplete="new-password"
                            aria-required="true"
                            aria-describedby="password-requirements"
                            class="mt-1 block w-full px-3 py-2 border border-indigo-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300">
                        <span id="password-requirements" class="text-xs text-gray-500">Password must be at least 6 characters long</span>
                    </div>
                    <div>
                        <label for="signup-confirm-password" class="block text-sm font-medium text-gray-700">Confirm Password</label>
                        <input 
                            type="password" 
                            id="signup-confirm-password" 
                            name="confirm-password"
                            required 
                            minlength="6"
                            autocomplete="new-password"
                            aria-required="true"
                            class="mt-1 block w-full px-3 py-2 border border-indigo-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-300">
                    </div>
                    <button 
                        type="submit" 
                        class="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        aria-label="Create your account">
                        Sign Up
                    </button>
                </form>
                <div class="text-center mt-4">
                    <p class="text-sm text-gray-600">
                        Already have an account? 
                        <a href="#login" 
                           class="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                           aria-label="Go to login page">
                            Login
                        </a>
                    </p>
                </div>
            </div>
        </div>
    `;
}
