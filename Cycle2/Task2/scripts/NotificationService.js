class NotificationService {
   static show(message, type = "success") {
      const container = document.getElementById("notifications");
      if (!container) return;

      const notification = document.createElement("div");
      notification.className = `notification ${type}`;
      notification.setAttribute("role", "alert");
      notification.setAttribute("aria-live", "polite");

      const icon = type === "success" ? "check-circle" : "exclamation-circle";
      notification.innerHTML = `
         <i class="fas fa-${icon}" aria-hidden="true"></i>
         <p>${message}</p>
      `;

      container.appendChild(notification);

      setTimeout(() => {
         notification.classList.add("slide-out");
         notification.addEventListener("animationend", () => {
            notification.remove();
         });
      }, 3000);
   }

   static success(message) {
      this.show(message, "success");
   }

   static error(message) {
      this.show(message, "error");
   }
}

export default NotificationService;
