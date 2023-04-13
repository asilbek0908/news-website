// Navbar js

const menuBtn = document.querySelector("#menu__btn");
const navbar = document.querySelector(".navigation");
const header =document.querySelector("#header");


menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuBtn.classList.toggle("fa-times");
  });

  window.onscroll = () => {
    menuBtn.classList.remove("fa-times");
    navbar.classList.remove("active");
    header.classList.toggle("blur")
  };