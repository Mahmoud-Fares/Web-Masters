import Todo from "./Todo.js";

class TodoStorage {
   static STORAGE_KEY = "todos";

   static _getTodosList() {
      try {
         const todos = localStorage.getItem(this.STORAGE_KEY);
         return todos ? JSON.parse(todos) : [];
      } catch (error) {
         console.error("Error reading from localStorage:", error);
         return [];
      }
   }

   static _saveTodos(todos) {
      try {
         localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos));
      } catch (error) {
         console.error("Error saving to localStorage:", error);
         throw new Error("Failed to save todos");
      }
   }

   static add(todo) {
      if (!todo || !todo.data) throw new Error("Invalid todo item");

      const todos = this._getTodosList();
      todos.push({ data: todo.data, completeStatus: todo.completeStatus });
      this._saveTodos(todos);
   }

   static _findTodoIndex(targetTodo) {
      const todos = this._getTodosList();
      const todoText = targetTodo.textContent || targetTodo.innerText;
      return todos.findIndex((todo) => todo.data === todoText);
   }

   static updateStatus(todoElement) {
      if (!todoElement) return;

      const todos = this._getTodosList();
      const index = this._findTodoIndex(todoElement);

      if (index !== -1) {
         todos[index].completeStatus = !todos[index].completeStatus;
         this._saveTodos(todos);
      }
   }

   static updateText(todoElement, newText) {
      if (!todoElement || !newText) return;

      const todos = this._getTodosList();
      const originalText =
         todoElement.getAttribute("data-original-text") ||
         todoElement.textContent;
      const index = todos.findIndex((todo) => todo.data === originalText);

      if (index !== -1) {
         todos[index].data = newText;
         this._saveTodos(todos);
      }
   }

   static delete(todoElement) {
      if (!todoElement) return;

      const todos = this._getTodosList();
      const index = this._findTodoIndex(todoElement);

      if (index !== -1) {
         todos.splice(index, 1);
         this._saveTodos(todos);
      }
   }

   static loadTodos() {
      const todos = this._getTodosList();
      const todoList = document.querySelector("[data-todo-list]");

      if (!todoList) {
         console.error("Todo list container not found");
         return;
      }

      todos.forEach(({ data, completeStatus }) => {
         try {
            const todo = new Todo(data, completeStatus);
            todo.render();
         } catch (error) {
            console.error("Error rendering todo:", error);
         }
      });
   }
}

export default TodoStorage;
