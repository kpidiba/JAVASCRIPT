function createArticle(post) {
  const article = document.createElement("article");
  article.innerHTML = "<h1>"+ post.name+"</h1>";
  return article;
}

const last = document.querySelector("#lastpost");
const p = document.createElement("p");
p.innerHTML = "loading...";
last.append(p);
let response = await fetch("https://jsonplaceholder.typicode.com/users");
if (response.ok) {
  p.remove();
  const val = await response.json();
  for (let value of val) {
    last.append(createArticle(value));
  }
} else {
  console.log("http error");
}
