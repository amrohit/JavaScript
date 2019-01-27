console.log("Webserver is live");
//Note: .querySelector('#id') is used for ID
// and .querySelectorAll('.class') is used for selecting class elems
const notes = getSavedNotes();
const filters = {
  searchText: ""
};
renderNotes(notes, filters);
//document.querySelector("button").addEventListener("click", function(e)
document.querySelector("#create-note").addEventListener("click", function(e) {
  notes.push({
    title: "",
    body: ""
  });
  saveNotes(notes);
  renderNotes(notes, filters);
});

//we can also use input event for everysingle character(realtime)
document.querySelector("#search-text").addEventListener("change", function(e) {
  filters.searchText = e.target.value;
  renderNotes(notes, filters);
});

document.querySelector("#filter-by").addEventListener("change", function(e) {
  console.log(e.target.value);
});
