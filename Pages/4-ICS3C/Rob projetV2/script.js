// Section de slider
const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    // vérifie si l'image est actuellement visible
    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    //affiche le bouton en fonction de la position
    const handleSlideButtons = () => {
        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    };

   
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    };

   
    imageList.addEventListener("scroll", () => {
        updateScrollThumbPosition();
        handleSlideButtons();
    });

    // Associe l'événement de clic aux boutons
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const visibleSlide = direction === -1 ? imageList.querySelector(".slide:first-child") : imageList.querySelector(".slide:last-child");

            // Vérifiez si la diapositive visible est dans la fenêtre
            if (visibleSlide && isElementInViewport(visibleSlide)) {
                // Récupérer le lien associé à la slide visible
                const link = visibleSlide.querySelector('img').getAttribute('data-link');
                
                //Accédez au lien
                window.location.href = link;
            }
        });
    });
};

window.addEventListener("resize", initSlider);
window.addEventListener("load", initSlider);
// Section de slider termine

// Section de boutton
document.getElementById('syllabus').addEventListener('click', function() {
    window.location.replace("https://drive.google.com/file/d/1wi3WWtBL2T8fzH11M0B5Akq9SyS8O1id/view");
  });
// Boutton termine

// Secton de modification de description du cours
  let grand = false;
  document.getElementById('textvid').addEventListener('click', function() {
    const DIVV = this;

    if (!grand) {
      // se concentre sur le div
      DIVV.style.transform = 'scale(2) translate(+20%, +20%)';
    } else {
        DIVV.style.transform = 'translate(-10%, -10%)';
    }
    grand = !grand;
  });
