import { TodoList } from "./components/todo.js";
import { fetchJson } from "./functions/api.js";
import { createElement } from "./functions/dom.js";

try {
  const todo = await fetchJson(
    "https://jsonplaceholder.typicode.com/todos?_limit=5"
  );
  const list = new TodoList(todo);
  list.appendTo(document.querySelector("#todolist"));
} catch (error) {
  const div = createElement("div", {
    class: "alert alert-danger m-2",
    role: "alert",
  });
  div.innerText = "IMPOSSIBlE charger";
  document.body.prepend(div);
  console.error(error) 
}

