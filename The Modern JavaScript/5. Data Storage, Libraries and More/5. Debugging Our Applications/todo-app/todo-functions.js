//Fetch todos items from localStorage
const getSavedNotes = function() {
  const todoJson = localStorage.getItem("todos");
  if (todoJson !== null) {
    return JSON.parse(todoJson);
  } else {
    return [];
  }
};

//Saving ToDos notes
const saveTodos = function(todos, value) {
  todos.push({
    text: value,
    completed: false
  });
  localStorage.setItem("todos", JSON.stringify(todos));
};

//Render application based on todos filters
const renderTodos = function(todos, filters) {
  const filteredTodos = todos.filter(function(todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());

    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });
  //debugger will stop the exectution at this point of time
  //debugger; //to debug in chrome development tool
  const incompleteTodos = filteredTodos.filter(function(todo) {
    return !todo.completed;
  });
  //debugger; //2nd debugger
  document.querySelector("#todos").innerHTML = "";
  document
    .querySelector("#todos")
    .appendChild(generateSummaryDOM(incompleteTodos));

  filteredTodos.forEach(function(todo) {
    document.querySelector("#todos").appendChild(generateTodoDOM(todo));
  });
};

//Generate TodoDom
const generateTodoDOM = function(todo) {
  const p = document.createElement("p");
  p.textContent = todo.text;
  return p;
};

//Generate Summary DOM
const generateSummaryDOM = function(incompleteTodos) {
  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary;
};
