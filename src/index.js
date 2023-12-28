// ----- IMPORTS ----- //

// ----- QUERY SELECTORS ----- //
const todoList = document.querySelector("[data-todo-list]");
const todoAddForm = document.querySelector("[data-add-todo-form]");
const todoAddText = document.querySelector("[data-add-todo-text]");
const todoAddBtn = document.querySelector("[data-add-todo-btn]");
const TEMPLATE = document.querySelector("[data-item-template]");

// ----- EVENT LISTENERS ----- //
todoAddBtn.addEventListener("click", addTodo);

// ----- FUNCTIONS ----- //
function addTodo(event) {
  // Prevent default form submission
  event.preventDefault();

  if (todoAddText.value === "") return alert("Task cannot be empty");

  if (todoAddText.value !== "") {
    // Create new todo element by making a node(copy) of the template
    const newTodo = TEMPLATE.content.cloneNode(true);

    // Set the todoTitle of the new todo to the value of the input
    const todoTitle = newTodo.querySelector("#todo-title");
    todoTitle.innerText = todoAddText.value;

    const todoCompleted = newTodo.querySelector(".todo-btn-completed");
    todoCompleted.addEventListener("click", () => {
      todoTitle.classList.toggle("done");
      if (todoCompleted.innerText === "Undo") {
        todoCompleted.innerText = "Completed";
      } else {
        todoCompleted.innerText = "Undo";
      }
    });

    const todoDelete = newTodo.querySelector(".todo-btn-delete");
    todoDelete.addEventListener("click", () => {
      const todo = todoDelete.parentElement;
      todoList.removeChild(todo);
    });

    // Append new todo to the list
    todoList.append(newTodo);

    // Clear the input
    todoAddText.value = "";
  }
}
