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

//Unix Epach - January 1st 1970 00:00:00
//0 shows above exact time
//if we want to move in the future we would add + milliseconds
//if we want to move in future we would add - milliseconds unix Epach
//getting time stamp
const timeStamp = new Date().getTime();
console.log(timeStamp); //shows current time in milliseconds
const myDate = new Date(timeStamp).getFullYear();
console.log(myDate); //2019

/*
const now = new Date();
console.log(now.toString());
console.log(`Year: ${now.getFullYear()}`);
console.log(`Month: ${now.getMonth()}`);
console.log(`Day of month: ${now.getDate()}`);
console.log(`Hours: ${now.getHours()}`);
console.log(`Minutes: ${now.getMinutes()}`);
console.log(`Seconds: ${now.getSeconds()}`);

const then = new Date("December 25 1992 06:25:01");
console.log(then.toString());
console.log(`Year: ${then.getFullYear()}`);
console.log(`Month: ${then.getMonth()}`);
console.log(`Day of month: ${then.getDate()}`);
console.log(`Hours: ${then.getHours()}`);
console.log(`Minutes: ${then.getMinutes()}`);
console.log(`Seconds: ${then.getSeconds()}`);

*/

//challenges

const dateOne = new Date("March 1 2018 12:00:00");
const dateTwo = new Date();
const dateOneTimestamp = dateOne.getTime();
const dateTwoTimestamp = dateTwo.getTime();
if (dateOneTimestamp < dateTwoTimestamp) {
  console.log(dateOne.toString()); //condition wins
} else if (dateTwoTimestamp < dateOneTimestamp) {
  console.log(dateTwo.toString());
}
