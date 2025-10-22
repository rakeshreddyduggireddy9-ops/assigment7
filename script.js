// script.js

let count = 0;
const countDisplay = document.getElementById("count");
const savedCountsList = document.getElementById("savedCounts");

document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});

document.getElementById("saveBtn").addEventListener("click", () => {
  const listItem = document.createElement("li");
  listItem.textContent = count;
  savedCountsList.appendChild(listItem);

  // Reset count
  count = 0;
  countDisplay.textContent = count;
});
