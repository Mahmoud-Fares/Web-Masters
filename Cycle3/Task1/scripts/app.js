document.addEventListener("DOMContentLoaded", () => {
   checkAuth();
   renderPage();

   // Using hash-based routing (#) allows single-page app navigation
   // Benefits: No page reloads, faster experience, preserves state
   // Alternative would be traditional links causing full page refresh
   window.addEventListener("hashchange", renderPage);
});

function renderPage() {
   const mainContent = document.getElementById("main-content");
   checkAuth();

   switch (window.location.hash) {
      case "#login":
         mainContent.innerHTML = renderLogin();
         break;

      case "#signup":
         mainContent.innerHTML = renderSignup();
         break;

      case "#cart":
         mainContent.innerHTML = renderCart();
         break;

      default:
         mainContent.innerHTML = renderProducts();
   }
}
