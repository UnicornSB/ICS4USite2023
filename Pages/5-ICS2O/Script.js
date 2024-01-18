// déclarer les différentes variables
const carousel = document.querySelector('.carousel');
const arrowbtns = document.querySelectorAll('.wrapper .material-icons ');
const firstItemWidth = carousel.querySelector(".item").offsetWidth;
const carouselChildrens = [... carousel.children];
const wrapper = document.querySelector('.wrapper');

let isdragging = false, startX, startScrollLeft, timeoutid;
 
let itemPerView = Math.round(carousel.offsetWidth / firstItemWidth)

//ajouter des images a l'extérieur du slider pour en avoir avant et après la taille de l'écran
carouselChildrens.slice(-itemPerView).reverse().forEach(item => {
    carousel.insertAdjacentHTML("afterbegin", item.outerHTML)
})

carouselChildrens.slice(0, itemPerView).forEach(item => {
    carousel.insertAdjacentHTML("beforeEnd", item.outerHTML)
})

// permet de deplacer les images à l'aide des fleches
arrowbtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id === "left" ? - firstItemWidth : firstItemWidth;
    })
})

// Constant qui permet de determiner si le curseur est en mesure de bouger la barre d'option
const draggingstart = (e ) =>    {
    isdragging = true;
    carousel.classList.add("dragging");

//  Determine la position initiale de la barre d'option
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

// Permet de "drag" le menu
const dragging = (e) =>    {
    if(!isdragging) return;
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

// Determine quand arreter de deplacer le menu d'option
const draggingstop = () =>   {
    isdragging = false;
    carousel.classList.remove("dragging");
}
// permet de continuellement bouger les modules du slider
const autoplay = () => {
    if(window.innerWidth < 800) return;
    timeoutid = setTimeout(() => carousel.scrollLeft += firstItemWidth, 2500)
}
autoplay();

//Permet d'avoir un slider infini
const infiniteScroll = () => {
    if(carousel.scrollLeft === 40) {
        document.getElementById("test").style.scrollBehavior = 'auto'
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        document.getElementById("test").style.scrollBehavior = 'smooth'
    }
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth){
        document.getElementById("test").style.scrollBehavior = 'auto'
        carousel.scrollLeft = carousel.offsetWidth;
        document.getElementById("test").style.scrollBehavior = 'smooth'
    }
    // Math.ceil permet d'arrondir à l'integer le plus proche
    //Enlève le hover quand l'utilisateur est sur le slider
    clearTimeout(timeoutid);
    if(!wrapper.matches(":hover")) autoplay();

}
function menubas() {
    document.getElementById("myDropdown").classList.toggle("montre");
  }
    window.onclick = function(event) {
    if (!event.target.matches('.menubtn')) {
      var dropdowns = document.getElementsByClassName("main-button-red-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('montre')) {
          openDropdown.classList.remove('montre');
        }
      }
    }
  }

// Declaration des mouvements
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mousedown", draggingstart);
document.addEventListener("mouseup", draggingstop);
carousel.addEventListener("scroll", infiniteScroll)
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutid));
wrapper.addEventListener("mouseleave", autoplay);
