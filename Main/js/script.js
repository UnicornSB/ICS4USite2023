// Attente que la fenêtre soit entièrement chargée
window.onload = () => {
  // Sélectionne le premier élément avec la classe "menu-trigger"
  let menu = [...document.getElementsByClassName("menu-trigger")][0];

  // Ajoute un écouteur d'événement pour le clic sur le bouton de menu
  menu.addEventListener("click", function() {
      // Alterne la classe "active" sur le bouton de menu
      menu.classList.toggle("active");

      // Sélectionne la balise de navigation dans la zone d'en-tête
      let nav = document.querySelector('.header-area .nav');

      // Affiche ou masque la navigation en fonction de son état actuel
      if (nav.style.display === "block") {
          nav.style.display = "none";
      } else {
          nav.style.display = "block";
      }
  });
}

// Obtient l'élément du bouton 1
const button1 = document.getElementById('button1');

// Ajoute un écouteur d'événement au clic sur le bouton 1
button1.addEventListener('click', function() {
  // Alterne la classe 'show' sur l'élément collapsible (collapseOne)
  const collapseOne = document.getElementById('collapseOne');
  collapseOne.classList.toggle('show');
  // Alterne la classe 'collapsed' sur le bouton 1
  button1.classList.toggle('collapsed');
});

// Répète le processus pour les boutons 2, 3, et 4 avec des commentaires similaires
const button2 = document.getElementById('button2');
button2.addEventListener('click', function() {
  const collapseTwo = document.getElementById('collapseTwo');
  collapseTwo.classList.toggle('show');
  button2.classList.toggle('collapsed');
});
const button3 = document.getElementById('button3');
button3.addEventListener('click', function() {
    const collapseThree = document.getElementById('collapseThree');
    collapseThree.classList.toggle('show');
    button3.classList.toggle('collapsed');
});

const button4 = document.getElementById('button4');
button4.addEventListener('click', function() {
    const collapseFour = document.getElementById('collapseFour');
    collapseFour.classList.toggle('show');
    button4.classList.toggle('collapsed');
});