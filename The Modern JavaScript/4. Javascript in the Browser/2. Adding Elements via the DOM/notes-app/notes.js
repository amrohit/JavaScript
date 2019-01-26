console.log("Webserver is live");

//Query and remove
const p = document.querySelector("p");
//To remove dom element targeted above using querySelector
//p.remove();
//console.log(p)

//Query all and remove
const ps = document.querySelectorAll("p");
console.log(ps); //NodeList(2) [p, p]
//ps.forEach(p => p.remove()) //wiped aways all paragraph
ps.forEach(p => {
  //console.log(p.innerText);
  console.log(p.textContent);
  if (p.textContent.includes("Some")) {
    p.textContent = "****";
    // p.remove(); //remove paragraph starts with Some
  }
  // p.remove();
});

//Adding new Element
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a new element from JavaScript";
document.querySelector("body").appendChild(newParagraph);
