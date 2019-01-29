'use strict'

console.log("Webserver is live");
console.log(uuidv4()); //every page refresh, we get new unique id
//Note: .querySelector('#id') is used for ID
// and .querySelectorAll('.class') is used for selecting class elems
let notes = getSavedNotes();
const filters = {
  searchText: "",
  sortBy: "byEdited"
};
renderNotes(notes, filters);
//document.querySelector("button").addEventListener("click", function(e)
document.querySelector("#create-note").addEventListener("click", function(e) {
  const id = uuidv4();
  const timestamp = moment().valueOf();
  notes.push({
    id: id,
    title: "",
    body: "",
    createdAt: timestamp,
    updatedAt: timestamp
  });
  saveNotes(notes);
  //renderNotes(notes, filters);
  location.assign(`/edit.html#${id}`);
});

//we can also use input event for everysingle character(realtime)
document.querySelector("#search-text").addEventListener("change", function(e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", function(e) {
  //console.log(e.target.value);
  filters.sortBy = e.target.value;
  renderNotes(notes, filters);
});

//listening to storage events to sync data between different pages
window.addEventListener("storage", function(e) {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});
