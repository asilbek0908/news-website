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


//  Register.js 

const fromInput =document.querySelector(".form");
const nameInput =document.querySelector(".input__name");
const userInput =document.querySelector(".input__user");
const passwordInput =document.querySelector(".input__password");
const confirmInput =document.querySelector(".input__confirmation");
const surnameInput =document.querySelector(".input__surname");
const formSpan =document.querySelectorAll(".text");
const btn =document.querySelector(".btn");

const check = (e)=>{
  e.preventDefault();
  if(!nameInput.value){
    formSpan[0].textContent = `Please enter your name!`
    nameInput.classList.add("warn");
  }else{
    formSpan[0].textContent ="";
    nameInput.classList.remove("warn");
  }

  if(!userInput.value){
    formSpan[2].textContent=`Please enter your username!`;
    userInput.classList.add("warn");
  } else{
    formSpan[2].textContent="";
    userInput.classList.remove("warn");
  }

  if(!surnameInput.value){
    formSpan[1].textContent=`Please enter your surname!`;
    surnameInput.classList.add("warn");
  } else{
    formSpan[1].textContent="";
    surnameInput.classList.remove("warn");
  }

  if(!passwordInput.value){
    formSpan[3].textContent=`Please enter your password!`;
    passwordInput.classList.add("warn");
  } else{
    formSpan[3].textContent="";
    passwordInput.classList.remove("warn");
  }

  if(confirmInput.value !== passwordInput.value){
    formSpan[4].textContent=`Password does not match!`;
    confirmInput.classList.add("warn");
  } else{
    formSpan[4].textContent="";
    confirmInput.classList.remove("warn");
  }

  fromInput.reset();
}


fromInput.addEventListener("submit",check);