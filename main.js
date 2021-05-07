// selecttors
const buttonBurguer = document.querySelector(".burguer-container");
const burguer = document.querySelector(".burguer");
const navBurguer = document.querySelector(".nav-links");
let menuOpen = false;

//event listener
buttonBurguer.addEventListener("click", () => {
  if (!menuOpen) {
    buttonBurguer.classList.add("open");
    navBurguer.style.top = 0;
    menuOpen = true;
  } else {
    buttonBurguer.classList.remove("open");
    navBurguer.style.top = `100%`;
    menuOpen = false;
  }
});
