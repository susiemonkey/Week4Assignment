// Variables
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Array to store tasks
let tasks = [];

// Function to render the task list
function renderTasks() {
  taskList.innerHTML = '';  // Clear the task list

  tasks.forEach((task, index) => {
    // Create a new task list item
    const li = document.createElement('li');
    li.textContent = task;

    // Create delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.onclick = () => deleteTask(index);

    // Create edit button (Bonus)
    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.classList.add('edit-btn');
    editBtn.onclick = () => editTask(index);

    // Append buttons and task to the list item
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  // Validate input
  if (taskText === '' || tasks.includes(taskText)) {
    alert('Please enter a valid and unique task.');
    return;
  }

  // Add task to array and render
  tasks.push(taskText);
  taskInput.value = '';
  renderTasks();
}

// Function to delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Function to edit a task (Bonus)
function editTask(index) {
  const newTask = prompt('Edit your task:', tasks[index]);
  if (newTask && newTask.trim() !== '') {
    tasks[index] = newTask.trim();
    renderTasks();
  }
}

// Add event listener to the add task button
addTaskBtn.addEventListener('click', addTask);

// Optional: Allow pressing "Enter" to add a task
taskInput.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addTask();
  }
});
