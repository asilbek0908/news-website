const menuBtn = document.querySelector("#menu__btn");
const navbar = document.querySelector(".navigation");
const header =document.querySelector("#header");
// Modal Js

const modal = document.querySelector(".modal");
const modalBtn = document.querySelector(".modal__btn");
const aboutLink = document.querySelector(".about__link");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
  menuBtn.classList.toggle("fa-times");
});

aboutLink.addEventListener("click", () => {
  modal.classList.add("modal__active");
});

modalBtn.addEventListener("click", () => {
  modal.classList.remove("modal__active");
});

window.onscroll = () => {
  menuBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
  header.classList.toggle("blur")
};

// Cards js

const cards = document.querySelector(".blog__cards")
let url ="https://api.themoviedb.org/3/discover/movie?api_key=050bd1261b2618b419b9862107c6077a";
const imgUrl = "https://image.tmdb.org/t/p/w500";
const loading = document.createElement("div");
cards.appendChild(loading);
loading.classList.add("loader");



async function fetchData(){
   try{
      const responce =await fetch (url);
      const data = await responce.json();
      cards.innerHTML = "";

      const slicedData =data.results.slice(0,3);
      slicedData.forEach((movie)=>{
        console.log(movie);
        
        const card =document.createElement("div")
        card.classList.add("blog__card")

        if(movie.backdrop_path !== null){
          card.innerHTML = `
          <div class="card">
              <div class="card__image">
                  <img src="${imgUrl}${movie.backdrop_path}" alt="${movie.overview}">
              </div>
              <h2 class="card__name">${movie.original_title}</h2>
              <p class="card__desc">${movie.overview}</p>
          </div>
          `
        }

      
        cards.appendChild(card)
      })
   }catch(error) {
     console.log(error);
   }
}


fetchData();