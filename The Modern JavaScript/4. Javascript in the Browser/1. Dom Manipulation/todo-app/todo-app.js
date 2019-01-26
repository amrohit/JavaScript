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

const paragraphs = document.querySelectorAll("p");
console.log(paragraphs); //NodeList(5) [p, p, p, p, p]
paragraphs.forEach(function(paragraph) {
  if (paragraph.textContent.includes("the")) {
    //paragraph.remove();
    // paragraph.innerHTML = "***";
    paragraph.innerText = "-----";
  }
});
