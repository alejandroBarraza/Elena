// selecttors
const buttonBurguer = document.querySelector(".burguer-container");
const burguer = document.querySelector(".burguer");
const navBurguer = document.querySelector(".nav-links");

//event listener
buttonBurguer.addEventListener("click", () => {
  navBurguer.classList.toggle("open");
  burguer.classList.toggle("openCross");
});
