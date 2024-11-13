var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var btn = document.querySelector("button");

btn.addEventListener("click", () => {
  console.log("HIII");
  var value1 = img1.src;
  var value2 = img2.src;

  img1.src = value2;
  img2.src = value1;
});
