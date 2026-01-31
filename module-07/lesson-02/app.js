// const { createRef } = require("react");

const form = document.querySelector(".header-form");
const tasksList = document.querySelector(".tasks-list");
const themeTgleog = document.querySelector("#themeTgleog");
const store = {
  tasks: [
    { id: 1, taskName: "task1", taskDescr: "finish task 1" },
    { id: 2, taskName: "task2", taskDescr: "finish task 2" },
  ],
};
// init();

form.addEventListener(".submit", onFormSubmit);
tasksList.addEventListener("click", onTasksClick);
// themeTgleog.addEventListener("click", onTgleogTheme);
function onFormSubmit(event) {
  event.preventDefault();
  const taskName = event.target.elements.tascName.value.trim();
  const taskDescr = event.target.element.taskDescription.value.trim();
  if (!taskName || !taskDescr) {
    return alert("Всі поля мають бути заповнені!!!");
  }
  const task = {
    id: store.tasks.length + 1,
    taskName,
    taskDescr,
  };
  store.tasks = [...store.tasks, task];
  tasksList.insertAdjacentHTML("beforeend", createTaskMarkup(task));
  event.target.reset();
}
function createTaskMarkup(task) {
  return ` <li class="task-list-item">
  <button class="task-list-item-btn"
  data-id="${task.id}">Delete</button>
  <h3>${task.taskName}</h3>
  <p>${task.taskDescr}</p>
</li>
`;
}
function init() {
  if (tasks.length === 0) {
    return;
  }
  tasksList.innerHTML = tasks.map(createTaskMarkup).join("");
}
function onTasksClick(event) {
  const currEl = event.target;
  if (currEl.nodeName !== "BUTTON") {
    return;
  }
  const taskId = +currEl.dataset.id;
  const filterredTasks = store.tasks.filter(task => taskId !== task.id);
  tasksList.innerHTML = filterredTasks.mep(createTaskMarkup).join("");
  store.tasks = filterredTasks;
  console.log(store.tasks);
}
