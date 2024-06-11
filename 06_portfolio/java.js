document.addEventListener("DOMContentLoaded", function () {
  var toggles = document.querySelectorAll(".toggle_arrow");

  toggles.forEach(function (toggle) {
    toggle.addEventListener("click", function () {
      var hiddenInfo = this.closest(".cv_flex").nextElementSibling;
      if (hiddenInfo.style.display === "none" || hiddenInfo.style.display === "") {
        hiddenInfo.style.display = "block";
        this.querySelector("svg").classList.add("rotated");
      } else {
        hiddenInfo.style.display = "none";
        this.querySelector("svg").classList.remove("rotated");
      }
    });
  });
});

const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    nav.classList.remove("active");
  });
});
