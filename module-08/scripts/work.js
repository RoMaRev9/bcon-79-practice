const searchFormEL = document.querySelector(".form");
const postsEl = document.querySelector(".cards");

function renderPosts(posts = []) {
  posts.map(({id,
     title,
      body,
       tags,
        reactions: [likes,dislikes]
         views,
          userId,
           coverImage}) => {
    return `
     <li class="card border-dark mb-3" data-userid="121">
            <img
              src="${coverImage}",
              class="card-img-top"
              alt="${title}"
              height="300"
            />

            <div class="card-body">
              <h5 class="card-title">${title}</h5>
              <hr />
              <div class="card-meta mb-3">
                <div class="card-meta-tags">
                  <p class="m-0 text-black-50 fw-lighter">
                    <i class="bi bi-tag"></i>
                  </p>
                  <ul class="tags-list">
                  ${createTags(tags)}
                    // <li
                    //   class="border border-dark rounded-1 text-center text-black-50 fw-lighter"
                    // >
                    //   <small>history</small>
                    // </li>
                    <li
                      class="border border-dark rounded-1 text-center text-black-50 fw-lighter"
                    >
                      <small>american</small>
                    </li>
                    <li
                      class="border border-dark rounded-1 text-center text-black-50 fw-lighter"
                    >
                      <small>crime</small>
                    </li>`;
  });
  .join("");
}

function createTags(tags = []){
return tags.map(
    (tag)
=> {
    return `<li
                      class="border border-dark rounded-1 text-center text-black-50 fw-lighter"
                    >
                      <small>${teg}</small>
                    </li>
    `
 
}).join("");

}