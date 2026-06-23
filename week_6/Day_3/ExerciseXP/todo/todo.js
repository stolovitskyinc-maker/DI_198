// todoApp/todo.js

class TodoList {
  constructor() {
    this.tasks = [];
  }

  /**
   * Adds a new task to the collection
   * @param {string} taskDescription 
   */
  addTask(taskDescription) {
    const task = {
      id: this.tasks.length + 1,
      description: taskDescription,
      isCompleted: false
    };
    this.tasks.push(task);
    console.log(`➕ Added task: "${taskDescription}"`);
  }

  /**
   * Marks a specific task as completed using its unique description matching
   * @param {string} taskDescription 
   */
  markTaskComplete(taskDescription) {
    const task = this.tasks.find(
      t => t.description.toLowerCase() === taskDescription.toLowerCase()
    );

    if (task) {
      task.isCompleted = true;
      console.log(`✅ Marked complete: "${task.description}"`);
    } else {
      console.log(`❌ System Error: Task "${taskDescription}" could not be found.`);
    }
  }

  /**
   * Renders the current list of tasks to the command line interface
   */
  listTasks() {
    console.log(`\n📋 Current Todo List status:`);
    if (this.tasks.length === 0) {
      console.log("   No tasks found.");
      return;
    }

    this.tasks.forEach(task => {
      const statusIcon = task.isCompleted ? "🟩 [DONE]" : "🟥 [TODO]";
      console.log(`   ${statusIcon} ${task.id}. ${task.description}`);
    });
    console.log(""); // Trailing empty line for clean separation
  }
}

// Export the class using ES6 syntax
export default TodoList;
