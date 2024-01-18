//------------------- Crée toutes les composants du div lesson qui seront utilisées pour le js
let btnL = document.querySelector('#btnFL'); 
let blockL = false;
let ListLesson = document.querySelectorAll('#les');
let divLesson = document.querySelector('#div-lesson');
let lesson = document.querySelector('.lesson');
divLesson.style.display = "none";
lesson.style.paddingTop= '5px';
//------------------- Crée toutes les composants du div travail qui seront utilisées pour le js
let btnT = document.querySelector('#btnFT');
let blockT = false;
let ListTravail = document.querySelectorAll('#tra');
let divTravail = document.querySelector('#div-travail');
let travail = document.querySelector('.travail');
divTravail.style.display = "none";
travail.style.paddingTop = '5px';
//------------------- Crée toutes les composants extra qui seront utilisées pour le js
let titre = document.querySelector('#titre');
let foot = document.querySelector('footer');
// Fixe le padding des titres
let center = document.querySelector('.Centre');
let formative = document.querySelector('.formative');

//------------------- Fonction qui ouvre les lessons
function toggleDropdownL() {
    divLesson.style.height = CSS.px(ListLesson.length * 35); //Trouve l'hauteur plus grande entre div Lesson et div Travail
    if (!blockL) { //Si le div n'est pas ouvert
        divLesson.style.background = "#676565"; //Ajoute une couleur d'arrière plan
        divLesson.style.display = "block"; //Rend le text visible
        blockL = true; //Défini que le div est ouvert
    }
    else{
        divLesson.style.display = "none"; //Rend le text invisible
        blockL = false; //Défini que le div est fermé
    }
}

//------------------- Fonction qui ouvre les travaux
function toggleDropdownT() {
    divTravail.style.height = CSS.px(ListTravail.length * 50);
    if (!blockT) {
        divTravail.style.background = "#999999";
        divTravail.style.display = "block";
        blockT = true;
    }
    else{
        divTravail.style.display = "none";
        blockT = false;
    }
}
//Ajoute l'évènement au bouttons
btnL.addEventListener("click", toggleDropdownL);
btnT.addEventListener("click", toggleDropdownT);



