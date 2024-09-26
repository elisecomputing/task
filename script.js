// Add new task
document.querySelector('.add-task').addEventListener('click', () => {
    const taskBoard = document.getElementById('taskBoard');
    const newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.innerHTML = `
        <span contenteditable="true">New Task</span>
        <button class="delete-task">Delete</button>
    `;
    taskBoard.insertBefore(newTask, document.querySelector('.add-task'));

    attachTaskEvents(newTask); // Add events to the new task
});

// Function to attach delete events to tasks
function attachTaskEvents(task) {
    const deleteButton = task.querySelector('.delete-task');

    // Delete task functionality
    deleteButton.addEventListener('click', () => {
        task.remove();
    });
}

// Apply event listeners to existing tasks
document.querySelectorAll('.task').forEach(task => {
    attachTaskEvents(task);
});

// Make tasks draggable using Sortable.js
const taskBoard = document.getElementById('taskBoard');
Sortable.create(taskBoard, {
    handle: '.task',
    animation: 150,
    ghostClass: 'sortable-ghost',
    filter: '.add-task',  // Exclude the add button from being draggable
    onEnd: function () {
        // Optional: Save new task order in localStorage or server
        console.log('Task order changed');
    }
});
