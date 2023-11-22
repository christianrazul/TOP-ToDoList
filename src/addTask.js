// constructor for Add Task
function Task(title, description, dueDate) {
  return title, description, dueDate;
}

let todoList = [];

function displayAddTaskForm() {
  const TASK_FORM = document.querySelector(".task");
  TASK_FORM.style.display = "grid";
}

export default displayAddTaskForm;

