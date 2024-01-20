const LS = document.querySelector('h1') /* Un variable qui accède*/


function R() { /* Une fonction qui câche et montre la variable X qui est connecté à la liste de leçons*/
    var x = document.getElementById("lessons");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
LS.addEventListener('click',R)
