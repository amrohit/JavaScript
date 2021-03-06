let todos = [];

const filters = {
  searchText: "",
  hideCompleted: false
};
const todoJson = localStorage.getItem("todos");
if (todoJson !== null) {
  todos = JSON.parse(todoJson);
}

/* Naive way
const renderTodos = function(todos, filters) {
  let filteredTodos = todos.filter(function(todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  filteredTodos = filteredTodos.filter(function(todo) {
    console.log(!filters.hideCompleted || !todo.completed);

    return !filters.hideCompleted || !todo.completed;
    // if (filters.hideCompleted) {
    //   return !todo.completed;
    // } else {
    //   return true;
    // }
  });
*/

//smart way by merging and returning two sol together
const renderTodos = function(todos, filters) {
  const filteredTodos = todos.filter(function(todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
    return searchTextMatch && hideCompletedMatch;
  });
  const incompleteTodos = filteredTodos.filter(function(todo) {
    return !todo.completed;
  });

  document.querySelector("#todos").innerHTML = "";

  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  document.querySelector("#todos").appendChild(summary);

  filteredTodos.forEach(function(todo) {
    const p = document.createElement("p");
    p.textContent = todo.text;
    document.querySelector("#todos").appendChild(p);
  });
};

renderTodos(todos, filters);

document.querySelector("#search-text").addEventListener("input", function(e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

//Accessing form data
document.querySelector("#new-todo").addEventListener("submit", function(e) {
  e.preventDefault();
  todos.push({
    text: e.target.elements.text.value,
    completed: false
  });
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos(todos, filters);
  e.target.elements.text.value = "";
});

document
  .querySelector("#hide-completed")
  .addEventListener("change", function(e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
  });
