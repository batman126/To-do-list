document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  const taskInput = document.getElementById("task-input");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const task = {
    id: Date.now(),
    text: taskText,
    completed: false,
  };

  saveTask(task);
  renderTask(task);
  taskInput.value = "";
}

function renderTask(task) {
  const taskList = document.getElementById("task-list");

  const li = document.createElement("li");
  li.setAttribute("data-id", task.id);
  if (task.completed) li.classList.add("completed");

  li.innerHTML = `
    <span onclick="toggleComplete(${task.id})">${task.text}</span>
    <button onclick="deleteTask(${task.id})">Delete</button>
  `;

  taskList.appendChild(li);
}

function saveTask(task) {
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function loadTasks() {
  const tasks = getTasks();
  tasks.forEach(task => renderTask(task));
}

function deleteTask(id) {
  let tasks = getTasks();
  tasks = tasks.filter(task => task.id !== id);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  const li = document.querySelector(`[data-id='${id}']`);
  if (li) li.remove();
}

function toggleComplete(id) {
  const tasks = getTasks();
  const task = tasks.find(t => t.id === id);
  task.completed = !task.completed;
  localStorage.setItem("tasks", JSON.stringify(tasks));

  const li = document.querySelector(`[data-id='${id}']`);
  li.classList.toggle("completed");
}
