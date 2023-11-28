const addTaskForm = document.querySelector("[data-add-task-form]");
const taskList = document.querySelector("[data-task-list]");

addTaskForm.addEventListener("submit", (element) => {
  element.preventDefault();
  addTaskItem();
});

function addTaskItem() {
  const taskItemTitle = document.querySelector("[data-task-title]");
  const taskItem = document.createElement("li");

  taskItem.innerHTML = `
  <div class="unchecked"></div>
  <div class="list-info">
    <h3 class="list-info-title">${taskItemTitle.value}</h3>
    <h4 class="list-info-src">Test</h4>
  </div>
  `;

  taskList.appendChild(taskItem);
}
