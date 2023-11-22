import displayAddTaskForm from "./addTask.js";

const ADD_TASK_BUTTON = document.querySelector("#addTask").addEventListener("click", () => {
  displayAddTaskForm();
});

export default function pageLoad() {}
