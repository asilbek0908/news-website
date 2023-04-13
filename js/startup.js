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


  // lists js
  let url ="https://api.themoviedb.org/3/discover/movie?api_key=050bd1261b2618b419b9862107c6077a"
const imgUrl ='https://image.tmdb.org/t/p/w500';
const searchUrl ="https://api.themoviedb.org/3/search/movie?api_key=050bd1261b2618b419b9862107c6077a&query="
const movieList = document.querySelector(".movie__list");
const fragment = document.createDocumentFragment();
const searchMovie =document.querySelector(".search");
const btn =document.querySelector(".btn");
const loading = document.createElement("div");
const paginationWrapper = document.querySelector(".pagination_wrapper");
loading.classList.add("loader")
// loading.textContent = "Loading...";
movieList.appendChild(loading); 
let currentPage = 1;


async function fetchData(){
    
    const searchTerm =searchMovie.value;
    if(searchTerm) {
        url = `${searchUrl}${searchTerm}`
    } else{
        url = `https://api.themoviedb.org/3/discover/movie?api_key=050bd1261b2618b419b9862107c6077a&page=${currentPage}`;
    }

    try{
        const responce = await fetch(url);
        const data = await responce.json();
        movieList.innerHTML = "";
        searchMovie.value = '';
        // console.log(data.results);
        let totalPage = data.total_pages > 5 ? 5 :data.total_pages;
        if(data.results.length === 0){
            const notFound =document.createElement("div");
            notFound.textContent = "Not found any movie";
            movieList.appendChild(notFound);
        } else{
            data.results.forEach((movie) => {
                // console.log(movie)
                const img = document.createElement("img");
                const title = document.createElement("h2");
                // const ageLimit =document.createElement("h3");
                // fragment.appendChild(ageLimit);
                fragment.appendChild(img);
                fragment.appendChild(title);
                if (movie.backdrop_path !== null) {
                    
                   
                    title.textContent = movie.title;
                    img.src = `${imgUrl}${movie.backdrop_path}`;
                    img.alt = `${movie.title}`;
                   
                }
               
            });

            paginationWrapper.textContent="";
            if(totalPage > 1){
                for(let i =1; i<=totalPage;i++){
                    const button =document.createElement("button");
                    button.innerText = i;
                    if(currentPage === i){
                        button.classList.add("active");
                    }
                    button.addEventListener("click",()=>{
                        currentPage = i;
                        fetchData();
                    })
                    paginationWrapper.appendChild(button);
                }
            }
        }


      
        movieList.appendChild(fragment);
    } catch (error){
        console.log(error)
    }
}

btn.addEventListener("click",()=>{
  fetchData();
})