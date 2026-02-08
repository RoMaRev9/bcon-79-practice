// const form = document.querySelector(".header-form");
// const tasksList = document.querySelector(".tasks-list");

// const store = {
//   tasks: [
//     { id: 1, taskName: "task1", taskDescr: "finish task 1" },
//     { id: 2, taskName: "task2", taskDescr: "finish task 2" },
//   ],
// };

// function init() {
//   if (store.tasks.length === 0) return;
//   render();
// }

// function render() {
//   tasksList.innerHTML = store.tasks.map(createTaskMarkup).join("");
// }

// function createTaskMarkup({ id, taskName, taskDescr }) {
//   // Використовуємо зворотні лапки для інтерполяції ${}
//   return `
//     <li class="task-list-item">
//       <button class="task-list-item-btn" data-id="${id}">Delete</button>
//       <h3>${taskName}</h3>
//       <p>${taskDescr}</p>
//     </li>`;
// }

// function onFormSubmit(event) {
//   event.preventDefault();
//   // Переконайтеся, що в HTML name="taskName" та name="taskDescription"
//   const { taskName, taskDescription } = event.target.elements;
//   const name = taskName.value.trim();
//   const descr = taskDescription.value.trim();

//   if (!name || !descr) {
//     return alert("Всі поля мають бути заповнені!!!");
//   }

//   const task = { id: Date.now(), taskName: name, taskDescr: descr };
//   store.tasks.push(task);

//   tasksList.insertAdjacentHTML("beforeend", createTaskMarkup(task));
//   event.target.reset();
// }

// function onTasksClick(event) {
//   if (event.target.nodeName !== "BUTTON") return;

//   const taskId = Number(event.target.dataset.id);
//   store.tasks = store.tasks.filter(task => task.id !== taskId);
//   render();
// }

// form.addEventListener("submit", onFormSubmit);
// tasksList.addEventListener("click", onTasksClick);

// init();

// function onToggleTheme(event) {
//   const bodyEl = event.target.closest("body");
//   const isLightTheme = bodyEl.classList.contains("theme-light");

//   if (isLightTheme) {
//     bodyEl.classList.replace("theme-light", "theme-dark");
//     return;
//   }

//   bodyEl.classList.replace("theme-dark", "theme-light");
// }
//  form

// --------------------------------------
const headerForm = document.querySelector("#task-form");
const taskList = document.querySelector("#task-list"); // Додано =
const tasks = [];

headerForm.addEventListener("submit", onHeaderFormSubmit);

function onHeaderFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const taskName = form.elements.taskName.value;
  const taskDescription = form.elements.taskDescription.value; // Додано =

  const task = {
    name: taskName,
    description: taskDescription,
    id: Date.now(),
  }; // Використано фігурні дужки {}

  tasks.push(task);
  addTask(task);
  form.reset(); // Очищуємо форму після додавання
}

function addTask(task) {
  // Додано фігурну дужку {
  const taskMarkup = `
    <li class="task-list-item">
      <button id="${task.id}" class="task-list-item-btn">Delete</button>
      <h3>${task.name}</h3>
      <p>${task.description}</p>
    </li>`; // Виправлено дужку у task.name та лапки

  taskList.insertAdjacentHTML("beforeend", taskMarkup);
}
