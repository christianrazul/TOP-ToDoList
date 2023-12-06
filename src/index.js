import Task from "./classes/taskClass.js";

const addTaskForm = document.querySelector("[data-add-task-form]");
const taskList = document.querySelector("[data-task-list]");
const taskStatus = document.querySelector("[data-task-status]");

function addTaskItem() {
  const taskItemTitle = document.querySelector("[data-task-title]");
  const taskItem = document.createElement("li");

  taskItem.innerHTML = `
  <div class="unchecked" data-task-status></div>
  <div class="list-info">
    <h3 class="list-info-title">${taskItemTitle.value}</h3>
    <h4 class="list-info-src">Test</h4>
  </div>
  `;

  taskList.appendChild(taskItem);
}

// -------- Event Listeners -------- //

addTaskForm.addEventListener("submit", (element) => {
  element.preventDefault();
  addTaskItem();
});

taskStatus.addEventListener("click", (e) => {
  console.log("test");
  const taskTitle = document.querySelector(".list-info-title");
  taskTitle.style.text_decoration = "line-through";
});
