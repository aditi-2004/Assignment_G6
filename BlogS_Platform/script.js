const blogContainer = document.getElementById("blog-container");
const searchInput = document.getElementById("search");
const categoryInput = document.getElementById("category-filter");

function renderBlogs(blogs) {
  blogContainer.innerHTML = blogs.map(blog => `
    <div class="blog-card">
      <h2>${blog.title}</h2>
      <p>${blog.description}</p>
      <p><strong>Author:</strong> ${blog.author}</p>
      <p><strong>Published by:</strong> ${blog.publishedBy} on ${blog.date}</p>
      <p><strong>Category:</strong> ${blog.category}</p>
      <a href="${blog.url}" target="_blank">Read Blog</a>
    </div>
  `).join("");
}

let blogs = blogData;
renderBlogs(blogs);

let debounceTimer;
categoryInput.addEventListener("input", () => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    let keyword = categoryInput.value.toLowerCase();
    let filtered = blogs.filter(b => b.category.toLowerCase().includes(keyword));
    renderBlogs(filtered);
  }, 300);
});

searchInput.addEventListener("input", () => {
  let keyword = searchInput.value.toLowerCase();
  let filtered = blogs.filter(b => b.title.toLowerCase().includes(keyword));
  renderBlogs(filtered);
});
