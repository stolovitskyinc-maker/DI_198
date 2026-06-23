// todoApp/app.js

// Import the TodoList class (always include the file extension in native ES6 node modules)
import TodoList from './todo.js';

// Initialize a new task manager instance
const myTodoList = new TodoList();

console.log("--- Initializing App System ---");

// 1. Populate the application with items
myTodoList.addTask("Buy fresh groceries");
myTodoList.addTask("Finish JavaScript module homework");
myTodoList.addTask("Clean up workspace desk");

// 2. Display standard system status snapshot
myTodoList.listTasks();

// 3. Perform item status mutations
myTodoList.markTaskComplete("Finish JavaScript module homework");

// 4. Print final outcome to confirm operational success
myTodoList.listTasks();
