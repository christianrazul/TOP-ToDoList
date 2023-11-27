import "./styles.css";
import pageLoad from "./initialLoad.js";

pageLoad();

class Task {
  constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }

  displayTask() {
    console.log(this.description);
  }
}

const note1 = new Task("Milk", "Buy milk from store", "1/1/2023");

note1.displayTask();
