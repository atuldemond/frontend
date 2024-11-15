var home = document.querySelector(".home");
var about = document.querySelector(".about");
var contact = document.querySelector(".contact");

var home_details = document.querySelector("#home-details");
var about_details = document.querySelector("#about-details");
var contact_details = document.querySelector("#contact-details");

home_details.style.display = "none";
about_details.style.display = "none";
contact_details.style.display = "none";

home.addEventListener("click", () => {
  home_details.style.display = "block";
  about_details.style.display = "none";
  contact_details.style.display = "none";
});

about.addEventListener("click", () => {
  about_details.style.display = "block";
  contact_details.style.display = "none";
  home_details.style.display = "none";
});

contact.addEventListener("click", () => {
  contact_details.style.display = "block";
  home_details.style.display = "none";
  about_details.style.display = "none";
});
