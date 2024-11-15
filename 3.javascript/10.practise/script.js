// Data array with name and image source
const data = [
  { name: "Alice Johnson", src: "https://via.placeholder.com/50" },
  { name: "Bob Smith", src: "https://via.placeholder.com/50" },
  { name: "Charlie Brown", src: "https://via.placeholder.com/50" },
  { name: "Daisy Miller", src: "https://via.placeholder.com/50" },
  { name: "Ethan Williams", src: "https://via.placeholder.com/50" },
  { name: "Fiona Davis", src: "https://via.placeholder.com/50" },
];

// Function to search and display results
function searchPeople() {
  const searchInput = document
    .getElementById("search-input")
    .value.toLowerCase();
  const resultsContainer = document.getElementById("results");

  // Clear previous results
  resultsContainer.innerHTML = "";

  // Filter the data based on search input
  const filteredData = data.filter((person) =>
    person.name.toLowerCase().includes(searchInput)
  );

  // Display filtered results
  filteredData.forEach((person) => {
    const resultItem = document.createElement("div");
    resultItem.classList.add("result-item");

    const img = document.createElement("img");
    img.src = person.src;

    const name = document.createElement("p");
    name.textContent = person.name;

    resultItem.appendChild(img);
    resultItem.appendChild(name);
    resultsContainer.appendChild(resultItem);
  });
}
