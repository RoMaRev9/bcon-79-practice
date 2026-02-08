// TODO: Get posts info
// console.log(posts);
const searchFormEL = document.querySelector(".search-form");
const postsEl = document.querySelector(".cards");
renderPosts(posts);
searchFormEl.addEventListener("submit", handleSearchForm);

function renderPosts(posts = []) {
  const markup = posts
    .map(
      ({
        id,
        title,
        body,
        tags,
        reactions: { likes, dislikes },
        views,
        userId,
      }) => {
        return `
        <article class="post" data-id="${id}">
          <h2>${title}</h2>
          <p>${body}</p>
          <div class="meta">
            <span>Tags: ${tags.join(", ")}</span>
            <span>Likes: ${likes} | Dislikes: ${dislikes}</span>
            <span>Views: ${views}</span>
          </div>
          <small>Author ID: ${userId}</small>
        </article>
      `;
      }
    )
    .join("");

  postsEl.innerHTML = markup;
}
function createTags(tags = []) {
  return tags
    .map(
      tag => `
      <li class="border border-dark rounded-1 text-center text-black-50 fw-lighter">
        <small>${tag}</small>
      </li>`
    )
    .join("");
}

function handleSearchForm(event) {
  event.preventDefault();

  const form = event.target;
  // Деструктуризація для отримання значення з інпуту за ім'ям "searchQuery"
  const {
    elements: {
      searchQuery: { value },
    },
  } = form;

  // Перевірка на порожній рядок або пробіли
  if (value.trim() === "") {
    const toast = new bootstrap.Toast(toastEl);
    toast.show();
    form.reset();
    return;
  }

  // Фільтрація масиву posts за вмістом тексту в body
  const filterPost = posts.filter(({ body }) => {
    return body.toLowerCase().includes(value.toLowerCase().trim());
  });

  // Виклик функції рендеру з відфільтрованим списком
  renderPosts(filterPost);

  form.reset();
}
