const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
   // option 1
   // if (links.classList.contains("show-links")) {
   //    links.classList.remove("show-links");
   // } else {
   //    links.classList.add("show-links");
   // }

   // option 2
   links.classList.toggle("show-links");
})