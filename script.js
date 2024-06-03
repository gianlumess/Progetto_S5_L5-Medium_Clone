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

// Funzione per selezionare un elemento random
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//funzione che anima l'svg nell'header

function changeOpacity() {
  const svgArray = document.getElementById("heroSvg");
  //trasformo l'HTML COLLECTION in un ARRAY per poter usare .filter()
  const gElements = Array.from(svgArray.getElementsByTagName("g"));

  // Filtra gli elementi con stroke-miterlimit="4"
  const onlyM = gElements.filter(
    (g) => g.getAttribute("stroke-miterlimit") == "4"
  );

  if (onlyM.length > 0) {
    const randomG = getRandomElement(onlyM);

    // Cambia l'opacità
    if (randomG.getAttribute("opacity") == "1") {
      randomG.setAttribute("opacity", "0");
    } else {
      randomG.setAttribute("opacity", "1");
    }
  }
}

window.onload = () => {
  setInterval(changeOpacity, 50);
};
