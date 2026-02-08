// app store

const store = {
  notes: [
    // { id: 1, name: "Mango", body: "Mango is cute" },
    // { id: 2, name: "Ajax", body: "Ajax is awesome" },
    // { id: 3, name: "Poly", body: "Poly is nice" },
  ],
  appTheme: "light",
};

const g = new GenerateId();
const STORAGE_KEY = { notes: "notes", appsTheme: "appsTheme" };
// Elements
const notesList = document.querySelector(".js-notes-list");
const card = document.querySelector(".js-card");
const form = document.querySelector(".js-form");
const btnDelete = document.querySelector(".js-delete-btn");
const themeToggler = document.querySelector(".js-theme-toggler");

setTheme(loadLS(STORAGE_KEY.appsTheme));

// Listeners
form.addEventListener("submit", onFormSubmit);
notesList.addEventListener("click", onBtnDeleteClick);
renderNotes(loadLS(STORAGE_KEY.notes));
themeToggler.addEventListener("click", onTogglerClick);
// Functions
function onFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const noteData = {
    id: g.generate(10),
    ...Object.fromEntries(new FormData(form)),
  };
  //   console.log(notesData);

  //Add new items in form
  store.notes = [...store.notes, noteData];
  saveLS(STORAGE_KEY.notes, store.notes);

  // Insert markup to list
  notesList.insertAdjacentHTML("beforeend", createNote(noteData));

  // Reset form
  form.reset();
}
function renderNotes(notes = []) {
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
                data-noteid="${id}"
            >Delete</button>
        </div>
      </li>
      `;
}
function setTheme(theme) {
  const currentTheme = theme ?? "light";
  currentTheme === "light"
    ? themeToggler
    : themeToggler.setAttribute("checked", "");
  themeToggler.value = currentTheme;
  document.documentElement.setAttribute("data-bs-theme", currentTheme);
  store.appTheme = currentTheme;
}
function onTogglerClick(event) {
  const currentTheme = store.appTheme === "light" ? "dark" : "light";
  setTheme(currentTheme);
  saveLS(STORAGE_KEY.appsTheme, currentTheme);
}

//  local Storage Service
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

//  Delete card
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
