import store from "./store.js";

const render = () => {
    const todos = document.querySelector(".todos");

      const todoElements = store.todos.map((element) => 
    `<li class="todo" data-id=${element.id}>
        <span class="todo-title ${element.completed ? "completed" : ""}">${element.title}</span>
        <div class="toggle-delete">
          <input type="checkbox" name="completed" class="todo-checkbox" ${element.completed?"checked":""}>
          <button class="delete-todo-button">x</button>
        </div>
      </li>`
    )
    .join("");
    todos.innerHTML = todoElements
    // console.log(todoElements)
}

export default render;