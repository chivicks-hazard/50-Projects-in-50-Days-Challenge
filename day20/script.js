const names = ["Mercy", "Jennifer", "Henry", "Dave", "Bohanos"];
const searchInput = document.getElementById("searchInput");
const nameList = document.getElementById("nameList");

function displayNames(names) {
  names.forEach((name) => {
    const li = document.createElement("li");
    li.textContent = name;
    nameList.appendChild(li);
  });
}

displayNames(names);

searchInput.addEventListener("input", (event) => {
  let name = event.target.value;

  let filteredNames = names.filter((filteredName) =>
    filteredName.includes(name),
  );

  if (filteredNames.length !== 0) {
    nameList.innerHTML = "";
    displayNames(filteredNames);
  } else {
    displayNames(names);
  }
});
