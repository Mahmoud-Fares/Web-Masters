import Todo from "./Todo.js";
import TodoStorage from "./TodoStorage.js";
import NotificationService from "./NotificationService.js";

class TodoApp {
   constructor() {
      this.form = document.forms[0];
      this.inputField = document.querySelector("[data-todo-input]");
      this.todoFilter = document.querySelector("[data-todo-filter]");
      this.resetButton = document.querySelector("[data-todo-reset]");

      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleFilter = this.handleFilter.bind(this);
      this.handleReset = this.handleReset.bind(this);

      this.init();
   }

   init() {
      this.inputField.focus();
      TodoStorage.loadTodos();

      const savedFilter = localStorage.getItem("todoFilter") || "all";
      this.todoFilter.value = savedFilter;

      this.handleFilter({ target: this.todoFilter });

      this.form.addEventListener("submit", this.handleSubmit);
      this.todoFilter.addEventListener("change", this.handleFilter);
      this.resetButton.addEventListener("click", this.handleReset);
   }

   handleSubmit(event) {
      event.preventDefault();
      const todoText = this.inputField.value.trim();

      if (todoText) {
         try {
            const newTodo = new Todo(todoText);
            newTodo.render();
            TodoStorage.add(newTodo);
            this.inputField.value = "";
            NotificationService.success("Task added successfully!");
         } catch (error) {
            console.error("Failed to create todo:", error);
            NotificationService.error("Failed to add task");
         }
      }
   }

   handleFilter(event) {
      const todoUl = document.querySelector("[data-todo-list]");
      const filterValue = event.target.value.toLowerCase();
      const todos = [...todoUl.children];

      localStorage.setItem("todoFilter", filterValue);

      todos.forEach((todo) => {
         const isCompleted = todo.classList.contains("completed");
         const shouldShow =
            filterValue === "all" ||
            (filterValue === "completed" && isCompleted) ||
            (filterValue === "uncompleted" && !isCompleted);

         todo.style.display = shouldShow ? "flex" : "none";
      });
   }

   handleReset() {
      const todoUl = document.querySelector("[data-todo-list]");
      const todos = [...todoUl.children];
      const filterValue = this.todoFilter.value.toLowerCase();

      // Filter todos based on the current selection or all todos if the filter is "all"
      const filteredTodos = todos.filter((todo) => {
         const isCompleted = todo.classList.contains("completed");
         return (
            (filterValue === "completed" && isCompleted) ||
            (filterValue === "uncompleted" && !isCompleted) ||
            filterValue === "all"
         );
      });

      filteredTodos.forEach((todo) => {
         TodoStorage.delete(todo.querySelector(".todo-item"));
         todo.remove();
      });

      NotificationService.success("Selected tasks cleared successfully!");
   }
}

new TodoApp();
