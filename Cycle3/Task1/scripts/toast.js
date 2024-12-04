const Toast = {
   init() {
      // Create container for toasts if it doesn't exist
      if (!document.getElementById("toast-container")) {
         const container = document.createElement("div");
         container.id = "toast-container";
         container.className =
            "fixed bottom-4 right-4 z-50 flex flex-col gap-2";
         container.setAttribute("role", "alert");
         container.setAttribute("aria-live", "polite");
         document.body.appendChild(container);
      }
   },

   show(message, type = "success") {
      this.init();
      const container = document.getElementById("toast-container");

      // Create toast element
      const toast = document.createElement("div");
      toast.className = `
            px-6 py-4 rounded-xl shadow-lg transform translate-y-full opacity-0 
            transition-all duration-300 ease-out flex items-center space-x-2 min-w-[300px]
            ${this.getTypeStyles(type)}
        `;
      toast.setAttribute("role", "status");
      toast.setAttribute("aria-atomic", "true");

      // Add icon and message
      toast.innerHTML = `
            <span class="text-lg font-bold" aria-hidden="true">${this.getIcon(
               type
            )}</span>
            <p class="font-medium">${message}</p>
        `;

      // Add to container
      container.appendChild(toast);

      // Trigger animation
      requestAnimationFrame(() => {
         toast.classList.remove("translate-y-full", "opacity-0");
      });

      // Remove after delay
      setTimeout(() => {
         toast.classList.add("translate-y-full", "opacity-0");
         setTimeout(() => {
            container.removeChild(toast);
         }, 300);
      }, 3000);
   },

   getTypeStyles(type) {
      switch (type) {
         case "success":
            return "bg-green-500 text-white";
         case "error":
            return "bg-red-500 text-white";
         case "info":
            return "bg-indigo-500 text-white";
         case "warning":
            return "bg-yellow-500 text-white";
         default:
            return "bg-gray-700 text-white";
      }
   },

   getIcon(type) {
      switch (type) {
         case "success":
            return "✓";
         case "error":
            return "✕";
         case "warning":
            return "⚠";
         case "info":
            return "ℹ";
         default:
            return "ℹ";
      }
   },

   success(message) {
      this.show(message, "success");
   },

   error(message) {
      this.show(message, "error");
   },

   info(message) {
      this.show(message, "info");
   },

   warning(message) {
      this.show(message, "warning");
   },
};
