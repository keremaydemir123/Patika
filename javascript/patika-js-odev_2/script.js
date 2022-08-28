const ul = document.querySelector("#list");
const taskInput = document.querySelector("#task");
const addButton = document.querySelector("#liveToastBtn");

let tasks = JSON.parse(localStorage.getItem("tasks"));
if (tasks == null) tasks = [];

addButton.addEventListener("click", addElement);

function showTodos() {
  ul.innerText = "";
  if (tasks.length > 0) {
    tasks.forEach((task) => {
      let element = document.createElement("li");
      element.innerText = task;
      let span = document.createElement("span");
      span.className = "btn btn-danger";
      span.innerText = "delete";
      span.addEventListener("click", deleteElement);
      ul.append(element);
      element.append(span);
    });
  }
}

function deleteElement(task) {
  this.parentElement.remove();
  let index = tasks.indexOf(task);
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addElement() {
  if (taskInput.value.trim() != "") {
    tasks.push(taskInput.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTodos();
    taskInput.value = "";
    $("#addToast").toast("show");
  } else $("#errorToast").toast("show");
}
