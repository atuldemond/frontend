var h3 = document.querySelector("h3");
var start = document.querySelector("#start");
var stop = document.querySelector("#stop");
var clear;
start.addEventListener("click", () => {
  count = 0;
  clear = setInterval(() => {
    h3.innerText = count;
    count++;
  }, 1000);
});
stop.addEventListener("click", () => {
  clearInterval(clear);
});
