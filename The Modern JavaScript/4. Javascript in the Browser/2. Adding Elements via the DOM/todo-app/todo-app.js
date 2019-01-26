const todos = [
  {
    text: "Order cat food",
    completed: false
  },
  {
    text: "Clean kitchen",
    completed: true
  },
  {
    text: "Buy food",
    completed: true
  },
  {
    text: "Do work",
    completed: false
  },
  {
    text: "Exercise",
    completed: true
  }
];

//you have 2 todos left (p element)
//Add a p for each to do above (use text value)

const incompleteTodos = todos.filter(todo => !todo.completed);

const summary = document.createElement("h2");
summary.textContent = `You have ${incompleteTodos.length} todos left`;

document.querySelector("body").appendChild(summary);

todos.forEach(todo => {
  const p = document.createElement("p");
  p.textContent = todo.text;
  document.querySelector("body").appendChild(p);
});
