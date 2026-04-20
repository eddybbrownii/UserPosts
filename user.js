const postListEl = document.querySelector ('.post-list');

function onSearchChange () {
  console.log (this.value);
}

async function main () {
  const id = localStorage.getItem ('id');
  const posts = await fetch (
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  const postsData = await posts.json ();
  const postListEl = document.querySelector ('.post-list');
  postListEl.innerHTML = postsData.map (post => postHTML (post)).join ('');

  postListEl.innerHTML = postsData
    .map (
      post => `
    <div class="post">
    <div class="post__title">
    ${post.title}
    </div>
    <p class="post__body">
    ${post.body}
    </p>
    </div>`
    )
    .join ('');
}

function postHTML (post) {}

main ();
