//funzione che allo scroll modifica il colore

window.addEventListener("scroll", function () {
  const button = document.getElementById("navButton");
  const navbar = document.querySelector("nav");
  const scrollPoint = 350;

  if (window.scrollY >= scrollPoint) {
    button.classList.add("scrolledButton");
    navbar.classList.add("scrolledNav");
    console.log(navbar);
    console.log(button);
  } else {
    button.classList.remove("scrolledButton");
    navbar.classList.remove("scrolledNav");
  }
});
