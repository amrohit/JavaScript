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
  const noteElem = document.createElement("div");
  const textElem = document.createElement("span");
  const button = document.createElement("button");
  //setup the remove note button
  button.textContent = " x ";
  button.className = "btn btn-link";
  //dont do below here since later textContent will overwrite it
  //  textElem.appendChild(button);

  //setup the note title text
  if (note.title.length > 0) {
    textElem.textContent = note.title;
  } else {
    textElem.textContent = "Unnamed note";
  }

  noteElem.appendChild(textElem);
  noteElem.appendChild(button);
  button.addEventListener("click", function() {
    //console.log(note);
    removeNote(note.id);
    renderNotes(notes, filters);
    saveNotes(notes);
  });
  return noteElem;
};

//remove a note from list
const removeNote = function(id) {
  const noteIndex = notes.findIndex(function(note) {
    return note.id == id;
  });
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1); //noteIndex, how many elem to remove
  }
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
