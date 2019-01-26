console.log("Webserver is live");

const notes = [
  {
    title: "my next trip",
    body: "I would like to go to Spain"
  },
  {
    title: "Habbits to work on",
    body: "Exercise. Eating a bit better."
  },
  {
    title: "Office modification",
    body: "Get a new seat"
  }
];

document.querySelector("button").addEventListener("click", function(e) {
  console.log("Oh! you have clicked a button");
  console.log(e); //MouseEvent {isTrusted: true, screenX: 88, screenY: 271, clientX: 88, clientY: 200, …}
  console.log(e.target.textContent); //Create Notes
  e.target.textContent = "Button Clicked!";
});
