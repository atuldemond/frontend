const add = document.querySelector("#add");
const remove = document.querySelector("#remove");
const input = document.querySelector("#input");
const ul = document.querySelector("#item-list");

add.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = input.value;
  ul.appendChild(li);
  input.value = "";
});

remove.addEventListener("click", () => {
  const lastItem = ul.lastElementChild;
  if (lastItem) {
    ul.removeChild(lastItem);
    console.log("Removed");
  } else {
    console.log("No items to remove");
  }
});
