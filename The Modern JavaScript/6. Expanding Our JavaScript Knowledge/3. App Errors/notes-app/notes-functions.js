//Read existing notes from localStorage
const getSavedNotes = function () {
  const notesJSON = localStorage.getItem("notes");
  //handling .parse error if not valid json
  try {
    return notesJSON ? JSON.parse(notesJSON) : [];
  } catch (e) {
    //if valid JSON not found, return an empty array to handle the error
    return [];
  }
};

//Generate the DOM structure
const generateNoteDOM = function (note) {
  const noteElem = document.createElement("div");
  const textElem = document.createElement("a");
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
  textElem.setAttribute("href", `/edit.html#${note.id}`);
  noteElem.appendChild(textElem);
  noteElem.appendChild(button);
  button.addEventListener("click", function () {
    //console.log(note);
    removeNote(note.id);
    renderNotes(notes, filters);
    saveNotes(notes);
  });
  return noteElem;
};

//remove a note from list
const removeNote = function (id) {
  const noteIndex = notes.findIndex(function (note) {
    return note.id == id;
  });
  if (noteIndex > -1) {
    notes.splice(noteIndex, 1); //noteIndex, how many elem to remove
  }
};

//sort Notes by one of three ways
const sortNotes = function (notes, sortBy) {
  if (sortBy === "byEdited") {
    return notes.sort(function (a, b) {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      } else if (a.updatedAt < b.updatedAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "byCreated") {
    return notes.sort(function (a, b) {
      if (a.createdAt > b.createdAt) {
        return -1;
      } else if (a.createdAt < b.createdAt) {
        return 1;
      } else {
        return 0;
      }
    });
  } else if (sortBy === "alphabetical") {
    return notes.sort(function (a, b) {
      if (a.title.toLowerCase < b.title.toLowerCase) {
        return -1;
      } else if (a.title.toLowerCase > b.title.toLowerCase) {
        return 1;
      } else {
        return 0;
      }
    });
  } else {
    return notes;
  }
};

//Render application notes
const renderNotes = function (notes, filters) {
  notes = sortNotes(notes, filters.sortBy);
  const filteredNotes = notes.filter(function (note) {
    //return note.title == filter.searchText;
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
  });
  console.log(filteredNotes);
  document.querySelector("#notes").innerHTML = "";
  filteredNotes.forEach(function (note) {
    const noteEl = generateNoteDOM(note);
    document.querySelector("#notes").appendChild(noteEl);
  });
};

//Save notes to local storage
const saveNotes = function (notes) {
  localStorage.setItem("notes", JSON.stringify(notes));
};

//Generate the last edited message
const generateLastEdited = function (timestamp) {
  return `Last edited ${moment(timestamp).fromNow()}`;
};