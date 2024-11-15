var form = document.querySelector("form");
var inp1 = document.querySelector("#inp1");
var inp2 = document.querySelector("#inp2");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (inp1.value === "" || inp2.value === "") {
    alert("Please Enter All Valuess");
  }
});
