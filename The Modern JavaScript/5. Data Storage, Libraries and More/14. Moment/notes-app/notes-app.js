console.log("Webserver is live");
console.log(uuidv4()); //every page refresh, we get new unique id
//Note: .querySelector('#id') is used for ID
// and .querySelectorAll('.class') is used for selecting class elems
let notes = getSavedNotes();
const filters = {
  searchText: ""
};
renderNotes(notes, filters);
//document.querySelector("button").addEventListener("click", function(e)
document.querySelector("#create-note").addEventListener("click", function(e) {
  const id = uuidv4();
  notes.push({
    id: id,
    title: "",
    body: ""
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
  console.log(e.target.value);
});

//listening to storage events to sync data between different pages
window.addEventListener("storage", function(e) {
  if (e.key === "notes") {
    notes = JSON.parse(e.newValue);
    renderNotes(notes, filters);
  }
});

/*
const now = moment();
console.log(now.toString()); //Sun Jan 27 2019 19:20:24 GMT+0530
//now.minute(1); //setting minute of hours to 01
//console.log(now.minute()); //minute of time

now.add(1, "year").subtract(20, "days"); //Tue Jan 07 2020 19:25:40 GMT+0530
console.log(now.toString());
//Novemenber 3rd, 2003
console.log(now.format("MMMM Do, YYYY")); //January 7th, 2020
console.log(now.fromNow());
//now.subract(1, "week").subtract(20, "days");
//console.log(now.fromNow()); 1 week ago

const nowTimeStamp = now.valueOf();
console.log(nowTimeStamp); //1578405836728
console.log(moment(nowTimeStamp).toString()); //Tue Jan 07 2020 19:34:52 GMT+0530

*/

const birthday = moment();
birthday
  .year(1992)
  .month(11)
  .date(25);
console.log(birthday.format("MMM D, YYYY")); //Dec 25, 1992
