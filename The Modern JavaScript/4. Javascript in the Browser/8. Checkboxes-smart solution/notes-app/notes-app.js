console.log("Webserver is live");
//Note: .querySelector('#id') is used for ID
// and .querySelectorAll('.class') is used for selecting class elems
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

//document.querySelector("button").addEventListener("click", function(e)
document.querySelector("#create-note").addEventListener("click", function(e) {
  console.log("Oh! you have clicked a button");
  console.log(e); //MouseEvent {isTrusted: true, screenX: 88, screenY: 271, clientX: 88, clientY: 200, …}
  console.log(e.target.textContent); //Create Notes
  e.target.textContent = "Button Clicked!";
});

const filters = {
  searchText: ""
};
const renderNotes = function(notes, filters) {
  const filteredNotes = notes.filter(function(note) {
    //return note.title == filter.searchText;
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  console.log(filteredNotes);
  document.querySelector("#notes").innerHTML = "";
  filteredNotes.forEach(function(note) {
    const noteElem = document.createElement("p");
    noteElem.textContent = note.title;
    document.querySelector("#notes").appendChild(noteElem);
  });
};

renderNotes(notes, filters);
//we can also use input event for everysingle character(realtime)
document.querySelector("#search-text").addEventListener("change", function(e) {
  console.log(e.target.value);
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#for-fun").addEventListener("change", function(e) {
  console.log(e.target.checked);
});
