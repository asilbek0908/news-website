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


//  blog js

const url ="https://reqres.in/api/users";
const userData =document.querySelector(".userData");
const form =document.querySelector(".form");


fetch(url).then((response)=>response.json()).then((data)=>{
 const userdata = data.data.slice(0,3)
  userdata.forEach((user)=>{
    console.log(user);
    const { first_name, avatar} = user;
    
    const div =document.createElement("div");
    div.classList.add("user__info")
    div.innerHTML=`
      <div  class="user__image">
         <img src="${avatar}">
      </div>
      <h1 class="user__name">${first_name}</h1>
      <p class="user__opinion"></p>
      <button class="delete__button" type="button">Delete</button>
    `
    userData.appendChild(div)
  
  })
})
.catch((error)=>console.log(error));

form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const id =document.getElementById("update-id")
  const name =document.getElementById("name")

  const text =document.getElementById("text")

  const formData ={
    id: id,
    name: name,
    text: text,
  }

});





fetch(url,{
    method: "POST",
    headers:{"Content-type": "application.json" },
    body: JSON.stringify(form)
}).then((response)=>response.json()).then((data)=>{
  
console.log(data)
  
  // data.forEach((user)=>{
  //   console.log(user);
  
    
  //   const div =document.createElement("div");
  //   div.classList.add("user__info")
  //   div.innerHTML=`
  //     <div  class="user__image">
  //        <img src="${avatar}">
  //     </div>
  //     <h1 class="user__name">${first_name}</h1>
  //     <p class="user__opinion"></p>
  //     <button class="delete__button" type="button">Delete</button>
  //   `
  //   userData.appendChild(div)
  
  // })



})
.catch((error)=>console.log(error))



// fetch(url,{
//   method: "Delete"
// })


// fetch(`${url}/${object}`, {
//   method: "Put",
//   headers:{"Content-type": "application.json" },
//   body: JSON.stringify({
//     name:"Asi",
//     age: 18,
//     id: 1,
//   })
// })