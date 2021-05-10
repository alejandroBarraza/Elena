// selectors
const buttonBurguer = document.querySelector(".burguer-container");
const burguer = document.querySelector(".burguer");
const navBurguer = document.querySelector(".nav-links");
const links = document.querySelectorAll("a");

//event listener
buttonBurguer.addEventListener("click", () => {
  navBurguer.classList.toggle("open");
  burguer.classList.toggle("openCross");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    navBurguer.classList.toggle("open");
    burguer.classList.toggle("openCross");
  });
});
