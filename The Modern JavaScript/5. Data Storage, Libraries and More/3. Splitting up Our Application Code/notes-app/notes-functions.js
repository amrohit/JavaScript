//Read existing notes from localStorage
const getSavedNotes = function() {
  const notesJSON = localStorage.getItem("notes");
  //Check for existing data
  if (notesJSON !== null) {
    return JSON.parse(notesJSON);
  } else {
    return [];
  }
};

//Generate the DOM structure
const generateNoteDOM = function(note) {
  const noteElem = document.createElement("p");
  if (note.title.length > 0) {
    noteElem.textContent = note.title;
  } else {
    noteElem.textContent = "Unnamed note";
  }
  return noteElem;
};

//Render application notes
const renderNotes = function(notes, filters) {
  const filteredNotes = notes.filter(function(note) {
    //return note.title == filter.searchText;
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  console.log(filteredNotes);
  document.querySelector("#notes").innerHTML = "";
  filteredNotes.forEach(function(note) {
    const noteEl = generateNoteDOM(note);
    document.querySelector("#notes").appendChild(noteEl);
  });
};

//Save notes to local storage
const saveNotes = function(notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
};
