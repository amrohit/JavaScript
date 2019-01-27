console.log("Webserver is live");
//Note: .querySelector('#id') is used for ID
// and .querySelectorAll('.class') is used for selecting class elems
let notes = [
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

//Check for existing data
const notesJSON = localStorage.getItem("notes");
if (notesJSON !== null) {
  notes = JSON.parse(notesJSON);
}
//document.querySelector("button").addEventListener("click", function(e)
document.querySelector("#create-note").addEventListener("click", function(e) {
  notes.push({
    title: "",
    body: ""
  });
  localStorage.setItem("notes", JSON.stringify(notes));
  renderNotes(notes, filters);
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
    if (note.title.length > 0) {
      noteElem.textContent = note.title;
    } else {
      noteElem.textContent = "Unnamed note";
    }

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

document.querySelector("#filter-by").addEventListener("change", function(e) {
  console.log(e.target.value);
});
