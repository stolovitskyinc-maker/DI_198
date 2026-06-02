/*
To-Do List Core Logic Engine
Features Handled:
- Object tracking configuration array with task_id attributes.
- DOM render engine updating tasks upon input submissions.
- Check off modifications mapping false/true state targets (Bonus I).
- Splice array deletion cleanup routines (Bonus II).
*/

// 1. Array storing task objects (Bonus I requirement)
let tasks = [];
let idCounter = 0;

// 2. Select baseline DOM interaction nodes
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const listTasksContainer = document.querySelector(".listTasks");
const clearAllBtn = document.getElementById("clearAllBtn");

// 3. Form Submission Event Handler
taskForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Halt default browser navigation updates
    addTask();
});

// 4. Function: Add Task (Bonus I Structure mapping)
function addTask() {
    let taskText = taskInput.value.trim();

    // Check that the text value is not blank
    if (taskText === "") return;

    // Create a structured object representation
    let newTask = {
        task_id: idCounter,
        text: taskText,
        done: false
    };

    // Store in global array stack and iterate counter tracking
    tasks.push(newTask);
    idCounter++;

    // Clear user input area field clean
    taskInput.value = "";

    // Trigger complete canvas DOM redraw lifecycle to show updates
    renderTasks();
}

// 5. Function: Render Task Stack dynamically
function renderTasks() {
    // Clear out container first to rewrite updated array index mappings smoothly
    listTasksContainer.innerHTML = "";

    tasks.forEach(task => {
        // Construct Row Wrapper Node Container
        let taskRow = document.createElement("div");
        taskRow.classList.add("task-item");
        // Bind data-task-id attribute matching object tracking key
        taskRow.setAttribute("data-task-id", task.task_id);

        // Apply active check-off color classes if task object state is already marked true
        if (task.done) {
            taskRow.classList.add("checked-off");
        }

        // Generate Action Delete button (Font Awesome integration)
        let delBtn = document.createElement("button");
        delBtn.classList.add("delete-btn");
        delBtn.innerHTML = '<i class="fas fa-times"></i>';
        delBtn.addEventListener("click", function() {
            deleteTask(task.task_id);
        });

        // Generate Checkbox node
        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.classList.add("task-checkbox");
        checkbox.checked = task.done;
        checkbox.addEventListener("change", function() {
            doneTask(task.task_id);
        });

        // Generate Text Label Node
        let label = document.createElement("span");
        label.classList.add("task-label");
        label.textContent = task.text;
        
        // Let clicking on text block toggle the checkbox interaction state automatically
        label.addEventListener("click", function() {
            checkbox.checked = !checkbox.checked;
            doneTask(task.task_id);
        });

        // Assemble Row Tree structure layout
        taskRow.appendChild(delBtn);
        taskRow.appendChild(checkbox);
        taskRow.appendChild(label);

        // Append finalized single row onto view canvas panel workspace
        listTasksContainer.appendChild(taskRow);
    });
}

// 6. Function: Check/Uncheck Task State Toggle (Bonus I logic)
function doneTask(id) {
    // Locate match target reference record item inside array stack
    let foundTask = tasks.find(t => t.task_id === id);
    
    if (foundTask) {
        // Toggle boolean state back and forth cleanly
        foundTask.done = !foundTask.done;
        
        // Force rendering redraw update cycle to apply cross-out styling updates
        renderTasks();
    }
}

// 7. Function: Delete Target Task Row (Bonus II logic)
function deleteTask(id) {
    // Filter array to strip selected item out completely from memory
    tasks = tasks.filter(t => t.task_id !== id);
    
    // Refresh DOM presentation view layout layer mapping adjustments
    renderTasks();
}

// 8. Extra Helper: Clear All List items completely out
clearAllBtn.addEventListener("click", function() {
    tasks = [];
    renderTasks();
});
