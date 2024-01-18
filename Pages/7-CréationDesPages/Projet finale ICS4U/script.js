let breaker = false;
let disactivator = false;
initSlider = () => {
  const divList = document.querySelector(".slider-wrapper .div-list");
  const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
  const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
  const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
  // Tout le script ici est pour le mouvement du slider (pris du vidéo)

  // Longeur totale du slider
  const updateMaxScrollLeft = () => {
      const visibleItems = Array.from(divList.children).filter(item => window.getComputedStyle(item).display !== 'none');
      const totalWidth = visibleItems.reduce((total, item) => total + item.offsetWidth, 0);
      const containerWidth = divList.clientWidth;
      return Math.max(0, totalWidth - containerWidth);
  }

  // Position du slider
  const updateScrollThumbPosition = () => {
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;
      const scrollPosition = divList.scrollLeft;
      const thumbPosition = (scrollPosition / maxScrollLeft) * maxThumbPosition;
      scrollbarThumb.style.left = `${thumbPosition}px`;
  }

  // Initializer les bouttons
  const handleSlideButtons = () => {
      slideButtons[0].style.display = divList.scrollLeft <= 0 ? "none" : "flex";
      slideButtons[1].style.display = divList.scrollLeft >= maxScrollLeft ? "none" : "flex";
  }

  // Change le position du scroll bar
  scrollbarThumb.addEventListener("mousedown", (e) => {
      const startX = e.clientX;
      const thumbPosition = scrollbarThumb.offsetLeft;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;

      const handleMouseMove = (e) => {
          const deltaX = e.clientX - startX;
          const newThumbPosition = thumbPosition + deltaX;

          const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
          const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

          scrollbarThumb.style.left = `${boundedPosition}px`;
          divList.scrollLeft = scrollPosition;
      }

      // Ajoute les event listeners
      const handleMouseUp = () => {
          document.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseup", handleMouseUp);
      }

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
  });

  // désactive le scroll bar si il y a deux ou moins d'unités
  if(disactivator){
    scrollbarThumb.hidden = true;
  }else{
    scrollbarThumb.hidden = false;
  }

  // Ajoute des bouttons au partie des unités 
  slideButtons.forEach(button => {
      button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = divList.clientWidth * direction;
          divList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
  });

  divList.addEventListener("scroll", () => {
      updateScrollThumbPosition();
      handleSlideButtons();
  });

  let maxScrollLeft = updateMaxScrollLeft(); // Initial calculation

  return {
      updateMaxScrollLeft,
      updateScrollThumbPosition,
      handleSlideButtons
  };
}

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);

// Le js ici est pour le menu dropdown qui laisse choisir le nombre d'unité
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      let dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  // Cette section est la fonction qui permet de downloader le fichier de données
  function saveTextAsFile() {
      let displayCode = document.getElementById('code').value;
      let displayTitle = document.getElementById('titre').value;
      let displayDesc = document.getElementById('desc1').value;
      let displayAtt = document.getElementById('desc2').value;
      let displayImages =  document.getElementById('Images').value;
      let unit1 = JSON.parse(localStorage.getItem("unit1"));
      let unit2 = JSON.parse(localStorage.getItem("unit2"));
      let unit3 = JSON.parse(localStorage.getItem("unit3"));
      let unit4 = JSON.parse(localStorage.getItem("unit4"));
      let unit5 = JSON.parse(localStorage.getItem("unit5"));
      // Ajouter les unités du LocalStorage 
      let units = ["Unité 1: " + unit1 + "\r\n", "Unité 2: " + unit2 + "\r\n", "Unité 3: " + unit3 + "\r\n", "Unité 4: " + unit4 + "\r\n", "Unité 5: " + unit5 + "\r\n"]
      let textToSaveAsBlob = new Blob(["Code du cours: " + displayCode + "\r\n" + "Titre du cours: " + displayTitle + "\r\n" + "Description du cours: " + displayDesc + "\r\n" + "Attentes du cours: " + displayAtt + "\r\n" + "Lien vers l'image de fond du cours: " + displayImages + "\r\n" +  "Unités" + "\r\n" + units], {type:"text/plain"});
      let textToSaveAsURL = window.URL.createObjectURL(textToSaveAsBlob);
      let fileNameToSaveAs = "Données-de-la-page.txt";
      let downloadLink = document.createElement("a");
      downloadLink.download = fileNameToSaveAs;
      downloadLink.innerHTML = "Download File";
      downloadLink.href = textToSaveAsURL;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
      downloadLink.click();
    }  
    
    // Ce js permet de choisir le nombre d'unités, et ensuite faire apparaître les unités dans le slider
    document.addEventListener('DOMContentLoaded', function() {
    let menuItems = document.querySelectorAll('.menuItem');
    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener('click', function() {
            // Montre le montant d'unités choisis
            if(menuItem.textContent == 1){
              document.getElementById('nombreUnite').textContent = menuItem.textContent + " unité a été créée";
            }else{
              document.getElementById('nombreUnite').textContent = menuItem.textContent + " unités ont été créées";
            }
            // Animation
            document.getElementById('units').style.visibility = "visible";
            document.getElementById('units').style.animation = "unitIn 1s ease"
            document.getElementById('units').style.animationFillMode = "forwards"

            // montre le montant de unités choisis
            for(i = 1; i < 6; i++){
              document.getElementById("u"+i).hidden = false;
            }
            for(i = 5; i>menuItem.textContent; i--){
              document.getElementById("u"+i).hidden = true;
            }
            // Ferme le slider si il y a 2 ou moins d'unités
            if(menuItem.textContent<=2){
              disactivator = true;
            }else{
              disactivator = false;
            }
            // re-initialise le slider
            initSlider();
            // Ouvre une nouveau window lorsqu'on clique sur le boutton (1 pour chaque unité)
            let unitButtons = document.querySelectorAll('.uniting');
            unitButtons.forEach(function(unit){
              if(!breaker){
                unit.addEventListener('click', function() {
                  localStorage.setItem("unitNumber", unit.id.substring(unit.id.length - 1));
                  window.open("indexUnits.html", '_blank');
                });
              }
            });
            breaker = true;
        });
    });
      document.getElementById('startCreation').addEventListener("click", function(){
      document.getElementById('animationslidein').style.display = "block";
      document.getElementById('startCreation').hidden = true;
    });
    // Ce js est pour vérifier que les données soient entrer correctement dans les inputs
    document.getElementsByClassName('Ajouter')[0].addEventListener("click", function(){
      if(document.getElementById('titre').value != null && document.getElementById('titre').value != ""){
        if(document.getElementById('code').value != null && document.getElementById('code').value != ""){
          if(document.getElementById('desc1').value != null && document.getElementById('desc1').value != ""){
            if(document.getElementById('desc2').value != null && document.getElementById('desc2').value != ""){
              if(document.getElementById('Images').value != null && document.getElementById('Images').value != ""){
                if(document.getElementById('nombreUnite').textContent != null && document.getElementById('nombreUnite').textContent != ""){
                  let sliding = document.getElementById('animationslidein').style;
                  sliding.animation = "slideAnimationOut 2s ease";
                  sliding.animationFillMode = "forwards";
                  delay(function(){
                    sliding.display = "none";
                    document.getElementById("file").style.visibility = "visible";
                  }, 1500 );
                  // Ce code ici permet de créer dynamiquement les titres sur la page principale
                  let h1Element = document.createElement("h1");
                  let h1Text = document.createTextNode("");
                  h1Element.classList.add("titleH1")
                  h1Element.appendChild(h1Text);
                  document.body.appendChild(h1Element);
                  let h3Element = document.createElement("h3");
                  let h3Text = document.createTextNode("");
                  h3Element.classList.add("titleH3")
                  h3Element.appendChild(h3Text);
                  document.body.appendChild(h3Element);
                  let h41Element = document.createElement("h4");
                  let h41Text = document.createTextNode("");
                  h41Element.classList.add("titleH41")
                  h41Element.appendChild(h41Text);
                  document.body.appendChild(h41Element);
                  let h42Element = document.createElement("h4");
                  let h42Text = document.createTextNode("");
                  h42Element.classList.add("titleH42")
                  h42Element.appendChild(h42Text);
                  document.body.appendChild(h42Element);
                  document.getElementById('units').style.marginTop = "10em";
                  // Effet typewriter pour les titres
                  typewriter(h1Element, document.getElementById("titre").value, 100)
                  .then(() => typewriter(h3Element, document.getElementById("code").value, 250))
                  .then(() => typewriter(h41Element, document.getElementById('desc1').value, 30))
                  .then(() => typewriter(h42Element, document.getElementById('desc2').value, 30));
                // Si une donnée est mal entrée, alors une alerte est envoyée
                }else{
                  window.alert("SVP choisir le nombre d'unités!");
                }
              }else{
                window.alert("SVP ajouter une image de fond!");
              }
            }else{
              window.alert("SVP ajouter vos attentes au cours!");
            }
          }else{
            window.alert("SVP ajouter une description pour le cours!");
          }
        }else{
          window.alert("SVP ajouter une code de cours!");
        }
      }else{
        window.alert("SVP ajouter une titre!");
      }
      });
});
// Le promise ici permet d'utiliser l'effet typewriter afin d'écrire les titres
let timer = ms => new Promise(res => setTimeout(res, ms));

// Fonction pour écrire des textes avec une "animation" (lettre par lettre)
async function typewriter(target, donor, timeDelay){
  for(i=0; i < donor.length; i++) {
    target.textContent += donor.charAt(i);
    await timer(timeDelay);
  }
}

// Une fonction pour executer une fonction apres une délai
delay = ( function() {
  let timer = 0;
  return function(callback, ms) {
      clearTimeout (timer);
      timer = setTimeout(callback, ms);
  };
})();