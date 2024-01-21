var taskForm = document.getElementById("taskForm");
var taskList = document.getElementById("taskList");

// Load tasks from localStorage
var tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Display tasks on page load
tasks.forEach(function(taskData) {
    var task = createTaskElement(taskData);
    taskList.appendChild(task);
});

taskForm.addEventListener("submit", function(event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var priority = document.getElementById("priority").value;
    var category = document.getElementById("category").value;

    var taskData = {
        name: name,
        priority: priority,
        category: category
    };

    var task = createTaskElement(taskData);
    taskList.appendChild(task);

    tasks.push(taskData);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskForm.reset();
});

function createTaskElement(taskData) {
    var task = document.createElement("div");
    task.classList.add("task");
    task.innerHTML = `
        <span class="name">${taskData.name}</span>
        <span class="priority">${taskData.priority}</span>
        <span class="category">${taskData.category}</span>
    `;

    return task;
}