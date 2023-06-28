let counterElement = document.getElementById("people-count");
let addButton = document.getElementById("increment-btn");
let saveButton = document.getElementById("save-btn");
let prevEntry = document.getElementById("previous-entry");
let counter = 0;

function add() {
  counter += 1;
  counterElement.textContent = counter;
}
function save() {
  if (counter != 0) {
    prevEntry.textContent += " " + counter + " - ";
    counter = 0;
    counterElement.textContent = counter;
  }
}
