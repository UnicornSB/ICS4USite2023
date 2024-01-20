const LS = document.querySelector('h1')


function myFunction() {
    var x = document.getElementById("lessons");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
LS.addEventListener('click',myFunction)
