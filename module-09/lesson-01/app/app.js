import refs from "./refs.js";
import { store } from "./store.js";
import { STORAGE_KEY } from "./variables.js";

// app store

const g = new GenerateId();

setTheme(loadLS(STORAGE_KEY.appsTheme));

// Listeners
refs.form.addEventListener("submit", onFormSubmit);
refs.notesList.addEventListener("click", onBtnDeleteClick);
renderNotes(loadLS(STORAGE_KEY.notes));
refs.themeToggler.addEventListener("click", onTogglerClick);
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
  refs.notesList.insertAdjacentHTML("beforeend", createNote(noteData));

  // Reset form
  form.reset();
}
function renderNotes(notes = []) {
  const markup = notes.map(createNote).join("");
  refs.notesList.innerHTML = markup;
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
    ? refs.themeToggler
    : refs.themeToggler.setAttribute("checked", "");
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
