'use strict'
//Fetch todos items from localStorage
const getSavedNotes = function () {
  const todoJson = localStorage.getItem("todos");
  try {
    return todoJson ? JSON.parse(todoJson) ? [];
  } catch (e) {
    return [];
  }
};

//Saving ToDos notes
const saveTodos = function (todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
};

//Render application based on todos filters
const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());

    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

    return searchTextMatch && hideCompletedMatch;
  });
  //debugger will stop the exectution at this point of time
  //debugger; //to debug in chrome development tool
  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed;
  });
  //debugger; //2nd debugger
  document.querySelector("#todos").innerHTML = "";
  document
    .querySelector("#todos")
    .appendChild(generateSummaryDOM(incompleteTodos));

  filteredTodos.forEach(function (todo) {
    document.querySelector("#todos").appendChild(generateTodoDOM(todo));
  });
};

//Generate TodoDom
const generateTodoDOM = function (todo) {
  const todoEl = document.createElement("div");
  const checkbox = document.createElement("input");
  const todoText = document.createElement("span");
  const removeButton = document.createElement("button");

  //setup todo checkbox
  checkbox.setAttribute("type", "checkbox");
  checkbox.checked = todo.completed;
  todoEl.appendChild(checkbox);
  checkbox.addEventListener("change", function () {
    toggleTodos(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  //setup todo text
  todoText.textContent = todo.text;
  todoEl.appendChild(todoText);

  //setup the remove button
  removeButton.textContent = "x";
  removeButton.className = "btn btn-link";
  todoEl.appendChild(removeButton);
  removeButton.addEventListener("click", function () {
    console.log(todo);
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });

  return todoEl;
};

//toogle the completed value for a given todo
const toggleTodos = function (id) {
  const todo = todos.find(function (todo) {
    return todo.id === id;
  }); //if not matched it will return undefined
  if (todo !== undefined) {
    todo.completed = !todo.completed;
  }
};

//Removed todo by ID
const removeTodo = function (id) {
  const todoIndex = todos.findIndex(function (todo) {
    return todo.id == id;
  });
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

//Generate Summary DOM
const generateSummaryDOM = function (incompleteTodos) {
  const summary = document.createElement("h2");
  summary.textContent = `You have ${incompleteTodos.length} todos left`;
  return summary;
};