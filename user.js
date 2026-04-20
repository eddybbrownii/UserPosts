async function main () {
  const id = localStorage.getItem ('id');
  const posts = await fetch (
    `https://jsonplaceholder.typicode.com/posts?userId=${id}`
  );
  const postsData = await posts.json ();
  const postListEl = document.querySelector ('.post-list');
  postListEl.innerHTML = postsData.map (post => postHTML (post)).join ('');

  postsData.map (
    post => `
    <div class="post">
    <div class="post__title">
    <h3>${post.title}</h3>
    </div>
    <div class="post__body">
    <p>${post.body}</p>
    </</div>`
  );
}

main ();
