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


  // login js
const fromInput =document.querySelector(".form");
const userInput =document.querySelector(".input__user");
const passwordInput =document.querySelector(".input__password");
const formSpan =document.querySelectorAll(".text");
const btn =document.querySelector(".btn");

const check = (e)=>{
  e.preventDefault();
  if(!userInput.value){
    formSpan[0].textContent=`Please enter your username!`;
    userInput.classList.add("warn");
  } else{
    formSpan[0].textContent="";
    userInput.classList.remove("warn");
  }

  if(!passwordInput.value){
    formSpan[1].textContent=`Please enter your password!`;
    passwordInput.classList.add("warn");
  } else{
    formSpan[1].textContent="";
    passwordInput.classList.remove("warn");
  }

  fromInput.reset();

}

fromInput.addEventListener("submit",check);