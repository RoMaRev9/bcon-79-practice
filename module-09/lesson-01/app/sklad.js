                    
                    js>stringify=JSON>parse=js



//! App store
const store = {
  notes: [
    // { id: 1, name: "Mango", body: "Mango is cute" },
    // { id: 2, name: "Ajax", body: "Ajax is awesome" },
    // { id: 3, name: "Poly", body: "Poly is nice" },
  ],
  appTheme: "light",
};

//! Generate Id instance
const g = new GenerateId();

const STORAGE_KEY = { notes: "notes", appTheme: "app-theme" };

//! Elements
const notesList = document.querySelector(".js-notes-list");
const card = document.querySelector(".js-card");
const form = document.querySelector(".js-form");
const btnDelete = document.querySelector(".js-delete-btn");

//! Listeners
form.addEventListener("submit", onFormSubmit);

renderNotes(loadLS(STORAGE_KEY.notes));
//! Functions
function onFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const noteData = {
    id: g.generate(10),
    ...Object.fromEntries(new FormData(form)),
  };
  store.notes = [...store.notes, noteData];
  saveLS(STORAGE_KEY.notes, store.notes);

  //! Incert markup in list
  notesList.insertAdjacentHTML("beforeend", createNote(noteData));
  form.reset();
}

function renderNotes(notes = []) {
  if (notes === undefined) {
    return;
  }
  const markup = notes.map(createNote).join("");
  notesList.innerHTML = markup;
}

function createNote({ id, name, body }) {
  return `
      <li class="card js-card">
        <h5 class="card-header">${name}</h5>
          <div class="card-body">
            <p class="card-text">${body}</p>
                <button
                  class="btn btn-primary js-delete-btn"
                  type="button"
                  data-noteid="${id}">Delete
                  </button>
          </div>
      </li>`;
}

//! Local storage service

function saveLS(key, value) {
  try {
    const serialisedState = JSON.stringify(value);
    localStorage.setItem(key, serialisedState);
  } catch (error) {
    console.log(error.message);
  }
}

function loadLS(key) {
  try {
    const serialisedState = localStorage.getItem(key);
    if (serialisedState === null) {
      return undefined;
    }
    return JSON.parse(serialisedState);
  } catch (error) {
    console.log(error.message);
  }
}

// _____________________________________________________________________________
/*
 app store
*/
const store = {
  notes: [
    {
      id: 1,
      name: "Mango",
      body: "Mango is cute",
    },
    {
      id: 2,
      name: "Ajax",
      body: "Ajax is cute",
    },
    {
      id: 3,
      name: "Poly",
      body: "Poly is cute",
    },
  ],
  appsTheme: "light",
};

// Generate id instance
const g = new GenerateId();

const STORAGE_KEY = { notes: "notes", appsTheme: "appsTheme" };

// Elements
const noteList = document.querySelector(".js-notes-list");
const card = document.querySelector(".js-card");
const form = document.querySelector(".js-form");
const btnDelete = document.querySelector(".js-delete-btn");

//listeners
form.addEventListener("submit", onFormSubmit);
noteList.addEventListener("click", onBtnDeleteClick);

const notesData = loadLS(STORAGE_KEY.notes);
if (notesData !== undefined) {
  store.notes = [...notesData];
  renderNotes(notesData);
}

// functions
function onFormSubmit(event) {
  event.preventDefault();

  const form = event.target;

  const notesData = {
    id: g.generate(10),
    ...Object.fromEntries(new FormData(form)),
  };
  // console.log(notesData);

  //Add new items in form
  store.notes = [...store.notes, notesData];
  saveLS(STORAGE_KEY.notes, store.notes);

  // insert markup in list
  noteList.insertAdjacentHTML("beforeend", createNote(notesData));

  //reset form
  form.reset();
}

function renderNotes(notes = []) {
  if (notes === undefined) {
    return;
  }
  const markup = notes.map(createNote).join("");
  noteList.innerHTML = markup;
}

function createNote({ id, name, body }) {
  return `<li class="card js-card">
              <h5 class="card-header">${name}</h5>
              <div class="card-body">
                <p class="card-text">${body}</p>
                <button
                  class="btn btn-primary js-delete-btn"
                  type="button"
                  data-noteid="${id}"
                >
                  Delete
                </button>
              </div>
            </li>`;
}

// local storage service

function saveLS(key, value) {
  try {
    const serialisedState = JSON.stringify(value);
    localStorage.setItem(key, serialisedState);
  } catch (error) {
    console.log(error.message);
  }
}

function loadLS(key) {
  try {
    const serialisedState = localStorage.getItem(key);
    if (serialisedState === null) {
      return undefined;
    }
    return JSON.parse(serialisedState);
  } catch (error) {
    console.log(error.message);
  }
}

function onBtnDeleteClick(event) {
  const currEl = event.target;
  if (!currEl.classList.contains("js-delete-btn")) {
    return;
  }
  const noteId = currEl.dataset.noteid;
  const filteredNotes = store.notes.filter(note => {
    return note.id !== noteId;
  });
  store.notes = [...filteredNotes];
  saveLS(STORAGE_KEY.notes, store.notes);
  renderNotes(store.notes);
}
-------------------------------------------------------------
що робить цей вираз form.addEventListener("submit", onFormSubmit);
Цей рядок коду є фундаментальною частиною веб-розробки на JavaScript. Якщо пояснювати просто: він наказує браузеру стежити за формою і виконати певну дію, коли користувач спробує її відправити.
Ось детальний розбір кожної частини:
1. Складові виразу
form: Це змінна, яка посилається на ваш HTML-елемент <form>. Зазвичай її отримують через document.querySelector('form').
.addEventListener(...): це метод (функція), яка "прикріплює" спостерігача до елемента. Вона каже: «Слухай уважно, чи не станеться тут якась подія».
"submit": Це назва конкретної події. Вона спрацьовує, коли користувач натискає кнопку «Надіслати» (тип submit) або натискає Enter, перебуваючи в текстовому полі форми.
onFormSubmit: Це назва функції-обробника, яку ви написали десь в іншому місці коду. Вона запуститься автоматично, як тільки відбудеться подія submit.
2. Як це працює на практиці?
Коли користувач натискає кнопку відправки:
Браузер фіксує подію submit.
Він бачить, що ви додали «слухача» (addEventListener).
Браузер викликає вашу функцію onFormSubmit.
3. Важливий нюанс: event.preventDefault()
За замовчуванням, коли форма відправляється, сторінка перезавантажується. У сучасному JavaScript (особливо в SPA або при роботі з API) ми зазвичай хочемо зупинити це перезавантаження. Тому функція onFormSubmit найчастіше виглядає так:
javascript
function onFormSubmit(event) {
    event.preventDefault(); // Зупиняє перезавантаження сторінки
    
    console.log("Форма була відправлена, але сторінка не перезавантажилась!");
    // Тут ви можете зібрати дані з полів і відправити їх через fetch/axios
}
--------------------------------------------------------------------
1. Структура даних та ініціалізація
store: Об'єкт, що виступає як "стейт" (стан) додатка. У ньому зберігається масив нотаток notes.
STORAGE_KEY: Об'єкт з ключами для Web Storage API, за якими дані записуються в пам'ять браузера.
GenerateId: Створює унікальні ідентифікатори для кожної нотатки (важливо для подальшого видалення або редагування). 
2. Робота з формою (onFormSubmit)
Коли користувач надсилає форму:
event.preventDefault(): Зупиняє перезавантаження сторінки.
Збір даних: За допомогою FormData та Object.fromEntries дані з полів форми автоматично перетворюються на об'єкт.
Оновлення стору: Нова нотатка додається в масив store.notes через деструктуризацію ([...]), що забезпечує незмінність початкових даних.
Сховище: Функція saveLS конвертує масив у JSON-рядок і зберігає його в LocalStorage.
Інтерфейс: Нова картка відмальовується в кінці списку за допомогою insertAdjacentHTML. 
3. Рендеринг та відображення
createNote: Шаблонний рядок, який генерує HTML-розмітку картки. Вона містить ім'я, текст та кнопку видалення з data-noteid.
renderNotes: При завантаженні сторінки зчитує масив із loadLS і повністю оновлює вміст notesList. 
4. Збереження стану (Persistence)
Завдяки виклику renderNotes(loadLS(...)) при старті, додаток не втрачає дані після оновлення сторінки. Він "підтягує" всі раніше створені нотатки з пам'яті браузера. 
Зверніть увагу: У наданому коді функція loadLS не завершена (відсутня закриваюча дужка та обробка результату), а кнопка Delete має слухача в оголошенні змінних, але логіка самого видалення в коді не описана. 
---------------------------------------------------------------------------------
function onBtnDeleteClick(event) {
  // 1. Перевіряємо, чи клікнули саме по кнопці видалення
  const isDeleteBtn = event.target.classList.contains("js-delete-btn");
  if (!isDeleteBtn) return;

  // 2. Отримуємо ID з data-атрибута кнопки
  const noteId = event.target.dataset.noteid;

  // 3. Видаляємо з пам'яті (оновлюємо store.notes)
  // Залишаємо лише ті нотатки, ID яких не збігається з видаленим
  store.notes = store.notes.filter(note => note.id !== noteId);

  // 4. Оновлюємо LocalStorage
  saveLS(STORAGE_KEY.notes, store.notes);

  // 5. Видаляємо елемент з інтерфейсу (найближчу картку <li>)
  // Використовуємо [Element.closest()](https://developer.mozilla.org)
  const cardToRemove = event.target.closest(".js-card");
  cardToRemove.remove();
}
// Додай це при ініціалізації:
const savedNotes = loadLS(STORAGE_KEY.notes);
if (savedNotes) {
  store.notes = savedNotes;
  renderNotes(store.notes);
}
--------------------------------------------------------
https://github.com/OleksandrProtchenko/bcon-79-practice
=============================
https://docs.google.com/spreadsheets/d/1nOa1jHR-3bqoSYLumuP9wtZ5HVCVOO9xDJYE-TQm1Kc/edit?usp=sharing
=______________________________________________https://github.com/OleksandrProtchenko/bcon-79-practice/tree/main
_________________________________________________
https://github.com/vjosik/bcon-79-practice