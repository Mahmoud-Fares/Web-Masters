import TodoStorage from "./TodoStorage.js";
import NotificationService from "./NotificationService.js";

class Todo {
   constructor(data, completeStatus = false) {
      if (!data || typeof data !== "string")
         throw new Error("Todo data must be a non-empty string");

      this.data = data.trim();
      this.completeStatus = completeStatus;
   }

   render() {
      const todoUl = document.querySelector("[data-todo-list]");
      if (!todoUl) throw new Error("Todo list container not found");

      const todoElement = this._createTodoElement();
      todoUl.append(todoElement);
   }

   _createTodoElement() {
      const div = document.createElement("div");
      div.classList.add("todo");
      div.setAttribute("role", "list-item");
      if (this.completeStatus) {
         div.classList.add("completed");
         div.setAttribute("aria-checked", "true");
      } else {
         div.setAttribute("aria-checked", "false");
      }

      const todoItem = this._createTodoItem();
      const actionsContainer = this._createActionsContainer();

      div.append(todoItem, actionsContainer);
      return div;
   }

   _createTodoItem() {
      const li = document.createElement("li");
      li.classList.add("todo-item");
      li.textContent = this.data;
      li.setAttribute("aria-label", this.data);
      return li;
   }

   _createActionsContainer() {
      // Create mobile dropdown
      const mobileActions = document.createElement("div");
      mobileActions.classList.add("todo-actions-mobile");

      const dropdownBtn = document.createElement("button");
      dropdownBtn.classList.add("dropdown-btn");
      dropdownBtn.innerHTML = `<i class="fas fa-ellipsis-h"></i>`;

      const dropdownContent = document.createElement("div");
      dropdownContent.classList.add("dropdown-content");

      // Create desktop buttons container
      const desktopActions = document.createElement("div");
      desktopActions.classList.add("todo-actions-desktop");

      // Create all action buttons
      const editButton = this._createButton("edit-btn", "fa-edit", "Edit");
      const completeButton = this._createButton(
         "complete-btn",
         "fa-check",
         "Complete"
      );
      const trashButton = this._createButton("trash-btn", "fa-trash", "Delete");

      // Clone buttons for dropdown
      const editButtonMobile = editButton.cloneNode(true);
      const completeButtonMobile = completeButton.cloneNode(true);
      const trashButtonMobile = trashButton.cloneNode(true);

      // Add buttons to desktop container
      desktopActions.append(editButton, completeButton, trashButton);

      // Add buttons to dropdown
      dropdownContent.append(
         editButtonMobile,
         completeButtonMobile,
         trashButtonMobile
      );
      mobileActions.append(dropdownBtn, dropdownContent);

      // Create wrapper for both mobile and desktop actions
      const actionsWrapper = document.createElement("div");
      actionsWrapper.classList.add("todo-actions-wrapper");
      actionsWrapper.append(mobileActions, desktopActions);

      actionsWrapper.addEventListener("click", this._handleEvents.bind(this));

      // Close dropdown when clicking outside
      document.addEventListener("click", (e) => {
         // Close all dropdowns first
         const allDropdowns = document.querySelectorAll(".dropdown-content");
         allDropdowns.forEach((dropdown) => {
            if (dropdown !== dropdownContent) dropdown.classList.remove("show");
         });

         // Handle current dropdown
         if (!mobileActions.contains(e.target))
            dropdownContent.classList.remove("show");
      });

      // Toggle dropdown
      dropdownBtn.addEventListener("click", (e) => {
         e.stopPropagation();

         // Close all other dropdowns first
         const allDropdowns = document.querySelectorAll(".dropdown-content");
         allDropdowns.forEach((dropdown) => {
            if (dropdown !== dropdownContent) dropdown.classList.remove("show");
         });

         // Toggle current dropdown
         dropdownContent.classList.toggle("show");
      });

      return actionsWrapper;
   }

   _createButton(className, iconName, text) {
      const button = document.createElement("button");
      button.classList.add(className);
      button.setAttribute("aria-label", text);
      button.innerHTML = `
         <i class="fas ${iconName}" aria-hidden="true"></i>
         <span class="btn-text">${text}</span>
      `;
      return button;
   }

   _handleEvents(event) {
      event.stopPropagation();

      // Find the closest button that was clicked
      const button = event.target.closest("button");
      if (!button) return;

      // Handle button clicks
      if (button.classList.contains("edit-btn"))
         this._editTodo(button.closest(".todo"));
      else if (button.classList.contains("complete-btn"))
         this._toggleComplete(button.closest(".todo"));
      else if (button.classList.contains("trash-btn"))
         this._deleteTodo(button.closest(".todo"));

      // Close dropdown after action (if in mobile view)
      const dropdownContent = button.closest(".dropdown-content");
      if (dropdownContent) dropdownContent.classList.remove("show");
   }

   _editTodo(element) {
      if (!element) return;
      const todoItem = element.querySelector(".todo-item");
      if (!todoItem) return;

      const currentText = todoItem.textContent;
      // Store original text for reference
      todoItem.setAttribute("data-original-text", currentText);

      // Create edit input
      const input = document.createElement("input");
      input.type = "text";
      input.value = currentText;
      input.classList.add("edit-input");
      input.setAttribute("aria-label", "Edit task");
      input.setAttribute("aria-live", "polite");

      // Replace text with input
      todoItem.textContent = "";
      todoItem.appendChild(input);
      input.focus();

      // Handle input events
      const handleEdit = () => {
         const newText = input.value.trim();
         if (newText && newText !== currentText) {
            todoItem.textContent = newText;
            this.data = newText;
            TodoStorage.updateText(todoItem, newText);
            NotificationService.success("Task updated successfully!");
         } else {
            todoItem.textContent = currentText;
         }
         todoItem.removeAttribute("data-original-text");
         input.removeEventListener("blur", handleEdit);
         input.removeEventListener("keyup", handleKeyUp);
      };

      const handleKeyUp = (e) => {
         if (e.key === "Enter") {
            input.blur();
         } else if (e.key === "Escape") {
            input.value = currentText;
            input.blur();
         }
      };

      input.addEventListener("blur", handleEdit);
      input.addEventListener("keyup", handleKeyUp);
   }

   _toggleComplete(element) {
      if (!element) return;
      element.classList.toggle("completed");
      const isCompleted = element.classList.contains("completed");
      element.setAttribute("aria-checked", isCompleted.toString());
      const todoItem = element.querySelector(".todo-item");
      if (todoItem) {
         TodoStorage.updateStatus(todoItem);
         const status = element.classList.contains("completed")
            ? "completed"
            : "uncompleted";
         NotificationService.success(`Task marked as ${status}!`);
      }
   }

   _deleteTodo(element) {
      if (!element) return;

      const todoItem = element.querySelector(".todo-item");
      if (todoItem) {
         TodoStorage.delete(todoItem);
      }

      element.classList.add("fall");
      element.addEventListener("transitionend", () => {
         element.remove();
      });

      // Show notification only once after storage deletion
      NotificationService.success("Task deleted successfully!");
   }
}

export default Todo;
