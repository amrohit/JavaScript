let todos = getSavedNotes();

const filters = {
  searchText: "",
  hideCompleted: false
};

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

renderTodos(todos, filters);

document.querySelector("#search-text").addEventListener("input", function(e) {
  filters.searchText = e.target.value;
  renderTodos(todos, filters);
});

//Accessing form data
document.querySelector("#new-todo").addEventListener("submit", function(e) {
  e.preventDefault();
  saveTodos(todos, e.target.text.value);
  renderTodos(todos, filters);
  e.target.elements.text.value = "";
});

document
  .querySelector("#hide-completed")
  .addEventListener("change", function(e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
  });
