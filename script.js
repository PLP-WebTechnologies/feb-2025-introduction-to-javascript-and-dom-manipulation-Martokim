function changeText() {
  const paragraph = document.getElementById("intro");
  paragraph.textContent = "The text has been updated using JavaScript!";
}

function changeStyle() {
  const title = document.getElementById("main-title");
  title.classList.toggle("highlight");
}

function addElement() {
  const ul = document.getElementById("list-container");
  const newItem = document.createElement("li");
  newItem.textContent = "New Item";
  ul.appendChild(newItem);
}

function removeElement() {
  const ul = document.getElementById("list-container");
  if (ul.lastElementChild) {
    ul.removeChild(ul.lastElementChild);
  }
}
